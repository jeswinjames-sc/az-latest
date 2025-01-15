import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { AbstractControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { SettingsService } from '@services/settings/settings.service.service';
import { UtilService } from '@services/util/util.service';
import { Storage } from '@ionic/storage';
import { KEYS } from '../storage-keys/keys';
import { PERSON_TYPE } from '../si_person_type';
import { ADDRESS_TYPE } from '@utils/enums/address-type';
import { ErrorHandlingService } from '@services/error-handling/error-handling.service';
import { REGEXP } from '../regexp/regexp';
import { CONSTANTS_STRING } from '../string/constants-string';
import { OCCUPATION_MAPPER } from '../mapper/occupation_mapper';
import * as _ from 'lodash';

export interface CountryOnChangeParams {
  countryCode: any,
  countrySpec: ColumnGeneratorSpecs,
  provinceSpec: ColumnGeneratorSpecs,
  citySpec: ColumnGeneratorSpecs,
  zipCodeSpec: ColumnGeneratorSpecs,
  mobileNumberSpec: ColumnGeneratorSpecs,
  formGroup: FormGroup,
  type: string,
  isAOEqualsPi: boolean,
  addressSpecs?: ColumnGeneratorSpecs[],
  setForeignAddress?: boolean,
  showInfo?: boolean
}

export interface ChangeFieldsParams {
  provinceSpec: ColumnGeneratorSpecs,
  citySpec: ColumnGeneratorSpecs,
  zipCodeSpec: ColumnGeneratorSpecs,
  mobileNumberSpec: ColumnGeneratorSpecs,
  formGroup: FormGroup,
  type: string
}

export abstract class DropdownHelper {
  statecount: number;

  constructor(
    public settingsService: SettingsService,
    public utilService: UtilService,
    public storage: Storage,
    public errorHandler: ErrorHandlingService
  ) { }

  async countryDropdown(
    isAOEqualsPi: boolean,
    formGroup: FormGroup,
    type: string,
    countrySpec: ColumnGeneratorSpecs,
    provinceSpec: ColumnGeneratorSpecs,
    citySpec: ColumnGeneratorSpecs,
    zipCodeSpec?: ColumnGeneratorSpecs,
    addressSpecs?: ColumnGeneratorSpecs[],
    setForeignAddress?: boolean,
    showInfo?: boolean,
    mobileNumberSpec?: ColumnGeneratorSpecs,
    isAssureProductIntegrated?: boolean
  ) {
    const phCode = '63';
    const usCode = '1';
    const location = await this.storage.get(KEYS.LOCATION);

    if ((isAssureProductIntegrated == null || isAssureProductIntegrated == undefined) || 
      isAssureProductIntegrated == true) {
        countrySpec.field.countries = location;
    } else {
      countrySpec.field.countries = location.filter(elCnt => elCnt.countryCode == phCode || elCnt.countryCode == usCode);
    }

    if(!location) {
      const emptyLocation = { message : 'Empty location list' };
      this.errorHandler.handleError(emptyLocation);
      return;
    }
    let countryCode;
    if (type === ADDRESS_TYPE.HOME || type === ADDRESS_TYPE.WORK) {
      countryCode = formGroup.controls[`${type}CountryCode`];
    } else if (type === ADDRESS_TYPE.BOPOB) {
      countryCode = formGroup.controls[`pobCountryCode`];
    } else if (type === ADDRESS_TYPE.BOPRESENT) {
      countryCode = formGroup.controls[`presentCountryCode`];
    } else if (type === ADDRESS_TYPE.BOWORK) {
      countryCode = formGroup.controls[`workCountryCode`];
    } else if (type === ADDRESS_TYPE.BENEPOB) {
      countryCode = formGroup.controls[`pobCountry`];
    } else if (type === ADDRESS_TYPE.BENEPRESENT) {
      countryCode = formGroup.controls['countryCode'];
    } else if (type === ADDRESS_TYPE.POB) {
      countryCode = formGroup.controls[`${type}Country`];
    } else {
      countryCode = formGroup.controls[`countryCode`];
    }

    if (!countryCode) countryCode = formGroup.controls[countrySpec.field.attName];

    if (countryCode) countryCode.setValue(countryCode.value || phCode);
    
    countrySpec.field.conditionalFunction = async () => {
      await this.countryOnChangeEvent({ 
        countryCode,
        countrySpec,
        provinceSpec,
        citySpec,
        zipCodeSpec,
        mobileNumberSpec,
        formGroup,
        type,
        isAOEqualsPi,
        addressSpecs,
        setForeignAddress,
        showInfo
      });

      formGroup.markAllAsTouched();
    };

    if (countryCode && countryCode.value) { //initial load if lead is existing
      countrySpec.field.selectedText = await this.utilService.getAddressName(countryCode.value);
      if(countryCode.value === phCode || countryCode.value === usCode) {
        if (zipCodeSpec) {
          if(type === ADDRESS_TYPE.HOME || type === ADDRESS_TYPE.WORK) {
            zipCodeSpec.field.isRequired = false;
          } else {
            zipCodeSpec.field.isRequired = true;
          }
        } 

        this.resetControls([provinceSpec, citySpec, zipCodeSpec], formGroup, 'selectize', false);

        this.statecount=0
        if(this.statecount==0){
          const states = await this.settingsService.getGenericCode(countryCode.value);
          if(states){
            provinceSpec.field.states = this.utilService.sortAddressByName('state', states.states);
            this.statecount=1;
          }
        }

        if (mobileNumberSpec) this.initMobilePhoneField(mobileNumberSpec, formGroup, countryCode.value);
        if (provinceSpec) provinceSpec.field.selectedText = '';
        if (citySpec) citySpec.field.selectedText = '';
        if (zipCodeSpec) zipCodeSpec.field.selectedText = '';

        await this.setIsRequiredProvCityZipSpecs({provinceSpec, citySpec, zipCodeSpec, mobileNumberSpec, formGroup, type}, countryCode.value);

        await this.provinceDropdown(
          formGroup,
          type,
          provinceSpec,
          citySpec,
          zipCodeSpec
        );

      } else {
        this.changeAddressFieldTypes({provinceSpec, citySpec, zipCodeSpec, mobileNumberSpec, formGroup, type}, true)
      }

    }
  }

  async countryOnChangeEvent( params: CountryOnChangeParams) {
    const phCode = '63';
    const usCode = '1';

    let {
      countryCode, countrySpec, provinceSpec, citySpec, zipCodeSpec, mobileNumberSpec, 
      formGroup, type, isAOEqualsPi, addressSpecs, setForeignAddress, showInfo
    } = params;
  
    const disableControls = (specs: ColumnGeneratorSpecs[]) => {
      specs.forEach(spec => {
        if (spec && spec.field) {
          spec.field.isDisabled = true;
          formGroup.controls[spec.field.attName].disable();
        }
      });
    };

    if(countryCode && [phCode, usCode].includes(countryCode.value)) {
      this.resetControls([provinceSpec, citySpec, zipCodeSpec], formGroup, 'selectize');

      await this.setIsRequiredProvCityZipSpecs({provinceSpec, citySpec, zipCodeSpec, mobileNumberSpec, formGroup, type}, countryCode.value);

      const countryCodes = [
        'countryCode',
        'homeCountryCode',
        'presentCountryCode'
      ];

      if (mobileNumberSpec && countryCode.value && countryCodes.includes(countrySpec.field.attName)) {
        this.initMobilePhoneField(mobileNumberSpec, formGroup, countryCode.value);
      } else if (mobileNumberSpec && countryCode.value) {
        if(type == 'bene') { // beneficiary summary
          const mobileNumberControl = formGroup.get('mobileNumber');
          if (countryCode.value === phCode) {
            const { field } = mobileNumberSpec;
            field.isRequired = true;
            field.placeholder = '09XXXXXXXXX';
            field.attMaxLength = '11';
            mobileNumberControl.setValidators([
              Validators.required,
              Validators.maxLength(11),
              Validators.pattern(REGEXP.MOBILE_NUMBER)
            ]);
          } else {
            const { field } = mobileNumberSpec;
            field.attMaxLength = '16';
            field.isRequired = true;
            field.placeholder = '';
            mobileNumberControl.setValidators([
              Validators.required,
              Validators.maxLength(16),
              Validators.pattern(REGEXP.WHOLE_NUMBER)
            ]);
          } 
        }
      }

      await this.utilService.getAddressGenericCode(
        provinceSpec, countrySpec,
        [provinceSpec, citySpec, zipCodeSpec],
        formGroup, type, countryCode.value
      );

      if (setForeignAddress || showInfo) {
        this.utilService.setAddressCondition(formGroup, addressSpecs, type, isAOEqualsPi ? PERSON_TYPE.AO : PERSON_TYPE.PI, showInfo);
      }

      disableControls([citySpec, zipCodeSpec]);
      await this.provinceDropdown(formGroup, type, provinceSpec, citySpec, zipCodeSpec);
    } else {
      countrySpec.field.selectedText = await this.utilService.getAddressName(countryCode.value);
      await this.changeAddressFieldTypes({provinceSpec, citySpec, zipCodeSpec, mobileNumberSpec, formGroup, type});
      await this.utilService.setLocation(countrySpec, provinceSpec, citySpec, zipCodeSpec);
    }
  }

  async changeAddressFieldTypes(params: ChangeFieldsParams, setValue = false) {
    let { provinceSpec, citySpec, zipCodeSpec, mobileNumberSpec, formGroup, type } = params;
    const resetFields = (spec: ColumnGeneratorSpecs, maxLength: string, isRequired: boolean = true) => {
      const { field } = spec;
      field.type = 'text';
      field.conditionalFunction = () => { };
      field.attMaxLength = maxLength;
      field.isDisabled = false;
      field.isRequired = isRequired;

      const control = formGroup.controls[field.attName];
      if (setValue && control && control.value) {
        field.selectedText = control.value;
      } else {
        control.reset();
      }
      if (control) control.enable();
    };

    const setValidators = (control: AbstractControl, validators: ValidatorFn[]) => {
      control.setValidators(validators);
      control.updateValueAndValidity({ onlySelf: true, emitEvent: false });
      control.markAsTouched();
    };

    const addressType = type as ADDRESS_TYPE;
    let isProvinceCityRequired = [
      ADDRESS_TYPE.BOPOB,
      ADDRESS_TYPE.BOWORK,
      ADDRESS_TYPE.BOPRESENT,
      ADDRESS_TYPE.BENEPOB,
      ADDRESS_TYPE.BENEWORK,
      ADDRESS_TYPE.BENEPRESENT,
      ADDRESS_TYPE.POB
    ].includes(addressType);
    const isSIForm = (!!formGroup.get('isAoEqualsToPi') || !!formGroup.get('sameAsAoAddress'));
    if (!isProvinceCityRequired && (type === ADDRESS_TYPE.HOME || type === ADDRESS_TYPE.WORK) && isSIForm) isProvinceCityRequired = true;

    const isShortMaxLength = type === ADDRESS_TYPE.POB || type === ADDRESS_TYPE.BOPOB || type === ADDRESS_TYPE.BENEPOB;

    if (isSIForm && addressType == ADDRESS_TYPE.WORK && !!formGroup.get('occupationCode')) {
      const occupationMapper = { ...OCCUPATION_MAPPER };
      const isNonEarner = _.has(occupationMapper, formGroup.controls.occupationCode.value);
      if (isNonEarner) isProvinceCityRequired = false;
    }

    if (provinceSpec) {
      let attMaxLength = isShortMaxLength ? '10' : '40';
      resetFields(provinceSpec, attMaxLength, isProvinceCityRequired);
    }

    if (citySpec) {
      let attMaxLength = isShortMaxLength ? '9' : '43';
      resetFields(citySpec, attMaxLength, isProvinceCityRequired);
    }

    if (zipCodeSpec) {
      resetFields(zipCodeSpec, '10', false);
      const { field } = zipCodeSpec;
      field.inputmode = 'numeric';
      const zipCodeControl = formGroup.controls[field.attName];
      setValidators(zipCodeControl, [Validators.pattern(REGEXP.NUMBER_ONLY)]);
    }

    if (mobileNumberSpec) {
      this.initMobilePhoneField(mobileNumberSpec, formGroup, '');
      const { field } = mobileNumberSpec;
      const phoneNumberControl = formGroup.controls[field.attName];
      if (setValue && phoneNumberControl.value) {
        field.selectedText = phoneNumberControl.value;
      }
    }

    formGroup.updateValueAndValidity({ emitEvent: false });
  }

  async setIsRequiredProvCityZipSpecs(params: ChangeFieldsParams, countryCode) {
    let { provinceSpec, citySpec, zipCodeSpec, formGroup, type } = params;
    const isHomeOrWork = type === ADDRESS_TYPE.HOME || type === ADDRESS_TYPE.WORK;
    const isUSAddress = countryCode === CONSTANTS_STRING.US_CODE;
    const isPHAddress = countryCode === CONSTANTS_STRING.PH_CODE;
    const isSIForm = (!!formGroup.get('isAoEqualsToPi') || !!formGroup.get('sameAsAoAddress'));
    let isForOccSIHandling = false;

    if (isSIForm && type == ADDRESS_TYPE.WORK && !!formGroup.get('occupationCode')) {
      const occupationMapper = { ...OCCUPATION_MAPPER };
      isForOccSIHandling = _.has(occupationMapper, formGroup.controls.occupationCode.value);
    }

    setTimeout(function () {
      if (isForOccSIHandling) {
        if (provinceSpec) provinceSpec.field.isRequired = false;
        if (citySpec) citySpec.field.isRequired = false;
        if (zipCodeSpec) zipCodeSpec.field.isRequired = false;
      } else {
        if (provinceSpec) provinceSpec.field.isRequired = !isHomeOrWork || isSIForm;
        if (citySpec) citySpec.field.isRequired = !isHomeOrWork || isSIForm;
        if (zipCodeSpec) zipCodeSpec.field.isRequired = isSIForm && isPHAddress ? true : (isHomeOrWork ? false : !isUSAddress);
      }
    }, 300);
  }

  async provinceDropdown(
    formGroup: FormGroup,
    type: string,
    provinceSpec: ColumnGeneratorSpecs,
    citySpec: ColumnGeneratorSpecs,
    zipCodeSpec: ColumnGeneratorSpecs
  ) {
    let countryCode;
    let provinceCode;

    if (type === ADDRESS_TYPE.HOME || type === ADDRESS_TYPE.WORK) {
      countryCode = formGroup.controls[`${type}CountryCode`];
      provinceCode = formGroup.controls[`${type}ProvinceCode`];
    } else if (type === ADDRESS_TYPE.BOPOB) {
      countryCode = formGroup.controls[`pobCountryCode`];
      provinceCode = formGroup.controls[`pobProvinceCode`];
    } else if (type === ADDRESS_TYPE.BOPRESENT) {
      countryCode = formGroup.controls[`presentCountryCode`];
      provinceCode = formGroup.controls[`presentProvinceCode`];
    } else if (type === ADDRESS_TYPE.BOWORK) {
      countryCode = formGroup.controls[`workCountryCode`];
      provinceCode = formGroup.controls[`workProvinceCode`];
    } else if (type === ADDRESS_TYPE.BENEPOB) {
      countryCode = formGroup.controls['pobCountry'];
      provinceCode = formGroup.controls[`pobProvince`];
    } else if (type === ADDRESS_TYPE.BENEPRESENT) {
      countryCode = formGroup.controls['countryCode'];
      provinceCode = formGroup.controls[`provinceCode`];
    } else if (type === ADDRESS_TYPE.POB) {
      countryCode = formGroup.controls[`${type}Country`];
      provinceCode = formGroup.controls[`${type}Province`];
    } else {
      countryCode = formGroup.controls[`countryCode`];
      provinceCode = formGroup.controls[`provinceCode`];
    }

    provinceSpec.field.conditionalFunction = async () => {
      await this.utilService.getAddressGenericCode(
        citySpec,
        provinceSpec,
        [citySpec,
          zipCodeSpec],
        formGroup,
        type,
        countryCode.value,
        provinceCode.value);

        if(citySpec && citySpec.field) {
          citySpec.field.isDisabled = false;
          formGroup.controls[citySpec.field.attName].enable();
        }
        if(zipCodeSpec && zipCodeSpec.field) {
          zipCodeSpec.field.isDisabled = true;
          formGroup.controls[zipCodeSpec.field.attName].disable();
        }

        formGroup.markAllAsTouched();
    };

    if (provinceCode && provinceCode.value) {
      provinceSpec.field.selectedText = await this.utilService.getAddressName(
        countryCode.value,
        provinceCode.value
      );

      const city = await this.settingsService.getGenericCode(countryCode.value, provinceCode.value);
      if (city) {
        citySpec.field.city = this.utilService.sortAddressByName('city',  city.cities);
      }
    }
    
    await this.cityDropdown(formGroup, type, provinceSpec, citySpec, zipCodeSpec);
  }

  async cityDropdown(
    formGroup: FormGroup,
    type: string,
    provinceSpec: ColumnGeneratorSpecs,
    citySpec: ColumnGeneratorSpecs,
    zipCodeSpec: ColumnGeneratorSpecs
  ) {

    const getAddressControls = (prefix: string) => ({
      countryCode: formGroup.controls[`${prefix}CountryCode`],
      provinceCode: formGroup.controls[`${prefix}ProvinceCode`],
      cityCode: formGroup.controls[`${prefix}CityCode`]
    });

    let controls; 
    switch (type) {
      case ADDRESS_TYPE.HOME:
      case ADDRESS_TYPE.WORK:
        controls = getAddressControls(type);
        break;
      case ADDRESS_TYPE.BOPOB:
        controls = getAddressControls('pob');
        break;
      case ADDRESS_TYPE.BOPRESENT:
        controls = getAddressControls('present');
        break;
      case ADDRESS_TYPE.BOWORK:
        controls = getAddressControls('work');
        break;
      case ADDRESS_TYPE.POB:
        controls = {
          countryCode: formGroup.controls[`${type}Country`],
          provinceCode: formGroup.controls[`${type}Province`],
          cityCode: formGroup.controls[`${type}City`]
        };
        break;
      case ADDRESS_TYPE.BENEPOB:
        controls = {
          countryCode: formGroup.controls[`pobCountry`],
          provinceCode: formGroup.controls[`pobProvince`],
          cityCode: formGroup.controls[`pobCity`]
        };
        break;
      case ADDRESS_TYPE.BENEPRESENT:
      default:
        controls = {
          countryCode: formGroup.controls[`countryCode`],
          provinceCode: formGroup.controls[`provinceCode`],
          cityCode: formGroup.controls[`cityCode`]
        };
    }

    const { countryCode, provinceCode, cityCode } = controls;

    citySpec.field.conditionalFunction = async () => {
      await this.utilService.getAddressGenericCode(
        zipCodeSpec,
        citySpec,
        [zipCodeSpec],
        formGroup,
        type,
        countryCode.value,
        provinceCode.value,
        cityCode.value
      );
  
      if(zipCodeSpec && zipCodeSpec.field) {
        if(zipCodeSpec.field.zipcode && zipCodeSpec.field.zipcode.length !== 0) {
          zipCodeSpec.field.isDisabled = false;
          formGroup.controls[zipCodeSpec.field.attName].enable();
        } else {
          zipCodeSpec.field.isDisabled = true;
          formGroup.controls[zipCodeSpec.field.attName].disable();
        }
      }

      formGroup.markAllAsTouched();
    };

    if (cityCode && cityCode.value) {
      citySpec.field.selectedText = await this.utilService.getAddressName(
        countryCode.value,
        provinceCode.value,
        cityCode.value);

      if (type !== ADDRESS_TYPE.POB) {
        const zip = await this.settingsService.getGenericCode(countryCode.value, provinceCode.value, cityCode.value);
        if (zip && zipCodeSpec) {
          zipCodeSpec.field.zipcode = this.utilService.sortAddressByName('zipcode' , zip.zipCodes);
          await this.zipcodeDropdown(formGroup, type, zipCodeSpec);
        }
      }
    }

    if(!provinceSpec.field.selectedText || provinceSpec.field.selectedText === '') {
      cityCode.disable();
      citySpec.field.isDisabled = true;
      citySpec.field.isRequired = true;

      if(type !== ADDRESS_TYPE.POB) {
        let zipCode = formGroup.controls[`zipCode`];
        if(type === ADDRESS_TYPE.HOME || type === ADDRESS_TYPE.WORK) {
          citySpec.field.isRequired = false;
          zipCode = formGroup.controls[`${type}ZipCode`];
        } 
        if (zipCode) zipCode.disable();
      }
    } else if (provinceSpec.field.selectedText !== '') {
      cityCode.enable();
      citySpec.field.isDisabled = false;
      citySpec.field.isRequired = true;

      if(type !== ADDRESS_TYPE.POB && citySpec.field.selectedText !== '') {
        let zipCode = formGroup.controls[`zipCode`];

        if(type === ADDRESS_TYPE.HOME || type === ADDRESS_TYPE.WORK) {
          citySpec.field.isRequired = false;
          zipCode = formGroup.controls[`${type}ZipCode`];
        } 

        if(zipCodeSpec && zipCode && zipCodeSpec.field.zipcode && zipCodeSpec.field.zipcode.length !== 0) {
          if (zipCode) zipCode.enable();
        } else {
          if (zipCode) zipCode.disable();
        }
      }
    }
  }

  async zipcodeDropdown(formGroup: FormGroup, type: string, zipCodeSpec: ColumnGeneratorSpecs) {
    let countryCode;
    let provinceCode;
    let cityCode;
    let zipCode;

    if (type === ADDRESS_TYPE.HOME || type === ADDRESS_TYPE.WORK) {
      countryCode = formGroup.controls[`${type}CountryCode`];
      provinceCode = formGroup.controls[`${type}ProvinceCode`];
      cityCode = formGroup.controls[`${type}CityCode`];
      zipCode = formGroup.controls[`${type}ZipCode`];
    } else if (type === ADDRESS_TYPE.BOPOB) {
      countryCode = formGroup.controls[`pobCountryCode`];
      provinceCode = formGroup.controls[`pobProvinceCode`];
      cityCode = formGroup.controls[`pobCityCode`];
    } else if (type === ADDRESS_TYPE.BOPRESENT) {
      countryCode = formGroup.controls[`presentCountryCode`];
      provinceCode = formGroup.controls[`presentProvinceCode`];
      cityCode = formGroup.controls[`presentCityCode`];
      zipCode = formGroup.controls[`presentZipCode`];
    } else if (type === ADDRESS_TYPE.BOWORK) {
      countryCode = formGroup.controls[`workCountryCode`];
      provinceCode = formGroup.controls[`workProvinceCode`];
      cityCode = formGroup.controls[`workCityCode`];
      zipCode = formGroup.controls[`workZipCode`];
    } else if (type === ADDRESS_TYPE.BENEPOB) {
      countryCode = formGroup.controls['pobCountry'];
      provinceCode = formGroup.controls[`pobProvince`];
      cityCode = formGroup.controls[`pobCity`];
    } else if (type === ADDRESS_TYPE.BENEPRESENT) {
      countryCode = formGroup.controls['countryCode'];
      provinceCode = formGroup.controls[`provinceCode`];
      cityCode = formGroup.controls[`cityCode`];
      zipCode = formGroup.controls[`zipCode`];
    } else if (type === ADDRESS_TYPE.POB) {
      countryCode = formGroup.controls[`${type}Country`];
      provinceCode = formGroup.controls[`${type}Province`];
      cityCode = formGroup.controls[`${type}City`];
    } else {
      countryCode = formGroup.controls[`countryCode`];
      provinceCode = formGroup.controls[`provinceCode`];
      cityCode = formGroup.controls[`cityCode`];
      zipCode = formGroup.controls[`zipCode`];
    }

    if (zipCode.value) {
      zipCodeSpec.field.selectedText = await this.utilService.getAddressName(
        countryCode.value,
        provinceCode.value,
        cityCode.value,
        zipCode.value);
    }
  }

  async occupationClassDropdown(
    formGroup: FormGroup,
    occupationClassSpec: ColumnGeneratorSpecs,
    occupationGrpSpec: ColumnGeneratorSpecs,
    vesselSpec?: ColumnGeneratorSpecs,
    setVessel?: boolean,
    setNoWorkAddress?: boolean,
    workAddressSpecs?: ColumnGeneratorSpecs[],
    personType?: string,
    showInfo?: boolean
  ) {
    const occupation = await this.storage.get(KEYS.OCCUPATIONS);
    if(!occupation) {
      const emptyOccupation = { message : 'Empty occupation list' };
      this.errorHandler.handleError(emptyOccupation);
      return;
    }
    const juvenileOccCode = '215';
    const occupationSpecs = [occupationClassSpec, occupationGrpSpec];
    occupationClassSpec.field.occupations = personType === PERSON_TYPE.AO || personType == undefined ? occupation.filter(item => {
      return item.code !== juvenileOccCode;
    }) : occupation;

    if (showInfo) {
      this.utilService.setOccupationCondition(formGroup, occupationSpecs, showInfo);
    }

    occupationClassSpec.field.conditionalFunction = () =>
      this.utilService.getOccupationGenericCode(
        occupationGrpSpec,
        formGroup,
        [occupationClassSpec,
          occupationGrpSpec,
          vesselSpec],
        formGroup.controls.occupationCode.value).then(() => {
          if (setVessel || showInfo) {
            this.utilService.setVessel(formGroup, vesselSpec);
          }
          if (setNoWorkAddress || showInfo) {
            this.utilService.setAddressCondition(
              formGroup,
              workAddressSpecs,
              ADDRESS_TYPE.WORK,
              personType,
              showInfo
            );
          }
        });

    if (formGroup.controls.occupationCode.value) {
      occupationClassSpec.field.selectedText =
        this.utilService.getOccupationName(formGroup.controls.occupationCode.value);

      const occupationGroup = this.settingsService.getOccupationCode(formGroup.controls.occupationCode.value);
      occupationGrpSpec.field.occupationGroup = occupationGroup;

      const seafarerCode = '212';
      if (vesselSpec) {
        vesselSpec.field.isVisible = false;
      }
      if (formGroup.controls.occupationCode.value === seafarerCode) {
        if (vesselSpec) {
          vesselSpec.field.isVisible = true;
          const occupationVessels = this.settingsService.getOccupationCode(formGroup.controls.occupationCode.value,
            formGroup.controls.occupationGrpCode.value);
          vesselSpec.field.vesselType = occupationVessels;

          this.setVesselOccupationDropdown(formGroup, vesselSpec);
        }
      }
    }

    this.setGroupOccupationDropdown(
      formGroup,
      occupationClassSpec,
      occupationGrpSpec,
      vesselSpec
    );
  }

  async setGroupOccupationDropdown(
    formGroup: FormGroup,
    occupationClassSpec: ColumnGeneratorSpecs,
    occupationGrpSpec: ColumnGeneratorSpecs,
    vesselSpec: ColumnGeneratorSpecs
  ) {
    occupationGrpSpec.field.conditionalFunction = async () => {
      occupationGrpSpec.field.selectedText = '';
      this.utilService.getOccupationGenericCode(
        vesselSpec,
        formGroup,
        [vesselSpec],
        formGroup.controls.occupationCode.value,
        formGroup.controls.occupationGrpCode.value);

        if(vesselSpec) {
          this.utilService.setVessel(formGroup, vesselSpec);
        }
    };

    if (formGroup.controls.occupationGrpCode.value) {
      occupationGrpSpec.field.selectedText =
        this.utilService.getOccupationName(
          formGroup.controls.occupationCode.value,
          formGroup.controls.occupationGrpCode.value);
      formGroup.controls.occupationGrpCode.enable();
    }

    if(!occupationClassSpec.field.selectedText || occupationClassSpec.field.selectedText === ''){
      formGroup.controls.occupationGrpCode.disable();
    }
  }

  async setVesselOccupationDropdown(formGroup: FormGroup, vesselSpec: ColumnGeneratorSpecs) {
    vesselSpec.field.conditionalFunction = async () => {
      vesselSpec.field.selectedText = '';
      vesselSpec.field.selectedText = this.utilService.getOccupationName(
        formGroup.controls.occupationCode.value,
        formGroup.controls.occupationGrpCode.value,
        formGroup.controls.vesselType.value);
    };

    if (formGroup.controls.vesselType.value) {
      vesselSpec.field.selectedText = this.utilService.getOccupationName(
        formGroup.controls.occupationCode.value,
        formGroup.controls.occupationGrpCode.value,
        formGroup.controls.vesselType.value);
    }
  }

  resetControls(specs: ColumnGeneratorSpecs[], formGroup: FormGroup, fieldType: string, resetForm: boolean = true) {
    specs.forEach(spec => {
      if (spec && spec.field) {
        if(resetForm) formGroup.controls[spec.field.attName].reset();
        spec.field.type = fieldType ? fieldType : 'selectize';
      }
    });
    formGroup.updateValueAndValidity({ emitEvent: false });
  };

  async initMobilePhoneField(mobileNumberSpec: ColumnGeneratorSpecs, formGroup: FormGroup, countryCodeValue: string) {
    const isPH = countryCodeValue === CONSTANTS_STRING.PH_CODE;
    const validators = [
      Validators.required,
      Validators.maxLength(isPH ? 11 : 16),
      ...(isPH ? [Validators.pattern(REGEXP.MOBILE_NUMBER)] : [Validators.pattern(REGEXP.WHOLE_NUMBER)])
    ];

    const { field } = mobileNumberSpec;
    field.isRequired = true;
    field.placeholder = isPH ? '09XXXXXXXXX' : '';
    field.attMaxLength = isPH ? '11' : '16';

    const mobileNumberControl = formGroup.controls[mobileNumberSpec.field.attName];
    mobileNumberControl.setValidators(validators);
    mobileNumberControl.updateValueAndValidity({ emitEvent: false });
    mobileNumberControl.markAsTouched();
    formGroup.updateValueAndValidity({ emitEvent: false });
  }

}
