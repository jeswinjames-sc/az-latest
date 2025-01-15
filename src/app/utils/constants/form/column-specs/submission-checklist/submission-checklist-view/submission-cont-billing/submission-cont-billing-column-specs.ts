import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs'
import { SubmissionContBillingFormGroup } from '@form-group/submission-checklist/submission-cont-billing-form-group'
import { BaseDeleteButton, BaseSubmitButton } from '@utils/constants/buttons'
import * as _ from 'lodash'
import { BANK_CREDIT_CARD, BANK_PAYOUT } from '@utils/constants/options/select/bank'

export const TitleSpecs: ColumnGeneratorSpecs = {
    class: 'form-group-title'
}

export const CardTypeSpecs: ColumnGeneratorSpecs = {
    text: 'Card Type',
    class: 'v-middle',
    size: 5
}

export const CardTypeInputSpecs: ColumnGeneratorSpecs = {
    field: {
        type: 'readOnly',
        attName: 'cardType',
        setFieldName: false,
        formGroup: SubmissionContBillingFormGroup,
    },
    size: 7
}

export const CardIssuedSpecs: ColumnGeneratorSpecs = {
    text: 'Card Issued By',
    class: 'v-middle',
    size: 5
}

export const CardIssuedInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'cardIssued',
        setFieldName: false,
        type: 'selectize',
        formGroup: SubmissionContBillingFormGroup,
        interface: 'popover',
        isRequired: true,
        options: BANK_CREDIT_CARD.sort((a,b) => a.value.localeCompare(b.key))

    },
    size: 7
}

export const CardAccountSpecs: ColumnGeneratorSpecs = {
    text: 'Credit Card No.',
    class: 'v-middle',
    size: 5
}

export const CardAccountInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'cardAccount',
        setFieldName: false,
        type: 'number',
        attMaxLength: 50,
        formGroup: SubmissionContBillingFormGroup,
    },
    size: 7
}

export const CardAddress1Specs: ColumnGeneratorSpecs = {
    text: `Cardholderholder's Address`,
    class: 'v-middle',
    size: 5
}

export const CardAddress1InputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'cardAddress1',
        setFieldName: false,
        type: 'text',
        attMaxLength: 50,
        formGroup: SubmissionContBillingFormGroup
    },
    size: 7
}

export const CardAddress2InputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'cardAddress2',
        setFieldName: false,
        type: 'text',
        attMaxLength: 50,
        formGroup: SubmissionContBillingFormGroup
    },
    offset: 5,
    size: 7
}

export const CardExpirySpecs: ColumnGeneratorSpecs = {
    text: `Card Expiry Date`,
    class: 'v-middle',
    size: 5
}

export const CardExpiryInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'cardExpiry',
        setFieldName: false,
        type: 'date',
        formGroup: SubmissionContBillingFormGroup,
        dateFormat: 'MM/YY',
        isExpiredIDField: true
    },
    size: 7
}

export const ResetButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        ..._.clone(BaseDeleteButton),
        title: 'Reset'
    },
    size: 6
}

export const SubmitButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        ..._.clone(BaseSubmitButton)
    },
    size: 6
}
