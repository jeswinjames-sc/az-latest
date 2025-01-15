import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { IntermediaryFormGroup } from '@form-group/signature-page/signature-page-form-group';
import { GenericFormSpecs } from '@form-specs/signature-page/generic-form-specs';
import { signaturePad } from '@form-specs/signature-page/contents/signature-pad';
import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { FormGroup } from '@angular/forms';
import { BOOLEAN } from '@utils/constants/options/segment/boolean';

export const ReplaceExistingPoliciesFormGroup: FormGroup = IntermediaryFormGroup.get('submodules.replaceExistingPolicies') as FormGroup;

export const REPLACE_EXISTING_POLICIES_ROWSPECS: Array<RowGeneratorSpecs> = [
  {
    columns: [{ text: 'Declaration on the Proposed Replacement of Existing Policy(ies)' }],
    class: 'form-sub-section-title'
  },
  {
    columns: [
	  {
	    text: `Is the Policy applied for intended to change
	           or replace any existing insurance in force on the
	           life of Proposed Insured?`,
        size: 8
	  },
      {
        size: 4,
        field: {
          type: 'segment',
          attName: 'intmPolicyIntendedToChange',
          formGroup: ReplaceExistingPoliciesFormGroup,
          options: BOOLEAN
        }
      },
      {
          text: `Will premiums for the insurance applied for
              be paid by a policy loan, withdrawal, or surrender
              from any existing policy?`,
          size: 8
      },
      {
        size: 4,
        field: {
          type: 'segment',
          attName: 'intmPremiumsPaidByLoan',
          formGroup: ReplaceExistingPoliciesFormGroup,
          options: BOOLEAN
        }
      }
    ]
  }
] 