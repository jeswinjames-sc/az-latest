import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';

export const BasicLeadInstruction: ColumnGeneratorSpecs = {
  text: 'To create a Lead, you only need to give the details below:',
  class: 'form-sub-section-title ion-padding-bottom'
};

export const ReferredByBankPartner: ColumnGeneratorSpecs = {
  template: '<span>Was this lead referred by your bank partner?</span>',
  size: 6
}

export const PersonalInformation: ColumnGeneratorSpecs = {
  text: 'Personal Information',
  class: 'form-sub-section-title ion-padding-bottom'
};

export const PresentAddress: ColumnGeneratorSpecs = {
  text: 'Present Address',
  class: 'form-sub-section-title ion-padding-bottom'
};

export const WorkInformation: ColumnGeneratorSpecs = {
  text: 'Work Details',
  class: 'form-sub-section-title ion-padding-bottom'
};

export const Consent: ColumnGeneratorSpecs = {
  template: '<h4>Consent</h4>',
  size: 3
};

export const ConsentDescription: ColumnGeneratorSpecs = {
  template: `<p>I hereby confirm that the client has been
  referred to me by the bank and has agreed to discuss with me their financial needs.</p>`,
};

export const ApplicantOwnerSection: ColumnGeneratorSpecs = {
  text: 'Applicant Owner Information',
  class: 'form-sub-section-title ion-padding-bottom',
}

export const ProposedInsuredInfoSection: ColumnGeneratorSpecs = {
  text: 'Proposed Insured Info',
  class: 'form-group-title',
}

export const IsAoSameAsPiSection: ColumnGeneratorSpecs = {
  template: '<span>Is the Application Owner same as Proposed Insured?</span>',
  size: 6,
  class: 'isAoEqualsToPi-label-v2'
}

export const ClassificationSection: ColumnGeneratorSpecs = {
  template: '<span>Classification</span>',
  size: 6
}

export const LifeIsAoSameAsPiSection: ColumnGeneratorSpecs = {
  template: '<span>Is the Application Owner same as Proposed Insured?</span>',
  size: 4
}

export const LifeClassificationSection: ColumnGeneratorSpecs = {
  template: '<span>Classification</span>',
  size: 2
}

export const PresentAddressSection: ColumnGeneratorSpecs = {
  text: 'Present Address',
  class: 'form-sub-section-title ion-padding-bottom',
}

export const WorkAddressSection: ColumnGeneratorSpecs = {
  text: 'Work Address',
  class: 'form-sub-section-title ion-padding-bottom',
}
