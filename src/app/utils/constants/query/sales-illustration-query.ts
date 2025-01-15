export const SI_SQL_QUERIES = {
    GET_ALL_SI_DATA: `SELECT *,
  CASE
  WHEN (
      SELECT eAppMainCase.eappStatus FROM SI_MAIN siMainCase
      INNER JOIN EAPP_Main eAppMainCase
      ON siMainCase.siId = eAppMainCase.siId
      WHERE siMainCase.siId = siMain.siId
      AND eAppMainCase.isDeleted = 0
  ) IN ('IN-PROGRESS','COMPLETED') THEN 'ATTACHED'
  ELSE (
      SELECT eAppMainCase.eappStatus FROM SI_MAIN siMainCase
      INNER JOIN EAPP_Main eAppMainCase
      ON siMainCase.siId = eAppMainCase.siId
      WHERE siMainCase.siId = siMain.siId
      AND eAppMainCase.isDeleted = 0
  )
  END as 'siStatus'
  FROM SI_MAIN siMain
  INNER JOIN SI_PERSONS siPerson
  ON siMain.siId = siPerson.siId
  WHERE siMain.isDeleted = ? AND siPerson.personType = ?
  AND (
	  siStatus IS NULL 
	  OR siStatus NOT IN ('Encoded w/ Reqt', 'SUBMITTED', 'Encoded Complete')
  )
  ORDER BY siMain.dateModified DESC`,
    GET_SI_SUMMARY_DATA: `SELECT *,
  CASE
  WHEN (
      SELECT eAppMainCase.eappStatus FROM SI_MAIN siMainCase
      INNER JOIN EAPP_Main eAppMainCase
      ON siMainCase.siId = eAppMainCase.siId
      WHERE siMainCase.siId = siMain.siId
      AND eAppMainCase.isDeleted = 0
  ) IN ('IN-PROGRESS','COMPLETED') THEN 'ATTACHED'
  ELSE (
      SELECT eAppMainCase.eappStatus FROM SI_MAIN siMainCase
      INNER JOIN EAPP_Main eAppMainCase
      ON siMainCase.siId = eAppMainCase.siId
      WHERE siMainCase.siId = siMain.siId
      AND eAppMainCase.isDeleted = 0
  )
  END as 'siStatus'
  FROM SI_MAIN siMain
  LEFT JOIN SI_PERSONS siPerson ON siMain.siId = siPerson.siId
  LEFT JOIN SI_TOPUP siTopup ON siMain.siId = siTopup.siId
  LEFT JOIN SI_RIDERS siRider ON siMain.siId = siRider.siId
  LEFT JOIN SI_FUNDS siFunds ON siMain.siId = siFunds.siId
  WHERE siMain.isDeleted = ? AND siMain.siId = ? AND siPerson.personType = ?
  ORDER BY siMain.dateModified DESC
  LIMIT 1`,
    GET_SI_BY_LEAD_ID: `
SELECT *,
  CASE
  WHEN (
      SELECT eAppMainCase.eappStatus FROM SI_MAIN siMainCase
      INNER JOIN EAPP_Main eAppMainCase
      ON siMainCase.siId = eAppMainCase.siId
      WHERE siMainCase.siId = siMain.siId
      AND eAppMainCase.isDeleted = 0
  ) IN ('IN-PROGRESS','COMPLETED') THEN 'ATTACHED'
  ELSE (
      SELECT eAppMainCase.eappStatus FROM SI_MAIN siMainCase
      INNER JOIN EAPP_Main eAppMainCase
      ON siMainCase.siId = eAppMainCase.siId
      WHERE siMainCase.siId = siMain.siId
      AND eAppMainCase.isDeleted = 0
  )
  END as 'siStatus'
  FROM SI_MAIN siMain
  WHERE siMain.isDeleted = ? AND siMain.leadId = ?
  ORDER BY siMain.dateModified DESC
  LIMIT 1`,
    GET_ALL_SI_BY_LEAD_ID: `
  SELECT * FROM SI_Main
  INNER JOIN Leads on
  SI_Main.leadId = Leads.leadId
  WHERE Leads.leadId = ?
  AND SI_Main.isDeleted = ?`,
    GET_ALL_EAPP_BY_SI_ID: `
  SELECT * FROM EAPP_Main
  INNER JOIN SI_MAIN on
  EAPP_Main.siId = SI_MAIN.siId
  WHERE EAPP_Main.siId = ?
  AND EAPP_Main.isDeleted = ?`,
    GET_IRPQ_BY_LEADS_ID: `SELECT * FROM Leads a
  INNER JOIN IRPQ b ON a.leadId = b.leadId
  WHERE a.leadId = ? AND b.isCompleted = ? AND b.isDeleted in (0,NULL)`,
    GET_FNA_BY_LEADS_ID: `SELECT * FROM Leads a
  INNER JOIN FNA_Main b ON a.leadId = b.leadId
  WHERE a.leadId = ? AND b.isCompleted = ?`,
    INSERT_SI_FUNDS: `INSERT INTO SI_FUNDS(siId, fundKey, fundDirection, fundVersion) VALUES (?, ?, ?, ?)`,
    INSERT_SI_RIDERS: `INSERT INTO SI_RIDERS(siId, riderKey, riskClassCode,riskClassVersion, riderVersion, riderCode, multipleExtra, sumAssured) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
    INSERT_SI_TOPUP_WITHDRAWAL: `INSERT INTO SI_TOPUP(siId, policyYear, age, topUpAmt, withdrawalAmt) VALUES (?, ?, ?, ?, ?)`,
    GET_ALL_UNSYNC_SI_DATA: `SELECT *
  FROM SI_MAIN WHERE syncStatus != 2`,
    GET_ALL_SI_DATA_SYNC: `SELECT * FROM SI_MAIN`,
    GET_ALL_SI_PERSON_DATA_SYNC: `SELECT * FROM SI_PERSONS`,

    GET_SI_BY_SYNC_STATUS: `SELECT *, 
    CASE 
      WHEN ( 
        SELECT eAppMainCase.eappStatus FROM SI_MAIN siMainCase 
        INNER JOIN EAPP_Main eAppMainCase 
        ON siMainCase.siId = eAppMainCase.siId 
        WHERE siMainCase.siId = siMain.siId 
        AND eAppMainCase.isDeleted = 0 
      ) IN ('IN-PROGRESS','COMPLETED') THEN 'ATTACHED' 
      ELSE ( 
        SELECT eAppMainCase.eappStatus FROM SI_MAIN siMainCase 
        INNER JOIN EAPP_Main eAppMainCase 
        ON siMainCase.siId = eAppMainCase.siId 
        WHERE siMainCase.siId = siMain.siId 
        AND eAppMainCase.isDeleted = 0 
      ) 
    END as 'siStatus' 
    FROM SI_MAIN siMain 
    INNER JOIN SI_PERSONS siPerson 
    ON siMain.siId = siPerson.siId 
    WHERE siMain.isDeleted = ? AND siPerson.personType = ? AND siMain.syncStatus in (?,?,?) 
    ORDER BY siMain.dateModified DESC`,

    GET_SI_SYNC_COUNT: `SELECT  
    (SELECT COUNT(1)  
      FROM SI_MAIN siMain 
      INNER JOIN SI_PERSONS siPerson 
      ON siMain.siId = siPerson.siId 
      WHERE siMain.isDeleted = 0  
      AND siPerson.personType = 0) as 'all', 
    (SELECT COUNT(1)  
      FROM SI_MAIN siMain 
      INNER JOIN SI_PERSONS siPerson 
      ON siMain.siId = siPerson.siId 
      WHERE siMain.isDeleted = 0  
      AND siPerson.personType = 0  
      AND siMain.syncStatus = 2) as live, 
    (SELECT COUNT(1)  
      FROM SI_MAIN siMain 
      INNER JOIN SI_PERSONS siPerson 
      ON siMain.siId = siPerson.siId 
      WHERE siMain.isDeleted = 0  
      AND siPerson.personType = 0  
      AND siMain.syncStatus = 0) as offline, 
    (SELECT COUNT(1)  
      FROM SI_MAIN siMain 
      INNER JOIN SI_PERSONS siPerson 
      ON siMain.siId = siPerson.siId 
      WHERE siMain.isDeleted = 0  
      AND siPerson.personType = 0  
      AND siMain.syncStatus in (69,619,99)) as error`
}