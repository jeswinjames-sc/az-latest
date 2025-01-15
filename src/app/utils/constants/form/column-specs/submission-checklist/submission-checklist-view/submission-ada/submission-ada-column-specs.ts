import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs'
import { SubmissionADAFormGroup } from '@form-group/submission-checklist/submission-ada-form-group'
import * as _ from 'lodash';
import { BaseSubmitButton, BaseDeleteButton } from '@utils/constants/buttons';
import { BANK_PAYOUT } from '@utils/constants/options/select/bank';
import { AUTO_DEBIT_BANKS } from '@utils/constants/payment-scheme';

export const TitleSpecs: ColumnGeneratorSpecs = {
    class: 'form-group-title'
}

export const BankNameSpecs: ColumnGeneratorSpecs = {
    text: 'Name of Bank',
    class: 'v-middle',
    size: 5
}

export const BankNameInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'bankName',
        setFieldName: false,
        type: 'select',
        interface: 'popover',
        formGroup: SubmissionADAFormGroup
    },
    size: 7
}

export const SavingsSpecs: ColumnGeneratorSpecs = {
    text: 'Savings/Account Number',
    class: 'v-middle',
    size: 5
}

export const SavingsInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'savings',
        attMaxLength: 12,
        type: 'text',
        formGroup: SubmissionADAFormGroup,
        inputmode: 'numeric',
        setFieldName: true,
        showErrMsgOnly: true
    },
    size: 7
}

export const PolicyOwnerSpecs: ColumnGeneratorSpecs = {
    text: 'Policy Owner/Depositor',
    class: 'v-middle',
    size: 5
}

export const PolicyOwnerTextSpecs: ColumnGeneratorSpecs = {
    size: 7,
    class: 'label-placeholder'
}

export const PolicyNoSpecs: ColumnGeneratorSpecs = {
    text: 'Policy No.',
    class: 'v-middle',
    size: 5
}

export const PolicyNoTextSpecs: ColumnGeneratorSpecs = {
    size: 7,
    class: 'label-placeholder'
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