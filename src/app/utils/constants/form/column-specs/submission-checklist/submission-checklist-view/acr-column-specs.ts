import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs'
import { SubmissionFormGroup } from '@utils/constants/form/form-groups/submission-checklist/submission-checklist-view-form-group'
import { ICONS } from '@utils/constants/icon/icons'

export const BillingIsAttachedSpecs: ColumnGeneratorSpecs = {
  button: {
      fill: 'clear',
      color: 'medium',
      icon: 'checkmark-circle'
  },
  size: 2,
  class: 'indication-align'
}

export const BillingSpecs: ColumnGeneratorSpecs = {
  text: 'Authorization for continuous billing',
  size: 8,
  class: 'v-middle',
  isTextWrap: true
}

export const BillingButtonEditSpecs: ColumnGeneratorSpecs = {
  button: {
    fill: 'clear',
    color: 'primary',
    icon: ICONS.EDIT_DOCUMENT
  },
  size: 2
}

export const CHSameAsAOSpecs: ColumnGeneratorSpecs = {
  text: 'Is card holder same as applicant owner?',
  size: 8,
  class: 'v-middle',
  isTextWrap: true
}

export const CHSameAsAOSegment: ColumnGeneratorSpecs = {
  field: {
    attName: 'CHsameAsAO',
    type: 'toggle',
    setFieldName: false,
    formGroup: SubmissionFormGroup
  },
  size: 4,
}

export const AutoDebitIsAttachedSpecs: ColumnGeneratorSpecs = {
  button: {
      fill: 'clear',
      color: 'medium',
      icon: 'checkmark-circle'
  },
  size: 2,
  class: 'indication-align'
}

export const AutoDebitSpecs: ColumnGeneratorSpecs = {
  text: 'Authorization for Auto Debit',
  size: 8,
  class: 'v-middle',
  isTextWrap: true
}

export const AutoDebitButtonEditSpecs: ColumnGeneratorSpecs = {
  button: {
    fill: 'clear',
    color: 'primary',
    icon: ICONS.EDIT_DOCUMENT
  },
  size: 2
}

export const AutoDebitButtonCreateSpecs: ColumnGeneratorSpecs = {
  button: {
    fill: 'clear',
    color: 'primary',
    icon: ICONS.EDIT_DOCUMENT
  },
  size: 2
}

export const ACRIsAttachedSpecs: ColumnGeneratorSpecs = {
  button: {
    fill: 'clear',
    color: 'medium',
    icon: 'checkmark-circle'
  },
  size: 2,
  class: 'indication-align'
}

export const ACRSpecs: ColumnGeneratorSpecs = {
  text: `Additional Intermediary Declarations Form`,
  size: 8,
  class: 'v-middle',
  isTextWrap: true
}

export const ACRButtonEditSpecs: ColumnGeneratorSpecs = {
  button: {
    fill: 'clear',
    color: 'primary',
    icon: ICONS.EDIT_DOCUMENT
  },
  size: 2
}