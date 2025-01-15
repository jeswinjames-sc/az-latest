import { Injectable } from '@angular/core';
import { BaseCardInfo } from '@models/base-card-info';
import { DashboardItemDetails } from '@models/dashboard-item-details';
import { DbService } from '@services/db/db.service';
import { UtilService } from '@services/util/util.service';
import { PLANS, PLAN_TITLE } from '@utils/constants/options/product-info/plans';
import { STATUS } from '@utils/constants/status/status';
import { MODULE, DASHBOARD_MODULE_TITLES } from '@utils/enums/module';
import { BehaviorSubject, from, Observable, Subject, throwError } from 'rxjs';
import { catchError, filter, map, switchMap } from 'rxjs/operators';
import { SettingsService } from '@services/settings/settings.service.service';
import { CHANNEL } from '@utils/enums/channel';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { environment } from '@environment/environment'
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import { Storage } from '@ionic/storage';
import moment from 'moment';
@Injectable({
  providedIn: 'root'
})

export class DashboardService {
  token: string;
  amId: string;
  headers: object;
  deleteSubmittedApp$: BehaviorSubject<any> = new BehaviorSubject(null);
  constructor(
    private databaseService: DbService,
    private settingsService: SettingsService,
    private utilService: UtilService,
    private http: HTTP,
    private storage: Storage,
  ) { }

  expiringVal = environment.accelarationAJ.expiring ? environment.accelarationAJ.expiring : '30 days'; //variable for testing purposes
  expiredVal = environment.accelarationAJ.expired ? environment.accelarationAJ.expired : '90 days'; //variable for testing purposes
  expiredNAIRPQVal = environment.accelarationAJ.expiry ? environment.accelarationAJ.expiry : '365 days'; //variable for testing purposes

  // required format for UNION: correct order and number of col 
  IXSI_SELECT = `
  IFNULL(IRPQ.NAID, SI_MAIN.NAID) AS NAID,
  IRPQ.IRPQID AS I_IRPQID,
  IRPQ.DATEMODIFIED AS I_DATEMODIFIED,
  IRPQ.ISDELETED AS I_ISDELETED,
  IRPQ.SYNCSTATUS AS I_SYNCSTATUS,
  IRPQ.ISCOMPLETED AS I_ISCOMPLETED,
  IRPQ.PQANS1 AS I_PQANS1,
  IRPQ.PQANS2 AS I_PQANS2,
  IRPQ.PQANS3 AS I_PQANS3,
  IRPQ.PQANS4 AS I_PQANS4,
  IRPQ.PQANS5 AS I_PQANS5,
  IRPQ.PQANS6 AS I_PQANS6,
  IRPQ.PQANS7 AS I_PQANS7,
  IRPQ.PQANS8 AS I_PQANS8,
  SI_MAIN.SIID AS SI_SIID,
  SI_MAIN.DATEMODIFIED AS SI_DATEMODIFIED,
  SI_MAIN.ISDELETED AS SI_ISDELETED,
  SI_MAIN.SYNCSTATUS AS SI_SYNCSTATUS,
  SI_MAIN.ISCOMPLETED AS SI_ISCOMPLETED,
  SI_MAIN.PLANCODE AS SI_PLANCODE,
  SI_MAIN.ISAOEQUALSPI AS SI_ISAOEQUALSPI,
  SI_PERSONS.PERSONID AS SI_PERSONID
`;

  // will be used by app details and dynamic card listing
  FROM_QUERY = `
  FROM LEADS L
  LEFT JOIN (
    SELECT * FROM FNA_MAIN WHERE FNA_MAIN.ISDELETED = 0
  ) F ON L.LEADID = F.LEADID
  LEFT JOIN (
    SELECT
      ${this.IXSI_SELECT}
    FROM IRPQ
    LEFT JOIN SI_MAIN ON IRPQ.IRPQID = SI_MAIN.IRPQID AND SI_MAIN.ISDELETED IN (0, NULL)
    LEFT JOIN SI_PERSONS ON SI_MAIN.siId = SI_PERSONS.siId AND SI_PERSONS.PERSONTYPE = 0
    WHERE IRPQ.ISDELETED IN (0,NULL)
    
    UNION
    
    SELECT
      ${this.IXSI_SELECT}
    FROM SI_MAIN
    LEFT JOIN SI_PERSONS ON SI_MAIN.siId = SI_PERSONS.siId AND SI_PERSONS.PERSONTYPE = 0
    LEFT JOIN IRPQ ON IRPQ.IRPQID = SI_MAIN.IRPQID AND IRPQ.ISDELETED IN (0, NULL)
    WHERE SI_MAIN.ISDELETED IN (0,NULL)
  ) IXSI ON F.NAID = IXSI.NAID
  LEFT JOIN (
    SELECT * FROM EAPP_MAIN WHERE EAPP_MAIN.ISDELETED = 0
  ) E ON IXSI.SI_SIID = E.SIID
  LEFT JOIN SUBMISSION_CHECKLIST SC ON E.EAPPID = SC.EAPPID
`

  IXSI_HSBC_SELECT = `
  SI_MAIN.LEADID AS SI_LEADID,
  SI_MAIN.SIID AS SI_SIID,
  SI_MAIN.DATEMODIFIED AS SI_DATEMODIFIED,
  SI_MAIN.ISDELETED AS SI_ISDELETED,
  SI_MAIN.SYNCSTATUS AS SI_SYNCSTATUS,
  SI_MAIN.ISCOMPLETED AS SI_ISCOMPLETED,
  SI_MAIN.PLANCODE AS SI_PLANCODE,
  SI_MAIN.ISAOEQUALSPI AS SI_ISAOEQUALSPI,
  SI_PERSONS.PERSONID AS SI_PERSONID
`;

  FROM_HSBC_QUERY = `
  FROM LEADS L
  LEFT JOIN (
    SELECT
      ${this.IXSI_HSBC_SELECT}
    FROM SI_MAIN
    LEFT JOIN SI_PERSONS ON SI_MAIN.siId = SI_PERSONS.siId AND SI_PERSONS.PERSONTYPE = 0
    WHERE SI_MAIN.ISDELETED IN (0,NULL)
  ) IXSI ON L.LEADID = IXSI.SI_LEADID
  LEFT JOIN (
    SELECT * FROM EAPP_MAIN WHERE EAPP_MAIN.ISDELETED = 0
  ) E ON IXSI.SI_SIID = E.SIID
  LEFT JOIN SUBMISSION_CHECKLIST SC ON E.EAPPID = SC.EAPPID
`

  setHeaders() {
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': this.token,
      'X-Channel-ID': '1',
      'X-Request-ID': Math.floor(Math.random() * 1000000000).toString()
    };
    return this.headers;
  }

  initializeDashboardService() {
    this.deleteSubmittedApp$
    .pipe(filter(data=>data!==null))
    .subscribe(async (data)=>{
      await this.submittedExistInPending(data);
    });
  }
  
  GET_FNA_STATUS = `
    CASE
      WHEN (SELECT COUNT(fnaSi.naId)
        FROM
        FNA_MAIN fnaSi
        INNER JOIN SI_MAIN siMain ON fnaSi.naId = siMain.naId
        WHERE (fnaSi.naId = F.naId) AND (siMain.isDeleted != 1)
      ) != 0 
      THEN (
        SELECT
          CASE
            WHEN (
              SELECT COUNT(fnaMainCase2.naId)
              FROM FNA_MAIN fnaMainCase2
              INNER JOIN SI_MAIN siMainCase2 ON fnaMainCase2.naId = siMainCase2.naId
              INNER JOIN EAPP_Main eAppMainCase2 ON siMainCase2.siId = eAppMainCase2.siId
              WHERE (fnaMainCase2.naId = F.naId) AND (eAppMainCase2.isDeleted != 1)
            ) != 0 
            THEN (
              SELECT
                CASE
                  WHEN eAppMainCase3.eappStatus IN ('IN-PROGRESS', 'COMPLETED') THEN 'ATTACHED'
                  WHEN eAppMainCase3.eappStatus LIKE '%encoded%' THEN 'SUBMITTED'
                  WHEN eAppMainCase3.eappStatus IN ('For Underwriting', 'FOR ISSUANCE') THEN 'SUBMITTED'
                  ELSE eAppMainCase3.eappStatus
                END
              FROM FNA_MAIN fnaMainCase3
              INNER JOIN SI_MAIN siMainCase3 ON fnaMainCase3.naId = siMainCase3.naId
              INNER JOIN EAPP_Main eAppMainCase3 ON siMainCase3.siId = eAppMainCase3.siId
              WHERE fnaMainCase3.naId = F.naId AND eAppMainCase3.isDeleted != 1
            )
            ELSE 'ATTACHED'
          END
      )
      WHEN (
        SELECT COUNT(fnaIrpq.naId)
        FROM FNA_MAIN fnaIrpq
        INNER JOIN IRPQ irpqMain ON fnaIrpq.naId = irpqMain.naId
        WHERE (fnaIrpq.naId = F.naId) AND (irpqMain.isDeleted != 1)
      ) != 0 
      THEN 'ATTACHED'
      ELSE (
        SELECT
          CASE
            WHEN ((julianday('now', 'localtime') - julianday((F.dateModified/1000), 'unixepoch', 'localtime')) > 365)
              AND (F.isCompleted != 0) THEN 'EXPIRED'
              WHEN ((julianday('now', 'localtime') - julianday((F.dateModified/1000), 'unixepoch', 'localtime')) <= 365)
              AND (F.isCompleted != 0) THEN 'COMPLETED'
              ELSE 'IN-PROGRESS'
          END
      )
    END as 'fnaStatus'
  `;

  GET_LEAD_SALE_STATUS = `
    CASE
      WHEN (
        SELECT eAppMainCase.eappStatus
        FROM EAPP_Main eAppMainCase
        INNER JOIN Leads leadsCase
        ON leadsCase.leadId = eAppMainCase.leadId
        WHERE leadsCase.leadId = L.leadId
        AND eAppMainCase.isDeleted = 0
      ) IN ('SUBMITTED', 'For Underwriting', 'Encoded w/ Reqt', 'For Issuance', 'Issued') THEN 'SAL'
    END AS 'leadSaleStatus'
  `;

  GET_IRPQ_STATUS = `
  CASE 
      WHEN (
        SELECT COUNT(irpqSi.irpqId)
        FROM IRPQ irpqSi
        INNER JOIN SI_MAIN siMain ON irpqSi.irpqId = siMain.irpqId
        WHERE irpqSi.irpqId = IXSI.I_IRPQID
        AND irpqSi.isDeleted = 0
        AND siMain.isDeleted = 0
      ) != 0 THEN (
        SELECT
          CASE 
            WHEN (
              SELECT COUNT(irpqMainCase2.irpqId)
              FROM IRPQ irpqMainCase2
              INNER JOIN SI_MAIN siMainCase2 ON irpqMainCase2.irpqId = siMainCase2.irpqId
              INNER JOIN EAPP_Main eAppMainCase2 ON siMainCase2.siId = eAppMainCase2.siId
              WHERE irpqMainCase2.irpqId = IXSI.I_IRPQID
              AND siMainCase2.isDeleted = 0
              AND eAppMainCase2.isDeleted = 0
            ) != 0 THEN (
              SELECT 
                CASE
                  WHEN eAppMainCase3.eappStatus IN ('IN-PROGRESS', 'COMPLETED') THEN 'ATTACHED'
                  WHEN eAppMainCase3.eappStatus LIKE '%encoded%' THEN 'SUBMITTED'
                  WHEN eAppMainCase3.eappStatus IN ('For Underwriting', 'FOR ISSUANCE') THEN 'SUBMITTED'
                  ELSE eAppMainCase3.eappStatus
                END
              FROM IRPQ irpqMainCase3
              INNER JOIN SI_MAIN siMainCase3 ON irpqMainCase3.irpqId = siMainCase3.irpqId
              INNER JOIN EAPP_Main eAppMainCase3 ON siMainCase3.siId = eAppMainCase3.siId
              WHERE irpqMainCase3.irpqId = IXSI.I_IRPQID
              AND siMainCase3.isDeleted = 0
              AND eAppMainCase3.isDeleted = 0
            )
            ELSE 'ATTACHED'
          END )
        ELSE 
          (SELECT
            CASE
              WHEN IXSI.I_ISCOMPLETED != 0 THEN 'COMPLETED'
              ELSE 'IN-PROGRESS'
            END)
    END AS 'irpqStatus'
  `;

  GET_SI_STATUS = `
    CASE
      WHEN (
          SELECT eAppMainCase.eappStatus 
          FROM SI_MAIN siMainCase
          INNER JOIN EAPP_Main eAppMainCase
          ON siMainCase.siId = eAppMainCase.siId
          WHERE siMainCase.siId = IXSI.SI_SIID
          AND eAppMainCase.isDeleted = 0
      ) IN ('IN-PROGRESS','COMPLETED') THEN 'ATTACHED'
      ELSE (
        SELECT eAppMainCase.eappStatus 
        FROM SI_MAIN siMainCase
        INNER JOIN EAPP_Main eAppMainCase
        ON siMainCase.siId = eAppMainCase.siId
        WHERE siMainCase.siId = IXSI.SI_SIID
        AND eAppMainCase.isDeleted = 0
      )
    END as 'siStatus' 
  `;

  GET_APPLICATION = `
    SELECT 
      L.SYNCSTATUS as leadSyncStatus, L.DATEMODIFIED as leadDateModified, L.ISDELETED as leadIsDeleted,
      F.SYNCSTATUS as fnaSyncStatus, F.DATEMODIFIED as fnaDateModified, F.ISDELETED as fnaIsDeleted,
      IXSI.I_SYNCSTATUS as irpqSyncStatus, IXSI.I_DATEMODIFIED as irpqDateModified, IXSI.I_ISDELETED as irpqIsDeleted,
      IXSI.SI_SYNCSTATUS as siSyncStatus, IXSI.SI_DATEMODIFIED as siDateModified, IXSI.SI_ISDELETED as siIsDeleted,
      E.SYNCSTATUS as eappSyncStatus, E.ATTACHEDDATE as attachedDate, E.DATEMODIFIED as eappDateModified, E.ISDELETED as eappIsDeleted,
      SC.SYNCSTATUS as submissionSyncStatus, SC.DATEMODIFIED as submissionDateModified,

      L.LEADSTATUS as leadStatus, ${this.GET_LEAD_SALE_STATUS},
      ${this.GET_FNA_STATUS}, F.ISWAIVED as fnaIsWaived, F.ISCOMPLETED as fnaIsCompleted,
      ${this.GET_IRPQ_STATUS},
      ${this.GET_SI_STATUS}, IXSI.SI_ISCOMPLETED as siIsCompleted,
      E.EAPPSTATUS as eappStatus

    ${this.FROM_QUERY}
    
    WHERE L.LEADID IS ?
    AND F.NAID IS ?
    AND IXSI.I_IRPQID IS ?
    AND IXSI.SI_SIID IS ?
    AND E.EAPPID IS ?
    AND SC.SUBMISSIONID IS ?
  `;

  GET_HSBC_APPLICATION = `
    SELECT 
      L.SYNCSTATUS as leadSyncStatus, L.DATEMODIFIED as leadDateModified, L.ISDELETED as leadIsDeleted,
      IXSI.SI_SYNCSTATUS as siSyncStatus, IXSI.SI_DATEMODIFIED as siDateModified, IXSI.SI_ISDELETED as siIsDeleted,
      E.SYNCSTATUS as eappSyncStatus, E.ATTACHEDDATE as attachedDate, E.DATEMODIFIED as eappDateModified, E.ISDELETED as eappIsDeleted,
      SC.SYNCSTATUS as submissionSyncStatus, SC.DATEMODIFIED as submissionDateModified,

      L.LEADSTATUS as leadStatus, ${this.GET_LEAD_SALE_STATUS},
      ${this.GET_SI_STATUS}, IXSI.SI_ISCOMPLETED as siIsCompleted,
      E.EAPPSTATUS as eappStatus

    ${this.FROM_HSBC_QUERY}
    
    WHERE L.LEADID IS ?
    AND IXSI.SI_SIID IS ?
    AND E.EAPPID IS ?
    AND SC.SUBMISSIONID IS ?
  `;

  getSpecificApplication(whereData: BehaviorSubject<any>): Observable<any> {
    const response: Subject<any> = new Subject();

    whereData.subscribe(wheredata => {
      from(
        this.databaseService.database.executeSql(this.GET_APPLICATION,
          [
            wheredata.leadId,
            wheredata.naId,
            wheredata.irpqId,
            wheredata.siId,
            wheredata.eappId,
            wheredata.submissionId
          ]
        )
      )
        .pipe(map(result => {
          if (result.rows && result.rows.length > 0) {
            let app = result.rows.item(0);

            // lead status
            const leadStatus = app.leadSaleStatus ? app.leadSaleStatus : app.leadStatus;

            // fna status
            const fnaIsSubmitted = ![STATUS.IN_PROGRESS, STATUS.COMPLETED, STATUS.ATTACHED, STATUS.SIGNED].includes(app.fnaStatus.toUpperCase()),
              fnaIsCompleted = app.fnaStatus === STATUS.COMPLETED,
              fnaStatus = wheredata.naId ? app.fnaIsWaived ? (fnaIsCompleted ? STATUS.WAIVED : (fnaIsSubmitted ? STATUS.SUBMITTED : app.fnaStatus)) : (fnaIsSubmitted ? STATUS.SUBMITTED : app.fnaStatus) : null;

            // irpq status 
            let irpqStatus;
            if (app.irpqStatus) {
              let isSubmitted = ![STATUS.IN_PROGRESS, STATUS.COMPLETED, STATUS.ATTACHED, STATUS.SIGNED].includes(app.irpqStatus.toUpperCase());
              irpqStatus = wheredata.irpqId ? isSubmitted ? STATUS.SUBMITTED : app.irpqStatus.toUpperCase() : null;
            }

            // si status
            const siIsCompleted = app.siIsCompleted;
            let siStatus = app.siStatus ? app.siStatus.toUpperCase() : siIsCompleted ? STATUS.COMPLETED : STATUS.IN_PROGRESS;
            const siIsInProgress = siStatus === STATUS.IN_PROGRESS,
              siIsSubmitted = ![STATUS.IN_PROGRESS, STATUS.COMPLETED, STATUS.ATTACHED, STATUS.SIGNED].includes(siStatus.toUpperCase()),
              siIsAttached = siStatus === STATUS.ATTACHED,
              isSigned = siStatus === STATUS.SIGNED,
              siIsExpired = this.utilService.getDayDifference(+app.siDateModified) >= 60 && (siIsCompleted || siIsAttached);
            siStatus = siIsInProgress ? STATUS.IN_PROGRESS : siIsAttached ? STATUS.ATTACHED : isSigned ? STATUS.SIGNED : siIsSubmitted ? STATUS.SUBMITTED : siIsCompleted ? STATUS.COMPLETED : siIsExpired ? STATUS.EXPIRED : STATUS.IN_PROGRESS;

            // eapp status
            let eappStatus;
            if (app.eappStatus) {
              let eappIsSubmitted = ![STATUS.IN_PROGRESS, STATUS.COMPLETED, STATUS.ATTACHED, STATUS.SIGNED].includes(app.eappStatus.toUpperCase());
              eappStatus = eappIsSubmitted ? STATUS.SUBMITTED : app.eappStatus.toUpperCase();
            }

            // checklist status
            let submissionStatus = app.eappStatus;

            let application: DashboardItemDetails[] = [];
            let syncStatus = null;
            let isExpiredEappStatus = null;
            if (app.attachedDate) {
              const timeNow = new Date().getTime();
              const clientExpiryEpoch = new Date(app.attachedDate).getTime();
              if (clientExpiryEpoch > timeNow) {
                isExpiredEappStatus = false;
              } else {
                isExpiredEappStatus = true;
              }
            }

            application = [
              {
                id: wheredata.leadId,
                type: MODULE.LEAD,
                module: DASHBOARD_MODULE_TITLES.LEAD,
                syncStatus: app.leadSyncStatus,
                formStatus: STATUS[leadStatus] ? STATUS[leadStatus] : leadStatus,
                isDeleted: app.leadIsDeleted
              },
              {
                id: wheredata.naId,
                type: MODULE.NA,
                module: DASHBOARD_MODULE_TITLES.NA,
                syncStatus: app.fnaSyncStatus,
                formStatus: STATUS[fnaStatus] ? STATUS[fnaStatus] : fnaStatus,
                isDeleted: app.fnaIsDeleted
              },
              {
                id: wheredata.irpqId,
                type: MODULE.IRPQ,
                module: DASHBOARD_MODULE_TITLES.IRPQ,
                syncStatus: app.irpqSyncStatus,
                formStatus: STATUS[irpqStatus] ? STATUS[irpqStatus] : irpqStatus,
                isDeleted: app.irpqIsDeleted
              },
              {
                id: wheredata.siId,
                type: MODULE.SI,
                module: DASHBOARD_MODULE_TITLES.SI,
                syncStatus: app.siSyncStatus,
                formStatus: STATUS[siStatus] ? STATUS[siStatus] : siStatus,
                isDeleted: app.siIsDeleted
              },
              {
                id: wheredata.eappId,
                type: MODULE.EAPP,
                module: DASHBOARD_MODULE_TITLES.EAPP,
                syncStatus: isExpiredEappStatus ? 3 : app.eappSyncStatus,
                formStatus: STATUS[isExpiredEappStatus ? 3 : app.eappSyncStatus] ? STATUS[isExpiredEappStatus ? 3 : app.eappSyncStatus] : eappStatus,
                isDeleted: app.eappIsDeleted
              },
              {
                id: wheredata.submissionId,
                type: MODULE.SUBMISSION_CHECKLIST,
                module: DASHBOARD_MODULE_TITLES.CHECKLIST,
                syncStatus: isExpiredEappStatus ? 3 : app.submissionSyncStatus,
                formStatus: STATUS[isExpiredEappStatus ? 3 : submissionStatus] ? STATUS[isExpiredEappStatus ? 3 : submissionStatus] : submissionStatus,
                isDeleted: app.eappIsDeleted
              }
            ];
            return application;
          }
        })
        )
        .subscribe(app => {
          response.next(app);
        });
    })
    return response.asObservable();
  }

  getSpecificApplicationHSBC(whereData: BehaviorSubject<any>): Observable<any> {
    const response: Subject<any> = new Subject();
    whereData.subscribe(wheredata => {
      from(
        this.databaseService.database.executeSql(this.GET_HSBC_APPLICATION,
          [
            wheredata.leadId,
            wheredata.siId,
            wheredata.eappId,
            wheredata.submissionId
          ]
        )
      )
        .pipe(map(result => {
          if (result.rows && result.rows.length > 0) {
            let app = result.rows.item(0);

            // lead status
            const leadStatus = app.leadSaleStatus ? app.leadSaleStatus : app.leadStatus;

            // si status
            const siIsCompleted = app.siIsCompleted;
            let siStatus = app.siStatus ? app.siStatus.toUpperCase() : siIsCompleted ? STATUS.COMPLETED : STATUS.IN_PROGRESS;
            const siIsInProgress = siStatus === STATUS.IN_PROGRESS,
              siIsSubmitted = ![STATUS.IN_PROGRESS, STATUS.COMPLETED, STATUS.ATTACHED, STATUS.SIGNED].includes(siStatus.toUpperCase()),
              siIsAttached = siStatus === STATUS.ATTACHED,
              isSigned = siStatus === STATUS.SIGNED,
              siIsExpired = this.utilService.getDayDifference(+app.siDateModified) >= 60 && (siIsCompleted || siIsAttached);
            siStatus = siIsInProgress ? STATUS.IN_PROGRESS : siIsAttached ? STATUS.ATTACHED : isSigned ? STATUS.SIGNED : siIsSubmitted ? STATUS.SUBMITTED : siIsCompleted ? STATUS.COMPLETED : siIsExpired ? STATUS.EXPIRED : STATUS.IN_PROGRESS;

            // eapp status
            let eappStatus;
            if (app.eappStatus) {
              let eappIsSubmitted = ![STATUS.IN_PROGRESS, STATUS.COMPLETED, STATUS.ATTACHED, STATUS.SIGNED].includes(app.eappStatus.toUpperCase());
              eappStatus = eappIsSubmitted ? STATUS.SUBMITTED : app.eappStatus.toUpperCase();
            }

            // checklist status
            let submissionStatus = app.eappStatus;

            let application: DashboardItemDetails[] = [];
            let syncStatus = null;
            let isExpiredEappStatus = null;
            if (app.attachedDate) {
              const timeNow = new Date().getTime();
              const clientExpiryEpoch = new Date(app.attachedDate).getTime();
              if (clientExpiryEpoch > timeNow) {
                isExpiredEappStatus = false;
              } else {
                isExpiredEappStatus = true;
              }
            }

            application = [
              {
                id: wheredata.leadId,
                type: MODULE.LEAD,
                module: DASHBOARD_MODULE_TITLES.LEAD,
                syncStatus: app.leadSyncStatus,
                formStatus: STATUS[leadStatus] ? STATUS[leadStatus] : leadStatus,
                isDeleted: app.leadIsDeleted
              },
              {
                id: wheredata.siId,
                type: MODULE.SI,
                module: DASHBOARD_MODULE_TITLES.SI,
                syncStatus: app.siSyncStatus,
                formStatus: STATUS[siStatus] ? STATUS[siStatus] : siStatus,
                isDeleted: app.siIsDeleted
              },
              {
                id: wheredata.eappId,
                type: MODULE.EAPP,
                module: DASHBOARD_MODULE_TITLES.EAPP,
                syncStatus: isExpiredEappStatus ? 3 : app.eappSyncStatus,
                formStatus: STATUS[isExpiredEappStatus ? 3 : app.eappSyncStatus] ? STATUS[isExpiredEappStatus ? 3 : app.eappSyncStatus] : eappStatus,
                isDeleted: app.eappIsDeleted
              },
              {
                id: wheredata.submissionId,
                type: MODULE.SUBMISSION_CHECKLIST,
                module: DASHBOARD_MODULE_TITLES.CHECKLIST,
                syncStatus: isExpiredEappStatus ? 3 : app.submissionSyncStatus,
                formStatus: STATUS[isExpiredEappStatus ? 3 : submissionStatus] ? STATUS[isExpiredEappStatus ? 3 : submissionStatus] : submissionStatus,
                isDeleted: app.eappIsDeleted
              }
            ];
            return application;
          }
        })
        )
        .subscribe(app => {
          response.next(app);
        });
    })
    return response.asObservable();
  }

  setDashboardAsOrigin(isFromDashboard: boolean) {
    let param = { value: isFromDashboard }
    localStorage.setItem('isFromDashboard', JSON.stringify(param));
  }

  isFromDashboard() {
    return JSON.parse(localStorage.getItem('isFromDashboard')).value;
  }

  async getPendingExpiringAppCount() {
    let GET_APPLICATION_COUNT = `
      SELECT 
        SUM(CASE WHEN datetime(dateCreated/1000, 'unixepoch') >= datetime('now', '-90 days') THEN 1 ELSE 0 END) AS pendingResultCount,
        SUM(CASE WHEN datetime(dateCreated/1000, 'unixepoch') >= datetime('now', '-90 days') 
                AND datetime(dateCreated/1000, 'unixepoch') <= datetime('now', '-${this.expiringVal}') THEN 1 ELSE 0 END) AS expiringResultCount
      FROM (
        SELECT  
          SI.siId,
          SI.dateCreated,
          L.leadId,
            (
                CASE WHEN SI.siId IS NOT NULL THEN 1 ELSE 0 END ||  
                CASE WHEN E.eappId IS NOT NULL THEN 1 ELSE 0 END  ||
                CASE WHEN sc.submissionId IS NOT NULL THEN 1 ELSE 0 END ||
                CASE WHEN sc.policyNumber IS NOT NULL THEN 1 ELSE 0 END  
            ) AS PENDING_STATUS
        FROM SI_MAIN as SI 
        LEFT JOIN EAPP_Main as E ON E.siId = SI.siId
        LEFT JOIN Submission_Checklist as SC ON SC.eappId = E.eappId
        LEFT JOIN Leads as L ON L.leadId = SI.leadId
        WHERE PENDING_STATUS != '1111' 
        AND SI.ISDELETED != 1
        GROUP BY SI.siId
      )
    `;

    let result = await this.databaseService.database.executeSql(GET_APPLICATION_COUNT, null);
    if (result.rows && result.rows.item) {
      let app = result.rows.item(0);
      return app;
    }
  }

  getPendingExpiringApplications(whereData: BehaviorSubject<any>): Observable<any> {
    const { channel } = this.settingsService.journeyGlobalData;
    const response: Subject<any> = new Subject();
    whereData.subscribe(async (wheredata) => {
      let addQuery = wheredata.status == '2' ? `AND datetime(SI.dateCreated/1000, 'unixepoch') <= datetime('now', '-${this.expiringVal}')` : ``;
      let orderBy = wheredata.status == '2' ? `ORDER BY SI.dateCreated;` : `ORDER BY dateModified DESC;`;

      let GET_APPLICATIONS_HSBC = `SELECT  
            SI.siId,
            (
              CASE WHEN SI.siId IS NOT NULL THEN 1 ELSE 0 END ||  
              CASE WHEN E.eappId IS NOT NULL THEN 1 ELSE 0 END  ||
              CASE WHEN sc.submissionId IS NOT NULL THEN 1 ELSE 0 END ||
              CASE WHEN sc.policyNumber IS NOT NULL THEN 1 ELSE 0 END  
            ) AS PENDING_STATUS,
            L.leadId, 
            L.LASTNAME AS lastName,
            L.FIRSTNAME AS firstName,
            L.MIDDLENAME AS middleName,
            L.PHONENUMBER AS phoneNumber,
            L.SYNCSTATUS AS leadSyncStatus, 
            SI.PLANCODE AS planCode,
            SI.ISAOEQUALSPI AS isAoEqualsPi,
            SI.SYNCSTATUS AS siSyncStatus,
            SI.dateCreated as siDateCreated,
            SIP.lastName||', '||SIP.firstName AS insuredName,
            SIP.personId,
            E.APPLICATIONNUMBER AS applicationNumber,
            E.SYNCSTATUS AS eappSyncStatus,
            E.eappId,
            E.attachedDate,
            MAX(
                COALESCE(SC.DATEMODIFIED, 0),
                COALESCE(E.DATEMODIFIED, 0),
                COALESCE(SI.DATEMODIFIED, 0),
                COALESCE(L.DATEMODIFIED, 0)
            ) AS dateModified,
            SC.SYNCSTATUS AS submissionSyncStatus,
            SC.dateCreated as createdDate,
            SC.policyNumber,
            CASE
              WHEN
                COALESCE(
                  CASE WHEN SC.SYNCSTATUS IS NOT NULL THEN SC.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (E.SYNCSTATUS IS NOT NULL) AND (E.ISDELETED != 1) THEN E.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (SI.SYNCSTATUS IS NOT NULL) AND (SI.ISDELETED != 1) THEN SI.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (L.SYNCSTATUS IS NOT NULL) AND (L.ISDELETED != 1) THEN L.SYNCSTATUS ELSE NULL END
                ) IS NOT NULL
              THEN 
                COALESCE(
                  CASE WHEN SC.SYNCSTATUS IS NOT NULL THEN SC.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (E.SYNCSTATUS IS NOT NULL) AND (E.ISDELETED != 1) THEN E.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (L.SYNCSTATUS IS NOT NULL) AND (L.ISDELETED != 1) THEN L.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (SI.SYNCSTATUS IS NOT NULL) AND (SI.ISDELETED != 1) THEN SI.SYNCSTATUS ELSE NULL END
                )
              ELSE NULL
            END AS overallStatus,
            SI.ISDELETED as SI_DELETED
        FROM SI_MAIN as SI 
        LEFT JOIN EAPP_Main as E ON E.siId = SI.siId AND E.isDeleted != 1
        LEFT JOIN Submission_Checklist as SC ON SC.eappId = E.eappId
        LEFT JOIN Leads as L ON L.leadId = SI.leadId
        LEFT JOIN SI_PERSONS as SIP ON SIP.siId = SI.siId AND SIP.personType = 1
        WHERE 
            PENDING_STATUS != '1111' 
            AND SI.ISDELETED != 1
            AND datetime(SI.dateCreated/1000, 'unixepoch') >= datetime('now', '-90 days')  
            ${addQuery}
        GROUP BY SI.siId
        ${orderBy}`;

      let GET_APPLICATIONS = `
        SELECT  
            SI.siId,
            (
              CASE WHEN SI.siId IS NOT NULL THEN 1 ELSE 0 END ||  
              CASE WHEN E.eappId IS NOT NULL THEN 1 ELSE 0 END  ||
              CASE WHEN sc.submissionId IS NOT NULL THEN 1 ELSE 0 END ||
              CASE WHEN sc.policyNumber IS NOT NULL THEN 1 ELSE 0 END  
            ) AS PENDING_STATUS,
            L.leadId, 
            L.LASTNAME AS lastName,
            L.FIRSTNAME AS firstName,
            L.MIDDLENAME AS middleName,
            L.PHONENUMBER AS phoneNumber,
            L.SYNCSTATUS AS leadSyncStatus,
            NA.naId,
            NA.NEEDTYPE AS needType,
            NA.ISWAIVED as fnaIsWaived,
            NA.SYNCSTATUS AS fnaSyncStatus,
            IRPQ.irpqId,  
            IRPQ.SYNCSTATUS AS irpqSyncStatus,  
            IRPQ.PQANS1 AS irpqAns1,
            IRPQ.PQANS2 AS irpqAns2,
            IRPQ.PQANS3 AS irpqAns3,
            IRPQ.PQANS4 AS irpqAns4,
            IRPQ.PQANS5 AS irpqAns5,
            IRPQ.PQANS6 AS irpqAns6,
            IRPQ.PQANS7 AS irpqAns7,
            IRPQ.PQANS8 AS irpqAns8,    
            SI.PLANCODE AS planCode,
            SI.ISAOEQUALSPI AS isAoEqualsPi,
            SI.SYNCSTATUS AS siSyncStatus,
            SI.dateCreated as siDateCreated,
            SIP.lastName||', '||SIP.firstName AS insuredName,
            SIP.personId,
            E.APPLICATIONNUMBER AS applicationNumber,
            E.SYNCSTATUS AS eappSyncStatus,
            E.eappId,
            E.attachedDate,
            MAX(
                COALESCE(SC.DATEMODIFIED, 0),
                COALESCE(E.DATEMODIFIED, 0),
                COALESCE(SI.DATEMODIFIED, 0),
                COALESCE(IRPQ.DATEMODIFIED, 0),
                COALESCE(NA.DATEMODIFIED, 0),
                COALESCE(L.DATEMODIFIED, 0)
            ) AS dateModified,
            SC.SYNCSTATUS AS submissionSyncStatus,
            SC.dateCreated as createdDate,
            SC.policyNumber,
            CASE
              WHEN
                COALESCE(
                  CASE WHEN SC.SYNCSTATUS IS NOT NULL THEN SC.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (E.SYNCSTATUS IS NOT NULL) AND (E.ISDELETED = 0) THEN E.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (SI.SYNCSTATUS IS NOT NULL) AND (SI.ISDELETED = 0) THEN SI.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (IRPQ.SYNCSTATUS IS NOT NULL) AND (IRPQ.ISDELETED = 0) THEN IRPQ.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (NA.SYNCSTATUS IS NOT NULL) AND (NA.ISDELETED = 0) THEN NA.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (L.SYNCSTATUS IS NOT NULL) AND (L.ISDELETED = 0) THEN L.SYNCSTATUS ELSE NULL END
                ) IS NOT NULL
              THEN 
                COALESCE(
                  CASE WHEN SC.SYNCSTATUS IS NOT NULL THEN SC.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (E.SYNCSTATUS IS NOT NULL) AND (E.ISDELETED = 0) THEN E.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (SI.SYNCSTATUS IS NOT NULL) AND (SI.ISDELETED = 0) THEN SI.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (IRPQ.SYNCSTATUS IS NOT NULL) AND (IRPQ.ISDELETED = 0) THEN IRPQ.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (NA.SYNCSTATUS IS NOT NULL) AND (NA.ISDELETED = 0) THEN NA.SYNCSTATUS ELSE NULL END,
                  CASE WHEN (L.SYNCSTATUS IS NOT NULL) AND (L.ISDELETED = 0) THEN L.SYNCSTATUS ELSE NULL END
                )
              ELSE NULL
            END AS overallStatus  
        FROM SI_MAIN as SI 
        LEFT JOIN EAPP_Main as E ON E.siId = SI.siId AND E.isDeleted != 1
        LEFT JOIN Submission_Checklist as SC ON SC.eappId = E.eappId
        LEFT JOIN Leads as L ON L.leadId = SI.leadId
        LEFT JOIN FNA_Main as NA ON NA.naId = SI.naId
        LEFT JOIN IRPQ ON IRPQ.irpqId = SI.irpqId
        LEFT JOIN SI_PERSONS as SIP ON SIP.siId = SI.siId AND SIP.personType = 1
        WHERE 
            PENDING_STATUS != '1111' 
            AND SI.ISDELETED != 1
            AND datetime(SI.dateCreated/1000, 'unixepoch') >= datetime('now', '-90 days')  
            ${addQuery}
        GROUP BY SI.siId
        ${orderBy}
      `;

      let FINAL_QUERY = channel == CHANNEL.HSBC ? GET_APPLICATIONS_HSBC : GET_APPLICATIONS;
      const result = await this.databaseService.database.executeSql(FINAL_QUERY, []);

      if (result) {
        let applications: BaseCardInfo[] = [];
        if (result.rows && result.rows.length > 0) {
          for (let i = 0; i < result.rows.length; i++) {
            let {
              leadSyncStatus, fnaSyncStatus, irpqSyncStatus, siSyncStatus, eappSyncStatus, submissionSyncStatus,
              leadId, naId, irpqId, siId, eappId, submissionId, lastName, firstName, middleName, isAoEqualsPi,
              insuredName, phoneNumber, emailAddress, attachedDate, overallStatus, applicationNumber, needType,
              fnaIsWaived, personId, irpqAns1, irpqAns2, irpqAns3, irpqAns4, irpqAns5, irpqAns6, irpqAns7, irpqAns8,
              planCode, policyNumber, dateModified, dateCreated, siDateCreated
            } = result.rows.item(i);

            let leadSyncStat = leadSyncStatus == '2' ? 1 : 0,
              fnaSyncStat = fnaSyncStatus == '2' ? 1 : 0,
              irpqSyncStat = irpqSyncStatus == '2' ? 1 : 0,
              siSyncStat = siSyncStatus == '2' ? 1 : 0,
              eappSyncStat = eappSyncStatus == '2' ? 1 : 0,
              submissionSyncStat = submissionSyncStatus == '2' ? 1 : 0;

            applications[i] = Object.assign({},
              result.rows.item(i), {
                leadId, naId, irpqId, siId, eappId, submissionId,
                lastName, firstName, middleName,
                insuredName: !isAoEqualsPi ? insuredName : null,
                phoneNumber, emailAddress,

                leadSyncStatus, fnaSyncStatus, irpqSyncStatus, siSyncStatus, eappSyncStatus, attachedDate,
                submissionSyncStatus,
                syncStatus: overallStatus,
                syncCountStatus: (channel == CHANNEL.HSBC) ? leadSyncStat + siSyncStat + eappSyncStat + submissionSyncStat : leadSyncStat + fnaSyncStat + irpqSyncStat + siSyncStat + eappSyncStat + submissionSyncStat,

                applicationNumber, needType, fnaIsWaived, personId,
                irpqAns: (channel == CHANNEL.HSBC) ? [] : [irpqAns1, irpqAns2, irpqAns3, irpqAns4, irpqAns5, irpqAns6, irpqAns7, irpqAns8],
                product: PLAN_TITLE[planCode] ? PLAN_TITLE[planCode] : null,
                policyNumber,
                lastUpdatedVal: dateModified,
                lastUpdated: this.utilService.formatWSDate(dateModified),
                createdDate: this.utilService.formatWSDate(dateCreated),
                siDateCreated: this.utilService.formatWSDate(siDateCreated),
                isDisabled: true,
                type: MODULE.DASHBOARD
              });
          }
        }

        applications = wheredata.keyword !== '' ? this.utilService.search(wheredata.keyword, applications) : applications;
        response.next(applications);
      }
    })
    return response.asObservable();
  }

  getPendingExpiringApplication(whereData: BehaviorSubject<any>): Observable<any> {
    const response: Subject<any> = new Subject();
    whereData.subscribe(async (wheredata) => {
      let GET_APPLICATION = `
        SELECT  
          SI.siId,
          L.leadId, 
          L.leadStatus,
          L.isDeleted as leadIsDeleted,
          L.SYNCSTATUS as leadSyncStatus,
          CASE 
            WHEN ((E.isDeleted = 0 AND L.leadId IS NOT NULL) AND (E.eappStatus IN ('SUBMITTED', 'For Underwriting', 'Encoded w/ Reqt', 'For Issuance', 'Issued')))
            THEN 'SAL'
          END AS 'leadSaleStatus',
          
          NA.naId as fnaId,
          NA.NEEDTYPE as needType,
          NA.ISWAIVED as fnaIsWaived,
          NA.SYNCSTATUS as fnaSyncStatus,
          NA.isDeleted as fnaIsDeleted,
          
          CASE
            WHEN (
              (NA.naId IS NOT NULL AND NA.isDeleted != 1) AND 
              (SI.siId IS NOT NULL AND SI.isDeleted != 1) AND 
              (IRPQ.irpqId IS NOT NULL AND IRPQ.isDeleted != 1) AND 
              (E.eappId IS NOT NULL AND E.isDeleted != 1) 
            )
            THEN(
              CASE
                WHEN E.eappStatus IN ('IN-PROGRESS', 'COMPLETED') THEN 'ATTACHED'
                WHEN E.eappStatus LIKE '%encoded%' THEN 'SUBMITTED'
                WHEN E.eappStatus IN ('For Underwriting', 'FOR ISSUANCE') THEN 'SUBMITTED'
                ELSE E.eappStatus
              END
            )
            WHEN (NA.naId IS NOT NULL AND NA.isDeleted !=1 AND NA.isCompleted != 0)
            THEN (
              CASE
                WHEN 
                  (julianday('now', 'localtime') - julianday((NA.dateModified/1000), 'unixepoch', 'localtime')) > 365 AND 
                  NA.isCompleted != 0 
                  THEN 'EXPIRED'
                WHEN (julianday('now', 'localtime') - julianday((NA.dateModified/1000), 'unixepoch', 'localtime')) <= 365
                  AND NA.isCompleted != 0 THEN 'COMPLETED'
                ELSE 'IN-PROGRESS'
              END
            )
            WHEN (NA.naId IS NOT NULL AND IRPQ.irpqId IS NOT NULL)
            THEN 'ATTACHED'
            ELSE 'IN-PROGRESS'
          END AS fnaStatus,
          IRPQ.irpqId,
          IRPQ.SYNCSTATUS as irpqSyncStatus,
          IRPQ.isDeleted as irpqIsDeleted,
          CASE 
            WHEN (
              (IRPQ.irpqId IS NOT NULL and IRPQ.isDeleted != 1) AND 
              (SI.irpqId IS NOT NULL and SI.isDeleted != 1) AND 
              (E.eappId IS NOT NULL and E.isDeleted != 1) 
            )
            THEN (
              CASE
                WHEN E.eappStatus IN ('IN-PROGRESS', 'COMPLETED') THEN 'ATTACHED'
                WHEN E.eappStatus LIKE '%encoded%' THEN 'SUBMITTED'
                WHEN E.eappStatus IN ('For Underwriting', 'FOR ISSUANCE') THEN 'SUBMITTED'
                ELSE E.eappStatus
              END
            )	
            WHEN (IRPQ.irpqId IS NOT NULL AND IRPQ.isCompleted != 0) 
            THEN 'COMPLETED'
            WHEN (IRPQ.irpqId IS NOT NULL AND E.eappId IS NOT NULL AND E.isDeleted != 1)         
            THEN 'ATTACHED'
            ELSE 'IN-PROGRESS'
          END AS 'irpqStatus',
          SI.ISAOEQUALSPI as isAoEqualsPi,
          SI.SYNCSTATUS as siSyncStatus,
          SI.isDeleted as siIsDeleted,
          SI.dateCreated as siDateCreated,
          SI.isCompleted as siIsCompleted,
          CASE
          WHEN (
              SELECT eAppMainCase.eappStatus 
              FROM SI_MAIN siMainCase
              INNER JOIN EAPP_Main eAppMainCase
              ON siMainCase.siId = eAppMainCase.siId
              WHERE siMainCase.siId = SI.siId
              AND eAppMainCase.isDeleted = 0
          ) IN ('IN-PROGRESS','COMPLETED') THEN 'ATTACHED'
          ELSE (
            SELECT eAppMainCase.eappStatus 
            FROM SI_MAIN siMainCase
            INNER JOIN EAPP_Main eAppMainCase
            ON siMainCase.siId = eAppMainCase.siId
            WHERE siMainCase.siId = SI.siId
            AND eAppMainCase.isDeleted = 0
          )
          END as 'siStatus',
          E.APPLICATIONNUMBER as applicationNumber,
          E.SYNCSTATUS as eappSyncStatus,
          E.eappStatus,
          E.isDeleted as eappIsDeleted,
          E.eappId,
          E.attachedDate,
          MAX(
            CASE WHEN SC.DATEMODIFIED THEN CAST(SC.DATEMODIFIED AS TEXT) ELSE 0 END,
            CASE WHEN E.DATEMODIFIED THEN CAST(E.DATEMODIFIED AS TEXT) ELSE 0 END,
            CASE WHEN SI.DATEMODIFIED THEN CAST(SI.DATEMODIFIED AS TEXT) ELSE 0 END,
            CASE WHEN IRPQ.DATEMODIFIED THEN CAST(IRPQ.DATEMODIFIED AS TEXT) ELSE 0 END,
            CASE WHEN NA.DATEMODIFIED THEN CAST(NA.DATEMODIFIED AS TEXT) ELSE 0 END,
            CASE WHEN L.DATEMODIFIED THEN CAST(L.DATEMODIFIED AS TEXT) ELSE 0 END
          ) AS dateModified,
          SC.SYNCSTATUS AS submissionSyncStatus,
          SC.dateCreated as createdDate,
          SC.policyNumber
        FROM SI_MAIN as SI 
        LEFT JOIN EAPP_Main as E ON E.siId = SI.siId AND E.isDeleted != 1
        LEFT JOIN Submission_Checklist as SC ON SC.eappId = E.eappId
        LEFT JOIN Leads as L ON L.leadId = SI.leadId
        LEFT JOIN FNA_Main as NA ON NA.naId = SI.naId
        LEFT JOIN IRPQ ON IRPQ.irpqId = SI.irpqId
        WHERE
          SI.SIID IS ?
      `;

      const result = await this.databaseService.database.executeSql(GET_APPLICATION, [wheredata.siId]);
      if (result.rows && result.rows.length > 0) {
        let app = result.rows.item(0);
        // lead status
        const leadStatus = app.leadSaleStatus ? app.leadSaleStatus : app.leadStatus;

        let fnaStatus;
        let irpqStatus;
        if (!wheredata.isHSBCChannel) {
          // fna status
          const fnaIsSubmitted = ![STATUS.IN_PROGRESS, STATUS.COMPLETED, STATUS.ATTACHED, STATUS.SIGNED].includes(app.fnaStatus.toUpperCase()),
            fnaIsCompleted = app.fnaStatus === STATUS.COMPLETED;
          fnaStatus = app.fnaId ? app.fnaIsWaived ? (fnaIsCompleted ? STATUS.WAIVED : (fnaIsSubmitted ? STATUS.SUBMITTED : app.fnaStatus)) : (fnaIsSubmitted ? STATUS.SUBMITTED : app.fnaStatus) : null;

          // irpq status 
          if (app.irpqStatus) {
            let isSubmitted = ![STATUS.IN_PROGRESS, STATUS.COMPLETED, STATUS.ATTACHED, STATUS.SIGNED].includes(app.irpqStatus.toUpperCase());
            irpqStatus = app.irpqId ? isSubmitted ? STATUS.SUBMITTED : app.irpqStatus.toUpperCase() : null;
          }
        }

        // si status
        const siIsCompleted = app.siIsCompleted;
        let siStatus = app.siStatus ? app.siStatus.toUpperCase() : siIsCompleted ? STATUS.COMPLETED : STATUS.IN_PROGRESS;
        const siIsInProgress = siStatus === STATUS.IN_PROGRESS,
          siIsSubmitted = ![STATUS.IN_PROGRESS, STATUS.COMPLETED, STATUS.ATTACHED, STATUS.SIGNED].includes(siStatus.toUpperCase()),
          siIsAttached = siStatus === STATUS.ATTACHED,
          isSigned = siStatus === STATUS.SIGNED,
          siIsExpired = this.utilService.getDayDifference(+app.siDateModified) >= 60 && (siIsCompleted || siIsAttached);
        siStatus = siIsInProgress ? STATUS.IN_PROGRESS : siIsAttached ? STATUS.ATTACHED : isSigned ? STATUS.SIGNED : siIsSubmitted ? STATUS.SUBMITTED : siIsCompleted ? STATUS.COMPLETED : siIsExpired ? STATUS.EXPIRED : STATUS.IN_PROGRESS;

        // eapp status
        let eappStatus;
        if (app.eappStatus) {
          let eappIsSubmitted = ![STATUS.IN_PROGRESS, STATUS.COMPLETED, STATUS.ATTACHED, STATUS.SIGNED].includes(app.eappStatus.toUpperCase());
          eappStatus = eappIsSubmitted ? STATUS.SUBMITTED : app.eappStatus.toUpperCase();
        }

        // checklist status
        let submissionStatus = app.eappStatus;

        let application: DashboardItemDetails[] = [];
        let isExpiredEappStatus = null;
        if (app.attachedDate) {
          const timeNow = new Date().getTime();
          const clientExpiryEpoch = new Date(app.attachedDate).getTime();
          if (clientExpiryEpoch > timeNow) {
            isExpiredEappStatus = false;
          } else {
            isExpiredEappStatus = true;
          }
        }

        application = [
          {
            id: app.leadId,
            type: MODULE.LEAD,
            module: DASHBOARD_MODULE_TITLES.LEAD,
            syncStatus: app.leadSyncStatus,
            formStatus: STATUS[leadStatus] ? STATUS[leadStatus] : leadStatus,
            isDeleted: app.leadIsDeleted
          }
        ];

        if (!wheredata.isHSBCChannel) {
          application.push(
            {
              id: app.fnaId,
              type: MODULE.NA,
              module: DASHBOARD_MODULE_TITLES.NA,
              syncStatus: app.fnaSyncStatus,
              formStatus: STATUS[fnaStatus] ? STATUS[fnaStatus] : fnaStatus,
              isDeleted: app.fnaIsDeleted
            },
            {
              id: app.irpqId,
              type: MODULE.IRPQ,
              module: DASHBOARD_MODULE_TITLES.IRPQ,
              syncStatus: app.irpqSyncStatus,
              formStatus: STATUS[irpqStatus] ? STATUS[irpqStatus] : irpqStatus,
              isDeleted: app.irpqIsDeleted
            }
          );
        }

        application.push(
          {
            id: app.siId,
            type: MODULE.SI,
            module: DASHBOARD_MODULE_TITLES.SI,
            syncStatus: app.siSyncStatus,
            formStatus: STATUS[siStatus] ? STATUS[siStatus] : siStatus,
            isDeleted: app.siIsDeleted
          },
          {
            id: app.eappId,
            type: MODULE.EAPP,
            module: DASHBOARD_MODULE_TITLES.EAPP,
            syncStatus: isExpiredEappStatus ? 3 : app.eappSyncStatus,
            formStatus: STATUS[isExpiredEappStatus ? 3 : app.eappSyncStatus] ? STATUS[isExpiredEappStatus ? 3 : app.eappSyncStatus] : eappStatus,
            isDeleted: app.eappIsDeleted
          },
          {
            id: app.submissionId,
            type: MODULE.SUBMISSION_CHECKLIST,
            module: DASHBOARD_MODULE_TITLES.CHECKLIST,
            syncStatus: isExpiredEappStatus ? 3 : app.submissionSyncStatus,
            formStatus: STATUS[isExpiredEappStatus ? 3 : submissionStatus] ? STATUS[isExpiredEappStatus ? 3 : submissionStatus] : submissionStatus,
            isDeleted: app.eappIsDeleted
          }
        )
        response.next(application);
      }
    })
    return response.asObservable();
  }

  async deleteExpiredApplications() {
    let GET_EXPIRED_SI = `
      SELECT  
        SI.siId,
        E.eappId, 
        SC.submissionId,
        (
          SELECT GROUP_CONCAT(personId)
          FROM EAPP_Person 
          WHERE eappId = E.eappId
        ) as personIds,
        (
          SELECT nonMedId
          FROM EAPP_NonMed_Main 
          WHERE eappId = E.eappId
        ) as nonMedId,
        (
          CASE WHEN SI.siId IS NOT NULL THEN 1 ELSE 0 END ||  
          CASE WHEN E.eappId IS NOT NULL THEN 1 ELSE 0 END  ||
          CASE WHEN sc.submissionId IS NOT NULL THEN 1 ELSE 0 END ||
          CASE WHEN sc.policyNumber IS NOT NULL THEN 1 ELSE 0 END  
        ) AS PENDING_STATUS,
        ( 
        CASE WHEN datetime(SI.dateCreated/1000, 'unixepoch') <= datetime('now', '-${this.expiredVal}') THEN 1 ELSE 0 END  
        ) AS SI_Expired
      FROM SI_MAIN as SI 
      LEFT JOIN EAPP_Main as E ON E.siId = SI.siId
      LEFT JOIN Submission_Checklist as SC ON SC.eappId = E.eappId
      WHERE datetime(SI.dateCreated/1000, 'unixepoch') <= datetime('now', '-${this.expiredVal}')
      AND PENDING_STATUS IN ('1000', '1100', '1110')
      AND SI_Expired = 1
      GROUP BY SI.siId;
    `;

    const result = await this.databaseService.database.executeSql(GET_EXPIRED_SI, []);
    if (result.rows && result.rows.length > 0) {
      let siIds: string[] = [],
        eAppIds: string[] = [],
        scIds: string[] = [],
        eAppPersonIds: string[] = [],
        eAppNonMedIds: string[] = [];

      for (let i = 0; i < result.rows.length; i++) {
        let { siId, eappId, submissionId, personIds, nonMedId } = result.rows.item(i);

        if (siId) {
          siIds.push(siId);
        }

        if (eappId) {
          eAppIds.push(siId);
        }

        if (submissionId) {
          scIds.push(siId);
        }

        if (personIds) {
          eAppPersonIds.push(personIds);
        }

        if (nonMedId) {
          eAppNonMedIds.push(nonMedId);
        }
      }

      await this.deleteSI(siIds);
      await this.deleteEApp({ eAppIds, eAppPersonIds, eAppNonMedIds })
      await this.deleteSC(scIds);
    }

  }

  async deleteSI(siIds: string[]) {
    let SI_DELETE_QUERY: string[] = [];
    const relatedNATables = [
      'SI_MAIN', 'SI_PERSONS', 'SI_TOPUP', 'SI_RIDERS', 'SI_FUNDS'
    ];

    if (siIds.length > 0) {
      relatedNATables.forEach(table => {
        const deleteQuery = `DELETE FROM ${table} WHERE siId IN ('${
          siIds.map((id) => id).join("','")
          }')`;
        SI_DELETE_QUERY.push(deleteQuery);
      });

      await this.databaseService.database.sqlBatch(SI_DELETE_QUERY);
    }
  }

  async deleteEApp(ids) {
    let EAPP_DELETE_QUERY: string[] = [];
    const relatedNATables = [
      'EAPP_Main', 'EAPP_Beneficiaries', 'EAPP_FundsTopUpDirection', 'EAPP_Payout_Banks', 'EAPP_PendingApplication',
      'EAPP_ReplacementNotification', 'EAPP_Signatures', 'EAPP_TotalInsuranceInForce', 'EAPP_Person', 'EAPP_NonMed_Main'
    ];

    let { eAppIds, eAppPersonIds, eAppNonMedIds } = ids;

    if (eAppIds.length > 0) {
      relatedNATables.forEach(table => {
        const deleteQuery = `DELETE FROM ${table} WHERE eappId IN ('${
          eAppIds.map((id) => id).join("','")
          }')`;
        EAPP_DELETE_QUERY.push(deleteQuery);
      });

      // const CONCAT_DELETE_QUERY = EAPP_DELETE_QUERY.join('; '); // Concatenating delete statements with a semicolon separator
      await this.databaseService.database.sqlBatch(EAPP_DELETE_QUERY); // only execute when query and logic is final


      this.deleteEAppPersons(eAppPersonIds);
      this.deleteEAppNonMeds(eAppNonMedIds);
    }
  }

  async deleteEAppPersons(eappPersonIds: string[]) {
    let EAPP_PERSONS_DELETE_QUERY: string[] = [];
    if (eappPersonIds.length > 0) {
      eappPersonIds.forEach(ids => {
        const splitNumbers = ids.split(',');
        const convertedString = splitNumbers.map(num => `'${num}'`).join(', ');
        const deleteQuery = `DELETE FROM EAPP_Person_VesselOperationInfo WHERE personId IN (${convertedString})`;
        EAPP_PERSONS_DELETE_QUERY.push(deleteQuery);
      });

      // const CONCAT_DELETE_QUERY = EAPP_PERSONS_DELETE_QUERY.join('; '); // Concatenating delete statements with a semicolon separator
      await this.databaseService.database.sqlBatch(EAPP_PERSONS_DELETE_QUERY); // only execute when query and logic is final
    }

  }

  async deleteEAppNonMeds(eappNonMedIds: string[]) {
    let EAPP_NONMED_DELETE_QUERY: string[] = [];
    const relatedNonMedTables = [
      'EAPP_NonMed_Alcohol_Doctors', 'EAPP_NonMed_Answers', 'EAPP_NonMed_Detox_Doctors',
      'EAPP_NonMed_FamilyMembers', 'EAPP_NonMed_Foreign_Travel_Residence', 'EAPP_NonMed_VesselOperationInfo'
    ];

    if (eappNonMedIds.length > 0) {
      relatedNonMedTables.forEach(table => {
        const deleteQuery = `DELETE FROM ${table} WHERE nonMedId IN ('${
          eappNonMedIds.map((id) => id).join("','")
          }')`;
        EAPP_NONMED_DELETE_QUERY.push(deleteQuery);
      });

      // const CONCAT_DELETE_QUERY = EAPP_NONMED_DELETE_QUERY.join('; '); // Concatenating delete statements with a semicolon separator
      await this.databaseService.database.sqlBatch(EAPP_NONMED_DELETE_QUERY); // only execute when query and logic is final
    }
  }


  async deleteSC(scIds: string[]) {
    let SC_DELETE_QUERY: string[] = [];
    const relatedNATables = [
      'Submission_Checklist', 'Submission_EPayment', 'Submission_Attachments', 'Submission_ADA', 'Submission_ACR',
      'Submission_ACB'
    ];

    if (scIds.length > 0) {
      relatedNATables.forEach(table => {
        const deleteQuery = `DELETE FROM ${table} WHERE submissionId IN ('${
          scIds.map((id) => id).join("','")
          }')`;
        SC_DELETE_QUERY.push(deleteQuery);
      });

      // const CONCAT_DELETE_QUERY = SC_DELETE_QUERY.join('; '); // Concatenating delete statements with a semicolon separator
      await this.databaseService.database.sqlBatch(SC_DELETE_QUERY); // only execute when query and logic is final
    }
  }

  async deleteExpiredNAIRPQ() {
    let GET_EXPIRED_NA_AND_IRPQ = `
      SELECT
        NA.naId, IRPQ.irpqId, SI.siId,
        (
          CASE WHEN datetime(NA.dateCreated/1000, 'unixepoch') <= datetime('now', '-${this.expiredNAIRPQVal}') THEN 1 ELSE 0 END   ||  
          CASE WHEN datetime(IRPQ.dateCreated/1000, 'unixepoch') <= datetime('now', '-${this.expiredNAIRPQVal}') THEN 1 ELSE 0 END ||
          CASE WHEN SI.siId IS NOT NULL THEN 1 ELSE 0 END
        ) AS EXPIRED_STATUS
      FROM FNA_Main as NA
      LEFT JOIN SI_MAIN as SI ON NA.naId = SI.naId
      LEFT JOIN IRPQ ON IRPQ.naId = NA.naId
      WHERE EXPIRED_STATUS IN ('110', '100', '010');
      `;

    const result = await this.databaseService.database.executeSql(GET_EXPIRED_NA_AND_IRPQ, null);

    if (result.rows && result.rows.length > 0) {
      let naIds: string[] = [], irpqIds: string[] = [];

      for (let i = 0; i < result.rows.length; i++) {
        let { naId, irpqId } = result.rows.item(i);

        if (naId) {
          naIds.push(naId);
        }

        if (irpqId) {
          irpqIds.push(irpqId);
        }
      }

      this.deleteNA(naIds);
      this.deleteIRPQ(irpqIds);
    }
  }

  async deleteIRPQ(irpqIds: string[]) {
    if (irpqIds.length > 0) {
      const DELETE_QUERY = `DELETE FROM IRPQ WHERE irpqId IN ('${irpqIds.map((id) => id).join("','")}')`;
      await this.databaseService.database.executeSql(DELETE_QUERY, null); // only execute when query and logic is final
    }
  }

  async deleteNA(naIds: string[]) {
    let NA_DELETE_QUERY: string[] = [];
    const relatedNATables = [
      'FNA_MAIN', 'FNA_S', 'FNA_P', 'FNA_H', 'FNA_E', 'FNA_R', 'FNA_EP'
    ];

    if (naIds.length > 0) {
      relatedNATables.forEach(table => {
        const deleteQuery = `DELETE FROM ${table} WHERE naId IN ('${
          naIds.map((id) => id).join("','")
          }')`;
        NA_DELETE_QUERY.push(deleteQuery);
      });

      // const CONCAT_DELETE_QUERY = NA_DELETE_QUERY.join('; '); // Concatenating delete statements with a semicolon separator
      await this.databaseService.database.sqlBatch(NA_DELETE_QUERY); // only execute when query and logic is final
    }
  }

  async deleteSubmittedApplications() {
    let GET_SUBMITTED_APPLICATIONS = `
      SELECT  
        SI.siId,
        E.eappId, 
        SC.submissionId,
        (
          SELECT GROUP_CONCAT(personId)
          FROM EAPP_Person 
          WHERE eappId = E.eappId
        ) as personIds,
        (
          SELECT nonMedId
          FROM EAPP_NonMed_Main 
          WHERE eappId = E.eappId
        ) as nonMedId,
        (
          CASE WHEN SI.siId IS NOT NULL THEN 1 ELSE 0 END ||  
          CASE WHEN E.eappId IS NOT NULL THEN 1 ELSE 0 END  ||
          CASE WHEN sc.submissionId IS NOT NULL THEN 1 ELSE 0 END ||
          CASE WHEN sc.policyNumber IS NOT NULL THEN 1 ELSE 0 END  
        ) AS PENDING_STATUS
      FROM SI_MAIN as SI 
      LEFT JOIN EAPP_Main as E ON E.siId = SI.siId
      LEFT JOIN Submission_Checklist as SC ON SC.eappId = E.eappId
      WHERE PENDING_STATUS = '1111'
      GROUP BY SI.siId`;

    const result = await this.databaseService.database.executeSql(GET_SUBMITTED_APPLICATIONS, []);
    if (result.rows && result.rows.length > 0) {
      let siIds: string[] = [],
        eAppIds: string[] = [],
        scIds: string[] = [],
        eAppPersonIds: string[] = [],
        eAppNonMedIds: string[] = [];

      for (let i = 0; i < result.rows.length; i++) {
        let { siId, eappId, submissionId, personIds, nonMedId } = result.rows.item(i);

        if (siId) {
          siIds.push(siId);
        }

        if (eappId) {
          eAppIds.push(siId);
        }

        if (submissionId) {
          scIds.push(siId);
        }

        if (personIds) {
          eAppPersonIds.push(personIds);
        }

        if (nonMedId) {
          eAppNonMedIds.push(nonMedId);
        }
      }

      await this.deleteSI(siIds);
      await this.deleteEApp({ eAppIds, eAppPersonIds, eAppNonMedIds })
      await this.deleteSC(scIds);
    }
  }

  getSubmittedExpiredApplications(
    status: string,
    page: number,
    size: number,
    callAssureApi: boolean,
    dateFrom?: string,
    dateTo?: string,
    keyword?: string,
  ): Observable<any> {
    return from(this.initialize()).pipe(
      switchMap(() => {
        const paramsObj = {
          page: page.toString(),
          size: size.toString(),
          dateFrom: dateFrom ? dateFrom : undefined,
          dateTo: dateTo ? dateTo : undefined,
          keyWord: keyword ? keyword : undefined,
          status: status,
          callAssureApi: callAssureApi
        };
        const paramsString = Object.entries(paramsObj)
          .filter(([key, value]) => value !== undefined)
          .map(([key, value]) => `${key}=${value}`)
          .join('&');
        return this.http.get(`${environment.config.apiUrl}/accountmanagers/${this.amId}/getApplications?${paramsString}`, {}, this.setHeaders())
      }),
      map((response) => {
        const data = JSON.parse(response.data);
        if (status == 'SUBMITTED') {
          this.deleteSubmittedApp$.next(data);
        }
        return data
      }),
      catchError(ex => {
        console.error('An error occurred:', ex);
        let errorMessage = null;
        let errorObj;
        try {
          errorObj = JSON.parse(ex.error);
        } catch (e) {
          errorObj = ex
        }
        const { status, error } = errorObj;
        const NO_INTERNET_CODES = [-3, -6];
        if (NO_INTERNET_CODES.includes(status)) {
          errorMessage = `Unable to establish a connection with the server. Please verify your internet connectivity.`;
        } else if (status === 404) {
          errorMessage = `Error: The requested url was not found, Status code: ${status}`;
        } else {
          errorMessage = `Error: ${error}, Status code: ${status}`;
        }
        return throwError(errorMessage);
      })
    );
  }

  getQuotation(
    quotationId: string,
  ): Observable<any> {
    return from(this.initialize()).pipe(
      switchMap(() => {
        return this.http.get(`${environment.config.apiUrl}/accountmanagers/${this.amId}/getQuotation/${quotationId}`, {}, this.setHeaders())
      }),
      map(response => JSON.parse(response.data)),
      catchError(ex => {
        console.error('An error occurred:', ex);
        let errorMessage = null;
        let errorObj;
        try {
          errorObj = JSON.parse(ex.error);
        } catch (e) {
          errorObj = ex
        }
        const { status, error } = errorObj;
        const NO_INTERNET_CODES = [-3, -6];
        if (NO_INTERNET_CODES.includes(status)) {
          errorMessage = `Unable to establish a connection with the server. Please verify your internet connectivity.`;
        } else if (status === 404) {
          errorMessage = `Error: The requested url was not found, Status code: ${status}`;
        } else {
          errorMessage = `Error: ${error}, Status code: ${status}`;
        }
        return throwError(errorMessage);
      })
    );
  }

  getApplication(
    applicationId: string,
  ): Observable<any> {
    return from(this.initialize()).pipe(
      switchMap(() => {
        return this.http.get(`${environment.config.apiUrl}/accountmanagers/${this.amId}/getApplication/${applicationId}`, {}, this.setHeaders())
      }),
      map(response => JSON.parse(response.data)),
      catchError(ex => {
        console.error('An error occurred:', ex);
        let errorMessage = null;
        let errorObj;
        try {
          errorObj = JSON.parse(ex.error);
        } catch (e) {
          errorObj = ex
        }
        const { status, error } = errorObj;
        const NO_INTERNET_CODES = [-3, -6];
        if (NO_INTERNET_CODES.includes(status)) {
          errorMessage = `Unable to establish a connection with the server. Please verify your internet connectivity.`;
        } else if (status === 404) {
          errorMessage = `Error: The requested url was not found, Status code: ${status}`;
        } else {
          errorMessage = `Error: ${error}, Status code: ${status}`;
        }
        return throwError(errorMessage);
      })
    );
  }

  async initialize() {
    this.token = await this.storage.get(SETTING_KEYS.TOKEN);
    this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
  }

  async runFullSync() {
    const fullSyncAge = await this.storage.get(SETTING_KEYS.FULLSYNCAGE);
    if (!!fullSyncAge && fullSyncAge != "undefined") {
      const fullSyncAgeDuration = moment.duration(moment().diff(moment(fullSyncAge))).asMinutes();
      return fullSyncAgeDuration > 30 ? true : false;
    }
    return true;
  }

  async submittedExistInPending(submittedApplications) {
    let quotationIds = [];
    if (submittedApplications && submittedApplications.data) {
      quotationIds = submittedApplications.data.reduce((acc, obj) => {
        acc.push(obj.quotationId);
        return acc;
      }, []);
    }

    let GET_APPLICATIONS = `
        SELECT  
            SI.siId,
            SI.serverId,
            E.eappId,
            SC.submissionId,
            (
              SELECT GROUP_CONCAT(personId)
              FROM EAPP_Person 
              WHERE eappId = E.eappId
            ) as personIds,
            (
              SELECT nonMedId
              FROM EAPP_NonMed_Main 
              WHERE eappId = E.eappId
            ) as nonMedId,
            SI.ISDELETED as SI_DELETED
        FROM SI_MAIN as SI 
        LEFT JOIN EAPP_Main as E ON E.siId = SI.siId
        LEFT JOIN Submission_Checklist as SC ON SC.eappId = E.eappId
        WHERE SI.serverId IN ('${quotationIds.map((id) => id).join("','")}')
        GROUP BY SI.siId`;

    try {
      const result = await this.databaseService.database.executeSql(GET_APPLICATIONS, []);
      if (result.rows && result.rows.length > 0) {
        let siIds: string[] = [],
          eAppIds: string[] = [],
          scIds: string[] = [],
          eAppPersonIds: string[] = [],
          eAppNonMedIds: string[] = [];

        for (let i = 0; i < result.rows.length; i++) {
          let { siId, eappId, submissionId, personIds, nonMedId } = result.rows.item(i);

          if (siId) siIds.push(siId);
          if (eappId) eAppIds.push(siId);
          if (submissionId) scIds.push(siId);
          if (personIds) eAppPersonIds.push(personIds);
          if (nonMedId) eAppNonMedIds.push(nonMedId);
        }

        await Promise.all([
          this.deleteSI(siIds),
          this.deleteEApp({ eAppIds, eAppPersonIds, eAppNonMedIds }),
          this.deleteSC(scIds),
        ]);
      }
    } catch (error) {
      console.log("LOG submittedExistingPending error: ", error);
    }
  }
}
