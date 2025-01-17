import { Injectable, ɵConsole } from '@angular/core';
import { LeadsDbService } from '@services/db/leads/leads-db.service';
import { IrpqDbService } from '@services/db/irpq/irpq-db.service';
import { Storage } from '@ionic/storage';
import { DbService } from '@services/db/db.service';
import { CONSTANT_DB_TABLE } from '@utils/constants/constant-table-name';
import { LeadSyncRequest } from '@models/leads/lead-sync-request-model/leads-sync-request';
import { LeadSyncLeadsRequest } from '@models/leads/lead-sync-request-model/leads-sync-leads-request';
import { LeadSyncDataRequest } from '@models/leads/lead-sync-request-model/leads-sync-leads-data';
import { LeadSyncPersonRequest } from '@models/leads/lead-sync-request-model/leads-person-request';
import { LeadSyncContactsRequest } from '@models/leads/lead-sync-request-model/leads-contacts-request';
import { LeadSyncAddressesRequest } from '@models/leads/lead-sync-request-model/leads-address-request';
import { LeadSyncHomeAddressesRequest } from '@models/leads/lead-sync-request-model/leads-home-address-request';
import { LeadSyncWorkAddressesRequest } from '@models/leads/lead-sync-request-model/leads-work-address-request';
import { LeadNeedPrioritiesRequest } from '@models/leads/lead-sync-request-model/leads-request-need-priorities';
import { NeedsAnalysisDbService } from '@services/db/needs-analysis/needs-analysis-db.service';
import { NeedAnalysisRequest } from '@models/need-analysis-sync-request/need-analysis-sync-request';
import { NeedAnalaysisSyncRequest } from '@models/need-analysis-sync-request/need-analysis-sync';
import { NeedAnalysisSyncRequestData } from '@models/need-analysis-sync-request/need-analysis-request-data';
import { NeedAnalysisRequestRelatedLead } from '@models/need-analysis-sync-request/need-analysis-request-related-lead';
import { ReferrorLeadRequest } from '@models/leads/lead-sync-request-model/leads-referror-request';
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import {
  GI, GI1, GI2, GI3, GI4, PI1, PI3, PI4, PI2, PI5, PI6, PI7, PI8, PI, IRPQSyncNeedAnalysisArray, IRPQSyncRequest,
  IRPQSyncRequestArray, questionsObject, IRPQData, prospectiveInvestor
} from '@models/irpq/index';
import { Modules } from '@utils/constants/modules-request';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { SYNC_STATUS } from '@utils/constants/sync-status';
import { QuotationRequest, QuotationRequestV2 } from '@models/sales-illustration/sync/quotation-request';
import { Coverage } from '@models/sales-illustration/sync/Coverages';
import { Transactions } from '@models/sales-illustration/sync/Transactions';
import { FundDetails } from '@models/sales-illustration/sync/FundDetails';
import { Quotations } from '@models/sales-illustration/sync/quotation';
import { QuotationData, QuotationDataV2 } from '@models/sales-illustration/sync/quotation-data';
import { ContractHolder } from '@models/sales-illustration/sync/contract-holder';
import { BaseRating } from '@models/sales-illustration/sync/BaseRating';
import { Addresses } from '@models/sales-illustration/sync/Addresses';
import { HomeAddress } from '@models/sales-illustration/sync/HomeAddress';
import { WorkAddress } from '@models/sales-illustration/sync/WorkAddress';
import { RelatedLead, RelatedLeadV2 } from '@models/sales-illustration/sync/RelatedLead';
import { InvestmentProfile } from '@models/sales-illustration/sync/InvestmentProfile';
import { NeedsAnalysis } from '@models/sales-illustration/sync/NeedsAnalysis';
import { TopUp } from '@models/sales-illustration/sync/TopUs';
import { InsuredPerson } from '@models/sales-illustration/sync/InsuredPerson';
import { PLANS } from '@utils/constants/options/product-info/plans';
import { SpecificFund } from '@models/sales-illustration/sync/specific-fund';
import { SalesIllustrationDbService } from '@services/db/sales-illustration/sales-illustration-db.service';
import { PROFILE_QUESTIONS } from '@utils/constants/options/radio/irpq/profile-questions';
import * as _ from 'lodash';
import { NEED_ANALYSIS_TYPE } from '@utils/constants/need-analysis-types';
import { FnaMapperService } from '@services/fna-mapper/fna-mapper';
import { CATEGORY_MAPPER } from '@utils/constants/life-priority-ws';
import { RESPONSE_STATUS } from '@utils/constants/response-status';
import { SubmissionChecklistDbService } from '@services/db/submission-checklist/submission-checklist-db.service';
import { CheckListSyncRequest } from '@models/submission-checklist/submission-sync/checklist-sync-request';
import { CheckListsRequest } from '@models/submission-checklist/submission-sync/checklists-request';
import { CheckListData } from '@models/submission-checklist/submission-sync/checklist-sync-data';
import { CheckListDocuments } from '@models/submission-checklist/submission-sync/checklist-sync-documents';
import { Signatories } from '@models/submission-checklist/submission-sync/checklist-sync-signatories';
import { SignatureData } from '@models/submission-checklist/submission-sync/checklist-sync-signature-data';
import { ChecklistPerson } from '@models/submission-checklist/submission-sync/checklist-sync-person';
import { QuestionsAll } from '@models/submission-checklist/submission-sync/checlist-sync-all';
import { ChecklistQuestions } from '@models/submission-checklist/submission-sync/checklist-sync-questions';
import { AAD } from '@models/submission-checklist/submission-sync/checklist-sync-AAD';
import { ACB } from '@models/submission-checklist/submission-sync/checklist-sync-ACB';
import { ACR } from '@models/submission-checklist/submission-sync/checklist-sync-ACR';
import { EAppDbService } from '@services/db/e-app/e-app-db.service';
import { UtilService } from '@services/util/util.service';
import { EappRequest } from '@models/eapp-request/eapp-request';
import { EappRequestMain } from '@models/eapp-request/eapp-request-main';
import { EappRequestData } from '@models/eapp-request/eapp-request-data';
import { EappRequestQuotation } from '@models/eapp-request/eapp-request-quotation';
import { EappRequestPayOut } from '@models/eapp-request/eapp-request-payOut';
import { Beneficiary } from '@models/sales-illustration/sync/Beneficiary';
import { Person } from '@models/eapp-request/person';
import { PreferredContactChannels } from '@models/sales-illustration/sync/PreferredContactChannels';
import { PERSON_TYPE } from '@utils/constants/constant-person-type';
import { EAPP_QUESTION } from '@utils/constants/eapp-questions/eapp-questions';
import { STATUS } from '@utils/constants/status/status';
import { PendingAppAnswers } from '@models/eapp-request/pending-app-answers';
import { ReplacementNotifAnswers } from '@models/eapp-request/replacement-notif-answers';
import { VesselOperationAnswers } from '@models/eapp-request/vessel-operation-answer';
import { TotalInforcedInsuranceAnswer } from '@models/eapp-request/inforced-insurance-answers';
import { AlcoholDoctorAnswers } from '@models/eapp-request/alcohol-doctor-answer';
import { DetoxDoctorAnswers } from '@models/eapp-request/detox-doctor-answer';
import { TravelResidenceAnswers } from '@models/eapp-request/travel-residence-answer';
import { BeneficiaryAnswers } from '@models/eapp-request/beneficiary-answers';
import { SIGNATURE_TYPE } from '@utils/constants/modules/signature-page';
import { environment } from '@environment/environment';
import { MessageModal } from '@services/modal-message/modal-message.page';
import { CONSTANTS_STRING } from '@utils/constants/string/constants-string';
import { Declarations } from '@models/submission-checklist/submission-sync/checklist-sync-declarations';
import { SI_PERSON_TYPE } from '@utils/constants/si_person_type';
import { SQL_QUERIES } from '@utils/constants/query/sql-queries';
import { filter, take, tap } from 'rxjs/operators';
import { SiblingAnswers } from '@models/eapp-request/siblings-answers';
import moment from 'moment';
import { BASE_RATING_MAPPER } from '@utils/constants/mapper/base_rating_mapper';
import { ATL } from '@models/submission-checklist/submission-sync/checklist-sync-ATL';
import { SubmissionEpayment } from '@models/submission-checklist/submission-checklist-view/submission-epayment';
import { CardHolder } from '@models/submission-checklist/submission-sync/checklist-sync-cardholder';
import { CardHolderPerson } from '@models/submission-checklist/submission-sync/checklist-sync-cardholder-data';
import { PAYMENT_STATUS } from '@utils/constants/submission-checklist/payment-status';
import { LOGTYPE } from '@utils/constants/utils';
import { UNDERWRITING_APPROACH } from '@utils/constants/options/product-info/underwriting-approach';
import { CONTINGENT_BENE_PRIORITY, PRIMARY_BENE_PRIORITY } from '@utils/constants/options/segment/e-app-options';
import { PERCENTAGE } from '@utils/constants/percentage';
import { BehaviorSubject, combineLatest, from, Observable, of, Subject } from 'rxjs';
import { DeltaSyncResponse } from 'app/core/models/delta-sync-response';
import { LeadsService } from '../leads/leads.service';
import { MESSAGE } from '@utils/constants/string/message';
import { MODULE } from '@utils/enums/module';
import { AbstractControl, FormArray, FormGroup, Validators } from '@angular/forms';
import { REGEXP } from '@utils/constants/regexp/regexp';
import { AnonymousSubject } from 'rxjs/internal/Subject';
import { Network } from '@ionic-native/network/ngx';
import { SyncReturnModel } from '@models/base-sync-return';
import { ModuleSyncResponse } from 'app/core/models/module-sync-response';
import { RESPONSE_MESSAGE } from '@utils/constants/response-error-message';
import { WhereData } from '@models/query-data/where-data';
import { ConnectivityService } from '../connectivity/connectivity.service';
import { ErrorHandlingService } from '@services/error-handling/error-handling.service';
import { SyncValidationsService } from '../sync/sync-validations/sync-validations.service';
import { CustomValidatorsService } from '../sync/sync-validations/custom-validators/custom-validators.service';
import { TERM } from '@models/submission-checklist/submission-sync/checklist-sync-TRM';
import { PREP } from '@models/submission-checklist/submission-sync/checklist-sync-PREP';
import { NeedsAnalysisService } from '../needs-analysis/needs-analysis.service';
import { isNullOrUndefined } from 'util';
import { ApplicationNumberService, DynatraceService } from '@core/services';

import { Screenshot } from '@ionic-native/Screenshot/ngx';
import { KEYS } from '@utils/constants/storage-keys/keys';
import { ROUTES } from '@utils/constants/route/routes';
import { ApplicationModalComponent } from '@components/modals/application-modal/application-modal.component';
import { QuotationsV2 } from '@models/sales-illustration/sync/quotation';
import { SettingsService } from '@services/settings/settings.service.service';
import { CHANNEL } from '@utils/enums/channel';
import { HSBC_REFERRING_BRANCHES } from '@utils/constants/submission-checklist/options/segments/referring-branch-segment';
import { ASSUREINTEGRATEDPRODUCTMAPPING } from '@utils/constants/assure-integrated-products-mapping';
import { CoreApiService } from '../core-api/core-api.service';
import { DB_NAMES } from '@utils/constants/journey-tables';
import { ERROR_MESSAGES } from '@utils/constants/error-messages/error-messages';
import { isEmpty } from 'lodash';
import { PREMIUM_MAPPING } from '@utils/constants/premium-mapping';
import { QUEUE_STATUS } from '@utils/enums/queue-data';

@Injectable({
  providedIn: 'root'
})

export class CoreSyncService {
  leadname: any;
  leadlastname: any;
  timer: NodeJS.Timer;
  isIHP: any;


  constructor(
    private platform: Platform,
    private leadsService: LeadsDbService,
    private irpqService: IrpqDbService,
    private storage: Storage,
    private screenshot: Screenshot,
    private databaseService: DbService,
    private needsAnalysisDbService: NeedsAnalysisDbService,
    private alertController: AlertController,
    private syncApiService: CoreApiService, // SyncApiService,  converted to singleton
    private salesIllustrationDbService: SalesIllustrationDbService,
    private fnaMapper: FnaMapperService,
    private checklistService: SubmissionChecklistDbService,
    private eappDbService: EAppDbService,
    private util: UtilService,
    private offAppNumService: ApplicationNumberService,
    private modalController: ModalController,
    private errorHandlingService: ErrorHandlingService,
    public connectivityService: ConnectivityService,
    private leadsCoreService: LeadsService,
    private needAnalysisCoreService: NeedsAnalysisService,
    private syncValidationsService: SyncValidationsService,
    private settingsService: SettingsService,
    private dynaTrace: DynatraceService
  ) {
    //
    this.initService();
  }

  async initService() {
    await this.platform.ready();
    this.connectivityService.appIsOnline$.subscribe(async isConnected => {
      this.isNetworkConnected = isConnected;
    });
  }

  amId: any;
  token: any;
  initialLoggedIn: boolean = false;
  isNetworkConnected: boolean = false;
  fullSyncModuleStatus: SyncReturnModel[] = [];
  benchMarkResults: any = [];
  benchMarkResult$: BehaviorSubject<any[]> = new BehaviorSubject([]);
  public syncLogs$: BehaviorSubject<any> = new BehaviorSubject({});
  errorCodes: any[] = [RESPONSE_STATUS.CLOUDFARE_ISSUE_523,
  RESPONSE_STATUS.CLOUDFARE_ISSUE_524,
  RESPONSE_STATUS.INTERNAL_SERVER_ERROR,
  RESPONSE_STATUS.MOBILE_NO_INTERNET_ISSUE,
  RESPONSE_STATUS.REQUEST_TIME_OUT,
  RESPONSE_STATUS.INTERNET_OUTAGE,
  RESPONSE_STATUS.FAIL_400,
  RESPONSE_STATUS.OTHER_HTTP_ERROR,
  RESPONSE_STATUS.NOT_FOUND];
  currentProgressId = [];

  async leadsDeltaSync(leadId?: any) {
    let leadResponse: DeltaSyncResponse;
    //this.util.logger(LOGTYPE.START, `Leads Delta Sync`)
    let lead = null;
    const result = await this.databaseService.database.executeSql(SQL_QUERIES.GET_LEAD_BY_ID, [leadId]);
    lead = this.util.createObjectArrFromDBData(result)[0];
    if (lead != null) {
      lead.leadStatus = lead.saleStatus != null ? lead.saleStatus : lead.leadStatus;
    }
    const leadsData: any = lead;
    if (leadsData != null) {
      if (leadsData.syncStatus === SYNC_STATUS.OFFLINE || leadsData.syncStatus == SYNC_STATUS.NETWORK_ERROR) {
        leadResponse = await this.syncLeads(leadsData);
      }
      else if (leadsData.syncStatus === SYNC_STATUS.SYNC_FAIL_99 && leadsData.isDeleted === 0) {
        const error = await this.errorHandlingService.getErrorsById(leadId, leadsData.leadId);
        leadResponse = new DeltaSyncResponse();
        if (error != null && error.errorMessage != null) {
          leadResponse.statusCode = error.errorCode;
          leadResponse.error = [{ message: error.errorMessage.message, field: error.errorMessage.field, value: error.errorMessage.value }];
        } else {
          leadResponse.error = MESSAGE.ERROR_DATA;
        }
        leadResponse.module = MODULE.LEAD;
        leadResponse.moduleId = leadsData.leadId;
        leadResponse.syncStatus = leadsData.syncStatus;
        leadResponse.error = MESSAGE.ERROR_DATA
      }
      else if (leadsData.syncStatus === SYNC_STATUS.SYNC_SUCCESS_2 && leadsData.isDeleted === 0) {
        leadResponse = new DeltaSyncResponse();
        leadResponse.module = MODULE.LEAD;
        leadResponse.moduleId = leadsData.leadId;
        leadResponse.syncStatus = leadsData.syncStatus;
      }
    }
    return leadResponse;
  }

  async syncLeads(leadsFromApp): Promise<any> {
    return new Promise(async (resolve) => {
      let leadResponse: DeltaSyncResponse | DeltaSyncResponse[];
      this.token = await this.storage.get(SETTING_KEYS.TOKEN);
      this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
      //this.util.logger(LOGTYPE.dbRetrieve, `LEADS UNSYNC DATA : ${JSON.stringify(leadsFromApp)}`)
      if (leadsFromApp != null) {

        leadsFromApp = this.util.objectArrSpaceCleanUp(leadsFromApp);
        var request: LeadSyncRequest;
        var leads: LeadSyncLeadsRequest[] = [];
        let lead: LeadSyncLeadsRequest;
        request = new LeadSyncRequest();
        lead = new LeadSyncLeadsRequest();
        lead.data = new LeadSyncDataRequest();

        lead.data.person = new LeadSyncPersonRequest();
        lead.data.person.referredByBankPartner = JSON.parse(leadsFromApp.referredByBankPartner);
        lead.data.person.name = leadsFromApp.lastName;
        lead.data.person.middleName = leadsFromApp.middleName;
        lead.data.person.firstName = leadsFromApp.firstName;
        lead.data.person.gender = leadsFromApp.gender;
        lead.data.person.maritalStatus = leadsFromApp.civilStatus;
        lead.data.person.birthDate = leadsFromApp.dateOfBirth;
        this.leadname = leadsFromApp.firstName;
        this.leadlastname = leadsFromApp.lastName;
        let occWs = null;
        if (leadsFromApp.occupationCode && leadsFromApp.occupationGrpCode) {
          occWs = leadsFromApp.occupationCode + '.' + leadsFromApp.occupationGrpCode;
        }
        lead.data.person.occupation = occWs;

        lead.data.person.preferredContactChannels = new LeadSyncContactsRequest();
        lead.data.person.preferredContactChannels.phoneNumber = leadsFromApp.phoneNumber;
        lead.data.person.preferredContactChannels.email = leadsFromApp.emailAddress;
        lead.data.person.preferredContactChannels.mailingAddress = 'P';

        lead.data.person.addresses = new LeadSyncAddressesRequest();
        lead.data.person.addresses.homeAddress = new LeadSyncHomeAddressesRequest();
        lead.data.person.addresses.homeAddress.buildingName = leadsFromApp.homeBuildingName;
        lead.data.person.addresses.homeAddress.cityCode = leadsFromApp.homeCityCode;
        lead.data.person.addresses.homeAddress.countryCode = leadsFromApp.homeCountryCode;
        lead.data.person.addresses.homeAddress.street = leadsFromApp.homeStreet;
        lead.data.person.addresses.homeAddress.streetNumber = this.util.trimString(leadsFromApp.homeBlockNumber, CONSTANTS_STRING.BLOCK_MAXCHAR);

        lead.data.person.addresses.homeAddress.zipCode = leadsFromApp.homeZipCode;
        lead.data.person.addresses.homeAddress.state = leadsFromApp.homeProvinceCode;
        lead.data.person.addresses.homeAddress.district = leadsFromApp.homeSubdivision;
        lead.data.person.addresses.homeAddress.type = 'HOME';
        lead.data.person.addresses.workAddress = new LeadSyncWorkAddressesRequest;
        lead.data.person.addresses.workAddress.buildingName = leadsFromApp.workBuildingName;
        lead.data.person.addresses.workAddress.cityCode = leadsFromApp.workCityCode;
        lead.data.person.addresses.workAddress.countryCode = leadsFromApp.workCountryCode;
        lead.data.person.addresses.workAddress.street = leadsFromApp.workStreet;
        lead.data.person.addresses.workAddress.streetNumber = this.util.trimString(leadsFromApp.workBlockNumber, CONSTANTS_STRING.BLOCK_MAXCHAR);
        lead.data.person.addresses.workAddress.zipCode = leadsFromApp.workZipCode;
        lead.data.person.addresses.workAddress.state = leadsFromApp.workProvinceCode;
        lead.data.person.addresses.workAddress.district = leadsFromApp.workSubdivision;
        lead.data.person.addresses.workAddress.type = 'WORK';

        lead.data.person.accountManager = leadsFromApp.accountManagerId;
        if (leadsFromApp.householdIncome != null) {
          lead.data.person.householdMonthlyIncome = leadsFromApp.householdIncome.toString();
        }
        if (leadsFromApp.monthlyIncome != null) {
          lead.data.person.monthlyIncome = leadsFromApp.monthlyIncome.toString();
        }
        lead.data.person.appointments = null;

        lead.data.proposalAge = leadsFromApp.proposalAge;

        //Error in request here - Ask for WS Accepted Values
        lead.data.leadStatus = leadsFromApp.leadStatus;

        lead.data.needPriorities = new LeadNeedPrioritiesRequest();
        lead.data.needPriorities.RET = leadsFromApp.retirementPriority != null && leadsFromApp.retirementPriority != CONSTANTS_STRING.EMPTY_STRING ? leadsFromApp.retirementPriority : null;
        lead.data.needPriorities.PRT = leadsFromApp.protectionPriority != null && leadsFromApp.protectionPriority != CONSTANTS_STRING.EMPTY_STRING ? leadsFromApp.protectionPriority : null;
        lead.data.needPriorities.EST = leadsFromApp.estatePlanningPriority != null && leadsFromApp.estatePlanningPriority != CONSTANTS_STRING.EMPTY_STRING ? leadsFromApp.estatePlanningPriority : null;
        lead.data.needPriorities.EDU = leadsFromApp.educationPriority != null && leadsFromApp.educationPriority != CONSTANTS_STRING.EMPTY_STRING ? leadsFromApp.educationPriority : null;
        lead.data.needPriorities.SAV = leadsFromApp.savingsPriority != null && leadsFromApp.savingsPriority != CONSTANTS_STRING.EMPTY_STRING ? leadsFromApp.savingsPriority : null;
        lead.data.needPriorities.HLTH = leadsFromApp.healthPriority != null && leadsFromApp.healthPriority != CONSTANTS_STRING.EMPTY_STRING ? leadsFromApp.healthPriority : null;

        lead.data.hasFinancialNeedAgreement = false;
        lead.data.leadStatusDetails = "Status is Contact";
        lead.isDeleted = leadsFromApp.isDeleted === 1;

        if (leadsFromApp.dateModified != null) {
          lead.lastUpdateDate = this.convertDate(leadsFromApp.dateModified);
        }
        if (leadsFromApp.dateCreated != null) {
          lead.createdDate = this.convertDate(leadsFromApp.dateCreated);
        }

        lead.clientRefId = leadsFromApp.leadId;
        lead.clientLeadRefId = leadsFromApp.leadId;
        lead.data.self = leadsFromApp.serverId;

        const errors: DeltaSyncResponse[] = []// await this.syncValidationsService.leadSyncValidation(lead.clientRefId, leadsFromApp, referrors);

        if (errors.length === 0) {
          leads.push(lead);
          request.leads = await this.util.sortByIsDeleted(leads);
          this.util.logInsert(request, 0, Modules.LEADS);
          const startTime = Date.now();
          // implemented new core api service
          let response = await this.syncApiService.setDeltaSync(Modules.LEADS, request);
          const endTime = Date.now();
          const url = document.URL;
          if (environment.accelarationAJ.isBenchMark && url.endsWith(`/${ROUTES.LEADS}`)) {
            let timeDiffMs = Math.abs(endTime - startTime);
            const minute = Math.floor(timeDiffMs / (1000 * 60));
            const secs = Math.floor((timeDiffMs % (1000 * 60)) / 1000);
            this.util.toastBottomAlert(`Lead Sync time: ${minute} minutes : ${secs} seconds`, 5000);
          }
          //console.log("LEADS DELTA RESPONSE: " + JSON.stringify(response));
          //this.util.logger(LOGTYPE.syncRes, `LEADS DELTA RESPONSE: ${JSON.stringify(response)}`)
          this.util.logInsert(response, 1, Modules.LEADS);
          if (environment.config.isWSAlertEnable) {
            if (response != null) {
              this.showResponse("DATA TO BE SENT TO WEBSERVICE: " + JSON.stringify(request) + + '\n' + "RESPONSE OF THE WEBSERVICE: " + JSON.stringify(response));
            }
          }

          if (response.status === RESPONSE_STATUS.SUCCESS_200 || response.status === RESPONSE_STATUS.SUCCESS_207) {
            if (response != null && response.data != null) {
              let syncData: any = [];
              syncData = JSON.parse(response.data);
              if (syncData != null && syncData.leads.length > 0) {
                for (const lead of syncData.leads) {
                  //subject to change in accordance to ws changes
                  leadResponse = new DeltaSyncResponse();
                  leadResponse.module = MODULE.LEAD;
                  leadResponse.moduleId = lead.clientRefId;
                  //console.log("lead.data.self " + lead.data.self);
                  let serverId = lead.data != null ? lead.data.self : null;
                  if (lead.recSyncStatus == SYNC_STATUS.SYNCHED && serverId != null) {
                    this.leadsService.updateLeadSyncFlag(SYNC_STATUS.SYNC_SUCCESS_2, leadsFromApp.leadId, serverId);
                    leadResponse.statusCode = response.status;
                    leadResponse.syncStatus = SYNC_STATUS.SYNC_SUCCESS_2;

                    if (lead.errors != null && lead.errors.length > 0 && lead.errors[0].code == RESPONSE_STATUS.DUPLICATE_202) {
                      leadResponse.statusCode = lead.errors[0].code;
                      await this.leadsCoreService.updateDuplicateLead(lead)
                    }
                  } else {
                    this.leadsService.updateLeadSyncFlag(SYNC_STATUS.SYNC_FAIL_99, leadsFromApp.leadId);
                    leadResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                    leadResponse.statusCode = response.status;
                    leadResponse.error = response.error
                  }
                }
              }
            }
          } else if (response.status === RESPONSE_STATUS.FAIL_400) {
            let syncData: any = [];
            if (response != null && response.error != null) {
              syncData = JSON.parse(response.error);
              if (syncData != null && syncData.leads != null) {
                for (const lead of syncData.leads) {
                  this.leadsService.updateLeadSyncFlag(SYNC_STATUS.SYNC_FAIL_99, leadsFromApp.leadId)
                  leadResponse = new DeltaSyncResponse();
                  leadResponse.module = MODULE.LEAD;
                  leadResponse.moduleId = lead.clientRefId;
                  leadResponse.statusCode = response.status;
                  leadResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                  leadResponse.error = lead.errors != null ? lead.errors : RESPONSE_MESSAGE.SERVER_ISSUE;

                };
              } else {
                this.leadsService.updateLeadSyncFlag(SYNC_STATUS.NETWORK_ERROR, leadsFromApp.leadId)
                leadResponse = new DeltaSyncResponse();
                leadResponse.module = MODULE.LEAD;
                leadResponse.moduleId = leadsFromApp.leadId;
                leadResponse.statusCode = response.status;
                leadResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
              }
            }
          } else if (response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 || response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524 || response.status == RESPONSE_STATUS.MOBILE_NO_INTERNET_ISSUE
            || response.status == RESPONSE_STATUS.REQUEST_TIME_OUT || response.status === RESPONSE_STATUS.INTERNET_OUTAGE || response.status === RESPONSE_STATUS.OTHER_HTTP_ERROR) {
            this.leadsService.updateLeadSyncFlag(SYNC_STATUS.NETWORK_ERROR, leadsFromApp.leadId);
            leadResponse = new DeltaSyncResponse();
            leadResponse.module = MODULE.LEAD;
            leadResponse.moduleId = lead.clientRefId;
            leadResponse.statusCode = response.status;
            leadResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
            leadResponse.error = RESPONSE_MESSAGE.NETWORK_ISSUE;
            if (response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 || response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524) {
              leadResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
            }
          } else {
            this.leadsService.updateLeadSyncFlag(SYNC_STATUS.SYNC_FAIL_99, leadsFromApp.leadId);
            leadResponse = new DeltaSyncResponse();
            leadResponse.module = MODULE.LEAD;
            leadResponse.moduleId = lead.clientRefId;
            leadResponse.statusCode = response.status;
            leadResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
            leadResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
          }
        } else {
          leadResponse = errors;
          this.leadsService.updateLeadSyncFlag(SYNC_STATUS.MOBILE_VALIDATION_ERROR, leadsFromApp.leadId);
          //console.log(`Leads sync form errors: ${errors}`);
        }
      }
      resolve(leadResponse);
    });
  }

  async fnaDeltaSync(leadId?: any): Promise<any> {
    return new Promise(async (resolve) => {
      let needAnalysisSyncing: [], fnaResponseList: any[], fnaResponse: DeltaSyncResponse;
      //this.util.logger(LOGTYPE.START, `FNA Delta Sync`)
      const needAnalysisData = await this.needsAnalysisDbService.getAllFnaByLeadId(leadId);
      const processedData = await this.filterData(needAnalysisData);
      if (processedData != null) {
        fnaResponseList = [];
        if (processedData.offlineList != null && processedData.offlineList.length > 0) {
          needAnalysisSyncing = await this.fnaSync(processedData.offlineList);
          if (needAnalysisSyncing != null && needAnalysisSyncing.length > 0) {
            needAnalysisSyncing.map(needAnalysis => {
              fnaResponseList.push(needAnalysis);
            });
          }
        }
        if (processedData.errorList != null && processedData.errorList.length > 0) {
          for (const needAnalysisError of processedData.errorList) {
            fnaResponse = new DeltaSyncResponse();
            const error = await this.errorHandlingService.getErrorsById(leadId, needAnalysisError.naId);
            if (error != null && error.errorMessage != null) {
              fnaResponse.statusCode = error.errorCode;
              fnaResponse.error = [{ message: error.errorMessage.message, field: error.errorMessage.field, value: error.errorMessage.value }];
            } else {
              fnaResponse.error = MESSAGE.ERROR_DATA;
            }
            fnaResponse.module = MODULE.NA;
            fnaResponse.moduleId = needAnalysisError.naId;
            fnaResponse.syncStatus = needAnalysisError.syncStatus;
            fnaResponseList.push(fnaResponse);
          }
        }
        if (processedData.syncedList != null && processedData.syncedList.length > 0) {
          processedData.syncedList.map(needAnalysisSuccess => {
            fnaResponse = new DeltaSyncResponse();
            fnaResponse.module = MODULE.NA;
            fnaResponse.moduleId = needAnalysisSuccess.naId;
            fnaResponse.syncStatus = needAnalysisSuccess.syncStatus;
            fnaResponseList.push(fnaResponse);
          });
        }
      }
      resolve(fnaResponseList);
      //this.util.logger(LOGTYPE.END, `FNA DELTA SYNC`)
    });
  }

  async fnaSync(needAnalysisDB?: any): Promise<any> {
    return new Promise(async (resolve) => {
      let fnaResponseList: DeltaSyncResponse[], fnaResponse: DeltaSyncResponse;
      //this.util.logger(LOGTYPE.START, `FNA Delta Sync`)
      this.token = await this.storage.get(SETTING_KEYS.TOKEN);
      this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
      var request: NeedAnalysisRequest;
      var needAnalysis: NeedAnalaysisSyncRequest;
      var listOfNA: NeedAnalaysisSyncRequest[] = [];

      const fnaFormErrors: DeltaSyncResponse[] = [];

      if (needAnalysisDB != null && needAnalysisDB.length > 0) {
        for (let i = 0; i < needAnalysisDB.length; i++) {
          needAnalysis = new NeedAnalaysisSyncRequest();
          needAnalysis.clientLeadRefId = needAnalysisDB[i].leadId;
          needAnalysis.clientRefId = needAnalysisDB[i].naId;
          try {
            if (needAnalysisDB[i].dateModified != null) {
              needAnalysis.lastUpdateDate = this.convertDate(needAnalysisDB[i].dateModified);
            }
            if (needAnalysisDB[i].dateCreated != null) {
              needAnalysis.createdDate = this.convertDate(needAnalysisDB[i].dateCreated);
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
          let lead = await this.leadsService.getExistingLeadById(needAnalysisDB[i].leadId);
          //this.util.logger(LOGTYPE.dbRetrieve, `GET attached lead : ${JSON.stringify(lead)}`)

          if (lead != null) {
            needAnalysis.data.relatedLead = new NeedAnalysisRequestRelatedLead();
            needAnalysis.data.relatedLead.self = lead.serverId;

            await this.needsAnalysisDbService.updateLeadServerIdFNA(lead.serverId, needAnalysisDB[i].naId);
          }

          const errors: DeltaSyncResponse[] = [] //await this.syncValidationsService.nASyncValidation(needAnalysis);
          if (errors.length > 0) {
            errors.forEach((error: DeltaSyncResponse) => {
              fnaFormErrors.push(error);
            });

            await this.needsAnalysisDbService.updateSyncFNA(SYNC_STATUS.MOBILE_VALIDATION_ERROR, needAnalysis.clientRefId);
            continue;
          }

          listOfNA.push(needAnalysis);
        }

        if (fnaFormErrors.length === 0) {
          request = new NeedAnalysisRequest();
          request.needanalyses = await this.util.sortByIsDeleted(listOfNA);
          this.util.logInsert(request, 0, Modules.FNA);
          // implemented new core api service
          let response = await this.syncApiService.setDeltaSync(Modules.FNA, request);
          this.util.logInsert(response, 1, Modules.FNA);
          if (environment.config.isWSAlertEnable) {
            if (response != null) {
              this.showResponse("DATA TO BE SENT TO WEBSERVICE: " + JSON.stringify(request) + '\n' + "RESPONSE OF THE WEBSERVICE: " + JSON.stringify(response));
            }
          }
          if (response.status === RESPONSE_STATUS.SUCCESS_200 || response.status === RESPONSE_STATUS.SUCCESS_207) {
            if (response != null && response.data != null) {
              var syncData = JSON.parse(response.data);
              if (syncData.needanalyses != null && syncData.needanalyses.length > 0) {
                fnaResponseList = [];
                for (const fna of syncData.needanalyses) {
                  fnaResponse = new DeltaSyncResponse();
                  fnaResponse.module = MODULE.NA;
                  fnaResponse.moduleId = fna.clientRefId;
                  if (fna.recSyncStatus === SYNC_STATUS.SYNCHED && fna.data.relatedLead.self != null && fna.data.self != null) {
                    await this.needsAnalysisDbService.updateSyncFNA(SYNC_STATUS.SYNC_SUCCESS_2, fna.clientRefId, fna.data.self)
                    fnaResponse.statusCode = response.status;
                    fnaResponse.syncStatus = SYNC_STATUS.SYNC_SUCCESS_2;
                    fnaResponseList.push(fnaResponse);

                    let NARawData = await this.storage.get(KEYS.NA_RAW_DATA);
                    if (!NARawData) {
                      NARawData = [];

                      NARawData.push({
                        clientRefId: fna.clientRefId,
                        NAServerID: fna.data.self
                      });
                    } else {

                      const index = NARawData.findIndex((data) => {
                        return data.clientRefId == fna.clientRefId;
                      });

                      if (index !== -1) {
                        NARawData[index].NAServerID = fna.data.self;
                      } else {
                        NARawData.push({
                          clientRefId: fna.clientRefId,
                          NAServerID: fna.data.self
                        });
                      }
                    }
                    await this.storage.set(KEYS.NA_RAW_DATA, NARawData);
                  } else {
                    await this.needsAnalysisDbService.updateSyncFNA(SYNC_STATUS.SYNC_FAIL_99, fna.clientRefId)
                    fnaResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                    fnaResponse.statusCode = response.status;
                    fnaResponse.error = response.error;
                    fnaResponseList.push(fnaResponse);
                  }
                }
              }
            }
          } else if (response.status === RESPONSE_STATUS.FAIL_400) {
            const syncData = JSON.parse(response.error);
            fnaResponseList = [];
            if (syncData != null && syncData.needanalyses != null) {
              for (const needanalyses of syncData.needanalyses) {
                await this.needsAnalysisDbService.updateSyncFNA(SYNC_STATUS.SYNC_FAIL_99, needanalyses.clientRefId)
                fnaResponse = new DeltaSyncResponse();
                fnaResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                fnaResponse.module = MODULE.NA;
                fnaResponse.statusCode = response.status;
                fnaResponse.error = needanalyses.errors != null ? needanalyses.errors : needanalyses.recSyncStatus;
                fnaResponse.moduleId = needanalyses.clientRefId;
                fnaResponseList.push(fnaResponse);
              }
            } else {
              if (request.needanalyses != null) {
                for (const needanalyses of request.needanalyses) {
                  await this.needsAnalysisDbService.updateSyncFNA(SYNC_STATUS.NETWORK_ERROR, needanalyses.clientRefId)
                  fnaResponse = new DeltaSyncResponse();
                  fnaResponse.moduleId = needanalyses.clientRefId;
                  fnaResponse.syncStatus = SYNC_STATUS.NETWORK_ERROR;
                  fnaResponse.module = MODULE.NA;
                  fnaResponse.statusCode = response.status;
                  fnaResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
                  fnaResponseList.push(fnaResponse);
                }
              }
            }
          } else if (response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 || response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524 || response.status == RESPONSE_STATUS.MOBILE_NO_INTERNET_ISSUE
            || response.status == RESPONSE_STATUS.REQUEST_TIME_OUT || response.status == RESPONSE_STATUS.INTERNET_OUTAGE || response.status == RESPONSE_STATUS.OTHER_HTTP_ERROR) {
            if (request != null) {
              fnaResponseList = [];
              for (const needanalyses of request.needanalyses) {
                await this.needsAnalysisDbService.updateSyncFNA(SYNC_STATUS.NETWORK_ERROR, needanalyses.clientRefId)
                fnaResponse = new DeltaSyncResponse();
                fnaResponse.syncStatus = SYNC_STATUS.NETWORK_ERROR;
                fnaResponse.module = MODULE.NA;
                fnaResponse.statusCode = response.status;
                fnaResponse.moduleId = needanalyses.clientRefId;
                fnaResponse.error = RESPONSE_MESSAGE.NETWORK_ISSUE;
                if (response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 || response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524) {
                  fnaResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
                }
                fnaResponseList.push(fnaResponse);
              }
            }
          } else {
            if (request != null) {
              fnaResponseList = [];
              for (const needanalyses of request.needanalyses) {
                await this.needsAnalysisDbService.updateSyncFNA(SYNC_STATUS.SYNC_FAIL_99, needanalyses.clientRefId)
                fnaResponse = new DeltaSyncResponse();
                fnaResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                fnaResponse.module = MODULE.NA;
                fnaResponse.statusCode = response.status;
                fnaResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
                fnaResponse.moduleId = needanalyses.clientRefId;
                fnaResponseList.push(fnaResponse);
              }
            }
          }
        } else {
          fnaResponseList = fnaFormErrors;
          //console.log(`FNA sync form errors: ${fnaFormErrors}`);
        }

        /*if (fnaFormErrors.length > 0) {
          fnaResponseList.push(...fnaFormErrors);
        }*/
      }

      resolve(fnaResponseList);
      //this.util.logger(LOGTYPE.END, `FNA Delta Sync`)
    });
  }

  async irpqDeltaSync(leadId?: any): Promise<any> {
    return new Promise(async (resolve) => {
      let irpqSyncingList: any[], irpqResponseList: any[], irpqResponse: DeltaSyncResponse;
      //this.util.logger(LOGTYPE.START, `IRPQ DELTA SYNC`)
      const irpqData = await this.irpqService.getAllIrpqByNaId(leadId);
      const processedData = this.filterData(irpqData);
      if (processedData != null) {
        irpqResponseList = [];
        if (processedData.offlineList != null && processedData.offlineList.length > 0) {
          irpqSyncingList = await this.irpqSync(processedData.offlineList);
          if (irpqSyncingList != null) {
            irpqSyncingList.map(irpq => {
              irpqResponseList.push(irpq);
            });
          }
        }
        if (processedData.errorList != null && processedData.errorList.length > 0) {
          for (const irpqError of processedData.errorList) {
            irpqResponse = new DeltaSyncResponse();
            const error = await this.errorHandlingService.getErrorsById(leadId, irpqError.irpqId);
            if (error != null && error.errorMessage != null) {
              irpqResponse.statusCode = error.errorCode;
              irpqResponse.error = [{ message: error.errorMessage.message, field: error.errorMessage.field, value: error.errorMessage.value }];
            } else {
              irpqResponse.error = MESSAGE.ERROR_DATA;
            }
            irpqResponse.module = MODULE.IRPQ;
            irpqResponse.moduleId = irpqError.irpqId;
            irpqResponse.syncStatus = irpqError.syncStatus;
            irpqResponseList.push(irpqResponse);
          }
        }
        if (processedData.syncedList != null && processedData.syncedList.length > 0) {
          processedData.syncedList.map(irpqSuccess => {
            irpqResponse = new DeltaSyncResponse();
            irpqResponse.module = MODULE.IRPQ;
            irpqResponse.moduleId = irpqSuccess.irpqId;
            irpqResponse.syncStatus = irpqSuccess.syncStatus;
            irpqResponseList.push(irpqResponse);
          });
        }
      }
      resolve(irpqResponseList);
      //this.util.logger(LOGTYPE.END, `IRPQ DELTA SYNC`)
    });
  }

  async irpqSync(irpqFromApp: any): Promise<any> {
    return new Promise(async (resolve) => {
      let irpqResponse: DeltaSyncResponse, irpqResponseList: DeltaSyncResponse[];
      //this.util.logger(LOGTYPE.START, `IRPQ Delta Sync`)
      //this.util.logger(LOGTYPE.dbRetrieve, `GET unsync irpq : ${JSON.stringify(irpqFromApp)}`)
      this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
      this.token = await this.storage.get(SETTING_KEYS.TOKEN);

      const irpqFormErrors: DeltaSyncResponse[] = [];

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
            irpq.lastUpdateDate = this.convertDate(irpqFromApp[i].dateModified);
          }
          if (irpqFromApp[i].dateCreated != null) {
            irpq.createdDate = this.convertDate(irpqFromApp[i].dateCreated);
          }

          // Data level
          irpq.data = new IRPQData();
          if (irpqFromApp[i].serverId != '0') {
            irpq.data.self = irpqFromApp[i].serverId;
          }
          const si: any = await this.irpqService.getSIByIrpqId(irpqFromApp[i].irpqId);
          if (si && si.length != 0) {
            if (si[0].isDeleted == 0) {
              irpq.data.status = STATUS.ATTACHED;
            }
          } else {
            irpq.data.status = irpqFromApp[i].isCompleted == 1 ? STATUS.COMPLETED : STATUS.IN_PROGRESS
          }

          irpq.data.riskAppetiteScore = this.getIRPQResult(irpqFromApp[i]).totalScore;

          // Prospective Investor
          irpq.data.prospectiveInvestor = new prospectiveInvestor();
          let leadServerId: any;
          const lead = await this.leadsService.getExistingLeadById(irpqFromApp[i].leadId);
          leadServerId = lead.serverId;

          // FNA
          irpq.data.needAnalysis = new IRPQSyncNeedAnalysisArray()
          let naServerId: any;
          const fna = await this.needsAnalysisDbService.getFNADetailsByID(irpqFromApp[i].naId);

          if (irpqFromApp[i].naServerId == null) {
            //this.util.logger(LOGTYPE.dbRetrieve, `GET attached fna: ${JSON.stringify(fna)}`)
            naServerId = fna.serverId;
          } else {
            naServerId = irpqFromApp[i].naServerId;
          }

          if(fna.leadServerId && leadServerId == fna.leadServerId) {
            irpq.data.prospectiveInvestor.self = leadServerId;
            await this.irpqService.updateIrpqLeadServerId(irpqFromApp[i].irpqId, leadServerId);
          } else {
            if(fna.leadServerId) {
              irpq.data.prospectiveInvestor.self = fna.leadServerId;
              await this.irpqService.updateIrpqLeadServerId(irpqFromApp[i].irpqId, fna.leadServerId);
            } else {
              irpq.data.prospectiveInvestor.self = leadServerId;
              await this.irpqService.updateIrpqLeadServerId(irpqFromApp[i].irpqId, leadServerId);
            }
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
          if (irpqFromApp[i].mostImportantObjective) {
            if (irpqFromApp[i].mostImportantObjective == "GI3_A7") { //GI3_A7
              irpq.data.questions.GI.GI3[irpqFromApp[i].mostImportantObjective] = true;
              irpq.data.questions.GI.GI3.GI3_00 = irpqFromApp[i].mostImportantObjectiveOthers
            }
            else {
              irpq.data.questions.GI.GI3[irpqFromApp[i].mostImportantObjective] = true;
            }
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


        request = new IRPQSyncRequest()
        request.investmentProfiles = await this.util.sortByIsDeleted(irpqs);
        this.util.logInsert(request, 0, Modules.IRPQ);
        // implemented new core api service
        let response = await this.syncApiService.setDeltaSync(Modules.IRPQ, request);
        this.util.logInsert(response, 1, Modules.IRPQ);
        if (environment.config.isWSAlertEnable) {
          if (response != null) {
            this.showResponse("DATA TO BE SENT TO WEBSERVICE: " + JSON.stringify(request) + '\n' + "RESPONSE OF THE WEBSERVICE: " + JSON.stringify(response));
          }
        }

        if (response.status === RESPONSE_STATUS.SUCCESS_200 || response.status === RESPONSE_STATUS.SUCCESS_207) {
          if (response != null && response.data != null) {
            var syncData = JSON.parse(response.data);
            if (syncData.investmentProfiles != null && syncData.investmentProfiles.length > 0) {
              irpqResponseList = [];
              for (const investmentProfile of syncData.investmentProfiles) {
                irpqResponse = new DeltaSyncResponse();
                irpqResponse.module = MODULE.IRPQ;
                let serverId = investmentProfile.data != null ? investmentProfile.data.self : null;
                if (investmentProfile.recSyncStatus === SYNC_STATUS.SYNCHED && serverId != null) {
                  await this.irpqService.updateIrpqSyncFlag(investmentProfile.clientRefId, SYNC_STATUS.SYNC_SUCCESS_2, serverId);
                  irpqResponse.statusCode = response.status;
                  irpqResponse.moduleId = investmentProfile.clientRefId;
                  irpqResponse.syncStatus = SYNC_STATUS.SYNC_SUCCESS_2;
                  irpqResponseList.push(irpqResponse);
                } else {
                  this.irpqService.updateIrpqSyncFlag(investmentProfile.clientRefId, SYNC_STATUS.SYNC_FAIL_99);
                  irpqResponse.statusCode = response.status;
                  irpqResponse.moduleId = investmentProfile.clientRefId;
                  irpqResponse.error = response.error;
                  irpqResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                  irpqResponseList.push(irpqResponse);
                }
              }
            }
            if (syncData.syncStatus === SYNC_STATUS.PARTIAL) {
            }
          }
        } else if (response.status === RESPONSE_STATUS.FAIL_400) {
          let syncData: any = [];
          syncData = JSON.parse(response.error);
          irpqResponseList = [];
          if (syncData != null && syncData.investmentProfiles != null) {
            for (const investmentProfiles of syncData.investmentProfiles) {
              await this.irpqService.updateIrpqSyncFlag(investmentProfiles.clientRefId, SYNC_STATUS.SYNC_FAIL_99);
              irpqResponse = new DeltaSyncResponse();
              irpqResponse.statusCode = response.status;
              irpqResponse.module = MODULE.IRPQ;
              irpqResponse.moduleId = investmentProfiles.clientRefId;
              irpqResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
              irpqResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
              irpqResponseList.push(irpqResponse);
            };
          } else {
            if (request.investmentProfiles != null) {
              for (const investmentProfiles of request.investmentProfiles) {
                await this.irpqService.updateIrpqSyncFlag(investmentProfiles.clientRefId, SYNC_STATUS.NETWORK_ERROR);
                irpqResponse = new DeltaSyncResponse();
                irpqResponse.statusCode = response.status;
                irpqResponse.module = MODULE.IRPQ;
                irpqResponse.moduleId = investmentProfiles.clientRefId;
                irpqResponse.syncStatus = SYNC_STATUS.NETWORK_ERROR;
                irpqResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
                irpqResponseList.push(irpqResponse);
              }
            }
          }
        } else if (response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 || response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524 || response.status == RESPONSE_STATUS.MOBILE_NO_INTERNET_ISSUE
          || response.status == RESPONSE_STATUS.REQUEST_TIME_OUT || response.status == RESPONSE_STATUS.INTERNET_OUTAGE || response.status == RESPONSE_STATUS.OTHER_HTTP_ERROR) {
          if (request != null) {
            irpqResponseList = [];
            for (const investmentProfiles of request.investmentProfiles) {
              await this.irpqService.updateIrpqSyncFlag(investmentProfiles.clientRefId, SYNC_STATUS.NETWORK_ERROR);
              irpqResponse = new DeltaSyncResponse();
              irpqResponse.module = MODULE.IRPQ;
              irpqResponse.statusCode = response.status;
              irpqResponse.moduleId = investmentProfiles.clientRefId;
              irpqResponse.syncStatus = SYNC_STATUS.NETWORK_ERROR;
              irpqResponse.error = RESPONSE_MESSAGE.NETWORK_ISSUE;
              if (response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 || response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524) {
                irpqResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
              }
              irpqResponseList.push(irpqResponse);
            }
          }
        } else {
          if (request != null) {
            irpqResponseList = [];
            for (const investmentProfiles of request.investmentProfiles) {
              await this.irpqService.updateIrpqSyncFlag(investmentProfiles.clientRefId, SYNC_STATUS.SYNC_FAIL_99);
              irpqResponse = new DeltaSyncResponse();
              irpqResponse.module = MODULE.IRPQ;
              irpqResponse.statusCode = response.status;
              irpqResponse.moduleId = investmentProfiles.clientRefId;
              irpqResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
              irpqResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
              irpqResponseList.push(irpqResponse);
            }
          }
        }
        // } else {
        //   irpqResponseList = irpqFormErrors;
        //   console.log(`IRPQ sync form errors: ${irpqFormErrors}`);
        // }
      }

      resolve(irpqResponseList);
      //this.util.logger(LOGTYPE.END, `Delta Sync IRPQ`)
    });
  }

  async siDeltaSyncHSBC(id?: any): Promise<any> {
    return new Promise(async (resolve) => {
      let siSyncingList: any[], siResponseList: any[], siResponse: DeltaSyncResponse, salesIllustrationData: any;
      //FORM VALIDATION
      //this.util.logger(LOGTYPE.START, `SI Delta Sync`)

      salesIllustrationData = await this.salesIllustrationDbService.getSalesIllustrationsByIdHSBC(id);

      const processedData = this.filterData(salesIllustrationData);
      if (processedData != null) {
        siResponseList = [];
        if (processedData.offlineList != null && processedData.offlineList.length > 0) {
          siSyncingList = await this.siSync(processedData.offlineList);
          if (siSyncingList != null) {
            siSyncingList.map(salesIllustration => {
              siResponseList.push(salesIllustration);
            });
          }
        }
        if (processedData.errorList != null) {
          for (const quotationError of processedData.errorList) {
            siResponse = new DeltaSyncResponse();
            const error = await this.errorHandlingService.getErrorsById(id, quotationError.siId);
            if (error != null && error.errorMessage != null) {
              siResponse.statusCode = error.errorCode;
              siResponse.error = [{ message: error.errorMessage.message, field: error.errorMessage.field, value: error.errorMessage.value }];
            } else {
              siResponse.error = MESSAGE.ERROR_DATA;
            }
            siResponse.module = MODULE.SI;
            siResponse.syncStatus = quotationError.syncStatus;
            siResponse.moduleId = quotationError.siId;
            siResponseList.push(siResponse);
          }
        }
        if (processedData.syncedList != null) {
          processedData.syncedList.map(quotationSuccess => {
            siResponse = new DeltaSyncResponse();
            siResponse.module = MODULE.SI;
            siResponse.syncStatus = quotationSuccess.syncStatus;
            siResponse.moduleId = quotationSuccess.siId;
            siResponseList.push(siResponse);
          });
        }
      }
      resolve(siResponseList);
      //this.util.logger(LOGTYPE.END, `SI DELTA SYNC`)
    });
  }

  async siDeltaSync(id?: any): Promise<any> {
    return new Promise(async (resolve) => {
      let siSyncingList: any[], siResponseList: any[], siResponse: DeltaSyncResponse, salesIllustrationData: any;
      //FORM VALIDATION
      //this.util.logger(LOGTYPE.START, `SI Delta Sync`)

      salesIllustrationData = await this.salesIllustrationDbService.getSalesIllustrationsById(id);

      const processedData = this.filterData(salesIllustrationData);
      if (processedData != null) {
        siResponseList = [];
        if (processedData.offlineList != null && processedData.offlineList.length > 0) {
          siSyncingList = await this.siSync(processedData.offlineList);
          if (siSyncingList != null) {
            siSyncingList.map(salesIllustration => {
              siResponseList.push(salesIllustration);
            });
          }
        }
        if (processedData.errorList != null) {
          for (const quotationError of processedData.errorList) {
            siResponse = new DeltaSyncResponse();
            const error = await this.errorHandlingService.getErrorsById(id, quotationError.siId);
            if (error != null && error.errorMessage != null) {
              siResponse.statusCode = error.errorCode;
              siResponse.error = [{ message: error.errorMessage.message, field: error.errorMessage.field, value: error.errorMessage.value }];
            } else {
              siResponse.error = MESSAGE.ERROR_DATA;
            }
            siResponse.module = MODULE.SI;
            siResponse.syncStatus = quotationError.syncStatus;
            siResponse.moduleId = quotationError.siId;
            siResponseList.push(siResponse);
          }
        }
        if (processedData.syncedList != null) {
          processedData.syncedList.map(quotationSuccess => {
            siResponse = new DeltaSyncResponse();
            siResponse.module = MODULE.SI;
            siResponse.syncStatus = quotationSuccess.syncStatus;
            siResponse.moduleId = quotationSuccess.siId;
            siResponseList.push(siResponse);
          });
        }
      }
      resolve(siResponseList);
      //this.util.logger(LOGTYPE.END, `SI DELTA SYNC`)
    });
  }

  async siSync(unsyncData): Promise<DeltaSyncResponse[]> {
    return new Promise(async (resolve) => {
      const siFormErrors: DeltaSyncResponse[] = [];
      let salesIllustrationRes: DeltaSyncResponse, siResponseList: DeltaSyncResponse[];
      //this.util.logger(LOGTYPE.START, `Delta Sync SI`)
      this.token = await this.storage.get(SETTING_KEYS.TOKEN);
      this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
      //console.log(JSON.stringify(unsyncData))
      //this.util.logger(LOGTYPE.dbRetrieve, `GET SI Unsync Data: ${JSON.stringify(unsyncData)}`)
      if (unsyncData != null && unsyncData.length > 0) {
        let request;
        let quotations: Quotations[] = [];
        let quotationV2: QuotationsV2[] = [];
        let quotation;
        let forQADebug;


        for (let i = 0; i < unsyncData.length; i++) {
          this.isIHP = null;
          if (unsyncData[i].planCode) {
            this.isIHP = unsyncData[i].planCode.includes('IHP');
          } else {
            // skip syncing if plan is not yet selected = for in progress
            await this.salesIllustrationDbService.updateSISyncFlag(SYNC_STATUS.OFFLINE, unsyncData[i].siId); // auto set to offline
            continue;
          }
          if (this.isIHP) {
            request = new QuotationRequestV2;
            try {
              let coverages: Coverage[] = [];
              let coverage: Coverage;
              let transaction: Transactions;
              let transactions: Transactions[] = [];
              let fundDetail: FundDetails;
              let fundDetails: FundDetails[] = [];
              let syncData = new QuotationsV2;
              syncData = new QuotationsV2;
              syncData.data = new QuotationDataV2;
              syncData.data.contractHolder = new ContractHolder;
              syncData.data.baseRating = new BaseRating;
              syncData.data.contractHolder.addresses = new Addresses;
              syncData.data.contractHolder.addresses.homeAddress = new HomeAddress;
              syncData.data.contractHolder.addresses.workAddress = new WorkAddress;
              syncData.data.relatedLead = new RelatedLead;
              syncData.data.investmentProfile = new InvestmentProfile;
              syncData.data.fnaId = new NeedsAnalysis;
              //for clarification syncData.data.topUp = new TopUp;
              let aoPerson: any = await this.salesIllustrationDbService.getPersonUnsync(unsyncData[i].siId, CONSTANT_DB_TABLE.SI_PERSONS, SYNC_STATUS.PERSON_TYPE_AO);
              aoPerson = this.util.objectArrSpaceCleanUp(aoPerson);
              if (aoPerson) {
                syncData.data.contractHolder.self = aoPerson.serverId;
                syncData.data.contractHolder.name = aoPerson.lastName;
                syncData.data.contractHolder.firstName = aoPerson.firstName;
                syncData.data.contractHolder.middleName = aoPerson.middleName;
                syncData.data.contractHolder.birthDate = new Date(aoPerson.dateOfBirth).toISOString();
                syncData.data.contractHolder.gender = aoPerson.gender;

                let occWs = null;

                if (!!aoPerson.occupationCode && !!aoPerson.occupationGrpCode != null) {
                  occWs = aoPerson.occupationCode + '.' + aoPerson.occupationGrpCode;
                  if (!!aoPerson.vesselType) {
                    occWs = occWs + '.' + aoPerson.vesselType;
                  }
                }
                syncData.data.contractHolder.occupation = occWs;
                syncData.data.contractHolder.occupationTitle = aoPerson.occupationTitle;
                //Home
                syncData.data.contractHolder.addresses.homeAddress.buildingName = aoPerson.homeUnitBuilding;
                syncData.data.contractHolder.addresses.homeAddress.streetNumber = this.util.trimString(aoPerson.homeLotBlock, CONSTANTS_STRING.BLOCK_MAXCHAR);
                syncData.data.contractHolder.addresses.homeAddress.street = aoPerson.homeStreet;
                syncData.data.contractHolder.addresses.homeAddress.district = aoPerson.homeBarangay;
                syncData.data.contractHolder.addresses.homeAddress.cityCode = aoPerson.homeCityCode;
                syncData.data.contractHolder.addresses.homeAddress.state = aoPerson.homeProvinceCode;
                syncData.data.contractHolder.addresses.homeAddress.zipCode = aoPerson.homeZipCode;
                syncData.data.contractHolder.addresses.homeAddress.countryCode = aoPerson.homeCountryCode;
                syncData.data.contractHolder.addresses.homeAddress.type = "HOME";

                //Work
                syncData.data.contractHolder.addresses.workAddress.buildingName = aoPerson.workUnitBuilding;
                syncData.data.contractHolder.addresses.workAddress.streetNumber = this.util.trimString(aoPerson.workLotBlock, CONSTANTS_STRING.BLOCK_MAXCHAR);
                syncData.data.contractHolder.addresses.workAddress.streetNumber = aoPerson.workLotBlock;
                syncData.data.contractHolder.addresses.workAddress.street = aoPerson.workStreet;
                syncData.data.contractHolder.addresses.workAddress.district = aoPerson.workBarangay;
                syncData.data.contractHolder.addresses.workAddress.cityCode = aoPerson.workCityCode;
                syncData.data.contractHolder.addresses.workAddress.state = aoPerson.workProvinceCode;
                syncData.data.contractHolder.addresses.workAddress.zipCode = aoPerson.workZipCode;
                syncData.data.contractHolder.addresses.workAddress.countryCode = aoPerson.workCountryCode;
                syncData.data.contractHolder.addresses.workAddress.type = "WORK";
              }

              const dependents = await this.salesIllustrationDbService.getDependentsBySIId(unsyncData[i].siId);
              if (dependents && dependents.length > 0) {
                let dependentInfo = [];
                for (let ii = 0; dependents.length > ii; ii++) {
                  const vessel = dependents[ii].vesselCode ? '.' + dependents[ii].vesselCode : '';
                  dependentInfo.push({
                    self: null,
                    name: dependents[ii].lastName,
                    middleName: dependents[ii].middleName,
                    firstName: dependents[ii].firstName,
                    gender: dependents[ii].gender == "Male" ? "M" : "F",
                    maritalStatus: dependents[ii].civilStatus,
                    birthDate: new Date(dependents[ii].dateOfBirth).toISOString(),
                    hasMiddleName: dependents[ii].middleName ? true : false,
                    occupation: dependents[ii].occupationCode + '.' + dependents[ii].occupationGrpCode + vessel,
                    addresses: {
                      homeAddress: {
                        type: 'HOME',
                        buildingName: dependents[ii].homeBuildingName,
                        streetNumber: dependents[ii].homeBlockNumber,
                        street: dependents[ii].homeStreet,
                        district: dependents[ii].homeSubdivision,
                        cityCode: dependents[ii].homeCityCode,
                        state: dependents[ii].homeProvinceCode,
                        countryCode: dependents[ii].homeCountryCode,
                        zipCode: dependents[ii].homeZipCode
                      },
                      workAddress: {
                        type: 'WORK',
                        buildingName: dependents[ii].workBuildingName,
                        streetNumber: dependents[ii].workBlockNumber,
                        street: dependents[ii].workStreet,
                        district: dependents[ii].workSubdivision,
                        cityCode: dependents[ii].workCityCode,
                        state: dependents[ii].workProvinceCode,
                        countryCode: dependents[ii].workCountryCode,
                        zipCode: dependents[ii].workZipCode
                      }
                    }
                  })
                }

                syncData.data.dependents = dependentInfo;
              }

              if (this.isIHP) {
                syncData.data.contractHolder.ltgEmployeeTag = aoPerson.ltgTag;
                syncData.data.planType = "HEALTH";
                syncData.data.classification = aoPerson.classification;
                syncData.data.deductible = unsyncData[i].deductible;
                syncData.data.areaOfCover = unsyncData[i].areaOfCover;
                syncData.data.commencementOfCover = new Date(unsyncData[i].policyDate).toISOString();
              }


              if (unsyncData[i].isAoEqualsPi == SYNC_STATUS.PERSON_TYPE_AO) {
                let piPerson: any = await this.salesIllustrationDbService.getPersonUnsync(unsyncData[i].siId, CONSTANT_DB_TABLE.SI_PERSONS, SYNC_STATUS.PERSON_TYPE_PI);
                //console.log('PIPerson', JSON.stringify(piPerson))
                //this.util.logger(LOGTYPE.dbRetrieve, `GET piPerson: ${JSON.stringify(unsyncData)}`)
                if (piPerson != null) {
                  piPerson = this.util.objectArrSpaceCleanUp(piPerson);

                  syncData.data.insuredPerson = new InsuredPerson;
                  syncData.data.insuredPerson.addresses = new Addresses;
                  syncData.data.insuredPerson.addresses.homeAddress = new HomeAddress;
                  syncData.data.insuredPerson.addresses.workAddress = new WorkAddress;

                  //Insured Person
                  syncData.data.insuredPerson.self = piPerson.serverId;
                  syncData.data.insuredPerson.name = piPerson.lastName;
                  syncData.data.insuredPerson.firstName = piPerson.firstName;
                  syncData.data.insuredPerson.middleName = piPerson.middleName;
                  syncData.data.insuredPerson.birthDate = new Date(piPerson.dateOfBirth).toISOString();;
                  syncData.data.insuredPerson.gender = piPerson.gender;

                  let occWs = null;

                  if (!!piPerson.occupationCode && !!piPerson.occupationGrpCode != null) {
                    occWs = piPerson.occupationCode + '.' + piPerson.occupationGrpCode;
                    if (!!piPerson.vesselType) {
                      occWs = occWs + '.' + piPerson.vesselType;
                    }
                  }
                  syncData.data.insuredPerson.occupation = occWs;
                  syncData.data.insuredPerson.occupationTitle = piPerson.occupationTitle;
                  //Insured Person Home
                  syncData.data.insuredPerson.addresses.homeAddress.buildingName = piPerson.homeBuildingName;
                  syncData.data.insuredPerson.addresses.homeAddress.streetNumber = this.util.trimString(piPerson.homeLotBlock, CONSTANTS_STRING.BLOCK_MAXCHAR);
                  syncData.data.insuredPerson.addresses.homeAddress.street = piPerson.homeStreet;
                  syncData.data.insuredPerson.addresses.homeAddress.district = piPerson.homeSubdivision;
                  syncData.data.insuredPerson.addresses.homeAddress.cityCode = piPerson.homeCityCode;
                  syncData.data.insuredPerson.addresses.homeAddress.state = piPerson.homeProvinceCode;
                  syncData.data.insuredPerson.addresses.homeAddress.zipCode = piPerson.homeZipCode;
                  syncData.data.insuredPerson.addresses.homeAddress.countryCode = piPerson.homeCountryCode;
                  syncData.data.insuredPerson.addresses.homeAddress.type = "HOME";

                  //Insured Person Work
                  syncData.data.insuredPerson.addresses.workAddress.buildingName = piPerson.workBuildingName;
                  syncData.data.insuredPerson.addresses.workAddress.streetNumber = this.util.trimString(piPerson.workLotBlock, CONSTANTS_STRING.BLOCK_MAXCHAR);
                  syncData.data.insuredPerson.addresses.workAddress.street = piPerson.workStreet;
                  syncData.data.insuredPerson.addresses.workAddress.district = piPerson.workSubdivision;
                  syncData.data.insuredPerson.addresses.workAddress.cityCode = piPerson.workCityCode;
                  syncData.data.insuredPerson.addresses.workAddress.state = piPerson.workProvinceCode;
                  syncData.data.insuredPerson.addresses.workAddress.zipCode = piPerson.workZipCode;
                  syncData.data.insuredPerson.addresses.workAddress.countryCode = piPerson.workCountryCode;
                  syncData.data.insuredPerson.addresses.workAddress.type = "WORK";
                }
              }

              //Data
              //console.log(unsyncData[i]);
              syncData.data.insuranceSum = unsyncData[i].basicSumAssured ? unsyncData[i].basicSumAssured.toString() : unsyncData[i].basicSumAssured;
              syncData.data.isAOequalsPI = unsyncData[i].isAoEqualsPi == '1';
              syncData.data.deathBenefitType = unsyncData[i].deathBenefit;
              syncData.data.currency = unsyncData[i].currency;

              syncData.data.insuranceSum = unsyncData[i].basicSumAssured ? unsyncData[i].basicSumAssured.toString() : unsyncData[i].basicSumAssured;
              syncData.data.isAOequalsPI = unsyncData[i].isAoEqualsPi == '1';
              syncData.data.deathBenefitType = unsyncData[i].deathBenefit;
              syncData.data.currency = unsyncData[i].currency;

              if (unsyncData[i].serverId != '0') {
                syncData.data.self = unsyncData[i].serverId;
              }

              syncData.data.dividendOption = this.util.dividendOptionWS(unsyncData[i].dividendOption);
              const tradCode = 'TR';
              syncData.data.firstPremium = (unsyncData[i].premiumTotal || unsyncData[i].inputPremium) ? (unsyncData[i].premiumTotal || unsyncData[i].inputPremium).toString() : (unsyncData[i].premiumTotal || unsyncData[i].inputPremium);
              syncData.data.lifePriority = CATEGORY_MAPPER[unsyncData[i].lifePriorityCategory];
              syncData.data.underWritingApproach = unsyncData[i].underwritingApproach == UNDERWRITING_APPROACH.GAE ? UNDERWRITING_APPROACH.GAE : UNDERWRITING_APPROACH.NG;
              syncData.data.productOfferingName = unsyncData[i].planCode;
              syncData.data.productOfferingDescription = PLANS[unsyncData[i].planCode];
              syncData.data.productOfferingVersion = unsyncData[i].planVersion;
              //for clarification syncData.data.premiumPayment = unsyncData[i].premiumPayment;
              if (unsyncData[i].personalObjectives == '{}') {
                syncData.data.productOfferingCategory = null;
              } else if (unsyncData[i].personalObjectives != null) {
                const personalObjectives = JSON.parse(unsyncData[i].personalObjectives)
                syncData.data.productOfferingCategory = personalObjectives.code;
              }
              syncData.data.paymentFrequency = unsyncData[i].payMode == 'SP' ? 'I' : unsyncData[i].payMode;
              syncData.data.paymentDuration = unsyncData[i].payYears;
              syncData.data.resource = "QUOTATION";

              const eapp: any = await this.salesIllustrationDbService.getAllEappBySiId(unsyncData[i].siId);
              //this.util.logger(LOGTYPE.dbRetrieve, `GET attached eapp: ${JSON.stringify(unsyncData)}`)

              if (eapp && eapp.length != 0) {
                if (eapp[0].isDeleted == 0) {
                  syncData.data.status = STATUS.ATTACHED;
                }
              } else {
                syncData.data.status = unsyncData[i].isCompleted == '1' ? STATUS.COMPLETED : STATUS.IN_PROGRESS;
              }

              if (unsyncData[i].inputOption != null && unsyncData[i].inputOption == 'SA') {
                syncData.data.calculationType = 'SUMASSURED';
              } else if (unsyncData[i].inputOption != null && unsyncData[i].inputOption == 'PREM') {
                syncData.data.calculationType = 'PREMIUM';
              }
              syncData.data.multiplierFactor = unsyncData[i].sumAssuredMultiple;

              //Lead
              let leadServerId: any;
              if (unsyncData[i].leadServerId != null) {
                leadServerId = unsyncData[i].leadServerId;
              } else if (unsyncData[i].leadId != null) {
                const lead = await this.leadsService.getExistingLeadById(unsyncData[i].leadId);
                //console.log(JSON.stringify(lead))
                //this.util.logger(LOGTYPE.dbRetrieve, `GET attached lead: ${JSON.stringify(lead)}`)
                leadServerId = lead.serverId;
              }

              syncData.data.relatedLead.self = leadServerId;
              // for clarification syncData.data.lead.clientRefId = 

              //Needs Analysis
              let naServerId: any;
              if (unsyncData[i].naServerId !== null) {
                syncData.data.fnaId.self = unsyncData[i].naServerId;
              } else if (unsyncData[i].naId != null) {
                const fna = await this.needsAnalysisDbService.getFNADetailsByID(unsyncData[i].naId);
                syncData.data.fnaId.self = fna.serverId;
              }

              //Investment Profile
              let irpqServerId: any;
              let irpq: any;
              if (unsyncData[i].irpqServerId != null) {
                irpqServerId = unsyncData[i].irpqServerId;
              } else if (unsyncData[i].irpqId != null) {
                irpq = await this.irpqService.getIrpqByID(unsyncData[i].irpqId);
                //console.log(JSON.stringify(irpq))
                //this.util.logger(LOGTYPE.dbRetrieve, `GET attached irpq: ${JSON.stringify(irpq)}`)
                if (irpq != null) {
                  irpqServerId = irpq.serverId;
                }
              }

              if (syncData.data.fnaId.self == null && unsyncData[i].irpqId != null) { // use IRPQ for getting na server id
                irpq = await this.irpqService.getIrpqByID(unsyncData[i].irpqId);
                const fna = await this.needsAnalysisDbService.getFNADetailsByID(irpq.naId);
                syncData.data.fnaId.self = irpq.naServerId;
              }

              let hasNAID = unsyncData[i].naId ? unsyncData[i].naId : irpq ? irpq.naId : null;
              if (!syncData.data.fnaId.self && hasNAID) {
                let NARawData = await this.storage.get(KEYS.NA_RAW_DATA);
                const index = NARawData.findIndex((data) => {
                  return data.clientRefId == hasNAID;
                });

                let rawNAServerId = NARawData[index];
                syncData.data.fnaId.self = rawNAServerId.NAServerID
              }

              if (irpqServerId != '0') {
                syncData.data.investmentProfile.self = irpqServerId;
              }

              forQADebug = 'IRPQ SERVER ID : ' + irpqServerId + 'IRPQ : ' + JSON.stringify(irpq);

              //BaseRating
              syncData.data.baseRating.code = unsyncData[i].baseRatingCode != null ? unsyncData[i].baseRatingCode :
                BASE_RATING_MAPPER.STANDARD;
              syncData.data.baseRating.flatExtra = unsyncData[i].flatExtra != null ? unsyncData[i].flatExtra : 0;

              //Quotation
              if (unsyncData[i].dateCreated != null) {
                syncData.data.createdDate = new Date(JSON.parse(unsyncData[i].dateCreated)).toISOString();
              }
              if (unsyncData[i].dateModified != null) {
                syncData.data.updatedDate = new Date(JSON.parse(unsyncData[i].dateModified)).toISOString();
              }

              syncData.data.clientRefId = unsyncData[i].siId;

              const errors = [] // await this.syncValidationsService.sISyncValidation(quotation, await this.needAnalysisCoreService.isNaSync(unsyncData[i].naId), unsyncData[i].planCode); 

              if (errors.length > 0) {
                await this.salesIllustrationDbService.updateSISyncFlag(SYNC_STATUS.MOBILE_VALIDATION_ERROR, syncData.data.self);
                errors.forEach((error: DeltaSyncResponse) => {
                  siFormErrors.push(error);
                });
                continue;
              }

              quotationV2.push(syncData);

            } catch (e) {
              this.util.infoAlert(e);
            }
          } else {
            request = new QuotationRequest;

            try {
              let coverages: Coverage[] = [];
              let coverage: Coverage;
              let transaction: Transactions;
              let transactions: Transactions[] = [];
              let fundDetail: FundDetails;
              let fundDetails: FundDetails[] = [];

              quotation = new Quotations;
              quotation.data = new QuotationData;
              quotation.data.contractHolder = new ContractHolder;
              quotation.data.baseRating = new BaseRating;
              quotation.data.contractHolder.addresses = new Addresses;
              quotation.data.contractHolder.addresses.homeAddress = new HomeAddress;
              quotation.data.contractHolder.addresses.workAddress = new WorkAddress;
              quotation.data.relatedLead = new RelatedLead;
              quotation.data.investmentProfile = new InvestmentProfile;
              quotation.data.needAnalysis = new NeedsAnalysis;
              quotation.data.topUp = new TopUp;

              let aoPerson: any = await this.salesIllustrationDbService.getPersonUnsync(unsyncData[i].siId, CONSTANT_DB_TABLE.SI_PERSONS, SYNC_STATUS.PERSON_TYPE_AO);
              //console.log('AOPerson', JSON.stringify(aoPerson))
              //this.util.logger(LOGTYPE.dbRetrieve, `GET aoPerson: ${JSON.stringify(unsyncData)}`)
              //Contract Holder
              if (aoPerson) {
                aoPerson = this.util.objectArrSpaceCleanUp(aoPerson);

                quotation.data.contractHolder.self = aoPerson.serverId;
                quotation.data.contractHolder.name = aoPerson.lastName;
                quotation.data.contractHolder.firstName = aoPerson.firstName;
                quotation.data.contractHolder.middleName = aoPerson.middleName;
                quotation.data.contractHolder.birthDate = aoPerson.dateOfBirth;
                quotation.data.contractHolder.gender = aoPerson.gender;

                quotation.data.contractHolder.hasMiddleName = quotation.data.contractHolder.middleName != null;

                const eazyHealthCode = 'EAZY_HEALTH';
                const allianzFundamentalCode = 'TR_AZ_FUNDAMENTAL';
                if (unsyncData[i].planCode != null &&
                  (unsyncData[i].planCode.includes(eazyHealthCode) || unsyncData[i].planCode.includes(allianzFundamentalCode))) {
                  let siQuestionDeclarations: any;
                  siQuestionDeclarations = await this.buildSIQuestionDeclaration();
                  quotation.data.contractHolder.questions = siQuestionDeclarations
                  quotation.data.contractHolder.weight = unsyncData[i].bmiWeightInKg || null
                  quotation.data.contractHolder.weightUnit = 'kg'
                  quotation.data.contractHolder.height = unsyncData[i].bmiHeightInCm || null
                  quotation.data.contractHolder.heightUnit = 'cm'
                  quotation.data.contractHolder.bmi = unsyncData[i].bmiTotal || null
                }

                let occWs = null;

                if (!!aoPerson.occupationCode && !!aoPerson.occupationGrpCode != null) {
                  occWs = aoPerson.occupationCode + '.' + aoPerson.occupationGrpCode;
                  if (!!aoPerson.vesselType) {
                    occWs = occWs + '.' + aoPerson.vesselType;
                  }
                }
                quotation.data.contractHolder.occupation = occWs;
                quotation.data.contractHolder.occupationTitle = aoPerson.occupationTitle;
                //Home
                quotation.data.contractHolder.addresses.homeAddress.buildingName = aoPerson.homeUnitBuilding;
                quotation.data.contractHolder.addresses.homeAddress.streetNumber = this.util.trimString(aoPerson.homeLotBlock, CONSTANTS_STRING.BLOCK_MAXCHAR);
                quotation.data.contractHolder.addresses.homeAddress.street = aoPerson.homeStreet;
                quotation.data.contractHolder.addresses.homeAddress.district = aoPerson.homeBarangay;
                quotation.data.contractHolder.addresses.homeAddress.cityCode = aoPerson.homeCityCode;
                quotation.data.contractHolder.addresses.homeAddress.state = aoPerson.homeProvinceCode;
                quotation.data.contractHolder.addresses.homeAddress.zipCode = aoPerson.homeZipCode;
                quotation.data.contractHolder.addresses.homeAddress.countryCode = aoPerson.homeCountryCode;
                quotation.data.contractHolder.addresses.homeAddress.type = "HOME";

                //Work
                quotation.data.contractHolder.addresses.workAddress.buildingName = aoPerson.workUnitBuilding;
                quotation.data.contractHolder.addresses.workAddress.streetNumber = this.util.trimString(aoPerson.workLotBlock, CONSTANTS_STRING.BLOCK_MAXCHAR);
                quotation.data.contractHolder.addresses.workAddress.streetNumber = aoPerson.workLotBlock;
                quotation.data.contractHolder.addresses.workAddress.street = aoPerson.workStreet;
                quotation.data.contractHolder.addresses.workAddress.district = aoPerson.workBarangay;
                quotation.data.contractHolder.addresses.workAddress.cityCode = aoPerson.workCityCode;
                quotation.data.contractHolder.addresses.workAddress.state = aoPerson.workProvinceCode;
                quotation.data.contractHolder.addresses.workAddress.zipCode = aoPerson.workZipCode;
                quotation.data.contractHolder.addresses.workAddress.countryCode = aoPerson.workCountryCode;
                quotation.data.contractHolder.addresses.workAddress.type = "WORK";
              }

              if (unsyncData[i].isAoEqualsPi == SYNC_STATUS.PERSON_TYPE_AO) {
                let piPerson: any = await this.salesIllustrationDbService.getPersonUnsync(unsyncData[i].siId, CONSTANT_DB_TABLE.SI_PERSONS, SYNC_STATUS.PERSON_TYPE_PI);
                //console.log('PIPerson', JSON.stringify(piPerson))
                //this.util.logger(LOGTYPE.dbRetrieve, `GET piPerson: ${JSON.stringify(unsyncData)}`)
                if (piPerson != null) {
                  piPerson = this.util.objectArrSpaceCleanUp(piPerson);

                  quotation.data.insuredPerson = new InsuredPerson;
                  quotation.data.insuredPerson.addresses = new Addresses;
                  quotation.data.insuredPerson.addresses.homeAddress = new HomeAddress;
                  quotation.data.insuredPerson.addresses.workAddress = new WorkAddress;

                  //Insured Person
                  quotation.data.insuredPerson.self = piPerson.serverId;
                  quotation.data.insuredPerson.name = piPerson.lastName;
                  quotation.data.insuredPerson.firstName = piPerson.firstName;
                  quotation.data.insuredPerson.middleName = piPerson.middleName;
                  quotation.data.insuredPerson.birthDate = piPerson.dateOfBirth;
                  quotation.data.insuredPerson.gender = piPerson.gender;

                  let occWs = null;

                  if (!!piPerson.occupationCode && !!piPerson.occupationGrpCode != null) {
                    occWs = piPerson.occupationCode + '.' + piPerson.occupationGrpCode;
                    if (!!piPerson.vesselType) {
                      occWs = occWs + '.' + piPerson.vesselType;
                    }
                  }
                  quotation.data.insuredPerson.occupation = occWs;
                  quotation.data.insuredPerson.occupationTitle = piPerson.occupationTitle;
                  //Insured Person Home
                  quotation.data.insuredPerson.addresses.homeAddress.buildingName = piPerson.homeBuildingName;
                  quotation.data.insuredPerson.addresses.homeAddress.streetNumber = this.util.trimString(piPerson.homeLotBlock, CONSTANTS_STRING.BLOCK_MAXCHAR);
                  quotation.data.insuredPerson.addresses.homeAddress.street = piPerson.homeStreet;
                  quotation.data.insuredPerson.addresses.homeAddress.district = piPerson.homeSubdivision;
                  quotation.data.insuredPerson.addresses.homeAddress.cityCode = piPerson.homeCityCode;
                  quotation.data.insuredPerson.addresses.homeAddress.state = piPerson.homeProvinceCode;
                  quotation.data.insuredPerson.addresses.homeAddress.zipCode = piPerson.homeZipCode;
                  quotation.data.insuredPerson.addresses.homeAddress.countryCode = piPerson.homeCountryCode;
                  quotation.data.insuredPerson.addresses.homeAddress.type = "HOME";

                  //Insured Person Work
                  quotation.data.insuredPerson.addresses.workAddress.buildingName = piPerson.workBuildingName;
                  quotation.data.insuredPerson.addresses.workAddress.streetNumber = this.util.trimString(piPerson.workLotBlock, CONSTANTS_STRING.BLOCK_MAXCHAR);
                  quotation.data.insuredPerson.addresses.workAddress.street = piPerson.workStreet;
                  quotation.data.insuredPerson.addresses.workAddress.district = piPerson.workSubdivision;
                  quotation.data.insuredPerson.addresses.workAddress.cityCode = piPerson.workCityCode;
                  quotation.data.insuredPerson.addresses.workAddress.state = piPerson.workProvinceCode;
                  quotation.data.insuredPerson.addresses.workAddress.zipCode = piPerson.workZipCode;
                  quotation.data.insuredPerson.addresses.workAddress.countryCode = piPerson.workCountryCode;
                  quotation.data.insuredPerson.addresses.workAddress.type = "WORK";
                }
              }

              //Data
              //console.log(unsyncData[i]);
              quotation.data.insuranceSum = unsyncData[i].basicSumAssured ? unsyncData[i].basicSumAssured.toString() : unsyncData[i].basicSumAssured;
              quotation.data.isAOequalsPI = unsyncData[i].isAoEqualsPi == '1';
              quotation.data.deathBenefitType = unsyncData[i].deathBenefit;
              quotation.data.currency = unsyncData[i].currency;

              if (unsyncData[i].serverId != '0') {
                quotation.data.self = unsyncData[i].serverId;
              }

              quotation.data.dividendOption = this.util.dividendOptionWS(unsyncData[i].dividendOption);
              let firstPremiumVal = null;
              firstPremiumVal = unsyncData[i][PREMIUM_MAPPING[unsyncData[i].planCode]];
              quotation.data.firstPremium = firstPremiumVal;
              if(unsyncData[i].totalPremium && unsyncData[i].totalPremium !== 0) {
                quotation.data.totalPremium = unsyncData[i].totalPremium;
              } else {
                quotation.data.totalPremium = (unsyncData[i].premiumTotal || unsyncData[i].inputPremium) ? (unsyncData[i].premiumTotal || unsyncData[i].inputPremium).toString() : (unsyncData[i].premiumTotal || unsyncData[i].inputPremium);
              }
              quotation.data.lifePriority = CATEGORY_MAPPER[unsyncData[i].lifePriorityCategory];
              quotation.data.underWritingApproach = unsyncData[i].underwritingApproach == UNDERWRITING_APPROACH.GAE ? UNDERWRITING_APPROACH.GAE : UNDERWRITING_APPROACH.NG;
              quotation.data.productOfferingName = unsyncData[i].planCode;
              quotation.data.productOfferingDescription = PLANS[unsyncData[i].planCode];
              quotation.data.productOfferingVersion = unsyncData[i].planVersion;
              quotation.data.premiumPayment = unsyncData[i].premiumPayment;
              if (unsyncData[i].personalObjectives == '{}') {
                quotation.data.productOfferingCategory = null;
              } else if (unsyncData[i].personalObjectives != null) {
                const personalObjectives = JSON.parse(unsyncData[i].personalObjectives)
                quotation.data.productOfferingCategory = personalObjectives.code;
              }
              quotation.data.paymentFrequency = unsyncData[i].payMode == 'SP' ? 'I' : unsyncData[i].payMode;
              quotation.data.paymentDuration = unsyncData[i].payYears;
              quotation.data.contractProcessState = "QUOTATION";

              const eapp: any = await this.salesIllustrationDbService.getAllEappBySiId(unsyncData[i].siId);
              //this.util.logger(LOGTYPE.dbRetrieve, `GET attached eapp: ${JSON.stringify(unsyncData)}`)

              if (eapp && eapp.length != 0) {
                if (eapp[0].isDeleted == 0) {
                  quotation.data.status = STATUS.ATTACHED;
                }
              } else {
                quotation.data.status = unsyncData[i].isCompleted == '1' ? STATUS.COMPLETED : STATUS.IN_PROGRESS;
              }

              if (unsyncData[i].inputOption != null && unsyncData[i].inputOption == 'SA') {
                quotation.data.calculationType = 'SUMASSURED';
              } else if (unsyncData[i].inputOption != null && unsyncData[i].inputOption == 'PREM') {
                quotation.data.calculationType = 'PREMIUM';
              }
              quotation.data.multiplierFactor = unsyncData[i].sumAssuredMultiple;

              //Coverages
              const riders: any = await this.salesIllustrationDbService.getAllRidersById(unsyncData[i].siId);
              //this.util.logger(LOGTYPE.dbRetrieve, `GET attached rider: ${JSON.stringify(riders)}`)

              //console.log(JSON.stringify(riders))
              //this.util.logger(LOGTYPE.sync, JSON.stringify(riders))
              if (riders != null) {
                for (let j = 0; j < riders.length; j++) {
                  coverage = new Coverage;
                  coverage.name = riders[j].riderCode;
                  coverage.insuranceSum = +riders[j].sumAssured;
                  coverage.riskClassCode = riders[j].riskClassCode
                  coverages.push(coverage);
                }
                quotation.data.coverages = coverages;
              }

              //Needs Analysis
              let naServerId: any;
              const fna = await this.needsAnalysisDbService.getFNADetailsByID(unsyncData[i].naId);
              if(fna) {
                quotation.data.needAnalysis.self = fna.serverId;
              }

              //Investment Profile
              let irpqServerId: any;
              let irpq: any;
              irpq = await this.irpqService.getIrpqByID(unsyncData[i].irpqId);
              if (irpq != null) {
                irpqServerId = irpq.serverId;
              }

              //Lead
              let leadServerId: any;
              const lead = await this.leadsService.getExistingLeadById(unsyncData[i].leadId);
              leadServerId = lead.serverId;

              if(leadServerId && fna && fna.leadServerId && leadServerId == fna.leadServerId) {
                quotation.data.relatedLead.self = leadServerId;
              } else {
                if(fna && fna.leadServerId && irpq.leadServerId && fna.leadServerId == irpq.leadServerId) {
                  quotation.data.relatedLead.self = fna.leadServerId
                } else if (fna && fna.leadServerId) {
                  quotation.data.relatedLead.self = fna.leadServerId
                }else {
                  quotation.data.relatedLead.self = leadServerId;
                }
              }

              if (quotation.data.needAnalysis.self == null && unsyncData[i].irpqId != null) { // use IRPQ for getting na server id
                irpq = await this.irpqService.getIrpqByID(unsyncData[i].irpqId);
                if(irpq) {
                  const fna = await this.needsAnalysisDbService.getFNADetailsByID(irpq.naId);
                  quotation.data.needAnalysis.self = irpq.naServerId;
                }
              }

              let hasNAID = unsyncData[i].naId ? unsyncData[i].naId : irpq ? irpq.naId : null;
              if (!quotation.data.needAnalysis.self && hasNAID) {
                let NARawData = await this.storage.get(KEYS.NA_RAW_DATA);
                const index = NARawData.findIndex((data) => {
                  return data.clientRefId == hasNAID;
                });

                let rawNAServerId = NARawData[index];
                quotation.data.needAnalysis.self = rawNAServerId.NAServerID
              }

              if (irpqServerId != '0') {
                quotation.data.investmentProfile.self = irpqServerId;
              }

              forQADebug = 'IRPQ SERVER ID : ' + irpqServerId + 'IRPQ : ' + JSON.stringify(irpq);

              //BaseRating
              quotation.data.baseRating.code = unsyncData[i].baseRatingCode != null ? unsyncData[i].baseRatingCode :
                BASE_RATING_MAPPER.STANDARD;
              quotation.data.baseRating.flatExtra = unsyncData[i].flatExtra != null ? unsyncData[i].flatExtra : 0;

              //Quotation
              if (unsyncData[i].dateCreated != null) {
                quotation.createdDate = this.convertDate(unsyncData[i].dateCreated);
              }
              if (unsyncData[i].dateModified != null) {
                quotation.lastUpdateDate = this.convertDate(unsyncData[i].dateModified);
              }
              quotation.clientRefId = unsyncData[i].siId;
              quotation.isDeleted = unsyncData[i].isDeleted == 1;

              //TopUp
              quotation.data.topUp.withdrawalStartAge = unsyncData[i].scheduledWithdrawalStartAge ? unsyncData[i].scheduledWithdrawalStartAge : 0;
              quotation.data.topUp.withdrawalEndAge = unsyncData[i].scheduledWithdrawalEndAge ? unsyncData[i].scheduledWithdrawalEndAge : 0;
              quotation.data.topUp.withdrawalAmount = unsyncData[i].scheduledWithdrawalAmount ? unsyncData[i].scheduledWithdrawalAmount : 0;
              quotation.data.topUp.regularTopUpPremium = await this.util.getValueByPaymentMode(unsyncData[i].regularTopUp, unsyncData[i].payMode);

              const topUp: any = await this.salesIllustrationDbService.getAllTopUpWithdrawalById(unsyncData[i].siId);
              //console.log(JSON.stringify(topUp))
              //this.util.logger(LOGTYPE.dbRetrieve, `GET attached topUp: ${JSON.stringify(topUp)}`)
              if (topUp != null) {
                for (let j = 0; j < topUp.length; j++) {
                  transaction = new Transactions;
                  transaction.topUpAmount = topUp[j].topUpAmt || 0;
                  transaction.withdrawalAmount = topUp[j].withdrawalAmt || 0;
                  transaction.year = topUp[j].policyYear;
                  transactions.push(transaction);
                }
                quotation.data.topUp.transactions = transactions;
              }


              //Fund Details
              const fund: any = await this.salesIllustrationDbService.getAllFundsById(unsyncData[i].siId);
              //console.log(JSON.stringify(fund))
              //this.util.logger(LOGTYPE.dbRetrieve, `GET attached fund: ${JSON.stringify(fund)}`)
              if (fund != null) {
                for (let j = 0; j < fund.length; j++) {
                  fundDetail = new FundDetails;
                  fundDetail.specificFund = new SpecificFund;
                  fundDetail.self = fund[j].fundKey;
                  fundDetail.specificFund.percentage = Math.trunc(fund[j].fundDirection * 100);
                  fundDetails.push(fundDetail);
                }
                quotation.data.fundDetails = fundDetails;
              }

              const errors = [] // await this.syncValidationsService.sISyncValidation(quotation, await this.needAnalysisCoreService.isNaSync(unsyncData[i].naId), unsyncData[i].planCode); 

              if (errors.length > 0) {
                await this.salesIllustrationDbService.updateSISyncFlag(SYNC_STATUS.MOBILE_VALIDATION_ERROR, quotation.clientRefId);
                errors.forEach((error: DeltaSyncResponse) => {
                  siFormErrors.push(error);
                });
                continue;
              }

              quotations.push(quotation);
            } catch (e) {

              continue;
            }
          }
        }
        if (siFormErrors.length === 0) {
          // implemented new core api service
          let syncResponse;
          if (this.isIHP) {
            if(quotationV2 && quotationV2.length > 0) {
              request.syncData = quotationV2
              syncResponse = await this.syncApiService.setDeltaSyncV2(Modules.SI, request);

              this.util.logInsert(request, 0, Modules.SI);
              this.util.logInsert(syncResponse, 1, Modules.SI);
            } else {
              resolve(siResponseList);
              return;
            }
          } else {
            if(quotations && quotations.length > 0) {
              request.quotations = await this.util.sortByIsDeleted(quotations);
              syncResponse = await this.syncApiService.setDeltaSync(Modules.SI, request);

              this.util.logInsert(request, 0, Modules.SI);
              this.util.logInsert(syncResponse, 1, Modules.SI);
            } else {
              resolve(siResponseList);
              return;
            }
          }
          // let modalString = JSON.stringify(syncResponse) + forQADebug + JSON.stringify(request);
          if (environment.config.isWSAlertEnable) {
            if (syncResponse != null) {
              this.showResponse("DATA TO BE SENT TO WEBSERVICE: " + JSON.stringify(request) + '\n' + "RESPONSE OF THE WEBSERVICE: " + JSON.stringify(syncResponse));
            }
          }
          if (syncResponse.status === RESPONSE_STATUS.SUCCESS_200 || syncResponse.status === RESPONSE_STATUS.SUCCESS_207) {
            let siResponse = JSON.parse(syncResponse.data);
            siResponseList = [];
            if (siResponse.quotations) {
              for (const quotation of siResponse.quotations) {
                let serverId, aoServerId, piServerId, irpqServerId, siId;
                salesIllustrationRes = new DeltaSyncResponse();
                salesIllustrationRes.module = MODULE.SI;
                if (quotation.data != null) {
                  serverId = quotation.data.self;
                  aoServerId = quotation.data.contractHolder != null ? quotation.data.contractHolder.self : null;
                  piServerId = quotation.data.insuredPerson != null ? quotation.data.insuredPerson.self : null;
                  irpqServerId = quotation.data.investmentProfile != null ? quotation.data.investmentProfile.self : null;
                  siId = quotation.clientRefId != null ? quotation.clientRefId : null;
                }
                if (quotation.recSyncStatus == SYNC_STATUS.SYNCHED) {
                  if (serverId) {
                    await this.salesIllustrationDbService.updateSISyncFlag(SYNC_STATUS.SYNC_SUCCESS_2, siId, serverId, irpqServerId);
                    salesIllustrationRes.statusCode = syncResponse.status;
                    salesIllustrationRes.moduleId = siId;
                    salesIllustrationRes.syncStatus = SYNC_STATUS.SYNC_SUCCESS_2;
                    siResponseList.push(salesIllustrationRes);
                  }
                  if (aoServerId) {
                    await this.salesIllustrationDbService.updatePersonServerID(SYNC_STATUS.PERSON_TYPE_AO, siId, aoServerId);
                  }
                  if (piServerId) {
                    await this.salesIllustrationDbService.updatePersonServerID(SYNC_STATUS.PERSON_TYPE_PI, siId, piServerId);
                  }

                } else {
                  await this.salesIllustrationDbService.updateSISyncFlag(SYNC_STATUS.SYNC_FAIL_99, siId, serverId);
                  salesIllustrationRes.statusCode = syncResponse.status;
                  salesIllustrationRes.error = syncResponse.error;
                  salesIllustrationRes.moduleId = siId;
                  salesIllustrationRes.syncStatus = SYNC_STATUS.SYNC_FAIL_99;

                  siResponseList.push(salesIllustrationRes);
                }
              }
            } else if (siResponse.syncData) {
              for (const quotation of siResponse.syncData) { // for allianz well
                let serverId, aoServerId, piServerId, irpqServerId, siId;
                salesIllustrationRes = new DeltaSyncResponse();
                salesIllustrationRes.module = MODULE.SI;
                if (quotation.data != null) {
                  serverId = quotation.data.self;
                  aoServerId = quotation.data.contractHolder != null ? quotation.data.contractHolder.self : null;
                  piServerId = quotation.data.insuredPerson != null ? quotation.data.insuredPerson.self : null;
                  irpqServerId = quotation.data.investmentProfile != null ? quotation.data.investmentProfile.self : null;
                  siId = quotation.clientRefId != null ? quotation.clientRefId : null;
                }
                if (siResponse.syncStatus == SYNC_STATUS.SUCCESS) {
                  if (serverId) {
                    await this.salesIllustrationDbService.updateSISyncFlag(SYNC_STATUS.SYNC_SUCCESS_2, siId, serverId, irpqServerId);
                    salesIllustrationRes.statusCode = syncResponse.status;
                    salesIllustrationRes.moduleId = siId;
                    salesIllustrationRes.syncStatus = SYNC_STATUS.SYNC_SUCCESS_2;
                    siResponseList.push(salesIllustrationRes);
                  }
                  if (aoServerId) {
                    await this.salesIllustrationDbService.updatePersonServerID(SYNC_STATUS.PERSON_TYPE_AO, siId, aoServerId);
                  }
                  if (piServerId) {
                    await this.salesIllustrationDbService.updatePersonServerID(SYNC_STATUS.PERSON_TYPE_PI, siId, piServerId);
                  }
                  if (quotation.data.dependents.length > 0) {
                    const dependents = await this.salesIllustrationDbService.getDependentsBySIId(siId);
                    await this.databaseService.deleteTableData('Dependents_Table', 'siId', [siId])
                    for (let i = 0; i < dependents.length; i++) {
                      const insertDependentsParams = await this.databaseService.sqlHelperParamGen([
                        { fieldName: 'dependentsPrimaryId', value: dependents[i].dependentsPrimaryId },
                        { fieldName: 'siId', value: siId },
                        { fieldName: 'dependentSelf', value: quotation.data.dependents[i].self },
                        { fieldName: 'gender', value: this.util.getGenderValue(dependents[i].gender) },
                        { fieldName: 'firstName', value: dependents[i].firstName },
                        { fieldName: 'middleName', value: dependents[i].middleName },
                        { fieldName: 'lastName', value: dependents[i].lastName },
                        { fieldName: 'suffix', value: dependents[i].suffix },
                        { fieldName: 'occupationCode', value: dependents[i].occupationCode },
                        { fieldName: 'occupationGrpCode', value: dependents[i].occupationGrpCode },
                        { fieldName: 'vesselType', value: dependents[i].vesselType || 'NA' },
                        { fieldName: 'occupationTitle', value: dependents[i].occupationTitle ? dependents[i].occupationTitle : null },
                        { fieldName: 'homeBuildingName', value: dependents[i].homeBuildingName },
                        { fieldName: 'homeBlockNumber', value: dependents[i].homeBlockNumber },
                        { fieldName: 'homeStreet', value: dependents[i].homeStreet },
                        { fieldName: 'homeSubdivision', value: dependents[i].homeSubdivision },
                        { fieldName: 'homeCountryCode', value: dependents[i].homeCountryCode },
                        { fieldName: 'homeProvinceCode', value: dependents[i].homeProvinceCode },
                        { fieldName: 'homeCityCode', value: dependents[i].homeCityCode },
                        { fieldName: 'homeZipCode', value: dependents[i].homeZipCode },
                        { fieldName: 'workBuildingName', value: dependents[i].workBuildingName },
                        { fieldName: 'workBlockNumber', value: dependents[i].workBlockNumber },
                        { fieldName: 'workStreet', value: dependents[i].workStreet },
                        { fieldName: 'workSubdivision', value: dependents[i].workSubdivision },
                        { fieldName: 'workCityCode', value: dependents[i].workCityCode },
                        { fieldName: 'workCountryCode', value: dependents[i].workCountryCode },
                        { fieldName: 'workProvinceCode', value: dependents[i].workProvinceCode },
                        { fieldName: 'workZipCode', value: dependents[i].workZipCode },
                        { fieldName: 'dateOfBirth', value: dependents[i].dateOfBirth },
                        { fieldName: 'relationToPI', value: dependents[i].relationToPI },
                        { fieldName: 'civilStatus', value: dependents[i].civilStatus },
                      ]);

                      await this.databaseService.insertTableData('Dependents_Table',
                        insertDependentsParams.fields,
                        insertDependentsParams.interpolationValues);
                    }
                  }
                  const dependents = await this.salesIllustrationDbService.getDependentsBySIId(siId);
                  console.log(dependents);
                } else {
                  await this.salesIllustrationDbService.updateSISyncFlag(SYNC_STATUS.SYNC_FAIL_99, siId, serverId);
                  salesIllustrationRes.statusCode = syncResponse.status;
                  salesIllustrationRes.error = syncResponse.error;
                  salesIllustrationRes.moduleId = siId;
                  salesIllustrationRes.syncStatus = SYNC_STATUS.SYNC_FAIL_99;

                  siResponseList.push(salesIllustrationRes);
                }
              }
            }
          } else if (syncResponse.status === RESPONSE_STATUS.FAIL_400 || syncResponse.status === RESPONSE_STATUS.NOT_FOUND) {
            let siResponse = JSON.parse(syncResponse.error);
            siResponseList = [];
            if (siResponse != null && siResponse.quotations != null) {
              for (const quotation of siResponse.quotations) {
                await this.salesIllustrationDbService.updateSISyncFlag(SYNC_STATUS.SYNC_FAIL_99, quotation.clientRefId);
                salesIllustrationRes = new DeltaSyncResponse();
                salesIllustrationRes.module = MODULE.SI;
                salesIllustrationRes.statusCode = syncResponse.status;
                salesIllustrationRes.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                salesIllustrationRes.error = quotation.errors != null ? quotation.errors : quotation.recSyncStatus;
                salesIllustrationRes.moduleId = quotation.clientRefId;
                siResponseList.push(salesIllustrationRes);
              }
            } else if (request && request.quotations) {
              for (const quotations of request.quotations) {
                await this.salesIllustrationDbService.updateSISyncFlag(SYNC_STATUS.NETWORK_ERROR, quotations.clientRefId);
                salesIllustrationRes = new DeltaSyncResponse();
                salesIllustrationRes.module = MODULE.SI;
                salesIllustrationRes.syncStatus = SYNC_STATUS.NETWORK_ERROR;
                salesIllustrationRes.statusCode = syncResponse.status;
                salesIllustrationRes.error = RESPONSE_MESSAGE.SERVER_ISSUE;
                salesIllustrationRes.moduleId = quotations.clientRefId;
                siResponseList.push(salesIllustrationRes);
              }
            } else if (request && request.syncData) {
              for (const syncData of request.syncData) {
                await this.salesIllustrationDbService.updateSISyncFlag(SYNC_STATUS.SYNC_FAIL_99, syncData.data.clientRefId);
                salesIllustrationRes = new DeltaSyncResponse();
                salesIllustrationRes.module = MODULE.SI;
                salesIllustrationRes.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                salesIllustrationRes.statusCode = syncResponse.status;
                salesIllustrationRes.error = RESPONSE_MESSAGE.NOT_FOUND;
                salesIllustrationRes.moduleId = syncData.data.clientRefId;
                siResponseList.push(salesIllustrationRes);
              }
            }
          } else if (syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 || syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524 || syncResponse.status == RESPONSE_STATUS.MOBILE_NO_INTERNET_ISSUE
            || syncResponse.status == RESPONSE_STATUS.REQUEST_TIME_OUT || syncResponse.status == RESPONSE_STATUS.INTERNET_OUTAGE || syncResponse.status == RESPONSE_STATUS.OTHER_HTTP_ERROR) {
            if (request != null) {
              siResponseList = [];
              if (request.quotations) {
                for (const quotations of request.quotations) {
                  await this.salesIllustrationDbService.updateSISyncFlag(SYNC_STATUS.NETWORK_ERROR, quotations.clientRefId);
                  salesIllustrationRes = new DeltaSyncResponse();
                  salesIllustrationRes.module = MODULE.SI;
                  salesIllustrationRes.syncStatus = SYNC_STATUS.NETWORK_ERROR;
                  salesIllustrationRes.statusCode = syncResponse.status;
                  salesIllustrationRes.error = RESPONSE_MESSAGE.NETWORK_ISSUE;
                  salesIllustrationRes.moduleId = quotations.clientRefId;
                  if (syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 && syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524) {
                    salesIllustrationRes.error = RESPONSE_MESSAGE.SERVER_ISSUE;
                  }
                  siResponseList.push(salesIllustrationRes);
                }
              } else if (request.syncData) {
                for (const quotations of request.syncData) {
                  await this.salesIllustrationDbService.updateSISyncFlag(SYNC_STATUS.NETWORK_ERROR, quotations.data.clientRefId);
                  salesIllustrationRes = new DeltaSyncResponse();
                  salesIllustrationRes.module = MODULE.SI;
                  salesIllustrationRes.syncStatus = SYNC_STATUS.NETWORK_ERROR;
                  salesIllustrationRes.statusCode = syncResponse.status;
                  salesIllustrationRes.error = RESPONSE_MESSAGE.NETWORK_ISSUE;
                  salesIllustrationRes.moduleId = quotations.data.clientRefId;
                  if (syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 && syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524) {
                    salesIllustrationRes.error = RESPONSE_MESSAGE.SERVER_ISSUE;
                  }
                  siResponseList.push(salesIllustrationRes);
                }
              }
            }
          } else {
            if (request) {
              siResponseList = [];
              if (request.quotations) {
                for (const quotations of request.quotations) {
                  await this.salesIllustrationDbService.updateSISyncFlag(SYNC_STATUS.SYNC_FAIL_99, quotations.clientRefId);
                  salesIllustrationRes = new DeltaSyncResponse();
                  salesIllustrationRes.module = MODULE.SI;
                  salesIllustrationRes.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                  salesIllustrationRes.statusCode = syncResponse.status;
                  salesIllustrationRes.error = RESPONSE_MESSAGE.SERVER_ISSUE;
                  salesIllustrationRes.moduleId = quotations.clientRefId;
                  siResponseList.push(salesIllustrationRes);
                }
              } else if (request.syncData) {
                for (const quotations of request.syncData) {
                  await this.salesIllustrationDbService.updateSISyncFlag(SYNC_STATUS.SYNC_FAIL_99, quotations.data.clientRefId);
                  salesIllustrationRes = new DeltaSyncResponse();
                  salesIllustrationRes.module = MODULE.SI;
                  salesIllustrationRes.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                  salesIllustrationRes.statusCode = syncResponse.status;
                  salesIllustrationRes.error = RESPONSE_MESSAGE.SERVER_ISSUE;
                  salesIllustrationRes.moduleId = quotations.data.clientRefId;
                  siResponseList.push(salesIllustrationRes);
                }
              }
            }
          }
        } else {

          siResponseList = siFormErrors;
          //console.log(`SI sync form errors: ${siFormErrors}`);
        }
      }
      //this.util.logger(LOGTYPE.END, `SI Delta Sync`)
      resolve(siResponseList);
    });
  }



  async checklistDeltaSync(submissionId?: any) {
    return new Promise(async (resolve) => {
      let checklistRes: DeltaSyncResponse, checklistResList: DeltaSyncResponse[];
      this.util.dynamicLoadingMessage(MESSAGE.CHECKLIST_DELTA_SYNC);
      //this.util.logger(LOGTYPE.START, `Checklist Delta Sync`)
      this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
      this.token = await this.storage.get(SETTING_KEYS.TOKEN);
      this.util.dynamicLoadingMessage(MESSAGE.CHECKLIST_UNSYNC);
      const unsyncData: any = await this.checklistService.getSubmissionBySubmissionId(submissionId);
      //console.log(JSON.stringify(unsyncData))
      //this.util.logger(LOGTYPE.dbRetrieve, `GET CHECKLIST Unsync Data: ${JSON.stringify(unsyncData)}`)
      if (unsyncData != null) {
        //1 object per request due to large data
        var checklist: CheckListsRequest;

        var checkListsRequest: CheckListsRequest[] = [];
        var request: CheckListSyncRequest;
        request = new CheckListSyncRequest;
        checklist = new CheckListsRequest;
        checklist.data = new CheckListData;
        checklist.data.relatedLead = new RelatedLead;
        checklist.data.questions = new ChecklistQuestions;

        this.util.dynamicLoadingMessage(MESSAGE.CHECKLIST_EAPP_DETAILS);
        const eapp = await this.checklistService.getEAPPDetails(unsyncData.eappId);
        const leadsData: any = await this.leadsService.getLeadById(eapp.leadId);
        this.util.setLeadFname(leadsData.firstName);
        this.util.setLeadLname(leadsData.lastName);

        //this.util.logger(LOGTYPE.dbRetrieve, `GET attached eapp: ${JSON.stringify(eapp)}`)
        checklist.data.signatureLogs=eapp.signatureLogs;
        checklist.data.applicationNumber = eapp.applicationNumber;
        this.util.dynamicLoadingMessage(MESSAGE.CHECKLIST_SUBMISSION_PAYMENT);
        const epaymentDBData = await this.checklistService.getSubmissionPaymentBySubmissionId(unsyncData.submissionId);
        //this.util.logger(LOGTYPE.dbRetrieve, `GET attached epaymentDBData: ${JSON.stringify(unsyncData)}`)
        const epaymentData: SubmissionEpayment = this.util.createObjectArrFromDBData(epaymentDBData)[0];
        checklist.data.cardHolder = null;

        if (epaymentData.transactionStatus) {
          checklist.data.cardHolder = new CardHolder;
          checklist.data.cardHolder.checkoutId = epaymentData.referenceNumber;
          checklist.data.cardHolder.cardHolderPerson = null;

          if (epaymentData.transactionStatus == PAYMENT_STATUS.SUCCESS) {
            checklist.data.cardHolder.checkoutId = epaymentData.checkoutId;

            if (unsyncData.CHrelationToAO) {
              checklist.data.cardHolder.cardHolderPerson = new CardHolderPerson;
              checklist.data.cardHolder.cardHolderPerson.relationType = unsyncData.CHrelationToAO;
              checklist.data.cardHolder.cardHolderPerson.birthDate = (unsyncData.CHDOB) ? this.util.formatDOBWS(unsyncData.CHDOB) : '';
              checklist.data.cardHolder.cardHolderPerson.gender = unsyncData.CHGender;
              checklist.data.cardHolder.cardHolderPerson.nationality = unsyncData.CHNationality;
              checklist.data.cardHolder.cardHolderPerson.nativeCountry = unsyncData.pobCountry;
              checklist.data.cardHolder.cardHolderPerson.birthPlaceRegion = unsyncData.pobProvince;
              checklist.data.cardHolder.cardHolderPerson.cityOfBirth = unsyncData.pobCity;
            }
          }
        }


        if (unsyncData.serverId != '0') {
          checklist.data.self = unsyncData.serverId;
        }
        checklist.data.policyNumber = unsyncData.policyNumber;
        //Get signature from EAPP_Signatures
        this.util.dynamicLoadingMessage(MESSAGE.CHECKLIST_SIGNATURES);
        let signatoryFromDB: any = await this.checklistService.getEAppDetails(unsyncData.eappId, CONSTANT_DB_TABLE.EAPP_SIGNATURES);
        console.log(`GET attached signatures from SQLITE table EAPP_Signatures::`, signatoryFromDB);

        let dynatraceData: any = {
          component: 'sync.service.ts',
          eapppId: unsyncData.eappId,
          line:2116,
          action: 'signatureFromSQLITE',
          data: signatoryFromDB,
        };

        // check signatoryFromDB has record from table EAPP_Signatures
        if (signatoryFromDB && Array.isArray(signatoryFromDB) && signatoryFromDB.length > 0 && !this.settingsService.journeyGlobalData.isLocalStorageToggle) {
          // signatoryFromDB has value
          // No need to reassign dynatraceData properties
        }
        else {
          // get data from local storage if not available get data from file inside device rom
          let signatureData = [];

          let SignatureRawData = await this.storage.get(KEYS.SIGNATURE_RAW_DATA) || await this.util.fhGetJSON(KEYS.SIGNATURE_RAW_DATA);
          const index = SignatureRawData.findIndex((data) => data.eappId == unsyncData.eappId);

          for (let i = 0; i < SignatureRawData[index].signatureObj.length; i++) {
            let objectMappedData = {};
            for (let ii = 0; ii < SignatureRawData[index].signatureObj[i].length; ii++) {
              let fieldName = SignatureRawData[index].signatureObj[i][ii].fieldName;
              objectMappedData[fieldName] = SignatureRawData[index].signatureObj[i][ii].value;
            }
            signatureData.push(objectMappedData);
          }

          console.log(`GET attached signatures from localStorage or file inside device rom::`, signatureData);
          signatoryFromDB = signatureData;
          dynatraceData.action = 'signatureLocalStorage/Filehandling';
          dynatraceData.data = signatureData;
          dynatraceData.line = 2133;
        }

        //directly called dynatrace
        await this.dynaTrace.logError(`[${this.util.getDateTime()}]${JSON.stringify(dynatraceData)}`);

        const attachedSI = await this.salesIllustrationDbService.getSalesIllustrationMain(eapp.siId);
        const isEazyHealth = attachedSI ? attachedSI.planCode.includes(CONSTANTS_STRING.EAZY_HEALTH) : false;
        const isAllianzFundamental = attachedSI ? attachedSI.planCode.includes(CONSTANTS_STRING.ALLIANZ_FUNDAMENTAL) : false;

        if (!checklist.data.questions.ACR) {
          checklist.data.questions.ACR = new ACR;

          if (!isEazyHealth || !isAllianzFundamental) {
            checklist.data.questions.ACR.ACR000000801 = new QuestionsAll;
            checklist.data.questions.ACR.ACR000000801.ACR000000801_1 = unsyncData.agentsReport;
          }
        }

        if (signatoryFromDB) {
          var signatories: Signatories[] = [];
          var signatory: Signatories;
          for (let j = 0; j < signatoryFromDB.length; j++) {
            signatory = new Signatories;
            signatory.signatureData = new SignatureData;
            signatory.person = new ChecklistPerson;
            //Get Person from DB
            this.util.dynamicLoadingMessage(MESSAGE.CHECKLIST_EAPP_PERSON_DETAILS);
            const person: any = await this.checklistService.getEAppDetails(unsyncData.eappId, CONSTANT_DB_TABLE.EAPP_PERSON);
            //console.log(JSON.stringify(person))
            //this.util.logger(LOGTYPE.dbRetrieve, `GET eapp persons: ${JSON.stringify(person)}`)

            const isAttestation = signatoryFromDB[j].isAttestation == CONSTANTS_STRING.YES;

            let aoServerId: any;
            let piServerId: any;
            if(signatoryFromDB[j].signatureType == SIGNATURE_TYPE.agent) {
              checklist.data.questions.TERM = new TERM;
              checklist.data.questions.TERM.TERMSIGN0101 = new QuestionsAll;

              const acr: any = await this.checklistService.getDetails(unsyncData.submissionId, CONSTANT_DB_TABLE.SUBMISSION_ACR)
              if (acr != null) {
                checklist.data.questions.TERM.TERMSIGN0101.TERMSIGN0101_1 = "Y" //Y or N
           
                
                if (!checklist.data.questions.ACR) {
                  checklist.data.questions.ACR = new ACR;
                }
                checklist.data.questions.ACR.ACR000000101 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000102 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000201 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000301 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000302 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000401 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000402 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000403 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000404 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000501 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000502 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000503 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000504 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000505 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000506 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000507 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000601 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000701 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000702 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000703 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000704 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000705 = new QuestionsAll;
                checklist.data.questions.ACR.ACR000000706 = new QuestionsAll;

                checklist.data.questions.ACR.ACR100000101 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000201 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000301 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000302 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000303 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000401 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000402 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000403 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000404 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000405 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000406 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000501 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000502 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000503 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000504 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000505 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000506 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000507 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000601 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000602 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000603 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000604 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000605 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000606 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000701 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000702 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000703 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000704 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000705 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000706 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000707 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000801 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000802 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000803 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000804 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000805 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000806 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000807 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000901 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000902 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000903 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100000904 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100001001 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100001002 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100001003 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100001004 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100001101 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100001102 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100001103 = new QuestionsAll;
                checklist.data.questions.ACR.ACR100001104 = new QuestionsAll;

                // ACR
                checklist.data.questions.ACR.ACR000000101.ACR000000101_1 = acr.healthFactor;
                checklist.data.questions.ACR.ACR000000102.ACR000000102_1 = acr.healthFactorYes
                checklist.data.questions.ACR.ACR000000201.ACR000000201_1 = acr.insurancePurpose;
                checklist.data.questions.ACR.ACR000000201.ACR000000201_OTHR = acr.insurancePurposeOthers;
                checklist.data.questions.ACR.ACR000000301.ACR000000301_1 = acr.houseHoldAOIncome;
                checklist.data.questions.ACR.ACR000000302.ACR000000302_1 = acr.houseHoldPIIncome;
                checklist.data.questions.ACR.ACR000000401.ACR000000401_1 = acr.militaryMember;
                checklist.data.questions.ACR.ACR000000402.ACR000000402_1 = acr.militaryMemberYes;
                checklist.data.questions.ACR.ACR000000403.ACR000000403_1 = acr.beenActive;
                checklist.data.questions.ACR.ACR000000404.ACR000000404_1 = acr.beenActiveYes;
                checklist.data.questions.ACR.ACR000000501.ACR000000501_1 = acr.PEP;
                checklist.data.questions.ACR.ACR000000502.ACR000000502_1 = acr.remitAgent;
                checklist.data.questions.ACR.ACR000000503.ACR000000503_1 = acr.NGO;
                checklist.data.questions.ACR.ACR000000504.ACR000000504_1 = acr.casino;
                checklist.data.questions.ACR.ACR000000505.ACR000000505_1 = acr.broker;
                checklist.data.questions.ACR.ACR000000506.ACR000000506_1 = acr.jewelDealer;
                checklist.data.questions.ACR.ACR000000507.ACR000000507_1 = acr.gunDealer;
                checklist.data.questions.ACR.ACR000000601.ACR000000601_1 = acr.validateIncome;
                checklist.data.questions.ACR.ACR000000701.ACR000000701_1 = acr.passport;
                checklist.data.questions.ACR.ACR000000702.ACR000000702_1 = acr.NSO;
                checklist.data.questions.ACR.ACR000000703.ACR000000703_1 = acr.marriage;
                checklist.data.questions.ACR.ACR000000704.ACR000000704_1 = acr.bills;
                checklist.data.questions.ACR.ACR000000705.ACR000000705_1 = acr.creditCard;
                checklist.data.questions.ACR.ACR000000706.ACR000000706_1 = acr.onsite;

                // EDD: If Signature page is not ticked, enable this AJ4-428
                // client
                checklist.data.questions.ACR.ACR100000101.ACR100000101_1 = acr.pepClientName
                checklist.data.questions.ACR.ACR100000201.ACR100000201_1 = acr.pepClientRole

                // PEP
                checklist.data.questions.ACR.ACR100000301.ACR100000301_1 = acr.pepName
                checklist.data.questions.ACR.ACR100000302.ACR100000302_1 = acr.pepPosition
                checklist.data.questions.ACR.ACR100000303.ACR100000303_1 = acr.pepRelationship

                // verify source of wealth
                checklist.data.questions.ACR.ACR100000401.ACR100000401_1 = acr.bankCert
                checklist.data.questions.ACR.ACR100000402.ACR100000402_1 = acr.bankPaySlip
                checklist.data.questions.ACR.ACR100000403.ACR100000403_1 = acr.passbook
                checklist.data.questions.ACR.ACR100000404.ACR100000404_1 = acr.incomeTax
                checklist.data.questions.ACR.ACR100000405.ACR100000405_1 = acr.deedOfSale
                checklist.data.questions.ACR.ACR100000406.ACR100000406_00 = acr.sourceOfWealthOthersYes
                checklist.data.questions.ACR.ACR100000406.ACR100000406_OTHR = acr.sourceOfWealthOthers

                // other assets owned by client
                checklist.data.questions.ACR.ACR100000501.ACR100000501_1 = acr.netHouse
                checklist.data.questions.ACR.ACR100000502.ACR100000502_1 = acr.netHouseInput
                checklist.data.questions.ACR.ACR100000503.ACR100000503_1 = acr.netBusiness
                checklist.data.questions.ACR.ACR100000504.ACR100000504_1 = acr.netBusinessInput
                checklist.data.questions.ACR.ACR100000505.ACR100000505_1 = acr.netRealEstate
                checklist.data.questions.ACR.ACR100000506.ACR100000506_1 = acr.netRealEstateInput
                checklist.data.questions.ACR.ACR100000507.ACR100000507_00 = acr.assetsOthersYes
                checklist.data.questions.ACR.ACR100000507.ACR100000507_OTHR = acr.assetsOthers

                // verify source of fund
                checklist.data.questions.ACR.ACR100000601.ACR100000601_1 = acr.salary
                checklist.data.questions.ACR.ACR100000602.ACR100000602_1 = acr.business
                checklist.data.questions.ACR.ACR100000603.ACR100000603_1 = acr.gifts
                checklist.data.questions.ACR.ACR100000604.ACR100000604_1 = acr.legalClaims
                checklist.data.questions.ACR.ACR100000605.ACR100000605_1 = acr.investmentIncome
                checklist.data.questions.ACR.ACR100000606.ACR100000606_00 = acr.sourceOfFundOthersYes
                checklist.data.questions.ACR.ACR100000606.ACR100000606_OTHR = acr.sourceOfFundOthers

                // nature of occupation
                checklist.data.questions.ACR.ACR100000701.ACR100000701_1 = acr.banking
                checklist.data.questions.ACR.ACR100000702.ACR100000702_1 = acr.manufacturing
                checklist.data.questions.ACR.ACR100000703.ACR100000703_1 = acr.informationTech
                checklist.data.questions.ACR.ACR100000705.ACR100000705_1 = acr.pawnshop
                checklist.data.questions.ACR.ACR100000706.ACR100000706_1 = acr.casinoOccupation
                checklist.data.questions.ACR.ACR100000707.ACR100000707_1 = acr.governmentService
                checklist.data.questions.ACR.ACR100000704.ACR100000704_00 = acr.natureBusinessOthersYes
                checklist.data.questions.ACR.ACR100000704.ACR100000704_OTHR = acr.natureBusinessOthers

                // reason of transaction
                checklist.data.questions.ACR.ACR100000801.ACR100000801_1 = acr.security
                checklist.data.questions.ACR.ACR100000802.ACR100000802_1 = acr.protection
                checklist.data.questions.ACR.ACR100000803.ACR100000803_1 = acr.health
                checklist.data.questions.ACR.ACR100000804.ACR100000804_1 = acr.education
                checklist.data.questions.ACR.ACR100000805.ACR100000805_1 = acr.retirement
                checklist.data.questions.ACR.ACR100000806.ACR100000806_1 = acr.estatePlanning
                checklist.data.questions.ACR.ACR100000807.ACR100000807_00 = acr.reasonOthersYes
                checklist.data.questions.ACR.ACR100000807.ACR100000807_OTHR = acr.reasonOthers

                // confirm date of birth
                checklist.data.questions.ACR.ACR100000901.ACR100000901_1 = acr.passport
                checklist.data.questions.ACR.ACR100000902.ACR100000902_1 = acr.NSO
                checklist.data.questions.ACR.ACR100000903.ACR100000903_1 = acr.marriage
                checklist.data.questions.ACR.ACR100000904.ACR100000904_00 = acr.confirmDobOthersYes
                checklist.data.questions.ACR.ACR100000904.ACR100000904_OTHR = acr.confirmDobOthers

                // verify permanent address
                checklist.data.questions.ACR.ACR100001001.ACR100001001_1 = acr.bills
                checklist.data.questions.ACR.ACR100001002.ACR100001002_1 = acr.creditCard
                checklist.data.questions.ACR.ACR100001003.ACR100001003_1 = acr.onsite
                checklist.data.questions.ACR.ACR100001004.ACR100001004_00 = acr.verifyAddressOthersYes
                checklist.data.questions.ACR.ACR100001004.ACR100001004_OTHR = acr.verifyAddressOthers

                // client litigation case
                checklist.data.questions.ACR.ACR100001101.ACR100001101_1 = acr.courtDecision
                checklist.data.questions.ACR.ACR100001102.ACR100001102_1 = acr.courtResolution
                checklist.data.questions.ACR.ACR100001103.ACR100001103_1 = acr.courtAffidavit
                checklist.data.questions.ACR.ACR100001104.ACR100001104_00 = acr.clientCaseOthersYes
                checklist.data.questions.ACR.ACR100001104.ACR100001104_OTHR = acr.clientCaseOthers
              } else {
                checklist.data.questions.TERM.TERMSIGN0101.TERMSIGN0101_1 = "N" //Y or N
              }

              checklist.data.questions.PREP = new PREP;
              checklist.data.questions.PREP.PREP00000002 = new QuestionsAll;
              checklist.data.questions.PREP.PREP00000003 = new QuestionsAll;
              checklist.data.questions.PREP.PREP00000002.PREP00000002_1 = signatoryFromDB[j].intmPolicyIntendedToChange;
              checklist.data.questions.PREP.PREP00000003.PREP00000003_1 = signatoryFromDB[j].intmPremiumsPaidByLoan;
            }


            for (let g = 0; g < person.length; g++) {
              //Get Server Id of person
              if (person[g].personType == SYNC_STATUS.PERSON_TYPE_AO) {
                const personDBAO = await this.eappDbService.getEAPPPersonsByIdAndType(eapp.eappId, "0");
                const siPerson: any = await this.salesIllustrationDbService.getPersonUnsync(eapp.siId, CONSTANT_DB_TABLE.SI_PERSONS, 0);
                if(person[g].serverId) {
                  aoServerId = person[g].serverId;
                } else if(personDBAO.serverId) {
                  aoServerId = personDBAO.serverId; //eapp
                } else {
                  aoServerId = siPerson.serverId; //si
                }
              } else if (person[g].personType == SYNC_STATUS.PERSON_TYPE_PI) {
                const personDBPI = await this.eappDbService.getEAPPPersonsByIdAndType(eapp.eappId, "1");
                const siPerson: any = await this.salesIllustrationDbService.getPersonUnsync(eapp.siId, CONSTANT_DB_TABLE.SI_PERSONS, 1);
                if(person[g].serverId) {
                  piServerId = person[g].serverId;
                } else if(personDBPI.serverId) { 
                  piServerId = personDBPI.serverId;
                } else {
                  piServerId = siPerson.serverId;
                }
              }
            }
            signatory.person.declarations = new Declarations;
            signatory.person.declarations.relatedProductDeclaration = (signatoryFromDB[j].thirdPartyConsent == "true" || signatoryFromDB[j].thirdPartyConsent == true) ? true : false;
            signatory.person.declarations.delayedNoticeDeclaration = false; // always false
            signatory.person.declarations.generalDeclaration = true;
            const rnf = await this.checklistService.getRNFByEappId(unsyncData.eappId);
            //this.util.logger(LOGTYPE.dbRetrieve, `GET attached rnf: ${JSON.stringify(rnf)}`)
            const rnfData = this.util.createObjectArrFromDBData(rnf)
            if (rnfData.length != 0) {
              signatory.person.declarations.replacementNotification = true;
            }

            if (!isAttestation) {
              if (signatoryFromDB[j].signatureType == SIGNATURE_TYPE.applicantOwner) {
                signatory.person.self = aoServerId;
              } else if (signatoryFromDB[j].signatureType == SIGNATURE_TYPE.proposedInsured) {
                signatory.person.self = piServerId;
              } else if (signatoryFromDB[j].signatureType == SIGNATURE_TYPE.agent) {
                //if person is agent insert account manager ID
                signatory.person.self = this.amId;
                signatory.person.customerNumber = this.amId;
                signatory.person.declarations.application = false;
                signatory.person.declarations.needAnalysis = false;
                signatory.person.declarations.interimCoverageCertificate = false;
              }

              if (signatoryFromDB[j].signatureBase64 !== null && signatoryFromDB[j].signatureBase64.includes(`upload/`)) {
                signatory.signatureData.path = signatoryFromDB[j].signatureBase64;
              } else {
                signatory.signatureData.data = signatoryFromDB[j].signatureBase64;
              }
              signatory.signatureData.signedDate = this.convertDate(signatoryFromDB[j].signatureDate);
              signatories.push(signatory);

            } else {

              if (signatoryFromDB[j].signatureType == SIGNATURE_TYPE.agent) {
                //if person is agent insert account manager ID
                signatory.person.self = this.amId;
                signatory.person.customerNumber = this.amId;
                signatory.person.declarations.application = false;
                signatory.person.declarations.needAnalysis = false;
                signatory.person.declarations.interimCoverageCertificate = false;
                if (signatoryFromDB[j].signatureBase64 !== null && signatoryFromDB[j].signatureBase64.includes(`upload/`)) {
                  signatory.signatureData.path = signatoryFromDB[j].signatureBase64;
                } else {
                  signatory.signatureData.data = signatoryFromDB[j].signatureBase64;
                }
                signatory.signatureData.signedDate = this.convertDate(signatoryFromDB[j].signatureDate);
              }
              else if (signatoryFromDB[j].signatureType == SIGNATURE_TYPE.applicantOwner) {
                signatory.person.self = aoServerId;
              }
              else if (signatoryFromDB[j].signatureType == SIGNATURE_TYPE.proposedInsured) {
                signatory.person.self = piServerId;
              }
              signatories.push(signatory);

              checklist.data.questions.ATL = new ATL;
              checklist.data.questions.ATL.ATL000000101 = new QuestionsAll;
              checklist.data.questions.ATL.ATL000000101.ATL000000101_1 = signatoryFromDB[j].isAttestation;

              const attestation = new CheckListDocuments;
              const emailAcknowledgement = new CheckListDocuments;
              const videoScreenshot = new CheckListDocuments;

              attestation.documentType = CONSTANTS_STRING.ALAO;
              if (signatoryFromDB[j].attestationBase64 !== null && signatoryFromDB[j].attestationBase64.includes(`upload/`)) {
                attestation.path = signatoryFromDB[j].attestationBase64;
              } else {
                attestation.data = signatoryFromDB[j].attestationBase64;
              }
              attestation.signedDate = this.convertDate(signatoryFromDB[j].signatureDate);

              videoScreenshot.documentType = CONSTANTS_STRING.VCSCRN;
              if (signatoryFromDB[j].videoScreenshotBase64 !== null && signatoryFromDB[j].videoScreenshotBase64.includes(`upload/`)) {
                videoScreenshot.path = signatoryFromDB[j].videoScreenshotBase64;
              } else {
                videoScreenshot.data = signatoryFromDB[j].videoScreenshotBase64; // base64 upload
              }
              videoScreenshot.signedDate = this.convertDate(signatoryFromDB[j].signatureDate);

              emailAcknowledgement.documentType = CONSTANTS_STRING.ECSAAL;
              if (signatoryFromDB[j].emailAcknowledgementBase64 !== null && signatoryFromDB[j].emailAcknowledgementBase64.includes(`upload/`)) {
                emailAcknowledgement.path = signatoryFromDB[j].emailAcknowledgementBase64;
              } else {
                emailAcknowledgement.data = signatoryFromDB[j].emailAcknowledgementBase64;
              }
              emailAcknowledgement.signedDate = this.convertDate(signatoryFromDB[j].signatureDate);
              checklist.data.documents = [attestation, videoScreenshot, emailAcknowledgement];
            }
          }

          if (signatories.length == 0) {
            checklist.data.signatories = null;
          } else {
            checklist.data.signatories = signatories;
          }

        } else {
          this.util.infoAlert('No Signature will be synced');
        }

        this.util.dynamicLoadingMessage(MESSAGE.CHECKLIST_SI_PERSON);
        const siPersonDBData = await this.checklistService.getSIPersonsByEappId(unsyncData.eappId)
        //this.util.logger(LOGTYPE.dbRetrieve, `GET attached si person: ${JSON.stringify(siPersonDBData)}`)

        const siPersonData = this.util.createObjectArrFromDBData(siPersonDBData)
        const siAOData = _.find(siPersonData, { personType: SI_PERSON_TYPE.AO })

        //Get Answers of questions from DB (ADA,ACB,ACR)
        const ada: any = await this.checklistService.getDetails(unsyncData.submissionId, CONSTANT_DB_TABLE.SUBMISSION_ADA)
        //console.log(JSON.stringify(ada))
        //this.util.logger(LOGTYPE.sync, JSON.stringify(ada))
        if (ada != null) {
          checklist.data.questions.AAD = new AAD;
          checklist.data.questions.AAD.AAD000000101 = new QuestionsAll;
          checklist.data.questions.AAD.AAD000000201 = new QuestionsAll;
          checklist.data.questions.AAD.AAD000000301 = new QuestionsAll;
          checklist.data.questions.AAD.AAD000000101.AAD000000101_1 = ada.bankName;
          checklist.data.questions.AAD.AAD000000201.AAD000000201_1 = ada.savings;
          checklist.data.questions.AAD.AAD000000301.AAD000000301_1 = `${siAOData.firstName} ${siAOData.middleName || ''} ${siAOData.lastName}`;
        }

        const acb: any = await this.checklistService.getDetails(unsyncData.submissionId, CONSTANT_DB_TABLE.SUBMISSION_ACB)
        //this.util.logger(LOGTYPE.dbRetrieve, `GET attached acb ${JSON.stringify(acb)}`)

        //console.log(JSON.stringify(acb))
        //this.util.logger(LOGTYPE.sync, JSON.stringify(acb))
        if (acb != null) {
          checklist.data.questions.ACB = new ACB;
          checklist.data.questions.ACB.ACB000000101 = new QuestionsAll;
          checklist.data.questions.ACB.ACB000000201 = new QuestionsAll;
          checklist.data.questions.ACB.ACB000000301 = new QuestionsAll;
          checklist.data.questions.ACB.ACB000000401 = new QuestionsAll;
          checklist.data.questions.ACB.ACB000000501 = new QuestionsAll;

          checklist.data.questions.ACB.ACB000000101.ACB000000101_1 = acb.cardType;
          checklist.data.questions.ACB.ACB000000201.ACB000000201_1 = acb.cardIssued;
          checklist.data.questions.ACB.ACB000000301.ACB000000301_1 = acb.cardAccount;
          checklist.data.questions.ACB.ACB000000401.ACB000000401_1 = acb.cardAddress1;
          checklist.data.questions.ACB.ACB000000501.ACB000000501_1 = moment(acb.cardExpiry).format('MM/YY');
        }

        let leadServerId: any;
        let si: any;
        let lead: any;

        if (unsyncData.leadServerId != null) {
          leadServerId = unsyncData.leadServerId;
        } else {
          if (eapp) {
            si = await this.salesIllustrationDbService.getSalesIllustrationMain(eapp.siId);
            lead = await this.leadsService.getExistingLeadById(eapp.leadId);
            if (eapp && eapp.leadServerId) {
              leadServerId = eapp.leadServerId;
            } else if (si && si.leadServerId) {
              leadServerId = si.leadServerId;
            } else if (lead && lead.serverId) {
              leadServerId = lead.serverId;
            }

            if (eapp && eapp.leadId) {
              checklist.clientLeadRefId = eapp.leadId;
            } else if (si && si.leadId) {
              checklist.clientLeadRefId = si.leadId;
            } else if (lead && lead.leadId) {
              checklist.clientLeadRefId = lead.leadId;
            }
          }
        }
        checklist.data.relatedLead.self = leadServerId;

        checklist.data.status = STATUS.SIGNED;
        checklist.data.self = eapp.serverId;
        checklist.createdDate = this.convertDate(unsyncData.dateCreated);
        checklist.lastUpdateDate = this.convertDate(unsyncData.dateModified);
        checklist.clientRefId = unsyncData.eappId;


        checkListsRequest.push(checklist);
        request.contractApplicationPackages = await this.util.sortByIsDeleted(checkListsRequest);
        this.util.logInsert(request, 0, Modules.CHECKLIST);

        let dur = 0;
        let deltaDuration = setInterval(() => this.util.dynamicLoadingMessage(MESSAGE.CHECKLIST_DELTA_RESPONSE + '<br><span style="font-size: 12px;">Duration:' + (dur = dur + 1) + 's</span>'), 1000)
        // implemented new core api service
        let syncResponse: any = await this.syncApiService.setDeltaSync(Modules.CHECKLIST, request);

        clearInterval(deltaDuration); dur = null;
        this.util.logInsert(syncResponse, 1, Modules.CHECKLIST);
        if (environment.config.isWSAlertEnable) {
          if (syncResponse != null) {

            this.showResponse("DATA TO BE SENT TO WEBSERVICE: " + JSON.stringify(request) + '\n' + "RESPONSE OF THE WEBSERVICE: " + JSON.stringify(syncResponse));
          }
        }
        this.util.dynamicLoadingMessage(MESSAGE.CHECKLIST_UPDATING_STATUS);
        if (syncResponse.status === RESPONSE_STATUS.SUCCESS_200 || syncResponse.status === RESPONSE_STATUS.SUCCESS_207) {
          let checklistResponse = JSON.parse(syncResponse.data);

          for (let i = 0; i < checklistResponse.contractApplicationPackages.length; i++) {
            checklistResList = [];
            checklistRes = new DeltaSyncResponse();
            checklistRes.module = MODULE.SUBMISSION_CHECKLIST;
            if (checklistResponse.contractApplicationPackages[i].recSyncStatus == SYNC_STATUS.SYNCHED) {
              checklistRes.moduleId = unsyncData.submissionId;
              checklistRes.statusCode = syncResponse.status;
              checklistRes.syncStatus = SYNC_STATUS.SYNC_SUCCESS_2;
              checklistResList.push(checklistRes);
              const documentsResponse: any = await this.syncDocs(checklist, siAOData);
              if (documentsResponse != null && documentsResponse.length > 0) {
                documentsResponse.map(documentRes => {
                  checklistResList.push(documentRes);
                });
              }
            } else {
              await this.checklistService.updateChecklistSyncFlag(SYNC_STATUS.SYNC_FAIL_99, unsyncData.eappId);
              checklistRes = new DeltaSyncResponse();
              checklistRes.moduleId = unsyncData.submissionId;
              checklistRes.statusCode = syncResponse.status;
              checklistRes.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
              checklistRes.error = syncResponse.error;
              checklistResList.push(checklistRes);

            }
          }
        } else if (syncResponse.status === RESPONSE_STATUS.FAIL_400) {
          let checklistResponse = JSON.parse(syncResponse.error);
          checklistResList = [];
          if (checklistResponse != null && checklistResponse.contractApplicationPackages != null) {
            for (let i = 0; i < checklistResponse.contractApplicationPackages.length; i++) {
              await this.checklistService.updateChecklistSyncFlag(SYNC_STATUS.SYNC_FAIL_99, unsyncData.eappId);
              checklistRes = new DeltaSyncResponse();
              checklistRes.moduleId = unsyncData.submissionId;
              checklistRes.statusCode = syncResponse.status;
              checklistRes.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
              checklistRes.error = checklistResponse.contractApplicationPackages[i].errors != null ? checklistResponse.contractApplicationPackages[i].errors : checklistResponse.contractApplicationPackages[i].recSyncStatus;
              checklistResList.push(checklistRes);
            }
          } else {
            this.checklistService.updateChecklistSyncFlag(SYNC_STATUS.NETWORK_ERROR, checklist.clientRefId);
            checklistResList = [];
            checklistRes = new DeltaSyncResponse();
            checklistRes.moduleId = unsyncData.submissionId;
            checklistRes.statusCode = syncResponse.status;
            checklistRes.error = RESPONSE_MESSAGE.SERVER_ISSUE;
            checklistRes.syncStatus = SYNC_STATUS.NETWORK_ERROR;
            checklistResList.push(checklistRes);
          }

          const alertMessage = `Failed to submit application number ${checklist.data.applicationNumber}. Application is stored successfully. Please retry again or contact IT Helpdesk at (02) 8555-4911 or IT.Helpdesk@allianzpnblife.ph for assistance.`;
          this.timer = setTimeout(() => {

            this.util.infoAlert(`${alertMessage}`);
          }, 2000)
          
        } else if (syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 || syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524 || syncResponse.status == RESPONSE_STATUS.MOBILE_NO_INTERNET_ISSUE
          || syncResponse.status == RESPONSE_STATUS.REQUEST_TIME_OUT || syncResponse.status == RESPONSE_STATUS.INTERNET_OUTAGE || syncResponse.status == RESPONSE_STATUS.OTHER_HTTP_ERROR || syncResponse.status === RESPONSE_STATUS.INTERNAL_SERVER_ERROR) {
          this.checklistService.updateChecklistSyncFlag(SYNC_STATUS.NETWORK_ERROR, checklist.clientRefId);
          checklistResList = [];
          checklistRes = new DeltaSyncResponse();
          checklistRes.moduleId = unsyncData.submissionId;
          checklistRes.statusCode = syncResponse.status;
          checklistRes.syncStatus = SYNC_STATUS.NETWORK_ERROR;
          checklistRes.error = RESPONSE_MESSAGE.NETWORK_ISSUE;
          if (syncResponse.status === RESPONSE_STATUS.INTERNAL_SERVER_ERROR || syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 || syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524) {
            checklistRes.error = RESPONSE_MESSAGE.SERVER_ISSUE;
          }
          checklistResList.push(checklistRes);
          const alertMessage = (checklistRes.error == RESPONSE_MESSAGE.NETWORK_ISSUE) ? RESPONSE_MESSAGE.NETWORK_ISSUE : `Failed to submit application number ${checklist.data.applicationNumber}. Application is stored successfully. Please retry again or contact IT Helpdesk at (02) 8555-4911 or IT.Helpdesk@allianzpnblife.ph for assistance.`
          this.timer = setTimeout(() => {

            this.util.infoAlert(`${alertMessage}`);
          }, 2000)
        } else {
          this.util.infoAlert(`Failed to submit application number ${checklist.data.applicationNumber}. Application is stored successfully. Please retry again or contact IT Helpdesk at (02) 8555-4911 or IT.Helpdesk@allianzpnblife.ph for assistance. \n${syncResponse.status}: An error occured while processing your request`);
          this.checklistService.updateChecklistSyncFlag(SYNC_STATUS.SYNC_FAIL_99, checklist.clientRefId);
          checklistResList = [];
          checklistRes = new DeltaSyncResponse();
          checklistRes.module = MODULE.SUBMISSION_CHECKLIST;
          checklistRes.moduleId = unsyncData.submissionId;
          checklistRes.statusCode = syncResponse.status;
          checklistRes.error = RESPONSE_MESSAGE.SERVER_ISSUE;
          checklistRes.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
          checklistRes.documentType = CONSTANTS_STRING.ACR_SIGNATURES;
          checklistResList.push(checklistRes);
        }

        // } else {
        //   checklistResList = formErrors;
        // }
      }
      //this.util.logger(LOGTYPE.END, `Checklist Delta Sync`)
      resolve(checklistResList);
    });
  }

  async syncDocs(checklist, siPersonData) {
    return new Promise(async (resolve) => {
      let checklistRes: DeltaSyncResponse, checklistResList: DeltaSyncResponse[];
      this.util.dynamicLoadingMessage(MESSAGE.CHECKLIST_SYNCING_ATTACHMENT);

      //this.util.logger(LOGTYPE.START, `Checklist Documents Delta Sync`)
      let policyNumber: any;
      checklist.data.signatories = undefined;
      checklist.data.questions = undefined;
      policyNumber = checklist.data.policyNumber
      //Get documents using submission ID
      let unsyncData = await this.checklistService.getSubmissionByEappId(checklist.clientRefId);
      unsyncData = this.util.createObjectArrFromDBData(unsyncData)[0]
      //this.util.logger(LOGTYPE.dbRetrieve, `GET unsync data: ${JSON.stringify(unsyncData)}`)

      const attachments: any = await this.checklistService.getUnsyncDocs(unsyncData.submissionId);
      //this.util.logger(LOGTYPE.dbRetrieve, `GET submission attachments: ${JSON.stringify(attachments)}`)

      if (attachments != null && attachments.length > 0) {
        //counter for synced documents
        for (const attach of attachments) {
          var document: CheckListDocuments;
          var relatedDocument: CheckListDocuments;
          var checkListsRequest: CheckListsRequest[] = [];
          var request: CheckListSyncRequest;

          request = new CheckListSyncRequest;
          var documents: CheckListDocuments[] = [];
          var relatedDocuments: CheckListDocuments[] = [];
          document = new CheckListDocuments;
          document.documentType = attach.attachmentKey;

          if (attach.attachmentBase64 !== null && (attach.attachmentBase64.includes(`upload/`))) {
            document.path = attach.attachmentBase64; //AWS upload
            document.data = null;
          } else {
            document.data = attach.attachmentBase64; //base64
            document.path = null;
          }

          if (document.documentType == 'VIDAO') {
            for (let k = 0; k < 3; k++) {
              relatedDocument = new CheckListDocuments;
              if (k === 0) {
                relatedDocument.documentType = 'VIDAO_IDTYPE';
                relatedDocument.text = attach.idType;
                relatedDocuments.push(relatedDocument)
              } else if (k === 1) {
                relatedDocument.documentType = 'VIDAO_IDEXPRDT';
                relatedDocument.text = attach.expDate;
                relatedDocuments.push(relatedDocument)
              } else if (k === 2) {
                relatedDocument.documentType = 'VIDAO_IDBRTHDT';
                relatedDocument.text = attach.DOB;
                relatedDocuments.push(relatedDocument)
              }
            }
            document.relatedDocuments = relatedDocuments;
          }
          else if (document.documentType == 'VIDPI') {
            for (let k = 0; k < 3; k++) {
              relatedDocument = new CheckListDocuments;
              if (k === 0) {
                relatedDocument.documentType = 'VIDPI_IDTYPE';
                relatedDocument.text = attach.idType;
                relatedDocuments.push(relatedDocument)
              } else if (k === 1) {
                relatedDocument.documentType = 'VIDPI_IDEXPRDT';
                relatedDocument.text = attach.expDate;
                relatedDocuments.push(relatedDocument)
              } else if (k === 2) {
                relatedDocument.documentType = 'VIDPI_IDBRTHDT';
                relatedDocument.text = attach.DOB;
                relatedDocuments.push(relatedDocument)
              }
            }
            document.relatedDocuments = relatedDocuments;
          } else if (document.documentType == 'PP') {
            //If proof of payment, get reference number from Submission_EPayment
            const epay: any = await this.checklistService.getDetails(unsyncData.submissionId, CONSTANT_DB_TABLE.SUBMISSION_EPAYMENT);
            //this.util.logger(LOGTYPE.dbRetrieve, `GET epayment: ${JSON.stringify(epay)}`)

            if (epay != null) {
              relatedDocument = new CheckListDocuments;
              relatedDocument.documentType = 'PP_RN';
              relatedDocument.text = epay.referenceNumber;
              relatedDocuments.push(relatedDocument);
              document.relatedDocuments = relatedDocuments;
            }
          } else if (document.documentType == 'CHVID') {
            for (let k = 0; k < 2; k++) {
              relatedDocument = new CheckListDocuments;
              if (k === 0) {
                relatedDocument.documentType = 'CHVID_IDTYPE';
                relatedDocument.text = attach.idType;
                relatedDocuments.push(relatedDocument)
              } else if (k === 1) {
                relatedDocument.documentType = 'CHVID_IDEXPRDT';
                relatedDocument.text = attach.expDate;
                relatedDocuments.push(relatedDocument)
              }
            }
            document.relatedDocuments = relatedDocuments;
          }
          documents.push(document);
          checklist.data.documents = documents;

          const unsyncDocChecking: any = await this.checklistService.getUnsyncDocs(unsyncData.submissionId);
          if (checklist.data.status == STATUS.SIGNED && unsyncDocChecking.length == 1 && unsyncData.isCompleted == 1) {
            checklist.data.status = STATUS.SUBMITTED;
          }

          checkListsRequest.push(checklist);
          request.contractApplicationPackages = checkListsRequest;
          this.util.logInsert(request, 0, Modules.CHECKLIST);
          // implemented new core api service
          let syncResponse: any = await this.syncApiService.setDeltaSync(Modules.CHECKLIST, request);
          this.util.logInsert(syncResponse, 1, Modules.CHECKLIST);

          if (environment.config.isWSAlertEnable) {
            if (syncResponse != null) {
              this.showResponse("DATA TO BE SENT TO WEBSERVICE: " + JSON.stringify(request) + '\n' + "RESPONSE OF THE WEBSERVICE: " + JSON.stringify(syncResponse));
            }
          }
          if (syncResponse.status == RESPONSE_STATUS.MOBILE_NO_INTERNET_ISSUE) {
            await this.checklistService.updateDocSync(SYNC_STATUS.NETWORK_ERROR, unsyncData.submissionId, attach.attachmentKey);
            checklistResList = [];
            checklistRes = new DeltaSyncResponse();
            checklistRes.moduleId = unsyncData.submissionId;
            checklistRes.statusCode = syncResponse.status;
            checklistRes.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
            checklistRes.error = RESPONSE_MESSAGE.NETWORK_ISSUE;
            if (syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 || syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524) {
              checklistRes.error = RESPONSE_MESSAGE.SERVER_ISSUE;
            }
            checklistResList.push(checklistRes);
            const alertMessage = (checklistRes.error == RESPONSE_MESSAGE.NETWORK_ISSUE) ? RESPONSE_MESSAGE.NETWORK_ISSUE : `Failed to submit application number ${checklist.data.applicationNumber}. Application is stored successfully. Please retry again or contact IT Helpdesk at (02) 8555-4911 or IT.Helpdesk@allianzpnblife.ph for assistance.`
            this.timer = setTimeout(() => {

              this.util.infoAlert(alertMessage);
            }, 2000)
          }
          else if (syncResponse.status === RESPONSE_STATUS.SUCCESS_200 || syncResponse.status === RESPONSE_STATUS.SUCCESS_207) {
            let checklistResponse = JSON.parse(syncResponse.data);
            checklistResList = [];
            for (const checklist of checklistResponse.contractApplicationPackages) {
              checklistRes = new DeltaSyncResponse();
              checklistRes.module = MODULE.SUBMISSION_CHECKLIST;
              checklistRes.moduleId = unsyncData.submissionId;
              checklistRes.statusCode = syncResponse.status;
              checklistRes.documentType = attach.attachmentKey;
              if (checklist.recSyncStatus == SYNC_STATUS.SYNCHED) {
                policyNumber = checklist.data != null ? checklist.data.policyNumber : null;
                await this.checklistService.updateDocSync(SYNC_STATUS.SYNC_SUCCESS_2, unsyncData.submissionId, attach.attachmentKey);
                checklistRes.syncStatus = SYNC_STATUS.SYNC_SUCCESS_2;
                checklistResList.push(checklistRes);
              } else {
                await this.checklistService.updateDocSync(SYNC_STATUS.SYNC_FAIL_99, unsyncData.submissionId, attach.attachmentKey);
                checklistRes.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                checklistRes.error = syncResponse.error;
                checklistResList.push(checklistRes);
              }
            }
          } else if (syncResponse.status === RESPONSE_STATUS.FAIL_400) {
            checklistResList = [];
            let checklistResponse = JSON.parse(syncResponse.error);
            if (checklistResponse != null && checklistResponse.contractApplicationPackages != null) {
              for (const checklist of checklistResponse.contractApplicationPackages) {
                await this.checklistService.updateDocSync(SYNC_STATUS.SYNC_FAIL_99, unsyncData.submissionId, attach.attachmentKey);
                checklistRes = new DeltaSyncResponse();
                checklistRes.moduleId = unsyncData.submissionId;
                checklistRes.statusCode = syncResponse.status;
                checklistRes.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                checklistRes.documentType = attach.attachmentKey;
                checklistRes.error = checklist.errors != null ? checklist.errors : checklist.recSyncStatus;
                checklistResList.push(checklistRes);
                break;
              }
            } else {
              await this.checklistService.updateDocSync(SYNC_STATUS.NETWORK_ERROR, unsyncData.submissionId, attach.attachmentKey);
              checklistRes = new DeltaSyncResponse();
              checklistRes.moduleId = unsyncData.submissionId;
              checklistRes.statusCode = syncResponse.status;
              checklistRes.error = RESPONSE_MESSAGE.SERVER_ISSUE;
              checklistRes.syncStatus = SYNC_STATUS.NETWORK_ERROR;
              checklistResList.push(checklistRes);
            }
          } else if (syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 || syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524 || syncResponse.status == RESPONSE_STATUS.MOBILE_NO_INTERNET_ISSUE
            || syncResponse.status == RESPONSE_STATUS.REQUEST_TIME_OUT || syncResponse.status == RESPONSE_STATUS.INTERNET_OUTAGE || syncResponse.status == RESPONSE_STATUS.OTHER_HTTP_ERROR || syncResponse.status === RESPONSE_STATUS.INTERNAL_SERVER_ERROR
          || syncResponse.status == RESPONSE_STATUS.NO_NETWORK_CONNECTION_AVAILABLE) {
            await this.checklistService.updateDocSync(SYNC_STATUS.NETWORK_ERROR, unsyncData.submissionId, attach.attachmentKey);
            checklistResList = [];
            checklistRes = new DeltaSyncResponse();
            checklistRes.moduleId = unsyncData.submissionId;
            checklistRes.statusCode = syncResponse.status;
            checklistRes.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
            checklistRes.error = RESPONSE_MESSAGE.NETWORK_ISSUE;
            if (syncResponse.status === RESPONSE_STATUS.INTERNAL_SERVER_ERROR || syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 || syncResponse.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524) {
              checklistRes.error = RESPONSE_MESSAGE.SERVER_ISSUE;
            }
            checklistResList.push(checklistRes);
            const alertMessage = (checklistRes.error == RESPONSE_MESSAGE.NETWORK_ISSUE) ? RESPONSE_MESSAGE.NETWORK_ISSUE : `Failed to submit application number ${checklist.data.applicationNumber}. Application is stored successfully. Please retry again or contact IT Helpdesk at (02) 8555-4911 or IT.Helpdesk@allianzpnblife.ph for assistance.`
            this.timer = setTimeout(() => {

              this.util.infoAlert(`${syncResponse.status}: ${syncResponse} ${alertMessage}`);
            }, 2000)
          }
          else {
            await this.checklistService.updateDocSync(SYNC_STATUS.SYNC_FAIL_99, unsyncData.submissionId, attach.attachmentKey);
            checklistResList = [];
            checklistRes = new DeltaSyncResponse();
            checklistRes.moduleId = unsyncData.submissionId;
            checklistRes.statusCode = syncResponse.status;
            checklistRes.error = RESPONSE_MESSAGE.SERVER_ISSUE;
            checklistRes.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
            checklistRes.documentType = attach.attachmentKey;
            checklistResList.push(checklistRes);
            const alertMessage = "Failed to submit application number " + checklist.data.applicationNumber + ". Application is stored successfully. Please retry again or contact IT Helpdesk at (02) 8555-4911 or IT.Helpdesk@allianzpnblife.ph for assistance."
            this.timer = setTimeout(() => {

              this.util.infoAlert(`${alertMessage}`);
            }, 2000)
          }
        }
        let alertMessage = ""
        if (policyNumber != null) {
          await this.checklistService.updateChecklistSyncFlag(SYNC_STATUS.SYNC_SUCCESS_2, unsyncData.eappId, policyNumber);
          await this.updateEappStatus(unsyncData.eappId);
          const lastName = siPersonData.lastName;
          const firstName = siPersonData.firstName;
          alertMessage = "The application number " + checklist.data.applicationNumber + " is successfully submitted. The policy number generated for the application is " + policyNumber;
          let policydata = { number: policyNumber, name: siPersonData.firstName, lname: siPersonData.lastName, appnumber: checklist.data.applicationNumber };
          this.util.setPolicyData(policydata);
          this.openModal(policyNumber, firstName, lastName, checklist.data.applicationNumber)
          this.util.addStep(`Submit Policy Number${policyNumber}`);
        } else {
          await this.checklistService.updateChecklistSyncFlag(SYNC_STATUS.SYNC_FAIL_99, unsyncData.eappId);
          alertMessage = "Failed to submit application number " + checklist.data.applicationNumber + ". Application is stored successfully. Please retry again or contact IT Helpdesk at (02) 8555-4911 or IT.Helpdesk@allianzpnblife.ph for assistance."
          this.timer = setTimeout(() => {

            this.util.infoAlert(alertMessage);
          }, 2000)
        }
      }
      //this.util.logger(LOGTYPE.END, `Checklist Documents Delta Sync`)
      //this.util.logger(LOGTYPE.END, `Checklist Delta Sync`)
      resolve(checklistResList);
    });
  }

  async openModal(policyNumber, firstName, lastname, applicationNumber) {
    const modal = await this.modalController.create({
      component: ApplicationModalComponent,
      showBackdrop: true,
      backdropDismiss: false,
      componentProps: {
        policyNumber: policyNumber,
        firstName: firstName,
        lastName: lastname,
        applicationNumber: applicationNumber,
        modalCtrl: this.modalController
      },
      cssClass: 'app-num-modal'
    });

    return await modal.present();
  }

  async errorSyncing() {
    const alert = await this.alertController.create({
      message: 'There was an issue on syncing the data.',
      buttons: ['OK']
    });

    await alert.present();
  }

  async partialErrorSync() {
    const alert = await this.alertController.create({
      message: 'There was error on some data. Partial Sync was only executed',
      buttons: ['OK']
    });

    await alert.present();
  }

  getIRPQResult(irpqData) {
    let totalScore: number = 0
    let result: string = ""

    totalScore =
      this.mapPoints(irpqData.pqAns1) +
      this.mapPoints(irpqData.pqAns2) +
      this.mapPoints(irpqData.pqAns3) +
      this.mapPoints(irpqData.pqAns4) +
      this.mapPoints(irpqData.pqAns5) +
      this.mapPoints(irpqData.pqAns6) +
      this.mapPoints(irpqData.pqAns7) +
      this.mapPoints(irpqData.pqAns8)

    switch (true) {
      case (totalScore <= 11):
        result = "risk-averse"
        break;
      case (totalScore >= 12 && totalScore <= 19):
        result = "conservative"
        break;
      case (totalScore >= 20 && totalScore <= 28):
        result = "moderate"
        break;
      case (totalScore >= 29):
        result = "growth"
        break;
    }

    return {
      totalScore: totalScore,
      result: result
    }
  }

  mapPoints(profileOptionValue: string): number {
    let questions = PROFILE_QUESTIONS
    let points: number = 0;

    _.each(questions, (val, key) => {
      let choice: any = _.find(val.CHOICES, { 'key': profileOptionValue })
      if (choice !== undefined) {
        points = choice.points
        return false
      }
    })

    return points
  }

  convertDate(datehere: string) {
    try {
      if (datehere.length > 15) {
        return datehere;
      } else {
        return parseInt(datehere);
      }
    } catch (error) {
      return null;
    }
  }

  async insertFNATypes(fnaId, fnaType, goalType, needsVariables) {
    if (fnaType === NEED_ANALYSIS_TYPE.SAVINGS.CODE) {
      await this.needsAnalysisDbService.insertFNASavings
        (fnaId, goalType, needsVariables.GA, needsVariables.SD, needsVariables.SA);
    } else if (fnaType === NEED_ANALYSIS_TYPE.ESTATE_PLANNING.CODE) {
      await this.needsAnalysisDbService.insertFNAEstatePlanning
        (fnaId, needsVariables.GA1, needsVariables.GA2, needsVariables.GA3, needsVariables.GA4);
    } else if (fnaType === NEED_ANALYSIS_TYPE.HEALTH.CODE) {
      await this.needsAnalysisDbService.insertFNAHealth
        (fnaId, needsVariables.GA, needsVariables.SA);
    } else if (fnaType === NEED_ANALYSIS_TYPE.PROTECTION.CODE) {
      await this.needsAnalysisDbService.insertFNAProtection
        (fnaId, needsVariables.CMGA, needsVariables.SD, needsVariables.SA);
    } else if (fnaType === NEED_ANALYSIS_TYPE.RETIREMENT.CODE) {
      await this.needsAnalysisDbService.insertFNARetirement
        (fnaId, needsVariables.IA, needsVariables.CMGA, needsVariables.BSA, needsVariables.BD, needsVariables.SA);
    } else if (fnaType === NEED_ANALYSIS_TYPE.EDUCATION.CODE) {
      await this.needsAnalysisDbService.insertFNAEducation
        (fnaId, needsVariables.IA, goalType, needsVariables.CAGA, needsVariables.SA);
    }
  }

  async eappDeltaSync(leadId?: any): Promise<any> {
    return new Promise(async (resolve) => {
      let eAppSyncing: [], eAppResponseList: any[], eAppResponse: DeltaSyncResponse;
      //FORM VALIDATION
      //this.util.logger(LOGTYPE.START, `EAPP Delta Sync`)
      const eApplicationData = await this.eappDbService.getEappByLeadId(leadId);
      const processedData = this.filterData(eApplicationData);
      if (processedData != null) {
        eAppResponseList = [];
        if (processedData.offlineList != null) {
          eAppSyncing = await this.eAppSync(processedData.offlineList);
          if (eAppSyncing != null) {
            eAppSyncing.map(eApplication => {
              eAppResponseList.push(eApplication);
            });
          }
        }
        if (processedData.errorList != null) {
          for (const eAppError of processedData.errorList) {
            eAppResponse = new DeltaSyncResponse();
            const error = await this.errorHandlingService.getErrorsById(leadId, eAppError.siId);
            if (error != null && error.errorMessage != null) {
              eAppResponse.statusCode = error.errorCode;
              eAppResponse.error = [{ message: error.errorMessage.message, field: error.errorMessage.field, value: error.errorMessage.value }];
            } else {
              eAppResponse.error = MESSAGE.ERROR_DATA;
            }
            eAppResponse.module = MODULE.EAPP;
            eAppResponse.syncStatus = eAppError.syncStatus;
            eAppResponse.moduleId = eAppError.eappId;
            eAppResponseList.push(eAppResponse);
          }
        }
        if (processedData.syncedList != null) {
          processedData.syncedList.map(eAppSuccess => {
            eAppResponse = new DeltaSyncResponse();
            eAppResponse.module = MODULE.EAPP;
            eAppResponse.syncStatus = eAppSuccess.syncStatus;
            eAppResponse.moduleId = eAppSuccess.eappId;
            eAppResponseList.push(eAppResponse);
          });
        }
      }
      resolve(eAppResponseList);
      //this.util.logger(LOGTYPE.END, `EAPP DELTA SYNC`)
    });
  }

  async eAppSync(eappDB?: any): Promise<any> {
    return new Promise(async (resolve) => {

      const eappFormErrors: DeltaSyncResponse[] = [];

      let eappResponse: DeltaSyncResponse, eappResponseList: DeltaSyncResponse[];
      //this.util.logger(LOGTYPE.dbRetrieve, `GET EAPP Unsync Data: ${JSON.stringify(eappDB)}`)
      this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
      this.token = await this.storage.get(SETTING_KEYS.TOKEN);
      let listOfBeneficiary: any;
      var request: EappRequest;
      var eapp: EappRequestMain;
      var listOfEapps: EappRequestMain[] = [];
      var isExpiredAppNum: boolean = false;
      if (eappDB != null && eappDB.length > 0) {
        for (let i = 0; i < eappDB.length; i++) {
          eapp = new EappRequestMain();
          eapp.clientRefId = eappDB[i].eappId;

          let isDateCreatedBeforeDataPatch = await this.util.isCreatedDateIsBelowDataPatchDate(false, this.convertDate(eappDB[i].dateCreated), eappDB[i]); 
          if(isDateCreatedBeforeDataPatch) {
            continue; // skip sync if date created is below data patch date
          }

          try {
            if (eappDB[i].dateModified != null) {
              eapp.lastUpdateDate = this.convertDate(eappDB[i].dateModified);
            }
            if (eappDB[i].dateCreated != null) {
              eapp.createdDate = this.convertDate(eappDB[i].dateCreated);
            }
          } catch (error) {
            eapp.lastUpdateDate = eappDB[i].dateModified;
            eapp.createdDate = eappDB[i].dateCreated;
          }

          eapp.isDeleted = eappDB[i].isDeleted === 1;
          let attachedQuotation = await this.salesIllustrationDbService.getSalesIllustrationMain(eappDB[i].siId);
          //this.util.logger(LOGTYPE.dbRetrieve, `GET attached si: ${JSON.stringify(attachedQuotation)}`)

          let isAoEqualsPi;
          eapp.data = new EappRequestData();
          let beneficiaries = await this.buildEappBeneficiary(eappDB[i].eappId);
          if (beneficiaries.length == 0) {
            listOfBeneficiary = null;
          } else {
            listOfBeneficiary = beneficiaries;
            let primarySharePercentage: any = [];
            let contingentSharePercentage: any = [];

            beneficiaries.map(bene => {
              if (bene.priorityLevel == PRIMARY_BENE_PRIORITY.key) {
                primarySharePercentage.push(bene.percent)
              }
              if (bene.priorityLevel == CONTINGENT_BENE_PRIORITY.key) {
                contingentSharePercentage.push(bene.percent)
              }
            })
            const reducer = (accumulator, currentValue) => accumulator + currentValue;
            if (primarySharePercentage.length > PERCENTAGE.ZERO) {
              let totalPrimarySharePercentage = primarySharePercentage.reduce(reducer)
              //console.log(totalPrimarySharePercentage)
              if (totalPrimarySharePercentage != PERCENTAGE.HUNDRED) {
                this.util.displayErrorMessage('Error for Application #: ' + eappDB[i].applicationNumber + '<br/>' + 'Total Primary shares should be 100. Shares found: ' + totalPrimarySharePercentage);
              }
            }
            if (contingentSharePercentage.length > PERCENTAGE.ZERO) {
              let totalContingentSharePercentage = contingentSharePercentage.reduce(reducer)
              if (totalContingentSharePercentage != PERCENTAGE.HUNDRED) {
                this.util.displayErrorMessage('Error for Application #: ' + eappDB[i].applicationNumber + '<br/>' + 'Total Contingent shares should be 100. Shares found: ' + totalContingentSharePercentage);
              }
            }
          }
          if (attachedQuotation != null) {
            isAoEqualsPi = attachedQuotation.isAoEqualsPi;
            eapp.data.paymentFrequency = attachedQuotation.payMode;

          }

          let pbrIndicator = ['TR_PBR_PHP_0_PNB', 'UL_PBR_PHP_0_AGENCY', 'UL_PBR_USD_0_AGENCY', 'UL_PBR5_PHP_0_AGENCY', 'UL_PBR5_USD_0_AGENCY', 'UL_PBR10_PHP_0_AGENCY', 'UL_PBR10_USD_0_AGENCY',
            'UL_PBR_PHP_0_PNB', 'UL_PBR_USD_0_PNB', 'UL_PBR5_PHP_0_PNB', 'UL_PBR5_USD_0_PNB', 'UL_PBR10_PHP_0_PNB', 'UL_PBR10_USD_0_PNB'];
          let siRidersDBData = await this.databaseService.database.executeSql(SQL_QUERIES.GET_SI_RIDERS.query, [eappDB[i].siId])
          let siRiderData = this.util.createObjectArrFromDBData(siRidersDBData)
          const riderMappedValues = siRiderData.map((arr) => { return arr.riderCode });
          const hasPBR: any = riderMappedValues.some(riderVal => pbrIndicator.includes(riderVal));
          //console.log("hasPBR: " + hasPBR);
          eapp.data.beneficiaries = listOfBeneficiary;

          if (isAoEqualsPi == 1) {
            eapp.data.contractHolder = await this.buildEappPersons(eappDB[i].eappId, eappDB[i].siId, SI_PERSON_TYPE.AO);
          } else {
            eapp.data.insuredPerson = await this.buildEappPersons(eappDB[i].eappId, eappDB[i].siId, SI_PERSON_TYPE.PI);
            eapp.data.contractHolder = await this.buildEappPersons(eappDB[i].eappId, eappDB[i].siId, SI_PERSON_TYPE.AO, isAoEqualsPi);
          }
          eapp.data.isAOequalsBO = eappDB[i].isAOEqualBO;
          eapp.data.beneficialOwners = await this.buildBeneficialOwner(eappDB[i].eappId, eappDB[i].siId);
          const fundDetails = await this.buildEappFundDetails(eappDB[i].eappId, eappDB[i].siId);
          eapp.data.fundDetails = fundDetails == undefined ? null : fundDetails;
          // let appNumberDetails = null;

          if (!eappDB[i].applicationNumber) {
            const { applicationNumber, clientExpiryDate } = await this.offAppNumService.appNumberAutoSet();
            eapp.data.applicationNumber = applicationNumber || null;
            eapp.data.attachedDate = clientExpiryDate || null;
          } else {
            const clientExpiryDate = await this.offAppNumService.getAttachedDate(eappDB[i].applicationNumber);
            eapp.data.applicationNumber = eappDB[i].applicationNumber;
            eapp.data.attachedDate = eappDB[i].attachedDate ? eappDB[i].attachedDate : clientExpiryDate;
          }

          // eapp.data.applicationNumber = eappDB[i].applicationNumber ? eappDB[i].applicationNumber : appNumberDetails ? appNumberDetails.applicationNumber : null;
          // eapp.data.attachedDate = eappDB[i].attachedDate ? eappDB[i].attachedDate : appNumberDetails ? appNumberDetails.attachedDate : null;
          const timeNow = new Date().getTime();
          const clientExpiryEpoch = new Date(eapp.data.attachedDate).getTime();
          if(eapp.data.attachedDate) {
            if(clientExpiryEpoch > 0) {
              if (clientExpiryEpoch > timeNow) {
                isExpiredAppNum = false;
              } else {
                isExpiredAppNum = true;
              }
              if (!eapp.data.applicationNumber) {
                isExpiredAppNum = true;
              }
            } else {
              isExpiredAppNum = false;
            }
          } else {
            isExpiredAppNum = false;
          }

          const personDB = await this.eappDbService.getEAPPPersonsByIdAndType(eappDB[i].eappId, 0);
          if (personDB != null) {
            if ((personDB.coFirstName != null && personDB.coFirstName != CONSTANTS_STRING.EMPTY_STRING)
              || (personDB.coMiddleName != null && personDB.coMiddleName != CONSTANTS_STRING.EMPTY_STRING)
              || (personDB.coLastName != null && personDB.coLastName != CONSTANTS_STRING.EMPTY_STRING)) {
              eapp.data.contingentOwner = new Person();
              eapp.data.contingentOwner.firstName = personDB.coFirstName;
              eapp.data.contingentOwner.middleName = personDB.coMiddleName;
              eapp.data.contingentOwner.name = personDB.coLastName;
              eapp.data.contingentOwner.relationType = personDB.coRelationship;
              eapp.data.contingentOwner.birthDate = this.util.convertDate(personDB.coDateOfBirth);
            }
          }
          eapp.data.contractProcessState = 'APPLICATION';
          eapp.data.insuranceSum = null;

          eapp.data.payOut = new EappRequestPayOut();
          eapp.data.payOut.bankAccountName = eappDB[i].bankAccountName;
          const payOutBanks = await this.eappDbService.getAllEAPPBanksByID(eappDB[i].eappId);
          let coDepositorNames = []
          for (let i = 0; i < payOutBanks.length; i++) {
            coDepositorNames.push(payOutBanks[i].coDepositorName)
          }
          if (coDepositorNames.length != 0) {
            eapp.data.payOut.coDepositorsName = coDepositorNames.join('/');
          } else {
            eapp.data.payOut.coDepositorsName = null
          }
          eapp.data.payOut.bankAccountNumber = eappDB[i].accountNumber;
          eapp.data.payOut.bankBranch = eappDB[i].bankBranch;
          eapp.data.payOut.bankName = eappDB[i].bankName;
          eapp.data.payOut.currency = eappDB[i].accountCurrency;
          eapp.data.payOut.jointAccountType = eappDB[i].jointAccount == 'Y' ? eappDB[i].typeOfAccount : null;
          eapp.data.payOut.typeOfAccount = eappDB[i].typeOfAccount;
          eapp.data.payOut.method = eappDB[i].payoutOption;
          eapp.data.paymentMethod = eappDB[i].paymentScheme;
          eapp.data.purpose = eappDB[i].purpose;
          eapp.data.otherPurpose = eappDB[i].otherPurpose;
          eapp.data.productOfferingDescription = null;
          eapp.data.productOfferingName = null;
          eapp.data.provisionalReceiptNumber = null;
          eapp.data.questions = await this.buildEappMainQuestion(eappDB[i].eappId, eappDB[i].siId);
          eapp.data.quotation = new EappRequestQuotation();
          let quotationServerId: any;
          let lead: any;
          let leadServerId: any;
          if (attachedQuotation != null) {
            quotationServerId = attachedQuotation.serverId;
            lead = await this.leadsService.getExistingLeadById(attachedQuotation.leadId);
            //this.util.logger(LOGTYPE.dbRetrieve, `GET attached lead: ${JSON.stringify(attachedQuotation)}`)

            if (lead != null) {
              leadServerId = lead.serverId;
            }


          }
          eapp.data.quotation.self = quotationServerId;
          eapp.data.relatedLead = new RelatedLead();
          eapp.data.relatedLead.self = leadServerId;
          eapp.data.self = eappDB[i].serverId;
          eapp.data.premiumDefaultOption = eappDB[i].premiumDefaultOption;
          eapp.data.settlementOption = eappDB[i].settlementOption;
          eapp.data.status = eappDB[i].eappStatus;
          const errors: DeltaSyncResponse[] = [];
          if (errors.length > 0) {
            const dateNow = this.util.setDate();
            await this.eappDbService.updateEappSync(eapp.clientRefId, SYNC_STATUS.MOBILE_VALIDATION_ERROR, eapp.data.self, eapp.data.status, dateNow);
            errors.forEach((error: DeltaSyncResponse) => {
              eappFormErrors.push(error);
            });
            continue;
          }
          listOfEapps.push(eapp);
        }

        if (isExpiredAppNum) {
          eappResponseList = [];
          await this.eappDbService.updateEAPP(eapp.clientRefId, SYNC_STATUS.SYNC_FAIL_99, eapp.data.self, eapp.data.applicationNumber, true, eapp.data.attachedDate);
          eappResponse = new DeltaSyncResponse();
          eappResponse.moduleId = eapp.clientRefId;
          eappResponse.statusCode = RESPONSE_STATUS.FAIL_400;
          eappResponse.error = 'Expired Application number';
          eappResponse.syncStatus = SYNC_STATUS.SYNC_UNSYNC_0;
          eappResponseList.push(eappResponse);
        } else {
          if (eappFormErrors.length === 0) {
            let syncData;
            if(listOfEapps.length > 0) {
              request = new EappRequest();
              request.contractApplications = await this.util.sortByIsDeleted(listOfEapps);
              this.util.logInsert(request, 0, Modules.EAPP);
              // implemented new core api service
              let response = await this.syncApiService.setDeltaSync(Modules.EAPP, request);
              this.util.logInsert(response, 1, Modules.EAPP);
              if (environment.config.isWSAlertEnable) {
                if (response != null) {
                  this.showResponse("DATA TO BE SENT TO WEBSERVICE: " + JSON.stringify(request) + '\n' + "RESPONSE OF THE WEBSERVICE: " + JSON.stringify(response));
                }
              }
              if (response.status === RESPONSE_STATUS.SUCCESS_200 || response.status === RESPONSE_STATUS.SUCCESS_207) {
                if (response != null && response.data != null) {
                  syncData = JSON.parse(response.data);
                  if (syncData.contractApplications != null && syncData.contractApplications.length > 0) {
                    eappResponseList = [];
                    for (const eapp of syncData.contractApplications) {
                      eappResponse = new DeltaSyncResponse();
                      eappResponse.module = MODULE.EAPP;
                      if (eapp.recSyncStatus === SYNC_STATUS.SYNCHED && eapp.data.quotation.self != null && eapp.data.self != null) {
                        if (eapp.data.contractHolder != null) {
                          await this.eappDbService.updateEAPPPerson(eapp.clientRefId, PERSON_TYPE.CONTRACT_HOLDER, eapp.data.contractHolder.self);
                        }
                        if (eapp.data.insuredPerson != null) {
                          await this.eappDbService.updateEAPPPerson(eapp.clientRefId, PERSON_TYPE.INSURED_PERSON, eapp.data.insuredPerson.self);
                        }
                        await this.eappDbService.updateEAPP(eapp.clientRefId, SYNC_STATUS.SYNC_SUCCESS_2, eapp.data.self, eapp.data.applicationNumber, true);
                        eappResponse.moduleId = eapp.clientRefId;
                        eappResponse.statusCode = response.status;
                        eappResponse.syncStatus = SYNC_STATUS.SYNC_SUCCESS_2
                        eappResponseList.push(eappResponse);
                      } else {
                        let serverId;
                        if (eapp.data != null) {
                          serverId = eapp.data.self;
                        }
                        await this.eappDbService.updateEAPP(eapp.clientRefId, SYNC_STATUS.SYNC_FAIL_99, serverId);
                        eappResponse.moduleId = eapp.clientRefId;
                        eappResponse.statusCode = response.status;
                        eappResponse.error = response.error;
                        eappResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                        eappResponseList.push(eappResponse);
                      }
                    }
                  }
                }
              } else if (response.status === RESPONSE_STATUS.FAIL_400) {
                let syncData: any;
                if(response.error) {
                  syncData = JSON.parse(response.error);
                } else if (response.data) {
                  syncData = JSON.parse(response.data);
                } else { 
                  syncData = null;
                }
                eappResponseList = [];
                if (syncData && syncData.contractApplications && syncData.contractApplications.length > 0) {
                  for (const contractApplications of syncData.contractApplications) {
                    await this.eappDbService.updateEappSync(eapp.clientRefId, SYNC_STATUS.SYNC_FAIL_99, eapp.data.self, eapp.data.status, eapp.createdDate);
                    eappResponse = new DeltaSyncResponse();
                    eappResponse.moduleId = eapp.clientRefId;
                    eappResponse.statusCode = response.status;
                    eappResponse.module = MODULE.EAPP;
                    eappResponse.error = contractApplications ? contractApplications.errors ? contractApplications.errors : contractApplications.recSyncStatus : RESPONSE_MESSAGE.SERVER_ISSUE;
                    eappResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                    eappResponseList.push(eappResponse);
                  }
                } else {
                  await this.eappDbService.updateEappSync(eapp.clientRefId, SYNC_STATUS.SYNC_FAIL_99, eapp.data.self, eapp.data.status, eapp.createdDate);
                  eappResponse = new DeltaSyncResponse();
                  eappResponse.statusCode = response.status;
                  eappResponse.moduleId = eapp.clientRefId;
                  eappResponse.module = MODULE.EAPP;
                  eappResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
                  eappResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                  eappResponseList.push(eappResponse);
                }
              } else if (response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 || response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524 || response.status == RESPONSE_STATUS.MOBILE_NO_INTERNET_ISSUE
                || response.status == RESPONSE_STATUS.REQUEST_TIME_OUT || response.status == RESPONSE_STATUS.INTERNET_OUTAGE || response.status == RESPONSE_STATUS.OTHER_HTTP_ERROR) {
                if (request != null) {
                  eappResponseList = [];
                  if(response.error) {
                    syncData = JSON.parse(response.error);
                  } else if (response.data) {
                    syncData = JSON.parse(response.data);
                  } else { 
                    syncData = null;
                  }
                  if(syncData && syncData.contractApplications && syncData.contractApplications.length > 0) {
                    for (const contractApplications of syncData.contractApplications) {
                      await this.eappDbService.updateEappSync(eapp.clientRefId, SYNC_STATUS.SYNC_FAIL_99, eapp.data.self, eapp.data.status, eapp.createdDate);
                      eappResponse = new DeltaSyncResponse();
                      eappResponse.statusCode = response.status;
                      eappResponse.moduleId = eapp.clientRefId;
                      eappResponse.error = RESPONSE_MESSAGE.NETWORK_ISSUE;
                      eappResponse.module = MODULE.EAPP;
                      eappResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                      eappResponseList.push(eappResponse);
                      if (response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_523 || response.status === RESPONSE_STATUS.CLOUDFARE_ISSUE_524) {
                        eappResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
                      }
                    }
                  } else {
                    await this.eappDbService.updateEappSync(eapp.clientRefId, SYNC_STATUS.SYNC_FAIL_99, eapp.data.self, eapp.data.status, eapp.createdDate);
                    eappResponse = new DeltaSyncResponse();
                    eappResponse.statusCode = response.status;
                    eappResponse.moduleId = eapp.clientRefId;
                    eappResponse.module = MODULE.EAPP;
                    eappResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
                    eappResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                    eappResponseList.push(eappResponse);
                  }
                }
              } else {
                if (request) {
                  eappResponseList = [];
                  if(response.error) {
                    syncData = JSON.parse(response.error);
                  } else if (response.data) {
                    syncData = JSON.parse(response.data);
                  } else { 
                    syncData = null;
                  }
                  if(syncData && syncData.contractApplications && syncData.contractApplications.length > 0) {
                    for (const contractApplications of syncData.contractApplications) {
                      await this.eappDbService.updateEappSync(eapp.clientRefId, SYNC_STATUS.SYNC_FAIL_99, eapp.data.self, eapp.data.status, eapp.createdDate);
                      eappResponse = new DeltaSyncResponse();
                      eappResponse.statusCode = response.status;
                      eappResponse.moduleId = eapp.clientRefId;
                      eappResponse.module = MODULE.EAPP;
                      eappResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
                      eappResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                      eappResponseList.push(eappResponse);
                    }
                } else {
                  await this.eappDbService.updateEappSync(eapp.clientRefId, SYNC_STATUS.SYNC_FAIL_99, eapp.data.self, eapp.data.status, eapp.createdDate);
                  eappResponse = new DeltaSyncResponse();
                  eappResponse.statusCode = response.status;
                  eappResponse.moduleId = eapp.clientRefId;
                  eappResponse.module = MODULE.EAPP;
                  eappResponse.error = RESPONSE_MESSAGE.SERVER_ISSUE;
                  eappResponse.syncStatus = SYNC_STATUS.SYNC_FAIL_99;
                  eappResponseList.push(eappResponse);
                }
                }
              }
            }
          }
        }
      }

      //this.util.logger(LOGTYPE.END, 'Eapp Delta Sync')
      resolve(eappResponseList);
    });
  }

  async buildEappBeneficiary(eappId) {
    const beneficiariesDB = await this.eappDbService.getEappBeneficiaryById(eappId);

    let listOfBeneficiary: Beneficiary[] = [];

    if (beneficiariesDB != null) {
      beneficiariesDB.map(async bene => {
        if (bene.isEstateBeneficiary === 'true') {
          const beneficiaryEstate = new Beneficiary();

          beneficiaryEstate.isEstateBeneficiary = bene.isEstateBeneficiary === 'true';
          beneficiaryEstate.priorityLevel = bene.estatePriority;
          beneficiaryEstate.percent = bene.estateSharePercentage;

          beneficiaryEstate.person = new Person();
          beneficiaryEstate.person.firstName = CONSTANTS_STRING.ESTATE;
          beneficiaryEstate.person.name = CONSTANTS_STRING.BENEFICIARY;
          beneficiaryEstate.person.middleName = CONSTANTS_STRING.EMPTY_STRING;
          beneficiaryEstate.person.birthDate = CONSTANTS_STRING.DEFAULT_DATE_WS_FORMAT;
          beneficiaryEstate.person.relationType = CONSTANTS_STRING.EMPTY_STRING;
          beneficiaryEstate.person.nationality = CONSTANTS_STRING.PH_CODE;
          beneficiaryEstate.person.gender = CONSTANTS_STRING.DEFAULT_GENDER;

          listOfBeneficiary.push(beneficiaryEstate);
        } else {
          const beneficiary = new Beneficiary();
          beneficiary.isRevocable = bene.designation == "true"
          beneficiary.justification = bene.justification;
          beneficiary.minor = null;
          beneficiary.order = null;
          beneficiary.priorityLevel = bene.priority;
          beneficiary.percent = bene.sharePercentage;

          beneficiary.person = new Person();
          beneficiary.person.preferredContactChannels = new PreferredContactChannels()

          beneficiary.person.gender = bene.gender
          beneficiary.person.cityOfBirth = bene.pobCity
          beneficiary.person.birthPlaceRegion = bene.pobProvince
          beneficiary.person.nativeCountry = bene.pobCountry
          beneficiary.person.preferredContactChannels.phoneNumber = bene.mobileNumber
          beneficiary.person.preferredContactChannels.email = bene.emailAddress
          beneficiary.person.preferredContactChannels.mailingAddress = 'P'

          beneficiary.person.firstName = bene.firstName;
          beneficiary.person.name = bene.lastName;
          beneficiary.person.middleName = bene.middleName;
          beneficiary.person.age = bene.age;
          beneficiary.person.birthDate = this.util.convertDate(bene.dateOfBirth);
          beneficiary.person.relationType = bene.relationToPI;
          beneficiary.person.nationality = bene.nationalityCountryCode;
          beneficiary.person.addresses = new Addresses();
          beneficiary.person.addresses.homeAddress = new HomeAddress();
          beneficiary.person.addresses.homeAddress.buildingName = bene.unitBuilding;
          beneficiary.person.addresses.homeAddress.cityCode = bene.cityCode;
          beneficiary.person.addresses.homeAddress.countryCode = bene.countryCode;
          beneficiary.person.addresses.homeAddress.district = bene.barangay;
          beneficiary.person.addresses.homeAddress.state = bene.provinceCode;
          beneficiary.person.addresses.homeAddress.street = bene.streetName;
          beneficiary.person.addresses.homeAddress.streetNumber = this.util.trimString(bene.blockNumber, CONSTANTS_STRING.BLOCK_MAXCHAR);
          beneficiary.person.addresses.homeAddress.zipCode = bene.zipCode;
          beneficiary.person.addresses.homeAddress.type = 'HOME';

          if (bene.declaration1 != null || bene.declaration2 != null || bene.declaration3 != null || bene.declaration4 != null) {
            const beneficiaryQuestions = new BeneficiaryAnswers();
            beneficiaryQuestions.declaration1 = bene.declaration1 == CONSTANTS_STRING.EMPTY_STRING ? false : bene.declaration1;
            beneficiaryQuestions.declaration2 = bene.declaration2 == CONSTANTS_STRING.EMPTY_STRING ? false : bene.declaration2;
            beneficiaryQuestions.declaration3 = bene.declaration3 == CONSTANTS_STRING.EMPTY_STRING ? false : bene.declaration3;
            beneficiaryQuestions.declaration4 = bene.declaration4 == CONSTANTS_STRING.EMPTY_STRING ? false : bene.declaration4;
            let beneQuestions: any;
            const numberQuestion = Number(beneficiariesDB.indexOf(bene)) + 1;
            let questionCode = CONSTANTS_STRING.UNDERSCORE.concat(numberQuestion.toString());

            if (bene.questionCodeSet != null) {
              questionCode = bene.questionCodeSet;
            }
            beneQuestions = await this.buildBeneficiaryQuestion(beneficiaryQuestions, questionCode);
            beneficiary.person.questions = beneQuestions;
          }

          listOfBeneficiary.push(beneficiary);
        }
      });
    }

    return listOfBeneficiary;
  }

  async buildEappPersons(eappId, siId, personType, isAoEqualsPi?: any) {
    const personDB = await this.eappDbService.getEAPPPersonsByIdAndType(eappId, personType);
    const attachedSI = await this.salesIllustrationDbService.getSalesIllustrationMain(siId);
    const isEazyHealth = attachedSI ? attachedSI.planCode.includes(CONSTANTS_STRING.EAZY_HEALTH) : false;
    const isAllianzFundamental = attachedSI ? attachedSI.planCode.includes(CONSTANTS_STRING.ALLIANZ_FUNDAMENTAL) : false;
    const isHSBCGenesis = attachedSI ? attachedSI.planCode.includes(CONSTANTS_STRING.HSBC_GENESIS) : false;
    let isAssureProductIntegrated = false;
    for (let key in ASSUREINTEGRATEDPRODUCTMAPPING) {
      if (ASSUREINTEGRATEDPRODUCTMAPPING[key].includes(attachedSI.planCode)) {
        isAssureProductIntegrated = true;
      }
    }
    let personQuestion: any;
    let eappPerson: any;
    let isForPBR = 0;
    let OCCPARMFRC01, OCCPAVITON01, OCCPARMFRC02, OCCPAVITON02, OCCPAVITON03,
      OCCPMRCMAR01, OCCPMRCMAR02, OCCPMRCMAR03, OCCPFISIND01, OCCPMRCMAR05, OCCPDECL0001;
    if (personDB != null) {
      eappPerson = new Person();
      eappPerson.maritalStatus = personDB.civilStatus;
      eappPerson.gender = personDB.gender;
      eappPerson.preferredContactChannels = new PreferredContactChannels();
      eappPerson.preferredContactChannels.email = personDB.email;
      eappPerson.preferredContactChannels.mailingAddress = personDB.preferredMailingAddress;
      eappPerson.preferredContactChannels.phoneNumber = personDB.contactNumber;

      eappPerson.monthlyIncome = null;
      eappPerson.otherLegalName = new Person();
      eappPerson.otherLegalName.firstName = personDB.otherFirstName;
      eappPerson.otherLegalName.name = personDB.otherLastName;
      eappPerson.otherLegalName.middleName = personDB.otherMiddleName;

      eappPerson.employer = personDB.employer;
      eappPerson.annualIncome = personDB.annualIncome;

      if (isAssureProductIntegrated) {
        eappPerson.identificationType = 4;
        eappPerson.identificationNumber = personDB.identificationNumber;
      }

      if (attachedSI != null) {
        eappPerson.annualIncomeCurrency = attachedSI.currency;
        const allianzFundamentalCode = 'TR_AZ_FUNDAMENTAL';
        const isAFC = attachedSI.planCode.includes(allianzFundamentalCode); // is AFC
        if (isAFC) eappPerson.validIdNumber = personDB.validIdNumber;
      }
      if (personDB.sourceOfFunds != null) {
        eappPerson.sourceOfIncome = personDB.sourceOfFunds.split(',');
      } else {
        eappPerson.sourceOfIncome = [''];
      }
      eappPerson.otherSourceOfIncome = personDB.otherSourceOfFunds;
      eappPerson.cityOfBirth = personDB.pobCity;
      eappPerson.birthPlaceRegion = personDB.pobProvince;
      eappPerson.nativeCountry = personDB.pobCountry;
      eappPerson.nationality = personDB.nationality;
      eappPerson.isUsPerson = personDB.isUSPerson == CONSTANTS_STRING.YES ? true : false;
      // eappPerson.usPersonTin = personDB.usPersonTin;
      eappPerson.relationType = personDB.relationshipToPI;

      let pbrIndicator = ['TR_PBR_PHP_0_PNB', 'UL_PBR_PHP_0_AGENCY', 'UL_PBR_USD_0_AGENCY', 'UL_PBR5_PHP_0_AGENCY', 'UL_PBR5_USD_0_AGENCY', 'UL_PBR10_PHP_0_AGENCY', 'UL_PBR10_USD_0_AGENCY',
        'UL_PBR_PHP_0_PNB', 'UL_PBR_USD_0_PNB', 'UL_PBR5_PHP_0_PNB', 'UL_PBR5_USD_0_PNB', 'UL_PBR10_PHP_0_PNB', 'UL_PBR10_USD_0_PNB'];
      let siRidersDBData = await this.databaseService.database.executeSql(SQL_QUERIES.GET_SI_RIDERS.query, [siId])
      let siRiderData = this.util.createObjectArrFromDBData(siRidersDBData)
      const riderMappedValues = siRiderData.map((arr) => { return arr.riderCode });
      const hasPBR = riderMappedValues.some(riderVal => pbrIndicator.includes(riderVal));

      if ((hasPBR && personType == SI_PERSON_TYPE.AO) || (personType == SI_PERSON_TYPE.AO && isAoEqualsPi == 0)) {
        isForPBR = 1;
      }
      if (hasPBR && personType == SI_PERSON_TYPE.PI) {
        isForPBR = 0;
      }

      let eappNonMed = null;
      eappNonMed = await this.eappDbService.getEappNonMedMainById(eappId, isForPBR);
      if (!eappNonMed) {
        personQuestion = await this.buildPersonQuestions(null, null, personDB);
      }
      if (eappNonMed) {
        eappPerson.noParentTag = eappNonMed.noParent;

        eappPerson.father = new Person();
        eappPerson.mother = new Person();
        if (eappNonMed.fatherFirstName != null) {
          eappPerson.father.firstName = eappNonMed.fatherFirstName;
          eappPerson.father.name = eappNonMed.fatherLastName;
          eappPerson.father.middleName = eappNonMed.fatherMiddleName;
          eappPerson.father.age = eappNonMed.fatherAge;
          eappPerson.father.relationType = 2;
        }
        if (eappNonMed.motherFirstName != null) {
          eappPerson.mother.firstName = eappNonMed.motherFirstName;
          eappPerson.mother.name = eappNonMed.motherLastName;
          eappPerson.mother.middleName = eappNonMed.motherMiddleName;
          eappPerson.mother.age = eappNonMed.motherAge;
          eappPerson.mother.relationType = 1;
        }

        eappPerson.height = eappNonMed.heightCM;
        eappPerson.heightUnit = 'cm';
        eappPerson.weight = eappNonMed.weightKG;
        eappPerson.weightUnit = 'kg';

        if (eappNonMed.nonMedId != null) {
          const siblings = await this.eappDbService.getEappNonMedFamilyMemberById(eappNonMed.nonMedId);

          eappPerson.siblings = [];
          if (siblings != null) {
            siblings.map(sib => {
              const sibling = new Person();
              sibling.firstName = sib.firstName;
              sibling.name = sib.lastName;
              sibling.middleName = sib.middleName;
              sibling.age = sib.age;
              sibling.relationType = sib.relationship
              eappPerson.siblings.push(sibling);
            });
          }
          const siblingQuestion = await this.buildSiblingsQuestion(siblings);
          personQuestion = await this.buildPersonQuestions(eappNonMed.nonMedId, siblingQuestion, personDB);
        }
      }
      if (personQuestion != null) {
        if (personDB.armyBranch != null) {
          OCCPARMFRC01 = {};
          OCCPARMFRC01['OCCPARMFRC01_1'] = personDB.armyBranch;
          personQuestion.OCCP['OCCPARMFRC01'] = OCCPARMFRC01;
        }
        if (personDB.rank != null) {
          OCCPARMFRC02 = {};
          OCCPARMFRC02['OCCPARMFRC02_1'] = personDB.rank;
          personQuestion.OCCP['OCCPARMFRC02'] = OCCPARMFRC02;
        }
        if (personDB.airlineJob != null) {
          OCCPAVITON01 = {};
          OCCPAVITON01['OCCPAVITON01_1'] = personDB.airlineJob;
          personQuestion.OCCP['OCCPAVITON01'] = OCCPAVITON01;
        }
        if (personDB.aircraftType != null) {
          OCCPAVITON02 = {};
          OCCPAVITON02['OCCPAVITON02_1'] = personDB.aircraftType;
          personQuestion.OCCP['OCCPAVITON02'] = OCCPAVITON02;
        }
        if (personDB.numberOfFlightExpirience != null) {
          OCCPAVITON03 = {};
          OCCPAVITON03['OCCPAVITON03_1'] = personDB.numberOfFlightExpirience;
          personQuestion.OCCP['OCCPAVITON03'] = OCCPAVITON03;

        }
        if (personDB.vesselOwner != null) {
          OCCPMRCMAR01 = {}
          OCCPMRCMAR01['OCCPMRCMAR01_1'] = personDB.vesselOwner;
          personQuestion.OCCP['OCCPMRCMAR01'] = OCCPMRCMAR01;
        }
        if (personDB.vesselType != null) {
          OCCPMRCMAR02 = {};
          if (personQuestion.OCCP != null) {
            OCCPMRCMAR02['OCCPMRCMAR02_1'] = personDB.vesselType;
            personQuestion.OCCP['OCCPMRCMAR02'] = OCCPMRCMAR02;
          }

        }
        if (personDB.vesselCountry != null) {
          OCCPMRCMAR03 = {};
          if (personQuestion.OCCP != null) {
            OCCPMRCMAR03['OCCPMRCMAR03_1'] = personDB.vesselCountry;
            personQuestion.OCCP['OCCPMRCMAR03'] = OCCPMRCMAR03;
          }

        }
        if (personDB.fishingArea != null) {
          OCCPFISIND01 = {};
          OCCPFISIND01['OCCPFISIND01_1'] = personDB.fishingArea;
          personQuestion.OCCP['OCCPFISIND01'] = OCCPFISIND01;
        }
        if (personDB.isPoliticallySensitive != null) {
          OCCPMRCMAR05 = {};
          OCCPMRCMAR05['OCCPMRCMAR05_1'] = personDB.isPoliticallySensitive;
          personQuestion.OCCP['OCCPMRCMAR05'] = OCCPMRCMAR05;
        }
        if (personDB.prominentPublicPosition != null) {
          OCCPDECL0001 = {};
          OCCPDECL0001['OCCPDECL0001_1'] = personDB.prominentPublicPosition;
          personQuestion.OCCP['OCCPDECL0001'] = OCCPDECL0001;

        }
      }
      if (!isEazyHealth) {
        eappPerson.questions = personQuestion;
      }
      eappPerson.employerBranchDetail = null;
      eappPerson.employerBranch = null;
      eappPerson.addresses = new Addresses;
      eappPerson.addresses.homeAddress = new HomeAddress;
      eappPerson.addresses.workAddress = new WorkAddress;
      const siPerson: any = await this.salesIllustrationDbService.getPersonUnsync(siId, CONSTANT_DB_TABLE.SI_PERSONS, personType);

      if (siPerson != null) {
        eappPerson.self = siPerson.serverId;
        eappPerson.addresses.homeAddress.buildingName = siPerson.homeUnitBuilding;
        eappPerson.addresses.homeAddress.streetNumber = siPerson.homeLotBlock;
        eappPerson.addresses.homeAddress.street = siPerson.homeStreet;
        eappPerson.addresses.homeAddress.district = siPerson.homeBarangay;
        eappPerson.addresses.homeAddress.cityCode = siPerson.homeCityCode;
        eappPerson.addresses.homeAddress.state = siPerson.homeProvinceCode;
        eappPerson.addresses.homeAddress.zipCode = siPerson.homeZipCode;
        eappPerson.addresses.homeAddress.countryCode = siPerson.homeCountryCode;
        eappPerson.addresses.homeAddress.type = "HOME";

        eappPerson.addresses.workAddress.buildingName = siPerson.workUnitBuilding;
        eappPerson.addresses.workAddress.streetNumber = siPerson.workLotBlock;
        eappPerson.addresses.workAddress.street = siPerson.workStreet;
        eappPerson.addresses.workAddress.district = siPerson.workBarangay;
        eappPerson.addresses.workAddress.cityCode = siPerson.workCityCode;
        eappPerson.addresses.workAddress.state = siPerson.workProvinceCode;
        eappPerson.addresses.workAddress.zipCode = siPerson.workZipCode;
        eappPerson.addresses.workAddress.countryCode = siPerson.workCountryCode;
        eappPerson.addresses.workAddress.type = "WORK";
      }
    }

    return eappPerson;
  }

  async buildEappFundDetails(eappId, siId) {
    let listOfFundDetails: FundDetails[] = []
    const eappFundDetails = await this.eappDbService.getEappFundDetailsById(eappId);
    const siFundDetails = await this.salesIllustrationDbService.getAllFundsById(siId);
    if (siFundDetails) {
      if (siFundDetails.length > 0) {
        for (let i = 0; i < siFundDetails.length; i++) {
          eappFundDetails.map(async fund => {
            if (siFundDetails[i].fundKey == fund.fundKey) {
              const fundDetails = new FundDetails();
              fundDetails.self = fund.fundKey;
              fundDetails.specificFund = new SpecificFund();
              fundDetails.specificFund.topUpPercentage = fund.topUpDirection != null ? fund.topUpDirection : "0";
              let percentage = Math.trunc(siFundDetails[i].fundDirection * 100);
              fundDetails.specificFund.percentage = percentage != null ? percentage : "0";
              listOfFundDetails.push(fundDetails);
            }
          });
        }
      }
      return listOfFundDetails;
    }
  }

  async buildEappReplacementNotifQuestions(eappId) {
    const questions = await this.eappDbService.getEappReplacementNotifById(eappId);
    let PREPEXSTPL02: any;
    if (questions.length > 0) {
      PREPEXSTPL02 = new ReplacementNotifAnswers();
      for (let questionNumber = 0; questionNumber < questions.length; questionNumber++) {
        switch (questionNumber) {
          case 0:
            PREPEXSTPL02.PREPEXSTPL02_1A = questions[questionNumber].company;
            PREPEXSTPL02.PREPEXSTPL02_1B = questions[questionNumber].policyNo;
            PREPEXSTPL02.PREPEXSTPL02_1C = questions[questionNumber].amountInsuranceReplacedCurrency;
            PREPEXSTPL02.PREPEXSTPL02_1D = questions[questionNumber].amountInsuranceReplaced;
            PREPEXSTPL02.PREPEXSTPL02_1E = questions[questionNumber].afcInsured;
            break;
          case 1:
            PREPEXSTPL02.PREPEXSTPL02_2A = questions[questionNumber].company;
            PREPEXSTPL02.PREPEXSTPL02_2B = questions[questionNumber].policyNo;
            PREPEXSTPL02.PREPEXSTPL02_2C = questions[questionNumber].amountInsuranceReplacedCurrency;
            PREPEXSTPL02.PREPEXSTPL02_2D = questions[questionNumber].amountInsuranceReplaced;
            PREPEXSTPL02.PREPEXSTPL02_2E = questions[questionNumber].afcInsured;
            break;
          case 2:
            PREPEXSTPL02.PREPEXSTPL02_3A = questions[questionNumber].company;
            PREPEXSTPL02.PREPEXSTPL02_3B = questions[questionNumber].policyNo;
            PREPEXSTPL02.PREPEXSTPL02_3C = questions[questionNumber].amountInsuranceReplacedCurrency;
            PREPEXSTPL02.PREPEXSTPL02_3D = questions[questionNumber].amountInsuranceReplaced;
            PREPEXSTPL02.PREPEXSTPL02_3E = questions[questionNumber].afcInsured;
            break;
          case 3:
            PREPEXSTPL02.PREPEXSTPL02_4A = questions[questionNumber].company;
            PREPEXSTPL02.PREPEXSTPL02_4B = questions[questionNumber].policyNo;
            PREPEXSTPL02.PREPEXSTPL02_4C = questions[questionNumber].amountInsuranceReplacedCurrency;
            PREPEXSTPL02.PREPEXSTPL02_4D = questions[questionNumber].amountInsuranceReplaced;
            PREPEXSTPL02.PREPEXSTPL02_4E = questions[questionNumber].afcInsured;
            break;
          case 4:
            PREPEXSTPL02.PREPEXSTPL02_5A = questions[questionNumber].company;
            PREPEXSTPL02.PREPEXSTPL02_5B = questions[questionNumber].policyNo;
            PREPEXSTPL02.PREPEXSTPL02_5C = questions[questionNumber].amountInsuranceReplacedCurrency;
            PREPEXSTPL02.PREPEXSTPL02_5D = questions[questionNumber].amountInsuranceReplaced;
            PREPEXSTPL02.PREPEXSTPL02_5E = questions[questionNumber].afcInsured;
            break;
          default:
            break;
        }
      }
    }
    if (_.isEmpty(PREPEXSTPL02)) {
      PREPEXSTPL02 = null
    }
    return PREPEXSTPL02;
  }

  async buildEappVesselQuestions(id) {
    let questions;

    questions = await this.eappDbService.getEappVesselEappNonMedById(id);

    let OCCPMRCMAR04: VesselOperationAnswers;
    if (questions.length > 0) {
      OCCPMRCMAR04 = new VesselOperationAnswers();

      for (let questionNumber = 0; questionNumber < questions.length; questionNumber++) {
        switch (questionNumber) {
          case 0:
            OCCPMRCMAR04.OCCPMRCMAR04_1A = questions[questionNumber].water;
            OCCPMRCMAR04.OCCPMRCMAR04_1B = questions[questionNumber].port;
            break;
          case 1:
            OCCPMRCMAR04.OCCPMRCMAR04_2A = questions[questionNumber].water;
            OCCPMRCMAR04.OCCPMRCMAR04_2B = questions[questionNumber].port;
            break;
          case 2:
            OCCPMRCMAR04.OCCPMRCMAR04_3A = questions[questionNumber].water;
            OCCPMRCMAR04.OCCPMRCMAR04_3B = questions[questionNumber].port;
            break;
          default:
            break;
        }
      }
    }

    if (_.isEmpty(OCCPMRCMAR04)) {
      OCCPMRCMAR04 = {};
    }

    return OCCPMRCMAR04;
  }

  async buildInsuranceInforcedQuestions(eappId) {
    const questions = await this.eappDbService.getEappInsuranceInforceById(eappId);
    let PREPINSINF01: any;
    let yearOfIssue: any;
    if (questions.length > 0) {
      PREPINSINF01 = new TotalInforcedInsuranceAnswer();
      for (let questionNumber = 0; questionNumber < questions.length; questionNumber++) {
        if (questions[questionNumber].yearOfIssue != null) {
          yearOfIssue = new Date(questions[questionNumber].yearOfIssue).getFullYear();
        }

        switch (questionNumber) {
          case 0:
            PREPINSINF01.PREPINSINF01_1A = questions[questionNumber].company;
            PREPINSINF01.PREPINSINF01_1B = questions[questionNumber].basicLifeCurrency;
            PREPINSINF01.PREPINSINF01_1C = questions[questionNumber].basicLife;
            PREPINSINF01.PREPINSINF01_1D = questions[questionNumber].accidentCurrency;
            PREPINSINF01.PREPINSINF01_1E = questions[questionNumber].accident;
            PREPINSINF01.PREPINSINF01_1F = yearOfIssue;
            break;
          case 1:
            PREPINSINF01.PREPINSINF01_2A = questions[questionNumber].company;
            PREPINSINF01.PREPINSINF01_2B = questions[questionNumber].basicLifeCurrency;
            PREPINSINF01.PREPINSINF01_2C = questions[questionNumber].basicLife;
            PREPINSINF01.PREPINSINF01_2D = questions[questionNumber].accidentCurrency;
            PREPINSINF01.PREPINSINF01_2E = questions[questionNumber].accident;
            PREPINSINF01.PREPINSINF01_2F = yearOfIssue;
            break;
          case 2:
            PREPINSINF01.PREPINSINF01_3A = questions[questionNumber].company;
            PREPINSINF01.PREPINSINF01_3B = questions[questionNumber].basicLifeCurrency;
            PREPINSINF01.PREPINSINF01_3C = questions[questionNumber].basicLife;
            PREPINSINF01.PREPINSINF01_3D = questions[questionNumber].accidentCurrency;
            PREPINSINF01.PREPINSINF01_3E = questions[questionNumber].accident;
            PREPINSINF01.PREPINSINF01_3F = yearOfIssue;
            break;
          case 3:
            PREPINSINF01.PREPINSINF01_4A = questions[questionNumber].company;
            PREPINSINF01.PREPINSINF01_4B = questions[questionNumber].basicLifeCurrency;
            PREPINSINF01.PREPINSINF01_4C = questions[questionNumber].basicLife;
            PREPINSINF01.PREPINSINF01_4D = questions[questionNumber].accidentCurrency;
            PREPINSINF01.PREPINSINF01_4E = questions[questionNumber].accident;
            PREPINSINF01.PREPINSINF01_4F = yearOfIssue;
            break;
          default:
            break;
        }
      }
    }

    if (_.isEmpty(PREPINSINF01)) {
      PREPINSINF01 = null;
    }

    return PREPINSINF01;
  }

  async buildEappAlcoholDoctorQuestions(nonMedId) {
    const questions = await this.eappDbService.getEAPPAlcoholDoctorsById(nonMedId);
    let NMEDALCHOL08: any;
    if (questions.length > 0) {
      NMEDALCHOL08 = new AlcoholDoctorAnswers();
      for (let questionNumber = 0; questionNumber < questions.length; questionNumber++) {
        switch (questionNumber) {
          case 0:
            NMEDALCHOL08.NMEDALCHOL08_1A = questions[questionNumber].name;
            NMEDALCHOL08.NMEDALCHOL08_1B = questions[questionNumber].address;
            NMEDALCHOL08.NMEDALCHOL08_1C = questions[questionNumber].dateOfConsultation;
            break;
          case 1:
            NMEDALCHOL08.NMEDALCHOL08_2A = questions[questionNumber].name;
            NMEDALCHOL08.NMEDALCHOL08_2B = questions[questionNumber].address;
            NMEDALCHOL08.NMEDALCHOL08_2C = questions[questionNumber].dateOfConsultation;
            break;
          case 2:
            NMEDALCHOL08.NMEDALCHOL08_3A = questions[questionNumber].name;
            NMEDALCHOL08.NMEDALCHOL08_3B = questions[questionNumber].address;
            NMEDALCHOL08.NMEDALCHOL08_3C = questions[questionNumber].dateOfConsultation;
            break;
          case 3:
            NMEDALCHOL08.NMEDALCHOL08_4A = questions[questionNumber].name;
            NMEDALCHOL08.NMEDALCHOL08_4B = questions[questionNumber].address;
            NMEDALCHOL08.NMEDALCHOL08_4C = questions[questionNumber].dateOfConsultation;
            break;
          case 4:
            NMEDALCHOL08.NMEDALCHOL08_5A = questions[questionNumber].name
            NMEDALCHOL08.NMEDALCHOL08_5B = questions[questionNumber].address;
            NMEDALCHOL08.NMEDALCHOL08_5C = questions[questionNumber].dateOfConsultation;
          default:
            break;
        }
      }
    }

    if (_.isEmpty(NMEDALCHOL08)) {
      NMEDALCHOL08 = null;
    }

    return NMEDALCHOL08;
  }

  async buildEappDetoxDoctorQuestions(nonMedId) {
    const questions = await this.eappDbService.getEAPPDetoxDoctorsById(nonMedId);
    let NMEDHBTFRM04: any;
    if (questions.length > 0) {
      NMEDHBTFRM04 = new DetoxDoctorAnswers();
      for (let questionNumber = 0; questionNumber < questions.length; questionNumber++) {
        switch (questionNumber) {
          case 0:
            NMEDHBTFRM04.NMEDHBTFRM04_1 = questions[questionNumber].name;
            break;
          case 1:
            NMEDHBTFRM04.NMEDHBTFRM04_2 = questions[questionNumber].name;
            break;
          default:
            break;
        }
      }
    }

    if (_.isEmpty(NMEDHBTFRM04)) {
      NMEDHBTFRM04 = null;
    }
    return NMEDHBTFRM04;
  }

  async buildEappTravelResidenceQuestions(nonMedId) {
    const questions = await this.eappDbService.getEAPPTravelResidenceById(nonMedId);
    let OCCP00000006: any;
    if (questions.length > 0) {
      OCCP00000006 = new TravelResidenceAnswers();
      for (let questionNumber = 0; questionNumber < questions.length; questionNumber++) {
        switch (questionNumber) {
          case 0:
            OCCP00000006.OCCP00000006_1A = questions[questionNumber].country;
            OCCP00000006.OCCP00000006_1B = this.util.convertDate(questions[questionNumber].plannedStartDate);
            OCCP00000006.OCCP00000006_1C = this.util.convertDate(questions[questionNumber].plannedEndDate);
            OCCP00000006.OCCP00000006_1D = questions[questionNumber].city;
            break;
          case 1:
            OCCP00000006.OCCP00000006_2A = questions[questionNumber].country;
            OCCP00000006.OCCP00000006_2B = this.util.convertDate(questions[questionNumber].plannedStartDate);
            OCCP00000006.OCCP00000006_2C = this.util.convertDate(questions[questionNumber].plannedEndDate);
            OCCP00000006.OCCP00000006_2D = questions[questionNumber].city;
            break;
          case 2:
            OCCP00000006.OCCP00000006_3A = questions[questionNumber].country;
            OCCP00000006.OCCP00000006_3B = this.util.convertDate(questions[questionNumber].plannedEndDate);
            OCCP00000006.OCCP00000006_3C = this.util.convertDate(questions[questionNumber].plannedEndDate);
            OCCP00000006.OCCP00000006_3D = questions[questionNumber].city;
            break;
          default:
            break;
        }
      }
    }
    if (_.isEmpty(OCCP00000006)) {
      OCCP00000006 = null;
    }

    return OCCP00000006;
  }

  async buildEappMainQuestion(eappId, siId) {
    let question = {};
    let PREP = {};
    let LFIN = {};
    let OCCP = {};
    const attachedSI = await this.salesIllustrationDbService.getSalesIllustrationMain(siId);
    const PREPEXSTPL02 = await this.buildEappReplacementNotifQuestions(eappId);
    const PREPINSINF01 = await this.buildInsuranceInforcedQuestions(eappId);
    const main = await this.eappDbService.getEappMainById(eappId);
    if (PREPEXSTPL02 != null) {
      PREP['PREPEXSTPL02'] = PREPEXSTPL02;
    }
    if (PREPINSINF01 != null) {
      PREP['PREPINSINF01'] = PREPINSINF01;
    }

    if (main != null) {
      let PREP00000001: any = {};
      let PREPEXSTPL01: any = {};
      let PREP00000002: any = {};
      let PREP00000003: any = {};
      let LFIN00000003: any = {};
      let LFIN00000007: any = {};



      LFIN['LFIN00000003'] = LFIN00000003;
      LFIN['LFIN00000007'] = LFIN00000007;
      PREP['PREP00000001'] = PREP00000001;
      PREP['PREPEXSTPL01'] = PREPEXSTPL01;
      PREP['PREP00000002'] = PREP00000002;
      PREP['PREP00000003'] = PREP00000003;

      if (main.policyIntentedToChange != null) {
        PREP00000001.PREP00000001_1 = main.policyIntentedToChange;
      }
      if (main.premiumsPaidByLoad != null) {
        PREPEXSTPL01.PREPEXSTPL01_1 = main.premiumsPaidByLoad;
      }
      if (main.interPolicyIntentedToChange != null) {
        PREP00000002.PREP00000002_1 = main.interPolicyIntentedToChange;
      }
      if (main.interPremiumsPaidByLoad != null) {
        PREP00000003.PREP00000003_1 = main.interPremiumsPaidByLoad;
      }
      if (attachedSI != null) {
        LFIN00000003.LFIN00000003_1 = attachedSI.currency;
        LFIN00000007.LFIN00000007_1 = attachedSI.currency;
      } else {
        LFIN00000003.LFIN00000003_1 = CONSTANTS_STRING.PESO;
        LFIN00000007.LFIN00000007_1 = CONSTANTS_STRING.PESO;
      }

    }
    if (PREP != null && !(_.isEmpty(PREP))) {
      question['PREP'] = PREP;
    }
    if (PREP != null && !(_.isEmpty(LFIN))) {
      question['LFIN'] = LFIN;
    }
    if (PREP != null && !(_.isEmpty(OCCP))) {
      question['OCCP'] = OCCP;
    }

    if (_.isEmpty(question)) {
      question = null;
    }

    return question;
  }

  async buildSIQuestionDeclaration() {
    let siQuestion: any;
    let answerObject1: any;
    let answerObject2: any;

    const eazy = 'EAZY';
    siQuestion = {};

    answerObject1 = { 'EAZYDECL0101_1': 'N' }
    answerObject2 = { 'EAZYDECL0102_1': 'N' }
    siQuestion[eazy] = { 'EAZYDECL0101': answerObject1, 'EAZYDECL0102': answerObject2 };

    return siQuestion;
  }

  async buildBeneficiaryQuestion(questions, questionCode) {
    let beneficiaryQuestion: any;

    if (questions != null && questionCode != null) {
      let beneAnswers: any = _.find(EAPP_QUESTION.BENEFICIARY_ANSWERS, { 'questionCode': questionCode })
      let answerObject1: any;
      let answerObject2: any;
      let answerObject3: any;
      let answerObject4: any;
      if (beneAnswers != null) {
        for (let answerNumber = 0; answerNumber < beneAnswers.answerCodes.length; answerNumber++) {
          if (answerNumber == 0) {
            const answerCode = beneAnswers.answerCodes[answerNumber];
            answerObject1 = {};
            answerObject1[answerCode] = questions.declaration1 === 'true';
          } else if (answerNumber == 1) {
            const answerCode = beneAnswers.answerCodes[answerNumber];
            answerObject2 = {};
            answerObject2[answerCode] = questions.declaration2 === 'true';
          } else if (answerNumber == 2) {
            const answerCode = beneAnswers.answerCodes[answerNumber];
            answerObject3 = {};
            answerObject3[answerCode] = questions.declaration3 === 'true';
          } else if (answerNumber == 3) {
            const answerCode = beneAnswers.answerCodes[answerNumber];
            answerObject4 = {};
            answerObject4[answerCode] = questions.declaration4 === 'true';
          }
        }
      }

      const benf = 'BENF';
      beneficiaryQuestion = {};
      beneficiaryQuestion[benf] = { 'BENFDCLRTN01': answerObject1, 'BENFDCLRTN02': answerObject2, 'BENFDCLRTN03': answerObject3, 'BENFDCLRTN04': answerObject4 };
    }

    return beneficiaryQuestion;
  }

  async buildPersonQuestions(nonMedId: any, siblingQuestion, eappPerson) {

    let personQuestion: any;
    let nonMedQuestion = nonMedId ? await this.eappDbService.getEappNonMedAnswersById(nonMedId) : [];
    let [NMED, NMEDFTDECL01, NMEDMTDECL01, NMEDHBTFRM02, NMEDGSSTMP01, NMED00000006,
      NMED00000007, NMED00000008, NMED00000009, NMED00000010, NMED00000011, NMED00000012,
      NMED00000013, NMED00000014, NMED00000015, NMED00000016, NMED00000017, NMED00000018,
      NMED00000019, NMED00000022, NMED00000023, NMED00000024,
      NMEDLRPLTB08, NMEDDTGRVD06, NMEDDTTYRD06, NMEDDTHPTR06, NMEDDTHPOR06,
      NMEDDTTXGT06, NMEDGSGSTR06, NMEDGSULCR06, NMEDGSGERD06, NMEDGSDYSP06, NMEDGSESPR06,
      NMEDFMHS0101, NMEDFMHS0102, NMEDFMHS0103, NMEDFMHS0104, NMEDFMHS0105, NMEDFMHS0106] =
      [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {},
      {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}]

    let [OCCP, OCCP00000002, OCCP00000009, OCCPILLNES03, OCCPMNTAIN01, OCCPPWRBTR01, OCCP00000012] =
      [{}, {}, {}, {}, {}, {}, {}]

    let OCCPARMFRC01, OCCPAVITON01, OCCPARMFRC02, OCCPAVITON02, OCCPAVITON03,
      OCCPMRCMAR01, OCCPMRCMAR02, OCCPMRCMAR03, OCCPFISIND01, OCCPMARIND04;


    if (nonMedQuestion.length > 0) {
      nonMedQuestion.map(async nonMed => {
        let answerCode = this.util.getKeyByValue(nonMed.questionId);
        if (answerCode != null) {
          switch (answerCode) {
            //NONMED QUESTION IN NONMED_ANSWERS
            case answerCode.startsWith('NMED') ? answerCode : '':

              switch (answerCode) {
                case answerCode.startsWith('NMEDFTDECL01_') ? answerCode : '':
                  NMEDFTDECL01[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDMTDECL01') ? answerCode : '':
                  NMEDMTDECL01[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDHBTFRM02_') ? answerCode : '':
                  NMEDHBTFRM02[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDGSSTMP01_') ? answerCode : '':
                  NMEDGSSTMP01[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000006_') ? answerCode : '':
                  NMED00000006[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000007_') ? answerCode : '':
                  NMED00000007[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000008_') ? answerCode : '':
                  NMED00000008[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000009_') ? answerCode : '':
                  NMED00000009[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000010_') ? answerCode : '':
                  NMED00000010[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000011_') ? answerCode : '':
                  NMED00000011[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000012_') ? answerCode : '':
                  NMED00000012[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000013_') ? answerCode : '':
                  NMED00000013[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000014_') ? answerCode : '':
                  NMED00000014[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000015_') ? answerCode : '':
                  NMED00000015[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000016_') ? answerCode : '':
                  NMED00000016[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000017_') ? answerCode : '':
                  NMED00000017[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000018_') ? answerCode : '':
                  NMED00000018[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000019_') ? answerCode : '':
                  NMED00000019[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000006_12') ? answerCode : '': //special case: cancer, parent { child question }
                  NMED00000022[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break
                case answerCode.startsWith('NMED00000023_') ? answerCode : '': //Question 2 Other Defect Value
                  NMED00000023[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000006_14') ? answerCode : '': //special case: other defect, parent { child question }
                  NMED00000023[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMED00000024_') ? answerCode : '': //medConditions
                  if (!Array.isArray(nonMed.answerValue)) {
                    NMED00000024[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  }
                  break;
                case answerCode.startsWith('NMED00000006_') ? answerCode : '': //special case: Dyslipidemia, parent { child question }
                  NMED00000006[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDLRPLTB08') ? answerCode : '':
                  NMEDLRPLTB08[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDDTGRVD06') ? answerCode : '':
                  NMEDDTGRVD06[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDDTTYRD06') ? answerCode : '':
                  NMEDDTTYRD06[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDDTHPTR06') ? answerCode : '':
                  NMEDDTHPTR06[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDDTHPOR06') ? answerCode : '':
                  NMEDDTHPOR06[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDDTTXGT06') ? answerCode : '':
                  NMEDDTTXGT06[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDGSGSTR06') ? answerCode : '':
                  NMEDGSGSTR06[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDGSULCR06') ? answerCode : '':
                  NMEDGSULCR06[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDGSGERD06') ? answerCode : '':
                  NMEDGSGERD06[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDGSDYSP06') ? answerCode : '':
                  NMEDGSDYSP06[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDGSESPR06') ? answerCode : '':
                  NMEDGSESPR06[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDFMHS0101') ? answerCode : '':
                  NMEDFMHS0101[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDFMHS0102') ? answerCode : '':
                  NMEDFMHS0102[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDFMHS0103') ? answerCode : '':
                  NMEDFMHS0103[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDFMHS0104') ? answerCode : '':
                  NMEDFMHS0104[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDFMHS0105') ? answerCode : '':
                  NMEDFMHS0105[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('NMEDFMHS0106') ? answerCode : '':
                  NMEDFMHS0106[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                default:
                  const questionCode = this.util.getQuestionCode(answerCode);
                  let answerObject = {};
                  answerObject[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  NMED[questionCode] = answerObject;
              }
              break;

            //OCCP QUESTIONS IN NONMED_ANSWERS
            case answerCode.startsWith('OCCP') ? answerCode : '':
              switch (answerCode) {
                case answerCode.startsWith('OCCP00000002_') ? answerCode : '':
                  OCCP00000002[answerCode] = this.util.setAnswerValue(nonMed.answerValue)
                  break;
                case answerCode.startsWith('OCCP00000009_') ? answerCode : '':
                  OCCP00000009[answerCode] = this.util.setAnswerValue(nonMed.answerValue)
                  break;
                case answerCode.startsWith('OCCPILLNES03_') ? answerCode : '':
                  OCCPILLNES03[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('OCCPMNTAIN01_') ? answerCode : '':
                  OCCPMNTAIN01[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('OCCPPWRBTR01_') ? answerCode : '':
                  OCCPPWRBTR01[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('OCCP00000012_') ? answerCode : '':
                  OCCP00000012[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                case answerCode.startsWith('OCCPMARIND04_') ? answerCode : '':
                  OCCPMARIND04 = {};
                  OCCPMARIND04[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  break;
                default:
                  const questionCode = this.util.getQuestionCode(answerCode);
                  let answerObject = {};
                  answerObject[answerCode] = this.util.setAnswerValue(nonMed.answerValue);
                  OCCP[questionCode] = answerObject;
              }
              break;
          }
        }
      });
    }


    //SETS GROUPED ANSWERS TO MAIN OBJECT
    NMED['NMEDMTDECL01'] = NMEDMTDECL01;
    NMED['NMEDFTDECL01'] = NMEDFTDECL01;
    NMED['NMEDHBTFRM02'] = NMEDHBTFRM02;
    NMED['NMEDGSSTMP01'] = NMEDGSSTMP01;
    NMED['NMED00000006'] = NMED00000006;
    NMED['NMED00000007'] = NMED00000007;
    NMED['NMED00000008'] = NMED00000008;
    NMED['NMED00000009'] = NMED00000009;
    NMED['NMED00000010'] = NMED00000010;
    NMED['NMED00000011'] = NMED00000011;
    NMED['NMED00000012'] = NMED00000012;
    NMED['NMED00000013'] = NMED00000013;
    NMED['NMED00000014'] = NMED00000014;
    NMED['NMED00000015'] = NMED00000015;
    NMED['NMED00000016'] = NMED00000016;
    NMED['NMED00000017'] = NMED00000017;
    NMED['NMED00000018'] = NMED00000018;
    NMED['NMED00000019'] = NMED00000019;
    NMED['NMED00000022'] = NMED00000022;
    NMED['NMED00000023'] = NMED00000023;
    NMED['NMED00000024'] = NMED00000024;
    NMED['NMEDLRPLTB08'] = NMEDLRPLTB08;
    NMED['NMEDDTTYRD06'] = NMEDDTTYRD06;
    NMED['NMEDDTGRVD06'] = NMEDDTGRVD06;
    NMED['NMEDDTHPTR06'] = NMEDDTHPTR06;
    NMED['NMEDDTHPOR06'] = NMEDDTHPOR06;
    NMED['NMEDDTTXGT06'] = NMEDDTTXGT06;
    NMED['NMEDGSGSTR06'] = NMEDGSGSTR06;
    NMED['NMEDGSULCR06'] = NMEDGSULCR06;
    NMED['NMEDGSGERD06'] = NMEDGSGERD06;
    NMED['NMEDGSDYSP06'] = NMEDGSDYSP06;
    NMED['NMEDGSESPR06'] = NMEDGSESPR06;
    NMED['NMEDFMHS0101'] = NMEDFMHS0101;
    NMED['NMEDFMHS0102'] = NMEDFMHS0102;
    NMED['NMEDFMHS0103'] = NMEDFMHS0103;
    NMED['NMEDFMHS0104'] = NMEDFMHS0104;
    NMED['NMEDFMHS0105'] = NMEDFMHS0105;
    NMED['NMEDFMHS0106'] = NMEDFMHS0106;
    OCCP['OCCP00000002'] = OCCP00000002;
    OCCP['OCCP00000009'] = OCCP00000009;
    OCCP['OCCPILLNES03'] = OCCPILLNES03;
    OCCP['OCCPMNTAIN01'] = OCCPMNTAIN01;
    OCCP['OCCPPWRBTR01'] = OCCPPWRBTR01;
    OCCP['OCCP00000012'] = OCCP00000012;
    OCCP['OCCPARMFRC01'] = OCCPARMFRC01;
    OCCP['OCCPARMFRC02'] = OCCPARMFRC02;
    OCCP['OCCPAVITON01'] = OCCPAVITON01;
    OCCP['OCCPAVITON02'] = OCCPAVITON02;
    OCCP['OCCPAVITON03'] = OCCPAVITON03;
    OCCP['OCCPMRCMAR03'] = OCCPMRCMAR03;
    OCCP['OCCPMRCMAR02'] = OCCPMRCMAR02;
    OCCP['OCCPMRCMAR01'] = OCCPMRCMAR01;
    OCCP['OCCPFISIND01'] = OCCPFISIND01;
    OCCP['OCCPMARIND04'] = OCCPMARIND04;

    const OCCP00000006 = nonMedId ? await this.buildEappTravelResidenceQuestions(nonMedId): null;
    const NMEDALCHOL08 = nonMedId ? await this.buildEappAlcoholDoctorQuestions(nonMedId) : null;
    const OCCPMRCMAR04 = nonMedId ? await this.buildEappVesselQuestions(nonMedId) : null;
    const NMEDHBTFRM04 = nonMedId ? await this.buildEappDetoxDoctorQuestions(nonMedId): null;

    if (siblingQuestion != null) {
      NMED['NMEDSBDECL01'] = siblingQuestion;
    }
    if (NMEDHBTFRM04 != null) {
      NMED['NMEDHBTFRM04'] = NMEDHBTFRM04;
    }
    if (NMEDALCHOL08 != null) {
      NMED['NMEDALCHOL08'] = NMEDALCHOL08;
    }
    if (OCCP00000006 != null) {
      OCCP['OCCP00000006'] = OCCP00000006;
    }
    if (OCCPMRCMAR04 != null) {
      OCCP['OCCPMRCMAR04'] = OCCPMRCMAR04;
    }

    personQuestion = {
      NMED,
      OCCP
    }

    return personQuestion

  }

  async showResponse(response: any): Promise<void> {
    const modal = await this.modalController.create({
      component: MessageModal,
      componentProps: {
        response: response
      }
    })
    return await modal.present();
  }

  public async updateEappStatus(eappId: string): Promise<any> {
    await this.databaseService.updateTableData(
      'EAPP_Main',
      ['eappStatus'],
      [STATUS.SUBMITTED],
      [{ fieldName: 'eappId', operation: 'equal', compareValue: eappId }]);
  }

  async buildSiblingsQuestion(questions) {
    let NMEDSBDECL01: any;
    if (questions.length > 0) {
      NMEDSBDECL01 = new SiblingAnswers();
      for (let questionNumber = 0; questionNumber < questions.length; questionNumber++) {
        switch (questionNumber) {
          case 0:
            NMEDSBDECL01.NMEDSBDECL01_1A = this.util.setAnswerValue(questions[questionNumber].hasCancer) == true;
            NMEDSBDECL01.NMEDSBDECL01_1B = this.util.setAnswerValue(questions[questionNumber].hasCoronary) == true;
            NMEDSBDECL01.NMEDSBDECL01_1C = this.util.setAnswerValue(questions[questionNumber].hasCardiovascular) == true;
            NMEDSBDECL01.NMEDSBDECL01_1D = this.util.setAnswerValue(questions[questionNumber].hasAlzheimers) == true;
            NMEDSBDECL01.NMEDSBDECL01_1E = questions[questionNumber].firstName;
            NMEDSBDECL01.NMEDSBDECL01_1F = questions[questionNumber].age;
            break;
          case 1:
            NMEDSBDECL01.NMEDSBDECL01_2A = this.util.setAnswerValue(questions[questionNumber].hasCancer) == true;
            NMEDSBDECL01.NMEDSBDECL01_2B = this.util.setAnswerValue(questions[questionNumber].hasCoronary) == true;
            NMEDSBDECL01.NMEDSBDECL01_2C = this.util.setAnswerValue(questions[questionNumber].hasCardiovascular) == true;
            NMEDSBDECL01.NMEDSBDECL01_2D = this.util.setAnswerValue(questions[questionNumber].hasAlzheimers) == true;
            NMEDSBDECL01.NMEDSBDECL01_2E = questions[questionNumber].firstName;
            NMEDSBDECL01.NMEDSBDECL01_2F = questions[questionNumber].age;

            break;
          case 2:
            NMEDSBDECL01.NMEDSBDECL01_3A = this.util.setAnswerValue(questions[questionNumber].hasCancer) == true;
            NMEDSBDECL01.NMEDSBDECL01_3B = this.util.setAnswerValue(questions[questionNumber].hasCoronary) == true;
            NMEDSBDECL01.NMEDSBDECL01_3C = this.util.setAnswerValue(questions[questionNumber].hasCardiovascular) == true;
            NMEDSBDECL01.NMEDSBDECL01_3D = this.util.setAnswerValue(questions[questionNumber].hasAlzheimers) == true;
            NMEDSBDECL01.NMEDSBDECL01_3E = questions[questionNumber].firstName;
            NMEDSBDECL01.NMEDSBDECL01_3F = questions[questionNumber].age;
            break;
          default:
            break;
        }
      }
    }
    if (_.isEmpty(NMEDSBDECL01)) {
      NMEDSBDECL01 = null
    }
    return NMEDSBDECL01;

  }

  async buildBeneficialOwner(eappId, siId) {
    let owners: any;
    const beneOwners = await this.eappDbService.getBeneficialOwnersByEappId(eappId);
    const attachedSI = await this.salesIllustrationDbService.getSalesIllustrationMain(siId);

    let beneficialOwner: any;
    if (beneOwners != null && beneOwners.length > 0) {
      owners = [];
      beneOwners.map(beneOwner => {
        beneficialOwner = new Person();

        beneficialOwner.gender = beneOwner.gender;
        beneficialOwner.monthlyIncome = null;
        beneficialOwner.employer = beneOwner.employer;
        beneficialOwner.occupation = beneOwner.occupationCode.concat('.', beneOwner.occupationGrpCode);

        if (!!beneOwner.vesselType) {
          beneficialOwner.occupation = beneficialOwner.occupation + '.' + beneOwner.vesselType;
        }
        beneficialOwner.occupationTitle = beneOwner.occupationTitle
        beneficialOwner.employerBranch = beneOwner.occupationCode;
        beneficialOwner.annualIncome = beneOwner.annualIncome;
        beneficialOwner.name = beneOwner.lastName;
        beneficialOwner.firstName = beneOwner.firstName;
        beneficialOwner.middleName = beneOwner.middleName;
        beneficialOwner.birthDate = this.util.convertDate(beneOwner.dateOfBirth);

        if (attachedSI != null) {
          beneficialOwner.annualIncomeCurrency = attachedSI.currency;
        }
        beneficialOwner.cityOfBirth = beneOwner.pobCityCode;
        beneficialOwner.birthPlaceRegion = beneOwner.pobProvinceCode;
        beneficialOwner.nativeCountry = beneOwner.pobCountryCode;
        beneficialOwner.nationality = beneOwner.nationality;
        beneficialOwner.ownershipPercentage = beneOwner.ownershipPercent;

        beneficialOwner.preferredContactChannels = new PreferredContactChannels()
        beneficialOwner.preferredContactChannels.phoneNumber = beneOwner.contactNumber
        beneficialOwner.preferredContactChannels.email = beneOwner.email

        beneficialOwner.addresses = new Addresses;
        beneficialOwner.addresses.homeAddress = new HomeAddress;
        beneficialOwner.addresses.workAddress = new WorkAddress;
        beneficialOwner.addresses.homeAddress.buildingName = beneOwner.presentBuildingName;
        beneficialOwner.addresses.homeAddress.streetNumber = this.util.trimString(beneOwner.presentBlockNumber, CONSTANTS_STRING.BLOCK_MAXCHAR);
        beneficialOwner.addresses.homeAddress.street = beneOwner.presentStreet;
        beneficialOwner.addresses.homeAddress.district = beneOwner.presentSubdivision;
        beneficialOwner.addresses.homeAddress.cityCode = beneOwner.presentCityCode;
        beneficialOwner.addresses.homeAddress.state = beneOwner.presentProvinceCode;
        beneficialOwner.addresses.homeAddress.zipCode = beneOwner.presentZipCode;
        beneficialOwner.addresses.homeAddress.countryCode = beneOwner.presentCountryCode;
        beneficialOwner.addresses.homeAddress.type = "HOME";

        beneficialOwner.addresses.workAddress.buildingName = beneOwner.workBuildingName;
        beneficialOwner.addresses.workAddress.streetNumber = this.util.trimString(beneOwner.workBlockNumber, CONSTANTS_STRING.BLOCK_MAXCHAR);
        beneficialOwner.addresses.workAddress.street = beneOwner.workStreet;
        beneficialOwner.addresses.workAddress.district = beneOwner.workSubdivision;
        beneficialOwner.addresses.workAddress.cityCode = beneOwner.workCityCode;
        beneficialOwner.addresses.workAddress.state = beneOwner.workProvinceCode;
        beneficialOwner.addresses.workAddress.zipCode = beneOwner.workZipCode;
        beneficialOwner.addresses.workAddress.countryCode = beneOwner.workCountryCode;
        beneficialOwner.addresses.workAddress.type = "WORK";
        owners.push(beneficialOwner);
      });

    }

    return owners;
  }

  async singleSubmissionHSBC(leadId: string) {
    let lead, needAnalysis, irpq, salesIllustration, eApplication;
    if (leadId) {
      lead = await this.leadsDeltaSync(leadId);
      if (lead && lead.syncStatus == SYNC_STATUS.SYNC_SUCCESS_2) {
        salesIllustration = await this.siDeltaSyncHSBC(leadId);
        if (salesIllustration != null && salesIllustration.length > 0) {
          const successSiIds = this.getSyncedModules(salesIllustration);
          //console.log("successSiIds: " + successSiIds);
          if (successSiIds != null && successSiIds.length > 0) {
            eApplication = await this.eappDeltaSync(leadId);
          }
        }
      }
      return await this.buildResponse(lead, needAnalysis, irpq, salesIllustration, eApplication, leadId);
    }
  }

  /**
   * Singles submission
   * @param leadIdSubject
   * @returns submission status in array
   */
  singleSubmission(leadIdSubject: BehaviorSubject<any>): Observable<any> {
    let lead, needAnalysis, irpq, salesIllustration, eApplication, processedModules;
    let syncModules: Subject<any> = new Subject();
    leadIdSubject.pipe(filter(leadId => typeof leadId == 'string'))
      .subscribe(async leadId => {
        if (leadId) {

          const checkIndexLead = this.currentProgressId.indexOf(leadId);
          if(checkIndexLead > -1) {
            this.logSync(processedModules);
            syncModules.next(processedModules);
            return syncModules.asObservable();
            //already in progress
          } else {
            this.currentProgressId.push(leadId);
          }

          if (this.settingsService.journeyGlobalData.channel === CHANNEL.HSBC) {
            processedModules = await this.singleSubmissionHSBC(leadId);
          } else {
            lead = await this.leadsDeltaSync(leadId);
            if (lead && lead.syncStatus == SYNC_STATUS.SYNC_SUCCESS_2) {
              needAnalysis = await this.fnaDeltaSync(leadId)
              if (needAnalysis != null && needAnalysis.length > 0) {
                const successFnaIds = this.getSyncedModules(needAnalysis);
                if (successFnaIds != null && successFnaIds.length > 0) {
                  irpq = await this.irpqDeltaSync(leadId);
                  if (irpq != null && irpq.length > 0) {
                    const successIrpqIds = this.getSyncedModules(irpq);
                    //non trad
                    if (successIrpqIds != null && successIrpqIds.length > 0) {
                      salesIllustration = await this.siDeltaSync(leadId);
                      if (salesIllustration != null && salesIllustration.length > 0) {
                        const successSiIds = this.getSyncedModules(salesIllustration);
                        if (successSiIds != null && successSiIds.length > 0) {
                          eApplication = await this.eappDeltaSync(leadId);
                        }
                      }
                    }
                    //trad
                  } else {
                    salesIllustration = await this.siDeltaSync(leadId);
                    if (salesIllustration != null && salesIllustration.length > 0) {
                      const successSiIds = this.getSyncedModules(salesIllustration);
                      //console.log("successSiIds: " + successSiIds);
                      if (successSiIds != null && successSiIds.length > 0) {
                        eApplication = await this.eappDeltaSync(leadId);
                      }
                    }
                  }
                }
              }
            }
            //checking response
            processedModules = await this.buildResponse(lead, needAnalysis, irpq, salesIllustration, eApplication, leadId);
          }

          //console.log("Processed Modules:: " + JSON.stringify(processedModules));
          this.logSync(processedModules);
          syncModules.next(processedModules);
          
          let _leadId = leadId;
          if(processedModules && processedModules.leadId) {
            _leadId = processedModules.leadId;
          } 

          const currentIndexLead = this.currentProgressId.indexOf(_leadId);
          if(currentIndexLead > -1) {
            this.currentProgressId.splice(currentIndexLead, 1);
          }
          //console.log("end of single submission")
        }
      });
    return syncModules.asObservable();
  }

  getSyncedModules(moduleList) {
    let syncModules: any;
    if (moduleList != null) {
      syncModules = moduleList.filter(data => data.syncStatus == SYNC_STATUS.SYNC_SUCCESS_2).map(({ moduleId }) => "'" + moduleId + "'").toString();
    }

    return syncModules
  }


  public buildResponse(lead, needAnalysis, irpq, salesIllustration, eApplication, leadId) {
    let processedModules: ModuleSyncResponse;

    processedModules = new ModuleSyncResponse;
    processedModules.leadId = leadId;
    processedModules.relatedModules = [];

    if (lead != null) {
      processedModules.relatedModules.push(lead);
    }
    if (needAnalysis != null && needAnalysis.length > 0) {
      needAnalysis.map(fna => {
        processedModules.relatedModules.push(fna);
      })
    }
    if (irpq != null && irpq.length > 0) {
      irpq.map(irpq => {
        processedModules.relatedModules.push(irpq);
      })
    }
    if (salesIllustration != null && salesIllustration.length > 0) {
      salesIllustration.map(si => {
        processedModules.relatedModules.push(si);
      })
    }
    if (eApplication != null && eApplication.length > 0) {
      eApplication.map(eApp => {
        processedModules.relatedModules.push(eApp);
      })
    }

    return processedModules;
  }

  public logSync(data: any) {
    this.syncLogs$.next(data);
    if (!!data && Object.keys(data).length !== 0) {
      //console.log('LOGS HAVE VALUE ::');
      const parentLeadId = data.leadId;
      //console.log(`parentLeadId -> ${parentLeadId}`,);
      data.relatedModules.forEach((data: any) => {
        //console.log('RELATED MODULES START ::');
        //console.log(data);
        let moduleId = data.moduleId;
        if (this.errorCodes.includes(data.statusCode) || [SYNC_STATUS.SYNC_FAIL_99, SYNC_STATUS.MOBILE_VALIDATION_ERROR, SYNC_STATUS.NETWORK_ERROR].includes(data.syncStatus)) {
          this.errorHandlingService.saveError(parentLeadId, moduleId, data);
        }
      });
    }
  }

  filterData(dataList) {
    let filteredList: any
    if (dataList != null && dataList.length > 0) {
      const syncedList = dataList.filter(data => { return (data.syncStatus == SYNC_STATUS.SYNC_SUCCESS_2 && data.isDeleted == 0) });
      const errorList = dataList.filter(data => { return ((data.syncStatus == SYNC_STATUS.SYNC_FAIL_99 || data.syncStatus == SYNC_STATUS.MOBILE_VALIDATION_ERROR) && data.isDeleted == 0) });
      const offlineList = dataList.filter(data => { return (data.syncStatus == SYNC_STATUS.OFFLINE || data.syncStatus == SYNC_STATUS.NETWORK_ERROR) });

      filteredList = {
        syncedList: syncedList,
        errorList: errorList,
        offlineList: offlineList
      }
    }

    return filteredList
  }

  successFna(fnaList) {
    let successNeedAnalysis: any;
    if (fnaList != null) {
      successNeedAnalysis = fnaList.filter(fnaData => fnaData.syncStatus == SYNC_STATUS.SYNC_SUCCESS_2).map(({ naId }) => naId);
    }

    return successNeedAnalysis;
  }

  async tradProducts(leadId, successNeedAnalysis) {
    let siWithTradProducts: any;
    const attachedSalesIllustrations: any = await this.salesIllustrationDbService.getSalesIllustrationsByLeadId(leadId);
    if (attachedSalesIllustrations != null && attachedSalesIllustrations.length > 0 && successNeedAnalysis != null && successNeedAnalysis.length > 0) {
      siWithTradProducts = attachedSalesIllustrations.filter(siData => successNeedAnalysis.includes(siData.naId) && siData.planCode.contains("TR_")).map(({ siId }) => siId);// '',''
    }

    return siWithTradProducts
  }



  /** aj4-1230
   * Triggers GET API checklist
   * Updates checklist by their Policy Number and status
   * @author Edric Valdez
   */
  updateChecklist() {
    new Promise(async resolve => {
      this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
      this.token = await this.storage.get(SETTING_KEYS.TOKEN);

      const response = await this.syncApiService.getChecklist(this.amId, this.token);
      if (response != null) {
        if (response.status === RESPONSE_STATUS.SUCCESS_200) {
          const checklistWS = JSON.parse(response.data)
          if (checklistWS != null && checklistWS.contractApplicationPackages.length > 0) {
            for (const checklist of checklistWS.contractApplicationPackages) {
              if (checklist.data.policyNumber != null) {
                this.checklistService.updateSubmission(checklist);
              }
            }
          }
        }
      }
      resolve(null);
    });
  }

  async resync(leadId: string) {
    await this.platform.ready();
    let updateSqlParamGen = this.databaseService.sqlHelperParamGen([{ fieldName: 'syncStatus', value: 0 }]);
    let whereData: WhereData[] = [{ fieldName: 'leadId', operation: 'equal', compareValue: leadId, logicalOperator: 'AND' },
    { fieldName: 'syncStatus', operation: 'notEqual', compareValue: 2 }];
    if (!!leadId) {
      //update related module's sync status to 0 if sync status != 2 before attempting to delta sync
      await this.databaseService.updateTableData(CONSTANT_DB_TABLE.LEADS, updateSqlParamGen.fields, updateSqlParamGen.interpolationValues, whereData);
      await this.databaseService.updateTableData(CONSTANT_DB_TABLE.NEED_ANALYSIS, updateSqlParamGen.fields, updateSqlParamGen.interpolationValues, whereData);
      await this.databaseService.updateTableData(CONSTANT_DB_TABLE.IRPQ, updateSqlParamGen.fields, updateSqlParamGen.interpolationValues, whereData);
      await this.databaseService.updateTableData(CONSTANT_DB_TABLE.SI_MAIN, updateSqlParamGen.fields, updateSqlParamGen.interpolationValues, whereData);
      await this.databaseService.updateTableData(CONSTANT_DB_TABLE.EAPP_MAIN, updateSqlParamGen.fields, updateSqlParamGen.interpolationValues, whereData);

      //Trigger Single Submission
      this.connectivityService.appIsOnline$.pipe(take(1)).subscribe(
        async (isConnected: any) => {
          if (isConnected) {
            let leadIdSubject: BehaviorSubject<string> = new BehaviorSubject<string>(leadId);
            await this.util.presentLoading(MESSAGE.LOADING);
            this.singleSubmission(leadIdSubject).pipe(take(1)).subscribe(
              async (success) => {
                await this.util.dismissLoading();
                const resyncSuccess = await this.alertController.create({
                  header: 'Retry',
                  message: 'Resync attempt successful, please refresh the list. If you are still encountering errors, please use the "Send Reports" facility and try again.',
                  buttons: [{ text: 'Close', role: 'cancel', handler: () => { } }]
                });
                await resyncSuccess.present();
              },
              async (rejected) => {
                await this.util.dismissLoading();
                const cannotResync = await this.alertController.create({
                  header: 'Retry',
                  message: 'Cannot resync at this time. Please try again later.',
                  buttons: [{ text: 'Close', role: 'cancel', handler: () => { } }]
                });
                await cannotResync.present();
              });
          }
          else {
            const cannotResync = await this.alertController.create({
              header: 'Retry',
              message: 'You must be connected to the internet. Please check your internet connection and try again.',
              buttons: [{ text: 'Close', role: 'cancel', handler: () => { } }]
            });
            await cannotResync.present();
          }
        }
      );

      //IF MANUAL PROCESS QUEUE DOESN'T WORK AS INTENDED, UNCOMMENT THIS LINE AND COMMENT MANUAL PROCESS QUEUE

      /*this.processQueueService.manualProcessQuueue(leadId).then(
      async() =>{
        const resyncSuccess = await this.alertController.create({
          header: 'Retry',
          message: 'Resync attempt successful, please refresh the list. If you are still encountering errors, please use the "Send Reports" facility and try again.',
          buttons: [{text: 'Close', role: 'cancel', handler: ()=>{}}]
        });
        await resyncSuccess.present();
      },
      async (rejected) =>{
        const cannotResync = await this.alertController.create({
          header: 'Retry',
          message: 'Cannot resync at this time. Please try again later.',
          buttons: [{text: 'Close', role: 'cancel', handler: ()=>{}}]
        });
        await cannotResync.present();
      });*/
    } else {
      const cannotResync = await this.alertController.create({
        header: 'Retry',
        message: 'Cannot resync at this time. Please try again later.',
        buttons: [{ text: 'Close', role: 'cancel', handler: () => { } }]
      });
      await cannotResync.present();
    }
  }

  async fullSyncAllModules() {
    const startTime = Date.now();
    let moduleSync: SyncReturnModel[] = [];
    this.initialLoggedIn = await this.storage.get(SETTING_KEYS.INITIAL_LOGGED_IN);
    if (this.initialLoggedIn) {
      for (const DB_NAME of DB_NAMES.TABLES) {
        await this.databaseService.truncateTable(DB_NAME);
      }
      await this.storage.set(SETTING_KEYS.INITIAL_LOGGED_IN, false);
    }
    try {
      if (await this.connectivityService.checkInternet()) {
        this.settingsService.updateJourneyGlobalfullSyncProgress('In-progress');

        const leadSync = await this.fullSyncLeads();
        const fnaSync = await this.fullSyncNeedAnalysis();
        const irpqSync = await this.fullSyncIRPQ();
        const siSync = await this.fullSyncSI();
        const eappSync = await this.fullSyncEAPP();

        moduleSync = [leadSync, fnaSync, irpqSync, siSync, eappSync];
        this.settingsService.updateJourneyGlobalfullSyncProgress('Done');
        const endTime = Date.now();


        if (environment.accelarationAJ.isBenchMark) {
          let timeDiffMs = Math.abs(endTime - startTime);
          const minute = Math.floor(timeDiffMs / (1000 * 60));
          const secs = Math.floor((timeDiffMs % (1000 * 60)) / 1000);
          const startTimeFormatted = new Date(startTime).toLocaleString('en-GB', { timeZone: 'Asia/Manila' }).replace(/,/g, ' ')
          const endTimeFormatted = new Date(endTime).toLocaleString('en-GB', { timeZone: 'Asia/Manila' }).replace(/,/g, ' ')

          this.benchMarkResults.push({
            startTimeFormatted,
            endTimeFormatted,
            timeDiff: `${minute} minutes : ${secs} seconds `
          });

          this.benchMarkResult$.next(this.benchMarkResults);
        }

        await this.storage.set(SETTING_KEYS.FULLSYNCAGE, this.util.getCurrentTimeStamp());
      } else {
        this.settingsService.updateJourneyGlobalfullSyncProgress('No internet connection');
        moduleSync = [{ isSync: false, module: 'lead' }, { isSync: false, module: 'needanalysis' }, { isSync: false, module: 'investmentprofile' },
        { isSync: false, module: 'quotation' }, { isSync: false, module: 'application' }]
        this.util.toastMiddleAlert(ERROR_MESSAGES.NO_INTERNET_CONNECTION)
      }

      this.setJourneyGlobalStatus(moduleSync);
      this.fullSyncModuleStatus = moduleSync;

      return moduleSync
    } catch (e) {
      console.log('LOG fullSync error: ', e)
    }
  }

  async setJourneyGlobalStatus(moduleSync) {
    this.settingsService.updateJourneyGloballeadsFullSyncStatus(moduleSync[0]);
    this.settingsService.updateJourneyGlobalnaFullSyncStatus(moduleSync[1]);
    this.settingsService.updateJourneyGlobalirpqFullSyncStatus(moduleSync[2]);
    this.settingsService.updateJourneyGlobalsiFullSyncStatus(moduleSync[3]);
    this.settingsService.updateJourneyGlobaleappFullSyncStatus(moduleSync[4]);
    this.settingsService.updateJourneyGlobalchecklistFullSyncStatus(moduleSync[5]);
    this.settingsService.updateJourneyGlobalreferrorFullSyncStatus(moduleSync[6]);
  }

  /**
    * FULL SYNC FOR LEADS
    */
  async fullSyncLeads() {
    let sync = new SyncReturnModel();
    let serverId: any;
    sync.isSync = false;
    sync.module = Modules.LEADS;
    this.token = await this.storage.get(SETTING_KEYS.TOKEN);
    this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
    let page = 1;
    for (let i = 0; i < page; i++) {
      const response = await this.syncApiService.getLeads(this.amId, this.token, i);
      if (response.status === RESPONSE_STATUS.SUCCESS_200) {
        const leadsWS = JSON.parse(response.data);
        // const leadsDB = await this.leadsService.getAllLeads();
        //console.log("FULL SYNC LEADS DATABASE BEFORE SYNC: " + JSON.stringify(leadsDB));
        //this.util.logger(LOGTYPE.fullSync, `FULL SYNC LEADS DATABASE BEFORE SYNC: ${JSON.stringify(leadsDB)}`)
        //console.log("FULL SYNC LEADS RESPONSE: " + JSON.stringify(leadsWS));
        //this.util.logger(LOGTYPE.fullSync, `FULL SYNC LEADS RESPONSE: ${JSON.stringify(response)}`)
        try {
          // full sync for initial logged in users
          for (let i = 0; i < leadsWS.leads.length; i++) {
            if (leadsWS.leads[i].clientRefId) {
              const existingLeads = await this.leadsService.getExistingLeadById(leadsWS.leads[i].clientRefId);
              if (existingLeads == null) {
                //if there's no existing insert the lead to the SQL Lite and sync.
                if (leadsWS.leads[i] != null) {
                  await this.leadsService.insertFullSync(leadsWS.leads[i]);
                }
                // if (leadsWS.leads[i].data.referrers != null) {
                //   await this.leadsService.syncReferror(leadsWS.leads[i].data.referrers, leadsWS.leads[i]);
                // }
                //if existing, update only the sync status and not sync
              } else {
                if (existingLeads.serverId) {
                  serverId = existingLeads.serverId;
                } else {
                  serverId = leadsWS.leads[i].data.self;
                }
                if (existingLeads.syncStatus != 2) {
                  this.leadsService.updateLeadSyncFlag(2, existingLeads.leadId, serverId);
                  this.leadsService.updateReferrorsSyncFlag(2, existingLeads.leadId);
                }
              }
            }
          }
          sync.isSync = true;
          // const leadsDBAfter = await this.leadsService.getAllLeads();
          //console.log("FULL SYNC LEADS DATABASE AFTER SYNC: " + JSON.stringify(leadsDBAfter));
          //this.util.logger(LOGTYPE.fullSync, `FULL SYNC LEADS DATABASE AFTER SYNC: ${JSON.stringify(leadsDBAfter)}`)
        } catch (e) {
          sync.isSync = false;
        }
      } else {
        break;
      }
      page = page + 1
    }
    return sync
  }

  /**
   * Full Sync for Need Analysis
   */
  async fullSyncNeedAnalysis() {
    let serverId: any
    let sync = new SyncReturnModel();
    sync.isSync = false;
    sync.module = Modules.FNA;
    this.token = await this.storage.get(SETTING_KEYS.TOKEN);
    this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
    let page = 1;
    for (let i = 0; i < page; i++) {
      const response = await this.syncApiService.getNeedsAnalysis(this.amId, this.token, i);
      if (response.status === RESPONSE_STATUS.SUCCESS_200) {
        const needAnalysisWS = JSON.parse(response.data);
        const needAnalysisDB = await this.needsAnalysisDbService.getAllFNA();
        let NARawData = await this.storage.get(KEYS.NA_RAW_DATA);

        //console.log("FULL SYNC FNA DATABASE BEFORE SYNC: " + JSON.stringify(needAnalysisDB));
        //this.util.logger(LOGTYPE.dbRetrieve, `FULL SYNC FNA DATABASE BEFORE SYNC: ${JSON.stringify(needAnalysisDB)}`)
        //console.log("FULL SYNC FNA RESPONSE: " + JSON.stringify(needAnalysisWS));
        //this.util.logger(LOGTYPE.syncRes, `FULL SYNC FNA RESPONSE: ${JSON.stringify(response)}`)

        try {
          for (let i = 0; i < needAnalysisWS.needanalyses.length; i++) {
            if (needAnalysisWS.needanalyses[i].clientRefId && needAnalysisWS.needanalyses[i].clientLeadRefId) {
              if (!NARawData) {
                NARawData = [];

                NARawData.push({
                  clientRefId: needAnalysisWS.needanalyses[i].clientRefId,
                  NAServerID: needAnalysisWS.needanalyses[i].data.self
                });
              } else {
                if (needAnalysisWS.needanalyses[i].clientRefId) {
                  const index = NARawData.findIndex((data) => {
                    return data.clientRefId == needAnalysisWS.needanalyses[i].clientRefId;
                  });

                  if (index !== -1) {
                    NARawData[index].NAServerID = needAnalysisWS.needanalyses[i].data.self;
                  } else {
                    NARawData.push({
                      clientRefId: needAnalysisWS.needanalyses[i].clientRefId,
                      NAServerID: needAnalysisWS.needanalyses[i].data.self
                    });
                  }
                }
              }

              if (needAnalysisDB != null && needAnalysisWS.needanalyses[i].clientRefId) {
                const existingFNA = await this.needsAnalysisDbService.getFNADetailsByID(needAnalysisWS.needanalyses[i].clientRefId);
                //this.util.logger(LOGTYPE.dbRetrieve, `GET FNA_Main: ${JSON.stringify(existingFNA)}`)

                // check if webservice need analysis is existing to the SQL LITE
                // if there's no existing insert the needs analysis to the SQL Lite and sync.
                if (existingFNA == null) {
                  let dateCreated: any;
                  if (needAnalysisWS.needanalyses[i].createdDate != null) {
                    dateCreated = this.util.convertDateFromWS(needAnalysisWS.needanalyses[i].createdDate);
                  }
                  let dateModified: any;
                  if (needAnalysisWS.needanalyses[i].lastUpdateDate != null) {
                    dateModified = this.util.convertDateFromWS(needAnalysisWS.needanalyses[i].lastUpdateDate);
                  }

                  // additional transformation needed:
                  let isFNACompleted: number;
                  if (needAnalysisWS.needanalyses[i].data.status !== STATUS.IN_PROGRESS) {
                    isFNACompleted = 1;
                  } else {
                    isFNACompleted = 0;
                  }

                  const dbResponse = await this.needsAnalysisDbService.insertFNADetails(
                    needAnalysisWS.needanalyses[i].clientRefId,
                    needAnalysisWS.needanalyses[i].clientLeadRefId,
                    needAnalysisWS.needanalyses[i].data.type,
                    true,
                    needAnalysisWS.needanalyses[i].data.isWaived,
                    isFNACompleted,
                    needAnalysisWS.needanalyses[i].data.self,
                    dateCreated,
                    dateModified,
                    needAnalysisWS.needanalyses[i].isDeleted ? 1 : 0,
                    needAnalysisWS.needanalyses[i].data.relatedLead.self
                  );

                  // FNA Waiver does not need to insert FNA Types!
                  if (!needAnalysisWS.needanalyses[i].data.isWaived) {
                    this.insertFNATypes(needAnalysisWS.needanalyses[i].clientRefId,
                      needAnalysisWS.needanalyses[i].data.type,
                      needAnalysisWS.needanalyses[i].data.goalType,
                      needAnalysisWS.needanalyses[i].data.needsVariables);
                  }

                  // if existing, update only the sync status and not sync
                } else {
                  if (existingFNA.serverId) {
                    serverId = existingFNA.serverId;
                  }else {
                    serverId = needAnalysisWS.needanalyses[i].data.self;
                  }
                  if (existingFNA.syncStatus != 2) {
                    await this.needsAnalysisDbService.updateFNADetails(existingFNA.naId, 2, serverId);
                  }

                  if(existingFNA.leadServerId) {
                    await this.needsAnalysisDbService.updateLeadServerIdFNA(existingFNA.leadServerId, existingFNA.naId);
                  } else {
                    await this.needsAnalysisDbService.updateLeadServerIdFNA(needAnalysisWS.needanalyses[i].data.relatedLead.self, existingFNA.naId);
                  }
                }
              }
            }
          }
          sync.isSync = true;
          //commented value unused
          // const needAnalysisAfter = await this.needsAnalysisDbService.getAllFNA();
          await this.storage.set(KEYS.NA_RAW_DATA, NARawData);
          //console.log("FULL SYNC FNA DATABASE AFTER SYNC: " + JSON.stringify(needAnalysisAfter));
          //this.util.logger(LOGTYPE.dbRetrieve, `FULL SYNC FNA DATABASE AFTER SYNC: ${JSON.stringify(needAnalysisAfter)}`)
        } catch (e) {
          sync.isSync = false;
        }
      } else {
        break;
      }
      page = page + 1;
    }
    //this.util.logger(LOGTYPE.END, 'FULL SYNC FNA');
    return sync
  }

  async fullSyncIRPQ() {
    let serverId: any
    let sync = new SyncReturnModel();
    sync.isSync = false;
    sync.module = Modules.IRPQ;
    this.token = await this.storage.get(SETTING_KEYS.TOKEN);
    this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
    //get all irpq from webservice
    let page = 1;
    for (let i = 0; i < page; i++) {
      const response = await this.syncApiService.getIRPQ(this.amId, this.token, i)
      if (response.status === RESPONSE_STATUS.SUCCESS_200) {
        const irpqWS = JSON.parse(response.data);

        if (irpqWS && irpqWS.investmentProfiles) {
          const filteredInvestmentProfiles = irpqWS.investmentProfiles.filter(profile => profile.clientRefId && profile.clientLeadRefId);
          for (let i = 0; i < filteredInvestmentProfiles.length; i++) {
            const existingIRPQ = await this.irpqService.getIrpqByID(filteredInvestmentProfiles[i].clientRefId);
            if (existingIRPQ == null) {
              await this.irpqService.insertFullSync(filteredInvestmentProfiles[i]);
            } else {
              if (existingIRPQ.serverId) {
                serverId = existingIRPQ.serverId;
              } else {
                serverId = filteredInvestmentProfiles[i].data.self;
              }

              if (existingIRPQ.syncStatus !== 2) {
                await this.irpqService.updateIrpqSyncFlag(existingIRPQ.irpqId, SYNC_STATUS.SYNC_SUCCESS_2, serverId);
              }
            }
          }
        }

        sync.isSync = true;
        //commented value unused
        // const irpqDbAfter = await this.irpqService.getAllIRPQSYNC();
        //console.log("FULL SYNC IRPQ DATABASE AFTER SYNC: " + JSON.stringify(irpqDbAfter));
        //this.util.logger(LOGTYPE.dbRetrieve, `FULL SYNC IRPQ DATABASE AFTER SYNC: ${JSON.stringify(irpqDbAfter)}`)
      } else {
        break;
      }
      page = page + 1;
    }
    return sync
  }

  async fullSyncSI() {
    let serverId: any;
    let sync = new SyncReturnModel();
    sync.isSync = false;
    sync.module = Modules.SI;
    this.token = await this.storage.get(SETTING_KEYS.TOKEN);
    this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
    let page = 1;
    for (let i = 0; i < page; i++) {
      const response = await this.syncApiService.getFullSync(this.amId, Modules.SI, this.token, i);
      const res = await this.syncApiService.getFullSyncV2(this.amId, Modules.SI, this.token, i);
      if (response.status === RESPONSE_STATUS.SUCCESS_200 || res.status === RESPONSE_STATUS.SUCCESS_200) {
        if (response.status == 204 && JSON.parse(res.data).syncData.length == 0) {
          break; // last items
        }

        //commented value unused
        // const siDB: any = await this.salesIllustrationDbService.getAllSalesIllustrationsSync();

        let SIData = {
          quotations: []
        }
        if (response.data) {
          SIData = JSON.parse(response.data);
        } else {
          SIData.quotations = [];
        }

        let SIDataV2 = {
          syncData: []
        };
        if (res.data) {
          SIDataV2 = JSON.parse(res.data);
        } else {
          SIDataV2.syncData = []
        }
        SIData.quotations = SIData.quotations.concat(SIDataV2.syncData);
        try {
          for (let i = 0; i < SIData.quotations.length; i++) {
            if (SIData.quotations[i].clientRefId && SIData.quotations[i].clientLeadRefId && !SIData.quotations[i].isDeleted) {
              const existingSI = await this.salesIllustrationDbService.getSalesIllustrationMain(SIData.quotations[i].clientRefId, true);
              if (existingSI == null) {
                const irpqData = await this.irpqService.getIrpqByLeadId(SIData.quotations[i].clientLeadRefId);
                if (!SIData.quotations[i].data.needAnalysis) {
                  SIData.quotations[i].data.needAnalysis = {
                    clientRefId: irpqData ? irpqData.naId : null,
                    self: irpqData ? irpqData.naServerId : null
                  }
                }

                if (!SIData.quotations[i].data.investmentProfile) {
                  SIData.quotations[i].data.investmentProfile = {
                    clientRefId: irpqData ? irpqData.irpqId : null,
                    self: irpqData ? irpqData.serverId : null
                  }
                }

                await this.salesIllustrationDbService.insertFullSync(SIData.quotations[i]);
              }
            }
          }
          sync.isSync = true;
          // commented value unused
          // const siDBAfter: any = await this.salesIllustrationDbService.getAllSalesIllustrationsSync();
          // const siDBPersons: any = await this.salesIllustrationDbService.getAllPersonsSync();
        } catch (e) {
          sync.isSync = false;
        }
      } else {
        break;
      }
      page = page + 1;
    }
    return sync
  }

  async fullSyncChecklist() {
    // commented value unused
    // let serverId: any;
    // let policyNumber: any;
    let sync = new SyncReturnModel();
    sync.isSync = false;
    sync.module = Modules.CHECKLIST;
    this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
    this.token = await this.storage.get(SETTING_KEYS.TOKEN);
    let page = 1;
    for (let i = 0; i < page; i++) {

      // commented value unused
      // const checklistDb: any = await this.checklistService.getAllChecklistSync();

      const response = await this.syncApiService.getFullSync(this.amId, Modules.CHECKLIST, this.token, i);
      this.processDocumentUpload(response.data);
      if (response.status === RESPONSE_STATUS.SUCCESS_200) {
        const checkListWS = JSON.parse(response.data)

        //console.log("FULL SYNC CHECKLIST DATABASE BEFORE: " + JSON.stringify(checklistDb));
        //this.util.logger(LOGTYPE.dbRetrieve, `FULL SYNC CHECKLIST DATABASE BEFORE: ${JSON.stringify(checklistDb)}`)
        //console.log("FULL SYNC CHECKLIST RESPONSE: " + JSON.stringify(checkListWS));
        //this.util.logger(LOGTYPE.fullSync, `FULL SYNC CHECKLIST RESPONSE: ${JSON.stringify(response)}`)
        try {
          for (const checklistWS of checkListWS.contractApplicationPackages) {
            const existingChecklist: any = await this.checklistService.getSubmissionByEappId(checklistWS.clientRefId);
            if (existingChecklist.rows.length == 0) {
              await this.checklistService.insertFullSync(checklistWS, this.amId)  //insertChecklistMain
            } else if (existingChecklist.rows.length > 0) {
              if (checklistWS.data && checklistWS.data.policyNumber) {
                await this.checklistService.updateChecklistSyncFlag(SYNC_STATUS.SYNC_SUCCESS_2, checklistWS.clientRefId, checklistWS.data.policyNumber);

              }
            }
          }
          sync.isSync = true;
        } catch (e) {
          sync.isSync = false;
        }
      } else {
        break;
      }
      page = page + 1;
    }
    return sync
  }

  /**
  * Full Sync for Need Analysis
  */
  async fullSyncEAPP() {
    let sync = new SyncReturnModel();
    let serverId: any;
    sync.isSync = false;
    sync.module = Modules.EAPP;
    this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
    this.token = await this.storage.get(SETTING_KEYS.TOKEN);
    let page = 1;
    for (let i = 0; i < page; i++) {
      const response = await this.syncApiService.getEAPP(this.amId, this.token, i);
      if (response.status === RESPONSE_STATUS.SUCCESS_200) {
        const eappWS = JSON.parse(response.data);
        try {
          if (eappWS && eappWS.contractApplications) {
            const filteredContractApplications = eappWS.contractApplications.filter(contractApp => contractApp.clientRefId && contractApp.clientLeadRefId);

            for (let i = 0; i < filteredContractApplications.length; i++) {
              const existingEAPP: any = await this.eappDbService.getEappMainById(filteredContractApplications[i].clientRefId);

              // if there's no existing insert the needs analysis to the SQL Lite and sync.
              if (existingEAPP == null) {
                await this.insertFullSyncEapp(filteredContractApplications[i]);
                // if existing, update only the sync status and not sync
              } else {
                // TODO: DISTINGUISH THE ID OF THE NEEDNANALYSIS
                let serverId = null;
                if (existingEAPP.serverId) {
                  serverId = existingEAPP.serverId;
                } else {
                  serverId = filteredContractApplications[i].data.self;
                }

                const updatedEappStatus = existingEAPP.eappStatus === "SIGNED" && filteredContractApplications[i].data.status === "COMPLETED" ?
                  existingEAPP.eappStatus : filteredContractApplications[i].data.status;

                this.eappDbService.updateEappSync(
                  existingEAPP.eappId,
                  2,
                  serverId,
                  updatedEappStatus,
                  this.util.convertDateFromWS(filteredContractApplications[i].createdDate)
                );
              }
            }
            sync.isSync = true;
          }
        } catch (e) {
          sync.isSync = false;
        }
      } else {
        break;
      }
      page = page + 1;
    }

    return sync
  }

  async insertFullSyncEapp(eapp) {
    let isAoEqualsPi = 0;
    const eappId = eapp.clientRefId;
    const siId = eapp.data.quotation.clientRefId
    const attachedSI = await this.salesIllustrationDbService.getSalesIllustrationMain(eapp.data.quotation.clientRefId);
    if (attachedSI != null) {
      isAoEqualsPi = attachedSI.isAoEqualsPi;
    }
    const existingEapp = await this.eappDbService.getEappMainById(eappId);
    //console.log("existingEapp: " + JSON.stringify(existingEapp))
    //this.util.logger(LOGTYPE.sync, `EXISTING EAPP: ${JSON.stringify(existingEapp)}`)
    if (existingEapp == null) {
      await this.eappDbService.insertEappMain(eapp);

      let pbrIndicator = ['TR_PBR_PHP_0_PNB', 'UL_PBR_PHP_0_AGENCY', 'UL_PBR_USD_0_AGENCY', 'UL_PBR5_PHP_0_AGENCY', 'UL_PBR5_USD_0_AGENCY', 'UL_PBR10_PHP_0_AGENCY', 'UL_PBR10_USD_0_AGENCY',
        'UL_PBR_PHP_0_PNB', 'UL_PBR_USD_0_PNB', 'UL_PBR5_PHP_0_PNB', 'UL_PBR5_USD_0_PNB', 'UL_PBR10_PHP_0_PNB', 'UL_PBR10_USD_0_PNB'];
      let isAoEqualsPi;
      let siRidersDBData = await this.databaseService.database.executeSql(SQL_QUERIES.GET_SI_RIDERS.query, [siId])
      let siRiderData = this.util.createObjectArrFromDBData(siRidersDBData)
      const riderMappedValues = siRiderData.map((arr) => { return arr.riderCode });
      let hasPBR: any = riderMappedValues.some(riderVal => pbrIndicator.includes(riderVal));
      const attachedQuotation = await this.salesIllustrationDbService.getSalesIllustrationMain(siId);
      if (attachedQuotation != null) {
        isAoEqualsPi = attachedQuotation.isAoEqualsPi;
      }
      const siPerson = await this.salesIllustrationDbService.getSIPersonsByIdAndType(siId, SI_PERSON_TYPE.AO);
      let isForPBR = 0

      if (eapp.data.beneficialOwners != null) {
        eapp.data.beneficialOwners.forEach(async beneOwner => {
          await this.eappDbService.insertEAPPBeneficialOwners(beneOwner, eappId);

        });
      }

      if (eapp.data.contractHolder != null) {
        const nonMedId = await this.util.generateUUID();
        if (hasPBR) {
          isForPBR = 1;
        }
        const questionsData = await this.util.mapQuestionObject(eapp.data.contractHolder.questions, false);
        await this.eappDbService.insertEappPerson(eapp.data.contractHolder, eapp.data.contingentOwner, eappId, SI_PERSON_TYPE.AO, siPerson);
        if (!(_.isEmpty(eapp.data.contractHolder.questions))) {
          await this.eappDbService.insertEAPPNonMedMain(eapp.data.contractHolder, eappId, nonMedId, isForPBR);
          await this.eappDbService.insertEAPPNonMed_Answers(eapp.data.contractHolder, nonMedId);
        }
        if (eapp.data.contractHolder.siblings != null) {
          for (let numberOfSibling = 0; numberOfSibling < eapp.data.contractHolder.siblings.length; numberOfSibling++) {
            await this.eappDbService.insertEAPPNonMedFamilyMembers(eapp.data.contractHolder.siblings[numberOfSibling], eapp.data.contractHolder, nonMedId, numberOfSibling);
          }
        }
        await this.eappDbService.insertEAPPNonMed_Alc_Doctors(questionsData, nonMedId);
        await this.eappDbService.insertEAPPNonMed_Detox_Doctors(questionsData, nonMedId);
        await this.eappDbService.insertEAPPNonMed_Travel_Residence(questionsData, nonMedId);
        await this.eappDbService.insertEAPPNonMedVesselOperationInfo(questionsData, nonMedId);
      }
      if (eapp.data.insuredPerson != null) {
        const nonMedId = await this.util.generateUUID();
        const questionsData = await this.util.mapQuestionObject(eapp.data.insuredPerson.questions, false);

        await this.eappDbService.insertEappPerson(eapp.data.insuredPerson, eapp.data.contingentOwner, eappId, SI_PERSON_TYPE.PI, siPerson);
        if (!(_.isEmpty(eapp.data.insuredPerson.questions))) {
          await this.eappDbService.insertEAPPNonMedMain(eapp.data.insuredPerson, eappId, nonMedId, 0);
          await this.eappDbService.insertEAPPNonMed_Answers(eapp.data.insuredPerson, nonMedId);
        }

        if (eapp.data.insuredPerson.siblings != null) {
          for (let numberOfSibling = 0; numberOfSibling < eapp.data.insuredPerson.siblings.length; numberOfSibling++) {
            await this.eappDbService.insertEAPPNonMedFamilyMembers(eapp.data.insuredPerson.siblings[numberOfSibling], eapp.data.insuredPerson, nonMedId, numberOfSibling);
          }
        }
        await this.eappDbService.insertEAPPNonMed_Alc_Doctors(questionsData, nonMedId);
        await this.eappDbService.insertEAPPNonMed_Detox_Doctors(questionsData, nonMedId);
        await this.eappDbService.insertEAPPNonMed_Travel_Residence(questionsData, nonMedId);
        await this.eappDbService.insertEAPPNonMedVesselOperationInfo(questionsData, nonMedId);
      }
      if (eapp.data.beneficiaries != null) {
        for (let i = 0; i < eapp.data.beneficiaries.length; i++) {
          let beneAnswers: any;
          if (eapp.data.beneficiaries[i].person.questions != null) {
            beneAnswers = await this.util.mapQuestionObject(eapp.data.beneficiaries[i].person.questions, false);
          }
          await this.eappDbService.insertEappBeneficiaries(eapp.data.beneficiaries[i], eappId, beneAnswers);
        }
      }
      if (eapp.data.fundDetails != null) {
        eapp.data.fundDetails.forEach(async fund => {
          await this.eappDbService.insertEAPPFundsTopUpDirection(fund, eappId);
        });
      }
      if (eapp.data.questions != null) {
        const questionsData = await this.util.mapQuestionObject(eapp.data.questions, false);
        if (questionsData != null) {
          await this.eappDbService.insertEAPPPendingApplication(questionsData, eappId);
          await this.eappDbService.insertEAPPTotalInsuranceInforce(questionsData, eappId);
          await this.eappDbService.insertEAPPReplacementNotification(questionsData, eappId);
        }
      }
    }
  }

  processDocumentUpload(data) {
    if (data) {
      let appPackages = data.contractApplicationPackages;
      if (appPackages && appPackages.length > 0) {
        let attDocType = ['ALAO', 'ECSAAL', 'VCSCRN'];
        let attDocs = [];
        appPackages.forEach(async appData => {
          const { documents, applicationNumber } = appData.data;
          if (documents && documents.length > 0) {
            documents.map(async documentRes => {
              const { documentType, path, signedDate } = documentRes;
              if (attDocType.includes(documentType)) {
                attDocs.push(documentType);
                let storageKey = 'UPLOADED_' + documentType + '_' + applicationNumber;
                if (isEmpty(await this.storage.get(storageKey))) {
                  let value = {
                    isS3Uploaded: path != null ? true : false,
                    oldUpload: true,
                    signedDate: signedDate
                  }
                  await this.storage.set(storageKey, value);
                }
              }
            });
            let storageKeyAttDocs = 'UPLOADED_ATTDOCS_' + applicationNumber;
            if (isEmpty(await this.storage.get(storageKeyAttDocs))) {
              await this.storage.set(storageKeyAttDocs, attDocs);
            }
          }
        });
      }
    }
  }

}


