import { Injectable } from '@angular/core';
import { PLANS } from '@utils/constants/options/product-info/plans';
import { SQL_QUERIES } from '@utils/constants/query/sql-queries';
import { SYNC_STATUS } from '@utils/constants/sync-status';
import { MODULE } from '@utils/enums/module';
import { BehaviorSubject, combineLatest, from, Observable, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

// services
import { DbService } from '@services/db/db.service';
import { ProcessQueueService } from '@core/services';
import { UtilService } from '@services/util/util.service';
import { QUEUE_PROCESS, QUEUE_STATUS } from '@utils/enums/queue-data';
import { WhereData } from '@models/query-data/where-data';
import { STATUS } from '@utils/constants/status/status';
import { ApplicationNumberData } from '@models/eapp-request/application-number';


@Injectable({
  providedIn: 'root'
})
export class EApplicationService {

  eappSyncStatus: Observable<any> = of([]);

  constructor(
    private databaseService: DbService,
    private processQueueService: ProcessQueueService,
    private utils: UtilService
  ) { }

  getEapp(whereData: BehaviorSubject<any>): Observable<any> {
    const response: Subject<any> = new Subject();

    whereData.subscribe(whereData => {
      from(
        whereData.syncStatus != SYNC_STATUS.ALL ?
          this.getAllEappBySyncStatus(whereData) :
          this.databaseService.database.executeSql(
            SQL_QUERIES.GET_ALL_EAPPS.query,
            [
              whereData.isDeleted,
              whereData.personType
            ])

      )
        .pipe(
          map(result => {
            let eapps = [];
            let resultObj = this.utils.createObjectArrFromDBData(result)
            let sortedResultObj = this.utils.sortDataByDate(resultObj);
            sortedResultObj.forEach(eapp => {
              eapps.push(
                {
                  lastName: eapp.lastName,
                  firstName: eapp.firstName,
                  middleName: eapp.middleName,
                  insuredName: eapp.insuredName,
                  status: eapp.eappStatus,
                  syncStatus: eapp.syncStatus,
                  type: MODULE.EAPP,
                  applicationNumber: eapp.applicationNumber,
                  attachedDate: eapp.attachedDate,
                  policyNumber: eapp.policyNumber || 'Not yet generated',
                  product: PLANS[eapp.planCode],
                  lastUpdated: this.utils.formatCardDate(eapp.dateModified),
                  dateCreated: this.utils.formatCardDate(eapp.dateCreated),
                  id: eapp.siId,
                  isDisabled: false,
                  leadId: eapp.leadId,
                  generatedOnline: eapp.generatedOnline
                }
              )
            });

            eapps = !!whereData.keyword ? this.utils.search(whereData.keyword, eapps) : eapps;

            return eapps;
          })
        )
        .subscribe(eapps => {
          response.next(eapps);
        })
    })

    return response.asObservable();
  }
  GET_LEADID_BY_SYNC_STATUS = `select leadId from eapp_main where syncStatus in (0,69,619)`;

  getEAppsStatus(updateData: BehaviorSubject<any>): Observable<any> {
    const response: Subject<any> = new Subject();
    updateData.subscribe(_ => {
      combineLatest([
        from(this.databaseService.database.executeSql(SQL_QUERIES.GET_EAPPS_SYNC_STATUS, [])),
        from(this.databaseService.database.executeSql(this.GET_LEADID_BY_SYNC_STATUS, []))
      ]).pipe(map(([data, result]) => { return [data.rows.item(0), result] })
      ).subscribe(async ([eappCount, result]) => {
        if (result.rows && result.rows.length > 0) {
          for (let i = 0; i < result.rows.length; i++) {
           await this.processQueueService.addToQueue({
              id: result.rows.item(i).leadId,
              status: QUEUE_STATUS.PENDING,
              process: QUEUE_PROCESS.SYNC
            });
          }
        }
        response.next(eappCount);
      })
    })
    return response.asObservable();
  }

  async getAllEappBySyncStatus(whereData?: any): Promise<any> {
    return new Promise(async (resolve) => {
      let eappData;

      if (whereData.syncStatus == SYNC_STATUS.SYNC_FAIL_99) {
        eappData = await this.databaseService.database.executeSql(
          SQL_QUERIES.GET_ALL_EAPPS_BY_STATUS.query,
          [
            whereData.isDeleted,
            whereData.personType,
            99,
            69,
            619
          ]);
      } else {
        eappData = await this.databaseService.database.executeSql(
          SQL_QUERIES.GET_ALL_EAPPS_BY_STATUS.query,
          [
            whereData.isDeleted,
            whereData.personType,
            whereData.syncStatus
          ]);
      }

      resolve(eappData);
    });
  }



  async getAllEappMain(eappId?: any): Promise<any> {
    return new Promise(async (resolve) => {
      let eapps: any[] = [];

      await this.databaseService.getAllTableData('EAPP_Main').then(result => {
        if (result.rows && result.rows.length > 0) {
          for (let i = 0; i < result.rows.length; i++) {
            const eappData = Object.assign({}, result.rows.item(i));
            eapps.push(eappData);
          }
        }
      })

      resolve(eapps);
    });
  }

  refreshApplicationNumber() {
    return new Promise(async (resolve) => {
      const eApplications = await this.getAllEappMain();

      for (const eapp of eApplications) {
        if (eapp.syncStatus == 2) {
          await this.updateApplicationNumberStatus(eapp.eappId)
        }
      }

      resolve(null);
    });

  }


  async updateApplicationNumberStatus(eappId: string) {
    return new Promise(async (resolve) => {

      let result: boolean;
      const generatedOnline: any = true;
      const whereData: WhereData[] = [
        {
          fieldName: 'eappId',
          operation: 'equal',
          compareValue: eappId
        }
      ];

      await this.databaseService.updateTableData('EAPP_Main', ['generatedOnline'], [generatedOnline],
        whereData).then(_ => {
          result = true;
        }, error => {
          result = false;
          throw error;
        });

      resolve(result);
    });

  }



  async getAllEappRelatedTable(eappId: string) {

    const query = `SELECT 
  EAPP_Main.*, 
  (
    SELECT 
      json_object(
        'personId', 
        personId, 
        'eappId', 
        eappId, 
        'personType', 
        personType, 
        'contactNumber', 
        contactNumber, 
        'email', 
        email, 
        'relationshipToPI', 
        relationshipToPI, 
        'otherFirstName', 
        otherFirstName, 
        'otherMiddleName', 
        otherMiddleName, 
        'otherLastName', 
        otherLastName, 
        'motherFirstName', 
        motherFirstName, 
        'motherMiddleName', 
        motherMiddleName, 
        'motherLastName', 
        motherLastName, 
        'civilStatus', 
        civilStatus, 
        'pobCountry', 
        pobCountry, 
        'pobProvince', 
        pobProvince, 
        'pobCity', 
        pobCity, 
        'nationality', 
        nationality, 
        'isUSPerson', 
        isUSPerson, 
        'identificationType', 
        identificationType, 
        'identificationNumber', 
        identificationNumber, 
        'annualIncome', 
        annualIncome, 
        'employer', 
        employer, 
        'natureOfBusiness', 
        natureOfBusiness, 
        'occupationTitle', 
        occupationTitle, 
        'sourceOfFunds', 
        sourceOfFunds, 
        'otherSourceOfFunds', 
        otherSourceOfFunds, 
        'preferredMailingAddress', 
        preferredMailingAddress,
        'validIdNumber',
        validIdNumber,
        'coFirstName', 
        coFirstName, 
        'coMiddleName', 
        coMiddleName, 
        'coLastName', 
        coLastName, 
        'coDateOfBirth', 
        coDateOfBirth, 
        'coRelationship', 
        coRelationship, 
        'armyBranch', 
        armyBranch, 
        'rank', 
        rank, 
        'airlineJob', 
        airlineJob, 
        'aircraftType', 
        aircraftType, 
        'numberOfFlightExpirience', 
        numberOfFlightExpirience, 
        'vesselOwner', 
        vesselOwner, 
        'vesselType', 
        vesselType, 
        'vesselCountry', 
        vesselCountry, 
        'fishingArea', 
        fishingArea, 
        'serverId', 
        serverId, 
        'isPoliticallySensitive', 
        isPoliticallySensitive, 
        'prominentPublicPosition', 
        prominentPublicPosition, 
        'EAPP_Person_VesselOperationInfo', 
        (
          SELECT 
            json_object(
              'vesselOperationID', vesselOperationID, 
              'personId', personId, 'water', water, 
              'port', port
            ) 
          FROM 
            EAPP_Person_VesselOperationInfo 
          where 
            EAPP_Person_VesselOperationInfo.personId = EAPP_Person.personId
        )
      ) 
    FROM 
      EAPP_Person 
    where 
      EAPP_Person.eappId = EAPP_Main.eappId
  ) as "EAPP_Person", 
  (
    SELECT 
      json_group_array(
        json_object(
          'beneId', beneId, 'eappId', eappId, 
          'hasNoMiddleName', hasNoMiddleName, 
          'firstName', firstName, 'middleName', 
          middleName, 'lastName', lastName, 
          'dateOfBirth', dateOfBirth, 'nationalityCountryCode', 
          nationalityCountryCode, 'designation', 
          designation, 'priority', priority, 
          'sharePercentage', sharePercentage, 
          'relationToPI', relationToPI, 'justification', 
          justification, 'unitBuilding', unitBuilding, 
          'blockNumber', blockNumber, 'streetName', 
          streetName, 'barangay', barangay, 
          'countryCode', countryCode, 'provinceCode', 
          provinceCode, 'cityCode', cityCode, 
          'zipCode', zipCode, 'declaration1', 
          declaration1, 'declaration2', declaration2, 
          'declaration3', declaration3, 'declaration4', 
          declaration4, 'guardianFirstName', 
          guardianFirstName, 'guardianMiddleName', 
          guardianMiddleName, 'guardianLastName', 
          guardianLastName, 'guardianDateOfBirth', 
          guardianDateOfBirth, 'guardianRelationToBene', 
          guardianRelationToBene, 'serverId', 
          serverId, 'questionCodeSet', questionCodeSet, 
          'pobCountry', pobCountry, 'pobProvince', 
          pobProvince, 'pobCity', pobCity, 
          'mobileNumber', mobileNumber, 'emailAddress', 
          emailAddress, 'gender', gender
        )
      ) 
    FROM 
      EAPP_Beneficiaries 
    where 
      EAPP_Beneficiaries.eappId = EAPP_Main.eappId
  ) as "EAPP_Beneficiaries", 
  (
    SELECT 
      json_object(
        'eappId', eappId, 'fundKey', fundKey, 
        'topUpDirection', topUpDirection
      ) 
    FROM 
      EAPP_FundsTopUpDirection 
    where 
      EAPP_FundsTopUpDirection.eappId = EAPP_Main.eappId
  ) as "EAPP_FundsTopUpDirection", 
  (
    SELECT 
      json_group_array(
        json_object(
          'bankId', bankId, 'eappId', eappId, 
          'coDepositorName', coDepositorName
        )
      ) 
    FROM 
      EAPP_Payout_Banks 
    where 
      EAPP_Payout_Banks.eappId = EAPP_Main.eappId
  ) as "EAPP_Payout_Banks", 
  (
    SELECT 
      json_object(
        'pendingAppId', pendingAppId, 'eappId', 
        eappId, 'company', company, 'basicLife', 
        basicLife, 'basicLifeCurrency', 
        basicLifeCurrency, 'status', status, 
        'yearOfIssue', yearOfIssue
      ) 
    FROM 
      EAPP_PendingApplication 
    where 
      EAPP_PendingApplication.eappId = EAPP_Main.eappId
  ) as "EAPP_PendingApplication", 
  (
    SELECT 
      json_object(
        'totalInsuranceId', totalInsuranceId, 
        'eappId', eappId, 'company', company, 
        'basicLife', basicLife, 'basicLifeCurrency', 
        basicLifeCurrency, 'accident', accident, 
        'accidentCurrency', accidentCurrency, 
        'yearOfIssue', yearOfIssue
      ) 
    FROM 
      EAPP_TotalInsuranceInforce 
    where 
      EAPP_TotalInsuranceInforce.eappId = EAPP_Main.eappId
  ) as "EAPP_TotalInsuranceInforce", 
  (
    SELECT 
      json_object(
        'replacementNotifId', replacementNotifId, 
        'eappId', eappId, 'company', company, 
        'policyNo', policyNo, 'amountInsuranceReplaced', 
        amountInsuranceReplaced, 'amountInsuranceReplacedCurrency', 
        amountInsuranceReplacedCurrency, 'afcInsured',
        afcInsured
      ) 
    FROM 
      EAPP_ReplacementNotification 
    where 
      EAPP_ReplacementNotification.eappId = EAPP_Main.eappId
  ) as "EAPP_ReplacementNotification", 
  (
    SELECT 
      json_group_array(
        json_object(
          'signatureId', signatureId, 'eappId', 
          eappId, 'signatureType', signatureType, 
          'signatureBase64', signatureBase64, 
          'signatureDate', signatureDate, 
          'paperFormatConsent', paperFormatConsent, 
          'thirdPartyConsent', thirdPartyConsent, 
          'isAttestation', isAttestation, 
          'attestationBase64', attestationBase64, 
          'videoScreenshotBase64', videoScreenshotBase64, 
          'emailAcknowledgementBase64', emailAcknowledgementBase64, 
          'disableEDD', disableEDD, 'referrorId', 
          referrorId, 'intmPolicyIntendedToChange', 
          intmPolicyIntendedToChange, 'intmPremiumsPaidByLoan', 
          intmPremiumsPaidByLoan
        )
      ) 
    FROM 
      EAPP_Signatures 
    where 
      EAPP_Signatures.eappId = EAPP_Main.eappId
  ) as "EAPP_Signatures", 
  (
    SELECT 
      json_object(
        'nonMedId', 
        nonMedId, 
        'eappId', 
        eappId, 
        'isForPBR', 
        isForPBR, 
        'heightCM', 
        heightCM, 
        'weightKG', 
        weightKG, 
        'noParent', 
        noParent, 
        'fatherFirstName', 
        fatherFirstName, 
        'fatherLastName', 
        fatherLastName, 
        'fatherMiddleName', 
        fatherMiddleName, 
        'fatherAge', 
        fatherAge, 
        'motherFirstName', 
        motherFirstName, 
        'motherLastName', 
        motherLastName, 
        'motherMiddleName', 
        motherMiddleName, 
        'motherAge', 
        motherAge, 
        'cardiovascularDisFamilyCount', 
        cardiovascularDisFamilyCount, 
        'cerebrovascularDisFamilyCount', 
        cerebrovascularDisFamilyCount, 
        'diabetesFamilyCount', 
        diabetesFamilyCount, 
        'alzheimersFamilyCount', 
        alzheimersFamilyCount, 
        'kidneyDisFamilyCount', 
        kidneyDisFamilyCount, 
        'cancerFamilyCount', 
        cancerFamilyCount, 
        'cancerTypeCount', 
        cancerTypeCount, 
        'EAPP_NonMed_FamilyMembers', 
        (
          SELECT 
            json_group_array(
              json_object(
                'famMemberId', famMemberId, 'nonMedId', 
                nonMedId, 'relationship', relationship, 
                'firstName', firstName, 'middleName', 
                middleName, 'lastName', lastName, 
                'age', age, 'hasCancer', hasCancer, 
                'hasCoronary', hasCoronary, 'hasCardiovascular', 
                hasCardiovascular, 'hasAlzheimers', 
                hasAlzheimers
              )
            ) 
          FROM 
            EAPP_NonMed_FamilyMembers 
          where 
            EAPP_NonMed_FamilyMembers.nonMedId = EAPP_NonMed_Main.nonMedId
        ), 
        'EAPP_NonMed_Alcohol_Doctors', 
        (
          SELECT 
            json_group_array(
              json_object(
                'alcoholDoctorsId', alcoholDoctorsId, 
                'nonMedId', nonMedId, 'name', name, 
                'address', address, 'dateOfConsultation', 
                dateOfConsultation
              )
            ) 
          FROM 
            EAPP_NonMed_Alcohol_Doctors 
          where 
            EAPP_NonMed_Alcohol_Doctors.nonMedId = EAPP_NonMed_Main.nonMedId
        ), 
        'EAPP_NonMed_Detox_Doctors', 
        (
          SELECT 
            json_group_array(
              json_object(
                'detoxDoctorsId', detoxDoctorsId, 
                'nonMedId', detoxDoctorsId, 'name', 
                name
              )
            ) 
          FROM 
            EAPP_NonMed_Detox_Doctors 
          where 
            EAPP_NonMed_Detox_Doctors.nonMedId = EAPP_NonMed_Main.nonMedId
        ), 
        'EAPP_NonMed_Foreign_Travel_Residence', 
        (
          SELECT 
            json_object(
              'foreignTravelId', foreignTravelId, 
              'nonMedId', nonMedId, 'country', 
              country, 'plannedStartDate', plannedStartDate, 
              'plannedEndDate', plannedEndDate, 
              'city', city
            ) 
          FROM 
            EAPP_NonMed_Foreign_Travel_Residence 
          where 
            EAPP_NonMed_Foreign_Travel_Residence.nonMedId = EAPP_NonMed_Main.nonMedId
        ), 
        'EAPP_NonMed_VesselOperationInfo', 
        (
          SELECT 
            json_object(
              'vesselOperationId', vesselOperationId, 
              'nonMedId', nonMedId, 'water', water, 
              'port', port
            ) 
          FROM 
            EAPP_NonMed_VesselOperationInfo 
          where 
            EAPP_NonMed_VesselOperationInfo.nonMedId = EAPP_NonMed_Main.nonMedId
        ), 
        'EAPP_NonMed_Answers', 
        (
          SELECT 
            json_group_array(
              json_object(
                'nonMedId', nonMedId, 'questionId', 
                questionId, 'answerValue', answerValue
              )
            ) 
          FROM 
            EAPP_NonMed_Answers 
          where 
            EAPP_NonMed_Answers.nonMedId = EAPP_NonMed_Main.nonMedId
        )
      ) 
    FROM 
      EAPP_NonMed_Main 
    where 
      EAPP_NonMed_Main.eappId = EAPP_Main.eappId
  ) as "EAPP_NonMed_Main" 
FROM 
  EAPP_Main where EAPP_MAIN.eappId = ? `;

    const results = await this.databaseService.database.executeSql(query, [eappId]);
    return (results.rows && results.rows.length > 0) ? results.rows.item(0) : null;

  }

  getExistingApplicationNumbers(applicationNumbers: ApplicationNumberData[]): String[] {
    let applicationNumberValues = applicationNumbers.map(item => item.applicationNumber);
    let query = `SELECT applicationNumber FROM EAPP_MAIN WHERE applicationNumber IN (${applicationNumberValues})`;
    let results: string[] = [];

    this.databaseService.database.executeSql(query, applicationNumbers)
      .then(data => {
        if (data.rows && data.rows.length > 0) {
          for (let i = 0; i < data.rows.length; i++) {
            results.push(data.rows.item(i).applicationNumber);
          }
        }
    });

    return results;
  }

}
