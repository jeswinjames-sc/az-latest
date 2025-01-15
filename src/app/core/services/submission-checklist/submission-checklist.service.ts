import { Injectable } from '@angular/core';
import { DbService } from '@services/db/db.service';
import { BehaviorSubject, Observable, Subject, from, of } from 'rxjs';
import { catchError, debounceTime, filter, map } from 'rxjs/operators';
import { SQL_QUERIES } from '@utils/constants/query/sql-queries';
import { STATUS } from '@utils/constants/status/status';
import { SI_PERSON_TYPE } from '@utils/constants/si_person_type';
import { MODULE } from '@utils/enums/module';
import { BaseCardInfo } from '@models/base-card-info';
import { UtilService } from '@services/util/util.service';
import { SYNC_STATUS } from '@utils/constants/sync-status';
import { CONSTANT_DB_TABLE } from '@utils/constants/constant-table-name';

@Injectable({
	providedIn: 'root'
})
export class SubmissionChecklistService {

	public globalSubmissionChecklistBridge$: BehaviorSubject<any> = new BehaviorSubject({});

	constructor(
		private databaseService: DbService,
		private utilService: UtilService
	) { }

	getSubmissionChecklistsBySyncStatus(whereData: BehaviorSubject<any>): Observable<any> {
		const response: Subject<any> = new Subject();

		whereData.subscribe(data => {
			from(
				data.syncStatus != SYNC_STATUS.ALL ?
					this.getChecklistBySyncStatus(data) :
					this.databaseService.database
						.executeSql(SQL_QUERIES.GET_ALL_SUBMISSIONS, [0, SI_PERSON_TYPE.AO, STATUS.IN_PROGRESS, STATUS.COMPLETED])
			).pipe(
				map(result => {
					let submissions: BaseCardInfo[] = [];
					let resultObj = this.utilService.createObjectArrFromDBData(result);
					let sortedResultObj = this.utilService.sortDataByDate(resultObj);
					sortedResultObj.forEach(submissionChecklist => {
						submissions.push(
							{
								id: submissionChecklist.eappId,
								leadId: submissionChecklist.leadId,
								eappId: submissionChecklist.eappId,
								type: MODULE.SUBMISSION_CHECKLIST,
								firstName: submissionChecklist.firstName,
								middleName: submissionChecklist.middleName,
								lastName: submissionChecklist.lastName,
								status: submissionChecklist.eappStatus.toUpperCase(),
								submissionSyncStatus: submissionChecklist.syncStatus,
								syncStatus: submissionChecklist.syncStatus,
								applicationNumber: submissionChecklist.applicationNumber,
								attachedDate: submissionChecklist.attachedDate,
								policyNumber: submissionChecklist.policyNumber || 'not yet generated',
								dateCreated: this.utilService.formatCardDate(submissionChecklist.dateCreated),
								lastUpdated: this.utilService.formatCardDate(submissionChecklist.dateModified),
								lastUpdatedVal: submissionChecklist.dateModified,
								isDisabled: true,
								generatedOnline: submissionChecklist.generatedOnline
							}
						)
					});
					submissions = !!data.keyword ? this.utilService.search(data.keyword, submissions) : submissions;
					submissions = [...submissions].sort((a, b) => b.lastUpdatedVal - a.lastUpdatedVal); // JS level sorting
					return submissions;
				})
			)
				.subscribe(checklist => {
					response.next(checklist);
				});
		})
		return response.asObservable();
	}

	getSubmissionChecklistStatus(updateData: BehaviorSubject<any>): Observable<any> {
		const response: Subject<any> = new Subject();
		updateData.subscribe(_ => {
			from(this.databaseService.database.executeSql(SQL_QUERIES.GET_ALL_SUBMISSIONS, [0, SI_PERSON_TYPE.AO, STATUS.IN_PROGRESS, STATUS.COMPLETED]))
				.pipe(map(data => {
					let resultObj = this.utilService.createObjectArrFromDBData(data);
					let sortedResultObj = {
						all: resultObj.length,
						error: 0,
						live: 0,
						offline: 0
					}
					for(let i = 0; i < resultObj.length; i++) {
						if(resultObj[i].syncStatus == 2) {
							sortedResultObj.live++
						} else if(resultObj[i].syncStatus == 0) {
							sortedResultObj.offline++
						} else if(resultObj[i].syncStatus == 99 || resultObj[i].syncStatus == 619 || resultObj[i].syncStatus == 69) {
							sortedResultObj.error++
						}
					}

					return sortedResultObj;
				}))
				.subscribe(checklistCount => {					
					response.next(checklistCount)
				})
		})
		return response.asObservable();
	}

	async getChecklistBySyncStatus(data?: any): Promise<any> {
		return new Promise(async (resolve) => {
			let checklistData;

			if (data.syncStatus == SYNC_STATUS.SYNC_FAIL_99) {
				checklistData = await this.databaseService.database.executeSql(SQL_QUERIES.GET_ALL_SUBMISSIONS_BY_SYNCSTATUS, [0, SI_PERSON_TYPE.AO, STATUS.IN_PROGRESS, STATUS.COMPLETED, 99, 69, 619]);
			} else {
				checklistData = await this.databaseService.database
					.executeSql(SQL_QUERIES.GET_ALL_SUBMISSIONS_BY_SYNCSTATUS, [0, SI_PERSON_TYPE.AO, STATUS.IN_PROGRESS, STATUS.COMPLETED, data.syncStatus]);
			}
			resolve(checklistData);
		});
	}

}
