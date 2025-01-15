import { GenericFormSpecs } from '@form-specs/signature-page/generic-form-specs';
import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { CERTIFICATE_OF_INTERIM_COVERAGE } from '@form-specs/signature-page/contents/certificate-of-interim-coverage';
import { ApplicantOwnerFormGroup } from '@form-group/signature-page/signature-page-form-group';
import {signaturePad} from '@form-specs/signature-page/contents/signature-pad';

export const APPLICANT_OWNER_CERTIFICATE_OF_INTERIM: RowGeneratorSpecs = {
    columns: [{ text: 'Certificate of Interim Coverage', size: 10 },
        {
            button: {
                fill: 'clear',
                color: 'primary',
                icon: 'document',
                function: () => {
                  signaturePad.show = false;
                  GenericFormSpecs.rows = CERTIFICATE_OF_INTERIM_TEMPLATE;
                }
            },
            size: 2
        }
    ], class: 'panel-listings'
};

export const CERTIFICATE_OF_INTERIM_TEMPLATE: RowGeneratorSpecs[] = [
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
            formGroup:  ApplicantOwnerFormGroup
          }
        }
      ]
    }
];