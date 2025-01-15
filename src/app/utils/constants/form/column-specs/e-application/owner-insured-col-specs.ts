import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { ApplicantOwnerFormGroup, PolicyInsuredFormGroup } from '@form-group/e-app/applicant-owner-form-group';
import { AIRCRAFT_TYPE } from '@utils/constants/options/select/e-application/aircraft-type';
import { FLIGHT_EXPERIENCE } from '@utils/constants/options/select/e-application/flight-experience';
import { AIRLINE_JOB } from '@utils/constants/options/select/e-application/airline-job';
import { FUND_SOURCE, FUND_SOURCE_KEY } from '@utils/constants/options/select/fund-source';
import { EAPP_RELATIONSHIP, PREFERRED_MAILING_ADDRESS } from '@utils/constants/options/segment/e-app-options';
import { Validators } from '@angular/forms';
// * APPLICATION OWNER GROUP
export const AOPobCountryColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attMaxLength: 30,
        attName: 'pobCountry',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Country'
    }
};

export const AOPobProvinceColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attMaxLength: 35,
        attName: 'pobProvince',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Province'
    }
};

export const AOPobCityColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attMaxLength: 35,
        attName: 'pobCity',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'City/Municipality'
    }
};

export const AORelationToPIColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attName: 'relationshipToPI',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Relationship to Proposed Insured',
        isRequired: true,
        options: EAPP_RELATIONSHIP
    }
};

export const AOAirlineJobSpec: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'select',
        attName: 'airlineJob',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Are you an airline pilot or crew member or ground crew?',
        options: AIRLINE_JOB
    }
};

export const AOAircraftTypeSpec: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'select',
        attName: 'aircraftType',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'What types of aircraft do you presently fly?',
        options: AIRCRAFT_TYPE.PILOT,
    },
    isHidden: true
};

export const AONumberOfFlightExpirienceSpec: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'select',
        attName: 'numberOfFlightExpirience',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Number of your flying or expected flying hours per annum?',
        options: FLIGHT_EXPERIENCE
    },
    isHidden: true
};

export const sourceOfFundBoValidation = () => {
    const srcFnds = ApplicantOwnerFormGroup.get('sourceOfFunds').value || [];
    
    if (srcFnds && srcFnds.includes(FUND_SOURCE_KEY.OTHERS)) {
        ApplicantOwnerFormGroup.controls.otherSourceOfFunds.setValidators(Validators.required);
    } else {
        ApplicantOwnerFormGroup.get('isAOEqualBO').enable()
        ApplicantOwnerFormGroup.controls.otherSourceOfFunds.clearValidators();
    }

    if (srcFnds && srcFnds.length > 0) {
        if (srcFnds.includes(FUND_SOURCE_KEY.REMITTANCES)){
            ApplicantOwnerFormGroup.get('isAOEqualBO').setValue(false);
            ApplicantOwnerFormGroup.get('isAOEqualBO').disable();
        }
        else{
            ApplicantOwnerFormGroup.get('isAOEqualBO').setValue(true);
            ApplicantOwnerFormGroup.get('isAOEqualBO').disable();
        }
    }
    else {
        ApplicantOwnerFormGroup.get('isAOEqualBO').setValue(false);
        ApplicantOwnerFormGroup.get('isAOEqualBO').enable();
    }
    
    ApplicantOwnerFormGroup.controls.otherSourceOfFunds.updateValueAndValidity();
}

export const AOOtherSourceOfFundsColSpec: ColumnGeneratorSpecs = {
    size: 8,
    field: {
        type: 'select',
        attName: 'sourceOfFunds',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        isMultiple: true,
        fieldName: 'Source of Funds',
        options: FUND_SOURCE,
        conditionalFunction: () => {
            sourceOfFundBoValidation()
        }
    }
};

export const AOOtherSourceOfFundsOthersColSpec: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attMaxLength: 100,
        attName: 'otherSourceOfFunds',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'Source of Funds (Others)'
    }
};

export const AOPreferredMailingColSpec: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'select',
        attName: 'preferredMailingAddress',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Preferred Mailing Address',
        options: [
            { key: 'P', value: 'Present' },
            { key: 'W', value: 'Work' }
        ]
    }
};

export const AOValidIdNumberColSpec: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        type: 'text',
        attMaxLength: 12,
        attName: 'validIdNumber',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'Valid ID Number'
    }
};

//AO READ ONLY SPECS
export const AOPobCountryColReadOnlySpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attMaxLength: 30,
        attName: 'pobCountryName',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Country'
    }
};

export const AOPobProvinceColReadOnlySpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attMaxLength: 35,
        attName: 'pobProvinceName',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Province'
    }
};

export const AOPobCityColReadOnlySpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attMaxLength: 35,
        attName: 'pobCityName',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'City/Municipality'
    }
};

export const AORelationToPIColReadOnlySpec: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attName: 'relationshipToPI',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'Relationship to Proposed Insured',
        readOnlySpecs: {
            type: 'relationship',
            listOfKeyValues: EAPP_RELATIONSHIP
        }
    }
};

export const AOAirlineJobReadOnlySpec: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'readOnly',
        attName: 'airlineJob',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'Are you an airline pilot or crew member or ground crew?',
        readOnlySpecs: {
            type: 'airlineJob',
            listOfKeyValues: AIRLINE_JOB
        }
    }
};

export const AOAircraftTypeReadOnlySpec: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'readOnly',
        attName: 'aircraftType',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'What types of aircraft do you presently fly?',
        readOnlySpecs: {
            type: 'aircraftPilot',
            listOfKeyValues: AIRCRAFT_TYPE.PILOT
        }
    },
    isHidden: true
};

export const AONumberOfFlightExpirienceReadOnlySpec: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'readOnly',
        attName: 'numberOfFlightExpirience',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'Number of your flying or expected flying hours per annum?',
        readOnlySpecs: {
            type: 'flightExp',
            listOfKeyValues: FLIGHT_EXPERIENCE
        }
    },
    isHidden: true
};

export const AOOtherSourceOfFundsColReadOnlySpec: ColumnGeneratorSpecs = {
    size: 8,
    field: {
        type: 'readOnly',
        attName: 'sourceOfFunds',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'Source of Funds',
        readOnlySpecs: {
            type: 'fundSource',
            listOfKeyValues: FUND_SOURCE
        }
    }
};

export const AOOtherSourceOfFundsOthersColReadOnlySpec: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attMaxLength: 100,
        attName: 'otherSourceOfFunds',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'Source of Funds (Others)'
    }
};

export const AOPreferredMailingColReadOnlySpec: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attName: 'preferredMailingAddress',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'Preferred Mailing Address',
        readOnlySpecs: {
            type: 'mailingAddress',
            listOfKeyValues: PREFERRED_MAILING_ADDRESS
        }
    }
};

export const AOValidIdNumberColReadOnlySpec: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attMaxLength: 12,
        attName: 'validIdNumber',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'Valid ID Number'
    }
};

export const AOUSTinColReadOnlySpec: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attMaxLength: 12,
        attName: 'identificationNumber',
        formGroup: ApplicantOwnerFormGroup,
        setFieldName: true,
        fieldName: 'US Tin'
    }
};

// * POLICY INSURED
export const PIPobCountryColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attMaxLength: 30,
        attName: 'pobCountry',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Country'
    }
};

export const PIPobProvinceColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attMaxLength: 35,
        attName: 'pobProvince',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Province'
    }
};

export const PIPobCityColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'selectize',
        attMaxLength: 35,
        attName: 'pobCity',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'City/Municipality'
    }
};

export const PIAirlineJobSpec: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'select',
        attName: 'airlineJob',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Are you an airline pilot or crew member or ground crew?',
        options: AIRLINE_JOB
    }
};

export const PIAircraftTypeSpec: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'select',
        attName: 'aircraftType',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'What types of aircraft do you presently fly?',
        options: AIRCRAFT_TYPE.PILOT,
    },
    isHidden: true
};

export const PINumberOfFlightExpirienceSpec: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'select',
        attName: 'numberOfFlightExpirience',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Number of your flying or expected flying hours per annum?',
        options: FLIGHT_EXPERIENCE
    },
    isHidden: true
};

export const PIOtherSourceOfFundsColSpec: ColumnGeneratorSpecs = {
    size: 8,
    field: {
        type: 'select',
        attName: 'sourceOfFunds',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        isMultiple: true,
        fieldName: 'Source of Funds',
        options: FUND_SOURCE,
        conditionalFunction: () => {
            const srcFndsPI = PolicyInsuredFormGroup.get('sourceOfFunds').value
            if (srcFndsPI && srcFndsPI.includes(FUND_SOURCE_KEY.OTHERS)) {
                PolicyInsuredFormGroup.controls.otherSourceOfFunds.setValidators(Validators.required);
            } else {
                PolicyInsuredFormGroup.controls.otherSourceOfFunds.clearValidators();
            }
            PolicyInsuredFormGroup.controls.otherSourceOfFunds.updateValueAndValidity();
        }
    }
};

export const PIOtherSourceOfFundsOthersColSpec: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'text',
        attMaxLength: 100,
        attName: 'otherSourceOfFunds',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        fieldName: 'Source of Funds (Others)'
    }
};


//PI READ ONLY SPECS
export const PIPobCountryColReadOnlySpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attMaxLength: 30,
        attName: 'pobCountryName',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Country'
    }
};

export const PIPobProvinceColReadOnlySpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attMaxLength: 35,
        attName: 'pobProvinceName',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Province'
    }
};

export const PIPobCityColReadOnlySpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attMaxLength: 35,
        attName: 'pobCityName',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'City/Municipality'
    }
};

export const PIAirlineJobReadOnlySpec: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'readOnly',
        attName: 'airlineJob',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        fieldName: 'Are you an airline pilot or crew member or ground crew?',
        readOnlySpecs: {
            type: 'airlineJob',
            listOfKeyValues: AIRLINE_JOB
        }
    }
};

export const PIAircraftTypeReadOnlySpec: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'readOnly',
        attName: 'aircraftType',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        fieldName: 'What types of aircraft do you presently fly?',
        readOnlySpecs: {
            type: 'aircraftPilot',
            listOfKeyValues: AIRCRAFT_TYPE.PILOT
        }
    },
    isHidden: true
};

export const PINumberOfFlightExpirienceReadOnlySpec: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'readOnly',
        attName: 'numberOfFlightExpirience',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        fieldName: 'Number of your flying or expected flying hours per annum?',
        readOnlySpecs: {
            type: 'flightExp',
            listOfKeyValues: FLIGHT_EXPERIENCE
        }
    },
    isHidden: true
};

export const PIOtherSourceOfFundsColReadOnlySpec: ColumnGeneratorSpecs = {
    size: 8,
    field: {
        type: 'readOnly',
        attName: 'sourceOfFunds',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        fieldName: 'Source of Funds',
        readOnlySpecs: {
            type: 'fundSource',
            listOfKeyValues: FUND_SOURCE
        }
    }
};

export const PIOtherSourceOfFundsOthersColReadOnlySpec: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attMaxLength: 100,
        attName: 'otherSourceOfFunds',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        fieldName: 'Source of Funds (Others)'
    }
};

export const PIUSTinColReadOnlySpec: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attMaxLength: 12,
        attName: 'identificationNumber',
        formGroup: PolicyInsuredFormGroup,
        setFieldName: true,
        fieldName: 'US Tin'
    }
};
