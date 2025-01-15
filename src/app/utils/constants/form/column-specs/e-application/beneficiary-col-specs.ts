import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { BeneficiariesFormGroup } from '@form-group/e-app/policy-info-form-group';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { BENE_PRIORITY, EAPP_RELATIONSHIP } from '@utils/constants/options/segment/e-app-options';
import { GENDER } from '@utils/constants/options/segment/gender';

export const JustificationRowSpecs: RowGeneratorSpecs = {
    columns: [
        {
            size: 6,
            field: {
                type: 'text',
                attMaxLength: 50,
                attName: 'justification',
                formGroup: BeneficiariesFormGroup,
                setFieldName: true,
                fieldName: 'Relationship and Justification of Insurable Interest for Others',
            }
        }
    ],
    isHidden: true
}

export const SameAsPIPresentAddressColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'samePIAddress',
        fieldName: `Same as Policy Insured's Present Address`,
        setFieldName: false,
        formGroup: BeneficiariesFormGroup
    },
    isHidden: true
};

export const SameAsAOPresentAddressColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'sameAOAddress',
        fieldName: `Same as Applicant Owner's Present Address`,
        setFieldName: false,
        formGroup: BeneficiariesFormGroup
    }
};

export const EstateCheckBoxColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'isEstateBeneficiary',
        fieldName: `Estate`,
        setFieldName: false,
        formGroup: BeneficiariesFormGroup
    },
    isHidden: true
};

export const EstateCheckBoxColSpecs1: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'isEstateBeneficiary1',
        fieldName: `Estate`,
        setFieldName: false,
        formGroup: BeneficiariesFormGroup
    }
};

export const EstatePriorityColSpecs: ColumnGeneratorSpecs = {
    size: 12,
    field: {
        type: 'segment',
        attName: 'estatePriority',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        fieldName: 'Priority',
        options: BENE_PRIORITY,
        isDisabled: false
    }
};

export const EstateSharePercentageColSpecs: ColumnGeneratorSpecs = {
    size: 12,
    field: {
        type: 'number',
        attMaxLength: 5,
        attName: 'estateSharePercentage',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        fieldName: 'Estate Percentage of Share',
        isDisabled: false
    }
};

export const DeclarationTitle: RowGeneratorSpecs = {
    columns: [{ text: 'Declarations' }],
    class: 'form-sub-section-title',
    isHidden: true
};

export const Declaration1: RowGeneratorSpecs = {
    columns: [
        {
            field: {
                type: 'checkbox',
                attName: 'declaration1',
                fieldName: `The proposed insured is supporting
                    the education of the designated beneficiary.`,
                setFieldName: false,
                formGroup: BeneficiariesFormGroup
            }
        }
    ],
    isHidden: true
};

export const Declaration2: RowGeneratorSpecs = {
    columns: [
        {
            field: {
                type: 'checkbox',
                attName: 'declaration2',
                fieldName: `The proposed insured is the legal
                    guardian of the designated beneficiary.`,
                setFieldName: false,
                formGroup: BeneficiariesFormGroup
            }
        }
    ],
    isHidden: true
};

export const Declaration3: RowGeneratorSpecs = {
    columns: [
        {
            field: {
                type: 'checkbox',
                attName: 'declaration3',
                fieldName: `The proposed insured provides food,
                    shelter and clothing and other financial
                    needs of the designated beneficiary.`,
                setFieldName: false,
                formGroup: BeneficiariesFormGroup
            }
        }
    ],
    isHidden: true
};

export const Declaration4: RowGeneratorSpecs = {
    columns: [
        {
            field: {
                type: 'checkbox',
                attName: 'declaration4',
                fieldName: `The proposed insured is single,
                    parents are decesed or no available immediate
                    family members to be designated as beneficiary.`,
                setFieldName: false,
                formGroup: BeneficiariesFormGroup
            }
        }
    ],
    isHidden: true
};

export const CountryPOB: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attName: 'pobCountry',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Country'
    }
};

export const ProvincePOB: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attName: 'pobProvince',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Province'
    }
};

export const CityPOB: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attName: 'pobCity',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'City/Municipality',
    }
};

export const EmailAddressColSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'emailAddress',
        fieldName: 'Email Address',
        attMaxLength: 50,
        type: 'email',
        setFieldName: true,
        formGroup: BeneficiariesFormGroup,
        inputmode: 'email'
    },
    size: 8
};

export const MobileNumberColSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'mobileNumber',
        fieldName: 'Mobile Number',
        attMaxLength: 11,
        placeholder: '09XXXXXXXXX',
        type: 'text',
        setFieldName: true,
        formGroup: BeneficiariesFormGroup,
        inputmode: 'numeric'
    },
    size: 4
};


export const GenderColSpec: ColumnGeneratorSpecs = {
    field: {
        attName: 'gender',
        fieldName: 'Gender',
        type: 'segment',
        setFieldName: true,
        options: GENDER,
        formGroup: BeneficiariesFormGroup
    },
    size: 4
};

export const UnitBuildingColSpec: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attMaxLength: 120,
        attName: 'unitBuilding',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        fieldName: 'Unit/Building Name'
    }
};

export const BlkNoColSpec: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attMaxLength: 15,
        attName: 'blockNumber',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        fieldName: 'Lot/Block Number'
    }
};

export const StreetColSpec: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attMaxLength: 40,
        attName: 'streetName',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        fieldName: 'Street'
    }
}

export const BrgyColSpec: ColumnGeneratorSpecs = {
    size:8,
    field: {
        type: 'text',
        attMaxLength: 80,
        attName: 'barangay',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        fieldName: 'Barangay/Subdivision'
    }
};

export const CountryCode: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attName: 'countryCode',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Country'
    }
};

export const ProvinceCode: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attName: 'provinceCode',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Province'
    }
};

export const CityCode: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attName: 'cityCode',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'City/Municipality',
    }
};

export const ZipCode: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attName: 'zipCode',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Zip Code'
    }
};
