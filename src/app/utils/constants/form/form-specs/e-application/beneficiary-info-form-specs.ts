import { BeneficiariesFormGroup, PolicyInfoFormGroup } from '@form-group/e-app/policy-info-form-group';

import { DynamicTableSpecs } from '@models/specs/dynamic-table-specs';
import { BeneficiariesFGControlsWithoutValidations } from '@fg-controls/e-app';
import {
    BENE_PRIORITY,
    PRIMARY_BENE_PRIORITY,
    CONTINGENT_BENE_PRIORITY,
    EAPP_RELATIONSHIP,
    RELATIONSHIP_DEGREE,
    BENE_DESIGNATION
} from '@utils/constants/options/segment/e-app-options';
import * as beneficiaryCol from '@form/column-specs/e-application/beneficiary-col-specs';
import { CONSTANTS_STRING } from '@utils/constants/string/constants-string';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { PERCENTAGE } from '@utils/constants/percentage';
import { NATIONALITY } from '@utils/constants/options/select/nationality';
import { Validators } from '@angular/forms';

export function checkBeneShares(isRequired: boolean = true, isReadOnly: boolean = false) {
    BeneTable.additionalValMsg = [];

    if(isReadOnly) return;

    const benes = PolicyInfoFormGroup.get('beneficiaries').value;

    let totalPrimaryPercentage = 0;
    let totalContingentPercentage = 0;

    for (let i = 0; i < benes.length; i++) {
        if (benes[i].priority === PRIMARY_BENE_PRIORITY.key) {
            totalPrimaryPercentage = totalPrimaryPercentage + Number(benes[i].sharePercentage);
            if(benes[i].isEstateBeneficiary) {
                if(benes[i].estatePriority === PRIMARY_BENE_PRIORITY.key)
                    totalPrimaryPercentage = totalPrimaryPercentage + Number(benes[i].estateSharePercentage);
                if(benes[i].estatePriority === CONTINGENT_BENE_PRIORITY.key)
                    totalContingentPercentage = totalContingentPercentage + Number(benes[i].estateSharePercentage);
            }
        }

        if (benes[i].priority === CONTINGENT_BENE_PRIORITY.key) {
            totalContingentPercentage = totalContingentPercentage + Number(benes[i].sharePercentage);
            if(benes[i].isEstateBeneficiary) {
                if(benes[i].estatePriority === CONTINGENT_BENE_PRIORITY.key)
                totalContingentPercentage = totalContingentPercentage + Number(benes[i].estateSharePercentage);
                if(benes[i].estatePriority === PRIMARY_BENE_PRIORITY.key)
                    totalPrimaryPercentage = totalPrimaryPercentage + Number(benes[i].estateSharePercentage);
            }
        }
    }

    let errors = {}

    if (totalPrimaryPercentage > PERCENTAGE.HUNDRED) {
        BeneTable.additionalValMsg.push(`Primary total shares exceeded 100`)
        errors['primaryExceeds'] = true
    }
    if (totalContingentPercentage > PERCENTAGE.HUNDRED) {
        BeneTable.additionalValMsg.push(`Contingent total shares exceeded 100`)
        errors['contingentExceeds'] = true
    }

    if ((totalPrimaryPercentage < PERCENTAGE.HUNDRED && totalPrimaryPercentage !== PERCENTAGE.ZERO) ||
        (totalPrimaryPercentage == PERCENTAGE.ZERO && isRequired)) {
        BeneTable.additionalValMsg.push(`Primary total shares must be 100`)
        errors['primaryBelow100'] = true
    }

    if (benes.length) {
        if(totalPrimaryPercentage < PERCENTAGE.HUNDRED && 
           (!errors.hasOwnProperty('primaryBelow100') ||
           (errors.hasOwnProperty('primaryBelow100') && !errors['primaryBelow100']))) {
            BeneTable.additionalValMsg.push(`Primary total shares must be 100`)
            errors['primaryBelow100'] = true
        }
    }
    
    if (totalContingentPercentage < PERCENTAGE.HUNDRED && totalContingentPercentage !== PERCENTAGE.ZERO) {
        BeneTable.additionalValMsg.push(`Contingent total shares must be 100`)
        errors['contingentBelow100'] = true
    }

    if (isRequired && benes.length === 0) {
        BeneTable.additionalValMsg.push('Required to have at least one beneficiary');
        errors['required'] = true;
    }

    if (Object.keys(errors).length === 0)
        PolicyInfoFormGroup.get('beneficiaries').setErrors(null)
    else
        PolicyInfoFormGroup.get('beneficiaries').setErrors(errors)


}

export const PriorityColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'segment',
        attName: 'priority',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        fieldName: 'Priority',
        options: BENE_PRIORITY
    }
};

export const SharePercentageColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'number',
        attMaxLength: 5,
        attName: 'sharePercentage',
        formGroup: BeneficiariesFormGroup,
        setFieldName: true,
        fieldName: '% of Share'
    }
};

export const BeneTable: DynamicTableSpecs = {
    mainFormGroup: PolicyInfoFormGroup,
    formArrayKey: 'beneficiaries',
    secondaryFormGroup: BeneficiariesFormGroup,
    controlConfiguration: BeneficiariesFGControlsWithoutValidations,
    limit: 15,
    title: 'Beneficiaries Summary', 
    subTitle: 'Beneficiary Details',
    customSaveButtonName: 'Beneficiary',
    readOnly: false,
    hasShowMore: true,
    deleteConfirmationMessage: 'Are you sure you want to delete the beneficiary details permanently?',
    defaultValue: [
        { formGroupControlName: CONSTANTS_STRING.NATIONALITY, value: CONSTANTS_STRING.PH_CODE },
        { formGroupControlName: CONSTANTS_STRING.POB_COUNTRY, value: CONSTANTS_STRING.PH_CODE },
        { formGroupControlName: CONSTANTS_STRING.HOME_COUNTRY, value: CONSTANTS_STRING.PH_CODE }
    ],
    availableActions: {
        add: true,
        edit: true,
        save: true,
        delete: true
    },

    formGeneratorSpecs: {
        rows: [
            {// FIELDS: firstName, middleName, lastName
                columns: [
                    {
                        size: 4,
                        field: {
                            type: 'text',
                            attName: 'firstName',
                            attMaxLength: 50,
                            formGroup: BeneficiariesFormGroup,
                            setFieldName: true,
                            fieldName: 'First Name'
                        }
                    },
                    {
                        size: 4,
                        field: {
                            type: 'text',
                            attName: 'middleName',
                            attMaxLength: 50,
                            formGroup: BeneficiariesFormGroup,
                            setFieldName: true,
                            fieldName: 'Middle Name'
                        }
                    },
                    {
                        size: 4,
                        field: {
                            type: 'text',
                            attName: 'lastName',
                            attMaxLength: 50,
                            formGroup: BeneficiariesFormGroup,
                            setFieldName: true,
                            fieldName: 'Last Name'
                        }
                    }
                ]
            },
            {// FIELDS: dateOfBirth, relationToPI, nationalityCountryCode
                columns: [
                    {
                        size: 4,
                        field: {
                            type: 'selectize',
                            attName: 'nationalityCountryCode',
                            formGroup: BeneficiariesFormGroup,
                            setFieldName: true,
                            fieldName: 'Nationality',
                            options: NATIONALITY
                        }
                    },
                    {
                        size: 4,
                        field: {
                            type: 'date',
                            attName: 'dateOfBirth',
                            formGroup: BeneficiariesFormGroup,
                            setFieldName: true,
                            fieldName: 'Date of Birth',
                            dateFormatOutput: 'MM/DD/YYYY'
                        }
                    },
                    beneficiaryCol.GenderColSpec
                ]
            },
            { //  mobileNumber, emailAddress, gender
                columns: [
                    beneficiaryCol.EmailAddressColSpecs,
                    beneficiaryCol.MobileNumberColSpecs
                ]
            },
            {
                columns: [
                    {
                        size: 4,
                        field: {
                            type: 'selectize',
                            attName: 'relationToPI',
                            formGroup: BeneficiariesFormGroup,
                            setFieldName: true,
                            interface: 'popover',
                            fieldName: 'Relationship to Proposed Insured',
                            options: EAPP_RELATIONSHIP,
                            conditionalFunction: () => {
                                const relationship = BeneficiariesFormGroup.get('relationToPI').value;
                                const isOtherRelationship = RELATIONSHIP_DEGREE.third.includes(Number(relationship));
                                const isSecondaryRelation = RELATIONSHIP_DEGREE.third.includes(Number(relationship));

                                beneficiaryCol.JustificationRowSpecs.isHidden = !isOtherRelationship;
                                if (isOtherRelationship) {
                                    BeneficiariesFormGroup.get('justification').setValidators(Validators.required);
                                    BeneficiariesFormGroup.get('justification').updateValueAndValidity();
                                    BeneficiariesFormGroup.get('justification').enable();
                                } else {
                                    BeneficiariesFormGroup.get('justification').setValidators(null);
                                    BeneficiariesFormGroup.get('justification').setErrors(null);
                                    BeneficiariesFormGroup.get('justification').disable();
                                }


                                beneficiaryCol.DeclarationTitle.isHidden = !isSecondaryRelation;
                                beneficiaryCol.Declaration1.isHidden = !isSecondaryRelation;
                                beneficiaryCol.Declaration2.isHidden = !isSecondaryRelation;
                                beneficiaryCol.Declaration3.isHidden = !isSecondaryRelation;
                                beneficiaryCol.Declaration4.isHidden = !isSecondaryRelation;
                            }
                        }
                    },
                    PriorityColSpecs,
                    SharePercentageColSpecs
                ]
            },
            {
                columns: [
                    {
                        size: 4,
                        field: {
                            type: 'segment',
                            attName: 'designation',
                            formGroup: BeneficiariesFormGroup,
                            setFieldName: true,
                            fieldName: 'Designation',
                            options: BENE_DESIGNATION
                        }
                    },

                ]
            },
            /*{
                columns: [
                    beneficiaryCol.EstateCheckBoxColSpecs,
                ]
            },
            {
                columns: [
                    beneficiaryCol.EstatePriorityColSpecs,
                    beneficiaryCol.EstateSharePercentageColSpecs
                ]
            },*/
            {// TITLE: place of birth
                columns: [{ text: 'Place of Birth' }],
                class: 'form-sub-section-title'
            },
            {// pobCountry, pobProvince, pobCity
                columns: [
                    beneficiaryCol.CountryPOB,
                    beneficiaryCol.ProvincePOB,
                    beneficiaryCol.CityPOB,
                ]
            },
            {// FIELDS: sameAOAddress, samePIAddress
                columns: [
                    beneficiaryCol.SameAsAOPresentAddressColSpecs,
                    beneficiaryCol.SameAsPIPresentAddressColSpecs
                ]
            },
            {// FIELDS: unitBuilding, blockNumber, streetName
                columns: [
                    beneficiaryCol.UnitBuildingColSpec,
                    beneficiaryCol.BlkNoColSpec,
                    beneficiaryCol.StreetColSpec
                ]
            },
            {// FIELDS: barangay
                columns: [
                    beneficiaryCol.BrgyColSpec,
                    beneficiaryCol.CountryCode
                ]
            },
            { // FIELDS: cityCode, provinceCode, countryCode, zipCode
                columns: [
                    beneficiaryCol.ProvinceCode,
                    beneficiaryCol.CityCode,
                    beneficiaryCol.ZipCode
                ]
            },
            beneficiaryCol.DeclarationTitle,
            beneficiaryCol.Declaration1,
            beneficiaryCol.Declaration2,
            beneficiaryCol.Declaration3,
            beneficiaryCol.Declaration4,
            beneficiaryCol.JustificationRowSpecs,
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
            formGrpCtrlName: 'priority',
            columnName: 'Priority',
            mapper: {
                [PRIMARY_BENE_PRIORITY.key]: PRIMARY_BENE_PRIORITY.name,
                [CONTINGENT_BENE_PRIORITY.key]: CONTINGENT_BENE_PRIORITY.name
            }
        },
        {
            formGrpCtrlName: 'sharePercentage',
            columnName: 'Percentage of Share'
        },
        {
            formGrpCtrlName: 'designation',
            columnName: 'Designation',
            mapper: {
                true: 'Revocable',
                false: 'Irrevocable'
            }
        },
        {
            formGrpCtrlName: 'dateOfBirth',
            columnName: 'Date of Birth'
        }
    ],
    estateBeneSubTitle: 'Estate Beneficiary',
    estateCheckBoxColSpecs1: beneficiaryCol.EstateCheckBoxColSpecs1,
    estateBeneFormGeneratorSpecs: {rows:[{
        columns: [
            beneficiaryCol.EstatePriorityColSpecs
        ]
    },
    {
        columns: [
            beneficiaryCol.EstateSharePercentageColSpecs
        ]
    }]},
    estateBeneColumns: [
        {
            formGrpCtrlName: 'estatePriority',
            columnName: 'Estate Priority',
            mapper: {
                [PRIMARY_BENE_PRIORITY.key]: PRIMARY_BENE_PRIORITY.name,
                [CONTINGENT_BENE_PRIORITY.key]: CONTINGENT_BENE_PRIORITY.name
            }
        },
        {
            formGrpCtrlName: 'estateSharePercentage',
            columnName: 'Estate Percentage of Share'
        }
    ]
};
