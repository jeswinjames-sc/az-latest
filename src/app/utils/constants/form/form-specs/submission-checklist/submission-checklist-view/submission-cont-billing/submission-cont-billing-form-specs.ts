import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import {
    TitleSpecs, CardTypeSpecs, CardTypeInputSpecs, CardIssuedSpecs,
    CardIssuedInputSpecs, CardAccountSpecs, CardAccountInputSpecs, 
    CardAddress1Specs, CardAddress1InputSpecs, CardAddress2InputSpecs, 
    CardExpirySpecs, CardExpiryInputSpecs, SubmitButtonSpecs, ResetButtonSpecs
} from '@utils/constants/form/column-specs/submission-checklist/submission-checklist-view/submission-cont-billing/submission-cont-billing-column-specs'

export const SubmissionContBillingFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                TitleSpecs
            ]
        },
        {
            columns: [
                CardIssuedSpecs,
                CardIssuedInputSpecs
            ]
        },
        {
            columns: [
                CardAccountSpecs,
                CardAccountInputSpecs
            ]
        },
        {
            columns: [
                CardTypeSpecs,
                CardTypeInputSpecs
            ]
        },
        {
            columns: [
                CardAddress1Specs,
                CardAddress1InputSpecs,
                CardAddress2InputSpecs
            ]
        },
        {
            class: 'mb-4',
            columns: [
                CardExpirySpecs,
                CardExpiryInputSpecs
            ]
        },
        {
            columns: [
                ResetButtonSpecs,
                SubmitButtonSpecs
            ]
        }
    ]
}