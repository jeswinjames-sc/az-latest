import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { BasicLeadFormGroup } from '@form-group/leads/lead-form-group';
import { LEAD_STATUS } from '@utils/constants/options/select/lead-status';
import { DetailedLeadFormGroup } from '@form-group/leads/lead-form-group';
import { GENDER } from '@utils/constants/options/segment/gender';
import { CIVIL_STATUS } from '@utils/constants/options/select/civil-status';
import { ReferrorFormGroup } from '@form-group/leads/referror-form-group';
import { BOOL_OPTIONS } from '@utils/constants/options/radio/boolean';

export const BasicLeadFirstNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'firstName',
    fieldName: 'First Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: BasicLeadFormGroup,
    isRequired: true
  },
  size: 3,
  offset: 2
};

export const BasicLeadLastNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'lastName',
    fieldName: 'Last Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: BasicLeadFormGroup,
    isRequired: true
  },
  size: 3,
  offset: 2
};

export const BasicLeadPhoneNumberSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'phoneNumber',
    fieldName: 'Mobile Number',
    attMaxLength: '11',
    placeholder: '09XXXXXXXXX',
    type: 'text',
    setFieldName: true,
    formGroup: BasicLeadFormGroup,
    isRequired: true,
    inputmode: 'numeric'
  },
  size: 3,
  offset: 2
};

export const ImgSpec: ColumnGeneratorSpecs = {
  template: '<img class="lead-img" src="assets/images/common/basic-lead-details.png" />'
};

export const BasicLeadEmailAddressSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'emailAddress',
    fieldName: 'Email Address',
    attMaxLength: '254',
    type: 'email',
    setFieldName: true,
    formGroup: BasicLeadFormGroup,
    inputmode: 'email',
    isRequired: true
  },
  size: 3,
  offset: 2
};

// CREATE EDIT LEAD
export const EditReferredByBankPartnerSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'referredByBankPartner',
    type: 'segment',
    setFieldName: true,
    options: BOOL_OPTIONS,
    formGroup: DetailedLeadFormGroup,
  },
  size: 6
};

export const CreateEditLeadFirstNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'firstName',
    fieldName: 'First Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    isRequired: true
  },
  size: 4,
};

export const CreateEditLeadMiddleNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'middleName',
    fieldName: 'Middle Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup
  },
  size: 4,
};

export const CreateEditLeadLastNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'lastName',
    fieldName: 'Last Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    isRequired: true
  },
  size: 4,
};

export const CreateEditLeadNoMiddleNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'noMiddleName',
    fieldName: '',
    type: 'checkbox',
    checked: false,
    setFieldName: false,
    formGroup: DetailedLeadFormGroup,
    class: "noMiddleName-checkbox"
  },
  size: 1,
  
};

export const CreateEditLeadPhoneNumberSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'phoneNumber',
    fieldName: 'Mobile Number',
    attMaxLength: '11',
    placeholder: '09XXXXXXXXX',
    type: 'text',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    isRequired: true,
    inputmode: 'numeric'
  },
  size: 4
};

export const CreateEditLeadEmailAddressSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'emailAddress',
    fieldName: 'Email Address',
    attMaxLength: '254',
    type: 'email',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    inputmode: 'email',
    isRequired: true
  },
  size: 4
};

export const CreateEditLeadGenderSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'gender',
    fieldName: 'Gender',
    type: 'radio',
    setFieldName: true,
    options: GENDER,
    formGroup: DetailedLeadFormGroup,
  },
  size: 4
};

export const CreateEditLeadDateOfBirthSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'dateOfBirth',
    fieldName: 'Date of Birth',
    type: 'date',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    icon: 'calendar',
    isAgeField: true
  },
  size: 4
};

export const CreateEditLeadCivilStatusSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'civilStatus',
    fieldName: 'Civil Status',
    type: 'select',
    setFieldName: true,
    options: CIVIL_STATUS,
    formGroup: DetailedLeadFormGroup,
    interface: 'popover'
  },
  size: 4
};

export const CreateEditLeadLeadStatusSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'leadStatus',
    fieldName: 'Lead Status',
    type: 'select',
    setFieldName: true,
    options: LEAD_STATUS,
    formGroup: DetailedLeadFormGroup,
    interface: 'popover'
  },
  size: 3,
  isHidden: true
};

export const CreateEditLeadAgeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'age',
    fieldName: 'Age',
    type: 'tel',
    setFieldName: true,
    isDisabled: true,
    formGroup: DetailedLeadFormGroup,
    placeholder: '0'
  },
  size: 4
};

export const CreateEditLeadUnitBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeBuildingName',
    fieldName: 'Unit/Building Name',
    type: 'text',
    attMaxLength: '120',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup
  },
  size: 6
};

export const CreateEditLeadLotBlkSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeBlockNumber',
    fieldName: 'Lot/Block Number',
    type: 'text',
    attMaxLength: '15',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup
  },
  size: 6
};

export const CreateEditLeadStreetNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeStreet',
    fieldName: 'Street Name',
    type: 'text',
    attMaxLength: '40',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup
  },
  size: 6
};

export const CreateEditLeadHomeSubdivisionSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeSubdivision',
    fieldName: 'Barangay/Subdivision',
    type: 'text',
    attMaxLength: '80',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup
  },
  size: 6
};

export const CreateEditLeadHomeCountrySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeCountryCode',
    fieldName: 'Country',
    type: 'selectize',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    interface: 'popover'
  },
  size: 6
};

export const CreateEditLeadHomeProvinceSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeProvinceCode',
    fieldName: 'Province',
    type: 'selectize',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    interface: 'popover'
  },
  size: 6
};

export const CreateEditLeadHomeCitySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeCityCode',
    fieldName: 'City/Municipality',
    type: 'selectize',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    interface: 'popover'
  },
  size: 6
};

export const CreateEditLeadHomeZipCodeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeZipCode',
    fieldName: 'Zip Code',
    type: 'selectize',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    interface: 'popover'
  },
  size: 6
};

export const CreateEditLeadClassOccupationSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'occupationCode',
    fieldName: 'Occupation Class',
    type: 'selectize',
    setFieldName: true,
    interface: 'popover',
    formGroup: DetailedLeadFormGroup
  },
  size: 6
};

export const CreateEditLeadOccupationGroupingSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'occupationGrpCode',
    fieldName: 'Occupation Group',
    type: 'selectize',
    setFieldName: true,
    interface: 'popover',
    formGroup: DetailedLeadFormGroup
  },
  size: 6
};

export const CreateEditLeadMonthlyIncomeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'monthlyIncome',
    fieldName: 'Monthly Income',
    type: 'tel',
    attMaxLength: '12',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    inputmode: 'decimal'
  },
  size: 6
};

export const CreateEditLeadHouseholdIncomeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'householdIncome',
    fieldName: 'Household Monthly Income',
    type: 'tel',
    attMaxLength: '12',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    inputmode: 'decimal'
  },
  size: 6
};

export const CreateEditLeadWorkUnitBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workBuildingName',
    fieldName: 'Unit/Building Name',
    type: 'text',
    attMaxLength: '120',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup
  },
  size: 6
};

export const CreateEditLeadWorkLotBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workBlockNumber',
    fieldName: 'Lot/Block Number',
    type: 'text',
    attMaxLength: '15',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup
  },
  size: 6
};

export const CreateEditLeadWorkStreetNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workStreet',
    fieldName: 'Street Name',
    type: 'text',
    attMaxLength: '40',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup
  },
  size: 6
};

export const CreateEditLeadWorkSubdivisionSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workSubdivision',
    fieldName: 'Barangay/Subdivision',
    type: 'text',
    attMaxLength: '80',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup
  },
  size: 6
};

export const CreateEditLeadWorkCountrySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workCountryCode',
    fieldName: 'Country',
    type: 'selectize',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    interface: 'popover'
  },
  size: 6
};

export const CreateEditLeadWorkProvinceSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workProvinceCode',
    fieldName: 'Province',
    type: 'selectize',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    interface: 'popover'
  },
  size: 6
};

export const CreateEditLeadWorkCitySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workCityCode',
    fieldName: 'City/Municipality',
    type: 'selectize',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    interface: 'popover'
  },
  size: 6
};

export const CreateEditLeadWorkZipCodeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workZipCode',
    fieldName: 'Zip Code',
    type: 'selectize',
    setFieldName: true,
    formGroup: DetailedLeadFormGroup,
    interface: 'popover'
  },
  size: 6
};

export const ReferrorFirstNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'firstName',
    fieldName: 'First Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: ReferrorFormGroup,
    isRequired: true
  },
  size: 4
};

export const ReferrorMiddleNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'middleName',
    fieldName: 'Middle Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: ReferrorFormGroup
  },
  size: 4
};

export const ReferrorLastNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'lastName',
    fieldName: 'Last Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: ReferrorFormGroup,
    isRequired: true
  },
  size: 4
};

export const ReferrorBranchNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'branchName',
    fieldName: 'Branch Name',
    subFieldName: '*For Bancassurance only',
    type: 'selectize',
    setFieldName: true,
    formGroup: ReferrorFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 4
};

export const ReferrorBranchCodeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'branchCode',
    fieldName: 'Branch Code',
    subFieldName: '*For Bancassurance only',
    type: 'text',
    setFieldName: true,
    formGroup: ReferrorFormGroup,
    isRequired: true,
    isDisabled: true
  },
  size: 4
};

export const ReferrorReferrorCodeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'referrorCode',
    fieldName: 'Referror Code',
    subFieldName: ' ',
    type: 'number',
    setFieldName: true,
    attMaxLength: '8',
    formGroup: ReferrorFormGroup,
    isRequired: true
  },
  size: 4
};