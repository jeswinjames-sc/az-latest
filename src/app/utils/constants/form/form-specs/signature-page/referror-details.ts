import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { IntermediaryFormGroup } from '@form-group/signature-page/signature-page-form-group';
import { GenericFormSpecs } from '@form-specs/signature-page/generic-form-specs';
import { signaturePad } from '@form-specs/signature-page/contents/signature-pad';
import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { FormGroup } from '@angular/forms';

export const ReferrorFormGroup: FormGroup = IntermediaryFormGroup.get('submodules.referrorDetails') as FormGroup;

export const REFERROR_AND_REFERRING_BRANCH_DETAILS: Array<RowGeneratorSpecs> = [
  {
    columns: [{ text: 'Referror and Referring Branch Details' }],
    class: 'form-sub-section-title'
  },
  {
    columns: [
      {
        size: 6,
        field: {
          type: 'readOnly',
          attName: 'fullName',
          formGroup: ReferrorFormGroup,
          setFieldName: true,
          fieldName: `Referror's Name`,
          options: null
        }
      },
      {
        size: 6,
        field: {
          type: 'readOnly',
          attName: 'referrorCode',
          formGroup: ReferrorFormGroup,
          setFieldName: true,
          fieldName: `Referror's Code`
        }
      }
    ]
  },
  {
    columns: [
      {
        size: 6,
        field: {
          type: 'readOnly',
          attName: 'branchName',
          formGroup: ReferrorFormGroup,
          setFieldName: true,
          fieldName: `Branch Name`
        }
      },
      {
        size: 6,
        field: {
          type: 'readOnly',
          attName: 'branchCode',
          formGroup: ReferrorFormGroup,
          setFieldName: true,
          fieldName: `Branch Code`
        }
      }
    ]
  }
]

export function updateReferrorList(referrorList: any[]){
  REFERROR_AND_REFERRING_BRANCH_DETAILS[1].columns[0].field.options = !!referrorList ? referrorList : null;
}