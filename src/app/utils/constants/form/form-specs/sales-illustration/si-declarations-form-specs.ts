import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import * as DeclarationSpec from '@form/column-specs/sales-illustration/si-declarations-form-col-specs';

export const SIDeclarationFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [{ text: 'Sales Illustration Declarations' }],
      class: 'form-sub-section-title'
    },
    {
      columns: [
        DeclarationSpec.ForMultipleDiseaseSpec
      ]
    },
    {
      columns: [
        DeclarationSpec.HadMultipleDiseaseSpec
      ]
    },
    {
      columns: [
        DeclarationSpec.BussMedAttSpec
      ]
    },
    {
      columns: [
        DeclarationSpec.BussDiagnoseSpec
      ]
    },
    {
      columns: [
        DeclarationSpec.exDiseaseSpec
      ]
    },
  ]
};
