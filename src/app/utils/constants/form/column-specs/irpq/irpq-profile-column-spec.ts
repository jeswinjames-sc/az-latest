import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs'
import { PROFILE_QUESTIONS } from '@utils/constants/options/radio/irpq/profile-questions'
import { IrpqProfileFormGroup } from '@utils/constants/form/form-groups/irpq/irpq-profile-form-group'

export const PageDetailsSpecsPQ: ColumnGeneratorSpecs = {
    template: `<p class='profile-description'>To complete this questionnaire, please choose the statement 
    that best describes your situation by marking the circle beside it.</p>`
}

export const Q1QuestionSpecs: ColumnGeneratorSpecs = {
    template: `<ion-label class='ion-text-wrap'>${PROFILE_QUESTIONS.QUESTION_1.QUESTION}<span class='mandatory'>*</span></ion-label>`,
    size: 12
}

export const Q2QuestionSpecs: ColumnGeneratorSpecs = {
    template: `<ion-label class='ion-text-wrap'>${PROFILE_QUESTIONS.QUESTION_2.QUESTION}<span class='mandatory'>*</span></ion-label>`,
    size: 12
}

export const Q3QuestionSpecs: ColumnGeneratorSpecs = {
    template: `<ion-label class='ion-text-wrap'>${PROFILE_QUESTIONS.QUESTION_3.QUESTION}<span class='mandatory'>*</span></ion-label>`,
    size: 12
}


export const Q4QuestionSpecs: ColumnGeneratorSpecs = {
    template: `<ion-label class='ion-text-wrap'>${PROFILE_QUESTIONS.QUESTION_4.QUESTION}<span class='mandatory'>*</span></ion-label>`,
    size: 12
}

export const Q5QuestionSpecs: ColumnGeneratorSpecs = {
    template: `<ion-label class='ion-text-wrap'>${PROFILE_QUESTIONS.QUESTION_5.QUESTION}<span class='mandatory'>*</span></ion-label>`,
    size: 12
}

export const Q6QuestionSpecs: ColumnGeneratorSpecs = {
    template: `<ion-label class='ion-text-wrap'>${PROFILE_QUESTIONS.QUESTION_6.QUESTION}<span class='mandatory'>*</span></ion-label>`,
    size: 12
}

export const Q7QuestionSpecs: ColumnGeneratorSpecs = {
    template: `<ion-label class='ion-text-wrap'>${PROFILE_QUESTIONS.QUESTION_7.QUESTION}<span class='mandatory'>*</span></ion-label>`,
    size: 12
}

export const Q8QuestionSpecs: ColumnGeneratorSpecs = {
    template: `<ion-label class='ion-text-wrap'>${PROFILE_QUESTIONS.QUESTION_8.QUESTION}<span class='mandatory'>*</span></ion-label>`,
    size: 12
}

export const Q1ChoicesSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'profileOption1',
        type: 'radio',
        isQuestionnaire: true,
        setFieldName: false,
        options: PROFILE_QUESTIONS.QUESTION_1.CHOICES,
        formGroup: IrpqProfileFormGroup
    },
    size: 12
}

export const Q2ChoicesSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'profileOption2',
        type: 'radio',
        isQuestionnaire: true,
        setFieldName: false,
        options: PROFILE_QUESTIONS.QUESTION_2.CHOICES,
        formGroup: IrpqProfileFormGroup
    },
    size: 12
}

export const Q3ChoicesSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'profileOption3',
        type: 'radio',
        isQuestionnaire: true,
        setFieldName: false,
        options: PROFILE_QUESTIONS.QUESTION_3.CHOICES,
        formGroup: IrpqProfileFormGroup
    },
    size: 12
}

export const Q4ChoicesSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'profileOption4',
        type: 'radio',
        isQuestionnaire: true,
        setFieldName: false,
        options: PROFILE_QUESTIONS.QUESTION_4.CHOICES,
        formGroup: IrpqProfileFormGroup
    },
    size: 12
}

export const Q5ChoicesSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'profileOption5',
        type: 'radio',
        isQuestionnaire: true,
        setFieldName: false,
        options: PROFILE_QUESTIONS.QUESTION_5.CHOICES,
        formGroup: IrpqProfileFormGroup
    },
    size: 12
}

export const Q6ChoicesSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'profileOption6',
        type: 'radio',
        isQuestionnaire: true,
        setFieldName: false,
        options: PROFILE_QUESTIONS.QUESTION_6.CHOICES,
        formGroup: IrpqProfileFormGroup
    },
    size: 12
}

export const Q7ChoicesSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'profileOption7',
        type: 'radio',
        isQuestionnaire: true,
        setFieldName: false,
        options: PROFILE_QUESTIONS.QUESTION_7.CHOICES,
        formGroup: IrpqProfileFormGroup
    },
    size: 12
}

export const Q8ChoicesSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'profileOption8',
        type: 'radio',
        isQuestionnaire: true,
        setFieldName: false,
        options: PROFILE_QUESTIONS.QUESTION_8.CHOICES,
        formGroup: IrpqProfileFormGroup
    },
    size: 12
}

export const PrevSlideButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        title: 'Previous',
        expand: 'full',
        fill: 'clear',
        color: 'primary'
    },
    offset: 2,
    size: 4
}

export const NextSlideFirstButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        title: 'Next',
        expand: 'full',
        fill: 'solid',
        color: 'primary'
    },
    offset: 4,
    size: 4
}

export const NextSlideButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        title: 'Next',
        expand: 'full',
        fill: 'solid',
        color: 'primary'
    },
    size: 4
}

export const SubmitSlideButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        title: 'Next',
        expand: 'full',
        fill: 'solid',
        color: 'primary'
    },
    size: 4
}