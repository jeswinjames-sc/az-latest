import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject, from, of, combineLatest } from 'rxjs';

// sql
import { SQL_QUERIES } from '@utils/constants/query/sql-queries';
import { catchError, debounceTime, filter, map } from 'rxjs/operators';
import { STATUS } from '@utils/constants/status/status';
import { MODULE } from '@utils/enums/module';
import { merge } from 'lodash';
import { SYNC_STATUS } from '@utils/constants/sync-status';

// services
import { DbService } from '@services/db/db.service';
import { ProcessQueueService } from '@core/services';
import { UtilService } from '@services/util/util.service';
import { QUEUE_PROCESS, QUEUE_STATUS } from '@utils/enums/queue-data';
import { WhereData } from '@models/query-data/where-data';
import { ReferrorLeadRequest } from '@models/leads/lead-sync-request-model/leads-referror-request';
import { RESPONSE_MESSAGE } from '@utils/constants/response-error-message';
import { DeltaSyncResponse } from 'app/core/models/delta-sync-response';
import { CONSTANTS_STRING } from '@utils/constants/string/constants-string';
import { LeadNeedPrioritiesRequest } from '@models/leads/lead-sync-request-model/leads-request-need-priorities';
import { LeadSyncWorkAddressesRequest } from '@models/leads/lead-sync-request-model/leads-work-address-request';
import { LeadSyncHomeAddressesRequest } from '@models/leads/lead-sync-request-model/leads-home-address-request';
import { LeadSyncAddressesRequest } from '@models/leads/lead-sync-request-model/leads-address-request';
import { LeadSyncContactsRequest } from '@models/leads/lead-sync-request-model/leads-contacts-request';
import { LeadSyncPersonRequest } from '@models/leads/lead-sync-request-model/leads-person-request';
import { LeadSyncDataRequest } from '@models/leads/lead-sync-request-model/leads-sync-leads-data';
import { LeadSyncLeadsRequest } from '@models/leads/lead-sync-request-model/leads-sync-leads-request';
import { LeadSyncRequest } from '@models/leads/lead-sync-request-model/leads-sync-request';
import { LOGTYPE } from '@utils/constants/utils';
import { LeadsDbService } from '@services/db/leads/leads-db.service';
import { SyncValidationsService } from '../sync/sync-validations/sync-validations.service';


@Injectable({
  providedIn: 'root'
})
export class LeadsService {

  constructor(
    private databaseService: DbService,
    private processQueueService: ProcessQueueService,
    private utilService: UtilService,
    private leadsDbService: LeadsDbService,
    private syncValidationsService: SyncValidationsService,
  ) { }

  getLeads(): Observable<any> {

    return from(this.databaseService.database.executeSql(SQL_QUERIES.GET_ALL_LEADS, [0])
    )
      .pipe(map(result => {
        let leads = [];
        if (result.rows && result.rows.length > 0) {
          for (let i = 0; i < result.rows.length; i++) {
            let status = result.rows.item(i).saleStatus != null ? result.rows.item(i).saleStatus :
              result.rows.item(i).leadStatus;
            leads[i] = Object.assign({},
              result.rows.item(i), {
              id: result.rows.item(i).leadId,
              status: STATUS[status],
              dateCreated: this.utilService.formatCardDate(
                result.rows.item(i).dateCreated),
              lastUpdated: this.utilService.formatCardDate(
                result.rows.item(i).dateModified),
              type: MODULE.LEAD,
              isDisabled: false
            });
          }
        }
        return leads;
      }, catchError(error => of(`Bad Promise: ${error}`)))
      )
  }

  GET_LEADS_BY_SYNC_STATUS = `SELECT *,
  CASE
  WHEN (
      SELECT eAppMainCase.eappStatus
      FROM EAPP_Main eAppMainCase
      INNER JOIN Leads leadsCase
      ON leadsCase.leadId = eAppMainCase.leadId
      WHERE leadsCase.leadId = leads.leadId
      AND eAppMainCase.isDeleted = 0
  ) IN ('SUBMITTED', 'For Underwriting', 'Encoded w/ Reqt', 'For Issuance', 'Issued') THEN 'SAL'
  END AS 'saleStatus'
    FROM Leads leads
    WHERE leads.isDeleted = 0 AND leads.syncStatus in (?,?,?)
    ORDER BY leads.dateModified DESC`;

  getLead(whereData: BehaviorSubject<any>): Observable<any> {
    const response: Subject<any> = new Subject();

    // 2 observable
    // db service
    // get queue id with "in progress" status trigger 

    whereData.subscribe(wheredata => {
        from(
        wheredata.syncStatus != SYNC_STATUS.ALL ?
        this.getLeadsBySyncStatus(wheredata) :
          this.databaseService.database.executeSql(SQL_QUERIES.GET_ALL_LEADS, [0]))
        .pipe(
          map(result => {
            
            let leads = [];
            if (result.rows && result.rows.length > 0) {
              for (let i = 0; i < result.rows.length; i++) {
                let status = result.rows.item(i).saleStatus != null ? result.rows.item(i).saleStatus :
                  result.rows.item(i).leadStatus;
                leads[i] = Object.assign({},
                  result.rows.item(i), {
                  id: result.rows.item(i).leadId,
                  status: STATUS[status],
                  dateCreated: this.utilService.formatDate(
                    result.rows.item(i).dateCreated,'YYYY-DD-MM h:mm:ss A'),
                  lastUpdated: this.utilService.formatDate(
                    result.rows.item(i).dateModified,'YYYY-DD-MM h:mm:ss A'),
                  type: MODULE.LEAD,
                  isDisabled: false,
                  inProgress : false,
                  leadName: `${result.rows.item(i).lastName}, ${result.rows.item(i).firstName}`,
                  age: this.utilService.getAge(result.rows.item(i).dateOfBirth)
                });
              }
            }

            const {keyword, additionalParams} = wheredata
            const hasAdditionalParams = additionalParams && additionalParams.length !== 0
            leads = keyword !== '' || hasAdditionalParams ? this.utilService.search(keyword, leads, additionalParams) : leads;
            

            return leads;
          })
        )
        .subscribe(leads => {

          response.next(leads);
        });
    })
    return response.asObservable();
  }


  GET_LEADS_SYNC_STATUS = `Select 
  (SELECT COUNT(1) FROM LEADS WHERE isDeleted = 0) as 'all',
  (SELECT COUNT(1) FROM LEADS WHERE syncStatus = 2 AND isDeleted = 0) as live,
  (SELECT COUNT(1) FROM LEADS WHERE syncStatus = 0 AND isDeleted = 0) as offline,
  (SELECT COUNT(1) FROM LEADS WHERE syncStatus in (99,69,619) AND isDeleted = 0) as error`;

  GET_LEADID_BY_SYNC_STATUS = `select leadId from  LEADS where syncStatus in (0,69,619)`;

  getLeadsStatus(updateData: BehaviorSubject<any>): Observable<any> {
    const response: Subject<any> = new Subject();
    updateData.subscribe(_ => {
      combineLatest([
        from(this.databaseService.database.executeSql(this.GET_LEADS_SYNC_STATUS, [])),
        from(this.databaseService.database.executeSql(this.GET_LEADID_BY_SYNC_STATUS, []))
      ]).pipe(map(([data, result]) => { return [data.rows.item(0), result] })
      ).subscribe(async ([leadCount, result]) => {
        if (result.rows && result.rows.length > 0) {
          for (let i = 0; i < result.rows.length; i++) {
             await this.processQueueService.addToQueue({
                id: result.rows.item(i).leadId,
                status: QUEUE_STATUS.PENDING,
                process: QUEUE_PROCESS.SYNC
              });
          }
        }
        response.next(leadCount);
      })
    })
    return response.asObservable();
  }

  GET_MODULE_BY_LEAD_ID = `Select (SELECT leadId FROM LEADS WHERE syncStatus = 0 and leadId = ?) as leadId,
  (SELECT GROUP_CONCAT(naId) FROM FNA_MAIN WHERE syncStatus = 0 and leadId = ?) as naId ,
  (SELECT GROUP_CONCAT(irpqId) FROM IRPQ WHERE syncStatus = 0 and leadId = ?) as irpqId,
  (SELECT GROUP_CONCAT(siId) FROM SI_MAIN WHERE syncStatus = 0 and leadId = ?) as siId,
  (SELECT GROUP_CONCAT(eappId) FROM EAPP_MAIN WHERE syncStatus = 0 and leadId = ?) as eappId`


  getModulesByLeadId(leadId: any): Observable<any> {
    const response: Subject<any> = new Subject();
    from(
      this.databaseService.database.executeSql(this.GET_MODULE_BY_LEAD_ID, [leadId, leadId, leadId, leadId, leadId])
    )
      .pipe(
        map(result => result.rows && result.rows.length > 0 ? result.rows.item(0) : [])
      )
      .subscribe(res => {
        response.next(res);
      });

    return response;
  }
    
  async getLeadsBySyncStatus(whereData?: any): Promise<any> {
    return new Promise(async (resolve) => {
    let leadsData;

    if (whereData.syncStatus == SYNC_STATUS.SYNC_FAIL_99) {
      leadsData = await this.databaseService.database.executeSql(this.GET_LEADS_BY_SYNC_STATUS,[69, 99, 619])
    } else {
      leadsData = await this.databaseService.database.executeSql(this.GET_LEADS_BY_SYNC_STATUS, [whereData.syncStatus])
    }
    resolve(leadsData);
    });
  }

  async updateDuplicateLead(lead: any): Promise<any> {
    return new Promise(async (resolve) => {
    let occupation, isUpdated;
    if (lead != null) {
      let whereData: WhereData[] = [{fieldName: 'leadId', operation: 'equal', compareValue: lead.clientRefId}];
      if (lead.data.person.occupation != null ) {
       occupation = lead.data.person.occupation.split(".");
      }
      const updateLeadParams = await this.databaseService.sqlHelperParamGen([
        { fieldName: 'serverId', value: lead.self },
        { fieldName: 'homeCountryCode', value: lead.data.person.addresses.homeAddress.countryCode },
        { fieldName: 'homeProvinceCode', value:lead.data.person.addresses.homeAddress.state },
        { fieldName: 'homeCityCode', value: lead.data.person.addresses.homeAddress.cityCode },
        { fieldName: 'homeZipCode', value: lead.data.person.addresses.homeAddress.zipCode},
        { fieldName: 'occupationCode', value: occupation != null && occupation.length > 0 ? occupation[0] : null},
        { fieldName: 'occupationGrpCode', value: occupation != null && occupation.length > 0 ? occupation[1] : null }
      ])
      await this.databaseService.updateTableData('Leads', updateLeadParams.fields, updateLeadParams.interpolationValues, whereData);
      }
      resolve('Duplicated Lead Updated');
    });
  }

  async leadValidationById(leadId): Promise<any> {
    return new Promise(async (resolve) => {
      let response;
      const leadsFromApp: any = await this.leadsDbService.getLeadById(leadId);
      if (leadsFromApp != null) {
        response = await this.syncValidationsService.leadSyncValidation(leadsFromApp.leadId, leadsFromApp)
        //console.log("RESPONSE OF SYNC VALIDATION: " + JSON.stringify(response));
      }
      resolve(response);
    });
  }

  onInitLeadResync(): Observable<any> {
    const response: Subject<any> = new Subject();
   combineLatest([
      from(this.databaseService.database.executeSql(this.GET_LEADS_SYNC_STATUS, [])),
      from(this.databaseService.database.executeSql(this.GET_LEADID_BY_SYNC_STATUS, []))
    ]).pipe(map(([data, result]) => { return [data.rows.item(0), result] })
    ).subscribe(async ([leadCount, result]) => {
      if (result.rows && result.rows.length > 0) {
        for (let i = 0; i < result.rows.length; i++) {
          await this.processQueueService.manualProcess({
            id: result.rows.item(i).leadId,
            status: QUEUE_STATUS.PENDING,
            process: QUEUE_PROCESS.SYNC
          });
          }
        }
        response.next(leadCount);
      })

    return response.asObservable();
  }
}