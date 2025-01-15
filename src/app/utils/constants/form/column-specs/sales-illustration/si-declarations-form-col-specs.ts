import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { SIDeclarationsFormGroup } from '@form-group/sales-illustration/si-declarations-form-group';


export const ForMultipleDiseaseSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'forMultipleDisease',
    fieldName: `Have you ever had or been told that you have or been treated for heart disease, stroke, cancer tumour, diabetes, chronic kidney disease, chronic obstructive pulmonary (COPD), HIV or seizures?`,
    type: 'checkbox',
    setFieldName: false,
    formGroup: SIDeclarationsFormGroup
  },
  size: 12,
};

export const HadMultipleDiseaseSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'hadMultipleDisease',
    fieldName: `Other than the conditions mentioned above, have you ever been hospitalized or have you been
    advised to have any operation, or treatment in the last 2 years?
    (Cough, common colds, fever, and pregnancy-related can be ignored.)`,
    type: 'checkbox',
    setFieldName: false,
    formGroup: SIDeclarationsFormGroup,
  },
  size: 12,
};

export const BussMedAttSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'bussMedAtt',
    fieldName: `Aside from routine health screening, are you currently seeking or intending to seek any medical advice/treatment/consultation?`,
    type: 'checkbox',
    setFieldName: false,
    formGroup: SIDeclarationsFormGroup,
  },
  size: 12,
};

export const BussDiagnoseSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'bussDiagnoseSpec',
    fieldName: `Have you ever been diagnosed with or treated for heart disease, stroke, cancer, tumor or lump of any kind, diabetes, chronic kidney disease, COPD, HIV, seizures or any disease of the brain or nervous system, any mental or psychiatric illness, or any physical impairment or disability?`,
    type: 'checkbox',
    setFieldName: false,
    formGroup: SIDeclarationsFormGroup,
  },
  size: 12,
};

export const exDiseaseSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'exDisease',
    fieldName: `In the past 2 years, aside from childbirth or minor ailments, have you been confined to any hospital or rehabilitation center for at least 3 consecutive days, or diagnosed with, or advised to seek medical treatment for any medical condition? Examples of minor ailments are common cold, flu, food poisoning (diarrhea).`,
    type: 'checkbox',
    setFieldName: false,
    formGroup: SIDeclarationsFormGroup,
  },
  size: 12,
};
