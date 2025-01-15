import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { ApplicantOwnerFormGroup } from '@form-group/signature-page/signature-page-form-group';
import { GenericFormSpecs } from '@form-specs/signature-page/generic-form-specs';
import {signaturePad} from '@form-specs/signature-page/contents/signature-pad';
import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';

export const RNFContentRowGeneratorSpecs: Array<RowGeneratorSpecs> = [
        {
            columns: [
                {
                    field: {
                        setFieldName: false,
                        attName: "replacementNotificationFormCheck",
                        fieldName: `I have read and understood...`,
                        type: "checkbox",
                        formGroup: ApplicantOwnerFormGroup,
                        isRequired: true
                    }
                }
            ]
        }
    ]

export const RNFRowGeneratorSpecs: RowGeneratorSpecs = {
	columns: [
	    { text: 'Replacement Notification Form', size: 10 },
	    {
	        button: {
	            fill: 'clear',
	            color: 'primary',
	            icon: 'document',
	            function: () => {
                signaturePad.show = false;
                GenericFormSpecs.rows = RNFContentRowGeneratorSpecs;
	            }
	        },
	        size: 2
	    }
	],
	class: 'panel-listings'
}

  export const PITextSpecs: ColumnGeneratorSpecs = {
    text: 'Proposed Insured: ',
    size: 4
  }

  export const PISpecs: ColumnGeneratorSpecs = {
    size: 8
  }

  export const addressTextSpecs: ColumnGeneratorSpecs = {
    text: 'Address: ',
    size: 4
  }

  export const addressSpecs: ColumnGeneratorSpecs = {
    size: 8
  }

  export const DOBTextSpecs: ColumnGeneratorSpecs = {
    text: 'Date of Birth: ',
    size: 4
  }

  export const DOBSpecs: ColumnGeneratorSpecs = {
    size: 8
  }

  export const AOTextSpecs: ColumnGeneratorSpecs = {
    text: 'Applicant Owner: ',
    size: 4
  }

  export const AOSpecs: ColumnGeneratorSpecs = {
    size: 8
  }

  export const documentRNFFormSpecs: FormGeneratorSpecs = {
    rows: [
      {
        columns: [
          PITextSpecs,
          PISpecs,
          DOBTextSpecs,
          DOBSpecs
        ]
      },
      {
        columns: [
          addressTextSpecs,
          addressSpecs
        ]
      },
      {
        class: 'mb-4',
        columns: [
          AOTextSpecs,
          AOSpecs
        ]
      }
    ]
  }