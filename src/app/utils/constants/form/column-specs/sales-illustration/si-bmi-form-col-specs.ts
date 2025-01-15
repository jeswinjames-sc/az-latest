import { SIBMIFormGroup } from '@form-group/sales-illustration/si-bmi-form-group';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';

export const BMIMeasurementSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'bmiMeasurementSystem',
    fieldName: 'Measurement System:',
    type: 'segment',
    setFieldName: true,
    options: [{
      key: 'M',
      value: 'Metric'
    },
    {
      key: 'E',
      value: 'English'
    }],
    formGroup: SIBMIFormGroup
  },
  size: 6,
};

export const BMIHeightCMSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'bmiHeightInCm',
    fieldName: 'Height in cm:',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: SIBMIFormGroup,
    inputmode: 'numeric',
  },
  size: 4,
};

export const BMIHeightFTSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'bmiHeightInFt',
    fieldName: 'Height in ft:',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: SIBMIFormGroup,
    inputmode: 'numeric',
  },
  size: 3,
  offset: 2
};

export const BMIHeightInchesSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'bmiHeightInInches',
    fieldName: 'in',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: SIBMIFormGroup,
    inputmode: 'numeric',
  },
  size: 3
};

export const BMIWeightKgSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'bmiWeightInKg',
    fieldName: 'Weight in kg:',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: SIBMIFormGroup,
    inputmode: 'numeric',
  },
  size: 4,
};

export const BMIWeightLbsSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'bmiWeightInlbs',
    fieldName: 'Weight in lbs:',
    attMaxLength: '50',
    type: 'text',
    setFieldName: true,
    formGroup: SIBMIFormGroup,
    inputmode: 'numeric',
  },
  size: 4,
  offset: 2
};

export const BMI_SPECS = [BMIHeightCMSpec, BMIHeightFTSpec, BMIHeightInchesSpec, BMIWeightKgSpec, BMIWeightLbsSpec];

export const BMITotalSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'bmiTotal',
    fieldName: 'BMI:',
    type: 'text',
    setFieldName: true,
    formGroup: SIBMIFormGroup,
    isDisabled: true
  },
  size: 4,
};

export const PreviousBMIButtonColumnSpecs: ColumnGeneratorSpecs = {
  button: {
    title: 'Previous',
    color: 'primary',
    shape: 'block',
    fill: 'clear'
  },
  size: 4,
  offset: 2
};

export const CustomizeBMIButtonColumnSpecs: ColumnGeneratorSpecs = {
  button: {
    title: 'Customize your Product',
    color: 'primary',
    shape: 'block',
    fill: 'solid'
  },
  size: 4
};
