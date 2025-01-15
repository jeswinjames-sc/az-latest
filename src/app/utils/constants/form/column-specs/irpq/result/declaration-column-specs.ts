import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { DeclarationFormGroup } from '@form-group/irpq/declaration-form-group';
import { BaseEditButton, BaseEmailButton, BaseButton } from '@utils/constants/buttons';
import * as _ from 'lodash';

export const DeclareSpecs: ColumnGeneratorSpecs = {
    template: 'I am signing below and declaring that:'
}

export const DeclareItemIRPQSpecs: ColumnGeneratorSpecs = {
    text: `This Investor Risk Profile Questionnaire (IRPQ) has been designed by Allianz PNB 
    Life Insurance, Inc. as a guide to assess my risk appetite and investment objectives based 
    on the answers that I provided;`
}

export const DeclareItemResponsibilitySpecs: ColumnGeneratorSpecs = {
    text: `I take full responsibility for my investment decision including the corresponding 
    allocation even if such varies with the results of this questionnaire;`
}

export const DeclareItemAwareSpecs: ColumnGeneratorSpecs = {
    text: `I am aware that Allianz PNB Life Insurance, Inc. makes no guarantee as to the accuracy 
    or completeness of the results provided;`
}

export const DeclareItemIntermediarySpecs: ColumnGeneratorSpecs = {
    text: `The Intermediary has explained to me in detail the result of this questionnaire and how 
    to appreciate the resulting risk profile;`
}

export const DeclarationCheckSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'declarationCheck',
        fieldName: `I authorize Allianz PNB Life Insurance, Inc. to use this information about me as 
        necessary to the conduct of performing investment related services on my behalf.`,
        setFieldName: false,
        type: 'checkbox',
        formGroup: DeclarationFormGroup
    },
    size: 12
}

export const DeclarationEditButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        ..._.clone(BaseEditButton)
    },
    size: 4
}

export const EmailIRPQButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        ..._.clone(BaseEmailButton),
        title: 'Email IRPQ'
    },
    size: 4
}

export const AgreeButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        ..._.clone(BaseButton),
        title: 'I Agree'
    },
    size: 4
}

export const AgreeSIButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        ..._.clone(BaseButton),
        title: 'I Agree & Proceed to SI'
    },
    size: 4
}