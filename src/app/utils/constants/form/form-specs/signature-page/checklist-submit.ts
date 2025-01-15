import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';

export const ChecklistSubmitButton: ColumnGeneratorSpecs = {
    offset: 3,
    size: 6,
    button: {
        fill: 'outline',
        color: 'primary',
        title: 'submission checklist',
        expand: 'block',
        function: () => {
        }
    }
}

export const SUBMISSION_CHECKLIST: RowGeneratorSpecs = {
    columns: [ ChecklistSubmitButton ], class: 'panel-listings'
}