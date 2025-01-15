import { PERSON_TYPE } from '@utils/constants/si_person_type';
import { DatePipe, Location } from '@angular/common';
import { SI_KEYS } from '@utils/constants/storage-keys/sales-illustration-keys';
import { Injectable } from '@angular/core';
import { LoadingController, AlertController, ToastController, ModalController } from '@ionic/angular';
import * as moment from 'moment';
import * as _ from 'lodash';
import { v4 as uuid } from 'uuid';
import { Router } from '@angular/router';
import { AlertService } from '@services/alert/alert.service';
import { IRouter } from '@models/utils/router';
import { IAlert } from '@models/utils/alert';
import { SettingsService } from '@services/settings/settings.service.service';
import { ColumnGeneratorSpecs, isFieldColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { FormGroup, Validators } from '@angular/forms';
import { FormArray, FormBuilder } from '@angular/forms';
import { GENDER } from '@utils/constants/options/segment/gender';
import { Storage } from '@ionic/storage';
import { Toast } from '@models/utils/toast';
import { BaseCardInfo } from '@models/base-card-info';
import { Loader } from '@models/utils/loader';
import { WS_QUESTION_CODE_MAPPER } from '@utils/constants/mapper/ws-question-code-mapper';
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import { BackNavigation } from '@models/utils/back-nav';
import { ACTION_MESSAGE } from '@utils/constants/string/action-message';
import { FieldDisablingParams } from '@models/form-generator';
import { RowGeneratorSpecs, isRowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { DynamicTableSpecs, isDynamicTableSpecs } from '@models/specs/dynamic-table-specs';
import { FieldSpecs, isFieldSpecs } from '@models/specs/field-specs';
import { DbService } from '@services/db/db.service';
import { WhereData } from '@models/query-data/where-data';
import { ADDRESS_TYPE } from '@utils/enums/address-type';
import { OCCUPATION_MAPPER } from '@utils/constants/mapper/occupation_mapper';
import { STATUS } from '@utils/constants/status/status';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { CONSTANTS_STRING } from '@utils/constants/string/constants-string';
import { AppVersion } from '@ionic-native/app-version/ngx';
import { File } from '@ionic-native/file/ngx';
import { PAYMENT_FREQUENCY, PAYMENT_METHODS } from '@utils/constants/options/product-info/payment-method';
import { PLANS } from '@utils/constants/options/product-info/plans';
import { KEYS } from '@utils/constants/storage-keys/keys';
import { REGEXP } from '@utils/constants/regexp/regexp';
import { PROFILE_QUESTIONS } from '@utils/constants/options/radio/irpq/profile-questions';
import { CONSTANT_DB_TABLE } from '@utils/constants/constant-table-name';
import { WHATS_NEW_TYPE } from '@utils/constants/whats-new-type';
import { WhatsNewModalComponent } from '@components/modals/whats-new-modal/whats-new-modal.component';
import { WhatsNew } from '@models/whats-new';
import { MultipleErrorsModalComponent } from '../../components/modals/multiple-errors-modal/multiple-errors-modal.component';
import { Screenshot } from '@ionic-native/Screenshot/ngx';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { BehaviorSubject } from 'rxjs';
import { ROUTES } from '@utils/constants/route/routes';
import { FORM_ACTIONS } from '@utils/enums/form-actions';
import { ModalViewComponent } from '@components/modal-view/modal-view.component';
import * as ConfigDetails from '@form-specs/settings/settings-form-specs';
import { ConfigDetailsFormGroup } from '@fg-controls/settings';
import { ApplicationNumberService, CoreApiService } from '@core/services';
import { environment } from '@environment/environment';
import { QUEUE_PROCESS, QUEUE_STATUS } from '@utils/enums/queue-data';
import { Device } from '@ionic-native/device/ngx';
import { COUNTRY_LIST_EXT } from '@utils/constants/country-list';
import { DIVIDEND_OPTION_WS } from '@utils/constants/dividend-option-ws';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  public countryList = [];
  loading = {}; // * Store loaders created from `startLoader` method.
  dbInstance: any = null;
  DB_DATE_FORMAT = 'YYYY-MM-DD';
  DISPLAY_DATE_FORMAT = 'DD-MM-YYYY';
  occupationList: any = [];
  isLoading = false;
  toasts: Toast[] = [];

  backBtnEvent$: BehaviorSubject<{ url: string, siId: number, status: string }> = new BehaviorSubject({ url: '', siId: 0, status: '' });
  queueParams$: BehaviorSubject<any> = new BehaviorSubject({});
  
  eappId
  invalidAppNumModal;
  getNewApplicationNumber;
  constructor(
    private loadingController: LoadingController,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    private router: Router,
    private alertService: AlertService,
    private settingsService: SettingsService,
    private storage: Storage,
    private location: Location,
    private dbService: DbService,
    private httpClient: HttpClient,
    private file: File,
    private fileOpener: FileOpener,
    private screenshot: Screenshot,
    private syncApiService: CoreApiService,
    private appVersion: AppVersion,
    public modalCtrl: ModalController,
    private datePipe: DatePipe,
    public alertController: AlertController,
    private offAppNumService: ApplicationNumberService,
    private device: Device
  ) {
    this.occupationList = JSON.parse(localStorage.getItem('occupationsGroupData'));

  }

  public generateUUID(): string {
    return uuid();
  }
  takeScreenshot() {
    this.screenshot.save().then(() => {
      this.infoAlert("Successfully downloaded.")
    })

  }
  setPolicyData(a) {
    this.storage.set('pdata', a)
  }
  getPolicyData() {
    return this.storage.get('pdata')
  }
  setLeadFname(a) {
    this.storage.set('fn', a)

  }
  setLeadLname(a) {
    this.storage.set('ln', a)

  }
  getLeadFname() {
    return this.storage.get('fn')
  }
  getLeadLname() {
    return this.storage.get('ln')
  }
  navigateTo(iRoute: IRouter) {
    const setParams = iRoute.params !== undefined ? iRoute.params : {};
    this.router.navigate([`${iRoute.url}`, setParams]);
  }

  navigateToReplaceUrl(iRoute: IRouter) {
    const setParams = iRoute.params !== undefined ? iRoute.params : {};
    this.router.navigate([`${iRoute.url}`, setParams], { replaceUrl: true });
  }

  addTableRow(fa: FormArray, controlConfig: {}, fb: FormBuilder): void {
    fa.push(fb.group(controlConfig));
  }

  async navigateDisplayAlert(
    iRoute: IRouter,
    iAlert: IAlert
  ) {
    const alert = await this.alertService.displayAlert(
      iAlert.message, iAlert.actionLabel,
      iAlert.actionCallBack, iAlert.cancelLabel);

    alert.onDidDismiss().then((data) => {
      if (data.role !== 'cancel' && iRoute.url === ROUTES.LEADS) {
        this.navigateToReplaceUrl(iRoute);
        return;
      }
      if (data.role !== 'cancel') {
        this.navigateTo(iRoute);
      }
    });
    return await alert.present();
  }

  async getAddressGenericCode(spec: ColumnGeneratorSpecs, specToName: ColumnGeneratorSpecs, specsToClear: ColumnGeneratorSpecs[], formGroup: FormGroup, type: string, countryCode?: string, stateId?: string, cityCode?: string) {
    const phCode = '63';
    const usCode = '1';

    if (cityCode && stateId && countryCode) {
      if (type === ADDRESS_TYPE.BENE) {
        formGroup.controls[`zipCode`].reset();
      }
      if (spec) {
        spec.field.states = [];
        spec.field.city = [];
        specToName.field.selectedText = await this.getAddressName(countryCode, stateId, cityCode);
        specsToClear.forEach(specs => {
          if (specs) {
            specs.field.selectedText = '';
          }
        });

        if([CONSTANTS_STRING.PH_CODE, CONSTANTS_STRING.US_CODE].includes(countryCode)) {
          const zipcode = await this.settingsService.getGenericCode(countryCode, stateId, cityCode);
          if (zipcode && zipcode.zipCodes && zipcode.zipCodes.length > 0) {
            formGroup.controls[spec.field.attName].enable();
            formGroup.controls[spec.field.attName].updateValueAndValidity();
            spec.field.zipcode = this.sortAddressByName('zipcode', zipcode.zipCodes);

          } else {
            spec.field.zipcode = [];
            formGroup.controls[spec.field.attName].disable();
            formGroup.controls[spec.field.attName].updateValueAndValidity();
          }
        }
      }
    } else if (stateId && countryCode) {
      if (type === ADDRESS_TYPE.BENE) {
        formGroup.controls[`cityCode`].reset();
        formGroup.controls[`zipCode`].reset();
      } else if (type === ADDRESS_TYPE.BOPOB) {
        const cityControl = formGroup.controls[`pobCityCode`];
        const zipControl = formGroup.controls[`pobZipCode`];
        if ([phCode, usCode].includes(countryCode, 2)) {
          if (cityControl) cityControl.reset();
          if (zipControl) zipControl.reset();
        }
      } else if (type === ADDRESS_TYPE.BOPRESENT) {
        const cityControl = formGroup.controls[`presentCityCode`];
        const zipControl = formGroup.controls[`presentZipCode`];
        if ([phCode, usCode].includes(countryCode, 2)) {
          if (cityControl) cityControl.reset();
          if (zipControl) zipControl.reset();
        }
      } else if (type === ADDRESS_TYPE.BOWORK) {
        const cityControl = formGroup.controls[`workCityCode`];
        const zipControl = formGroup.controls[`workZipCode`];
        if ([phCode, usCode].includes(countryCode, 2)) {
          if (cityControl) cityControl.reset();
          if (zipControl) zipControl.reset();
        }
      } else if (type === ADDRESS_TYPE.BENEPOB) {
        const cityControl = formGroup.controls[`pobCity`];
        const zipControl = formGroup.controls[`pobZip`];
        if ([phCode, usCode].includes(countryCode, 2)) {
          if (cityControl) cityControl.reset();
          if (zipControl) zipControl.reset();
        }
      } else if (type === ADDRESS_TYPE.BENEPRESENT) {
        const cityControl = formGroup.controls[`cityCode`];
        const zipControl = formGroup.controls[`zipCode`];
        if ([phCode, usCode].includes(countryCode, 2)) {
          if (cityControl) cityControl.reset();
          if (zipControl) zipControl.reset();
        }
      } else if (type === ADDRESS_TYPE.POB) {
        formGroup.controls[`${type}City`].reset();
      } else {
        formGroup.controls[`${type}CityCode`].reset();
        formGroup.controls[`${type}ZipCode`].reset();

        formGroup.controls[`${type}CityCode`].disable();
        formGroup.controls[`${type}ZipCode`].disable();
      }
      if (spec) {
        spec.field.zipcode = [];
        spec.field.states = [];
        specToName.field.selectedText = await this.getAddressName(countryCode, stateId);
        specsToClear.forEach(specs => {
          if (specs) {
            specs.field.selectedText = '';
          }
        });
        const city = await this.settingsService.getGenericCode(countryCode, stateId);

        if (city && city.cities && city.cities.length > 0) {
          formGroup.controls[spec.field.attName].enable();
          spec.field.isDisabled = false;
          formGroup.controls[spec.field.attName].updateValueAndValidity();
          spec.field.city = this.sortAddressByName('city', city.cities);
          if (formGroup.controls[`${type}ZipCode`]) {
            formGroup.controls[`${type}ZipCode`].disable();
          }
        } else {
          formGroup.controls[spec.field.attName].disable();
          spec.field.isDisabled = true;
          formGroup.controls[spec.field.attName].updateValueAndValidity();
          spec.field.city = [];
          if (formGroup.controls[`${type}ZipCode`]) {
            formGroup.controls[`${type}ZipCode`].disable();
          }
          formGroup.controls[spec.field.attName].updateValueAndValidity();
          spec.field.zipcode = [];
        }
      }
    } else if (countryCode) {
      if (type === ADDRESS_TYPE.BENE) {
        formGroup.controls[`provinceCode`].reset();
        formGroup.controls[`cityCode`].reset();
        formGroup.controls[`zipCode`].reset();
      } else if (type === ADDRESS_TYPE.BOPOB) {
        const provinceControl = formGroup.controls[`pobProvinceCode`];
        const cityControl = formGroup.controls[`pobCityCode`];
        const zipControl = formGroup.controls[`pobZipCode`];
        if ([phCode, usCode].includes(countryCode, 2)) {
          if (provinceControl) provinceControl.reset();
          if (cityControl) cityControl.reset();
          if (zipControl) zipControl.reset();
        }
      } else if (type === ADDRESS_TYPE.BOPRESENT) {
        const provinceControl = formGroup.controls[`presentProvinceCode`];
        const cityControl = formGroup.controls[`presentCityCode`];
        const zipControl = formGroup.controls[`presentZipCode`];
        if ([phCode, usCode].includes(countryCode, 2)) {
          if (provinceControl) provinceControl.reset();
          if (cityControl) cityControl.reset();
          if (zipControl) zipControl.reset();
        }
      } else if (type === ADDRESS_TYPE.BOWORK) {
        const provinceControl = formGroup.controls[`workProvinceCode`];
        const cityControl = formGroup.controls[`workCityCode`];
        const zipControl = formGroup.controls[`workZipCode`];
        if ([phCode, usCode].includes(countryCode, 2)) {
          if (provinceControl) provinceControl.reset();
          if (cityControl) cityControl.reset();
          if (zipControl) zipControl.reset();
        }
      } else if (type === ADDRESS_TYPE.BENEPOB) {
        const provinceControl = formGroup.controls[`pobProvince`];
        const cityControl = formGroup.controls[`pobCity`];
        const zipControl = formGroup.controls[`pobZip`];
        if ([phCode, usCode].includes(countryCode, 2)) {
          if (provinceControl) provinceControl.reset();
          if (cityControl) cityControl.reset();
          if (zipControl) zipControl.reset();
        }
      } else if (type === ADDRESS_TYPE.BENEPRESENT) {
        const provinceControl = formGroup.controls[`provinceCode`];
        const cityControl = formGroup.controls[`cityCode`];
        const zipControl = formGroup.controls[`zipCode`];
        if ([phCode, usCode].includes(countryCode, 2)) {
          if (provinceControl) provinceControl.reset();
          if (cityControl) cityControl.reset();
          if (zipControl) zipControl.reset();
        }
      } else if (type === ADDRESS_TYPE.POB) {
        formGroup.controls[`${type}Province`].reset();
        formGroup.controls[`${type}City`].reset();
      } else if (type === ADDRESS_TYPE.HOME || type === ADDRESS_TYPE.WORK) {
        formGroup.controls[`${type}ProvinceCode`].reset();
        formGroup.controls[`${type}CityCode`].reset();
        formGroup.controls[`${type}ZipCode`].reset();
      }
      if (spec) {
        spec.field.countries = [];
        spec.field.zipcode = [];
        spec.field.city = [];
        specToName.field.selectedText = await this.getAddressName(countryCode);
        specsToClear.forEach(specs => {
          if (specs) {
            specs.field.selectedText = '';
          }
        });
        const states = await this.settingsService.getGenericCode(countryCode);
        if (states.states && states.states.length > 0) {
          formGroup.controls[spec.field.attName].enable();
          formGroup.controls[spec.field.attName].updateValueAndValidity();
          spec.field.states = this.sortAddressByName('state', states.states);
        } else {
          formGroup.controls[spec.field.attName].disable();
          formGroup.controls[spec.field.attName].updateValueAndValidity();
          spec.field.states = [];
        }
      }
    }
    return formGroup.updateValueAndValidity();
  }

  setAddressCondition(
    formGroup: FormGroup,
    specs: ColumnGeneratorSpecs[],
    addressType: string,
    personType: string,
    showInfo?: boolean) {
    const phCode = '63';
    let workCondition;
    let isNonEarner;
    let countryCode;

    if (addressType === ADDRESS_TYPE.HOME || addressType === ADDRESS_TYPE.WORK) {
      countryCode = formGroup.controls[`${addressType}CountryCode`].value;
      const occupationCode = formGroup.controls.occupationCode.value;
      const occupationMapper = { ...OCCUPATION_MAPPER };
      const juvenileOccCode = '215';

      if (personType === PERSON_TYPE.AO) {
        delete occupationMapper[juvenileOccCode];
      }
      workCondition = _.has(occupationMapper, occupationCode);
      isNonEarner = _.has(occupationMapper, occupationCode);
    }

    if (addressType === ADDRESS_TYPE.BENE) {
      countryCode = formGroup.controls[`countryCode`].value;
      workCondition = phCode !== countryCode;
    }

    const setFieldProperties = (spec, isRequired) => {
      const { field } = spec;
      field.isRequired = isRequired;
      field.showInfo = showInfo;
      if (isRequired) {
        formGroup.controls[field.attName].setValidators([Validators.required]);
      } else {
        if(spec.field.attName === 'workZipCode') {
          formGroup.controls[field.attName].setValidators([Validators.pattern(REGEXP.NUMBER_ONLY)]);
        } else {
          formGroup.controls[field.attName].clearValidators();
          formGroup.controls[field.attName].setErrors(null);
        }
      }
      formGroup.controls[field.attName].updateValueAndValidity();
    };

    if (showInfo || (workCondition || phCode !== countryCode)) {
      specs.forEach(spec => {
        spec.field.isRequired = false;
        spec.field.showInfo = showInfo;
        spec.field.infoFunction = () => this.presentToastMessage({
          message: `For Life Plans, this field is required`,
          color: 'secondary',
          position: 'bottom',
          duration: 3000
        });

        if (addressType === ADDRESS_TYPE.HOME) {
          if (countryCode === '63') {
            setFieldProperties(spec, true);
          } else {
            if (spec.field.attName !== 'homeZipCode') {
              setFieldProperties(spec, true);
            } 
          }
        }

        if (addressType === ADDRESS_TYPE.WORK) {
          if (isNonEarner) {
            setFieldProperties(spec, false);
          } else {
            if (countryCode === '63') {
              setFieldProperties(spec, true);
            } else {
              if (spec.field.attName !== 'workZipCode') {
                setFieldProperties(spec, true);
              } 
            }
          }
        }

        if (addressType === ADDRESS_TYPE.BENE) {
          if (countryCode === '63') {
            setFieldProperties(spec, true);
          } else {
            if (spec.field.attName !== 'zipCode') {
              setFieldProperties(spec, true);
            } else {
              setFieldProperties(spec, false);
            }
          }
        }

      });
    } else {
      specs.forEach(spec => {
        setFieldProperties(spec, true);
      });
    }
  }

  removeAddressRequired(
    formGroup: FormGroup,
    specs: ColumnGeneratorSpecs[]) {
    specs.forEach(spec => {
      spec.field.isRequired = false;
      spec.field.showInfo = false;
      formGroup.controls[spec.field.attName].clearValidators();
      formGroup.controls[spec.field.attName].updateValueAndValidity();
    });
  }

  setOccupationCondition(
    formGroup: FormGroup,
    specs: ColumnGeneratorSpecs[],
    showInfo?: boolean) {
    if (showInfo) {
      specs.forEach(spec => {
        if (spec !== undefined) {
          spec.field.isRequired = false;
          spec.field.showInfo = showInfo;
          spec.field.infoFunction = () => this.presentToastMessage({
            message: `For Life Plans, this field is required`,
            color: 'secondary',
            position: 'bottom',
            duration: 3000
          });
          formGroup.controls[spec.field.attName].clearValidators();
          formGroup.controls[spec.field.attName].updateValueAndValidity();
        }
      });
    } else {
      specs.forEach(spec => {
        if (spec !== undefined) {
          spec.field.isRequired = true;
          spec.field.showInfo = showInfo;
          formGroup.controls[spec.field.attName].setValidators([Validators.required]);
          formGroup.controls[spec.field.attName].updateValueAndValidity();
        }
      });
    }
  }

  getAddressName(countryCode: string, stateId?: string, cityCode?: string, zipCode?: string) {
    const { location } = this.settingsService.journeyGlobalData;
    const country = _.find(location, { countryCode });
    if (countryCode && stateId === null && cityCode === null){
      return null;
    }else if (countryCode && stateId === null){
      return null;
    }else if (zipCode && cityCode && stateId && countryCode) {
      if(countryCode == CONSTANTS_STRING.PH_CODE || countryCode == CONSTANTS_STRING.US_CODE) {
        const state = _.find(country.states, { stateId });
        if (!state) return;
        const city = _.find(state.cities, { cityCode });
        const code = _.find(city.zipCodes, { zipCode });
        if (code) {
          return code.zipCode;
        }
      } else return zipCode;
    } else if (cityCode && stateId && countryCode) {
      if(countryCode == CONSTANTS_STRING.PH_CODE || countryCode == CONSTANTS_STRING.US_CODE) {
        const state = _.find(country.states, { stateId });
        if (!state) return;
        const city = _.find(state.cities, { cityCode });
        if (city) {
          return city.name;
        }
      } else return cityCode;
    } else if (stateId && countryCode) {
      if(countryCode == CONSTANTS_STRING.PH_CODE || countryCode == CONSTANTS_STRING.US_CODE) {
        const state = _.find(country.states, { stateId });
        if (state) {
          return state.name;
        }
      } else return stateId;
    } else if (countryCode) {
      if (country) {
        return country.name;
      }
    }
  }

  getOccupationName(occupationCode: string, occupationGrpCode?: string, vessel?: string) {
    const occupations = this.settingsService.journeyGlobalData.occupation;
    const occupation = _.find(occupations, { code: occupationCode });

    if (vessel && occupationGrpCode && occupationCode) {
      const occupationGroup = _.find(occupation.occupations, { code: occupationGrpCode });
      const vesselType = _.find(occupationGroup.vessels, { code: vessel });
      return vesselType.name;
    } else if (occupationGrpCode && occupationCode) {
      const occupationGroup = _.find(occupation.occupations, { code: occupationGrpCode });
      return occupationGroup.name;
    } else if (occupationCode) {
      return occupation.name;
    }
  }

  getGenderValue(genderKey: string) {
    if (!genderKey) return null;
    if (genderKey == 'Male' || genderKey == 'Female') {
      return genderKey;
    } else {
      const type = _.find(GENDER, { key: genderKey });
      return type.value;
    }
  }


  getAge(dateOfBirth: string, endDate?: string, isAgeNearestBirthday?: boolean): any {
    let baseDate = (endDate) ? new Date(moment(parseInt(endDate)).format("YYYY-MM-DD HH:mm:ss")) :
      new Date();
    let birthDate = new Date(dateOfBirth);

    if (isAgeNearestBirthday) {
      baseDate.setMonth(baseDate.getMonth() + 6)
    }

    let age = baseDate.getFullYear() - birthDate.getFullYear();
    const m = baseDate.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && baseDate.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }

  isNearestBirthday(birthdate: string, lowerBound: number, upperBound: number): boolean {
    const ownerAgeBuss = this.getLeadAge(birthdate)
    const age = Math.round(ownerAgeBuss)
    return age >= lowerBound && age <= upperBound;;
  }

  getLeadAge(birthdate: string): number {
    const currentDate = moment(new Date(), "YYYY-MM-DD");
    const birthDateMoment = moment(birthdate, "YYYY-MM-DD");
    const diffInDays = moment(currentDate).diff(birthDateMoment, 'days');
    const age = diffInDays / 365;
    return age;
  }

  async getOccupationGenericCode(spec: ColumnGeneratorSpecs, formGroup: FormGroup,
    specToClear: ColumnGeneratorSpecs[], code: string, grpCode?: string) {
    if (grpCode && code) {
      if (spec) {
        if (formGroup.controls.vesselType) {
          formGroup.controls.vesselType.reset();
          const vessel = this.settingsService.getOccupationCode(code, grpCode);
          spec.field.occupationGroup = [];
          spec.field.vesselType = vessel !== undefined ? vessel : [];
          specToClear.forEach(specs => {
            if (specs) {
              specs.field.selectedText = '';
            }
          });
        }
      }
    } else if (code) {
      formGroup.controls.occupationGrpCode.reset();
      const occupationGroup = this.settingsService.getOccupationCode(code);
      if (spec) {
        spec.field.vesselType = [];
        spec.field.occupations = [];
        spec.field.occupationGroup = occupationGroup;
        specToClear.forEach(specs => {
          if (specs) {
            specs.field.selectedText = '';
          }
        });
        formGroup.controls.occupationGrpCode.enable();
        spec.field.isDisabled = false;
        formGroup.controls.occupationGrpCode.markAsTouched();
      }
    }
    formGroup.updateValueAndValidity();
  }

  getOccupationCode(code: string) {
    let format: string[];
    format = code.split('.');

    return format;
  }


  formatDOBWS(value: string) {
    return moment(value).utc().format('YYYY-MM-DD');
  }

  formatCalendarDate(value: string) {
    const date = moment(+value).format('YYYY-DD-MM');

    return date;
  }

  formatDateYYYYMMDD(value: string) {
    const date = moment(+value).format('YYYY-MM-DD');

    return date;
  }

  formatDate(value: string,format:string){
    const date = moment(+value).format(format);

    return date;
  }

  formatCardDate(value: string) {
    const date = moment(+value).format('Do MMMM, YYYY, h:mm:ss A');

    return date;
  }


  formatFullDate(value: string) {
    const date = moment(value).format('Do MMMM, YYYY, h:mm:ss A');
    return date;
  }


  formatWSDate(value: string) {
    const date = moment(+value).format('MM/DD/YYYY h:mm:ss');

    return date;
  }

  formatDSDate(value: string) {
    const date = moment(+value).format('MM/DD/YYYY');
    const dateYear = moment(+value).format('YYYY');
    const today = moment().format('MM/DD/YYYY');
    const todayYear = moment().format('YYYY');
    if (dateYear == todayYear) {
      if (today == date) {
        return moment(+value).format('h:mm A');
      } else {
        return moment(+value).format('MM/DD');
      }
    } else {
      return moment(+value).format('MM/DD/YY');
    }
  }

  formatFullDateTime(value: string) {
    return moment(value).format('MM/DD/YYYY h:mm A');
  }

  getDateTime() {
    const dateObj = new Date();
    let year = dateObj.getFullYear();
    let month = ('0' + (dateObj.getMonth() + 1)).slice(-2);
    let date = ('0' + dateObj.getDate()).slice(-2);
    let hour = ('0' + dateObj.getHours()).slice(-2);
    let minute = ('0' + dateObj.getMinutes()).slice(-2);
    let second = ('0' + dateObj.getSeconds()).slice(-2);
    return `${year}-${month}-${date} ${hour}:${minute}:${second}`;
  }

  setDate() {
    return Date.now().toString();
  }

  convertMillisToDate(input: string): Date {
    const dateNum = Number(input);
    const dateObj = new Date(dateNum);
    return dateObj;
  }

  convertBase64ToBlob(base64: string, contentType: string): Blob {
    const sliceSize = 512;
    contentType = contentType || '';
    base64 = base64.replace(/^[^,]+,/, '');
    base64 = base64.replace(/\s/g, '');

    const byteCharacters = window.atob(base64);
    const byteArrays = [];

    for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
      const slice = byteCharacters.slice(offset, offset + sliceSize);
      const byteNumbers = new Array(slice.length);

      for (let i = 0; i < slice.length; i++) {
        byteNumbers[i] = slice.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, { type: contentType });
  }

  createObjectArrFromDBData(dbData) {
    const dataArr = [];
    if (dbData.rows && dbData.rows.length > 0) {
      for (let i = 0; i < dbData.rows.length; i++) {
        dataArr.push(dbData.rows.item(i));
      }
    }
    return dataArr;
  }

  objectArrSpaceCleanUp(object) {
    if(!object) return;
    Object.keys(object).forEach(key => { 
      let val = object[key]
      if(val) {
        val = val.toString().trim();
        val = ''+val.replace(/ +(?= )/g,'');
        object[key] = val;
      }
    });

    return object;
  }

  sortDataByDate(data) {
    if (data && data.length > 0) {
      data = data.sort((eappDateA, eappDateB) => {
        if (eappDateB.dateCreated) {
          return eappDateB.dateCreated - eappDateA.dateCreated;
        }
      });
    }

    return data;
  }

  async presentLoading(message: string, backdropDismiss?: boolean) {
    this.isLoading = true;

    const loadingCtrl = await this.loadingController.getTop();
    if (loadingCtrl) {
      await loadingCtrl.dismiss();
    }

    const loader = await this.loadingController.create({
      message,
      keyboardClose: true,
      backdropDismiss: backdropDismiss || false,
      showBackdrop: true,
    });
    await loader.present();

    return;
  }

  async dismissLoading() {
    this.isLoading = false;
    await this.loadingController.dismiss();
  }

  dynamicLoadingMessage(text: string) {
    const elem = document.querySelector("div.loading-wrapper div.loading-content");
    if (elem) elem.innerHTML = text;
  }

  async presentToastMessage(iToast: Toast) {

    const toastProps = {
      message: iToast.message,
      animated: iToast.animated || false,
      color: iToast.color,
      position: iToast.position,
      showCloseButton: iToast.showCloseButton,
      cssClass: iToast.cssClass || 'toast-util',
    };

    if (iToast.duration !== -1) {
      toastProps['duration'] = iToast.duration || 3000 // * set default duration to 3 seconds
    }

    if (iToast.buttons) {
      toastProps['buttons'] = iToast.buttons;
    }

    const toast = await this.toastCtrl.create(toastProps);

    // * callback function when toast is dismissed by user/duration.
    toast.onDidDismiss().then(() => {

      // * removing the first item on queue since it is dismissed.
      this.toasts.shift();

      // * display if there are errors on queue.
      if (this.toasts.length > 0) {
        this.showPresentToastMessage();
      }
    });

    // * puts the error on queue, prevents multiple stacking of toasts
    this.toasts.push(toast);

    // * prompts only when there are no toast in queue, hence, just leave it on toasts array and wait for the toast to dismiss
    return this.toasts.length === 1 && await this.showPresentToastMessage();
  }

  // * prompts current active toast for presentToastMessage()
  async showPresentToastMessage() {
    await this.toasts[0].present();
  }

  async handleJarInvalidResponse(response: any) {
    const errMsgList = [];
    const jarError = response.validationResult.errors;
    if (Object.keys(jarError).length > 0) {
      for (const key in jarError) {
        if (!jarError.hasOwnProperty(key)) { continue; }
        const obj = jarError[key];
        for (const prop in obj) {
          if (!obj.hasOwnProperty(prop)) { continue; }
          if (prop === 'message') {
            errMsgList.push(obj[prop]);
          }
        }
      }

    } else {
      // tslint:disable-next-line:forin
      for (const key in jarError) {
        errMsgList.push(jarError[key].message);
      }
    }


    if (errMsgList.length > 0) {
      const iToast: Toast = {
        message: errMsgList.join('\n'),
        animated: true,
        color: 'danger',
        position: 'bottom',
        showCloseButton: true,
        duration: 5000
      };

      return await this.presentToastMessage(iToast);
    }
  }

  async displayToastforBMIDeclr(msg: string) {
    const iToast: Toast = {
      message: msg,
      animated: true,
      color: 'danger',
      position: 'bottom',
      showCloseButton: true,
      duration: 5000
    };

    return await this.presentToastMessage(iToast);
  }

  async clearSalesIllustrationStorage() {
    await this.storage.remove(SI_KEYS.PERSON);
    await this.storage.remove(SI_KEYS.PRODUCT);
    await this.storage.remove(SI_KEYS.CUSTOMIZE);
    await this.storage.remove(SI_KEYS.FUND);
    await this.storage.remove(SI_KEYS.RIDER);
    await this.storage.remove(SI_KEYS.TOPUPWITHDRAWAL);
  }

  setMaxDate(isAgeField?: any) {
    return isAgeField ? moment().subtract(17, 'years').format() : moment().format();
  }

  setMinDate100(isAgeField?: any) {
    return isAgeField ? moment().subtract(100, 'years').format() : moment().format();
  }

  setMinDateMorethan100(isAgeField?: any) {
    return isAgeField ? moment().subtract(36864, 'd').format() : moment().format();
  }

  setMax21(isAgeField?: any) {
    if (isAgeField) {
      let newDate = moment().subtract(7, 'd').format();
      return newDate;
    } else {
      return moment().format();
    }
  }

  setMin21(isAgeField?: any) {
    if (isAgeField) {
      let newDate = moment().subtract(20, 'years').format();
      return newDate;
    } else {
      return moment().format();
    }
  }

  setFutureDate(years: number) {
    return moment().add(years, 'years').format();
  }

  getSafe(fn, defaultVal?) {
    try {
      return fn();
    } catch (e) {
      return defaultVal;
    }
  }

  async generateDataJar(data: any, appNumber: string, siRiders: any[], siFunds: any[], siTopUpwithdrawals: any[], proposedInsured?: any, aoBase64?: string, piBase64?: string, faBase64?: string) {
    const applicationNumber = appNumber || '12345678';
    const financialAgentName = await this.storage.get(SETTING_KEYS.ACCOUNTMANAGER_AGENT_NAME);
    const personalObjective = data.personalObjectives === null ? {} : JSON.parse(data.personalObjectives);
    const setSumAssuredKey = data.isTraditional === 0 ? 'basicSumAssured' : 'sumAssured';
    const isAoEqualsToPi = data.isAoEqualsPi === 1 ? 'YES' : 'NO';
    const funds = [];
    const riders = [];
    const topUps = [];
    const withdrawals = [];
    const policyDate = data.policyDate ? new Date(data.policyDate).toLocaleDateString("en-US") : new Date().toLocaleDateString("en-US");

    if (siRiders !== undefined) {
      if (siRiders.length > 0) {
        siRiders.forEach(rider => {
          delete rider.siId;
          const waiverRiderKey = 'WaiverRider';
          const colaRiderKey = 'COLA';
          if (rider.riderKey === waiverRiderKey || rider.riderKey === colaRiderKey) {
            delete rider.sumAssured;
          }
          delete rider.riskClassCode;
          delete rider.riskClassVersion;
          delete rider.riderVersion;
          delete rider.multipleExtra;
          riders.push(rider);
        });
      }
    }

    if (siFunds !== undefined) {
      if (siFunds.length > 0) {
        siFunds.forEach(fund => {
          delete fund.siId;
          funds.push({
            fundCode: fund.fundKey,
            direction: fund.fundDirection,
            fundVersion: fund.fundVersion
          });
        });
      }
    }

    if (siTopUpwithdrawals !== undefined) {
      if (siTopUpwithdrawals.length > 0) {
        siTopUpwithdrawals.forEach(topUpWithdrawal => {
          const topUpAmt = topUpWithdrawal.topUpAmt || 0;
          const withdrawalAmt = topUpWithdrawal.withdrawalAmt || 0;
          topUps.push({ year: topUpWithdrawal.policyYear, amount: topUpAmt });
          withdrawals.push({ year: topUpWithdrawal.policyYear, amount: withdrawalAmt });
        });
      }
    }

    const siPerson = await this.storage.get(SI_KEYS.PERSON);
    const insuredData = siPerson ? siPerson.data.additionalInsured : [];
    let jarData = {
      data: {
        isAoEqualsToPi,
        channel: await this.storage.get(SETTING_KEYS.CHANNEL),
        additionalInsured: insuredData,
        category: data.lifePriorityCategory,
        plan: {
          code: data.planCode,
          marketingName: PLANS[data.planCode],
          version: data.planVersion
        },
        inputOption: data.inputOption,
        premiumPaymentMode: data.payMode,
        currency: data.currency,
        inputPremium: data.inputPremium,
        deathBenefitOption: data.deathBenefit,
        dividendOption: data.dividendOption,
        [setSumAssuredKey]: data.basicSumAssured,
        sumAssuredMultiple: data.sumAssuredMultiple,
        applicationNumber,
        personalObjective,
        personalObjective2: data.premiumPayment,
        yearsToPay: data.payYears,
        rider: riders || [],
        fund: funds || [],
        withdrawal: withdrawals || [],
        topUp: topUps || [],
        regularTopUp: data.regularTopUp,
        scheduledWithdrawalAmount: data.scheduledWithdrawalAmount,
        scheduledWithdrawalEndAge: data.scheduledWithdrawalEndAge,
        scheduledWithdrawalStartAge: data.scheduledWithdrawalStartAge,
        signatureApplicantOwner: aoBase64 || null,
        signatureProposedInsured: piBase64 || null,
        signatureFinancialAdvisor: faBase64 || null,
        preparedBy: financialAgentName,
        agentName: financialAgentName,
        height: data.bmiHeightInCm,
        weight: data.bmiWeightInKg,
        areaOfCover: {
          code: data.areaOfCover,
          version: data.planVersion
        },
        deductible: {
          code: data.deductible,
          version: data.planVersion
        },
        referringPartner: data.referringPartner,
        policyDate: policyDate,
      }
    };

    jarData = {
      data: {
        ...jarData.data, applicantOwner: await this.generatePersonObject(data)
      }
    };

    if (isAoEqualsToPi === 'NO' && proposedInsured !== null) {
      jarData = {
        data: {
          ...jarData.data, ['proposedInsured']: await this.generatePersonObject(proposedInsured)
        }
      };
    }

    return jarData;
  }

  async generatePersonObject(personData, isLife?: boolean) {
    const usaCode = '1';
    let homeCountry: string;
    let workCountry: string;
    const USA = 'United States of America';
    const US = 'United States';
    if (
      personData.homeCountryCode === usaCode &&
      personData.homeProvinceCode != null &&
      personData.homeCityCode != null
    ) {
      homeCountry = USA;
    } else if (personData.homeCountryCode === usaCode) {
      homeCountry = US;
    }

    if (
      personData.workCountryCode === usaCode &&
      personData.workProvinceCode != null &&
      personData.workCityCode != null
    ) {
      workCountry = USA;
    } else if (personData.workCountryCode === usaCode) {
      workCountry = US;
    }

    const homeCountryname = COUNTRY_LIST_EXT.find((data) => {
      return data.countryCode == personData.homeCountryCode
    });

    if (personData.homeCountryCode !== usaCode && personData.homeCountryCode == CONSTANTS_STRING.PH_CODE) {
      homeCountry = this.getAddressName(personData.homeCountryCode);
    } else if (personData.homeCountryCode !== usaCode && personData.homeCountryCode !== CONSTANTS_STRING.PH_CODE) {
      homeCountry = homeCountryname.name;
    }

    if (personData.workCountryCode !== usaCode && personData.workCountryCode == CONSTANTS_STRING.PH_CODE) {
      workCountry = this.getAddressName(personData.workCountryCode);
    } else if (personData.workCountryCode !== usaCode && personData.workCountryCode !== CONSTANTS_STRING.PH_CODE) {
      workCountry = 'other';
    }

    if (
      personData.workCountryCode == null
    ) {
      workCountry = '0';
    }

    const homeProvince = (personData.homeProvinceCode !== null && personData.homeProvinceCode !== undefined) &&
      (personData.homeCountryCode == usaCode || personData.homeCountryCode == CONSTANTS_STRING.PH_CODE) ?
        personData.homeCityCode == null ? '0' :
          this.getAddressName(
            personData.homeCountryCode,
            personData.homeProvinceCode) : '0'; 

    const homeCity = (personData.homeCityCode !== null && personData.homeCityCode !== undefined) &&
      (personData.homeCountryCode == usaCode || personData.homeCountryCode == CONSTANTS_STRING.PH_CODE) ?
        this.getAddressName(
          personData.homeCountryCode,
          personData.homeProvinceCode,
          personData.homeCityCode) : '0';

    const workProvince = personData.workProvinceCode !== null && personData.workProvinceCode !== undefined ?
      personData.workCityCode == null ? '0' :
        this.getAddressName(
          personData.workCountryCode,
          personData.workProvinceCode) : '0';

    const workCity = personData.workCityCode !== null && personData.workCityCode !== undefined ?
      this.getAddressName(
        personData.workCountryCode,
        personData.workProvinceCode,
        personData.workCityCode) : '0';

    const occupationCode = personData.occupationCode != null && personData.occupationGrpCode == null ? '999' : personData.occupationCode;
    const vessel = personData.occupationCode == null || personData.occupationGrpCode == null ? '999' : 'NA';
    let workTerritory = personData.workZipCode == null || (personData.workCountryCode == '63' && (workProvince == '0' || workCity == '0')) ?
      { country: 'other', province: 'other', city: 'other' } : { country: workCountry, province: workProvince, city: workCity };
    
      
      const workCountryname = COUNTRY_LIST_EXT.find((data) => {
        return data.countryCode == personData.workCountryCode
      });

    
    if(personData.workCountryCode && (personData.workCountryCode !== CONSTANTS_STRING.PH_CODE)) {
      if(personData.workCountryCode == usaCode) {
        workTerritory = { country: USA, province: '0', city: '0' };
      } else {
        workTerritory = { country: workCountryname.name, province: '0', city: '0' };
      }
    }

    let personObject = null;
    if (isLife) {
      personObject = {
        name: personData.middleName ?
          `${personData.lastName}, ${personData.firstName} ${personData.middleName || ''}` :
          `${personData.firstName} ${personData.lastName}`,
        age: this.getAge(personData.dateOfBirth),
        gender: this.getGenderValue(personData.gender),
        birthdate: personData.dateOfBirth,
        classification: personData.classification,
        ltgTag: personData.ltgTag,
        occupation: {
          category: occupationCode || '999',
          name: personData.occupationGrpCode || '999',
          vessel: personData.vesselType || vessel
        },
        homeTerritory: {
          country: homeCountry,
          province: homeProvince,
          city: homeCity
        },
        workTerritory
      };
    } else {
      personObject = {
        name: personData.middleName ?
          `${personData.lastName}, ${personData.firstName} ${personData.middleName || ''}` :
          `${personData.firstName} ${personData.lastName}`,
        age: this.getAge(personData.dateOfBirth),
        gender: this.getGenderValue(personData.gender),
        birthdate: personData.dateOfBirth,
        occupation: {
          category: occupationCode || '999',
          name: personData.occupationGrpCode || '999',
          vessel: personData.vesselType || vessel
        },
        homeTerritory: {
          country: homeCountry,
          province: homeProvince,
          city: homeCity
        },
        workTerritory
      };
    }


    return personObject;
  }

  async generatePersonObjectHSR(personData, isLife?: boolean) {
    const usaCode = '1';
    let homeCountry: string;
    let workCountry: string;
    const USA = 'United States of America';
    const US = 'United States';
    if (
      personData.homeCountryCode === usaCode &&
      personData.homeProvinceCode != null &&
      personData.homeCityCode != null
    ) {
      homeCountry = USA;
    } else if (personData.homeCountryCode === usaCode) {
      homeCountry = US;
    }

    if (
      personData.workCountryCode === usaCode &&
      personData.workProvinceCode != null &&
      personData.workCityCode != null
    ) {
      workCountry = USA;
    } else if (personData.workCountryCode === usaCode) {
      workCountry = US;
    }

    if (personData.homeCountryCode !== usaCode) {
      homeCountry = this.getAddressName(personData.homeCountryCode);
    }

    if (personData.workCountryCode !== usaCode) {
      workCountry = this.getAddressName(personData.workCountryCode);
    }

    if (
      personData.workCountryCode == null
    ) {
      workCountry = '0';
    }

    const homeProvince = personData.homeProvinceCode !== null && personData.homeProvinceCode !== undefined ?
      personData.homeCityCode == null ? 'other' :
        this.getAddressName(
          personData.homeCountryCode,
          personData.homeProvinceCode) : 'other';

    const homeCity = personData.homeCityCode !== null && personData.homeCityCode !== undefined ?
      this.getAddressName(
        personData.homeCountryCode,
        personData.homeProvinceCode,
        personData.homeCityCode) : 'other';

    const workProvince = personData.workProvinceCode !== null && personData.workProvinceCode !== undefined ?
      personData.workCityCode == null ? '0' :
        this.getAddressName(
          personData.workCountryCode,
          personData.workProvinceCode) : '0';

    const workCity = personData.workCityCode !== null && personData.workCityCode !== undefined ?
      this.getAddressName(
        personData.workCountryCode,
        personData.workProvinceCode,
        personData.workCityCode) : '0';

    const occupationCode = personData.occupationCode != null && personData.occupationGrpCode == null ? '999' : personData.occupationCode;
    const vessel = personData.occupationCode == null || personData.occupationGrpCode == null ? '999' : 'NA';
    const workTerritory = personData.workCountryCode == '63' && (workProvince == '0' || workCity == '0') ?
      { country: 'PHILIPPINES', province: '', city: '' } : { country: workCountry, province: workProvince, city: workCity };


    let personObject = null;
    if (isLife) {
      personObject = {
        name: personData.middleName ?
          `${personData.lastName}, ${personData.firstName} ${personData.middleName || ''}` :
          `${personData.firstName} ${personData.lastName}`,
        age: this.getAge(personData.dateOfBirth),
        gender: this.getGenderValue(personData.gender),
        birthdate: personData.dateOfBirth,
        classification: personData.classification,
        ltgTag: personData.ltgTag,
        occupation: {
          category: occupationCode || '999',
          name: personData.occupationGrpCode || '999',
          vessel: personData.vesselType || vessel
        },
        homeTerritory: {
          country: homeCountry,
          province: homeProvince,
          city: homeCity
        },
        workTerritory
      };
    } else {
      personObject = {
        name: personData.middleName ?
          `${personData.lastName}, ${personData.firstName} ${personData.middleName || ''}` :
          `${personData.firstName} ${personData.lastName}`,
        age: this.getAge(personData.dateOfBirth),
        gender: this.getGenderValue(personData.gender),
        birthdate: personData.dateOfBirth,
        occupation: {
          category: occupationCode || '999',
          name: personData.occupationGrpCode || '999',
          vessel: personData.vesselType || vessel
        },
        homeTerritory: {
          country: homeCountry,
          province: homeProvince,
          city: homeCity
        },
        workTerritory
      };
    }


    return personObject;
  }

  async onClickBackBtn(backNav: BackNavigation) {
    let url: string = '', siId: number = 0, status: string = '';
    this.backBtnEvent$.subscribe(eventData => { ({ url, siId, status } = eventData); });
    if (backNav.isLocationBack) {
      if (backNav.module == undefined) {
        const alert = await this.alertService.displayAlert(
          !!backNav.customMessage ? backNav.customMessage : ACTION_MESSAGE.PREVIOUS_PAGE_RESET,
          'Continue',
          () => this.location.back(),
          'Cancel'
        );
        alert.present();
      } else {
        switch (url) {
          case ROUTES.SIGNATURE_PAGE: {
            this.navigateTo({
              url: `${ROUTES.E_APP}/${siId}`,
              params: { action: FORM_ACTIONS.VIEW, isFullView: 1, isEditable: status !== STATUS.SUBMITTED }
            })
            break;
          }
          default: {
            this.location.back()
            break;
          }
        }
      }
    } else if (backNav.isPopState) {
      await this.navigateTo({
        url: backNav.route.url,
        params: backNav.route.params
      });
    } else if (backNav.isModalDismiss) {
      const modalOnTop = this.modalCtrl.getTop();
      if(modalOnTop) {
        await this.modalCtrl.dismiss();
      }
    } else {
      await this.navigateDisplayAlert(
        {
          url: backNav.route.url,
          params: backNav.route.params
        },
        {
          message: ACTION_MESSAGE.LEAVE_PAGE,
          cancelLabel: 'Cancel'
        }
      );
    }
    this.backBtnEvent$.next({ url: '', siId: 0, status: '' })
  }

  async generateApplicationNumber() {
    const eappDigit = '1';
    const agentCode = `0${await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID)}`;
    let sequenceNumber;
    const storeSequenceNumber = await this.storage.get(SETTING_KEYS.SEQUENCE_NUMBER);
    if (storeSequenceNumber !== null) {
      const incrementedValue = (+storeSequenceNumber) + 1;
      sequenceNumber = ('0000' + incrementedValue).slice(-4);
    } else {
      const wseSequenceNumber = await this.settingsService.getSequenceNumber();
      const incrementedValue = (+wseSequenceNumber) + 1;
      sequenceNumber = (wseSequenceNumber + incrementedValue).slice(-4);
    }
    await this.storage.set(SETTING_KEYS.SEQUENCE_NUMBER, sequenceNumber);
    const applicationNumber = +`${eappDigit}${agentCode}${sequenceNumber}`;
    const processAppNumber = ('' + applicationNumber).split('');
    const arbitraryNumber = 1212121212121;
    const processArbitraryNumber = ('' + arbitraryNumber).split('');
    const product = processAppNumber.map((e, i) => +e * +processArbitraryNumber[i]);
    const modulus = product.map((remainder, i) => remainder % 10);
    const firstValue = product.map((value, index) => {
      if (value < 10) { return value; } else { return modulus[index] + 1; }
    });
    const secondValue = firstValue.reduce((a, b) => a + b, 0);
    const thirdValue = secondValue % 10 === 0 ? 10 : secondValue % 10;
    const checkDigit = 10 - thirdValue;
    return `${applicationNumber}${checkDigit}`;

  }

  formatAddressName(countryCode: string, provinceCode?: string, cityCode?: string, zipCode?: string) {
    const country = countryCode !== '0' && countryCode !== undefined && countryCode !== null && countryCode !== "" ?
      this.getAddressName(countryCode) : '';

    const province = provinceCode !== '0' && provinceCode !== undefined && provinceCode !== null && provinceCode !== "" ?
      this.getAddressName(countryCode, provinceCode) : '';

    const city = cityCode !== '0' && cityCode !== undefined && cityCode !== null && cityCode !== "" ?
      this.getAddressName(countryCode, provinceCode, cityCode) : '';

    const zip = zipCode !== '0' && zipCode !== undefined && zipCode !== null && zipCode !== "" ?
      this.getAddressName(countryCode, provinceCode, cityCode, zipCode) : '';

    return `${city} ${zip} ${province} ${country}`;
  }

  getDayDifference(lastDateModified: number, asYears?: boolean) {
    const now = moment();
    const formateDateModified = moment(lastDateModified).format('YYYY-MM-DD');
    const end = moment(formateDateModified);
    const duration = moment.duration(now.diff(end));
    let diff = duration.asDays();

    if (asYears) {
      diff = duration.asYears();
    }

    return diff;
  }

  updateDateModifiedAndSyncStatus(id: string, fieldName: string, tableName: string) {
    const whereData: WhereData[] = [
      {
        fieldName,
        operation: 'equal',
        compareValue: id
      }
    ];

    const dateModified = this.setDate();

    this.dbService.updateTableData(
      tableName,
      ['dateModified', 'syncStatus'],
      [dateModified, 0],
      whereData
    );
  }

  getHistoricalNavpuJSON(fundKey: string): Observable<any> {
    return this.httpClient.get(`./assets/historical-navpu-json/${fundKey}.json`);
  }

  setVessel(formGroup: FormGroup, vesselSpec: ColumnGeneratorSpecs) {
    const seafarerCode = '212';
    const occupationCode = formGroup.controls.occupationCode.value;
    if (occupationCode === seafarerCode) {
      vesselSpec.field.isVisible = true;
      vesselSpec.field.isRequired = true;
      vesselSpec.field.showInfo = false;
      vesselSpec.field.infoFunction = undefined;
      formGroup.controls.vesselType.setValidators([Validators.required]);
      formGroup.controls.vesselType.markAsTouched();
      formGroup.controls.vesselType.updateValueAndValidity();
    } else {
      vesselSpec.field.isVisible = false;
      formGroup.controls.vesselType.clearValidators();
      formGroup.controls.vesselType.updateValueAndValidity();
    }
  }

  formatDateOfBirth(dateOfBirth: string) {
    const yearToDateFormat = 'YYYY-MM-DD'
    return moment(dateOfBirth).format(yearToDateFormat);
  }

  formatToLocateDateString(date: string) {
    const d = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };
    return d.toLocaleDateString('en-US', options);
  }
  // BELOW ARE OLD CODES

  isEmpty(value) {
    if (value === undefined || value == null || value === '') {
      return true;
    }
    return false;
  }

  getPowerFactor(num, factor) {
    return Math.pow(num, factor);
  }

  differenceBetweenDate(dt1, dt2): number {
    return Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(),
      dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())) / (1000 * 60 * 60 * 24));
  }
  //  * @method startLoader - show loader using unique identifier
  async startLoader(loader: Loader) {
    if (!this.loading[loader.name]) {
      this.loading[loader.name] = await this.loadingController.create({
        message: loader.message
      });
      this.loading[loader.name].present();
    }
  }

  // * @method stopLoader - dismiss loader using unique identifier
  async stopLoader(loader: Loader) {
    if (this.loading[loader.name]) {
      this.loading[loader.name].dismiss();
      this.loading[loader.name] = null;
    }
  }

  //  * @method getLoaderStatus - get current loading status of loader using unique identifier
  getLoaderStatus(loader: Loader) {
    return this.loading[loader.name] ? true : false;
  }

  async toastAlert(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'top'
    });

    toast.present();
  }

  async toastMiddleAlert(message: string, duration?) {
    const toast = await this.toastCtrl.create({
      message,
      duration: duration || 3000,
      position: 'middle'
    });

    toast.present();
  }

  async toastBottomAlert(message: string, duration?) {
    const toast = await this.toastCtrl.create({
      message,
      duration: duration || 1500,
      position: 'bottom'
    });

    toast.present();
  }

  /* Delete after QA testing */
  async synctoastAlert(message: string) {
    const toast = await this.toastCtrl.create({
      message,
      position: 'top',
      duration: 10000,
      showCloseButton: true,
      closeButtonText: 'Close',
      cssClass: 'sync-toast'

    });
    const toasts = Array.from(document.querySelectorAll('.sync-toast'));
    toasts.forEach(element => {
      document.querySelector('.sync-toast').shadowRoot.querySelector('.toast-content').setAttribute('style', 'overflow: hidden');
    });

    toast.present();
  }
  async infoAlert(message: string) {
    const alert = await this.alertService.displayAlert(message, 'OK');
    return await alert.present();
  }

  async infoAlertDidDismissOk(message:string) {
    const alert = await this.alertService.displayAlert(message, 'OK');
    await alert.present();

    alert.onDidDismiss().then(() => {
      //
    })
  }

  getValue(sourceData, dataLoc: string) {

    const location = dataLoc.split('>');
    location.forEach(loc => {
      sourceData = sourceData[loc];
    });
    return sourceData;
  }
  createArray(dataSourceArray: [], arrayDef: [], returnVal) {
    dataSourceArray.forEach(dataSource => {
      const tempObj = {};
      this.transformData(arrayDef, dataSource, tempObj);
      returnVal.push(tempObj);
    });
  }

  transformData(dtDef, sourceData, returnVal = {}) {
    dtDef.forEach(spec => {
      if (spec.childDef !== undefined) {
        returnVal[spec.name] = {};
        this.transformData(spec.childDef, sourceData, returnVal[spec.name]);
      } else if (spec.arrayDef !== undefined) {
        returnVal[spec.name] = [];
        const arraySource = this.getValue(sourceData, spec.from);
        this.createArray(arraySource, spec.arrayDef, returnVal[spec.name]);
      } else {
        returnVal[spec.name] = this.getValue(sourceData, spec.from);
      }
    });
  }

  calculateImageSize(base64String) {
    let padding, inBytes, base64StringLength;
    if (base64String.endsWith('==')) { padding = 2; } else if (base64String.endsWith('=')) { padding = 1; } else { padding = 0; }

    base64StringLength = base64String.length;
    inBytes = (base64StringLength / 4) * 3 - padding;
    const kbytes: number = inBytes / 1000;
    const totalSizeMB = Math.round(kbytes / Math.pow(1024, 1));
    return {
      kb: kbytes,
      mb: totalSizeMB
    };
  }

  bytesToSize(bytes) {
    const kbytes: number = bytes / 1000;
    const totalSizeMB = Math.round(kbytes / Math.pow(1024, 1));
    return {
      kb: kbytes,
      mb: totalSizeMB
    };
  }

  // for adding commas for thousandths places and so on... forked from old journey!
  addCommas(str: any): string {
    if (typeof (str) === 'string') {
      const regexCell = /[^0-9\.]/g;
      str = str.replace(regexCell, '');
      if (str.indexOf('.') !== -1) {
        const regex = /[,\s]/g;
        str = str.replace(regex, '');
        const res = str.split('.');
        res[0] = res[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        res[1] = '.' + res[1].slice(0, 2);
        return res[0] + res[1];
      } else {
        const regex = /[,\s]/g;
        str = str.replace(regex, '');
        return str.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      }
    } else if (typeof (str) === 'number') {
      const regexCell = /[^0-9\.]/g;
      str = str.toString();
      str = str.replace(regexCell, '');
      if (str.indexOf('.') !== -1) {
        const regex = /[,\s]/g;
        str = str.replace(regex, '');
        const res = str.split('.');
        res[0] = res[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
        res[1] = '.' + res[1].slice(0, 2);
        return res[0] + res[1];
      } else {
        const regex = /[,\s]/g;
        str = str.replace(regex, '');
        return str.toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,');
      }
    } else {
      return '';
    }
  }

  async displayErrorMessage(message: string) {
    const modal = await this.alertService.displayAlert(message, 'OK');
    return await modal.present();
  }

  applyMask(str: any, control?: string, formGroup?: FormGroup) {
    const strTransformed = this.addCommas(str);

    if (control !== undefined && formGroup !== undefined) {
      formGroup.controls[control].setValue(strTransformed.trim());
    } else {
      return strTransformed;
    }
  }

  removeMask(str: any) {
    if (str === null || str === undefined) {
      return str;
    }

    const value = str.replace(/,/g, '').trim();
    const inputValue = parseFloat(value);
    return inputValue;
  }

  search(keyword: string, cardListingSpecs: BaseCardInfo[], additionalParams?: string[]): BaseCardInfo[] {
    const hasAdditionalParams = additionalParams && additionalParams.length !== 0;
    const additionalParam = hasAdditionalParams ? additionalParams[0] : '';

    return cardListingSpecs.filter((cardInfo: BaseCardInfo) => {
      const filterByActivity = String(cardInfo.status).toLowerCase().includes(additionalParam.toLowerCase());

      const searchConditions = String(cardInfo.firstName).toLowerCase().includes(keyword.toLowerCase()) ||
        String(cardInfo.middleName).toLowerCase().includes(keyword.toLowerCase()) ||
        String(cardInfo.lastName).toLowerCase().includes(keyword.toLowerCase()) ||
        `${cardInfo.firstName} ${cardInfo.middleName} ${cardInfo.lastName}`.toLowerCase().replace(/\s+/g, ' ').trim()
          .includes(keyword.toLowerCase().replace(/\s+/g, ' ').trim()) ||                          // search AO full name
        `${cardInfo.firstName} ${cardInfo.lastName}`.toLowerCase().replace(/\s+/g, ' ').trim()
          .includes(keyword.toLowerCase().replace(/\s+/g, ' ').trim()) ||                          // search AO using first and last name only
        (String(cardInfo.status).toLowerCase().includes(keyword.toLowerCase()) &&
          !STATUS.COMPLETED.includes(cardInfo.status) &&                                         // *
          !STATUS.WAIVED.includes(cardInfo.status)) ||                                           // *
        String(cardInfo.product).toLowerCase().includes(keyword.toLowerCase()) ||
        String(cardInfo.applicationNumber).includes(keyword) ||
        String((cardInfo.insuredName || '').replace(',', ' ')).replace(/\s+/g, ' ').trim().toLowerCase().includes(keyword.toLowerCase().replace(/\s+/g, ' ').trim()) ||
        String((cardInfo.insuredName || '').split(',').reverse().join(' ').replace(/\s+/g, ' ').trim().toLowerCase())
          .includes(keyword.toLowerCase().replace(/\s+/g, ' ').trim()) ||
        String(cardInfo.policyNumber).includes(keyword) ||
        ((cardInfo.isWaived === 1 && STATUS.WAIVED.includes(keyword.toUpperCase())) &&         // *
          cardInfo.status &&
          cardInfo.status.toUpperCase().includes(STATUS.COMPLETED)) ||                         // *
        (cardInfo.status && cardInfo.status.toUpperCase().includes(STATUS.COMPLETED) &&                           // *  added special condition for FNA Waived status
          cardInfo.isWaived !== 1 &&                                                            // *
          STATUS.COMPLETED.includes(keyword.toUpperCase()))

      return hasAdditionalParams ? searchConditions && filterByActivity : searchConditions  //                               
    });
  }

  toTitleCase(str: string) {
    return str.split(' ')
      .map(word => word[0].toUpperCase() + word.substr(1).toLowerCase())
      .join(' ');
  }

  isOnline(): boolean {
    return navigator.onLine;
  }

  convertDateFromWS(date: any) {
    if (date == null && !moment(date).isValid()) return null;
    try {
      return moment(date).valueOf();
    } catch (error) {
      return null;
    }
  }

  filterAmount(value: string) {
    return value ? `${parseFloat(`${value.replace(REGEXP.AMOUNT_SPECIAL_CHAR, "")}`)}` : null;
  }

  filterNumber(value: string) {
    return value ? `${parseInt(`${value.replace(REGEXP.ALL_SPECIAL_CHAR, "")}`)}` : null;
  }

  findQuestionValue(questionCode, listOfQuestions) {
    let answer: any;
    const question: any = _.find(listOfQuestions, { questionId: questionCode });

    if (question != null) {
      answer = question.answerValue;
    }

    return answer;
  }

  async mapQuestionObject(question, isMapped: boolean) {
    // const eappWSReq = this.eappResponse.contractApplications[0].data.contractHolder.questions;
    const insertQuestionsFieldDefs = [];
    const questionObject = question;
    const questionKeys = Object.keys(questionObject);

    questionKeys.forEach(questionKey => {
      const questionSubCategory = questionObject[questionKey];
      const questionSubCategoryKeys = Object.keys(questionSubCategory);

      questionSubCategoryKeys.forEach(questionSubCategoryKey => {
        const answerObject = questionSubCategory[questionSubCategoryKey];
        const questionCodes = Object.keys(answerObject);

        questionCodes.forEach(questionCode => {
          if (isMapped) {
            if (WS_QUESTION_CODE_MAPPER[questionCode]) {
              insertQuestionsFieldDefs.push({ questionId: WS_QUESTION_CODE_MAPPER[questionCode], answerValue: this.setAnswerValue(answerObject[questionCode]) });
            }
          } else {
            insertQuestionsFieldDefs.push({ questionId: questionCode, answerValue: answerObject[questionCode] });
          }

        });
      });
    });

    return insertQuestionsFieldDefs;
  }


  async buildQuestion(question, listOfQuestions, isReplacementNotif: boolean) {
    let buildObj: any;
    if (isReplacementNotif) {
      const company = this.findQuestionValue(question.basicLife, listOfQuestions);
      const policyNo = this.findQuestionValue(question.company, listOfQuestions);
      const amountInsuranceReplaced = this.findQuestionValue(question.status, listOfQuestions);
      if (policyNo != null || company != null || amountInsuranceReplaced != null) {
        buildObj = { company, policyNo, amountInsuranceReplaced };
      }
    } else {
      const basicLife = this.findQuestionValue(question.basicLife, listOfQuestions);
      const company = this.findQuestionValue(question.company, listOfQuestions);
      const status = this.findQuestionValue(question.status, listOfQuestions);
      const yearOfIssue = this.findQuestionValue(question.yearOfIssue, listOfQuestions);
      if (basicLife != null || company != null || status != null || yearOfIssue != null) {
        buildObj = { basicLife, company, status, yearOfIssue };
      }
    }

    return buildObj;
  }

  getQuestionCodeSet(questionId: string) {
    questionId = questionId.substring(12);

    return questionId;
  }

  getQuestionCode(questionId: string) {
    return questionId.split('_')[0];
  }

  getKeyByValue(value) {
    return Object.keys(WS_QUESTION_CODE_MAPPER).find(key =>
      key === value);
  }

  async setDisablingConditionalFunction(fieldDisablingParams: FieldDisablingParams | FieldDisablingParams[], activeField: FieldSpecs) {
    activeField.conditionalFunction = async () => {
      if (fieldDisablingParams instanceof Array) {
        fieldDisablingParams.forEach(async fieldDisablingParam => {
          await this.disableEnableField(fieldDisablingParam);
        });
      } else {
        await this.disableEnableField(fieldDisablingParams);
      }
    };

    activeField.conditionalFunction();
  }

  async disableEnableField(fieldDisablingParams) {
    let isEnabled: boolean;

    if (fieldDisablingParams.conditionalOperator === 'or') {
      isEnabled = false;

      fieldDisablingParams.fieldDependency.conditions.forEach(condition => {
        const fgCtrlName = condition.formCtrl ? condition.formCtrl : fieldDisablingParams.fieldDependency.field.attName;
        const fieldValue = this.valueParser(fieldDisablingParams.formGroup.get(fgCtrlName).value);

        if (condition.operation === 'equal') {
          isEnabled = isEnabled ? isEnabled : fieldValue === condition.value;
        } else if (condition.operation === 'notEqual') {
          isEnabled = isEnabled ? isEnabled : fieldValue !== condition.value;
        } else if (condition.operation === 'lessThan') {
          isEnabled = isEnabled ? isEnabled : fieldValue < condition.value;
        } else if (condition.operation === 'lessEqual') {
          isEnabled = isEnabled ? isEnabled : fieldValue <= condition.value;
        } else if (condition.operation === 'greaterThan') {
          isEnabled = isEnabled ? isEnabled : fieldValue > condition.value;
        } else if (condition.operation === 'greaterEqual') {
          isEnabled = isEnabled ? isEnabled : fieldValue >= condition.value;
        }
      });

    } else {
      isEnabled = true;

      fieldDisablingParams.fieldDependency.conditions.forEach(condition => {
        const fgCtrlName = condition.formCtrl ? condition.formCtrl : fieldDisablingParams.fieldDependency.field.attName;
        const fieldValue = this.valueParser(fieldDisablingParams.formGroup.get(fgCtrlName).value);

        if (condition.operation === 'equal') {
          isEnabled = isEnabled && fieldValue === condition.value;
        } else if (condition.operation === 'notEqual') {
          isEnabled = isEnabled && fieldValue !== condition.value;
        } else if (condition.operation === 'lessThan') {
          isEnabled = isEnabled && fieldValue < condition.value;
        } else if (condition.operation === 'lessEqual') {
          isEnabled = isEnabled && fieldValue <= condition.value;
        } else if (condition.operation === 'greaterThan') {
          isEnabled = isEnabled && fieldValue > condition.value;
        } else if (condition.operation === 'greaterEqual') {
          isEnabled = isEnabled && fieldValue >= condition.value;
        }
      });
    }

    fieldDisablingParams.affectedComponents.forEach(component => {
      let ctrlName: string | string[];

      if (typeof component === 'string') {
        ctrlName = component;
      } else {
        if (fieldDisablingParams.fieldDependency.isDisabled) {
          component.isHidden = !fieldDisablingParams.fieldDependency.isDisabled;
        } else {
          component.isHidden = !isEnabled;
        }
      }

      if (isFieldSpecs(component)) {
        ctrlName = (component as FieldSpecs).attName;
      }

      if (isFieldColumnGeneratorSpecs(component)) {
        ctrlName = (component as ColumnGeneratorSpecs).field.attName;
      }

      if (isDynamicTableSpecs(component)) {
        ctrlName = (component as DynamicTableSpecs).formArrayKey;
      }

      if (isRowGeneratorSpecs(component)) {
        const ctrlNameList: string[] = [];
        (component as RowGeneratorSpecs).columns.forEach((colSpecs, index) => {
          if ((colSpecs as ColumnGeneratorSpecs).field) {
            ctrlNameList.push((colSpecs as ColumnGeneratorSpecs).field.attName);
          }
        });
        ctrlName = ctrlNameList;
      }

      if (ctrlName) {
        if (!(ctrlName instanceof Array)) {
          if (fieldDisablingParams.formGroup.get(ctrlName)) {
            if (isEnabled) {
              fieldDisablingParams.formGroup.get(ctrlName).enable();
              fieldDisablingParams.formGroup.get(ctrlName).markAsUntouched();
            } else {
              fieldDisablingParams.formGroup.get(ctrlName).reset();
              fieldDisablingParams.formGroup.get(ctrlName).disable();
            }
          }
        } else {
          ctrlName.forEach(attName => {
            if (fieldDisablingParams.formGroup.get(attName)) {
              if (isEnabled) {
                fieldDisablingParams.formGroup.get(attName).enable();
                fieldDisablingParams.formGroup.get(attName).markAsUntouched();
              } else {
                fieldDisablingParams.formGroup.get(attName).reset();
                fieldDisablingParams.formGroup.get(attName).disable();
              }
            }
          });
        }
      }
    });

    // * temporary for additional condition
    if (fieldDisablingParams.customCondition) { fieldDisablingParams.customCondition(); }
  }

  valueParser(value) {
    try {
      return JSON.parse(value);
    } catch {
      return value;
    }
  }

  tablerMapperGenerator(optionArray: { key: any, value: any }[]): {} {
    const mapper = {};
    optionArray.forEach(option => {
      mapper[option.key] = option.value;
    });
    return mapper;
  }

  changeTableToReadOnly(tableGeneratorSpecsList: Array<DynamicTableSpecs>) {
    for (const tableGeneratorSpecs of tableGeneratorSpecsList) {
      tableGeneratorSpecs.availableActions.add = false;
      tableGeneratorSpecs.availableActions.edit = false;
      tableGeneratorSpecs.availableActions.delete = false;
      tableGeneratorSpecs.availableActions.save = false;
      tableGeneratorSpecs.readOnly = true;
      tableGeneratorSpecs.hasShowMore = false;
    }
  }

  changeTableToEditable(tableGeneratorSpecsList: Array<DynamicTableSpecs>) {
    for (const tableGeneratorSpecs of tableGeneratorSpecsList) {
      tableGeneratorSpecs.availableActions.add = true;
      tableGeneratorSpecs.availableActions.edit = true;
      tableGeneratorSpecs.availableActions.delete = true;
      tableGeneratorSpecs.availableActions.save = true;
      tableGeneratorSpecs.readOnly = false;
      tableGeneratorSpecs.hasShowMore = true;
    }
  }

  async sortByIsDeleted(listOfRequest) {
    let requests: any;
    if (Array.isArray(listOfRequest) && listOfRequest.length > 0) {
      requests = listOfRequest.sort((x, y) => +x.isDeleted - +y.isDeleted).reverse();
    }
    return requests;
  }

  setAnswerValue(answerValue) {
    let answer;

    if (answerValue == 'true') {
      answer = true;
    } else if (answerValue == 'false') {
      answer = false;
    } else if (answerValue === '') {
      answer = null;
    } else if (answerValue == 'Y') {
      answer = true;
    } else if (answerValue == 'N') {
      answer = false;
    } else if (this.isMMYYYYFormat(answerValue)) {
      const split = answerValue.split('/');
      answer = moment(`${split[0]}/01/${split[1]}`).format('MM/DD/YYYY');
    } else {
      answer = answerValue;
    }

    return answer;
  }

  /**
   * Returns boolean value if format is in MM/YYYY
   * @param value string
   * @returns boolean
   * @author JL Gutierrez
   */
  isMMYYYYFormat(value: string): boolean {
    const split = value.split('/');

    // validate if in MM/YYYY format
    if (split.length !== 2) {
      return false;
    }
    return moment(`${split[0]}/01/${split[1]}`).isValid();
  }

  setYesNoValue(answerValue) {
    let answer;
    if (answerValue == true || answerValue == 'true') {
      answer = 'Y'
    } else if (answerValue == false || answerValue == 'false') {
      answer = 'N'
    } else {
      answer = 'N';
    }
    return answer;
  }

  convertDate(currentDate) {
    let date;
    if (currentDate != null && currentDate != CONSTANTS_STRING.EMPTY_STRING &&
      currentDate.toLowerCase() != CONSTANTS_STRING.INVALID.toLowerCase()) {
      date = moment(currentDate).format().slice(0, -6);
    }

    return date
  }

  async getVersionNumber() {
    let versionNumber: string;
    await this.appVersion.getVersionNumber().then(version => {
      versionNumber = version;
    });
    return versionNumber;
  }

  async getVersionCode() {
    let versionCode: string | number;
    await this.appVersion.getVersionCode().then(version => {
      versionCode = version;
    });
    return versionCode;
  }

  async setLocation(countryColSpecs: ColumnGeneratorSpecs, provinceColSpecs: ColumnGeneratorSpecs,
    cityColSpecs?: ColumnGeneratorSpecs, zipCodeColSpecs?: ColumnGeneratorSpecs) {

    const formGroup = countryColSpecs.field.formGroup
    const location = await this.storage.get(KEYS.LOCATION)
    const selectedCountry = _.find(location, _.matchesProperty('countryCode', formGroup.get(countryColSpecs.field.attName).value))

    const PHUSCodes = [CONSTANTS_STRING.PH_CODE, CONSTANTS_STRING.US_CODE];
    if(selectedCountry && !PHUSCodes.includes(selectedCountry.countryCode)) {
      let provinceControl, cityControl, zipControl;
      if (provinceColSpecs) provinceControl = formGroup.get(provinceColSpecs.field.attName);
      if (cityColSpecs) cityControl = formGroup.get(cityColSpecs.field.attName);
      if (zipCodeColSpecs) zipControl = formGroup.get(zipCodeColSpecs.field.attName);

      if (provinceControl) provinceControl.enable();
      if (cityControl) cityControl.enable();
      if (zipControl) zipControl.enable();

      return;
    }

    if (selectedCountry) {
      const provincesOption = this.createOptionsFrObjArr(selectedCountry.states, 'stateId', 'name')

      let selectedProvince, selectedCity
      provinceColSpecs.field.options = this.sortAddressByName('state', provincesOption, true)

      selectedProvince = _.find(selectedCountry.states, _.matchesProperty('stateId', formGroup.get(provinceColSpecs.field.attName).value))
      if (selectedProvince) {
        const cityOption = this.createOptionsFrObjArr(selectedProvince.cities, 'cityCode', 'name')
        selectedCity = _.find(selectedProvince.cities, _.matchesProperty('cityCode', formGroup.get(cityColSpecs.field.attName).value))

        if (cityOption.length !== 0) {
          formGroup.get(cityColSpecs.field.attName).enable();
          cityColSpecs.field.options = this.sortAddressByName('city', cityOption, true);
        } else {
          formGroup.get(cityColSpecs.field.attName).reset();
          formGroup.get(cityColSpecs.field.attName).disable();
          cityColSpecs.field.options = [];
        }

        if (zipCodeColSpecs) {
          if (selectedCity && selectedCity.zipCodes.length > 0) {
            if (selectedCity.zipCodes.length === 1) {
              zipCodeColSpecs.field.type = 'readOnly'
              formGroup.get(zipCodeColSpecs.field.attName).setValue(selectedCity.zipCodes[0].zipCode)
            }
            else {
              const zipCodeOption = this.createOptionsFrObjArr(selectedCity.zipCodes, 'zipCode', 'zipCode')
              zipCodeColSpecs.field.type = 'selectize'
              zipCodeColSpecs.field.interface = 'popover'
              zipCodeColSpecs.field.options = this.sortAddressByName('zipcode', zipCodeOption, true);
              formGroup.get(zipCodeColSpecs.field.attName).setValidators([Validators.required])
              formGroup.get(zipCodeColSpecs.field.attName).updateValueAndValidity();
            }
          } else {
            zipCodeColSpecs.field.type = 'readOnly'
            formGroup.get(zipCodeColSpecs.field.attName).reset();
          }
        }
      } else {
        if (zipCodeColSpecs) formGroup.get(zipCodeColSpecs.field.attName).reset()

        formGroup.get(cityColSpecs.field.attName).reset()
        formGroup.get(cityColSpecs.field.attName).disable()
        cityColSpecs.field.options = []
      }
    } else {
      formGroup.get(provinceColSpecs.field.attName).reset()
      provinceColSpecs.field.options = []
    }

  }

  setOccupation(natureOfBusinessDropdown: ColumnGeneratorSpecs, occDropdown: ColumnGeneratorSpecs, rawOccupation) {
    const formGroup = natureOfBusinessDropdown.field.formGroup
    const selectedCountry = _.find(rawOccupation, _.matchesProperty('code', formGroup.get(natureOfBusinessDropdown.field.attName).value))
    if (selectedCountry) {
      const occupations = selectedCountry.occupations
      const options = this.createOptionsFrObjArr(occupations, 'code', 'name')
      occDropdown.field.options = options
      occDropdown.field.isDisabled = false
      if (options.length == 1) {
        occDropdown.field.isDisabled = true
        formGroup.get(occDropdown.field.attName).setValue(options[0].key)
      }
    }
  }

  createOptionsFrObjArr(optionArray, keyCode: string, valueCode: string) {
    let arrayHolder = []

    if (optionArray) optionArray.forEach(optionObject => arrayHolder.push({ key: optionObject[keyCode], value: optionObject[valueCode] }))

    return arrayHolder
  }

  async logger(logType: string, log: string) {
    return;
    const logDateFormat = moment().format('HH:mm:ss:sss')
    const LOG_FILENAME = `${moment().format('YYYYMMDD')}_${logDateFormat.replace(/[^0-9]/g, "")}.log`
    const logMessage = `${logDateFormat} - [${logType}] ${log} \n\n`

    try {
      this.file.listDir(this.file.dataDirectory, '').then(async files => {
        //console.log(files);
        let sortedFiles = files.sort((a, b) => a.name.localeCompare(b.name))
        // if at least 1 log file exists
        if (sortedFiles.length > 0) {
          // get latest log file
          const latestLogfile = sortedFiles[sortedFiles.length - 1].name;
          const intDateOfLatestLog = parseInt(latestLogfile.replace('.log', '').split('_')[0]);
          const intDateToday = parseInt(moment().format('YYYYMMDD'));

          this.file.resolveLocalFilesystemUrl(sortedFiles[sortedFiles.length - 1].nativeURL).then(fileEntry => {
            fileEntry.getMetadata(async metaData => {

              const sizeInMB = Math.round((metaData.size / 1024 / 1024) * 100) / 100;
              //console.log(sizeInMB);

              // if log file size is less than 4 MB, edit latest logfile with the same date
              if (sizeInMB < 4 && (intDateOfLatestLog == intDateToday)) {
                await this.updateLog(latestLogfile, logMessage);
              } else { // else create a new logfile
                await this.createLog(LOG_FILENAME, logMessage);
              }
            })
          })
        } else { // if no log files, create new
          this.createLog(LOG_FILENAME, logMessage);
        }

        // delete excess logs, max of 5 logs
        if (sortedFiles.length > 5) {
          for (let indexOfFile = 0; indexOfFile < sortedFiles.length - 5; indexOfFile++) {
            await this.file.removeFile(this.file.dataDirectory, sortedFiles[indexOfFile].name).catch(error => {//console.log(error)
            });
          }
        }
      });
    } catch (err) {
      throw err
    }
  }

  async updateLog(latestLogfile: string, logMessage: string) {
    let blob = new Blob();
    blob = new Blob([logMessage], { type: 'text/plain' })
    await this.file.writeFile(this.file.dataDirectory, latestLogfile, blob, { replace: false, append: true })
    //console.log('LOGGED TO :::', latestLogfile)
  }

  async createLog(fileName: string, logMessage: string) {
    let blob = new Blob();
    blob = new Blob([`LOGS FOR ${moment().format('MMM DD, YYYY')} \n\n`], { type: 'text/plain' })
    await this.file.createFile(this.file.dataDirectory, fileName, true)
    await this.file.writeFile(this.file.dataDirectory, fileName, blob, { replace: false, append: true })
    //console.log('CREATED LOG :::', fileName)

    blob = new Blob([logMessage], { type: 'text/plain' })
    await this.file.writeFile(this.file.dataDirectory, fileName, blob, { replace: false, append: true })
    //console.log('LOGGED TO :::', fileName)
  }

  async sendLogs() {
    if (navigator.onLine) {
      const intDateToday = parseInt(moment().format('YYYYMMDD'))

      let logFiles: any[]
      let latestLogFile: string;

      this.file.listDir(this.file.dataDirectory, '').then(fileEntry => {
        logFiles = _.map(fileEntry, _.property('name'))
        latestLogFile = logFiles[logFiles.length - 1];

        logFiles.forEach(async (logFile: string) => {
          const dateOfLog = parseInt(logFile.split('_')[0])
          const logFileBase64 = "data:txt;base64," + await this.encodeFileToBase64(this.file.dataDirectory, logFile)
          const logFileSize = this.calculateImageSize(logFileBase64);

          // allow upload if file size is < 5MB
          if (logFileSize.mb < 5) {
            if (dateOfLog <= intDateToday) {
              const amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID)
              const token = await this.storage.get(SETTING_KEYS.TOKEN)
              const response = await this.syncApiService.uploadLogs(logFile, logFileBase64, amId, token).catch(error => {//console.log(error)
              })
              //console.log(response);
              if (response.status == 200) {
                // dont delete the last logfile to avoid error in writing logs while deleting logfile
                if (logFile != latestLogFile) await this.file.removeFile(this.file.dataDirectory, logFile).catch(error => {
                  //console.log(error)
                });

                const successLogUploadToast: Toast = {
                  message: `${moment(dateOfLog, 'YYYYMMDD').format('MMM DD, YYYY')} logs are sent to developers`,
                  animated: true,
                  color: 'primary',
                  position: 'bottom',
                  duration: 4000
                }
                return await this.presentToastMessage(successLogUploadToast)
              } else {
                const failedLogFileToast: Toast = {
                  message: `Can't send logs at the moment. Please try again later.`,
                  animated: true,
                  color: 'primary',
                  position: 'bottom',
                  duration: 4000
                }
                return await this.presentToastMessage(failedLogFileToast)
              }

            }
          } else {
            // assuming that the old log file with large size still exist
            await this.file.removeFile(this.file.dataDirectory, logFile).catch(error => {//console.log(error)
            });
            const failedLogFileToast: Toast = {
              message: `Can't send logs. File size should not exceed 5 MB.`,
              animated: true,
              color: 'primary',
              position: 'bottom',
              duration: 4000
            }
            return await this.presentToastMessage(failedLogFileToast)
          }

        })
      })
    } else {
      const intConNeededToast: Toast = {
        message: `Internet Connection is need to send logs`,
        animated: true,
        color: 'primary',
        position: 'bottom',
        duration: 4000
      }
      return await this.presentToastMessage(intConNeededToast)
    }

  }

  async encodeFileToBase64(filePath: string, file: string) {
    let base64File: string

    await this.file.readAsDataURL(filePath, file)
      .then(base64 => {
        base64File = base64.split(',')[1]
      })
      .catch(err => {
        throw err
      })

    return base64File
  }

  async getValueByPaymentMode(topUp: any, paymentMethod) {
    let regularTopUp;

    if (PAYMENT_METHODS.Monthly == paymentMethod) {
      regularTopUp = (Number(topUp) / PAYMENT_FREQUENCY.Monthly).toFixed(2);
    }
    else if (PAYMENT_METHODS.Quarterly == paymentMethod) {
      regularTopUp = (Number(topUp) / PAYMENT_FREQUENCY.Quarterly).toFixed(2);
    }
    else if (PAYMENT_METHODS.SemiAnnual == paymentMethod) {
      regularTopUp = (Number(topUp) / PAYMENT_FREQUENCY.SemiAnnual).toFixed(2);
    } else {
      regularTopUp = topUp;
    }

    return regularTopUp
  }

  splitByPeriod(str) {
    const splitted = str.split(CONSTANTS_STRING.PERIOD).pop();

    return splitted;
  }

  trimString(fieldValue: string, maxChar) {
    let result;

    if (fieldValue != null) {
      result = fieldValue.substring(0, maxChar);
    }
    return result;
  }

  setSubAddressValidation(
    formGrp: FormGroup,
    unitBuildingColSpec: ColumnGeneratorSpecs,
    blkNoColSpec: ColumnGeneratorSpecs,
    streetColSpec: ColumnGeneratorSpecs,
    brgyColSpec: ColumnGeneratorSpecs
  ) {

    const subAddressSpecs = [unitBuildingColSpec, blkNoColSpec, streetColSpec, brgyColSpec];
    const unitBuildingValidators = [Validators.required, Validators.maxLength(120)];
    const blkNoValidators = [Validators.required, Validators.maxLength(15)];
    const streetValidators = [Validators.required, Validators.maxLength(40)];
    const brgyValidators = [Validators.required, Validators.maxLength(80)];

    const subAddressValidators = {
      [unitBuildingColSpec.field.attName]: unitBuildingValidators,
      [blkNoColSpec.field.attName]: blkNoValidators,
      [streetColSpec.field.attName]: streetValidators,
      [brgyColSpec.field.attName]: brgyValidators
    }
    subAddressSpecs.forEach(spec => {
      const specDsablingParams: FieldDisablingParams = {
        formGroup: formGrp,
        affectedComponents: subAddressSpecs,
        fieldDependency: {
          field: spec.field,
          conditions: []
        },
        customCondition: () => {
          let isOptional = false;
          let fieldWithVal = [];

          subAddressSpecs.forEach(spec => {
            isOptional = isOptional || !!formGrp.get(spec.field.attName).value;
            if (!!formGrp.get(spec.field.attName).value) fieldWithVal.push(spec.field.attName)
          })

          subAddressSpecs.forEach(spec => {
            const validator = [...subAddressValidators[spec.field.attName]];
            if (isOptional && !fieldWithVal.includes(spec.field.attName)) validator.shift();

            formGrp.get(spec.field.attName).setValidators(validator);
            formGrp.get(spec.field.attName).updateValueAndValidity();
          })
        }
      };

      this.setDisablingConditionalFunction(specDsablingParams, spec.field);
      subAddressSpecs.forEach(spec => formGrp.get(spec.field.attName).markAsUntouched())
    })
  }

  formatDateByMonthYear(date) {
    let parsedDate;

    if (date != null) {
      parsedDate = moment(date).format('MM/YYYY');
    }

    return parsedDate;
  }

  getCurrentDateTime() {
    return moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")
  }

  getCurrentTimeStamp() {
    return Date.now();
  }

  /**
   * Sorts address (State, City & Zipcode) by name
   * @param type
   * @param address
   * @returns sorted address via name
   * @author JL Gutierrez
   */
  sortAddressByName(type: 'state' | 'city' | 'zipcode', address: any[], isValue?: boolean) {

    let zipList = []

    if (!address || address.length === 0) {
      return address;
    }

    if (type === 'zipcode') {
      address.forEach((items) => {
        if (isValue) {
          if (zipList.length == 0) {
            zipList.push({
              key: items.key,
              value: items.value
            });
          } else {
            if (zipList.map(e => e.value).indexOf(items.value) == -1) {
              zipList.push({
                key: items.key,
                value: items.value
              });
            } else {
              // do not push if duplicated item  
            }
          }
        } else {
          if (zipList.length == 0) {
            zipList.push({ zipCode: items.zipCode });
          } else {
            if (zipList.map(e => e.zipCode).indexOf(items.zipCode) == -1) {
              zipList.push({ zipCode: items.zipCode });
            } else {

            }
          }
        }

      });

      return zipList.sort((a: any, b: any) => {
        let addressA = null;
        let addressB = null;
        if (isValue) {
          addressA = type === 'zipcode' ? a.zipCode : a.value.toUpperCase();
          addressB = type === 'zipcode' ? b.zipCode : b.value.toUpperCase();
        } else {
          addressA = type === 'zipcode' ? a.zipCode : a.name.toUpperCase();
          addressB = type === 'zipcode' ? b.zipCode : b.name.toUpperCase();
        }

        return type === 'zipcode' ? (addressA - addressB) : addressA.localeCompare(addressB);
      });

    } else {
      return address.sort((a: any, b: any) => {
        let addressA = null;
        let addressB = null;
        if (isValue) {
          addressA = a.value.toUpperCase();
          addressB = b.value.toUpperCase();
        } else {
          addressA = a.name.toUpperCase();
          addressB = b.name.toUpperCase();
        }

        return addressA.localeCompare(addressB);
      });

    }
  }

  /**
   * Formats Date by DD/MM/YYYY
   * @param date
   * @param address
   * @returns date formatted DD/MM/YYYY
   * @author Edric Valdez
   */
  formatDateByDDMMYYYY(date) {
    let parsedDate;

    if (date != null) {
      parsedDate = moment(date).format('DD/MM/YYYY');
    }

    return parsedDate;
  }

  cleanBase64(base64: string) {
    if (base64 && base64.includes('data:')) {
      base64 = base64.split(',')[1];
      base64 = base64.replace(REGEXP.TRIM, "");
      base64 = base64.trim();
    }
    return base64;
  }

  getBase64(file): Promise<any> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      // reader.readAsText(file)
      reader.onload = () => {
        //console.log(reader.result);
        resolve(reader.result)
      };
      reader.onerror = (error) => {
        //console.log('Error:das ', error);
        reject(reader.error)
      };
    })
  }

  syncConvertDate(datehere: string) {
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

  async displaySyncValidationMessage(validation, backdropDismiss = true) {
    return new Promise(async (resolve, reject) => {
      let buttons: any[] = [];

      buttons.push(
        {
          text: 'Close',
          role: 'cancel',
          handler: () => { }
        });

      var errorString = 'Error/s Found: ';
      for (var i = 0; i < validation.length; i++) {
        errorString = errorString + '<br/>' + validation[i].error[0].message + '.' + '\n\r';
      }

      const popover = await this.alertCtrl.create({
        header: `Sync Validation Error`,
        message: errorString,
        buttons: buttons,
        cssClass: 'row-buttons',
        backdropDismiss
      });

      popover.onDidDismiss().then(() => {
        resolve(popover) // parameter might be wrong
      })

      await popover.present()
        .catch(() => {
          reject()
        });
    })
  }

  async isEazyHealth(siId: string) {
    const EAZY_HEALTH = 'EAZY_HEALTH';
    const PLAN_CODE_KEY = 'planCode';
    const siDataDB = await this.dbService.getAllTableData(CONSTANT_DB_TABLE.SI_MAIN, [{ fieldName: 'siId', operation: 'equal', compareValue: siId }]);
    const siData: [] = this.createObjectArrFromDBData(siDataDB)[0];
    if (!!siData && siData.length != 0) {
      return siData[PLAN_CODE_KEY] && siData[PLAN_CODE_KEY].includes(EAZY_HEALTH);
    } else {
      return false;
    }
  }

  filterValidStories(stories) {
    if(stories && stories.length > 0 && !stories.includes(null)) {
      let formattedDateNow = new Date().getTime(); 
      return stories   
      .filter(res => {    
        const launchDateTime = new Date(res.launchDate).getTime();     
        const expiryDateTime = new Date(res.expiryDate).getTime();          
        return launchDateTime <= formattedDateNow && expiryDateTime >= formattedDateNow && res.status === 'active';   
      })   
      .sort((a, b) => b.id - a.id);
    }
    return [];
  }

  filterMedia(stories) {
    return stories.filter(res => this.checkMediaUrl(res));
  }

  checkMediaUrl(res) {
    if (res.type != WHATS_NEW_TYPE.TEXT && (res.mediaUrl.mediaLink && res.mediaUrl.mediaLink != "")) {
      return res;
    }
  }

  filterNonMediaStories(stories) {
    return stories.filter(res =>
      res.type == WHATS_NEW_TYPE.TEXT
    );
  }

  filterMediaStories(stories) {
    return stories.filter(res =>
      res.type == WHATS_NEW_TYPE.IMAGE || res.type == WHATS_NEW_TYPE.VIDEO
    );
  }

  formatDateYYYYMMDDhhmmss(date) {
    return this.datePipe.transform(date, "yyyy-MM-dd'T'HH:mm:ss");
  }

  addDays(days: number): Date {
    var futureDate = new Date();
    futureDate.setDate(futureDate.getDate() + days);
    return futureDate;
  }

  async presentWhatsNewModal(storyData: WhatsNew[]) {
    if (storyData.length > 0) {
      const modal = await this.modalCtrl.create({
        component: WhatsNewModalComponent,
        cssClass: "story-container",
        backdropDismiss: false,
        componentProps: {
          storyData: storyData,
          modalCtrl: this.modalCtrl
        }
      });
      await this.storage.set('isWhatsNewShown', true);
      await modal.present()
    }
  }

  async presentMultipleErrorsModal(errorData: any) {
    if (errorData[0].errors.length > 0) {
      const modal = await this.modalCtrl.create({
        component: MultipleErrorsModalComponent,
        cssClass: errorData[0].errors.length > 1 ? "multiple-error-modal" : "single-error-modal",
        backdropDismiss: true,
        componentProps: {
          errorData,
          modalCtrl: this.modalCtrl
        }
      });
      await modal.present();
    }
  }

  async showToastNotification(msg: string, color: string, closeBtnAction: any = false) {
    this.toastCtrl.dismiss();
    const toast = await this.toastCtrl.create({
      // message: `
      //   <span>
      //   No Remaining Application Number credits. <br/>Please connect to the internet.</span>
      // `,
      color: color,
      message: msg,
      animated: true,
      duration: -1,
      position: 'top',
      showCloseButton: closeBtnAction ? true : false,
      cssClass: 'toast-notif',
    });

    toast.present();

    toast.onDidDismiss().then((val) => {
      //console.log('Toast Dismissed');  
    });
  }

  convertToMonths(count, isYears) {
    if (count && isYears) {
      if (isYears == "Years") {
        count = parseInt(count) * 12
        return count;
      } else {
        return parseInt(count);
      }
    } else {
      return null;
    }
  }

  getTypeFromBase64(base64: string) {
    let type = '';
    if (base64 && base64.includes('data:')) {
      type = base64.split(';')[0];
      type = type.replace(REGEXP.DATA_TAG, '');
      type = type.replace(REGEXP.TRIM, '');
      type = type.trim();
    }
    return type;
  }

  async openBase64PDFFile(base64) {
    try {
      const type = this.getTypeFromBase64(base64) || 'application/pdf';
      base64 = this.cleanBase64(base64)
      const byteCharacters = atob(base64);
      const byteNumbers = new Array(byteCharacters.length);
      for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
      }

      const byteArray = new Uint8Array(byteNumbers);
      const blob = new Blob([byteArray], { type });

      await this.file.writeExistingFile(this.file.externalCacheDirectory, 'tempFile', blob);
      await this.fileOpener.open(this.file.externalCacheDirectory + 'tempFile', type);

    } catch (err) {
      console.log('Error creating file', err);
    }
  }

  jsonValidator(obj) {
    try {
      JSON.parse(obj);
      return true;
    } catch (e) {
      return false;
    }
  }

  async agilaInitializer(val, isGet?: boolean) {
    if (isGet) {
      return await this.storage.get('agilaInit');
    } else {
      await this.storage.set('agilaInit', val);
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

  async openDevMode() {
    const journeyGlobal = this.settingsService.journeyGlobalData;

    ConfigDetailsFormGroup.patchValue({
      name: `${journeyGlobal.accountManager.firstName}${journeyGlobal.accountManager.middleName ? journeyGlobal.accountManager.middleName : ''} ${journeyGlobal.accountManager.name}`,
      channel: journeyGlobal.accountManager.accountManagerCategory,
      agentId: journeyGlobal.accountManager.agentNumber,
      fullSyncProgress: journeyGlobal.fullSyncProgress,
      leadsFullSyncStatus: journeyGlobal.leadsFullSyncStatus ? journeyGlobal.leadsFullSyncStatus.isSync : null,
      naFullSyncStatus: journeyGlobal.naFullSyncStatus ? journeyGlobal.naFullSyncStatus.isSync : null,
      irpqFullSyncStatus: journeyGlobal.irpqFullSyncStatus ? journeyGlobal.irpqFullSyncStatus.isSync : null,
      siFullSyncStatus: journeyGlobal.siFullSyncStatus ? journeyGlobal.siFullSyncStatus.isSync : null,
      eappFullSyncStatus: journeyGlobal.eappFullSyncStatus ? journeyGlobal.eappFullSyncStatus.isSync : null,
      checklistFullSyncStatus: journeyGlobal.checklistFullSyncStatus ? journeyGlobal.checklistFullSyncStatus.isSync : null,
      referrorFullSyncStatus: journeyGlobal.referrorFullSyncStatus ? journeyGlobal.referrorFullSyncStatus.isSync : null
    });

    journeyGlobal.accountManager.license.identificationDocuments.forEach((data) => {
      if (data.categories[0] == "Variable") {
        ConfigDetailsFormGroup.patchValue({
          variableLicenseType: data.categories[0],
          variableLicenseIssueDate: data.issuingDate,
          variableLicenseStartDate: data.validityInterval.startDateTime,
          variableLicenseEndDate: data.validityInterval.endDateTime
        });
      } else {
        ConfigDetailsFormGroup.patchValue({
          tradLicenseType: data.categories[0],
          tradLicenseIssueDate: data.issuingDate,
          tradLicenseStartDate: data.validityInterval.startDateTime,
          tradLicenseEndDate: data.validityInterval.endDateTime
        });
      }
    })


    ConfigDetailsFormGroup.patchValue({
      trackingLog: journeyGlobal.session.join('\n'),
      apiLogger: journeyGlobal.requestResponse.join('\n')
    });


    ConfigDetails.ConfigDetails.rows[15].columns[0].field.conditionalFunction = () => {
      const toggleLocalStorageValue = ConfigDetailsFormGroup.get('toggleLocalStorageSignature');
      this.settingsService.updateJourneyGlobalUpdateSignatureValueFromLocalStorage(toggleLocalStorageValue.value);
    }

    const dataSpecs = {
      formGeneratorSpecs: ConfigDetails.ConfigDetails,
      FormGroup: ConfigDetailsFormGroup
    }

    const modalProps = {
      type: 'devConfig',
      data: dataSpecs
    }

    const isModalOpened = await this.modalCtrl.getTop();
    if (!isModalOpened) {
      const devtableModal = await this.modalCtrl.create({
        component: ModalViewComponent,
        backdropDismiss: false,
        componentProps: {
          modalProps: modalProps,
          modalCtrl: this.modalCtrl
        },
        cssClass: 'dev-mode-css'
      });
      await devtableModal.present();

      await devtableModal.onDidDismiss().then(async (proceed) => {

      });
    }
  }

  async setSubmittedAppCount(val) {
    await this.storage.set(KEYS.SUBMITTED_APPLICATION_COUNT, val);
  }

  async setExpiredAppCount(val) {
    await this.storage.set(KEYS.EXPIRED_APPLICATION_COUNT, val);
  }

  async getSubmittedAppCount() {
    return await this.storage.get(KEYS.SUBMITTED_APPLICATION_COUNT);
  }

  async getExpiredAppCount() {
    return await this.storage.get(KEYS.EXPIRED_APPLICATION_COUNT);
  }

  convertToTitleCase(input: string): string {
    return input.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  newSession() {
    this.toastBottomAlert('Session Started');
    this.settingsService.updateJourneyGlobalUpdateSession(`Internet: ${navigator.onLine}`);
  }

  addStep(step: any, type?: any) {
    if (environment.env == 'PROD') return;
    let dat = null;
    if (type == 0) {
      step = JSON.stringify(step);
    }
    this.settingsService.updateJourneyGlobalUpdateSession(`${step}`);


    const journeyGlobal = this.settingsService.journeyGlobalData;
    const scenarioCreator = journeyGlobal.session.join('\n')

    console.log(`${scenarioCreator}`);
  }

  logInsert(data, type, module) {
    if (environment.env == 'PROD') return;
    data = JSON.stringify(data);
    this.settingsService.updateJourneyGlobalUpdateRequestResponseLogging(`[${module}][${type == 0 ? 'REQUEST' : 'RESPONSE'}] ${data}`);
    console.log(`[${module}][${type == 0 ? 'REQUEST' : 'RESPONSE'}] ${data}`)
  }

   logDynatrace(body) {
    this.queueParams$.next({
      id: this.generateUUID(),
      status: QUEUE_STATUS.PENDING,
      process: QUEUE_PROCESS.DYNATRACE,
      body
    })
  }

  async fhSetJSON(key: string, value: object) {
    const jsonString = JSON.stringify(value)
    return await this.file.writeFile(this.file.externalCacheDirectory, key, jsonString, { replace: true });
  }

  async fhGetJSON(key) {
    const jsonString = await this.file.readAsText(this.file.externalCacheDirectory, key);
    return JSON.parse(jsonString);
  }

  async getErrorObject(){
    try { throw Error('') } catch(err) { return err; }
  }

  async showMobileNotSameAlert() {
    return new Promise(async (resolve) => {
      const alert = await this.alertService.displayAlert(
        ACTION_MESSAGE.DETECT_ADDR_CHANGES,
        'Yes', () => {
          return resolve(true);
        },
        'Cancel', () => {
          return resolve(false);
        }
      );

      await alert.present();
    });
  }
  

  async isCreatedDateIsBelowDataPatchDate(showModalValidation, createdDate, eappData?: any, fn?: any) {
    const dataPatchDate = 1726045200000; // Wednesday, September 11, 2024 5:00:00 PM GMT+08:00
    const appNumber = eappData.applicationNumber;
    createdDate = parseInt(createdDate);
    this.eappId = eappData.eappId;
    if(createdDate <= dataPatchDate && eappData.serverId == null) {
      if(showModalValidation) {
        if(navigator.onLine) {
          this.presentLoading('Validating application number...');
          const oldAppNumber13Digit = appNumber.substring(0, appNumber.length - 1);
          const newAppNumber = await this.offAppNumService.checkApplicationNumber(oldAppNumber13Digit);
          await this.dismissLoading();
          if(newAppNumber.status == 200) {
            const newAppNumberValue = JSON.parse(newAppNumber.data);
            await this.saveNewApplicationNumber(appNumber, newAppNumberValue.applicationNumber); 
            await this.addToMobileTagging(newAppNumberValue.applicationNumber);
            if(appNumber == newAppNumberValue.applicationNumber) {
              return false;
              //do nothing if same appnumber returned in api response
            } else {
              await this.showNewOldApplicationNumberModal(newAppNumberValue.applicationNumber, appNumber, fn);
            }
          }
        }
      } else {
        return true;
      }
    } else {
      return false;
    }
  }

  showNewOldApplicationNumberModal(newApplicationNumber, oldApplicationNumber, fn?: any) {
    this.infoAlert(`Hi! This is your new Application number: ${newApplicationNumber}. We have detected that your old application number might be invalid. Plese do not use your old application number: ${oldApplicationNumber}.`)
  }

  async saveNewApplicationNumber(currentApplicationNumber, validApplicationNumber) {
    const dateNow = this.setDate();
    await this.dbService.updateTableData(CONSTANT_DB_TABLE.EAPP_MAIN,
      ['applicationNumber', 'syncStatus', 'dateCreated', 'dateModified'],
      [validApplicationNumber, 0, dateNow, dateNow],
      [{ fieldName: 'eappId', operation: 'equal', compareValue: this.eappId }]
    );
  }

  async getAllEappMain(eappId?: any): Promise<any> {
    return new Promise(async (resolve) => {
      let eapps: any[] = [];

      await this.dbService.getAllTableData('EAPP_Main').then(result => {
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

  async cleanMobileTaggingRecordIfBelowDataPatch() {
    const allEapp = await this.getAllEappMain();
    let invalidAppNumbers = await this.storage.get(KEYS.INVALID_APPLICATION_NUMBER_HISTORY) || [];
    let refreshEappAppNumbersLocal = [];
    if(allEapp.length > 0) {
      for(let i = 0; i < allEapp.length; i++) {
        const isCreatedDateIsBelowDataPatchDate = await this.isCreatedDateIsBelowDataPatchDate(false, allEapp[i].dateCreated, allEapp[i]);
        if(isCreatedDateIsBelowDataPatchDate) {
          const eappData = allEapp[i];
          const applicationNumber = eappData.applicationNumber;

          if(invalidAppNumbers && invalidAppNumbers.length > 0) {
            let index;
            index = invalidAppNumbers.indexOf(applicationNumber);
            if(index == -1) {
              invalidAppNumbers.push(applicationNumber);
            }
          } else {
            invalidAppNumbers.push(applicationNumber);
          }
        }
        refreshEappAppNumbersLocal.push(allEapp[i].applicationNumber);
      }
      await this.storage.set(KEYS.INVALID_APPLICATION_NUMBER_HISTORY, invalidAppNumbers);
      await this.storage.set(KEYS.ALL_APPLICATION_NUMBER_EAPP, refreshEappAppNumbersLocal);
    }
  }

  dividendOptionWS(dividendOption: any): any {
    switch (dividendOption) {
      case DIVIDEND_OPTION_WS.ACCUMULATE.CODE:
        return DIVIDEND_OPTION_WS.ACCUMULATE.CODE_WS;
      case DIVIDEND_OPTION_WS.ADDITIONAL.CODE:
        return DIVIDEND_OPTION_WS.ADDITIONAL.CODE_WS;
      case DIVIDEND_OPTION_WS.CASH.CODE:
        return DIVIDEND_OPTION_WS.CASH.CODE_WS;
      case DIVIDEND_OPTION_WS.NON_PARTICIPATING.CODE:
        return DIVIDEND_OPTION_WS.NON_PARTICIPATING.CODE_WS;
      case DIVIDEND_OPTION_WS.PREMIUM.CODE:
        return DIVIDEND_OPTION_WS.PREMIUM.CODE_WS;
      default:
        return null;
    }
  }

  async addToMobileTagging(appNumber) {
    let trashData = await this.storage.get(KEYS.OFF_APP_NUMBER_TRASH);
    let appNumberData = await this.storage.get(KEYS.OFF_APP_NUMBER);
    let clientExpiryDate,
    macAddress,
    serverExpiryDate;
    if(appNumberData && appNumberData.length > 0) {
      clientExpiryDate = appNumberData[0].clientExpiryDate;
      macAddress = appNumberData[0].macAddress;
      serverExpiryDate = appNumberData[0].serverExpiryDate;
    } else {
      clientExpiryDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
      macAddress = this.device.uuid;
      serverExpiryDate = new Date(new Date().setFullYear(new Date().getFullYear() + 2));
    }
    let newAppNumberToTag = {
      applicationNumber: appNumber,
      clientExpiryDate: clientExpiryDate,
      macAddress: macAddress,
      serverExpiryDate: serverExpiryDate,
      used: true,
      usedByMobile: true
    }
    if(trashData) {
      trashData.push(newAppNumberToTag);
    } else {
      trashData = [];
      trashData.push(newAppNumberToTag);
    }


    await this.storage.set(KEYS.OFF_APP_NUMBER_TRASH, trashData);
  }

  simulateTouchEventByClassName(className) {
    const elements = document.getElementsByClassName(className);
  
    if (elements.length > 0) {
      const element = elements[0]; // Choose the first element with the class name
  
      const touchObj = new Touch({
        identifier: Date.now(),
        target: element,
        clientX: 0, // Set the desired coordinates
        clientY: 0,
        radiusX: 10.0,
        radiusY: 10.0,
        rotationAngle: 0.0,
        force: 1.0
      });
  
      const touchEvent = new TouchEvent('touchstart', {
        cancelable: true,
        bubbles: true,
        touches: [touchObj],
        targetTouches: [touchObj],
        changedTouches: [touchObj]
      });
  
      element.dispatchEvent(touchEvent);
    } else {
      console.error(`No elements with class name "${className}" found.`);
    }
  }
}
