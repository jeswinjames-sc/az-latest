import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import * as BMISpec from '@form/column-specs/sales-illustration/si-bmi-form-col-specs';


export const SIBMIFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [{ text: 'Body Mass Index' }],
      class: 'form-sub-section-title'
    },
    {
      columns: [
        BMISpec.BMIMeasurementSpec
      ]
    },
    {
      columns: [
        BMISpec.BMIHeightCMSpec,
        BMISpec.BMIHeightFTSpec,
        BMISpec.BMIHeightInchesSpec,
      ]
    },
    {
      columns: [
        BMISpec.BMIWeightKgSpec,
        BMISpec.BMIWeightLbsSpec,
      ]
    },
    {
      columns: [
        BMISpec.BMITotalSpec,
      ]
    }
  ]
};

export const SIBMIButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        BMISpec.PreviousBMIButtonColumnSpecs,
        BMISpec.CustomizeBMIButtonColumnSpecs
      ]
    }
  ]
};
