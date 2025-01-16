import { FieldSpecs } from '@models/specs/field-specs';
import { ButtonSpecs } from '@models/specs/button-specs';
import { RowBlocksSpecs } from '@models/blocks';
import { SIProduct } from '@models/sales-illustration/si-product';

export interface ColumnGeneratorSpecs {
    size?: number
    push?: number
    offset?: number
    pull?: number
    field?: FieldSpecs
    text?: string
    button?: ButtonSpecs
    template?: string
    blocks?: RowBlocksSpecs[]
    class?: string
    product?: SIProduct
    isHidden?: boolean,
    isTextWrap?: boolean
    setTextAsRequired?: boolean,
    isDashboardV2?: boolean
}

export const isFieldColumnGeneratorSpecs = (obj: any): obj is ColumnGeneratorSpecs => {
    return (obj as ColumnGeneratorSpecs).field !== undefined
}