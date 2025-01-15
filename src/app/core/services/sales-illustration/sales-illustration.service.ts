import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, from, of, combineLatest } from 'rxjs';

import { SI_SQL_QUERIES } from '@utils/constants/query/sales-illustration-query';
import { catchError, debounceTime, filter, map } from 'rxjs/operators';
import { STATUS } from '@utils/constants/status/status';
import { MODULE } from '@utils/enums/module';

import { PLANS, PLAN_TITLE } from '@utils/constants/options/product-info/plans';
import { PLAN_TYPE } from '@utils/enums/plan-type';
import { SYNC_STATUS } from '@utils/constants/sync-status';

// services
import { DbService } from '@services/db/db.service';
import { ProcessQueueService } from '@core/services';
import { UtilService } from '@services/util/util.service';
import { QUEUE_PROCESS, QUEUE_STATUS } from '@utils/enums/queue-data';

@Injectable({
  providedIn: 'root'
})
export class SalesIllustrationService {

  constructor(
    private databaseService: DbService,
    private processQueueService: ProcessQueueService,
    private utilService: UtilService,
  ) { }

  getSalesIllustration(whereData: BehaviorSubject<any>): Observable<any> {
    const response: Subject<any> = new Subject();

    whereData.subscribe(wheredata => {
      from(
        wheredata.syncStatus != SYNC_STATUS.ALL ?
          this.getSIBySyncStatus(wheredata) :
          this.databaseService.database.executeSql(SI_SQL_QUERIES.GET_ALL_SI_DATA, [0, 0])
      )
        .pipe(map(result => {
          let salesIllustrations = [];
          if (result.rows && result.rows.length > 0) {
            for (let i = 0; i < result.rows.length; i++) {

              const isCompleted = result.rows.item(i).isCompleted;
              const siStatus = result.rows.item(i).siStatus ? result.rows.item(i).siStatus.toUpperCase() : isCompleted ? STATUS.COMPLETED : STATUS.IN_PROGRESS;
              const isInProgress = siStatus === STATUS.IN_PROGRESS;
              const isSubmitted = ![STATUS.IN_PROGRESS, STATUS.COMPLETED, STATUS.ATTACHED, STATUS.SIGNED].includes(siStatus.toUpperCase());
              const isAttached = siStatus === STATUS.ATTACHED;
              const isSigned = siStatus === STATUS.SIGNED;
              const isExpired = this.utilService.getDayDifference(+result.rows.item(i).dateModified) >= 60 && (isCompleted || isAttached);
              const status = isInProgress ? STATUS.IN_PROGRESS : isAttached ? STATUS.ATTACHED : isSigned ? STATUS.SIGNED : isSubmitted ? STATUS.SUBMITTED : isCompleted ? STATUS.COMPLETED : isExpired ? STATUS.EXPIRED : siStatus;

              salesIllustrations[i] = Object.assign({},
                result.rows.item(i), {
                id: result.rows.item(i).siId,
                personId: result.rows.item(i).personId,
                product: PLAN_TITLE[result.rows.item(i).planCode],
                type: MODULE.SI,
                status: status,
                dateCreated: this.utilService.formatCardDate(result.rows.item(i).dateCreated),
                planType: (result.rows.item(i).isTraditional) ? PLAN_TYPE.TRAD : PLAN_TYPE.UL,
                lastUpdated: this.utilService.formatCardDate(result.rows.item(i).dateModified),
                isDisabled: false
              });
            }
          }
          salesIllustrations = wheredata.keyword !== '' ? this.utilService.search(wheredata.keyword, salesIllustrations) : salesIllustrations;
          return salesIllustrations;
        })
        )
        .subscribe(si => {
          response.next(si);
        });
    })
    return response.asObservable();
  }

  GET_LEADID_BY_SYNC_STATUS = `select siMain.leadId  FROM SI_MAIN siMain
  INNER JOIN SI_PERSONS siPerson
  ON siMain.siId = siPerson.siId
  WHERE siMain.isDeleted = 0 
  AND siPerson.personType = 0 
  AND siMain.syncStatus in (0,69,619)`;
  getSIStatus(updateData: BehaviorSubject<any>): Observable<any> {
    const response: Subject<any> = new Subject();
    updateData.subscribe(_ => {
   combineLatest([
    from(this.databaseService.database.executeSql(SI_SQL_QUERIES.GET_SI_SYNC_COUNT, [])),
    from(this.databaseService.database.executeSql(this.GET_LEADID_BY_SYNC_STATUS, []))
    ]).pipe(map(([data, result]) => { return [data.rows.item(0), result] })
    ).subscribe(async ([siCount, result]) => {
      if (result.rows && result.rows.length > 0) {
        for (let i = 0; i < result.rows.length; i++) {
          await this.processQueueService.addToQueue({
            id: result.rows.item(i).leadId,
            status: QUEUE_STATUS.PENDING,
            process: QUEUE_PROCESS.SYNC
          });
          }
        }
        response.next(siCount);
      })
    })
    return response.asObservable();
  }

  async getSIBySyncStatus(whereData?: any): Promise<any> {
    return new Promise(async (resolve) => {
    let salesIllustrationData;

    if (whereData.syncStatus == SYNC_STATUS.SYNC_FAIL_99) {
      salesIllustrationData = await this.databaseService.database.executeSql(SI_SQL_QUERIES.GET_SI_BY_SYNC_STATUS, [0, 0, 69, 99, 619]);
    } else {
      salesIllustrationData = await this.databaseService.database.executeSql(SI_SQL_QUERIES.GET_SI_BY_SYNC_STATUS, [0, 0, whereData.syncStatus]);
    }
    resolve(salesIllustrationData);
    });
  }
  

  async getAllSIRelatedtables(siId: string) {


    const query = `
        SELECT SI_MAIN.*,
        (
        SELECT  
            json_object( 
            'siId', siId, 
            'age', age,
            'policyYear', policyYear,
            'topUpAmt', topUpAmt,
            'withdrawalAmt', withdrawalAmt 
            )  
        FROM SI_TOPUP 
        where SI_TOPUP.siID = SI_MAIN.siId
        )as "SI_TOPUP",
        (
        SELECT  
        json_group_array(
            json_object( 
            'siId', siId, 
            'riderKey', riderKey,
            'riskClassCode', riskClassCode,
            'riskClassVersion', riskClassVersion,
            'riderVersion', riderVersion,
            'riderCode', riderCode, 
            'multipleExtra', multipleExtra,
            'sumAssured', sumAssured
            )
        )  
        FROM SI_RIDERS 
        where SI_RIDERS.siID = SI_MAIN.siId
        )as "SI_RIDERS",
        (
        SELECT  
        json_group_array(
            json_object( 
            'siId', siId, 
            'fundKey', fundKey,
            'fundDirection', fundDirection,
            'fundVersion', fundVersion
            )
        )  
        FROM SI_FUNDS 
        where SI_FUNDS.siID = SI_MAIN.siId
        )as "SI_FUNDS",
        (
        SELECT  
        json_group_array(
            json_object( 
            'personId',personId,
            'siId', siId,
            'personType', personType,
            'firstName',firstName,
            'middleName', middleName, 
            'lastName', lastName,
            'dateOfBirth', dateOfBirth,
            'gender', gender,
            'occupationCode',occupationCode,
            'occupationGrpCode', occupationGrpCode, 
            'occupationTitle', occupationTitle,
            'vesselType', vesselType,
            'homeUnitBuilding', homeUnitBuilding, 
            'homeLotBlock', homeLotBlock,
            'homeStreet', homeStreet,
            'homeBarangay', homeBarangay,
            'homeCountryCode',homeCountryCode,
            'homeProvinceCode', homeProvinceCode, 
            'homeCityCode', homeCityCode,
            'homeZipCode', homeZipCode,
            'workUnitBuilding', workUnitBuilding,
            'workLotBlock', workLotBlock,
            'workStreet', workStreet,
            'workBarangay', workBarangay,
            'workCountryCode', workCountryCode,
            'workProvinceCode', workProvinceCode,
            'workCityCode', workCityCode,
            'workZipCode', workZipCode,
            'serverId', serverId
            )
        )  
        FROM SI_PERSONS 
        where SI_PERSONS.siID = SI_MAIN.siId
        )as "SI_PERSONS"

        FROM SI_MAIN
        WHERE SI_MAIN.siId = ?`;

        
    const results = await this.databaseService.database.executeSql(query, [siId]);
    return (results.rows && results.rows.length > 0) ? results.rows.item(0) : null;

  }

}