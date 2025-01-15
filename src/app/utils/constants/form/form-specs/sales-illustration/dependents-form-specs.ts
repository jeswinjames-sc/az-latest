import { FormBuilder, FormGroup } from "@angular/forms";
import { DependentsDetailsFormGroup } from "@form-group/sales-illustration/dependents-details-form-group";
import { DependentsDeetsFGControls, LifeAOCreateSalesIllustrationFormGroup } from "@form-group/sales-illustration/sales-illustration-form-group";
import { ColumnGeneratorSpecs } from "@models/specs/column-generator-specs";
import { DynamicTableSpecs } from "@models/specs/dynamic-table-specs";
import { DURATION } from "@utils/constants/options/segment/duration";
import { GENDER } from "@utils/constants/options/segment/gender";
import { CIVIL_STATUS } from "@utils/constants/options/select/civil-status";
import { ONLINE_PAYMENT_RELATIONSHIP, dependents_relationship } from "@utils/constants/options/select/submission-checklist/online-payment-relationship";
import { CONSTANTS_STRING } from "@utils/constants/string/constants-string";

export const DependentsDeetsFormGroup: FormGroup = new FormBuilder().group(DependentsDeetsFGControls)

export const DateOfBirthSpecs: ColumnGeneratorSpecs = {
    size: 2,
    field: {
        type: 'date',
        attName: 'dateOfBirth',
        formGroup: DependentsDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Date of Birth',
        dateFormatOutput: 'YYYY-MM-DD',
        isAge21Max: true,
        isDisabled: true
    },
    isHidden: false
  };

  export const DateOfBirthAdultSpecs: ColumnGeneratorSpecs = {
    size: 2,
    field: {
        type: 'date',
        attName: 'dateOfBirthAdult',
        formGroup: DependentsDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Date of Birth',
        dateFormatOutput: 'YYYY-MM-DD',
        isAgeField: true,
    },
    isHidden: true 
  };

  export const relationshipToPISpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attName: 'relationToPI',
        interface: 'popover',
        formGroup: DependentsDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Relationship to Proposed Insured',
        options: dependents_relationship
    }
  };

export const OccupationCodeSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        interface: 'popover',
        attName: 'occupationCode',
        formGroup: DependentsDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Nature of Business'
    }
  };

  export const OccupationGrpCodeSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        interface: 'popover',
        attName: 'occupationGrpCode',
        formGroup: DependentsDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Occupation'
    }
}

export const VesselTypeSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        interface: 'popover',
        attName: 'vesselType',
        formGroup: DependentsDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Type of Vessel',
        isRequired: true,
    },
}

export const PresentBuildingNameSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attName: 'homeBuildingName',
        attMaxLength: 120,
        formGroup: DependentsDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Unit/Building Name'
    }
}

export const PresentBlockNumberSpecs: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        type: 'text',
        attName: 'homeBlockNumber',
        attMaxLength: 15,
        formGroup: DependentsDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Lot/Block Number'
    }
}

export const PresentStreetSpecs: ColumnGeneratorSpecs = {
    size: 5,
    field: {
        type: 'text',
        attName: 'homeStreet',
        attMaxLength: 40,
        formGroup: DependentsDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Street'
    }
}

export const PresentSubdivisionSpecs: ColumnGeneratorSpecs = {
    field: {
        type: 'text',
        attName: 'homeSubdivision',
        attMaxLength: 80,
        formGroup: DependentsDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Barangay/Subdivision'
    }
}

export const PresentCountryCodeSpecs: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        attName: 'homeCountryCode',
        fieldName: 'Country',
        setFieldName: true,
        type: 'select',
        interface: 'popover',
        formGroup: DependentsDeetsFormGroup
    }
}

export const PresentProvinceCodeSpecs: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        attName: 'homeProvinceCode',
        fieldName: 'Province',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        formGroup: DependentsDeetsFormGroup
    }
}

export const PresentCityCodeSpecs: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        attName: 'homeCityCode',
        fieldName: 'City',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        formGroup: DependentsDeetsFormGroup
    }
}

export const PresentZipCodeSpecs: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        attName: 'homeZipCode',
        fieldName: 'Zip Code',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        formGroup: DependentsDeetsFormGroup
    }
}

export const WorkBuildingNameSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attName: 'workBuildingName',
        attMaxLength: 120,
        formGroup: DependentsDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Unit/Building Name'
    }
}

export const WorkBlockNumberSpecs: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        type: 'text',
        attName: 'workBlockNumber',
        attMaxLength: 15,
        formGroup: DependentsDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Lot/Block Number'
    }
}

export const WorkStreetSpecs: ColumnGeneratorSpecs = {
    size: 5,
    field: {
        type: 'text',
        attName: 'workStreet',
        attMaxLength: 40,
        formGroup: DependentsDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Street'
    }
}

export const WorkSubdivisionSpecs: ColumnGeneratorSpecs = {
    field: {
        type: 'text',
        attName: 'workSubdivision',
        attMaxLength: 80,
        formGroup: DependentsDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Barangay/Subdivision'
    }
}

export const WorkCountryCodeSpecs: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        attName: 'workCountryCode',
        fieldName: 'Country',
        setFieldName: true,
        type: 'select',
        interface: 'popover',
        formGroup: DependentsDeetsFormGroup
    }
}

export const WorkProvinceCodeSpecs: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        attName: 'workProvinceCode',
        fieldName: 'Province',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        formGroup: DependentsDeetsFormGroup
    }
}

export const WorkCityCodeSpecs: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        attName: 'workCityCode',
        fieldName: 'City',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        formGroup: DependentsDeetsFormGroup
    }
}

export const WorkZipCodeSpecs: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        attName: 'workZipCode',
        fieldName: 'Zip Code',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        formGroup: DependentsDeetsFormGroup
    }
}

export const DurationOfStayInputSpec: ColumnGeneratorSpecs = {
    field: {
      attName: 'durationOfStay',
      fieldName: 'Duration of Stay',
      type: 'number',
      setFieldName: true,
      formGroup: DependentsDeetsFormGroup,
      attMaxLength: '60'
    },
    size: 8
  };
  
  export const DurationOfStaySelectSpec: ColumnGeneratorSpecs = {
    field: {
      attName: 'durationOfStaySelect',
      fieldName: '',
      type: 'segment',
      setFieldName: true,
      options: DURATION,
      formGroup: DependentsDeetsFormGroup,
      isRequired: true
    },
    size: 4
  };

export const DependentsTableSpecs: DynamicTableSpecs = {
    mainFormGroup: LifeAOCreateSalesIllustrationFormGroup,
    formArrayKey: 'dependentsGroup',
    secondaryFormGroup: DependentsDeetsFormGroup,
    controlConfiguration: DependentsDeetsFGControls,
    limit: 10,
    title: 'Dependents',
    customSaveButtonName: 'Dependents',
    readOnly: false,
    hasShowMore: true,
    defaultValue: [
        { formGroupControlName: 'homeCountryCode', value: CONSTANTS_STRING.PH_CODE },
        { formGroupControlName: 'workCountryCode', value: CONSTANTS_STRING.PH_CODE },
    ],

    availableActions: {
        add: true,
        edit: true,
        save: true,
        delete: true
    },

    formGeneratorSpecs: {
        rows: [
            {
                columns: [
                    {
                        size: 3,
                        field: {
                            attName: 'firstName',
                            fieldName: 'First Name',
                            setFieldName: true,
                            type: 'text',
                            attMaxLength: 50,
                            formGroup: DependentsDeetsFormGroup
                        }
                    },
                    {
                        size: 3,
                        field: {
                            attName: 'middleName',
                            fieldName: 'Middle Name',
                            setFieldName: true,
                            type: 'text',
                            attMaxLength: 50,
                            formGroup: DependentsDeetsFormGroup
                        }
                    },
                    {
                        size: 3,
                        field: {
                            attName: 'lastName',
                            fieldName: 'Last Name',
                            setFieldName: true,
                            attMaxLength: 50,
                            type: 'text',
                            formGroup: DependentsDeetsFormGroup
                        }
                    },
                    {
                        size: 2,
                        field: {
                            attName: 'suffix',
                            fieldName: 'Suffix',
                            setFieldName: true,
                            attMaxLength: 50,
                            type: 'text',
                            formGroup: DependentsDeetsFormGroup
                        }
                    }
                ]
            },
            {
                columns: [
                    DateOfBirthSpecs,
                    DateOfBirthAdultSpecs,
                    {
                        size: 3,
                        field: {
                            type: 'segment',
                            attName: 'gender',
                            formGroup: DependentsDeetsFormGroup,
                            setFieldName: true,
                            fieldName: 'Gender',
                            options: GENDER
                        }
                    },
                    relationshipToPISpecs,
                    {
                        size: 3,
                        field: {
                            type: 'selectize',
                            attName: 'civilStatus',
                            interface: 'popover',
                            formGroup: DependentsDeetsFormGroup,
                            setFieldName: true,
                            fieldName: 'Civil Status',
                            options: CIVIL_STATUS
                        }
                    },
                ]
            },
                        {// FIELDS: occupationGrpCode, occupationCode, employer, annualIncome
                            columns: [
                                OccupationCodeSpecs,
                                OccupationGrpCodeSpecs,
                                VesselTypeSpecs,
                                {
                                    size: 4,
                                    field: {
                                        type: 'text',
                                        attName: 'occupationTitle',
                                        formGroup: DependentsDeetsFormGroup,
                                        setFieldName: true,
                                        fieldName: 'Occupation (Title/Duties)',
                                        attMaxLength: '60'
                                    },
                                },
                            ]
                        },
            {
                columns: [{ text: 'Present Address' }],
                class: 'form-sub-section-title'
            },
            {// FIELDS: presentBuildingName, presentBlockNumber, presentStreet
                columns: [
                    PresentBuildingNameSpecs,
                    PresentBlockNumberSpecs,
                    PresentStreetSpecs
                ]
            },
            {// FIELDS: presentSubdivision
                columns: [
                    PresentSubdivisionSpecs
                ]
            },
            {
                columns: [
                    PresentCountryCodeSpecs,
                    PresentProvinceCodeSpecs,
                    PresentCityCodeSpecs,
                    PresentZipCodeSpecs
                ]
            },
            {
                columns: [
                    DurationOfStayInputSpec,
                    DurationOfStaySelectSpec
                ]
            },
            {
                columns: [{ text: 'Work Address' }],
                class: 'form-sub-section-title'
            },
            {// FIELDS: workBuildingName, workBlockNumber, workStreet
                columns: [
                    WorkBuildingNameSpecs,
                    WorkBlockNumberSpecs,
                    WorkStreetSpecs
                ]
            },
            {// FIELDS: workSubdivision
                columns: [
                    WorkSubdivisionSpecs
                ]
            },
            {
                columns: [
                    WorkCountryCodeSpecs,
                    WorkProvinceCodeSpecs,
                    WorkCityCodeSpecs,
                    WorkZipCodeSpecs
                ]
            },
        ]
    },
    columns: [
        {
            formGrpCtrlName: 'lastName',
            columnName: 'Last Name'
        },
        {
            formGrpCtrlName: 'firstName',
            columnName: 'First Name'
        },
        {
            formGrpCtrlName: 'gender',
            columnName: 'Gender'
        },
        {
            formGrpCtrlName: 'relationToPI',
            columnName: 'Relationship',
            mapper: ONLINE_PAYMENT_RELATIONSHIP
        }
    ]
}