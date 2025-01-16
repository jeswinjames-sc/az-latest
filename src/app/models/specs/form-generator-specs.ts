import { RowGeneratorSpecs } from './row-generator-specs';
export interface FormGeneratorSpecs {
  rows: Array<RowGeneratorSpecs>,
  isHidden?: boolean
}

export const isFormGeneratorSpecs = (obj: any): obj is FormGeneratorSpecs => {
  return (obj as FormGeneratorSpecs).rows !== undefined
}