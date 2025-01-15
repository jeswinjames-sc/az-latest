import { CERTIFICATE_OF_INTERIM_COVERAGE } from '@form-specs/signature-page/contents/certificate-of-interim-coverage';
import { ProposedInsuredFormGroup } from '@form-group/signature-page/signature-page-form-group';

export const PROPOSED_INSURED_CERTIFICATE_OF_INTERIM_CONTENT =  [
  {
    columns: [{ text: 'Certificate of Interim Coverage' }],
    class: 'form-sub-section-title'
  },
  {
    columns: [
      {
        template: CERTIFICATE_OF_INTERIM_COVERAGE
      }
    ]
  },
  {
    columns: [
      {
        field: {
          setFieldName: false,
          attName: "certificateOfInterimCheck",
          fieldName: `I have read and understood...`,
          type: "checkbox",
          formGroup:  ProposedInsuredFormGroup
        }
      }
    ]
  }
];
