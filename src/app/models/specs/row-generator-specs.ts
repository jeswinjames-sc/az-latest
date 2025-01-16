import { ColumnGeneratorSpecs } from './column-generator-specs';

export interface RowGeneratorSpecs {
    class?: string,
    columns: Array<ColumnGeneratorSpecs>
    isHidden?: boolean
}

export const isRowGeneratorSpecs = (obj: any): obj is RowGeneratorSpecs => {
    return (obj as RowGeneratorSpecs).columns !== undefined
}