import { FormGroup } from '@angular/forms';
import { FieldSpecs } from './specs/field-specs';
import { FormGeneratorSpecs } from './specs/form-generator-specs';
import { RowGeneratorSpecs } from './specs/row-generator-specs';
import { ColumnGeneratorSpecs } from './specs/column-generator-specs';
import { DynamicTableSpecs } from './specs/dynamic-table-specs';

export interface FieldDisablingCondition {
    formCtrl?: string;
    operation: 'equal' | 'notEqual' | 'greaterThan' | 'lessThan' | 'greaterEqual' | 'lessEqual';
    value: string | number | boolean;
}

export interface FieldDisablingParams {
    formGroup: FormGroup;
    fieldDependency: { field: FieldSpecs, conditions?: FieldDisablingCondition[], isDisabled?: boolean }
    affectedComponents: (ColumnGeneratorSpecs | DynamicTableSpecs | RowGeneratorSpecs | FieldSpecs | string)[];
    conditionalOperator?: 'or'| 'and'
    customCondition?: () => void; // * temporary addtl condition
}