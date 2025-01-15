import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import {
  AOCreateSalesIllustrationFormGroup,
  LifeAOCreateSalesIllustrationFormGroup,
  LifePICreateSalesIllustrationFormGroup,
  PICreateSalesIllustrationFormGroup
} from '@form-group/sales-illustration/sales-illustration-form-group';
import { GENDER } from '@utils/constants/options/segment/gender';
import { BOOL_OPTIONS, CLASSIFICATION_OPTIONS } from '@utils/constants/options/radio/boolean';
import { DURATION } from '@utils/constants/options/segment/duration';

export const IsAoSameAsPiSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'isAoEqualsToPi',
    type: 'segment',
    setFieldName: true,
    options: BOOL_OPTIONS,
    formGroup: AOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const FirstNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'firstName',
    fieldName: 'First Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4,
};

export const MiddleNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'middleName',
    fieldName: 'Middle Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup
  },
  size: 4,
};

export const NoMiddleNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'noMiddleName',
    fieldName: 'No Middle Name',
    type: 'checkbox',
    checked: false,
    setFieldName: false,
    formGroup: AOCreateSalesIllustrationFormGroup
  },
  size: 4,
};

export const LastNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'lastName',
    fieldName: 'Last Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4,
};

export const DateOfBirthSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'dateOfBirth',
    fieldName: 'Date of Birth',
    type: 'date',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true,
    isAgeField: true
  },
  size: 4
};

export const AgeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'age',
    fieldName: 'Age',
    type: 'text',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: false,
    isDisabled: true
  },
  size: 4
};

export const GenderSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'gender',
    fieldName: 'Gender',
    type: 'segment',
    setFieldName: true,
    options: GENDER,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};

export const UnitBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeBuildingName',
    fieldName: 'Unit/Building Name',
    type: 'text',
    attMaxLength: '120',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LotBlkSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeBlockNumber',
    fieldName: 'Lot/Block Number',
    type: 'text',
    attMaxLength: '15',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const StreetNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeStreet',
    fieldName: 'Street Name',
    type: 'text',
    attMaxLength: '40',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const HomeSubdivisionSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeSubdivision',
    fieldName: 'Barangay/Subdivision',
    type: 'text',
    attMaxLength: '80',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const HomeCountrySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeCountryCode',
    fieldName: 'Country',
    type: 'selectize',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'

  },
  size: 6
};

export const HomeProvinceSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeProvinceCode',
    fieldName: 'Province',
    type: 'selectize',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'

  },
  size: 6
};

export const HomeCitySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeCityCode',
    fieldName: 'City/Municipality',
    type: 'selectize',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'

  },
  size: 6
};

export const HomeZipCodeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeZipCode',
    fieldName: 'Zip Code',
    type: 'selectize',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 6
};

export const ClassOccupationSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'occupationCode',
    fieldName: 'Occupation Class',
    type: 'selectize',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};

export const OccupationGroupingSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'occupationGrpCode',
    fieldName: 'Occupation Group',
    type: 'selectize',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};

export const OccupationTitleSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'occupationTitle',
    fieldName: 'Occupation (Title/Duties)',
    type: 'text',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    attMaxLength: '60',
    isRequired: true
  },
  size: 4
};

export const VesselSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'vesselType',
    fieldName: 'Type of Vessel',
    type: 'selectize',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 8
};

export const WorkUnitBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workBuildingName',
    fieldName: 'Unit/Building Name',
    type: 'text',
    attMaxLength: '120',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const WorkLotBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workBlockNumber',
    fieldName: 'Lot/Block Number',
    type: 'text',
    attMaxLength: '15',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const WorkStreetNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workStreet',
    fieldName: 'Street Name',
    type: 'text',
    attMaxLength: '40',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const WorkSubdivisionSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workSubdivision',
    fieldName: 'Barangay/Subdivision',
    type: 'text',
    attMaxLength: '80',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const WorkCountrySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workCountryCode',
    fieldName: 'Country',
    type: 'selectize',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 6
};

export const WorkProvinceSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workProvinceCode',
    fieldName: 'Province',
    type: 'selectize',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 6
};

export const WorkCitySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workCityCode',
    fieldName: 'City/Municipality',
    type: 'selectize',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 6
};

export const WorkZipCodeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workZipCode',
    fieldName: 'Zip Code',
    type: 'selectize',
    setFieldName: true,
    formGroup: AOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 6
};

export const PISameAsAoAddressCheckBoxSpec: ColumnGeneratorSpecs = {
  size: 6,
  field: {
    attName: 'sameAsAoAddress',
    fieldName: 'Same as Applicant Owner Present Address',
    type: 'checkbox',
    setFieldName: false,
    formGroup: PICreateSalesIllustrationFormGroup
  }
};

export const PIFirstNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'firstName',
    fieldName: 'First Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4,
};

export const PIMiddleNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'middleName',
    fieldName: 'Middle Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup
  },
  size: 4,
};

export const PINoMiddleNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'noMiddleName',
    fieldName: 'No Middle Name',
    type: 'checkbox',
    checked: false,
    setFieldName: false,
    formGroup: PICreateSalesIllustrationFormGroup
  },
  size: 4,
};

export const PILastNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'lastName',
    fieldName: 'Last Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4,
};

export const PIDateOfBirthSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'dateOfBirth',
    fieldName: 'Date of Birth',
    type: 'date',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};

export const PIAgeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'age',
    fieldName: 'Age',
    type: 'text',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: false,
    isDisabled: true
  },
  size: 4
};

export const PIGenderSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'gender',
    fieldName: 'Gender',
    type: 'segment',
    setFieldName: true,
    options: GENDER,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};

export const PIClassOccupationSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'occupationCode',
    fieldName: 'Occupation Class',
    type: 'selectize',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};

export const PIOccupationGroupingSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'occupationGrpCode',
    fieldName: 'Occupation Group',
    type: 'selectize',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};

export const PIVesselSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'vesselType',
    fieldName: 'Type of Vessel',
    type: 'selectize',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 8
};

export const PIOccupationTitleSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'occupationTitle',
    fieldName: 'Occupation (Title/Duties)',
    type: 'text',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    attMaxLength: '60',
  },
  size: 4
};

export const PIUnitBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeBuildingName',
    fieldName: 'Unit/Building Name',
    type: 'text',
    attMaxLength: '120',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const PILotBlkSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeBlockNumber',
    fieldName: 'Lot/Block Number',
    type: 'text',
    attMaxLength: '15',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const PIStreetNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeStreet',
    fieldName: 'Street Name',
    type: 'text',
    attMaxLength: '40',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const PIHomeSubdivisionSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeSubdivision',
    fieldName: 'Barangay/Subdivision',
    type: 'text',
    attMaxLength: '80',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const PIHomeCountrySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeCountryCode',
    fieldName: 'Country',
    type: 'selectize',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 6
};

export const PIHomeProvinceSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeProvinceCode',
    fieldName: 'Province',
    type: 'selectize',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 6
};

export const PIHomeCitySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeCityCode',
    fieldName: 'City/Municipality',
    type: 'selectize',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 6
};

export const PIHomeZipCodeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeZipCode',
    fieldName: 'Zip Code',
    type: 'selectize',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 6
};

export const PIWorkUnitBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workBuildingName',
    fieldName: 'Unit/Building Name',
    type: 'text',
    attMaxLength: '120',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const PIWorkLotBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workBlockNumber',
    fieldName: 'Lot/Block Number',
    type: 'text',
    attMaxLength: '15',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const PIWorkStreetNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workStreet',
    fieldName: 'Street Name',
    type: 'text',
    attMaxLength: '40',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const PIWorkSubdivisionSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workSubdivision',
    fieldName: 'Barangay/Subdivision',
    type: 'text',
    attMaxLength: '80',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const PIWorkCountrySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workCountryCode',
    fieldName: 'Country',
    type: 'selectize',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 6
};

export const PIWorkProvinceSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workProvinceCode',
    fieldName: 'Province',
    type: 'selectize',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 6
};

export const PIWorkCitySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workCityCode',
    fieldName: 'City/Municipality',
    type: 'selectize',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 6
};

export const PIWorkZipCodeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workZipCode',
    fieldName: 'Zip Code',
    type: 'selectize',
    setFieldName: true,
    formGroup: PICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 6
};


export const LifeIsAoSameAsPiSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'isAoEqualsToPi',
    type: 'segment',
    setFieldName: true,
    options: BOOL_OPTIONS,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
  },
  size: 3
};

export const LifeClassificationSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'classification',
    type: 'segment',
    setFieldName: true,
    options: CLASSIFICATION_OPTIONS,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
  },
  size: 3
};

export const LifeFirstNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'firstName',
    fieldName: 'First Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4,
};

export const LifeMiddleNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'middleName',
    fieldName: 'Middle Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup
  },
  size: 4,
};

export const LifeNoMiddleNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'noMiddleName',
    fieldName: 'No Middle Name',
    type: 'checkbox',
    checked: false,
    setFieldName: false,
    formGroup: LifeAOCreateSalesIllustrationFormGroup
  },
  size: 4,
};

export const LifeLastNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'lastName',
    fieldName: 'Last Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4,
};

export const SuffixSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'suffix',
    fieldName: 'Suffix',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
  },
  size: 2,
};

export const LifeDateOfBirthSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'dateOfBirth',
    fieldName: 'Date of Birth',
    type: 'date',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true,
    isAgeField: true
  },
  size: 4
};

export const LifeAgeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'age',
    fieldName: 'Age',
    type: 'text',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: false,
    isDisabled: true
  },
  size: 4
};

export const LifeGenderSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'gender',
    fieldName: 'Gender',
    type: 'segment',
    setFieldName: true,
    options: GENDER,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};

export const LifeUnitBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeBuildingName',
    fieldName: 'Unit/Building Name',
    type: 'text',
    attMaxLength: '120',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifeLotBlkSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeBlockNumber',
    fieldName: 'Lot/Block Number',
    type: 'text',
    attMaxLength: '15',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifeStreetNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeStreet',
    fieldName: 'Street Name',
    type: 'text',
    attMaxLength: '40',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifeHomeSubdivisionSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeSubdivision',
    fieldName: 'Barangay/Subdivision',
    type: 'text',
    attMaxLength: '80',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifeHomeCountrySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeCountryCode',
    fieldName: 'Country',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'

  },
  size: 3
};

export const LifeHomeProvinceSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeProvinceCode',
    fieldName: 'Province',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'

  },
  size: 3
};

export const LifeHomeCitySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeCityCode',
    fieldName: 'City/Municipality',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'

  },
  size: 3
};

export const LifeHomeZipCodeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeZipCode',
    fieldName: 'Zip Code',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 3
};

export const LifeClassOccupationSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'occupationCode',
    fieldName: 'Occupation Class',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};

export const LifeOccupationGroupingSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'occupationGrpCode',
    fieldName: 'Occupation Group',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};

export const LifeOccupationTitleSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'occupationTitle',
    fieldName: 'Occupation (Title/Duties)',
    type: 'text',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    attMaxLength: '60'
  },
  size: 4
};

export const LTGTagSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'ltgTag',
    fieldName: 'LTG Employee',
    type: 'checkbox',
    checked: false,
    setFieldName: false,
    formGroup: LifeAOCreateSalesIllustrationFormGroup
  },
  size: 4,
};

export const LifeVesselSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'vesselType',
    fieldName: 'Type of Vessel',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 8
};

export const LifeWorkUnitBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workBuildingName',
    fieldName: 'Unit/Building Name',
    type: 'text',
    attMaxLength: '120',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifeWorkLotBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workBlockNumber',
    fieldName: 'Lot/Block Number',
    type: 'text',
    attMaxLength: '15',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifeWorkStreetNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workStreet',
    fieldName: 'Street Name',
    type: 'text',
    attMaxLength: '40',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifeWorkSubdivisionSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workSubdivision',
    fieldName: 'Barangay/Subdivision',
    type: 'text',
    attMaxLength: '80',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifeWorkCountrySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workCountryCode',
    fieldName: 'Country',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 3
};

export const LifeWorkProvinceSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workProvinceCode',
    fieldName: 'Province',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 3
};

export const LifeWorkCitySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workCityCode',
    fieldName: 'City/Municipality',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 3
};

export const LifeWorkZipCodeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workZipCode',
    fieldName: 'Zip Code',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 3
};

export const LifeDurationOfStayInputSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'durationOfStayInput',
    fieldName: 'Duration of Stay',
    type: 'number',
    setFieldName: true,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    attMaxLength: '60'
  },
  size: 8
};

export const LifeDurationOfStaySelectSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'durationOfStaySelect',
    fieldName: '',
    type: 'segment',
    setFieldName: true,
    options: DURATION,
    formGroup: LifeAOCreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};

export const LifePISameAsAoAddressCheckBoxSpec: ColumnGeneratorSpecs = {
  size: 6,
  field: {
    attName: 'sameAsAoAddress',
    fieldName: 'Same as Applicant Owner Present Address',
    type: 'checkbox',
    setFieldName: false,
    formGroup: LifePICreateSalesIllustrationFormGroup
  }
};

export const LifePIFirstNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'firstName',
    fieldName: 'First Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 3,
};

export const LifePIMiddleNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'middleName',
    fieldName: 'Middle Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup
  },
  size: 3,
};

export const LifePINoMiddleNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'noMiddleName',
    fieldName: 'No Middle Name',
    type: 'checkbox',
    checked: false,
    setFieldName: false,
    formGroup: LifePICreateSalesIllustrationFormGroup,
  },
  size: 3,
};

export const LifePILastNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'lastName',
    fieldName: 'Last Name',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 3,
};

export const LifePISuffixSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'suffix',
    fieldName: 'Suffix',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
  },
  size: 2,
};

export const LifePIDateOfBirthSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'dateOfBirth',
    fieldName: 'Date of Birth',
    type: 'date',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 2
};

export const LifePIAgeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'age',
    fieldName: 'Age',
    type: 'text',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: false,
    isDisabled: true
  },
  size: 4
};

export const LifePIGenderSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'gender',
    fieldName: 'Gender',
    type: 'segment',
    setFieldName: true,
    options: GENDER,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};

export const LifePIClassOccupationSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'occupationCode',
    fieldName: 'Occupation Class',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};

export const LifePIOccupationGroupingSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'occupationGrpCode',
    fieldName: 'Occupation Group',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};

export const LifePIVesselSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'vesselType',
    fieldName: 'Type of Vessel',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 8
};

export const LifePIOccupationTitleSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'occupationTitle',
    fieldName: 'Occupation (Title/Duties)',
    type: 'text',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    attMaxLength: '60',
    isRequired: true,
  },
  size: 4
};

export const LifePIUnitBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeBuildingName',
    fieldName: 'Unit/Building Name',
    type: 'text',
    attMaxLength: '120',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifePILotBlkSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeBlockNumber',
    fieldName: 'Lot/Block Number',
    type: 'text',
    attMaxLength: '15',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifePIStreetNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeStreet',
    fieldName: 'Street Name',
    type: 'text',
    attMaxLength: '40',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifePIHomeSubdivisionSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeSubdivision',
    fieldName: 'Barangay/Subdivision',
    type: 'text',
    attMaxLength: '80',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifePIHomeCountrySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeCountryCode',
    fieldName: 'Country',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 3
};

export const LifePIHomeProvinceSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeProvinceCode',
    fieldName: 'Province',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 3
};

export const LifePIHomeCitySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeCityCode',
    fieldName: 'City/Municipality',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 3
};

export const LifePIHomeZipCodeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'homeZipCode',
    fieldName: 'Zip Code',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 3
};

export const LifePIWorkUnitBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workBuildingName',
    fieldName: 'Unit/Building Name',
    type: 'text',
    attMaxLength: '120',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifePIWorkLotBldgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workBlockNumber',
    fieldName: 'Lot/Block Number',
    type: 'text',
    attMaxLength: '15',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifePIWorkStreetNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workStreet',
    fieldName: 'Street Name',
    type: 'text',
    attMaxLength: '40',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifePIWorkSubdivisionSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workSubdivision',
    fieldName: 'Barangay/Subdivision',
    type: 'text',
    attMaxLength: '80',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup
  },
  size: 6
};

export const LifePIWorkCountrySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workCountryCode',
    fieldName: 'Country',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 3
};

export const LifePIWorkProvinceSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workProvinceCode',
    fieldName: 'Province',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 3
};

export const LifePIWorkCitySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workCityCode',
    fieldName: 'City/Municipality',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 3
};

export const LifePIWorkZipCodeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'workZipCode',
    fieldName: 'Zip Code',
    type: 'selectize',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true,
    interface: 'popover'
  },
  size: 3
};

export const LifePIDurationOfStayInputSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'durationOfStayInput',
    fieldName: 'Duration of Stay',
    type: 'number',
    setFieldName: true,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    attMaxLength: '60'
  },
  size: 8
};

export const LifePIDurationOfStaySelectSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'durationOfStaySelect',
    fieldName: '',
    type: 'segment',
    setFieldName: true,
    options: DURATION,
    formGroup: LifePICreateSalesIllustrationFormGroup,
    isRequired: true
  },
  size: 4
};