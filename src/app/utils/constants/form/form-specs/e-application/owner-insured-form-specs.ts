import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { DynamicTableSpecs } from '@models/specs/dynamic-table-specs';
import { VesselOpFGControls, BeneficialOwnerDeetsFGControls, BeneficialOwnerDeetsFGControlsWithoutValidations } from '@fg-controls/e-app';
import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { ApplicantOwnerFormGroup, PolicyInsuredFormGroup, VesselOpFormGroup, BenificialOwnerFormGroup, BeneficialOwnerDeetsFormGroup } from '@form-group/e-app/applicant-owner-form-group';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { BOOLEAN } from '@utils/constants/options/segment/boolean';
import { FISHING_AREA } from '@utils/constants/options/select/e-application/fishing-area';
import { CIVIL_STATUS } from '@utils/constants/options/select/civil-status';
import * as OwnerInsuredSpecs from '@form/column-specs/e-application/owner-insured-col-specs';
import { LIST_OF_COUNTRIES } from '@utils/constants/options/select/list-of-countries';
import { EAPP_RELATIONSHIP } from '@utils/constants/options/segment/e-app-options';
import { GENDER } from '@utils/constants/options/segment/gender';
import * as EAPP_OPTIONS from '@utils/constants/options/segment/e-app-options';
import { error } from 'protractor';
import { stringToBoolean } from '@utils/constants/common';
import { FormArray } from '@angular/forms';
import { CONSTANTS_STRING } from '@utils/constants/string/constants-string';
import { PERCENTAGE } from '@utils/constants/percentage';
import { timeEnd } from 'console';
import { NATIONALITY } from '@utils/constants/options/select/nationality';
import moment from 'moment';

export const aoSamePiToggleRow: RowGeneratorSpecs = {
    columns: [
        {
            text: 'Is the Applicant Owner same as Proposed Insured?',
            size: 6,
            isHidden: true        },
        {
            size: 6,
            field: {
                type: 'segment',
                attName: 'isAoEqualsPi',
                formGroup: ApplicantOwnerFormGroup,
                setFieldName: false,
                options: BOOLEAN,
                isDisabled: true
            },
            isHidden: true

        }
    ]
};

export const isUSPerson: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'segment',
        attName: 'isUSPerson',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'Are you a US person?',
        options: BOOLEAN,
        isDisabled: true
    }
}

export const AOUSTin: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attName: 'identificationNumber',
        attMaxLength: 9,
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'US Tin',
        inputmode: 'numeric'
    },
    isHidden: true
}

export const AOValidIDNumber: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attName: 'validIdNum',
        attMaxLength: 24,
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'Valid ID Number',
    },
    isHidden: true
}

export const AOMobileNumberSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'tel',
        attName: 'contactNumber',
        attMaxLength: 16,
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'Mobile Number'
    }
}

export const AOMobileNumberReadOnlySpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attMaxLength: 13,
        attName: 'contactNumber',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'Mobile Number'
    }
}

// export const aoTitleRow: RowGeneratorSpecs = {
//     columns: [{ text: 'Applicant Owner Information' }],
//     class: 'form-group-title'
// };

export const AoNoteColSpecs: ColumnGeneratorSpecs = {
    // * do not format/pre-wrap the following text
    // tslint:disable-next-line: max-line-length
    text: `Please fill out Application Owner if the Owner/Payor is different from the Proposed Insured. \n \n Beneficial Owners refers to an individual who ultimately owns or controls the Policy, the Policy Owner and/or whose behalf a transaction is being conducted. If the Beneficial Owner/s is/are other than the Applicant Owner, please fill-out the Beneficiary Owner Supplementary Form.`,
    class: 'note column-text-wrap'
};

export const aoNoteRow: RowGeneratorSpecs = {
    columns: [AoNoteColSpecs]
};

export const AOFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Applicant Name
            columns: [{ text: 'Applicant Owner Information' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: aoFirstName, aoMiddleName, aoLastName
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'aoFirstName',
                        attMaxLength: 50,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'First Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'aoMiddleName',
                        attMaxLength: 50,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Middle Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'aoLastName',
                        attMaxLength: 50,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Last Name'
                    }
                }
            ]
        },
        {// FIELDS: dateOfBirth, gender
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'dateOfBirth',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Date of Birth'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'gender',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Gender'
                    }
                },
            ]
        },
        {// FIELDS: civilStatus, nationality, isUSPerson
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'select',
                        attName: 'civilStatus',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'Civil Status',
                        options: CIVIL_STATUS
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'selectize',
                        attName: 'nationality',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Nationality',
                        options: NATIONALITY
                    }
                },
                AOMobileNumberSpecs
            ]
        },
        {// FIELDS: mobile number, email, us tin - for buss only
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'email',
                        attName: 'email',
                        attMaxLength: 254,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Email'
                    }
                },
                OwnerInsuredSpecs.AOPreferredMailingColSpec
            ]
        },
        {// FIELDS: preferredMailingAddress, relationshipToPI, validIdAO
            columns: [
                OwnerInsuredSpecs.AORelationToPIColSpecs
            ]
        },
        {// TITLE: Other Legal...
            columns: [{ text: 'Other Legal Name' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: otherFirstName, otherMiddleName, otherLastName
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attName: 'otherFirstName',
                        attMaxLength: 150,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'First Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attName: 'otherMiddleName',
                        attMaxLength: 150,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Middle Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attName: 'otherLastName',
                        attMaxLength: 150,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Last Name'
                    }
                }
            ]
        },
        
        {// TITLE: place of birth
            columns: [{ text: 'Place of Birth' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: country, province, city
            columns: [
                OwnerInsuredSpecs.AOPobCountryColSpecs,
                OwnerInsuredSpecs.AOPobProvinceColSpecs,
                OwnerInsuredSpecs.AOPobCityColSpecs,
                isUSPerson,
                AOUSTin,
                OwnerInsuredSpecs.AOValidIdNumberColSpec
            ]
        },
        {// TITLE: presentAddress
            columns: [{ text: 'Present Address' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: homeUnitBuilding, homeLotBlock, homeStreet
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeUnitBuilding',
                        attMaxLength: 120,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Unit/Building Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeLotBlock',
                        attMaxLength: 15,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Lot/Block Number'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeStreet',
                        attMaxLength: 40,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Street'
                    }
                }
            ]
        },
        {// FIELDS: homeBarangay
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'readOnly',
                        attName: 'homeBarangay',
                        attMaxLength: 80,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Barangay/Subdivision'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeCountryCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Country'
                    }
                }
            ]
        },
        { // FIELDS: homeCountryCode, homeProvinceCode, homeCityCode, homeZipCode
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeCityCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'City/Municipality'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeProvinceCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Province'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeZipCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Zip Code'
                    }
                }
            ]
        },
        {// TITLE: work information
            columns: [{ text: 'Work Information' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: annualIncome, occupation, natureOfBusiness, employer, occupationTitle
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'occupation',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'Occupation'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 50,
                        attName: 'natureOfBusiness',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Nature of Business'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attMaxLength: 50,
                        attName: 'employer',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Employer'
                    }
                },
                {
                    size: 8,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 60,
                        attName: 'occupationTitle',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Occupation (Title/Duties)'
                    }
                },
                {
                    
                    size: 4,
                    field: {
                        type: 'tel',
                        attMaxLength: 50,
                        currency: 'PHP',
                        attName: 'annualIncome',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Estimated Annual Income',
                        inputmode: 'numeric'
                    }
                }
                // AOValidIDNumber
            ]
        },
        {// FIELDS: workUnitBuilding, workLotBlock, workStreet
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workUnitBuilding',
                        attMaxLength: 120,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Unit/Building Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workLotBlock',
                        attMaxLength: 15,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Lot/Block Number'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workStreet',
                        attMaxLength: 40,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Street'
                    }
                }
            ]
        },
        {// FIELDS: workBarangay
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'readOnly',
                        attName: 'workBarangay',
                        attMaxLength: 80,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Barangay/Subdivision'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workCountryCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Country'
                    }
                }
            ]
        },
        {// FIELDS: workCountryCode, workProvinceCode, workCityCode, workZipCode
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workCityCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'City/Municipality'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workProvinceCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Province'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workZipCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Zip Code'
                    }
                }
            ]
        }
    ]
};

export const AOArmedForcesFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Armed Forces Supplementary Questions
            columns: [{ text: 'Armed Forces Supplementary Questions' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: armyBranch, rank
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'armyBranch',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'In what branch of the armed forces are you serving?',
                        options: EAPP_OPTIONS.ARMY_BRANCH
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'rank',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'What is your rank?',
                        options: EAPP_OPTIONS.ARMY_RANK
                    }
                },
            ]
        }
    ],
    isHidden: true
};
export const AOAviationFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Aviation Supplementary Questions
            columns: [{ text: 'Aviation Supplementary Questions' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: airlineJob, aircraftType
            columns: [
                OwnerInsuredSpecs.AOAirlineJobSpec,
                OwnerInsuredSpecs.AOAircraftTypeSpec
            ]
        },
        {// FIELDS: numberOfFlightExpirience
            columns: [
                OwnerInsuredSpecs.AONumberOfFlightExpirienceSpec
            ]
        }
    ],
    isHidden: true
};
export const AOMerchantMarineFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Merchant Marine Supplementary Questions
            columns: [{ text: 'Merchant Marine Supplementary Questions' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: vesselOwner, vesselType
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'text',
                        attMaxLength: 50,
                        attName: 'vesselOwner',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Owner name of the vessel'
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'selectize',
                        attName: 'vesselType',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'Type of vessel',
                        options: EAPP_OPTIONS.TYPE_OF_VESSEL
                    }
                }
            ]
        },
        {// FIELDS: vesselCountry
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'selectize',
                        attName: 'vesselCountry',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'In which country is the vessel registered?',
                        countries: LIST_OF_COUNTRIES
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'segment',
                        attName: 'isPoliticallySensitive',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Is it likely that the vessel may operate in any politically sensitive area?',
                        options: BOOLEAN
                    }
                }
            ]
        }
    ],
    isHidden: true
};

export const AOWaterPortTableSpecs: DynamicTableSpecs = {
    mainFormGroup: ApplicantOwnerFormGroup,
    formArrayKey: 'vesselOperationInfo',
    secondaryFormGroup: VesselOpFormGroup,
    controlConfiguration: VesselOpFGControls,
    limit: 3,
    title: 'In what waters and between what ports does the vessel operate?',
    readOnly: false,
    hasShowMore: true,

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
                        size: 6,
                        field: {
                            attName: 'water',
                            fieldName: 'Water',
                            setFieldName: true,
                            type: 'select',
                            formGroup: VesselOpFormGroup,
                            countries: LIST_OF_COUNTRIES
                        }
                    },
                    {
                        size: 6,
                        field: {
                            attName: 'port',
                            fieldName: 'Port',
                            setFieldName: true,
                            type: 'select',
                            formGroup: VesselOpFormGroup,
                            countries: LIST_OF_COUNTRIES
                        }
                    }
                ]
            }
        ]
    },
    columns: [
        {
            formGrpCtrlName: 'water',
            columnName: 'Water',
            mapper: countryMapper()
        },
        {
            formGrpCtrlName: 'port',
            columnName: 'Port',
            mapper: countryMapper()
        }
    ],
    isHidden: true
};

export const AOSourceOfFundsFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// FIELDS: sourceOfFunds, otherSourceOfFunds, preferredMailingAddress
            columns: [
                OwnerInsuredSpecs.AOOtherSourceOfFundsColSpec,
                OwnerInsuredSpecs.AOOtherSourceOfFundsOthersColSpec
            ]
        }
    ]
};

export const AOContingentOwnerFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: titlehere
            columns: [{ text: 'Contingent Owner Information upon death of applicant owner' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: coFirstName, coMiddleName, coLastName
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attName: 'coFirstName',
                        attMaxLength: 50,
                        formGroup: ApplicantOwnerFormGroup,
                        isRequired: false,
                        setFieldName: true,
                        fieldName: 'First Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attMaxLength: 50,
                        attName: 'coMiddleName',
                        formGroup: ApplicantOwnerFormGroup,
                        isRequired: false,
                        setFieldName: true,
                        fieldName: 'Middle Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attMaxLength: 50,
                        attName: 'coLastName',
                        formGroup: ApplicantOwnerFormGroup,
                        isRequired: false,
                        setFieldName: true,
                        fieldName: 'Last Name'
                    }
                }
            ]
        },
        {// coDateOfBirth, coRelationship
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'date',
                        attName: 'coDateOfBirth',
                        formGroup: ApplicantOwnerFormGroup,
                        isRequired: false,
                        setFieldName: true,
                        fieldName: 'Date of Birth',
                        canClearValue: true,
                        dateFormatOutput: 'MM/DD/YYYY'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'selectize',
                        attName: 'coRelationship',
                        formGroup: ApplicantOwnerFormGroup,
                        isRequired: false,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'Relationship with the Proposed Insured',
                        canClearValue: true,
                        options: EAPP_RELATIONSHIP
                    }
                },
            ]
        }
    ]
};

export const AOFishingIndustryFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// * TITLE: Fishing Industry Supplementary Questions
            columns: [{ text: 'Fishing Industry Supplementary Questions' }],
            class: 'form-sub-section-title'
        },
        {// * FIELDS: fishingArea
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'fishingArea',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'What areas do you fish in?',
                        options: FISHING_AREA
                    }
                }
            ]
        }
    ],
    isHidden: true
};

export const AOProminentPublicPositionColSpec: FormGeneratorSpecs = {
    rows: [
        {// * FIELDS: prominentPublicPosition
            columns: [
                { 
                    text: 'Are/have you or any of your immediate family members or close relationships and '
                        + 'associates been entrusted  with prominent public position/s in \n '
                        + '(a) the Philippines with substantial authority over policy, operations or the use or\n '
                        + 'allocation of government-owned resources \n'
                        + '(b) a foreign State; \n'
                        + '(c) an international organization?',
                    size:8, 
                    class:'noteGrey',
                    setTextAsRequired: true
                },
                {
                    size: 4,
                    field: {
                        type: 'radio',
                        attName: 'prominentPublicPosition',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        options: BOOLEAN,
                        isRequired: false,
                        },
                    class:'noteGrey'
                }
            ]
        }
    ],
    isHidden: false
};

export const boTitleRow: RowGeneratorSpecs = {
    columns: [{ text: 'Beneficial Owner Information' }],
    class: 'form-sub-section-title'
};

export const BOFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                {
                    field: {
                        attName: 'isAOEqualBO',
                        type: 'checkbox',
                        setFieldName: false,
                        formGroup: ApplicantOwnerFormGroup,
                        fieldName: 'The Applicant Owner is also the Beneficial Owner of policy being applied for.',
                        conditionalFunction: () => {
                            const isAOEqualBO = ApplicantOwnerFormGroup.get('isAOEqualBO').value
                                ? stringToBoolean[ApplicantOwnerFormGroup.get('isAOEqualBO').value] : false
                            BOOwnerPercentageValidation()
                            BOTableSpecs.isHidden = isAOEqualBO

                            if (isAOEqualBO) {
                                const BOFG = BenificialOwnerFormGroup.get('BeneficialOwnerGroup') as FormArray
                                while (BOFG.length !== 0) {
                                    BOFG.removeAt(0)
                                }
                            }

                        }
                    }
                }
            ],
            class: 'form-sub-section-title'
        }
    ]
};

export const BOTablePOBCountry: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        attName: 'pobCountryCode',
        fieldName: 'Country',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        isRequired: true,
        formGroup: BeneficialOwnerDeetsFormGroup
    }
}

export const BOTablePOBProvince: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        attName: 'pobProvinceCode',
        fieldName: 'Province',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        attMaxLength: 17,
        isRequired: true,
        formGroup: BeneficialOwnerDeetsFormGroup
    }
}

export const BOTablePOBCity: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        attName: 'pobCityCode',
        fieldName: 'City',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        attMaxLength: 17,
        isRequired: true,
        formGroup: BeneficialOwnerDeetsFormGroup
    }
}

export const BOTableContactNumber: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        attName: 'contactNumber',
        fieldName: 'Contact Number',
        attMaxLength: 16,
        placeholder: '09XXXXXXXXX',
        type: 'text',
        setFieldName: true,
        formGroup: BeneficialOwnerDeetsFormGroup,
        isRequired: true,
        inputmode: 'numeric'
    },
}

export const BOTablePresentBldg: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attName: 'presentBuildingName',
        attMaxLength: 120,
        formGroup: BeneficialOwnerDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Unit/Building Name'
    }
};

export const BOTablePresentBlkNo: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attName: 'presentBlockNumber',
        attMaxLength: 15,
        formGroup: BeneficialOwnerDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Lot/Block Number'
    }
};

export const BOTablePresentSt: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attName: 'presentStreet',
        attMaxLength: 40,
        formGroup: BeneficialOwnerDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Street'
    }
};

export const BOTablePresentSub: ColumnGeneratorSpecs = {
    size: 8,
    field: {
        type: 'text',
        attName: 'presentSubdivision',
        attMaxLength: 80,
        formGroup: BeneficialOwnerDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Barangay/Subdivision'
    }
};

export const BOTablePresentCountryCode: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        attName: 'presentCountryCode',
        fieldName: 'Country',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        formGroup: BeneficialOwnerDeetsFormGroup
    }
}

export const BOTablePresentProvinceCode: ColumnGeneratorSpecs =
{
    size: 4,
    field: {
        attName: 'presentProvinceCode',
        fieldName: 'Province',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        formGroup: BeneficialOwnerDeetsFormGroup
    }
}

export const BOTablePresentCityCode: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        attName: 'presentCityCode',
        fieldName: 'City',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        formGroup: BeneficialOwnerDeetsFormGroup
    }
}

export const BOTablePresentZipCode: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        attName: 'presentZipCode',
        fieldName: 'Zip Code',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        isDisabled: true,
        formGroup: BeneficialOwnerDeetsFormGroup
    }
}

export const BOTableWorkBldg: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attName: 'workBuildingName',
        attMaxLength: 120,
        formGroup: BeneficialOwnerDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Unit/Building Name'
    }
};

export const BOTableWorkBlkNo: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attName: 'workBlockNumber',
        attMaxLength: 15,
        formGroup: BeneficialOwnerDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Lot/Block Number'
    }
};

export const BOTableWorkSt: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attName: 'workStreet',
        attMaxLength: 40,
        formGroup: BeneficialOwnerDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Street'
    }
};

export const BOTableWorkSub: ColumnGeneratorSpecs = {
    size: 8,
    field: {
        type: 'text',
        attName: 'workSubdivision',
        attMaxLength: 80,
        formGroup: BeneficialOwnerDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Barangay/Subdivision'
    }
};

export const BOTableWorkCountryCode: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        attName: 'workCountryCode',
        fieldName: 'Country',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        formGroup: BeneficialOwnerDeetsFormGroup
    }
}

export const BOTableWorkProvinceCode: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        attName: 'workProvinceCode',
        fieldName: 'Province',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        formGroup: BeneficialOwnerDeetsFormGroup
    }
}

export const BOTableWorkCityCode: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        attName: 'workCityCode',
        fieldName: 'City',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        isDisabled: true,
        formGroup: BeneficialOwnerDeetsFormGroup
    }
}

export const BOTableWorkZipCode: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        attName: 'workZipCode',
        fieldName: 'Zip Code',
        setFieldName: true,
        type: 'selectize',
        interface: 'popover',
        formGroup: BeneficialOwnerDeetsFormGroup
    }
}

export const BOTableNatureOfBusiness: ColumnGeneratorSpecs =
{
    size: 4,
    field: {
        type: 'selectize',
        interface: 'popover',
        attName: 'occupationCode',
        formGroup: BeneficialOwnerDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Nature of Business'
    }
}

export const BOTableOccupation: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        interface: 'popover',
        attName: 'occupationGrpCode',
        formGroup: BeneficialOwnerDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Occupation'
    }
}

export const BOTableVesselType: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        interface: 'popover',
        attName: 'vesselType',
        formGroup: BeneficialOwnerDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Type of Vessel',
        isRequired: true,
    },
}

export const BOTableOccupationtitle: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attName: 'occupationTitle',
        formGroup: BeneficialOwnerDeetsFormGroup,
        setFieldName: true,
        fieldName: 'Occupation (Title/Duties)',
        attMaxLength: '60'
    },
}

export const BOTableSpecs: DynamicTableSpecs = {
    mainFormGroup: BenificialOwnerFormGroup,
    formArrayKey: 'BeneficialOwnerGroup',
    secondaryFormGroup: BeneficialOwnerDeetsFormGroup,
    controlConfiguration: { ...BeneficialOwnerDeetsFGControlsWithoutValidations },
    limit: 5,
    title: 'Beneficial Owner Summary',
    subTitle: 'Beneficial Owner Information',
    customSaveButtonName: 'Beneficial Owner',
    readOnly: false,
    hasShowMore: true,
    hasSingleBene: false,
    applicantOwner: ApplicantOwnerFormGroup,
    defaultValue: [
        { formGroupControlName: CONSTANTS_STRING.BO_NATIONALITY, value: CONSTANTS_STRING.PH_CODE }
    ],

    availableActions: {
        add: true,
        edit: true,
        save: true,
        delete: true
    },

    formGeneratorSpecs: {
        rows: [
            {// TITLE: place of birth
                columns: [{ text: 'Primary Information' }],
                class: 'form-sub-section-title'
            },
            {
                columns: [
                    {
                        size: 4,
                        field: {
                            attName: 'firstName',
                            fieldName: 'First Name',
                            setFieldName: true,
                            type: 'text',
                            attMaxLength: 50,
                            formGroup: BeneficialOwnerDeetsFormGroup
                        }
                    },
                    {
                        size: 4,
                        field: {
                            attName: 'middleName',
                            fieldName: 'Middle Name',
                            setFieldName: true,
                            type: 'text',
                            attMaxLength: 50,
                            formGroup: BeneficialOwnerDeetsFormGroup
                        }
                    },
                    {
                        size: 4,
                        field: {
                            attName: 'lastName',
                            fieldName: 'Last Name',
                            setFieldName: true,
                            attMaxLength: 50,
                            type: 'text',
                            formGroup: BeneficialOwnerDeetsFormGroup
                        }
                    }
                ]
            },
            {
                columns: [
                    {
                        size: 4,
                        field: {
                            attName: 'nationality',
                            fieldName: 'Nationality',
                            setFieldName: true,
                            type: 'selectize',
                            formGroup: BeneficialOwnerDeetsFormGroup,
                            options: NATIONALITY
                        }
                    },
                    {
                        size: 4,
                        field: {
                            type: 'date',
                            attName: 'dateOfBirth',
                            formGroup: BeneficialOwnerDeetsFormGroup,
                            setFieldName: true,
                            fieldName: 'Date of Birth',
                            dateFormatOutput: 'MM/DD/YYYY',
                            isAgeField: true
                        }
                    },
                    {
                        size: 4,
                        field: {
                            type: 'segment',
                            attName: 'gender',
                            formGroup: BeneficialOwnerDeetsFormGroup,
                            setFieldName: true,
                            fieldName: 'Gender',
                            options: GENDER
                        }
                    }
                ]
            },
            {
                columns: [
                    {
                        size: 8,
                        field: {
                            attName: 'email',
                            fieldName: 'Email',
                            setFieldName: true,
                            type: 'email',
                            attMaxLength: 254,
                            formGroup: BeneficialOwnerDeetsFormGroup
                        }
                    },
                    BOTableContactNumber
                ]
            },
            {// TITLE: place of birth
                columns: [{ text: 'Place of Birth' }],
                class: 'form-sub-section-title'
            },
            {
                columns: [
                    BOTablePOBCountry,
                    BOTablePOBProvince,
                    BOTablePOBCity
                ]
            },
            {
                columns: [{ text: 'Present Address' }],
                class: 'form-sub-section-title'
            },
            {// FIELDS: presentBuildingName, presentBlockNumber, presentStreet
                columns: [
                    BOTablePresentBldg,
                    BOTablePresentBlkNo,
                    BOTablePresentSt
                ]
            },
            {// FIELDS: presentSubdivision
                columns: [
                    BOTablePresentSub,
                    BOTablePresentCountryCode
                ]
            },
            {
                columns: [
                    BOTablePresentProvinceCode,
                    BOTablePresentCityCode,
                    BOTablePresentZipCode
                ]
            },
            {
                columns: [{ text: 'Work Address' }],
                class: 'form-sub-section-title'
            },
            {// FIELDS: workBuildingName, workBlockNumber, workStreet
                columns: [
                    BOTableWorkBldg,
                    BOTableWorkBlkNo,
                    BOTableWorkSt
                ]
            },
            {// FIELDS: workSubdivision
                columns: [
                    BOTableWorkSub,
                    BOTableWorkCountryCode
                ]
            },
            {
                columns: [
                    BOTableWorkProvinceCode,
                    BOTableWorkCityCode,
                    BOTableWorkZipCode
                ]
            },
            {// FIELDS: occupationGrpCode, occupationCode, employer, annualIncome
                columns: [
                    BOTableNatureOfBusiness,
                    BOTableOccupation,
                    BOTableOccupationtitle,
                    BOTableVesselType,
                    {
                        size: 4,
                        field: {
                            type: 'text',
                            attName: 'employer',
                            attMaxLength: 120,
                            formGroup: BeneficialOwnerDeetsFormGroup,
                            setFieldName: true,
                            fieldName: 'Employer Name'
                        }
                    },
                    {
                        size: 4,
                        field: {
                            type: 'number',
                            attName: 'annualIncome',
                            attMaxLength: 120,
                            formGroup: BeneficialOwnerDeetsFormGroup,
                            setFieldName: true,
                            fieldName: 'Estimated Annual Income'
                        }
                    }
                ]
            },
            {
                columns: [{ text: 'Owner Percentage Information' }],
                class: 'form-sub-section-title'
            },
            {
                columns : [
                    {
                        size: 4,
                        field: {
                            attName: 'ownershipPercent',
                            fieldName: 'Owner Percentage',
                            setFieldName: true,
                            type: 'number',
                            formGroup: BeneficialOwnerDeetsFormGroup
                        }
                    },
                ]
            }
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
            formGrpCtrlName: 'ownershipPercent',
            columnName: 'Owner Percentage'
        }
    ]
}

export function BOOwnerPercentageValidation() {
    const BOFormArray = BenificialOwnerFormGroup.get('BeneficialOwnerGroup')
    const beneficialOwners = BOFormArray.value
    const currentOwnerPercentage = BeneficialOwnerDeetsFormGroup.get('ownershipPercent').value ? BeneficialOwnerDeetsFormGroup.get('ownershipPercent').value : PERCENTAGE.ZERO

    let totalOwnershipPercentage = Number(currentOwnerPercentage)

    for (let i = 0; i < beneficialOwners.length; i++)
        totalOwnershipPercentage += Number(beneficialOwners[i].ownershipPercent)

    BOTableSpecs.additionalValMsg = []

    if (totalOwnershipPercentage > PERCENTAGE.HUNDRED) {
        BOFormArray.setErrors({ 'percentageExceeds': true })
        BOTableSpecs.additionalValMsg.push('Total Owner Percentage exceeds 100')
    }

    if (totalOwnershipPercentage < PERCENTAGE.HUNDRED) {
        BOFormArray.setErrors({ 'ownerPercentageBelow100': true })
        BOTableSpecs.additionalValMsg.push('Total Owner Percentage must be 100')
    }

    if (totalOwnershipPercentage == PERCENTAGE.HUNDRED)
        BOFormArray.setErrors(null)

    const isAOEqualBO = ApplicantOwnerFormGroup.get('isAOEqualBO').value
    const isRequired = ApplicantOwnerFormGroup.get('isAOEqualBO').disabled

    if (beneficialOwners.length === 0) {
        if (isAOEqualBO || !isRequired) {
            BOFormArray.setErrors(null)
            BOTableSpecs.additionalValMsg.length = 0;
        } else {
            BOFormArray.setErrors({ 'atleastOne': true })
            BOTableSpecs.additionalValMsg.push('Required to have at least one beneficial owner')
        }
    }
}

//AO READONLY SPECS
export const AOFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Applicant Name
            columns: [{ text: 'Applicant Name' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: aoFirstName, aoMiddleName, aoLastName
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'aoFirstName',
                        attMaxLength: 50,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'First Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'aoMiddleName',
                        attMaxLength: 50,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Middle Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'aoLastName',
                        attMaxLength: 50,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Last Name'
                    }
                }
            ]
        },
         {// FIELDS: dateOfBirth, gender
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'dateOfBirth',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Date of Birth',
                        readOnlySpecs: {
                            type: 'date'
                        }
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'gender',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Gender',
                        readOnlySpecs: {
                            type: 'gender',
                            listOfKeyValues: GENDER
                        }
                    }
                },
            ]
        },
        {// FIELDS: civilStatus, nationality, isUSPerson
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'civilStatus',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Civil Status',
                        readOnlySpecs: {
                            type: 'civilStatus',
                            listOfKeyValues: CIVIL_STATUS
                        }
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'nationality',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Nationality',
                        readOnlySpecs: {
                            type: 'nationality',
                            listOfKeyValues: NATIONALITY
                        }

                    }
                },
                AOMobileNumberReadOnlySpecs
            ]
        },
        {// FIELDS: mobile number, email
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'readOnly',
                        attName: 'email',
                        attMaxLength: 254,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Email'
                    }
                },
                OwnerInsuredSpecs.AOPreferredMailingColReadOnlySpec
            ]
        },
        {// TITLE: Other Legal...
            columns: [{ text: 'Other Legal Name' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: otherFirstName, otherMiddleName, otherLastName
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'otherFirstName',
                        attMaxLength: 150,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'First Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'otherMiddleName',
                        attMaxLength: 150,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Middle Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'otherLastName',
                        attMaxLength: 150,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Last Name'
                    }
                }
            ]
        },
        {// TITLE: place of birth
            columns: [{ text: 'Place of Birth' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: country, province, city
            columns: [
                OwnerInsuredSpecs.AOPobCountryColReadOnlySpecs,
                OwnerInsuredSpecs.AOPobProvinceColReadOnlySpecs,
                OwnerInsuredSpecs.AOPobCityColReadOnlySpecs
            ]
        },
        {// FIELDS: preferredMailingAddress, relationshipToPI
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'isUSPerson',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Are you a US person?',
                        readOnlySpecs: {
                            type: 'yesNo'
                        }
                    }
                },
                OwnerInsuredSpecs.AOUSTinColReadOnlySpec,
                OwnerInsuredSpecs.AOValidIdNumberColReadOnlySpec,
                OwnerInsuredSpecs.AORelationToPIColReadOnlySpec
            ]
        },
        {// TITLE: presentAddress
            columns: [{ text: 'Present Address' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: homeUnitBuilding, homeLotBlock, homeStreet
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeUnitBuilding',
                        attMaxLength: 120,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Unit/Building Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeLotBlock',
                        attMaxLength: 15,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Lot/Block Number'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeStreet',
                        attMaxLength: 40,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Street'
                    }
                }
            ]
        },
        {// FIELDS: homeBarangay
            columns: [
                {
                    size:8,
                    field: {
                        type: 'readOnly',
                        attName: 'homeBarangay',
                        attMaxLength: 80,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Barangay/Subdivision'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeCountryCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Country'
                    }
                }
            ]
        },
        { // FIELDS: homeCountryCode, homeProvinceCode, homeCityCode, homeZipCode
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeCityCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'City/Municipality'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeProvinceCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Province'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeZipCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Zip Code'
                    }
                }
            ]
        },
        {// TITLE: work information
            columns: [{ text: 'Work Information' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: annualIncome, occupation, natureOfBusiness, employer
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'occupation',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'Occupation'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 50,
                        attName: 'natureOfBusiness',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Nature of Business'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 50,
                        attName: 'employer',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Employer'
                    }
                },
                {
                    size: 8,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 60,
                        attName: 'occupationTitle',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Occupation (Title/Duties)'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 50,
                        currency: 'PHP',
                        attName: 'annualIncome',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Estimated Annual Income',
                        inputmode: 'numeric',
                        readOnlySpecs: {
                            type: 'currency'
                        }
                    }
                },
            ]
        },
        {// FIELDS: workUnitBuilding, workLotBlock, workStreet
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workUnitBuilding',
                        attMaxLength: 120,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Unit/Building Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workLotBlock',
                        attMaxLength: 15,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Lot/Block Number'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workStreet',
                        attMaxLength: 40,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Street'
                    }
                }
            ]
        },
        {// FIELDS: workBarangay
            columns: [
                {
                    size:8,
                    field: {
                        type: 'readOnly',
                        attName: 'workBarangay',
                        attMaxLength: 80,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Barangay/Subdivision'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workCountryCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Country'
                    }
                }
            ]
        },
        {// FIELDS: workCountryCode, workProvinceCode, workCityCode, workZipCode
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workCityCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'City/Municipality'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workProvinceCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Province'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workZipCode',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Zip Code'
                    }
                }
            ]
        }
    ]
};
export const AOArmedForcesFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Armed Forces Supplementary Questions
            columns: [{ text: 'Armed Forces Supplementary Questions' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: armyBranch, rank
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'armyBranch',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'In what branch of the armed forces are you serving?',
                        readOnlySpecs: {
                            type: 'armyBranch',
                            listOfKeyValues: EAPP_OPTIONS.ARMY_BRANCH
                        }
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'rank',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'What is your rank?',
                        readOnlySpecs: {
                            type: 'armyRank',
                            listOfKeyValues: EAPP_OPTIONS.ARMY_RANK
                        }
                    }
                },
            ]
        }
    ],
    isHidden: true
};
export const AOAviationFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Aviation Supplementary Questions
            columns: [{ text: 'Aviation Supplementary Questions' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: airlineJob, aircraftType
            columns: [
                OwnerInsuredSpecs.AOAirlineJobReadOnlySpec,
                OwnerInsuredSpecs.AOAircraftTypeReadOnlySpec
            ]
        },
        {// FIELDS: numberOfFlightExpirience
            columns: [
                OwnerInsuredSpecs.AONumberOfFlightExpirienceReadOnlySpec
            ]
        }
    ],
    isHidden: true
};
export const AOMerchantMarineFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Merchant Marine Supplementary Questions
            columns: [{ text: 'Merchant Marine Supplementary Questions' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: vesselOwner, vesselType
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 50,
                        attName: 'vesselOwner',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Owner name of the vessel'
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'vesselType',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Type of vessel',
                        readOnlySpecs: {
                            type: 'vesselType',
                            listOfKeyValues: EAPP_OPTIONS.TYPE_OF_VESSEL
                        }
                    }
                }
            ]
        },
        {// FIELDS: vesselCountry
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'vesselCountry',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'In which country is the vessel registered?',
                        readOnlySpecs: {
                            type: 'country'
                        }
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'isPoliticallySensitive',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Is it likely that the vessel may operate in any politically sensitive area?',
                        readOnlySpecs: {
                            type: 'yesNo'
                        }
                    }
                }
            ]
        }
    ],
    isHidden: true
};
export const AOFishingIndustryFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {// * TITLE: Fishing Industry Supplementary Questions
            columns: [{ text: 'Fishing Industry Supplementary Questions' }],
            class: 'form-sub-section-title'
        },
        {// * FIELDS: fishingArea
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'fishingArea',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'What areas do you fish in?',
                        readOnlySpecs: {
                            type: 'fishingArea',
                            listOfKeyValues: EAPP_OPTIONS.FISHING_AREA
                        }
                    }
                }
            ]
        }
    ],
    isHidden: true
};
export const AOSourceOfFundsFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {// FIELDS: sourceOfFunds, otherSourceOfFunds, preferredMailingAddress
            columns: [
                OwnerInsuredSpecs.AOOtherSourceOfFundsColReadOnlySpec,
                OwnerInsuredSpecs.AOOtherSourceOfFundsOthersColReadOnlySpec,
                OwnerInsuredSpecs.AOPreferredMailingColReadOnlySpec
            ]
        }
    ]
};
export const AOContingentOwnerFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: titlehere
            columns: [{ text: 'Contingent Owner Information upon death of applicant owner' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: coFirstName, coMiddleName, coLastName
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'coFirstName',
                        attMaxLength: 50,
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'First Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 50,
                        attName: 'coMiddleName',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Middle Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 50,
                        attName: 'coLastName',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Last Name'
                    }
                }
            ]
        },
        {// coDateOfBirth, coRelationship
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'coDateOfBirth',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Date of Birth',
                        readOnlySpecs: {
                            type: 'date'
                        }
                    }
                },
                {
                    size: 5,
                    field: {
                        type: 'readOnly',
                        attName: 'coRelationship',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        fieldName: 'Relationship with the Proposed Insured',
                        readOnlySpecs: {
                            type: 'relationship',
                            listOfKeyValues: EAPP_RELATIONSHIP
                        }
                    }
                },
            ]
        }
    ]
};

export const AOProminentPublicPositionFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {// * FIELDS: prominentPublicPosition
            columns: [
                { 
                    text: 'Are/have you or any of your immediate family members or close relationships and '
                        + 'associates been entrusted  with prominent public position/s in \n '
                        + '(a) the Philippines with substantial authority over policy, operations or the use or\n '
                        + 'allocation of government-owned resources \n'
                        + '(b) a foreign State; \n'
                        + '(c) an international organization?',
                    size:8, 
                    class:'noteGrey'
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'prominentPublicPosition',
                        formGroup: ApplicantOwnerFormGroup,
                        setFieldName: true,
                        readOnlySpecs: {
                            type: 'yesNo'
                        },
                      
                    },
                    class:'noteGrey'
                }
            ]
        }
    ],
    isHidden: false
};

//END AO READONLY SPECS

// export const piTitleRow: RowGeneratorSpecs = {
//     columns: [{ text: 'Proposed Insured Information' }],
//     class: 'form-group-title'
// };

export const isPIUSPerson: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'segment',
        attName: 'isUSPerson',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        fieldName: 'Are you a US person?',
        options: BOOLEAN,
        isDisabled: true,
    },
    class: 'segment-disabled'
}

export const PIUSTin: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attName: 'identificationNumber',
        attMaxLength: 9,
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        fieldName: 'US Tin',
        inputmode: 'numeric'
    },
    isHidden: true
}

export const PIMobileNumber: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'tel',
        attName: 'contactNumber',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        fieldName: 'Mobile Number',
        isRequired: true
    }
}



export const PIFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Proposed Insured Name
            columns: [{ text: 'Proposed Insured Information' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: piFirstName, piMiddleName, piLastName
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'piFirstName',
                        attMaxLength: 50,
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'First Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'piMiddleName',
                        attMaxLength: 50,
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Middle Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'piLastName',
                        attMaxLength: 50,
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Last Name'
                    }
                }
            ]
        },
        {// FIELDS: dateOfBirth, gender
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'dateOfBirth',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Date of Birth'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'gender',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Gender',
                    }
                },
            ]
        },
        {// FIELDS: civilStatus, nationality, isUSPerson, 
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'select',
                        attName: 'civilStatus',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'Civil Status',
                        options: CIVIL_STATUS
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'selectize',
                        attName: 'nationality',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Nationality',
                        options: NATIONALITY
                    }
                },
                PIMobileNumber
            ]
        },
        {// FIELDS: mobile number, email
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'email',
                        attMaxLength: 254,
                        attName: 'email',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Email',
                        isRequired: true
                    }
                }
            ]
        },
        {// TITLE: Other Legal...
            columns: [{ text: 'Other Legal Name' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: otherFirstName, otherMiddleName, otherLastName
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attMaxLength: 150,
                        attName: 'otherFirstName',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'First Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attMaxLength: 150,
                        attName: 'otherMiddleName',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Middle Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attMaxLength: 150,
                        attName: 'otherLastName',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Last Name'
                    }
                }
            ]
        },
        {// TITLE: place of birth
            columns: [{ text: 'Place of Birth' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: pobCity, pobProvince, pobCountry
            columns: [
                OwnerInsuredSpecs.PIPobCountryColSpecs,
                OwnerInsuredSpecs.PIPobProvinceColSpecs,
                OwnerInsuredSpecs.PIPobCityColSpecs,
                isPIUSPerson,
            ]
        },
        {// TITLE: presentAddress
            columns: [{ text: 'Present Address' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: homeUnitBuilding, homeLotBlock, homeStreet
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeUnitBuilding',
                        attMaxLength: 120,
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Unit/Building Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeLotBlock',
                        attMaxLength: 15,
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Lot/Block Number'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeStreet',
                        attMaxLength: 40,
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Street'
                    }
                }
            ]
        },
        {// FIELDS: homeBarangay
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'readOnly',
                        attName: 'homeBarangay',
                        attMaxLength: 80,
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Barangay/Subdivision'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeCountryCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Country'
                    }
                }
            ]
        },
        { // FIELDS: homeCountryCode, homeProvinceCode, homeCityCode, homeZipCode
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeCityCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'City/Municipality'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeProvinceCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Province'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeZipCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Zip Code'
                    }
                }
            ]
        },
        {// TITLE: work information
            columns: [{ text: 'Work Information' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: annualIncome, occupation, natureOfBusiness, employer, occupationTitle
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'occupation',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Occupation'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 50,
                        attName: 'natureOfBusiness',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Nature of Business'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attMaxLength: 50,
                        attName: 'employer',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Employer'
                    }
                },
                {
                    size: 8,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 60,
                        attName: 'occupationTitle',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Occupation (Title/Duties)'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'tel',
                        currency: 'PHP',
                        attMaxLength: 16,
                        attName: 'annualIncome',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Estimated Annual Income'
                    }
                }
            ]
        },
        {// FIELDS: workUnitBuilding, workLotBlock, workStreet
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 120,
                        attName: 'workUnitBuilding',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Unit/Building Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 15,
                        attName: 'workLotBlock',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Lot/Block Number'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 40,
                        attName: 'workStreet',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Street'
                    }
                }
            ]
        },
        {// FIELDS: workBarangay
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 80,
                        attName: 'workBarangay',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Barangay/Subdivision'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workCountryCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Country'
                    }
                }
            ]
        },
        {// FIELDS: workCountryCode, workProvinceCode, workCityCode, workZipCode
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workCityCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'City/Municipality',
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workProvinceCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Province'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workZipCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Zip Code'
                    }
                }
            ]
        }
    ]
};

export const PIArmedForcesFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Armed Forces Supplementary Questions
            columns: [{ text: 'Armed Forces Supplementary Questions' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: armyBranch, rank
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'armyBranch',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'In what branch of the armed forces are you serving?',
                        options: EAPP_OPTIONS.ARMY_BRANCH
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'rank',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'What is your rank?',
                        options: EAPP_OPTIONS.ARMY_RANK
                    }
                },
            ]
        }
    ],
    isHidden: true
};
export const PIAviationFormSpecs: FormGeneratorSpecs = {
    rows: [

        {// TITLE: Aviation Supplementary Questions
            columns: [{ text: 'Aviation Supplementary Questions' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: airlineJob, aircraftType
            columns: [
                OwnerInsuredSpecs.PIAirlineJobSpec,
                OwnerInsuredSpecs.PIAircraftTypeSpec
            ]
        },
        {// FIELDS: numberOfFlightExpirience
            columns: [
                OwnerInsuredSpecs.PINumberOfFlightExpirienceSpec
            ]
        }
    ],
    isHidden: true
};
export const PIMerchantMarineFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Merchant Marine Supplementary Questions
            columns: [{ text: 'Merchant Marine Supplementary Questions', }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: vesselOwner, vesselType
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'text',
                        attMaxLength: 50,
                        attName: 'vesselOwner',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Owner name of the vessel'
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'vesselType',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'Type of vessel',
                        options: EAPP_OPTIONS.TYPE_OF_VESSEL
                    }
                }
            ]
        },
        {// FIELDS: vesselCountry
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'selectize',
                        attName: 'vesselCountry',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'In which country is the vessel registered?',
                        countries: LIST_OF_COUNTRIES
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'segment',
                        attName: 'isPoliticallySensitive',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Is it likely that the vessel may operate in any politically sensitive area?',
                        options: BOOLEAN
                    }
                }
            ]
        },
        {// question label
            columns: [
                {
                    size: 10,
                    text: 'In what waters and between what ports does the vessel operate?'
                }
            ]
        }
    ],
    isHidden: true
};

export const PIWaterPortTableSpecs: DynamicTableSpecs = {
    mainFormGroup: PolicyInsuredFormGroup,
    formArrayKey: 'vesselOperationInfo',
    secondaryFormGroup: VesselOpFormGroup,
    controlConfiguration: VesselOpFGControls,
    limit: 3,
    title: 'Water Operation Summary',
    readOnly: false,
    hasShowMore: true,

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
                        size: 6,
                        field: {
                            attName: 'water',
                            fieldName: 'Water',
                            setFieldName: true,
                            type: 'selectize',
                            formGroup: VesselOpFormGroup,
                            countries: LIST_OF_COUNTRIES
                        }
                    },
                    {
                        size: 6,
                        field: {
                            attName: 'port',
                            fieldName: 'Port',
                            setFieldName: true,
                            type: 'selectize',
                            formGroup: VesselOpFormGroup,
                            countries: LIST_OF_COUNTRIES
                        }
                    }

                ]
            }
        ]
    },
    columns: [
        {
            formGrpCtrlName: 'water',
            columnName: 'Water',
            mapper: countryMapper()
        },
        {
            formGrpCtrlName: 'port',
            columnName: 'Port',
            mapper: countryMapper()
        }
    ],
    isHidden: true
};

function countryMapper() {
    const mapCountry = Object.assign({}, ...LIST_OF_COUNTRIES.map(object =>
        ({ [object.countryCode]: object.name })));

    return mapCountry;
}

export const piSourceOfFunds: RowGeneratorSpecs = {
    columns: [
        OwnerInsuredSpecs.PIOtherSourceOfFundsColSpec,
        OwnerInsuredSpecs.PIOtherSourceOfFundsOthersColSpec
    ]
};

export const PIFishingIndustryFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// * TITLE: Fishing Industry Supplementary Questions
            columns: [{ text: 'Fishing Industry Supplementary Questions' }],
            class: 'form-sub-section-title'
        },
        {// * FIELDS: fishingArea
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'fishingArea',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'What areas do you fish in?',
                        options: FISHING_AREA
                    }
                }
            ]
        }
    ],
    isHidden: true
};

export const PIProminentPublicPositionColSpec: FormGeneratorSpecs = {
    rows: [
        {// * FIELDS: prominentPublicPosition
            columns: [
                { 
                    text: 'Are/have you or any of your immediate family members or close relationships and '
                        + 'associates been entrusted  with prominent public position/s in \n '
                        + '(a) the Philippines with substantial authority over policy, operations or the use or\n '
                        + 'allocation of government-owned resources \n'
                        + '(b) a foreign State; \n'
                        + '(c) an international organization?',
                    size:8, 
                    class:'noteGrey',
                    setTextAsRequired: true
                },
                {
                    size: 4,
                    field: {
                        type: 'radio',
                        attName: 'prominentPublicPosition',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        options: BOOLEAN,
                        isRequired: false,
                    },
                    class:'noteGrey'
                }
            ]
        }
    ],
    isHidden: false
};

//PI READONLY SPECS
export const PIFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Proposed Insured Name
            columns: [{ text: 'Proposed Insured Name' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: piFirstName, piMiddleName, piLastName
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'piFirstName',
                        attMaxLength: 50,
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'First Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'piMiddleName',
                        attMaxLength: 50,
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Middle Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'piLastName',
                        attMaxLength: 50,
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Last Name'
                    }
                }
            ]
        },
        {// FIELDS: dateOfBirth, gender
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'dateOfBirth',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Date of Birth',
                        readOnlySpecs: {
                            type: 'date'
                        }
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'gender',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Gender',
                        readOnlySpecs: {
                            type: 'gender',
                            listOfKeyValues: GENDER
                        }
                    }
                },
            ]
        },
        {// FIELDS: civilStatus, nationality, isUSPerson, 
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'civilStatus',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Civil Status',
                        readOnlySpecs: {
                            type: 'civilStatus',
                            listOfKeyValues: CIVIL_STATUS
                        }
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'nationality',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Nationality',
                        readOnlySpecs: {
                            type: 'nationality',
                            listOfKeyValues: NATIONALITY
                        }
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 13,
                        attName: 'contactNumber',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Mobile Number'
                    }
                }
            ]
        },
        {// FIELDS: mobile number, email
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 254,
                        attName: 'email',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Email'
                    }
                }
            ]
        },
        {// TITLE: Other Legal...
            columns: [{ text: 'Other Legal Name' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: otherFirstName, otherMiddleName, otherLastName
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 150,
                        attName: 'otherFirstName',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'First Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 150,
                        attName: 'otherMiddleName',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Middle Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 150,
                        attName: 'otherLastName',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Last Name'
                    }
                }
            ]
        },
        {// TITLE: place of birth
            columns: [{ text: 'Place of Birth' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: pobCity, pobProvince, pobCountry
            columns: [
                OwnerInsuredSpecs.PIPobCountryColReadOnlySpecs,
                OwnerInsuredSpecs.PIPobProvinceColReadOnlySpecs,
                OwnerInsuredSpecs.PIPobCityColReadOnlySpecs,
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'isUSPerson',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Are you a US person?',
                        isDisabled: true
                    }
                },
                OwnerInsuredSpecs.PIUSTinColReadOnlySpec,
            ]
        },
        {// TITLE: presentAddress
            columns: [{ text: 'Present Address' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: homeUnitBuilding, homeLotBlock, homeStreet
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeUnitBuilding',
                        attMaxLength: 120,
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Unit/Building Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeLotBlock',
                        attMaxLength: 15,
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Lot/Block Number'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeStreet',
                        attMaxLength: 40,
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Street'
                    }
                }
            ]
        },
        {// FIELDS: homeBarangay
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'readOnly',
                        attName: 'homeBarangay',
                        attMaxLength: 80,
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Barangay/Subdivision'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeCountryCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Country'
                    }
                }
            ]
        },
        { // FIELDS: homeCountryCode, homeProvinceCode, homeCityCode, homeZipCode
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeCityCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'City/Municipality'
                    }
                },                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeProvinceCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Province'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'homeZipCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Zip Code'
                    }
                }
            ]
        },
        {// TITLE: work information
            columns: [{ text: 'Work Information' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: annualIncome, occupation, natureOfBusiness, employer, 
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'occupation',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Occupation'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 50,
                        attName: 'natureOfBusiness',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Nature of Business'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 50,
                        attName: 'employer',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Employer'
                    }
                },
                {
                    size: 8,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 60,
                        attName: 'occupationTitle',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Occupation (Title/Duties)'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        currency: 'PHP',
                        attMaxLength: 16,
                        attName: 'annualIncome',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Estimated Annual Income',
                        readOnlySpecs: {
                            type: 'currency'
                        }
                    }
                },
            ]
        },
        {// FIELDS: workUnitBuilding, workLotBlock, workStreet
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 120,
                        attName: 'workUnitBuilding',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Unit/Building Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 15,
                        attName: 'workLotBlock',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Lot/Block Number'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 40,
                        attName: 'workStreet',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Street'
                    }
                }
            ]
        },
        {// FIELDS: workBarangay
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 80,
                        attName: 'workBarangay',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Barangay/Subdivision'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workCountryCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Country'
                    }
                }
            ]
        },
        {// FIELDS: workCountryCode, workProvinceCode, workCityCode, workZipCode
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workCityCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'City/Municipality',
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workProvinceCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Province'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'workZipCode',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Zip Code'
                    }
                }
            ]
        }
    ]
};
export const PIArmedForcesFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Armed Forces Supplementary Questions
            columns: [{ text: 'Armed Forces Supplementary Questions' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: armyBranch, rank
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'armyBranch',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'In what branch of the armed forces are you serving?',
                        readOnlySpecs: {
                            type: 'armyBranch',
                            listOfKeyValues: EAPP_OPTIONS.ARMY_BRANCH
                        }
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'rank',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'What is your rank?',
                        readOnlySpecs: {
                            type: 'armyRank',
                            listOfKeyValues: EAPP_OPTIONS.ARMY_RANK
                        }
                    }
                },
            ]
        }
    ],
    isHidden: true
};
export const PIAviationFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [

        {// TITLE: Aviation Supplementary Questions
            columns: [{ text: 'Aviation Supplementary Questions' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: airlineJob, aircraftType
            columns: [
                OwnerInsuredSpecs.PIAirlineJobReadOnlySpec,
                OwnerInsuredSpecs.PIAircraftTypeReadOnlySpec
            ]
        },
        {// FIELDS: numberOfFlightExpirience
            columns: [
                OwnerInsuredSpecs.PINumberOfFlightExpirienceReadOnlySpec
            ]
        }
    ],
    isHidden: true
};
export const PIMerchantMarineFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Merchant Marine Supplementary Questions
            columns: [{ text: 'Merchant Marine Supplementary Questions', }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: vesselOwner, vesselType
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 50,
                        attName: 'vesselOwner',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Owner name of the vessel'
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'vesselType',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Type of vessel',
                        readOnlySpecs: {
                            type: 'vesselType',
                            listOfKeyValues: EAPP_OPTIONS.TYPE_OF_VESSEL
                        }
                    }
                }
            ]
        },
        {// FIELDS: vesselCountry
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'vesselCountry',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'In which country is the vessel registered?',
                        readOnlySpecs: {
                            type: 'country'
                        }
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'isPoliticallySensitive',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'Is it likely that the vessel may operate in any politically sensitive area?',
                        readOnlySpecs: {
                            type: 'yesNo'
                        }
                    }
                }
            ]
        },
        {// question label
            columns: [
                {
                    size: 10,
                    text: 'In what waters and between what ports does the vessel operate?'
                }
            ]
        }
    ],
    isHidden: true
};
export const piSourceOfFundsReadOnly: RowGeneratorSpecs = {
    columns: [
        OwnerInsuredSpecs.PIOtherSourceOfFundsColReadOnlySpec,
        OwnerInsuredSpecs.PIOtherSourceOfFundsOthersColReadOnlySpec
    ]
};
export const PIFishingIndustryFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {// * TITLE: Fishing Industry Supplementary Questions
            columns: [{ text: 'Fishing Industry Supplementary Questions' }],
            class: 'form-sub-section-title'
        },
        {// * FIELDS: fishingArea
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'fishingArea',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,
                        fieldName: 'What areas do you fish in?',
                        readOnlySpecs: {
                            type: 'fishingArea',
                            listOfKeyValues: EAPP_OPTIONS.FISHING_AREA
                        }
                    }
                }
            ]
        }
    ],
    isHidden: true
};

export const PIProminentPublicPositionFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {// * FIELDS: prominentPublicPosition
            columns: [
                { 
                    text: 'Are/have you or any of your immediate family members or close relationships and '
                        + 'associates been entrusted  with prominent public position/s in \n '
                        + '(a) the Philippines with substantial authority over policy, operations or the use or\n '
                        + 'allocation of government-owned resources \n'
                        + '(b) a foreign State; \n'
                        + '(c) an international organization?',
                    size:8, 
                    class:'noteGrey'
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'prominentPublicPosition',
                        formGroup: PolicyInsuredFormGroup,
                        setFieldName: true,                        
                        readOnlySpecs: {
                            type: 'yesNo'
                        }
                    },
                    class:'noteGrey'
                }
            ]
        }
    ],
    isHidden: false
};
//END PI READONLY SPECS

export const OwnerInsuredNextButtonCol: ColumnGeneratorSpecs = {
    push: 10,
    size: 2,
    button: {
        title: 'next',
        fill: 'solid',
        color: 'primary',
        expand: 'block'
    }
};

export const OwnerInsuredNextButtonRow: RowGeneratorSpecs = {
    columns: [OwnerInsuredNextButtonCol]
};
