import { CONSTANT_DB_TABLE } from '../constant-table-name';
import { SYNC_STATUS } from '@utils/constants/sync-status';

export const SQL_QUERIES = {
    GET_LOGIN: 'SELECT * FROM LOGIN',
    INSERT_LOGIN: `INSERT OR REPLACE INTO LOGIN (username,
    password,
    lastOnlineLoginDateTime,
    offlineLoginCount,
    isAccountLockedOffline) VALUES(?,?,?,?,?)`,
    UPDATE_LOGIN: `Update LOGIN set password = ?,
    lastOnlineLoginDateTime = ?,
    offlineLoginCount = ?,
    isAccountLockedOffline = ? where username = ?`,
    UPDATE_ACCOUNT_OFFLINE: `Update LOGIN set isAccountLockedOffline = ? where username = ?`,
    UPDATE_OFFLINE_BAD_LOGIN_COUNT: `update LOGIN set offlineLoginCount = ? where username = ?`,
    INSERT_ACCOUNT_MANAGER: `INSERT OR REPLACE INTO
    ACCOUNTMANAGER (firstName, lastName,middleName,
    nickName, profilePicturePath, mobileNumber, emailID, isTandCAccepted, intermediaryCode, channelName,
    lastModifiedDateTime,
    lastSyncDateTime, accountManagerBlob) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?)`,
    UPDATE_BRANCH: `INSERT OR REPLACE INTO BRANCH (accountManagerID, branchCode, branchName) VALUES `,

    /*  LEADS SQL QUERIES - START */
    GET_ALL_LEADS: `SELECT *,
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
    WHERE leads.isDeleted = ?
    ORDER BY leads.dateModified DESC`,
    GET_LEAD: `SELECT *,
  CASE
  WHEN (
      SELECT eAppMainCase.eappStatus
      FROM EAPP_Main eAppMainCase
      INNER JOIN Leads leadsCase
      ON leadsCase.leadId = eAppMainCase.leadId
      WHERE leadsCase.leadId = leads.leadId
      AND eAppMainCase.isDeleted = 0
  ) IN ('SUBMITTED', 'For Underwriting', 'Encoded w/ Reqt', 'For Issuance', 'Issued')
    THEN 'SAL'
    END AS 'saleStatus'
    FROM Leads leads
    WHERE leads.isDeleted = ? AND leads.leadId = ?`,
    /*  LEADS SQL QUERIES - END*/
    /*  FNA SQL QUERIES - START */
    GET_FNA_STATUS_BY_ID: `SELECT
    CASE
        WHEN (
            SELECT
                COUNT(fnaSi.naId)
            FROM
                FNA_MAIN fnaSi
                INNER JOIN SI_MAIN siMain ON fnaSi.naId = siMain.naId
            WHERE
                (fnaSi.naId = fnaMain.naId) AND (siMain.isDeleted != 1)
        ) != 0 THEN (
            SELECT
                CASE
                    WHEN (
                        SELECT
                            COUNT(fnaMainCase2.naId)
                        FROM
                            FNA_MAIN fnaMainCase2
                            INNER JOIN SI_MAIN siMainCase2 ON fnaMainCase2.naId = siMainCase2.naId
                            INNER JOIN EAPP_Main eAppMainCase2 ON siMainCase2.siId = eAppMainCase2.siId
                        WHERE
                            (fnaMainCase2.naId = fnaMain.naId) AND (eAppMainCase2.isDeleted != 1)
                    ) != 0 THEN (
                        SELECT
                            CASE
                                WHEN eAppMainCase3.eappStatus IN ('IN-PROGRESS', 'COMPLETED') THEN 'ATTACHED'
                                WHEN eAppMainCase3.eappStatus LIKE '%encoded%' THEN 'SUBMITTED'
                                WHEN eAppMainCase3.eappStatus IN ('For Underwriting', 'FOR ISSUANCE') THEN 'SUBMITTED'
                                ELSE eAppMainCase3.eappStatus
                            END
                        FROM
                            FNA_MAIN fnaMainCase3
                            INNER JOIN SI_MAIN siMainCase3 ON fnaMainCase3.naId = siMainCase3.naId
                            INNER JOIN EAPP_Main eAppMainCase3 ON siMainCase3.siId = eAppMainCase3.siId
                        WHERE
                            fnaMainCase3.naId = fnaMain.naId AND eAppMainCase3.isDeleted != 1
                    )
                    ELSE 'ATTACHED'
                END
        )
        WHEN (
            SELECT
                COUNT(fnaIrpq.naId)
            FROM
                FNA_MAIN fnaIrpq
                INNER JOIN IRPQ irpqMain ON fnaIrpq.naId = irpqMain.naId
            WHERE
                (fnaIrpq.naId = fnaMain.naId) AND (irpqMain.isDeleted != 1)
        ) != 0 THEN 'ATTACHED'
        ELSE (
            SELECT
                CASE
                WHEN ((julianday('now', 'localtime') - julianday((fnaMain.dateModified/1000), 'unixepoch', 'localtime')) > 365)
                AND (fnaMain.isCompleted != 0) THEN 'EXPIRED'
                WHEN ((julianday('now', 'localtime') - julianday((fnaMain.dateModified/1000), 'unixepoch', 'localtime')) <= 365)
                AND (fnaMain.isCompleted != 0) THEN 'COMPLETED'
                ELSE 'IN-PROGRESS'
            END
        )
    END as 'fnaStatus'
  FROM
    FNA_MAIN fnaMain
  WHERE fnaMain.naId = ?`,
    GET_ALL_FNA_DATA: `SELECT
  fnaMain.*, leads.firstName, leads.lastName, leads.middleName,
    CASE
        WHEN (
            SELECT
                COUNT(fnaSi.naId)
            FROM
                FNA_MAIN fnaSi
                INNER JOIN SI_MAIN siMain ON fnaSi.naId = siMain.naId
            WHERE
                (fnaSi.naId = fnaMain.naId) AND (siMain.isDeleted != 1)
        ) != 0 THEN (
            SELECT
                CASE
                    WHEN (
                        SELECT
                            COUNT(fnaMainCase2.naId)
                        FROM
                            FNA_MAIN fnaMainCase2
                            INNER JOIN SI_MAIN siMainCase2 ON fnaMainCase2.naId = siMainCase2.naId
                            INNER JOIN EAPP_Main eAppMainCase2 ON siMainCase2.siId = eAppMainCase2.siId
                        WHERE
                            (fnaMainCase2.naId = fnaMain.naId) AND (eAppMainCase2.isDeleted != 1)
                    ) != 0 THEN (
                        SELECT
                            CASE
                                WHEN eAppMainCase3.eappStatus IN ('IN-PROGRESS', 'COMPLETED') THEN 'ATTACHED'
                                WHEN eAppMainCase3.eappStatus LIKE '%encoded%' THEN 'SUBMITTED'
                                WHEN eAppMainCase3.eappStatus IN ('For Underwriting', 'FOR ISSUANCE') THEN 'SUBMITTED'
                                ELSE eAppMainCase3.eappStatus
                            END
                        FROM
                            FNA_MAIN fnaMainCase3
                            INNER JOIN SI_MAIN siMainCase3 ON fnaMainCase3.naId = siMainCase3.naId
                            INNER JOIN EAPP_Main eAppMainCase3 ON siMainCase3.siId = eAppMainCase3.siId
                        WHERE
                            fnaMainCase3.naId = fnaMain.naId AND eAppMainCase3.isDeleted != 1
                    )
                    ELSE 'ATTACHED'
                END
        )
        WHEN (
            SELECT
                COUNT(fnaIrpq.naId)
            FROM
                FNA_MAIN fnaIrpq
                INNER JOIN IRPQ irpqMain ON fnaIrpq.naId = irpqMain.naId
            WHERE
                (fnaIrpq.naId = fnaMain.naId) AND (irpqMain.isDeleted != 1)
        ) != 0 THEN 'ATTACHED'
        ELSE (
            SELECT
                CASE
					WHEN ((julianday('now', 'localtime') - julianday((fnaMain.dateModified/1000), 'unixepoch', 'localtime')) > 365)
                    AND (fnaMain.isCompleted != 0) THEN 'EXPIRED'
                    WHEN ((julianday('now', 'localtime') - julianday((fnaMain.dateModified/1000), 'unixepoch', 'localtime')) <= 365)
                    AND (fnaMain.isCompleted != 0) THEN 'COMPLETED'
                    ELSE 'IN-PROGRESS'
                END
        )
    END as 'fnaStatus'
  FROM
    FNA_MAIN fnaMain
  INNER JOIN Leads leads ON fnaMain.leadId = leads.leadID
  WHERE
    fnaMain.isDeleted = ? AND leads.isDeleted = ?
  ORDER BY fnaMain.dateModified DESC`,
    GET_FNA_DETAILS_BY_NEED_SAVINGS: `SELECT a.*, b.*,
  c.leadId, c.firstName, c.lastName, c.gender, c.phoneNumber, c.emailAddress
  FROM FNA_Main a
  INNER JOIN FNA_S b ON a.naId=b.naId
  INNER JOIN Leads c ON a.leadId=c.leadId
  WHERE (a.naId = ?) AND
  (a.isDeleted = 0 AND c.isDeleted = 0)`,
    GET_FNA_DETAILS_BY_NEED_PROTECTION: `SELECT a.*, b.*,
  c.leadId, c.firstName, c.lastName, c.gender, c.phoneNumber, c.emailAddress
  FROM FNA_Main a
  INNER JOIN FNA_P b ON a.naId=b.naId
  INNER JOIN Leads c ON a.leadId=c.leadId
  WHERE (a.naId = ?) AND
  (a.isDeleted = 0 AND c.isDeleted = 0)`,
    GET_FNA_DETAILS_BY_NEED_HEALTH: `SELECT a.*, b.*,
  c.leadId, c.firstName, c.lastName, c.gender, c.phoneNumber, c.emailAddress
  FROM FNA_Main a
  INNER JOIN FNA_H b ON a.naId=b.naId
  INNER JOIN Leads c ON a.leadId=c.leadId
  WHERE (a.naId = ?) AND
  (a.isDeleted = 0 AND c.isDeleted = 0)`,
    GET_FNA_DETAILS_BY_NEED_EDUCATION: `SELECT a.*, b.*,
  c.leadId, c.firstName, c.lastName, c.gender, c.phoneNumber, c.emailAddress
  FROM FNA_Main a
  INNER JOIN FNA_E b ON a.naId=b.naId
  INNER JOIN Leads c ON a.leadId=c.leadId
  WHERE (a.naId = ?) AND
  (a.isDeleted = 0 AND c.isDeleted = 0)`,
    GET_FNA_DETAILS_BY_NEED_RETIREMENT: `SELECT a.*, b.*,
  c.leadId, c.firstName, c.lastName, c.gender, c.phoneNumber, c.emailAddress
  FROM FNA_Main a
  INNER JOIN FNA_R b ON a.naId=b.naId
  INNER JOIN Leads c ON a.leadId=c.leadId
  WHERE (a.naId = ?) AND
  (a.isDeleted = 0 AND c.isDeleted = 0)`,
    GET_FNA_DETAILS_BY_NEED_ESTATE: `SELECT a.*, b.*,
  c.leadId, c.firstName, c.lastName, c.gender, c.phoneNumber, c.emailAddress
  FROM FNA_Main a
  INNER JOIN FNA_Ep b ON a.naId=b.naId
  INNER JOIN Leads c ON a.leadId=c.leadId
  WHERE (a.naId = ?) AND
  (a.isDeleted = 0 AND c.isDeleted = 0)`,
    GET_FNA_DETAILS_BY_ID: `select * from FNA_Main
  WHERE naId = ?`,
    GET_IRPQ_BY_ID: `select * from IRPQ
  WHERE irpqId in (?)`,
    GET_FNA_BY_LEAD_ID: `
  SELECT * FROM FNA_Main
  INNER JOIN Leads on
  FNA_Main.leadId = Leads.leadId
  WHERE Leads.leadId = ?
  AND FNA_Main.isCompleted = ?
  AND FNA_Main.isDeleted = ?
  AND ((julianday('now', 'localtime') - julianday((FNA_Main.dateModified/1000), 'unixepoch', 'localtime')) <= 365)
  ORDER BY FNA_Main.dateModified DESC
  LIMIT 1`,
    /*  FNA SQL QUERIES - END */
    GET_ALL_LIST_IRPQ: `
  SELECT
    *,
    (
        SELECT
            COUNT(irpqSi.irpqId)
        FROM
            IRPQ irpqSi
            INNER JOIN SI_MAIN siMain ON irpqSi.irpqId = siMain.irpqId
        WHERE
            irpqSi.irpqId = IrpqMain.irpqId
    ) AS irpqSICount,
    CASE
        WHEN (
            SELECT
                COUNT(irpqSi.irpqId)
            FROM
                IRPQ irpqSi
                INNER JOIN SI_MAIN siMain ON irpqSi.irpqId = siMain.irpqId
            WHERE
                irpqSi.irpqId = IrpqMain.irpqId
                AND irpqSi.isDeleted = 0
                AND siMain.isDeleted = 0
        ) != 0 THEN (
            SELECT
                CASE
                    WHEN (
                        SELECT
                            COUNT(irpqMainCase2.irpqId)
                        FROM
                            IRPQ irpqMainCase2
                            INNER JOIN SI_MAIN siMainCase2 ON irpqMainCase2.irpqId = siMainCase2.irpqId
                            INNER JOIN EAPP_Main eAppMainCase2 ON siMainCase2.siId = eAppMainCase2.siId
                        WHERE
                            irpqMainCase2.irpqId = IrpqMain.irpqId
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
                        FROM
                            IRPQ irpqMainCase3
                            INNER JOIN SI_MAIN siMainCase3 ON irpqMainCase3.irpqId = siMainCase3.irpqId
                            INNER JOIN EAPP_Main eAppMainCase3 ON siMainCase3.siId = eAppMainCase3.siId
                        WHERE
                            irpqMainCase3.irpqId = IrpqMain.irpqId
                            AND siMainCase3.isDeleted = 0
                            AND eAppMainCase3.isDeleted = 0
                    )
                    ELSE 'ATTACHED'
                END
        )
        ELSE (
            SELECT
                CASE
                    WHEN IrpqMain.isCompleted != 0 THEN 'COMPLETED'
                    ELSE 'IN-PROGRESS'
                END
        )
    END AS 'irpqStatus'
  FROM
    Leads
    INNER JOIN IRPQ IrpqMain ON Leads.leadId = IrpqMain.leadId
  WHERE
    IrpqMain.isDeleted = ?
    ORDER BY IrpqMain.dateModified DESC`,
    GET_ALL_LIST_IRPQ_BY_SYNC_STATUS: ` 
    SELECT 
      *, 
      ( 
          SELECT 
              COUNT(irpqSi.irpqId) 
          FROM 
              IRPQ irpqSi 
              INNER JOIN SI_MAIN siMain ON irpqSi.irpqId = siMain.irpqId 
          WHERE 
              irpqSi.irpqId = IrpqMain.irpqId 
      ) AS irpqSICount, 
      CASE 
          WHEN ( 
              SELECT 
                  COUNT(irpqSi.irpqId) 
              FROM 
                  IRPQ irpqSi 
                  INNER JOIN SI_MAIN siMain ON irpqSi.irpqId = siMain.irpqId 
              WHERE 
                  irpqSi.irpqId = IrpqMain.irpqId 
                  AND irpqSi.isDeleted = 0 
                  AND siMain.isDeleted = 0 
          ) != 0 THEN ( 
              SELECT 
                  CASE 
                      WHEN ( 
                          SELECT 
                              COUNT(irpqMainCase2.irpqId) 
                          FROM 
                              IRPQ irpqMainCase2 
                              INNER JOIN SI_MAIN siMainCase2 ON irpqMainCase2.irpqId = siMainCase2.irpqId 
                              INNER JOIN EAPP_Main eAppMainCase2 ON siMainCase2.siId = eAppMainCase2.siId 
                          WHERE 
                              irpqMainCase2.irpqId = IrpqMain.irpqId 
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
                          FROM 
                              IRPQ irpqMainCase3 
                              INNER JOIN SI_MAIN siMainCase3 ON irpqMainCase3.irpqId = siMainCase3.irpqId 
                              INNER JOIN EAPP_Main eAppMainCase3 ON siMainCase3.siId = eAppMainCase3.siId 
                          WHERE 
                              irpqMainCase3.irpqId = IrpqMain.irpqId 
                              AND siMainCase3.isDeleted = 0 
                              AND eAppMainCase3.isDeleted = 0 
                      ) 
                      ELSE 'ATTACHED' 
                  END 
          ) 
          ELSE ( 
              SELECT 
                  CASE 
                      WHEN IrpqMain.isCompleted != 0 THEN 'COMPLETED' 
                      ELSE 'IN-PROGRESS' 
                  END 
          ) 
      END AS 'irpqStatus' 
    FROM 
      Leads 
      INNER JOIN IRPQ IrpqMain ON Leads.leadId = IrpqMain.leadId 
    WHERE 
      IrpqMain.isDeleted = ? AND IrpqMain.syncStatus in (?,?,?)
      ORDER BY IrpqMain.dateModified DESC`,
    GET_IRPQ_ID: `
  SELECT
    *,
    CASE
        WHEN (
            SELECT
                COUNT(irpqSi.irpqId)
            FROM
                IRPQ irpqSi
                INNER JOIN SI_MAIN siMain ON irpqSi.irpqId = siMain.irpqId
            WHERE
                irpqSi.irpqId = IrpqMain.irpqId
        ) != 0 THEN (
            SELECT
                CASE
                    WHEN (
                        SELECT
                            COUNT(irpqMainCase2.irpqId)
                        FROM
                            IRPQ irpqMainCase2
                            INNER JOIN SI_MAIN siMainCase2 ON irpqMainCase2.irpqId = siMainCase2.irpqId
                            INNER JOIN EAPP_Main eAppMainCase2 ON siMainCase2.siId = eAppMainCase2.siId
                        WHERE
                            irpqMainCase2.irpqId = IrpqMain.irpqId
                    ) != 0 THEN (
                        SELECT
                            CASE
                                WHEN eAppMainCase3.eappStatus IN ('IN-PROGRESS', 'COMPLETED') THEN 'ATTACHED'
                                WHEN eAppMainCase3.eappStatus LIKE '%encoded%' THEN 'SUBMITTED'
                                WHEN eAppMainCase3.eappStatus IN ('For Underwriting', 'FOR ISSUANCE') THEN 'SUBMITTED'
                                ELSE eAppMainCase3.eappStatus
                            END
                        FROM
                            IRPQ irpqMainCase3
                            INNER JOIN SI_MAIN siMainCase3 ON irpqMainCase3.irpqId = siMainCase3.irpqId
                            INNER JOIN EAPP_Main eAppMainCase3 ON siMainCase3.siId = eAppMainCase3.siId
                        WHERE
                            irpqMainCase3.irpqId = IrpqMain.irpqId AND siMainCase3.isDeleted != 1
                    )
                    ELSE 'ATTACHED'
                END
        )
        ELSE (
            SELECT
                CASE
                    WHEN IrpqMain.isCompleted != 0 THEN 'COMPLETED'
                    ELSE 'IN-PROGRESS'
                END
        )
    END AS 'irpqStatus'
  FROM
    IRPQ IrpqMain
  WHERE
    IrpqMain.isDeleted = ?
    AND IrpqMain.irpqId = ?`,
    GET_LEADS_BY_IRPQ_ID: `SELECT * FROM IRPQ a
  INNER JOIN Leads b ON a.leadId = b.leadId
  WHERE a.irpqId = ?`,
    GET_ALL_IRPQ: `SELECT *
  FROM Leads
  INNER JOIN IRPQ
  ON Leads.leadId = IRPQ.leadId `,
    GET_LEADS_IRPQ: `SELECT *, A.leadId AS id FROM leads A
  INNER JOIN FNA_Main B ON A.leadId = B.leadId
  LEFT JOIN IRPQ C ON B.naId = C.naId
  WHERE B.isCompleted = ?
  AND C.irpqId IS NULL`,
    GET_SI_PERSONS: {
        query: `select * from si_persons
      inner join si_main
      on si_persons.siId = si_main.siId
      where isDeleted == ? and
      isCompleted == ? and
      personType = ? and
      si_main.siId not in (select siId from eapp_main where isDeleted == 0)
      order by si_main.dateModified desc`,
        queryInterpolationValue: [0, 1, 0]
    },

    // EAPP
    GET_SI_FUNDS: {
        query: `select fundKey, fundDirection from si_main
    inner join si_funds
    on si_main.siid = si_funds.siid
    where si_main.siid = ?`
    },
    GET_SI_RIDERS: {
        query: `select * from si_main
    inner join si_riders
    on si_main.siid = si_riders.siid
    where si_main.siid = ?`
    },
    GET_ALL_EAPPS: {
        query: `select
    lastName, firstName, middleName,
    eappStatus, planCode, eapp_main.dateModified,  eapp_main.attachedDate,
    eapp_main.dateCreated, eapp_main.siId, eapp_main.applicationNumber,
     subChecklist.policyNumber, eapp_main.syncStatus, eapp_main.leadId, eapp_main.generatedOnline,
    (
        SELECT
            insured.lastName||', '||insured.firstName
        FROM si_persons insured
        WHERE insured.siId = si_main.siId
        AND insured.personType = 1
    ) AS insuredName
    from eapp_main
    inner join si_persons
    on eapp_main.siid = si_persons.siid
    left join Submission_Checklist subChecklist
    on eapp_main.eappId = subChecklist.eappId
    inner join si_main
    on si_persons.siid = si_main.siid
    where eapp_main.isDeleted = ?
    and si_persons.personType = ?
    order by eapp_main.dateModified desc`,
        queryInterpolationValue: [0, 0]
    },
    GET_ALL_EAPPS_BY_STATUS: {
        query: `select
    lastName, firstName, middleName, eapp_main.leadId,
    eappStatus, planCode, eapp_main.dateModified,
    eapp_main.dateCreated, eapp_main.siId, eapp_main.applicationNumber, subChecklist.policyNumber, eapp_main.syncStatus, eapp_main.leadId, eapp_main.generatedOnline,
    (
        SELECT
            insured.lastName||', '||insured.firstName
        FROM si_persons insured
        WHERE insured.siId = si_main.siId
        AND insured.personType = 1
    ) AS insuredName
    from eapp_main
    inner join si_persons
    on eapp_main.siid = si_persons.siid
    left join Submission_Checklist subChecklist
    on eapp_main.eappId = subChecklist.eappId
    inner join si_main
    on si_persons.siid = si_main.siid
    where eapp_main.isDeleted = ?
    and si_persons.personType = ?
    and eapp_main.syncStatus in (?,?,?)
    order by eapp_main.dateModified desc`
    },
    GET_EAPPS_SYNC_STATUS: `Select (SELECT COUNT(1) FROM EAPP_MAIN inner join si_persons
        on eapp_main.siid = si_persons.siid
        left join Submission_Checklist subChecklist
        on eapp_main.eappId = subChecklist.eappId
        inner join si_main
        on si_persons.siid = si_main.siid WHERE si_persons.personType = 0 and eapp_main.isDeleted = 0) as _all,
    (SELECT COUNT(1) FROM EAPP_MAIN inner join si_persons
        on eapp_main.siid = si_persons.siid
        left join Submission_Checklist subChecklist
        on eapp_main.eappId = subChecklist.eappId
        inner join si_main
        on si_persons.siid = si_main.siid WHERE eapp_main.syncStatus = 2 and si_persons.personType = 0 and eapp_main.isDeleted = 0) as live,
    (SELECT COUNT(1) FROM EAPP_MAIN inner join si_persons
        on eapp_main.siid = si_persons.siid
        left join Submission_Checklist subChecklist
        on eapp_main.eappId = subChecklist.eappId
        inner join si_main
        on si_persons.siid = si_main.siid WHERE eapp_main.syncStatus = 0 and si_persons.personType = 0 and eapp_main.isDeleted = 0) as offline,
    (SELECT COUNT(1) FROM EAPP_MAIN inner join si_persons
        on eapp_main.siid = si_persons.siid
        left join Submission_Checklist subChecklist
        on eapp_main.eappId = subChecklist.eappId
        inner join si_main
        on si_persons.siid = si_main.siid WHERE eapp_main.syncStatus in (99,69,619) and si_persons.personType = 0 and eapp_main.isDeleted = 0) as error`,
    GET_EAPP_PERSONS: {
        query: `select *
    from eapp_main
    inner join eapp_person
    on eapp_main.eappid = eapp_person.eappid
    where eapp_main.eappid = ? `
    },

    DELETE_BENEFICIARY: {
        query: `delete from eapp_beneficiaries
    where beneid = ?`
    },
    INSERT_EAPP_TOPUP_DIRECTION: `INSERT INTO EAPP_FundsTopUpDirection(eappId, fundKey, topUpDirection) VALUES (?, ?, ?)`,
    GET_ALL_SUBMISSIONS: `SELECT
    distinct eapp_main.eappId,
    eapp_main.leadId,
    lastName, firstName, middleName,
    eappStatus, planCode, ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}.dateModified,
    ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}.dateCreated, eapp_main.siId,
    eapp_main.applicationNumber, eapp_main.attachedDate, policyNumber, ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}.syncStatus, eapp_main.generatedOnline
    FROM eapp_main
    INNER JOIN si_persons
    ON eapp_main.siid = si_persons.siid
    INNER JOIN si_main
    ON si_persons.siid = si_main.siid
    INNER JOIN ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}
    ON ${CONSTANT_DB_TABLE.EAPP_MAIN}.eappId = ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}.eappId
    WHERE eapp_main.isDeleted = ?
    AND si_persons.personType = ?
    AND eapp_main.eappStatus NOT IN (?, ?)
    ORDER BY ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}.dateModified DESC`,
    GET_ALL_DATA_BY_EAPP_ID: `SELECT *,
    E.serverId As leadsServerId,
    A.serverId As eappServerId FROM EAPP_Main A
    LEFT JOIN SI_Main B ON A.siId = B.siId
    LEFT JOIN IRPQ C ON C.irpqId = B.irpqId
    LEFT JOIN FNA_Main D ON D.naId = (SELECT z.naId FROM FNA_MAIN z WHERE z.IsCompleted=1 AND z.IsDeleted=0 AND z.leadId=B.leadId ORDER BY z.dateModified DESC LIMIT 1)
    LEFT JOIN Leads E ON E.leadId = D.leadId
    WHERE A.eappId = ?`,

    GET_ALL_HSBC_DATA_BY_EAPP_ID: `SELECT *,
    E.serverId As leadsServerId,
    A.serverId As eappServerId FROM EAPP_Main A
    LEFT JOIN SI_Main B ON A.siId = B.siId
    LEFT JOIN Leads E ON A.leadId = E.leadId
    WHERE A.eappId = ?`,

    GET_SI_PERSONS_BY_EAPP_ID: `SELECT * FROM Eapp_Main A
    INNER JOIN SI_PERSONS B ON A.siId = B.siId
    WHERE A.eappId = ?
    AND A.isDeleted = ?`,
    GET_EAPP_NONMED_ANSWER: `
    SELECT * FROM Eapp_Main A
    INNER JOIN EAPP_NonMed_Main B ON A.eappId = B.eappId
    INNER JOIN EAPP_NonMed_Answers C ON B.nonMedId = C.nonMedId
    WHERE A.eappId = ?
    AND C.questionId = ?`,
    DELETE_MULTIPLE_ATTACHMENT: `UPDATE
    Submission_Attachments
    SET isDeleted = 1
    WHERE attachmentKey IN (?,?,?)
    AND submissionId = ?`,
    GET_ALL_FNA_TO_SYNC: `select
    FNA_Main.naId, FNA_Main.leadId, FNA_Main.needType, FNA_Main.dateCreated, FNA_Main.isDeleted, FNA_Main.syncStatus,
    FNA_Main.serverId, FNA_Main.isCompleted, FNA_Main.dateModified, FNA_Main.isWaived,
    Leads.accountManagerId, Leads.serverId as leadServerId,
    Leads.firstName, Leads.middleName, Leads.lastName, Leads.phoneNumber, Leads.emailAddress,
    Leads.dateOfBirth, Leads.gender, Leads.civilStatus, Leads.leadStatus, Leads.clientType, Leads.homeBuildingName,
    Leads.homeBlockNumber, Leads.homeStreet, Leads.homeSubdivision, Leads.homeCityCode, Leads.homeProvinceCode,
    Leads.homeCountryCode, Leads.homeZipCode, Leads.occupationCode, Leads.monthlyIncome, Leads.householdIncome, Leads.workBuildingName,
    Leads.workBlockNumber, Leads.workStreet, Leads.workSubdivision, Leads.workCityCode, Leads.workProvinceCode, Leads.workCountryCode,
    Leads.workZipCode, Leads.savingsPriority, Leads.healthPriority, Leads.protectionPriority, Leads.educationPriority,
    Leads.retirementPriority, Leads.estatePlanningPriority
    from FNA_Main
    INNER JOIN Leads on FNA_Main.leadId = Leads.leadId`,
    GET_ALL_UNSYNC_FNA: `select
    FNA_Main.naId, FNA_Main.leadId, FNA_Main.needType, FNA_Main.dateCreated, FNA_Main.isDeleted, FNA_Main.syncStatus,
    FNA_Main.serverId, FNA_Main.isCompleted, FNA_Main.dateModified, FNA_Main.isWaived,
    Leads.accountManagerId, Leads.serverId as leadServerId, Leads.firstName, Leads.middleName, Leads.lastName, Leads.phoneNumber,
    Leads.emailAddress,
    Leads.dateOfBirth, Leads.gender, Leads.civilStatus, Leads.leadStatus, Leads.clientType, Leads.homeBuildingName,
    Leads.homeBlockNumber, Leads.homeStreet, Leads.homeSubdivision, Leads.homeCityCode, Leads.homeProvinceCode,
    Leads.homeCountryCode, Leads.homeZipCode, Leads.occupationCode, Leads.monthlyIncome, Leads.householdIncome, Leads.workBuildingName,
    Leads.workBlockNumber, Leads.workStreet, Leads.workSubdivision, Leads.workCityCode, Leads.workProvinceCode, Leads.workCountryCode,
    Leads.workZipCode, Leads.savingsPriority, Leads.healthPriority, Leads.protectionPriority, Leads.educationPriority,
    Leads.retirementPriority, Leads.estatePlanningPriority
    from FNA_Main
    INNER JOIN Leads on FNA_Main.leadId = Leads.leadId
    WHERE FNA_Main.isDeleted = 0 AND FNA_MAIN.syncStatus != 2`,
    GET_LEADS_UNSYNC: `SELECT * FROM LEADS WHERE SYNCSTATUS != 2`,
    GET_CHECKLIST_UNSYNC: `SELECT * FROM Submission_Checklist WHERE (SYNCSTATUS != 2 OR SYNCSTATUS IS NULL) AND policyNumber IS NULL AND isCompleted = 1`,
    GET_ALL_CHECKLIST: `SELECT * FROM Submission_Checklist`,
    GET_ALL_IRPQ_SYNC: `SELECT * FROM IRPQ`,
    GET_IRPQ_UNSYNC: `SELECT * FROM IRPQ WHERE SYNCSTATUS != 2 AND ISDELETED = 0`,
    GET_EAPP_UNSYNC: `SELECT * FROM EAPP_Main WHERE SYNCSTATUS != 2`,
    GET_FNA_SYNC_V2: `SELECT
  a.naId, a.leadId, a.needType, a.dateCreated, a.isDeleted, a.syncStatus,
  CASE
    WHEN a.isWaived != 1 THEN
        (SELECT CASE
            WHEN a.needType = 'SAV' THEN (SELECT FNA_S.savingsGoal FROM FNA_S WHERE FNA_S.naId=a.naId)
            WHEN a.needType = 'EDU' THEN (SELECT FNA_E.schoolType FROM FNA_E WHERE FNA_E.naId=a.naId)
            WHEN a.needType = 'PRT' THEN 'INCREP'
            WHEN a.needType = 'HLTH' THEN 'HTHFND'
            WHEN a.needType = 'EST' THEN 'ESTPRO'
            WHEN a.needType = 'RET' THEN 'RETFND'
            ELSE ''
        END)
    ELSE ''
  END AS 'goalType',
  CASE
          WHEN (
              SELECT
                  COUNT(fnaSi.naId)
              FROM
                  FNA_MAIN fnaSi
                  INNER JOIN SI_MAIN siMain ON fnaSi.naId = siMain.naId
              WHERE
                  (fnaSi.naId = a.naId) AND (siMain.isDeleted != 1)
          ) != 0 THEN (
              SELECT
                  CASE
                      WHEN (
                          SELECT
                              COUNT(fnaMainCase2.naId)
                          FROM
                              FNA_MAIN fnaMainCase2
                              INNER JOIN SI_MAIN siMainCase2 ON fnaMainCase2.naId = siMainCase2.naId
                              INNER JOIN EAPP_Main eAppMainCase2 ON siMainCase2.siId = eAppMainCase2.siId
                          WHERE
                              (fnaMainCase2.naId = a.naId) AND (eAppMainCase2.isDeleted != 1)
                      ) != 0 THEN (
                          SELECT
                              CASE
                                  WHEN eAppMainCase3.eappStatus IN ('IN-PROGRESS', 'COMPLETED') THEN 'ATTACHED'
                                  WHEN eAppMainCase3.eappStatus LIKE '%encoded%' THEN 'SUBMITTED'
                                  WHEN eAppMainCase3.eappStatus IN ('For Underwriting', 'FOR ISSUANCE') THEN 'SUBMITTED'
                                  ELSE eAppMainCase3.eappStatus
                              END
                          FROM
                              FNA_MAIN fnaMainCase3
                              INNER JOIN SI_MAIN siMainCase3 ON fnaMainCase3.naId = siMainCase3.naId
                              INNER JOIN EAPP_Main eAppMainCase3 ON siMainCase3.siId = eAppMainCase3.siId
                          WHERE
                              fnaMainCase3.naId = a.naId AND siMainCase3.isDeleted != 1
                      )
                      ELSE 'ATTACHED'
                  END
          )
          WHEN (
              SELECT
                  COUNT(fnaIrpq.naId)
              FROM
                  FNA_MAIN fnaIrpq
                  INNER JOIN IRPQ irpqMain ON fnaIrpq.naId = irpqMain.naId
              WHERE
                  (fnaIrpq.naId = a.naId) AND (irpqMain.isDeleted != 1)
          ) != 0 THEN 'ATTACHED'
          ELSE (
              SELECT
                CASE
                  WHEN a.isCompleted != 0 THEN 'COMPLETED'
                  ELSE 'IN-PROGRESS'
                END
          )
      END as 'fnaStatus',
  a.serverId, a.isCompleted, a.dateModified, a.isWaived,
  b.accountManagerId, b.serverId AS leadServerId,
  b.firstName, b.middleName, b.lastName, b.phoneNumber, b.emailAddress,
  b.dateOfBirth, b.gender, b.civilStatus, b.leadStatus, b.clientType, b.homeBuildingName,
  b.homeBlockNumber, b.homeStreet, b.homeSubdivision, b.homeCityCode, b.homeProvinceCode,
  b.homeCountryCode, b.homeZipCode, b.occupationCode, b.monthlyIncome, b.householdIncome, b.workBuildingName,
  b.workBlockNumber, b.workStreet, b.workSubdivision, b.workCityCode, b.workProvinceCode, b.workCountryCode,
  b.workZipCode, b.savingsPriority, b.healthPriority, b.protectionPriority, b.educationPriority,
  b.retirementPriority, b.estatePlanningPriority
  FROM FNA_Main a
  INNER JOIN Leads b on a.leadId = b.leadId
  WHERE a.syncStatus != 2`,
    GET_ALL_IRPQ_BY_NA_ID: `
  SELECT * FROM IRPQ
  INNER JOIN FNA_Main on
  IRPQ.naId = FNA_Main.naId
  WHERE IRPQ.naId = ?
  AND IRPQ.isDeleted = ?`,
    GET_ALL_SI_BY_NA_IRPQ_ID: `
  SELECT * FROM SI_MAIN
  INNER JOIN IRPQ on
  SI_MAIN.irpqId = IRPQ.irpqId
  WHERE SI_MAIN.irpqId = ?
  AND SI_MAIN.isDeleted = ?`,

    GET_IRPQ_SYNCSTATUS: `
    SELECT 
        (SELECT COUNT(1) FROM ${CONSTANT_DB_TABLE.IRPQ}) as 'all', 
        (SELECT COUNT(1) FROM ${CONSTANT_DB_TABLE.IRPQ} WHERE ${CONSTANT_DB_TABLE.IRPQ}.syncStatus = ${SYNC_STATUS.SYNC_SUCCESS_2}) as live, 
        (SELECT COUNT(1) FROM ${CONSTANT_DB_TABLE.IRPQ} WHERE ${CONSTANT_DB_TABLE.IRPQ}.syncStatus = ${SYNC_STATUS.OFFLINE}) as offline, 
        (SELECT COUNT(1) FROM ${CONSTANT_DB_TABLE.IRPQ} WHERE ${CONSTANT_DB_TABLE.IRPQ}.syncStatus in (${SYNC_STATUS.SYNC_FAIL_99}, ${SYNC_STATUS.MOBILE_VALIDATION_ERROR}, ${SYNC_STATUS.NETWORK_ERROR})) as error`,
    GET_ALL_FNA_DATA_BY_SYNC_STATUS: `SELECT
  fnaMain.*, leads.firstName, leads.lastName, leads.middleName,
    CASE
        WHEN (
            SELECT
                COUNT(fnaSi.naId)
            FROM
                FNA_MAIN fnaSi
                INNER JOIN SI_MAIN siMain ON fnaSi.naId = siMain.naId
            WHERE
                (fnaSi.naId = fnaMain.naId) AND (siMain.isDeleted != 1)
        ) != 0 THEN (
            SELECT
                CASE
                    WHEN (
                        SELECT
                            COUNT(fnaMainCase2.naId)
                        FROM
                            FNA_MAIN fnaMainCase2
                            INNER JOIN SI_MAIN siMainCase2 ON fnaMainCase2.naId = siMainCase2.naId
                            INNER JOIN EAPP_Main eAppMainCase2 ON siMainCase2.siId = eAppMainCase2.siId
                        WHERE
                            (fnaMainCase2.naId = fnaMain.naId) AND (eAppMainCase2.isDeleted != 1)
                    ) != 0 THEN (
                        SELECT
                            CASE
                                WHEN eAppMainCase3.eappStatus IN ('IN-PROGRESS', 'COMPLETED') THEN 'ATTACHED'
                                WHEN eAppMainCase3.eappStatus LIKE '%encoded%' THEN 'SUBMITTED'
                                WHEN eAppMainCase3.eappStatus IN ('For Underwriting', 'FOR ISSUANCE') THEN 'SUBMITTED'
                                ELSE eAppMainCase3.eappStatus
                            END
                        FROM
                            FNA_MAIN fnaMainCase3
                            INNER JOIN SI_MAIN siMainCase3 ON fnaMainCase3.naId = siMainCase3.naId
                            INNER JOIN EAPP_Main eAppMainCase3 ON siMainCase3.siId = eAppMainCase3.siId
                        WHERE
                            fnaMainCase3.naId = fnaMain.naId AND eAppMainCase3.isDeleted != 1
                    )
                    ELSE 'ATTACHED'
                END
        )
        WHEN (
            SELECT
                COUNT(fnaIrpq.naId)
            FROM
                FNA_MAIN fnaIrpq
                INNER JOIN IRPQ irpqMain ON fnaIrpq.naId = irpqMain.naId
            WHERE
                (fnaIrpq.naId = fnaMain.naId) AND (irpqMain.isDeleted != 1)
        ) != 0 THEN 'ATTACHED'
        ELSE (
            SELECT
                CASE
					WHEN ((julianday('now', 'localtime') - julianday((fnaMain.dateModified/1000), 'unixepoch', 'localtime')) > 365)
                    AND (fnaMain.isCompleted != 0) THEN 'EXPIRED'
                    WHEN ((julianday('now', 'localtime') - julianday((fnaMain.dateModified/1000), 'unixepoch', 'localtime')) <= 365)
                    AND (fnaMain.isCompleted != 0) THEN 'COMPLETED'
                    ELSE 'IN-PROGRESS'
                END
        )
    END as 'fnaStatus'
  FROM
    FNA_MAIN fnaMain
  INNER JOIN Leads leads ON fnaMain.leadId = leads.leadID
  WHERE
    fnaMain.isDeleted = 0 AND leads.isDeleted = 0 and fnaMain.syncStatus in (?, ?, ?)
  ORDER BY fnaMain.dateModified DESC`,
    GET_COUNT_FNA_SYNC_DATA:
        `SELECT 
    (SELECT COUNT(1)
        FROM FNA_MAIN fnaMain
        INNER JOIN Leads leads ON fnaMain.leadId = leads.leadID
        WHERE fnaMain.isDeleted = 0 AND leads.isDeleted = 0) as 'all',
    (SELECT COUNT(1)
        FROM FNA_MAIN fnaMain
        INNER JOIN Leads leads ON fnaMain.leadId = leads.leadID
        WHERE fnaMain.isDeleted = 0 AND leads.isDeleted = 0 and fnaMain.syncStatus = 2) as 'live',
    (SELECT COUNT(1) 
        FROM FNA_MAIN fnaMain
        INNER JOIN Leads leads ON fnaMain.leadId = leads.leadID
        WHERE fnaMain.isDeleted = 0 AND leads.isDeleted = 0 and fnaMain.syncStatus = 0) as 'offline',
    (SELECT COUNT(fnaMain.naId)
        FROM
        FNA_MAIN fnaMain
        INNER JOIN Leads leads ON fnaMain.leadId = leads.leadID
        WHERE
        fnaMain.isDeleted = 0 AND leads.isDeleted = 0 and fnaMain.syncStatus in (619,99,69)) as 'error'`,
    GET_ALL_SUBMISSIONS_BY_SYNCSTATUS: `SELECT
      distinct eapp_main.eappId,
      lastName, firstName, middleName,
      eappStatus, planCode, ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}.dateModified,
      ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}.dateCreated, eapp_main.siId,
      eapp_main.applicationNumber, policyNumber, ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}.syncStatus, eapp_main.generatedOnline
      FROM eapp_main
      INNER JOIN si_persons
      ON eapp_main.siid = si_persons.siid
      INNER JOIN si_main
      ON si_persons.siid = si_main.siid
      INNER JOIN ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}
      ON ${CONSTANT_DB_TABLE.EAPP_MAIN}.eappId = ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}.eappId
      WHERE eapp_main.isDeleted = ?
      AND si_persons.personType = ?
      AND eapp_main.eappStatus NOT IN (?, ?)
      AND ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}.syncStatus in (?, ?, ?) `,
    GET_CHECKLIST_SYNCSTATUS: `
       SELECT 
       (SELECT COUNT(1) FROM ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}) as 'all',
       (SELECT COUNT(1) FROM ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST} WHERE ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}.syncStatus = ${SYNC_STATUS.SYNC_SUCCESS_2}) as live,
       (SELECT COUNT(1) FROM ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST} WHERE ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}.syncStatus = ${SYNC_STATUS.OFFLINE}) as offline,
       (SELECT COUNT(1) FROM ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST} WHERE ${CONSTANT_DB_TABLE.SUBMISSION_CHECKLIST}.syncStatus in (${SYNC_STATUS.SYNC_FAIL_99}, ${SYNC_STATUS.MOBILE_VALIDATION_ERROR}, ${SYNC_STATUS.NETWORK_ERROR})) as error`,
    GET_UNSYNC_LEAD_BY_ID: `SELECT * 
       FROM LEADS WHERE syncStatus = 0 AND leadId = ?`,
    GET_UNSYNC_IRPQ_BY_ID: `SELECT * 
       FROM IRPQ WHERE syncStatus != 2 AND irpqId = ?`,
    GET_ALL_FNA_BY_LEAD_ID: `SELECT 
       a.naId, a.leadId, a.needType, a.dateCreated, a.isDeleted, a.syncStatus, 
       CASE 
         WHEN a.isWaived != 1 THEN 
             (SELECT CASE 
                 WHEN a.needType = 'SAV' THEN (SELECT FNA_S.savingsGoal FROM FNA_S WHERE FNA_S.naId=a.naId) 
                 WHEN a.needType = 'EDU' THEN (SELECT FNA_E.schoolType FROM FNA_E WHERE FNA_E.naId=a.naId) 
                 WHEN a.needType = 'PRT' THEN 'INCREP' 
                 WHEN a.needType = 'HLTH' THEN 'HTHFND' 
                 WHEN a.needType = 'EST' THEN 'ESTPRO' 
                 WHEN a.needType = 'RET' THEN 'RETFND' 
                 ELSE '' 
             END) 
         ELSE '' 
       END AS 'goalType', 
       CASE 
               WHEN ( 
                   SELECT 
                       COUNT(fnaSi.naId) 
                   FROM 
                       FNA_MAIN fnaSi 
                       INNER JOIN SI_MAIN siMain ON fnaSi.naId = siMain.naId 
                   WHERE 
                       (fnaSi.naId = a.naId) AND (siMain.isDeleted != 1) 
               ) != 0 THEN ( 
                   SELECT 
                       CASE 
                           WHEN ( 
                               SELECT 
                                   COUNT(fnaMainCase2.naId) 
                               FROM 
                                   FNA_MAIN fnaMainCase2 
                                   INNER JOIN SI_MAIN siMainCase2 ON fnaMainCase2.naId = siMainCase2.naId 
                                   INNER JOIN EAPP_Main eAppMainCase2 ON siMainCase2.siId = eAppMainCase2.siId 
                               WHERE 
                                   (fnaMainCase2.naId = a.naId) AND (eAppMainCase2.isDeleted != 1) 
                           ) != 0 THEN ( 
                               SELECT 
                                   CASE 
                                       WHEN eAppMainCase3.eappStatus IN ('IN-PROGRESS', 'COMPLETED') THEN 'ATTACHED' 
                                       WHEN eAppMainCase3.eappStatus LIKE '%encoded%' THEN 'SUBMITTED' 
                                       WHEN eAppMainCase3.eappStatus IN ('For Underwriting', 'FOR ISSUANCE') THEN 'SUBMITTED' 
                                       ELSE eAppMainCase3.eappStatus 
                                   END 
                               FROM 
                                   FNA_MAIN fnaMainCase3 
                                   INNER JOIN SI_MAIN siMainCase3 ON fnaMainCase3.naId = siMainCase3.naId 
                                   INNER JOIN EAPP_Main eAppMainCase3 ON siMainCase3.siId = eAppMainCase3.siId 
                               WHERE 
                                   fnaMainCase3.naId = a.naId AND siMainCase3.isDeleted != 1 
                           ) 
                           ELSE 'ATTACHED' 
                       END 
               ) 
               WHEN ( 
                   SELECT 
                       COUNT(fnaIrpq.naId) 
                   FROM 
                       FNA_MAIN fnaIrpq 
                       INNER JOIN IRPQ irpqMain ON fnaIrpq.naId = irpqMain.naId 
                   WHERE 
                       (fnaIrpq.naId = a.naId) AND (irpqMain.isDeleted != 1) 
               ) != 0 THEN 'ATTACHED' 
               ELSE ( 
                   SELECT 
                     CASE 
                       WHEN a.isCompleted != 0 THEN 'COMPLETED' 
                       ELSE 'IN-PROGRESS' 
                     END 
               ) 
           END as 'fnaStatus', 
       a.serverId, a.isCompleted, a.dateModified, a.isWaived, 
       b.accountManagerId, b.serverId AS leadServerId, 
       b.firstName, b.middleName, b.lastName, b.phoneNumber, b.emailAddress, 
       b.dateOfBirth, b.gender, b.civilStatus, b.leadStatus, b.clientType, b.homeBuildingName, 
       b.homeBlockNumber, b.homeStreet, b.homeSubdivision, b.homeCityCode, b.homeProvinceCode, 
       b.homeCountryCode, b.homeZipCode, b.occupationCode, b.monthlyIncome, b.householdIncome, b.workBuildingName, 
       b.workBlockNumber, b.workStreet, b.workSubdivision, b.workCityCode, b.workProvinceCode, b.workCountryCode, 
       b.workZipCode, b.savingsPriority, b.healthPriority, b.protectionPriority, b.educationPriority, 
       b.retirementPriority, b.estatePlanningPriority 
       FROM FNA_Main a 
       INNER JOIN Leads b on a.leadId = b.leadId 
       WHERE a.leadId = ?`, 
    GET_LEAD_BY_ID : `SELECT * FROM LEADS WHERE leadId = ?`,
    GET_LEAD_BY_MODULE_ID: `SELECT LEADS.leadId
                            FROM LEADS
                            LEFT JOIN FNA_MAIN ON FNA_MAIN.leadId = LEADS.leadId
                            LEFT JOIN IRPQ ON IRPQ.leadId = LEADS.leadId
                            LEFT JOIN SI_MAIN ON SI_MAIN.leadId = LEADS.leadId
                            LEFT JOIN EAPP_MAIN ON EAPP_MAIN.leadId = LEADS.leadId
                            LEFT JOIN SUBMISSION_CHECKLIST ON SUBMISSION_CHECKLIST.eappId = EAPP_MAIN.eappId
                            WHERE LEADS.leadId = ifnull(?1, LEADS.leadId)
                               OR FNA_MAIN.naId = ifnull(?1, FNA_MAIN.naId)
                               OR IRPQ.irpqId = ifnull(?1, IRPQ.irpqId)
                               OR SI_MAIN.siId = ifnull(?1, SI_MAIN.siId)
                               OR EAPP_MAIN.eappId = ifnull(?1, EAPP_MAIN.eappId)
                               OR SUBMISSION_CHECKLIST.submissionId = ifnull(?1, SUBMISSION_CHECKLIST.submissionId)`,
    GET_ALL_FNA_BY_ID: `SELECT 
       a.naId, a.leadId, a.needType, a.dateCreated, a.isDeleted, a.syncStatus, 
       CASE 
         WHEN a.isWaived != 1 THEN 
             (SELECT CASE 
                 WHEN a.needType = 'SAV' THEN (SELECT FNA_S.savingsGoal FROM FNA_S WHERE FNA_S.naId=a.naId) 
                 WHEN a.needType = 'EDU' THEN (SELECT FNA_E.schoolType FROM FNA_E WHERE FNA_E.naId=a.naId) 
                 WHEN a.needType = 'PRT' THEN 'INCREP' 
                 WHEN a.needType = 'HLTH' THEN 'HTHFND' 
                 WHEN a.needType = 'EST' THEN 'ESTPRO' 
                 WHEN a.needType = 'RET' THEN 'RETFND' 
                 ELSE '' 
             END) 
         ELSE '' 
       END AS 'goalType', 
       CASE 
               WHEN ( 
                   SELECT 
                       COUNT(fnaSi.naId) 
                   FROM 
                       FNA_MAIN fnaSi 
                       INNER JOIN SI_MAIN siMain ON fnaSi.naId = siMain.naId 
                   WHERE 
                       (fnaSi.naId = a.naId) AND (siMain.isDeleted != 1) 
               ) != 0 THEN ( 
                   SELECT 
                       CASE 
                           WHEN ( 
                               SELECT 
                                   COUNT(fnaMainCase2.naId) 
                               FROM 
                                   FNA_MAIN fnaMainCase2 
                                   INNER JOIN SI_MAIN siMainCase2 ON fnaMainCase2.naId = siMainCase2.naId 
                                   INNER JOIN EAPP_Main eAppMainCase2 ON siMainCase2.siId = eAppMainCase2.siId 
                               WHERE 
                                   (fnaMainCase2.naId = a.naId) AND (eAppMainCase2.isDeleted != 1) 
                           ) != 0 THEN ( 
                               SELECT 
                                   CASE 
                                       WHEN eAppMainCase3.eappStatus IN ('IN-PROGRESS', 'COMPLETED') THEN 'ATTACHED' 
                                       WHEN eAppMainCase3.eappStatus LIKE '%encoded%' THEN 'SUBMITTED' 
                                       WHEN eAppMainCase3.eappStatus IN ('For Underwriting', 'FOR ISSUANCE') THEN 'SUBMITTED' 
                                       ELSE eAppMainCase3.eappStatus 
                                   END 
                               FROM 
                                   FNA_MAIN fnaMainCase3 
                                   INNER JOIN SI_MAIN siMainCase3 ON fnaMainCase3.naId = siMainCase3.naId 
                                   INNER JOIN EAPP_Main eAppMainCase3 ON siMainCase3.siId = eAppMainCase3.siId 
                               WHERE 
                                   fnaMainCase3.naId = a.naId AND siMainCase3.isDeleted != 1 
                           ) 
                           ELSE 'ATTACHED' 
                       END 
               ) 
               WHEN ( 
                   SELECT 
                       COUNT(fnaIrpq.naId) 
                   FROM 
                       FNA_MAIN fnaIrpq 
                       INNER JOIN IRPQ irpqMain ON fnaIrpq.naId = irpqMain.naId 
                   WHERE 
                       (fnaIrpq.naId = a.naId) AND (irpqMain.isDeleted != 1) 
               ) != 0 THEN 'ATTACHED' 
               ELSE ( 
                   SELECT 
                     CASE 
                       WHEN a.isCompleted != 0 THEN 'COMPLETED' 
                       ELSE 'IN-PROGRESS' 
                     END 
               ) 
           END as 'fnaStatus', 
       a.serverId, a.isCompleted, a.dateModified, a.isWaived, 
       b.accountManagerId, b.serverId AS leadServerId, 
       b.firstName, b.middleName, b.lastName, b.phoneNumber, b.emailAddress, 
       b.dateOfBirth, b.gender, b.civilStatus, b.leadStatus, b.clientType, b.homeBuildingName, 
       b.homeBlockNumber, b.homeStreet, b.homeSubdivision, b.homeCityCode, b.homeProvinceCode, 
       b.homeCountryCode, b.homeZipCode, b.occupationCode, b.monthlyIncome, b.householdIncome, b.workBuildingName, 
       b.workBlockNumber, b.workStreet, b.workSubdivision, b.workCityCode, b.workProvinceCode, b.workCountryCode, 
       b.workZipCode, b.savingsPriority, b.healthPriority, b.protectionPriority, b.educationPriority, 
       b.retirementPriority, b.estatePlanningPriority 
       FROM FNA_Main a 
       INNER JOIN Leads b on a.leadId = b.leadId 
       WHERE a.naId = ?`, 
       GET_FNA_SERVERID_BY_ID: `SELECT serverId from FNA_Main where naId = ?`,
}
