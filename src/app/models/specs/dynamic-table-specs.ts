import { FormGroup } from '@angular/forms';
import { FormGeneratorSpecs } from './form-generator-specs';
import { FieldSpecs } from './field-specs';
import { DefaultValues } from '@utils/constants/default-values';
import { ColumnGeneratorSpecs } from './column-generator-specs';


export interface DynamicTableSpecs {
    mainFormGroup: FormGroup
    formArrayKey: string
    secondaryFormGroup: FormGroup,
    controlConfiguration: {}
    title?: string
    subTitle?: string
    limit: number
    //required
    readOnly?: boolean
    hasShowMore?: boolean
    additionalValMsg?: string[]
    customSaveButtonName?: string
    availableActions?: {
        add: boolean,
        edit: boolean,
        save: boolean,
        delete: boolean
    }
    formGeneratorSpecs?: FormGeneratorSpecs
    columns?: {
        formGrpCtrlName?: string,
        columnName: string,
        field?: FieldSpecs,
        mapper?: {}
    }[],
    rowSelected?: number
    tableForeignKey?: string
    reloadNotNeeded?: boolean
    isHidden?: boolean,
    deleteConfirmationMessage?: string,
    defaultValue?: DefaultValues[],
    callbackFn?: any
    hasSingleBene?: boolean,
    applicantOwner?: FormGroup,
    estateBeneSubTitle?: string,
    estateCheckBoxColSpecs1?: ColumnGeneratorSpecs,
    estateBeneFormGeneratorSpecs?: FormGeneratorSpecs,
    estateBeneColumns?: {
        formGrpCtrlName?: string,
        columnName: string,
        field?: FieldSpecs,
        mapper?: {}
    }[],
}

export const isDynamicTableSpecs = (obj: any): obj is DynamicTableSpecs => {
    return (obj as DynamicTableSpecs).mainFormGroup !== undefined && (obj as DynamicTableSpecs).formArrayKey !== undefined
}
