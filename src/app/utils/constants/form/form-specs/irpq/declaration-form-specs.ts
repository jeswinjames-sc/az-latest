import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import * as ResultColSpecs from '@utils/constants/form/column-specs/irpq/result/index';

export const DeclarationFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'declare-desc',
            columns: [
                ResultColSpecs.DeclareSpecs
            ]
        },
        {
            class: 'declare-margin-btm',
            columns: [
                ResultColSpecs.DeclareItemIRPQSpecs
            ]
        },
        {
            class: 'declare-margin-btm',
            columns: [
                ResultColSpecs.DeclareItemResponsibilitySpecs
            ]
        },
        {
            class: 'declare-margin-btm',
            columns: [
                ResultColSpecs.DeclareItemAwareSpecs
            ]
        },
        {
            class: 'declare-margin-btm',
            columns: [
                ResultColSpecs.DeclareItemIntermediarySpecs
            ]
        },
        {
            class: 'declare-margin-btm',
            columns: [
                ResultColSpecs.DeclarationCheckSpecs
            ]
        },
        {
            class: 'm-40',
            columns: [
                ResultColSpecs.DeclarationEditButtonSpecs,
                ResultColSpecs.AgreeButtonSpecs,
                ResultColSpecs.EmailIRPQButtonSpecs,
                ResultColSpecs.AgreeSIButtonSpecs
            ]
        }
    ]
}