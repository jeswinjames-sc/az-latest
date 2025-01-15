import { Injectable } from '@angular/core';
import { FirebaseClientService } from '../firebase-client/firebase-client.service';
import { BehaviorSubject } from 'rxjs';
import { ISQL_data, IUserAppActivity } from '../interfaces/agila-firebase-interfaces';
import { EMODULES } from '../enums/agila-firebase-enums';
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import { Storage } from '@ionic/storage';
import { debounceTime, take } from 'rxjs/operators';
import { NeedsAnalysisService } from '../../needs-analysis/needs-analysis.service';
import { SalesIllustrationService } from '../../sales-illustration/sales-illustration.service';
import { EApplicationService } from '../../e-application/e-application.service';
import { DbService } from '@services/db/db.service';
import { environment } from '@environment/environment';


@Injectable({
  providedIn: 'root'
})
export class CloudApplicationService {

  private path = environment.env !== 'PROD' ? `${environment.env}-users` : 'users';

  private user = {
    accountManagerId: '',
    email: '',
    fName: '',
    lName: '',
    channel: ''
  };

  public modulesEvent$: BehaviorSubject<ISQL_data> = new BehaviorSubject({});

  constructor(
    private fbClient: FirebaseClientService,
    private dbService: DbService,
    private storage: Storage,
    private naService: NeedsAnalysisService,
    private siService: SalesIllustrationService,
    private eappService: EApplicationService,
  ) {

  }

  async initializeCloudAppService() {
    await this.fbClient.initializeFirebase();
    this.modulesEvent$
      .pipe(debounceTime(2000))
      .subscribe(async (params) => {
        const { module, moduleId } = params;
        if (module === EMODULES.FNA)
          await this.addFNAFirebase(moduleId);
        if (module === EMODULES.SI)
          await this.addSIFirebase(moduleId);
        if (module === EMODULES.EAPP)
          await this.addEAPPFirebase(moduleId);
      })
  }


  async addUserAppActivity(params: IUserAppActivity) {
    try {

      this.user.accountManagerId = this.user.accountManagerId === '' ? await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID) : this.user.accountManagerId;
      this.user.email = this.user.email === '' ? await this.storage.get(SETTING_KEYS.EMAIL) : this.user.email;
      this.user.fName = this.user.fName === '' ? await this.storage.get(SETTING_KEYS.FIRST_NAME) : this.user.fName;
      this.user.lName = this.user.lName === '' ? await this.storage.get(SETTING_KEYS.LAST_NAME) : this.user.lName;
      this.user.channel = this.user.channel === '' ? await this.storage.get(SETTING_KEYS.CHANNEL) : this.user.channel;
      const { accountManagerId } = this.user;

      const firestoreDb = this.fbClient.firestoreDb;
      const timeStamp = this.getTimeStamp();
      console.log(
        this.fbClient.getServerTimeStamp()
      );

      const { module, moduleId, body, type } = params;
      const path = `${this.path}/${accountManagerId}/${module}`;
      body.timeStamp = this.fbClient.getServerTimeStamp();

      const batch = firestoreDb.batch();
      const userRef = firestoreDb.collection(this.path).doc(accountManagerId);
      const moduleRef = firestoreDb.collection(path).doc(moduleId);
      const moduleHitoryRef = firestoreDb.collection(`${path}/${moduleId}/history`).doc(timeStamp);

      batch.set(userRef, this.user, { merge: true });
      batch.set(moduleRef, body, { merge: true });
      batch.set(moduleHitoryRef, body);

      await batch.commit();
    }

    catch (error) {
      console.log('addUserAppActivity::', error);
    }

  }

  getTimeStamp() {
    const dateObj = new Date();
    let year = dateObj.getFullYear();
    let month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    let date = ('0' + dateObj.getDate()).slice(-2);
    let hour = ('0' + dateObj.getHours()).slice(-2);
    let minute = ('0' + dateObj.getMinutes()).slice(-2);
    let second = ('0' + dateObj.getSeconds()).slice(-2);
    return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
  }

  async logout() {
    return await this.fbClient.logout();
  }



  async addFNAFirebase(moduleId: string) {
    try {
      let body = await this.naService.getAllFNARelatedtables(moduleId);
      const { FNA_S, FNA_P, FNA_H, FNA_E, FNA_R, FNA_Ep, naId } = body;

      body.FNA_S = !!FNA_S ? JSON.parse(FNA_S) : {};
      body.FNA_P = !!FNA_P ? JSON.parse(FNA_P) : {};
      body.FNA_H = !!FNA_H ? JSON.parse(FNA_H) : {};
      body.FNA_E = !!FNA_E ? JSON.parse(FNA_E) : {};
      body.FNA_R = !!FNA_R ? JSON.parse(FNA_R) : {};
      body.FNA_Ep = !!FNA_Ep ? JSON.parse(FNA_Ep) : {};

      console.table(body);
      const data: IUserAppActivity = {
        module: EMODULES.FNA,
        body,
        type: 'offlinedata',
        moduleId: naId
      }
      console.log(data);

      await this.addUserAppActivity(data);

    } catch (error) {
      console.log('error :::', error)
    }
  }


  async addSIFirebase(moduleId: string) {
    try {
      let body = await this.siService.getAllSIRelatedtables(moduleId);
      const { SI_PERSONS, SI_TOPUP, SI_RIDERS, SI_FUNDS, siId } = body;

      body.SI_PERSONS = !!SI_PERSONS ? JSON.parse(SI_PERSONS) : [];
      body.SI_TOPUP = !!SI_TOPUP ? JSON.parse(SI_TOPUP) : [];
      body.SI_RIDERS = !!SI_RIDERS ? JSON.parse(SI_RIDERS) : [];
      body.SI_FUNDS = !!SI_FUNDS ? JSON.parse(SI_FUNDS) : [];

      console.table(body);
      const data: IUserAppActivity = {
        module: EMODULES.SI,
        body,
        type: 'offlinedata',
        moduleId: siId
      }
      console.log(data);

      await this.addUserAppActivity(data);

    } catch (error) {
      console.log('error :::', error)
    }
  }

  async addEAPPFirebase(moduleId: string) {
    try {
      let body = await this.eappService.getAllEappRelatedTable(moduleId);
      const { EAPP_Person, EAPP_Beneficiaries, EAPP_FundsTopUpDirection,
        EAPP_Payout_Banks, EAPP_PendingApplication, EAPP_TotalInsuranceInforce,
        EAPP_ReplacementNotification, EAPP_NonMed_Main, EAPP_Signatures, eappId } = body;

      body.EAPP_Person = !!EAPP_Person ? JSON.parse(EAPP_Person) : {};
      body.EAPP_Beneficiaries = !!EAPP_Beneficiaries ? JSON.parse(EAPP_Beneficiaries) : [];
      body.EAPP_FundsTopUpDirection = !!EAPP_FundsTopUpDirection ? JSON.parse(EAPP_FundsTopUpDirection) : {};
      body.EAPP_Payout_Banks = !!EAPP_Payout_Banks ? JSON.parse(EAPP_Payout_Banks) : [];
      body.EAPP_PendingApplication = !!EAPP_PendingApplication ? JSON.parse(EAPP_PendingApplication) : {};
      body.EAPP_TotalInsuranceInforce = !!EAPP_TotalInsuranceInforce ? JSON.parse(EAPP_TotalInsuranceInforce) : {};
      body.EAPP_ReplacementNotification = !!EAPP_ReplacementNotification ? JSON.parse(EAPP_ReplacementNotification) : {};
      body.EAPP_NonMed_Main = !!EAPP_NonMed_Main ? JSON.parse(EAPP_NonMed_Main) : [];
      body.EAPP_Signatures = !!EAPP_Signatures ? JSON.parse(EAPP_Signatures) : [];

      console.table(body);
      const data: IUserAppActivity = {
        module: EMODULES.EAPP,
        body,
        type: 'offlinedata',
        moduleId: eappId
      }
      console.log(data);

      await this.addUserAppActivity(data);

    } catch (error) {
      console.log('error :::', error)
    }
  }


}