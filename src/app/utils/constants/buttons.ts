import { ButtonSpecs } from '@models/specs/button-specs';
import { ICONS } from '@utils/constants/icon/icons';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';

export const BaseButton: ButtonSpecs = {
    color: 'primary',
    expand: 'full',
    shape: 'block',
    fill: 'solid'
}

export const AddDynamicTableRowButton: ButtonSpecs = {
    fill: 'solid',
    title: 'Add',
    color: 'primary',
    expand: 'full'
}

export const BaseCreateSIButton: ButtonSpecs = {
    fill: 'solid',
    title: 'Create SI',
    shape: 'round',
    icon: 'add',
    size: 3,
    pull: 2,
}

export const CreateSIButton: ColumnGeneratorSpecs = {
    button: {
        fill: 'solid',
        title: 'Create SI',
        icon: 'add'
    },
    size: 3,
}

export const BaseSearchButton: ButtonSpecs = {
    fill: 'clear',
    title: 'Search',
    shape: 'round',
    icon: 'search',
    size: 3,
    pull: 2,
}

export const BaseClearButton: ButtonSpecs = {
    title: 'Clear',
    method: 'cancel',
    shape: 'round',
    fill: 'clear',
    icon: 'close-circle',
    size: 3,
    pull: 2
}

export const BaseSortButton: ButtonSpecs = {
    title: 'Sort',
    method: 'cancel',
    shape: 'round',
    fill: 'clear',
    icon: 'funnel',
    size: 3,
    pull: 2
}

export const BaseViewButton: ButtonSpecs = {
    title: 'View',
    fill: 'solid',
    expand: 'full',
    size: 3,
    isPopover: true
}

export const BaseEditButton: ButtonSpecs = {
    title: 'Edit',
    color: 'primary',
    expand: 'full',
    shape: 'block',
    fill: 'solid'
}

export const BaseDeleteButton: ButtonSpecs = {
    title: 'Delete',
    color: 'danger',
    fill: 'solid',
    expand: 'full',
    size: 3,
    isPopover: true
}

export const BaseSubmitButton: ButtonSpecs = {
    title: 'Submit',
    color: 'primary',
    expand: 'full',
    shape: 'block',
    fill: 'solid'
}

export const DeleteIconButtonSpecs: ButtonSpecs = {
    fill: 'clear',
    color: 'danger',
    icon: ICONS.DELETE
}

export const OpenDocumentIconButtonSpecs: ButtonSpecs = {
    fill: 'clear',
    color: 'primary',
    icon: ICONS.OPEN_DOCUMENT
}

export const UploadImageIconButtonSpecs: ButtonSpecs = {
    fill: 'clear',
    color: 'primary',
    icon: ICONS.UPLOAD_IMAGE
}

export const PaymentIconButtonSpecs: ButtonSpecs = {
    fill: 'clear',
    color: 'primary',
    icon: ICONS.PAYMENT
}

export const VerifyPaymentIconButtonSpecs: ButtonSpecs = {
    fill: 'clear',
    color: 'primary',
    icon: ICONS.VERIFY_PAYMENT
}

export const EditDocumentIconButtonSpecs: ButtonSpecs = {
    fill: 'clear',
    color: 'primary',
    icon: ICONS.EDIT_DOCUMENT,
}

export const BaseEmailButton: ButtonSpecs = {
    color: 'primary',
    expand: 'full',
    shape: 'block',
    fill: 'solid'
}