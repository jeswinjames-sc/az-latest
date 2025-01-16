import { FormGroup } from '@angular/forms';
import { FieldSpecs } from './field-specs';

export interface GenericDiseaseFurtherInfoSpecs {
  formGroup: FormGroup,
  diseaseAttName: string,
  diseaseAlias?: string, // diseaseAttName alternative naming
  extraQuestions?: {
    question: string,
    field?: FieldSpecs
    fields?: FieldSpecs[]
  }[]
}