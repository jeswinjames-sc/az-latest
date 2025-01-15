import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { GenericFormSpecs } from '@form-specs/signature-page/generic-form-specs';
import {AOIRPQColumnGeneratorSpecs, IRPQRowBlocksSpecs} from '@form-specs/signature-page/ao-irpq-signature-page-form-specs';
import { IntermediaryFormGroup} from '@form-group/signature-page/signature-page-form-group';
import {signaturePad} from '@form-specs/signature-page/contents/signature-pad';
import {FormGroup} from '@angular/forms';

export const INTERMEDIARY_IRPQ: RowGeneratorSpecs = {
    columns: [{ text: 'Investor Risk Profile Questionnaire', size: 10 },
        {
            button: {
                fill: 'clear',
                color: 'primary',
                icon: 'document',
                function: () => {
                    signaturePad.show = false;
                    GenericFormSpecs.rows = INTERMEDIARY_IRPQ_TEMPLATE;

                }
            },
            size: 2
        }
    ], class: 'panel-listings'
};

export const INTERMEDIARY_IRPQ_TEMPLATE: RowGeneratorSpecs[] =  [
    {
        columns: [{ text: 'Investor Risk Profile Questionnaire' }],
        class: 'form-sub-section-title'
    },
    {
        columns: [
            {
                blocks: [IRPQRowBlocksSpecs]
            }
        ]
    },
    {
        columns: AOIRPQColumnGeneratorSpecs
    },
    {
        columns: [
            {
                button: {
                  title: 'View IRPQ',
                  color: 'primary',
                  shape: 'block',
                  fill: 'solid'
                },
                size: 4,
                offset: 8
            }
        ]
    },
    {
        columns: [
            {
                field: {
                    setFieldName: false,
                    attName: "irpqCheck",
                    fieldName: `I have read and understood...`,
                    type: "checkbox",
                    formGroup: IntermediaryFormGroup.get('submodules') as FormGroup
                }
            }
        ]
    }
];