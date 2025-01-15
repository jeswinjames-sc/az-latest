import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { PolicyCheckboxFormGroup } from '@form-group/submission-checklist/submission-epayment/policy-modal/policy-modal-form-group';

export const PolicyModalTitleSpecs: RowGeneratorSpecs = {
    columns: [
        {
            text: 'Please read the following policies and conditions below',
            class: 'ion-text-center policy-title'
        }
    ]
}

export const PolicyCancelButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        title: 'Cancel',
        expand: 'full',
        color: 'light'
    },
    size: 5,
    offset: 1
}

export const PolicyContinueButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        title: 'Continue',
        expand: 'full',
        color: 'primary',
        fill: 'solid'
    },
    size: 5
}

export const PolicyCheckboxSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'agreePolicy',
        type: 'checkbox',
        fieldName: 'I agree to the following policies and conditions I have read above',
        formGroup: PolicyCheckboxFormGroup
    },
    size: 10
}

export const PolicyButtonsFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                PolicyCheckboxSpecs
            ]
        },
        {
            columns: [
                PolicyCancelButtonSpecs,
                PolicyContinueButtonSpecs
            ]
        }
    ]
}