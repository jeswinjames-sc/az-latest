import { ApplicationRef, Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import { NEED_ANALYSIS_TYPE } from '@utils/constants/need-analysis-types';

import * as _ from 'lodash';
import { KEYS } from '@utils/constants/storage-keys/keys';
import { BehaviorSubject, Observable } from 'rxjs';
import { JOURNEY_GLOBAL_DATA } from './types';
import { Device } from '@capacitor/device';
import { COUNTRY_LIST_EXT } from '@utils/constants/country-list';
import { CONSTANTS_STRING } from '@utils/constants/string/constants-string';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  journeyGlobalCtrl = {
    location: undefined,
    occupation: undefined,
    referror: undefined,
    branch: undefined,
    channel: undefined,
    subChannel: undefined,
    accountManager: undefined,
    dashBoardIndex: 0,
    internet: false,
    fullSyncProgress: undefined,
    leadsFullSyncStatus: undefined,
    naFullSyncStatus: undefined,
    irpqFullSyncStatus: undefined,
    siFullSyncStatus: undefined,
    eappFullSyncStatus: undefined,
    checklistFullSyncStatus: undefined,
    referrorFullSyncStatus: undefined,
    session: [],
    requestResponse: [],
    isLocalStorageToggle: false
  };

  journeyGlobalCtrl$ = new BehaviorSubject<JOURNEY_GLOBAL_DATA>(this.journeyGlobalCtrl);
  journeyGlobalData: JOURNEY_GLOBAL_DATA | null = null;

  constructor(
    private applicationRef: ApplicationRef,
    private storage: Storage,
  ) {
    this.journeyGlobalCtrl$.subscribe(value => {
      this.journeyGlobalData = value;
      this.applicationRef.tick();
    });
  }

  async getSequenceNumber() {
    try {
      const rawData = await this.storage.get(SETTING_KEYS.SETTINGS_DATA);
      const data = JSON.parse(rawData.data);
      return data.systemInfo[0].data.maxApplicationNumber;
    } catch (error) {
      throw error;
    }
  }

  async getRecommendedProductsList(channel: string) {
    try {
      const rawData = await this.storage.get(SETTING_KEYS.SETTINGS_DATA);
      const data = JSON.parse(rawData.data);
      const recommendedProductsData = data.recommendedProducts[0].data;

      if (recommendedProductsData == null) {
        return null;
      } else {
        let retData: any;
        try {
          switch (channel) {
            case SETTING_KEYS.CHANNEL_AGENCY:
              retData = recommendedProductsData.AGENCY;
              break;
            case SETTING_KEYS.CHANNEL_PNB:
              retData = recommendedProductsData.PNB;
              break;
            case SETTING_KEYS.CNANNEL_HSBC:
              retData = recommendedProductsData.HSBC;
              break;
            default:
              retData = recommendedProductsData.AGENCY;
              break;
          }
        } catch (switchUndefinedException) {
          retData = null;
        }
        return retData;
      }
    } catch (err) {
      throw err;
    }
  }


  async getRecommendedProductsByNeedType(channel: string, productType: string, needType: string) {
    try {
      const recommendedProductsList = await this.getRecommendedProductsList(channel);
      if (recommendedProductsList == null) {
        return null;
      } else {
        let recPro: any;
        try {
          switch (needType) {
            case NEED_ANALYSIS_TYPE.SAVINGS.CODE:
              recPro = recommendedProductsList[productType].SAV;
              break;
            case NEED_ANALYSIS_TYPE.PROTECTION.CODE:
              recPro = recommendedProductsList[productType].PRT;
              break;
            case NEED_ANALYSIS_TYPE.HEALTH.CODE:
              recPro = recommendedProductsList[productType].HLTH;
              break;
            case NEED_ANALYSIS_TYPE.EDUCATION.CODE:
              recPro = recommendedProductsList[productType].EDU;
              break;
            case NEED_ANALYSIS_TYPE.RETIREMENT.CODE:
              recPro = recommendedProductsList[productType].RET;
              break;
            case NEED_ANALYSIS_TYPE.ESTATE_PLANNING.CODE:
              recPro = recommendedProductsList[productType].EST;
              break;
            default:
              recPro = null;
              break;
          }
        } catch (switchUndefinedException) {
          recPro = null;
        }
        return recPro;
      }
    } catch (err) {
      throw err;
    }
  }

  async setCountryAndOccupationAndReferrer() {
    const rawData = await this.storage.get(SETTING_KEYS.SETTINGS_DATA);
    const referrerRawData = await this.storage.get(SETTING_KEYS.REFFERROR_DATA);
    if (!referrerRawData) return;
    const data = JSON.parse(rawData.data);
    const referrerData = JSON.parse(referrerRawData.data);
    const phCode = '63';
    const usCode = '1';
    const backUpRawData = await this.storage.get(SETTING_KEYS.BCK_UP_SETTINGS_DATA);
    const backUpData = JSON.parse(backUpRawData.data);
    let countriesData = null;
    let occupationData = null;
    if (data && data.locations && data.locations.length == 1) {
      countriesData = data.locations[0].data.countries;
      occupationData = data.occupations[0].data.groups;
    } else {
      countriesData = backUpData.locations[0].data.countries;
      occupationData = backUpData.occupations[0].data.groups;
    }

    countriesData = _.filter(countriesData, (item) => {
      return item.countryCode === phCode || item.countryCode === usCode;
    });

    let usCountryIndex = countriesData.findIndex(o => o.countryCode === '1');
    let usCountry = countriesData[usCountryIndex]
    for (let i = 0; i < usCountry.states.length; i++) {
      if (usCountry.states[i].name == "DELAWARE") {
        usCountry.states.splice(i, 1);
      }
    }
    countriesData[usCountryIndex].states = usCountry.states

    const externalCountryList = COUNTRY_LIST_EXT;
    countriesData = countriesData.concat(externalCountryList);
    countriesData = _.sortBy(countriesData, 'name');

    occupationData = _.sortBy(occupationData, 'name');
    await this.storage.set(KEYS.LOCATION, countriesData);
    await this.storage.set(KEYS.OCCUPATIONS, occupationData);
    await this.storage.set(KEYS.REFERROR, referrerData);

    this.updateJourneyGlobalLocation(countriesData);
    this.updateJourneyGlobalOccupation(occupationData);
    this.updateJourneyGlobalReferror(referrerData);
  }

  async getGenericCode(countryCode: string, stateId?: string, cityCode?: string) {
    const phCode = '63';
    const usCode = '1';

    const location = await this.storage.get(KEYS.LOCATION);
    const country = _.find(location, { countryCode });

    if (cityCode && stateId && countryCode) {
      if ([CONSTANTS_STRING.PH_CODE, CONSTANTS_STRING.US_CODE].includes(countryCode)) {
        const state = _.find(country.states, { stateId });
        if (!state) return;
        let city = _.find(state.cities, { cityCode });
        const zipCodes = _.orderBy(city.zipCodes,
          [(code) => {
            return code.zipCode = +code.zipCode;
          }],
          ['asc']);
        city = { ...city, zipCodes };
        return city;
      } else {
        return cityCode;
      }
    } else if (stateId && countryCode) {
      if ([CONSTANTS_STRING.PH_CODE, CONSTANTS_STRING.US_CODE].includes(countryCode)) {
        const state = _.find(country.states, { stateId });
        return state;
      }
      else {
        return stateId;
      }
    } else if (countryCode) {
      return country;
    }
  }

  async getReferror(searchItem?: string) {
    const referrerData = await this.storage.get(KEYS.REFERROR);
    const referrer: Array<{
      fullname: string
      referrerCode: string
      statusCode: number
      branchName: string
      branchCode: string
      firstName: string
      middleName: string
      lastName: string
    }> = [];

    for (const key in referrerData) {
      if (referrerData[key].statusCode == 1) {
        referrer.unshift({
          fullname: `${referrerData[key].firstName} ${referrerData[key].middleName ? referrerData[key].middleName : ''} ${referrerData[key].name}`,
          referrerCode: referrerData[key].referrorCode,
          statusCode: referrerData[key].statusCode,
          branchName: referrerData[key].employeeBranch,
          branchCode: referrerData[key].branchCode,
          firstName: referrerData[key].firstName,
          middleName: referrerData[key].middleName ? referrerData[key].middleName : null,
          lastName: referrerData[key].name
        })
      } else {
        referrer.push({
          fullname: `${referrerData[key].firstName} ${referrerData[key].middleName ? referrerData[key].middleName : ''} ${referrerData[key].name}`,
          referrerCode: referrerData[key].referrorCode,
          statusCode: referrerData[key].statusCode,
          branchName: referrerData[key].employeeBranch,
          branchCode: referrerData[key].branchCode,
          firstName: referrerData[key].firstName,
          middleName: referrerData[key].middleName ? referrerData[key].middleName : null,
          lastName: referrerData[key].name
        })
      }
    }

    return referrer;
  }

  async getOfflineApplicationNumber() {
    const offApplicationNumberData = await this.storage.get(KEYS.OFF_APP_NUMBER);
    if (!offApplicationNumberData) return;
    const offlineApplicationNumber: Array<{
      applicationNumber: string
      clientExpiryDate: string
      serverExpiryDate: string
      used: boolean,
      macAddress: string
    }> = [];

    for (const key in offApplicationNumberData) {
      if (offApplicationNumberData[key].macAddress) {
        const deviceId = (await Device.getId()).identifier;
        if (offApplicationNumberData[key].macAddress == deviceId) {
          offlineApplicationNumber.push({
            applicationNumber: offApplicationNumberData[key].applicationNumber,
            clientExpiryDate: offApplicationNumberData[key].clientExpiryDate,
            serverExpiryDate: offApplicationNumberData[key].serverExpiryDate,
            used: offApplicationNumberData[key].used,
            macAddress: offApplicationNumberData[key].macAddress
          })
        }
      }
    }

    return offlineApplicationNumber;
  }

  async getBranchList(branchName?: string) {
    const accountManagerData = await this.storage.get(SETTING_KEYS.ACCOUNTMANAGER_DATA);
    const data = JSON.parse(accountManagerData.data);
    const branchList = data[0].branchList;
    const branches: Array<{
      branchName: string
      branchCode: string
    }> = [];

    await this.storage.set('branchList', branchList);

    this.updateJourneyGlobalBranch(branchList);

    if (branchName !== undefined && branchName !== null) {
      for (const key in branchList) {
        if (branchName === branchList[key]) {
          branches.push({
            branchName: branchList[key],
            branchCode: key
          });
        }
      }
    } else {
      // tslint:disable-next-line:forin
      for (const key in branchList) {
        branches.push({
          branchName: branchList[key],
          branchCode: key
        });
      }
    }

    return branches;
  }

  getOccupationCode(code?: string, grpCode?: string) {
    const occupations = this.journeyGlobalData?.occupation;
    const occupation = _.find(occupations, { code });
    if (grpCode && code) {
      const vessel = _.find(occupation.occupations, { code: grpCode });
      return vessel.vessels;
    } else if (code) {
      return occupation.occupations;
    }
  }

  async setAccountManager() {
    const accountManager = await this.storage.get(SETTING_KEYS.ACCOUNTMANAGER_DATA);
    if (accountManager.data) {
      const accMngrData = JSON.parse(accountManager.data)[0];
      this.updateJourneyGlobalAccountManager(accMngrData);
    }
  }

  async setChannel() {
    const activeChannel = await this.storage.get(SETTING_KEYS.CHANNEL);
    this.updateJourneyGlobalChannel(activeChannel);
  }

  async getTermsAndConditions(): Promise<string> {
    const rawData = await this.storage.get(SETTING_KEYS.SETTINGS_DATA);
    const data = JSON.parse(rawData.data);
    return data.systemInfo[0].termsAndConditions;
  }

  async channelConfig(channel: string) {
    const activeChannel = await this.storage.get(SETTING_KEYS.CHANNEL);
    if (channel == activeChannel) {
      return true;
    } else {
      return false;
    }
  }

  async initializeJourneyGlobalData() {
    await this.setCountryAndOccupationAndReferrer();
    await this.getBranchList();
    await this.setChannel();
    await this.setAccountManager();
  }

  updateJourneyGlobalLocation(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, location: updateData })
  }

  updateJourneyGlobalOccupation(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, occupation: updateData })
  }

  updateJourneyGlobalReferror(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, referror: updateData })
  }

  updateJourneyGlobalBranch(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, branch: updateData })
  }

  updateJourneyGlobalChannel(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, channel: updateData })
  }

  updateJourneyGlobalSubChannel(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, subChannel: updateData })
  }

  updateJourneyGlobalAccountManager(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, accountManager: updateData })
  }

  updateDashboardIndex(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, dashBoardIndex: updateData })
  }

  updateJourneyGlobalInternet(updateData: any) {
    this.journeyGlobalCtrl$.value.requestResponse.push(`[${new Date().toLocaleString()}] Internet:${updateData}`)
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, internet: updateData })
  }

  updateJourneyGloballeadsFullSyncStatus(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, leadsFullSyncStatus: updateData })
  }

  updateJourneyGlobalnaFullSyncStatus(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, naFullSyncStatus: updateData })
  }

  updateJourneyGlobalirpqFullSyncStatus(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, irpqFullSyncStatus: updateData })
  }

  updateJourneyGlobalsiFullSyncStatus(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, siFullSyncStatus: updateData })
  }

  updateJourneyGlobaleappFullSyncStatus(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, eappFullSyncStatus: updateData })
  }

  updateJourneyGlobalchecklistFullSyncStatus(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, checklistFullSyncStatus: updateData })
  }

  updateJourneyGlobalreferrorFullSyncStatus(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, referrorFullSyncStatus: updateData })
  }

  updateJourneyGlobalfullSyncProgress(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, fullSyncProgress: updateData })
  }

  updateJourneyGlobalUpdateSession(updateData: any) {
    this.journeyGlobalCtrl$.value.session.push(`${updateData}`)
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value })
  }

  updateJourneyGlobalUpdateRequestResponseLogging(updateData: any) {
    this.journeyGlobalCtrl$.value.requestResponse.push(`[${new Date().toLocaleString()}] ${updateData}`)
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value })
  }

  updateJourneyGlobalUpdateSignatureValueFromLocalStorage(updateData: any) {
    this.journeyGlobalCtrl$.next({ ...this.journeyGlobalCtrl$.value, isLocalStorageToggle: updateData })
  }


  async getHSBCClosingBranches() {
    try {
      const rawData = await this.storage.get(SETTING_KEYS.SETTINGS_DATA);
      const data = JSON.parse(rawData.data);
      const { hsbcClosingBranch } = data;
      const hsbcClosingBranchVal: any = [];
      const keys = Object.keys(hsbcClosingBranch) as (keyof typeof hsbcClosingBranch)[];
      keys.forEach((key) => {
        hsbcClosingBranchVal.push({
          key: key,
          value: hsbcClosingBranch[key]
        })
      });
      return hsbcClosingBranchVal;
    } catch (error) {
      throw error;
    }
  }
}
