import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, from, of, combineLatest } from 'rxjs';

// sql
import { SQL_QUERIES } from '@utils/constants/query/sql-queries';
import { catchError, debounceTime, filter, map } from 'rxjs/operators';
import { STATUS } from '@utils/constants/status/status';
import { MODULE } from '@utils/enums/module';
import { merge } from 'lodash';
import { BaseCardInfo } from '@models/base-card-info';
import { SYNC_STATUS } from '@utils/constants/sync-status';

// services
import { DbService } from '@services/db/db.service';
import { ProcessQueueService } from '@core/services';
import { UtilService } from '@services/util/util.service';
import { QUEUE_PROCESS, QUEUE_STATUS } from '@utils/enums/queue-data';
import { GI, GI1, GI2, GI3, GI4, IRPQData, IRPQSyncNeedAnalysisArray, IRPQSyncRequest, IRPQSyncRequestArray, PI, PI1, PI2, PI3, PI4, PI5, PI6, PI7, PI8, prospectiveInvestor, questionsObject } from '@models/irpq';
import { LeadsDbService } from '@services/db/leads/leads-db.service';
import { NeedsAnalysisDbService } from '@services/db/needs-analysis/needs-analysis-db.service';
import { IrpqDbService } from '@services/db/irpq/irpq-db.service';
import { LOGTYPE } from '@utils/constants/utils';
import { SyncValidationsService } from '../sync/sync-validations/sync-validations.service';

@Injectable({
	providedIn: 'root'
})
export class IrpqService {

	constructor(
		private databaseService: DbService,
		private processQueueService: ProcessQueueService,
		private utilService: UtilService,
		private needsAnalysisDbService: NeedsAnalysisDbService,
		private leadsDbService: LeadsDbService,
		private irpqDbService: IrpqDbService,
    private syncValidationsService: SyncValidationsService
	) { }

	getIrpqBySyncStatus(whereData: BehaviorSubject<any>): Observable<any> {
		const response: Subject<any> = new Subject();

		whereData.subscribe(data => {
			from(
				data.syncStatus != SYNC_STATUS.ALL ?
					this.getAllIrpqBySyncStatus(data) :
					this.databaseService.database.executeSql(SQL_QUERIES.GET_ALL_LIST_IRPQ, [0])
			).pipe(
				map(result => {
					let irpqs: BaseCardInfo[] = [];
					if (result.rows && result.rows.length > 0) {
						for (let i = 0; i < result.rows.length; i++) {
							let isSubmitted = ![STATUS.IN_PROGRESS, STATUS.COMPLETED, STATUS.ATTACHED, STATUS.SIGNED].includes(result.rows.item(i).irpqStatus.toUpperCase()),
							irpqStatus = isSubmitted ? STATUS.SUBMITTED : result.rows.item(i).irpqStatus.toUpperCase()

							let irpqRow = Object.assign({},
								result.rows.item(i), {
								id: result.rows.item(i).irpqId,
								type: MODULE.IRPQ,
								status: irpqStatus,
								dateCreated: this.utilService.formatCardDate(result.rows.item(i).dateCreated),
								lastUpdated: this.utilService.formatCardDate(result.rows.item(i).dateModified)
							});
							irpqs.push(irpqRow);
						}
					}
					irpqs = !!data.keyword ? this.utilService.search(data.keyword, irpqs) : irpqs;
					return irpqs;
				})
			)
				.subscribe(irpq => {
					response.next(irpq);
				});
		})
		return response.asObservable();
	}

	GET_LEADID_BY_SYNC_STATUS = `select leadId from IRPQ where syncStatus in (0,69,619)`;
	getIrpqStatus(updateData: BehaviorSubject<any>): Observable<any> {
		const response: Subject<any> = new Subject();
		updateData.subscribe(_ => {
			combineLatest([
				from(this.databaseService.database.executeSql(SQL_QUERIES.GET_IRPQ_SYNCSTATUS, [])),
				from(this.databaseService.database.executeSql(this.GET_LEADID_BY_SYNC_STATUS, []))
			]).pipe(map(([data, result]) => { return [data.rows.item(0), result] })
			).subscribe(async ([irpqCount, result]) => {
				if (result.rows && result.rows.length > 0) {
					for (let i = 0; i < result.rows.length; i++) {
						await this.processQueueService.addToQueue({
							id: result.rows.item(i).leadId,
							status: QUEUE_STATUS.PENDING,
							process: QUEUE_PROCESS.SYNC
						});
					}     /// saving to localstorage
				}
				response.next(irpqCount);
			})
		})
		return response.asObservable();
	}

	async getAllIrpqBySyncStatus(whereData?: any): Promise<any> {
		return new Promise(async (resolve) => {
			let irpqData;

			if (whereData.syncStatus == SYNC_STATUS.SYNC_FAIL_99) {
				irpqData = await this.databaseService.database.executeSql(SQL_QUERIES.GET_ALL_LIST_IRPQ_BY_SYNC_STATUS, [0, 99, 69, 619]);
			} else {
				irpqData = await this.databaseService.database.executeSql(SQL_QUERIES.GET_ALL_LIST_IRPQ_BY_SYNC_STATUS, [0, whereData.syncStatus]);
			}
			resolve(irpqData);
		});
	}

  async irpqSyncValidation(irpqId: any): Promise<any> {
    return new Promise(async (resolve) => {
	  let response
    const irpqFromApp = await this.getIrpqByID(irpqId);

      if (irpqFromApp.length > 0) {
        var request: IRPQSyncRequest;
        var irpq: IRPQSyncRequestArray;
        var irpqs: IRPQSyncRequestArray[] = [];

        for (let i = 0; i < irpqFromApp.length; i++) {
          //IRPQ Parent
          irpq = new IRPQSyncRequestArray();
          irpq.clientRefId = irpqFromApp[i].irpqId;
          irpq.clientLeadRefId = irpqFromApp[i].leadId;
          irpq.isDeleted = irpqFromApp[i].isDeleted === 1;

          if (irpqFromApp[i].dateModified != null) {
            irpq.lastUpdateDate = this.utilService.syncConvertDate(irpqFromApp[i].dateModified);
          }
          if (irpqFromApp[i].dateCreated != null) {
            irpq.createdDate = this.utilService.syncConvertDate(irpqFromApp[i].dateCreated);
          }

          // Data level
          irpq.data = new IRPQData();
          if (irpqFromApp[i].serverId != '0') {
            irpq.data.self = irpqFromApp[i].serverId;
          }
          const si: any = await this.irpqDbService.getSIByIrpqId(irpqFromApp[i].irpqId);
          if (si && si.length != 0) {
            if (si[0].isDeleted == 0) {
              irpq.data.status = STATUS.ATTACHED;
            }
          } else {
            irpq.data.status = irpqFromApp[i].isCompleted == 1 ? STATUS.COMPLETED : STATUS.IN_PROGRESS
          }

          irpq.data.riskAppetiteScore = this.utilService.getIRPQResult(irpqFromApp[i]).totalScore;

          // Prospective Investor
          irpq.data.prospectiveInvestor = new prospectiveInvestor();
          let leadServerId: any;
          if (irpqFromApp[i].leadServerId == null) {
            const lead = await this.leadsDbService.getExistingLeadById(irpqFromApp[i].leadId);
            //this.utilService.logger(LOGTYPE.dbRetrieve, `GET attached lead: ${JSON.stringify(lead)}`)
            leadServerId = lead.serverId;
          } else {
            leadServerId = irpqFromApp[i].leadServerId;
          }
          irpq.data.prospectiveInvestor.self = leadServerId;

          // FNA
          irpq.data.needAnalysis = new IRPQSyncNeedAnalysisArray()
          let naServerId: any;
          if (irpqFromApp[i].naServerId == null) {
            const fna = await this.needsAnalysisDbService.getFNADetailsByID(irpqFromApp[i].naId);
            //this.utilService.logger(LOGTYPE.dbRetrieve, `GET attached fna: ${JSON.stringify(fna)}`)
            naServerId = fna.serverId;
          } else {
            naServerId = irpqFromApp[i].naServerId;
          }
          irpq.data.needAnalysis.self = naServerId;

          // General Info GI1 - GI3
          irpq.data.questions = new questionsObject();
          irpq.data.questions.GI = new GI();
          irpq.data.questions.GI.GI1 = new GI1();
          irpq.data.questions.GI.GI2 = new GI2();
          irpq.data.questions.GI.GI3 = new GI3();
          irpq.data.questions.GI.GI4 = new GI4();

          if (irpqFromApp[i].approxNetWorth != null) {
            irpq.data.questions.GI.GI1[irpqFromApp[i].approxNetWorth] = true;
          }

          if (irpqFromApp[i].approxAnnualIncome != null) {
            irpq.data.questions.GI.GI2[irpqFromApp[i].approxAnnualIncome] = true;
          }
          if (irpqFromApp[i].mostImportantObjective == "GI3_A7") { //GI3_A7
            irpq.data.questions.GI.GI3[irpqFromApp[i].mostImportantObjective] = true;
            irpq.data.questions.GI.GI3.GI3_00 = irpqFromApp[i].mostImportantObjectiveOthers
          }
          else {
            irpq.data.questions.GI.GI3[irpqFromApp[i].mostImportantObjective] = true;
          }

          // General Info - GI4
          if (irpqFromApp[i].hasInsurance != null) {
            irpq.data.questions.GI.GI4[irpqFromApp[i].hasInsurance] = true;
          }
          if (irpqFromApp[i].hasTimeDeposit != null) {
            irpq.data.questions.GI.GI4[irpqFromApp[i].hasTimeDeposit] = true;
          }
          if (irpqFromApp[i].hasGovtSecurities != null) {
            irpq.data.questions.GI.GI4[irpqFromApp[i].hasGovtSecurities] = true;
          }
          if (irpqFromApp[i].hasCorpoBond != null) {
            irpq.data.questions.GI.GI4[irpqFromApp[i].hasCorpoBond] = true;
          }
          if (irpqFromApp[i].hasDerivatives != null) {
            irpq.data.questions.GI.GI4[irpqFromApp[i].hasDerivatives] = true;
          }
          if (irpqFromApp[i].hasRealEstate != null) {
            irpq.data.questions.GI.GI4[irpqFromApp[i].hasRealEstate] = true;
          }
          if (irpqFromApp[i].hasBusiness != null) {
            irpq.data.questions.GI.GI4[irpqFromApp[i].hasBusiness] = true;
          }

          // Profile Question
          irpq.data.questions.PI = new PI()
          irpq.data.questions.PI.PI1 = new PI1()
          irpq.data.questions.PI.PI2 = new PI2()
          irpq.data.questions.PI.PI3 = new PI3()
          irpq.data.questions.PI.PI4 = new PI4()
          irpq.data.questions.PI.PI5 = new PI5()
          irpq.data.questions.PI.PI6 = new PI6()
          irpq.data.questions.PI.PI7 = new PI7()
          irpq.data.questions.PI.PI8 = new PI8()

          if (irpqFromApp[i].pqAns1 != null) {
            irpq.data.questions.PI.PI1[irpqFromApp[i].pqAns1] = true
          }
          if (irpqFromApp[i].pqAns2 != null) {
            irpq.data.questions.PI.PI2[irpqFromApp[i].pqAns2] = true
          }
          if (irpqFromApp[i].pqAns3 != null) {
            irpq.data.questions.PI.PI3[irpqFromApp[i].pqAns3] = true
          }
          if (irpqFromApp[i].pqAns4 != null) {
            irpq.data.questions.PI.PI4[irpqFromApp[i].pqAns4] = true
          }
          if (irpqFromApp[i].pqAns5 != null) {
            irpq.data.questions.PI.PI5[irpqFromApp[i].pqAns5] = true
          }
          if (irpqFromApp[i].pqAns6 != null) {
            irpq.data.questions.PI.PI6[irpqFromApp[i].pqAns6] = true
          }
          if (irpqFromApp[i].pqAns7 != null) {
            irpq.data.questions.PI.PI7[irpqFromApp[i].pqAns7] = true
          }
          if (irpqFromApp[i].pqAns8 != null) {
            irpq.data.questions.PI.PI8[irpqFromApp[i].pqAns8] = true
          }

          irpqs.push(irpq);
        }

        request = new IRPQSyncRequest();
        request.investmentProfiles = await this.utilService.sortByIsDeleted(irpqs);
        response = await this.syncValidationsService.iRPQSyncValidation(irpq);
        //console.log("REQUEST FOR IRPQ: " + JSON.stringify(request));
        //console.log("RESPONSE OF SYNC VALIDATION: " + JSON.stringify(response));
      }

      resolve(response);
    });
  }

  
  async getIrpqByID(irpqId: string): Promise<any> {
    let irpqData:any[] = [];
    return this.databaseService.database.executeSql(SQL_QUERIES.GET_IRPQ_BY_ID, [irpqId]).then(response => {
      if (response.rows && response.rows.length > 0) {
        irpqData.push(response.rows.item(0));
      }
      return irpqData;
    }).catch(error => {
      throw error;
    });
  }
}


