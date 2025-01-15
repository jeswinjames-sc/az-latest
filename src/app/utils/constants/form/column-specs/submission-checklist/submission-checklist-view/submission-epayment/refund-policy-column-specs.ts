import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';

export const PolicyRefundToggleSpecs: RowGeneratorSpecs = {
    columns: [
        {
            button: {
                fill: 'clear',
                color: 'dark',
                icon: 'arrow-dropright'
            },
            size: 1
        },
        {
            text: 'Refund Policy',
            size: 11,
            class: 'ion-text-left'
        }
    ]
}

export const PolicyRefundContentSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'policy-content',
            columns: [
                {
                    template: `After reading the Policy Contract and you don't agree to any of its terms or 
                    conditions, you have the option to cancel and return it to us within fifteen (15) days 
                    from the date you received it. We will refund the intial premiums you have paid.`
                }
            ]
        }
    ]
}

