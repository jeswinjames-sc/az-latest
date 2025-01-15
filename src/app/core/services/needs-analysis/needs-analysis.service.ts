import { Injectable } from '@angular/core';
import { SQL_QUERIES } from '@utils/constants/query/sql-queries';
import { STATUS } from '@utils/constants/status/status';
import { SYNC_STATUS } from '@utils/constants/sync-status';
import { MODULE } from '@utils/enums/module';
import { from, Observable, of, BehaviorSubject, Subject, combineLatest } from 'rxjs';
import { catchError, debounceTime, map } from 'rxjs/operators';

// Services
import { DbService } from '@services/db/db.service';
import { ProcessQueueService } from '@core/services';
import { UtilService } from '@services/util/util.service';
import { QUEUE_PROCESS, QUEUE_STATUS } from '@utils/enums/queue-data';
import { NeedAnalysisRequest } from '@models/need-analysis-sync-request/need-analysis-sync-request';
import { LOGTYPE } from '@utils/constants/utils';
import { NeedAnalysisRequestRelatedLead } from '@models/need-analysis-sync-request/need-analysis-request-related-lead';
import { FnaMapperService } from '@services/fna-mapper/fna-mapper';
import { NeedsAnalysisDbService } from '@services/db/needs-analysis/needs-analysis-db.service';
import { LeadsDbService } from '@services/db/leads/leads-db.service';
import { NeedAnalaysisSyncRequest } from '@models/need-analysis-sync-request/need-analysis-sync';
import { NeedAnalysisSyncRequestData } from '@models/need-analysis-sync-request/need-analysis-request-data';
import { SyncValidationsService } from '../sync/sync-validations/sync-validations.service';

@Injectable({
  providedIn: 'root'
})
export class NeedsAnalysisService {

  constructor(
    private databaseService: DbService,
    private processQueueService: ProcessQueueService,
    private utilService: UtilService,
    private fnaMapper: FnaMapperService,
    private needsAnalysisDbService: NeedsAnalysisDbService,
    private leadsDbService: LeadsDbService,
    private syncValidationsService: SyncValidationsService
    ) { }


  getAllNeedAnalysis(): Observable<any> {

    return from(this.databaseService.database.executeSql(SQL_QUERIES.GET_ALL_FNA_DATA, [0, 0])
    )
      .pipe(map(results => {
        let needs = [];
        if (results.rows && results.rows.length > 0) {

          for (let i = 0; i < results.rows.length; i++) {

            const naId = results.rows.item(i).naId;
            const fnaNeedType = results.rows.item(i).needType;
            const fnaStatus = results.rows.item(i).fnaStatus;
            const isWaived = results.rows.item(i).isWaived;
            const isCompleted = results.rows.item(i).isCompleted;
            const status = isWaived === 1 && isCompleted === 1 ? STATUS.WAIVED : fnaStatus;
            const isDisabled = status === STATUS.SIGNED ||
              status === STATUS.ATTACHED || status === STATUS.SUBMITTED;
            needs[i] = Object.assign({},
              results.rows.item(i), {
              id: naId,
              needType: fnaNeedType,
              status: fnaStatus,
              type: MODULE.NA,
              dateCreated: this.utilService.formatCardDate(results.rows.item(i).dateCreated),
              lastUpdated: this.utilService.formatCardDate(results.rows.item(i).dateModified),
              isDisabled
            });
          }
        }
        return needs;

      }, catchError(error => of(`Bad Promise: ${error}`)))
      )
  }

  getNeedAnalysis(whereData: BehaviorSubject<any>): Observable<any> {
    const response: Subject<any> = new Subject();

    whereData.subscribe(data => {
      from(
        data.syncStatus != SYNC_STATUS.ALL ?
          this.getAllFnaBySyncStatus(data):
          this.databaseService.database.executeSql(SQL_QUERIES.GET_ALL_FNA_DATA, [0, 0])
      ).pipe(
        map(results => {
          let needAnalysis = [];
          if (results.rows && results.rows.length > 0) {
            for (let i = 0; i < results.rows.length; i++) {
              const fnaStatus = results.rows.item(i).fnaStatus;
              const isWaived = results.rows.item(i).isWaived;
              const isCompleted = results.rows.item(i).isCompleted;
              const status = isWaived === 1 && isCompleted === 1 ? STATUS.WAIVED : fnaStatus;
              const isDisabled = status === STATUS.SIGNED ||
                status === STATUS.ATTACHED || status === STATUS.SUBMITTED;
              needAnalysis[i] = Object.assign({},
                results.rows.item(i), {
                id: results.rows.item(i).naId,
                needType: results.rows.item(i).needType,
                status: results.rows.item(i).fnaStatus,
                type: MODULE.NA,
                dateCreated: this.utilService.formatCardDate(results.rows.item(i).dateCreated),
                lastUpdated: this.utilService.formatCardDate(results.rows.item(i).dateModified),
                isDisabled
              });
            }
            needAnalysis = data.keyword !== '' ? this.utilService.search(data.keyword, needAnalysis) : needAnalysis;
          }

          return needAnalysis.sort((a, b) => a.dateModified - b.dateModified);
        })
      )
        .subscribe(needAnalysis => {
          response.next(needAnalysis);
        });
    })
    return response.asObservable();
  }

  GET_LEADID_BY_SYNC_STATUS = `select leadId from FNA_MAIN where syncStatus in (0,69,619)`;

  getNeedAnalysisStatus(updateData: BehaviorSubject<any>): Observable<any> {
    const response: Subject<any> = new Subject();
    updateData.subscribe(_ => {
   combineLatest([
    from(this.databaseService.database.executeSql(SQL_QUERIES.GET_COUNT_FNA_SYNC_DATA, [])),
    from(this.databaseService.database.executeSql(this.GET_LEADID_BY_SYNC_STATUS, []))
    ]).pipe(map(([data, result]) => { return [data.rows.item(0), result] })
    ).subscribe(async ([fnaCount, result]) => {
      if (result.rows && result.rows.length > 0) {
        for (let i = 0; i < result.rows.length; i++) {
         await this.processQueueService.addToQueue({
            id: result.rows.item(i).leadId,
            status: QUEUE_STATUS.PENDING,
            process: QUEUE_PROCESS.SYNC
          })
        }
      }
        response.next(fnaCount);
      })
    })
    return response.asObservable();
  }

  onInitNAResync(): Observable<any> {
    const response: Subject<any> = new Subject();
   combineLatest([
    from(this.databaseService.database.executeSql(SQL_QUERIES.GET_COUNT_FNA_SYNC_DATA, [])),
    from(this.databaseService.database.executeSql(this.GET_LEADID_BY_SYNC_STATUS, []))
    ]).pipe(map(([data, result]) => { return [data.rows.item(0), result] })
    ).subscribe(async ([fnaCount, result]) => {
      if (result.rows && result.rows.length > 0) {
        for (let i = 0; i < result.rows.length; i++) {
          await this.processQueueService.manualProcess({
            id: result.rows.item(i).leadId,
            status: QUEUE_STATUS.PENDING,
            process: QUEUE_PROCESS.SYNC
          });
          }
        }
        response.next(fnaCount);
      })
    return response.asObservable();
  }

  async getAllFnaBySyncStatus(whereData?: any): Promise<any> {
    return new Promise(async (resolve) => {
    let needAnalysisData;

    if (whereData.syncStatus == SYNC_STATUS.SYNC_FAIL_99) {
      needAnalysisData = await this.databaseService.database.executeSql(SQL_QUERIES.GET_ALL_FNA_DATA_BY_SYNC_STATUS, [99, 619, 69])
    } else {
      needAnalysisData = await this.databaseService.database.executeSql(SQL_QUERIES.GET_ALL_FNA_DATA_BY_SYNC_STATUS, [whereData.syncStatus])
    }
    resolve(needAnalysisData);
    });
  }

  async needAnalysisValidation(naId?: any): Promise<any> {
    return new Promise(async (resolve) => {
      let response;
      const needAnalysisDB = await this.needsAnalysisDbService.getFnaById(naId);

      var request: NeedAnalysisRequest;
      var needAnalysis: NeedAnalaysisSyncRequest;
      var listOfNA: NeedAnalaysisSyncRequest[] = [];
      if (needAnalysisDB != null && needAnalysisDB.length > 0) {
        for (let i = 0; i < needAnalysisDB.length; i++) {
          needAnalysis = new NeedAnalaysisSyncRequest();
          needAnalysis.clientLeadRefId = needAnalysisDB[i].leadId;
          needAnalysis.clientRefId = needAnalysisDB[i].naId;
          try {
            if (needAnalysisDB[i].dateModified != null) {
              needAnalysis.lastUpdateDate = this.utilService.syncConvertDate(needAnalysisDB[i].dateModified);
            }
            if (needAnalysisDB[i].dateCreated != null) {
              needAnalysis.createdDate = this.utilService.syncConvertDate(needAnalysisDB[i].dateCreated);
            }
          } catch (error) {
            needAnalysis.lastUpdateDate = needAnalysisDB[i].dateModified;
            needAnalysis.createdDate = needAnalysisDB[i].dateCreated;
          }

          needAnalysis.isDeleted = needAnalysisDB[i].isDeleted === 1;

          needAnalysis.data = new NeedAnalysisSyncRequestData();
          if (needAnalysisDB[i].serverId != '0') {
            needAnalysis.data.self = needAnalysisDB[i].serverId;
          }
          needAnalysis.data.status = needAnalysisDB[i].fnaStatus;
          needAnalysis.data.goalType = needAnalysisDB[i].goalType;
          needAnalysis.data.isWaived = needAnalysisDB[i].isWaived === 1;
          needAnalysis.data.type = needAnalysisDB[i].needType;
          needAnalysis.data.needsVariables = await this.fnaMapper.buildNeedsVariable(needAnalysisDB[i].needType, needAnalysisDB[i].naId);

          //LEAD
          let lead = await this.leadsDbService.getExistingLeadById(needAnalysisDB[i].leadId);
          //this.utilService.logger(LOGTYPE.dbRetrieve, `GET attached lead : ${JSON.stringify(lead)}`)

          if (lead != null) {
            needAnalysis.data.relatedLead = new NeedAnalysisRequestRelatedLead();
            needAnalysis.data.relatedLead.self = lead.serverId;
          }

          listOfNA.push(needAnalysis);
        }
        request = new NeedAnalysisRequest();
        request.needanalyses = await this.utilService.sortByIsDeleted(listOfNA);
        response = await this.syncValidationsService.nASyncValidation(needAnalysis);
        //console.log("RESPONSE OF SYNC VALIDATION: " + JSON.stringify(response));
      }

      resolve(response);
    });
  }

   /**
   * Get Need Analysis by FNA ID
   * @param naId
   * @author Edric Valdez
   */
  async getNeedAnalysisById(naId?: any): Promise<any> {
    return new Promise(async (resolve) => {
    let needAnalysisData;

    await this.databaseService.database
      .executeSql(SQL_QUERIES.GET_ALL_FNA_BY_ID, [naId]).then(async result => {
        if (result.rows && result.rows.length > 0) {
          needAnalysisData = result.rows.item(0);
        }
      });
    
    resolve(needAnalysisData);
    });

  }

  async getNAServerIDbyNAID(naId?: any): Promise<any> {
    return new Promise(async (resolve) => {
    let needAnalysisData;

    await this.databaseService.database
      .executeSql(SQL_QUERIES.GET_FNA_SERVERID_BY_ID, [naId]).then(async result => {
        if (result.rows && result.rows.length > 0) {
          needAnalysisData = result.rows.item(0);
        }
      });
    
    resolve(needAnalysisData);
    });

  }

  async isNaSync(naId:string) {
    if(naId) {
      const unsyncNA = await this.needsAnalysisDbService.getFnaById(naId);
      if(unsyncNA.length > 0) {
        return unsyncNA[0].syncStatus == SYNC_STATUS.SYNC_SUCCESS_2 ? true : false;
      }
    }
    return false;
  }

  async getAllFNARelatedtables(naId: string) {

    const query = `
    SELECT *, 
    (select json_object(
            'naId', naId,
            'savingsGoal', savingsGoal,
            'goalCost', goalCost,
            'yearsToAchieveGoal', yearsToAchieveGoal,
            'currentSavings', currentSavings
    ) from FNA_S where FNA_S.naId = FNA_Main.naId) as 'FNA_S',

    (select json_object(
            'naId', naId,
            'monthlyIncome', monthlyIncome,
            'yearsToAchieveGoal', yearsToAchieveGoal,
            'currentSavings', currentSavings
    ) from FNA_P where FNA_P.naId = FNA_Main.naId) as 'FNA_P',

    (select json_object(
            'naId', naId,
            'goalCost', goalCost,
            'currentSavings', currentSavings
    ) from FNA_H where FNA_H.naId = FNA_Main.naId) as 'FNA_H',

    (select json_object(
            'naId', naId,
            'childAge', childAge,
            'schoolType', schoolType,
            'annualTutionFee', annualTutionFee,
            'currentSavings', currentSavings
    ) from FNA_E where FNA_E.naId = FNA_Main.naId) as 'FNA_E',

    (select json_object(
            'naId', naId,
            'age', age,
            'monthlyExpenses', monthlyExpenses,
            'yearsUntilRetirement', yearsUntilRetirement,
            'retirementYears', retirementYears,
            'currentSavings', currentSavings
    ) from FNA_R where FNA_R.naId = FNA_Main.naId) as 'FNA_R',

    (select json_object(
            'naId', naId,
            'currentSavings', currentSavings,
            'realEstateValue', realEstateValue,
            'investmentBondStocks', investmentBondStocks,
            'otherAssets', otherAssets
    ) from FNA_Ep where FNA_Ep.naId = FNA_Main.naId) as 'FNA_Ep'

    FROM FNA_Main  where FNA_Main.naId = ? `;

    const results = await this.databaseService.database.executeSql(query, [naId]);
    return (results.rows && results.rows.length > 0) ? results.rows.item(0) : null;

  }
}
