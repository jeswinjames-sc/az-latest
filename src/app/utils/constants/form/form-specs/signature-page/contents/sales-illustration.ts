import {RowGeneratorSpecs} from '@models/specs/row-generator-specs';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import {GenericFormSpecs} from '@form-specs/signature-page/generic-form-specs';
import {FormBuilder} from '@angular/forms';

// to be removed
export const SALES_ILLUSTRATION: RowGeneratorSpecs = {
    columns: [{ text: 'Sales Illustration', size: 10 },
        {
            button: {
                fill: 'clear',
                color: 'primary',
                icon: 'document',
                function: () => {
                    GenericFormSpecs.rows = SALES_ILLUSTRATION_CONTENTS;
                }
            },
            size: 2
        }
    ], class: 'panel-listings'
};

export const ViewSalesIllustrationOutputButton: ColumnGeneratorSpecs = {
    button: {
      title: 'View SI',
      color: 'primary',
      shape: 'block',
      fill: 'solid'
    },
    size: 4,
    offset: 8
}

export const SALES_ILLUSTRATION_CONTENTS: RowGeneratorSpecs[] =   [
    {
        columns: []
    },
];
