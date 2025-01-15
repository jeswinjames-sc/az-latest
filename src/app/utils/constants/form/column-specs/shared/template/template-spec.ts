import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';

export const Section1: ColumnGeneratorSpecs = {
  template: '<h1>1. Personal Information</h1>',
  size: 12
};

export const Section2: ColumnGeneratorSpecs = {
  template: '<h1>2. Work Information</h1>',
  size: 12
};

export const Consent: ColumnGeneratorSpecs = {
  template: '<h4>Consent</h4>',
  size: 3
};

export const ConsentDescription: ColumnGeneratorSpecs = {
  template: `<p>I hereby confirm that the client has been
  referred to me by the bank and has agreed to discuss with me their financial needs.</p>`,
  size: 12
};

export const FundDescription: ColumnGeneratorSpecs = {
  size: 12
}

export const HistoricalNavpuDescription: ColumnGeneratorSpecs = {
  size: 12
}