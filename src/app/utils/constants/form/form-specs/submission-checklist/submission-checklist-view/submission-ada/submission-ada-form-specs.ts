import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import {
    TitleSpecs, BankNameSpecs, BankNameInputSpecs,
    SavingsSpecs, SavingsInputSpecs, 
    PolicyOwnerSpecs, PolicyOwnerTextSpecs, 
    PolicyNoSpecs, PolicyNoTextSpecs, SubmitButtonSpecs, ResetButtonSpecs
} from '@utils/constants/form/column-specs/submission-checklist/submission-checklist-view/submission-ada/submission-ada-column-specs'

export const SubmissionADAFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                TitleSpecs
            ]
        },
        {
            columns: [
                BankNameSpecs,
                BankNameInputSpecs
            ]
        },
        {
            columns: [
                SavingsSpecs,
                SavingsInputSpecs
            ]
        },
        {
            columns: [
                PolicyOwnerSpecs,
                PolicyOwnerTextSpecs
            ]
        },
        {
            class: 'mb-4',
            columns: [
                PolicyNoSpecs,
                PolicyNoTextSpecs
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