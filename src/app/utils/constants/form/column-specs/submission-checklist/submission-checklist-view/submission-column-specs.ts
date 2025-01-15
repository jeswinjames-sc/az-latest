import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs'
import { ID_TYPE } from '@utils/constants/options/select/id-type'
import { SubmissionFormGroup } from '@utils/constants/form/form-groups/submission-checklist/submission-checklist-view-form-group'
import { ICONS } from '@utils/constants/icon/icons'
import { ONLINE_PAYMENT_SEGMENT } from '@utils/constants/submission-checklist/options/segments/online-payment-segment'
import { ONLINE_PAYMENT_RELATIONSHIP } from '@utils/constants/options/select/submission-checklist/online-payment-relationship'
import { GENDER } from '@utils/constants/options/segment/gender'
import { LIST_OF_COUNTRIES } from '@utils/constants/options/select/list-of-countries';
import { NATIONALITY } from '@utils/constants/options/select/nationality';

export const CreditCardIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const CreditCardSpecs: ColumnGeneratorSpecs = {
    text: 'Authorization to Charge Premium from Credit Card',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const CreditCardButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const CreditCardButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const CreditCardButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const EnrollIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const EnrollSpecs: ColumnGeneratorSpecs = {
    text: 'Auto Debit Arrangement Enrollment Form',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const EnrollButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const EnrollButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const EnrollButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const SalaryDeductionIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const SalaryDeductionSpecs: ColumnGeneratorSpecs = {
    text: 'Authorization for Premium Deduction',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const SalaryDeductionButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const SalaryDeductionButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const SalaryDeductionButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const PoRIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const PoRSpecs: ColumnGeneratorSpecs = {
    text: 'Proof of Relationship',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const PoRButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const PoRButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const PoRButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const PoPUseSpecs: ColumnGeneratorSpecs = {
    text: 'Pay Online',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const PoPButtonToggleSpecs: ColumnGeneratorSpecs = {
    class: 'online-payment-toggle',
    field: {
        attName: 'PoPType',
        setFieldName: false,
        type: 'toggle',
        formGroup: SubmissionFormGroup
    },
    size: 6,
}

export const PoPOnlineIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const PoPOnlineSpecs: ColumnGeneratorSpecs = {
    text: 'Credit / Debit Card',
    size: 8,
    class: 'v-middle',
    isTextWrap: true
}

export const PoPOnlineButtonPaySpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.PAYMENT
    },
    size: 2
}

export const PoPOnlineButtonVerifySpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.VERIFY_PAYMENT
    },
    size: 2
}

export const PoPIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const PoPSpecs: ColumnGeneratorSpecs = {
    text: 'Proof of Payment',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const PoPButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const PoPButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const PoPButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const CHValidIdIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const CHValidIdSpecs: ColumnGeneratorSpecs = {
    text: "Card Holder Valid ID",
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const CHValidIdButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const CHValidIdButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const CHValidIdButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const CHValidIdIdTypeTextSpecs: ColumnGeneratorSpecs = {
    text: 'ID Type',
    size: 4,
    offset: 1,
    class: 'v-middle',
    isTextWrap: true
}

export const CHValidIdExpDateTextSpecs: ColumnGeneratorSpecs = {
    text: 'ID Expiration Date',
    size: 4,
    offset: 1,
    class: 'v-middle',
    isTextWrap: true
}

export const CHValidIdDOBTextSpecs: ColumnGeneratorSpecs = {
    text: 'Card Holder Valid ID',
    size: 4,
    offset: 1,
    class: 'v-middle',
    isTextWrap: true
}

export const CHValidIdDOBSpecs: ColumnGeneratorSpecs = {
    text: 'Card Holder Valid ID',
    size: 4,
    offset: 1,
    class: 'v-middle',
    isTextWrap: true
}

export const RefNumberTextSpecs: ColumnGeneratorSpecs = {
    text: 'Reference Number',
    size: 6,
}

export const RefNumberInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'refNumber',
        type: 'text',
        setFieldName: false,
        attMaxLength: '30',
        formGroup: SubmissionFormGroup
    },
    size: 6
}

export const AgentsReportFiller: ColumnGeneratorSpecs = {
    text: "",
    size: 2,
    class: 'v-middle',
    isTextWrap: true
}

export const AgentsReportTextSpecs: ColumnGeneratorSpecs = {
    text: 'Agent\'s Report',
    size: 8,
}

export const AgentsReportInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'agentsReport',
        type: 'textarea',
        setFieldName: false,
        attMaxLength: '1000',
        formGroup: SubmissionFormGroup
    },
    size: 8
}

export const CHValidIdTypeInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'chValidIdType',
        type: 'select',
        fieldName: 'ID Type',
        setFieldName: false,
        idType: ID_TYPE.sort((a,b) => a.value.localeCompare(b.value)),
        interface: 'popover',
        formGroup: SubmissionFormGroup
    },
    size: 7,
    class: 'id-adjust'
}

export const CHValidIdExpDateSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'chValidIdExpDate',
        type: 'date',
        setFieldName: false,
        formGroup: SubmissionFormGroup,
        isExpiredIDField: true
    },
    size: 7,
}

export const ValidIDAOIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const ValidIDAOSpecs: ColumnGeneratorSpecs = {
    text: "Valid ID (AO)",
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const ValidIDAOButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const ValidIDAOButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const ValidIDAOButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const BancaReferralFormIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const bancaSalesChecklistFormIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const BancaReferralFormSpecs: ColumnGeneratorSpecs = {
    text: "Banca Referral Form",
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const bancaSalesChecklistFormSpecsLabel: ColumnGeneratorSpecs = {
    text: "Banca Sales Checklist Form",
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const BancaReferralFormButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const bancaSalesChecklistFormButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const BancaReferralFormButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const bancaSalesChecklistFormButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const BancaReferralFormButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}
export const bancaSalesChecklistFormButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const ValidIDAOIdTypeTextSpecs: ColumnGeneratorSpecs = {
    text: 'ID Type',
    size: 4,
    offset: 1,
    class: 'v-middle',
    isTextWrap: true
}

export const ValidIDAODOBTextSpecs: ColumnGeneratorSpecs = {
    text: 'Birth Date on ID',
    size: 4,
    offset: 1,
    class: 'v-middle',
    isTextWrap: true
}

export const ValidIDAOExpDateTextSpecs: ColumnGeneratorSpecs = {
    text: 'ID Expiration Date',
    size: 4,
    offset: 1,
    class: 'v-middle',
    isTextWrap: true
}

export const ValidIDAOTypeSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'validIdAOType',
        type: 'select',
        fieldName: 'ID Type',
        setFieldName: false,
        idType: ID_TYPE.sort((a,b) => a.value.localeCompare(b.value)),
        interface: 'popover',
        formGroup: SubmissionFormGroup,
    },
    size: 7,
    class: 'id-adjust'
}

export const ValidIDAOExpDateSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'validIdAOExpDate',
        type: 'date',
        setFieldName: false,
        formGroup: SubmissionFormGroup,
        isExpiredIDField: true
    },
    size: 7,
}

export const ValidIDAODOBSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'validIdAODOB',
        type: 'date',
        setFieldName: false,
        formGroup: SubmissionFormGroup,
        isAgeField: true
    },
    size: 7,
}

export const ValidIDPIIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const ValidIDPISpecs: ColumnGeneratorSpecs = {
    text: "Valid ID (PI)",
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const ValidIDPIButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const ValidIDPIButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const ValidIDPIButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const ValidIDPIIdTypeTextSpecs: ColumnGeneratorSpecs = {
    text: 'ID Type',
    size: 4,
    offset: 1,
    class: 'v-middle',
    isTextWrap: true
}

export const ValidIDPIDOBTextSpecs: ColumnGeneratorSpecs = {
    text: 'Birth Date on ID',
    size: 4,
    offset: 1,
    class: 'v-middle',
    isTextWrap: true
}

export const ValidIDPIExpDateTextSpecs: ColumnGeneratorSpecs = {
    text: 'ID Expiration Date',
    size: 4,
    offset: 1,
    class: 'v-middle',
    isTextWrap: true
}

export const ValidIDPITypeSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'validIdPIType',
        type: 'select',
        fieldName: 'ID Type',
        setFieldName: false,
        idType: ID_TYPE.sort((a,b) => a.value.localeCompare(b.value)),
        interface: 'popover',
        formGroup: SubmissionFormGroup
    },
    size: 7,
    class: 'id-adjust'
}

export const ValidIDPIExpDateSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'validIdPIExpDate',
        type: 'date',
        setFieldName: false,
        formGroup: SubmissionFormGroup,
        isExpiredIDField: true
    },
    size: 7,
}

export const ValidIDPIDOBSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'validIdPIDOB',
        type: 'date',
        setFieldName: false,
        formGroup: SubmissionFormGroup
    },
    size: 7,
}

export const POAOIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const POAOSpecs: ColumnGeneratorSpecs = {
    text: "Attached Image/PDF",
    size: 10,
    class: 'v-middle',
    isTextWrap: true
}

export const POAO1Specs: ColumnGeneratorSpecs = {
    text: "Image/PDF Placeholder 1",
    size: 8,
    class: 'v-middle',
    isTextWrap: true
}

export const POAO1ButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2
}

export const POAO1Filler: ColumnGeneratorSpecs = {
    text: "",
    size: 2,
    class: 'v-middle',
    isTextWrap: true
}

export const POAO1ButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const POAO1ButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const POAO2Specs: ColumnGeneratorSpecs = {
    text: "Image/PDF Placeholder 2",
    size: 8,
    class: 'v-middle',
    isTextWrap: true
}

export const POAO2ButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2
}

export const POAO2Filler: ColumnGeneratorSpecs = {
    text: "",
    size: 2,
    class: 'v-middle',
    isTextWrap: true
}

export const POAO2ButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const POAO2ButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const POAO3Specs: ColumnGeneratorSpecs = {
    text: "Image/PDF Placeholder 3",
    size: 8,
    class: 'v-middle',
    isTextWrap: true
}

export const POAO3ButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2
}

export const POAO3Filler: ColumnGeneratorSpecs = {
    text: "",
    size: 2,
    class: 'v-middle',
    isTextWrap: true
}

export const POAO3ButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const POAO3ButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const POAO4Specs: ColumnGeneratorSpecs = {
    text: "Image/PDF Placeholder 4",
    size: 8,
    class: 'v-middle',
    isTextWrap: true
}

export const POAO4ButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2
}

export const POAO4Filler: ColumnGeneratorSpecs = {
    text: "",
    size: 2,
    class: 'v-middle',
    isTextWrap: true
}

export const POAO4ButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const POAO4ButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const KYCIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const KYCSpecs: ColumnGeneratorSpecs = {
    text: "Attached Image/PDF",
    size: 10,
    class: 'v-middle',
    isTextWrap: true
}

export const KYC1Specs: ColumnGeneratorSpecs = {
    text: "Image/PDF Placeholder 1",
    size: 8,
    class: 'v-middle',
    isTextWrap: true
}

export const KYC1ButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2
}

export const KYC1Filler: ColumnGeneratorSpecs = {
    text: "",
    size: 2,
    class: 'v-middle',
    isTextWrap: true
}

export const KYC1ButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const KYC1ButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const KYC2Specs: ColumnGeneratorSpecs = {
    text: "Image/PDF Placeholder 2",
    size: 8,
    class: 'v-middle',
    isTextWrap: true
}

export const KYC2ButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2
}

export const KYC2Filler: ColumnGeneratorSpecs = {
    text: "",
    size: 2,
    class: 'v-middle',
    isTextWrap: true
}

export const KYC2ButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const KYC2ButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const KYC3Specs: ColumnGeneratorSpecs = {
    text: "Image/PDF Placeholder 3",
    size: 8,
    class: 'v-middle',
    isTextWrap: true
}

export const KYC3ButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2
}

export const KYC3Filler: ColumnGeneratorSpecs = {
    text: "",
    size: 2,
    class: 'v-middle',
    isTextWrap: true
}

export const KYC3ButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const KYC3ButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const KYC4Specs: ColumnGeneratorSpecs = {
    text: "Image/PDF Placeholder 4",
    size: 8,
    class: 'v-middle',
    isTextWrap: true
}

export const KYC4ButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2
}

export const KYC4Filler: ColumnGeneratorSpecs = {
    text: "",
    size: 2,
    class: 'v-middle',
    isTextWrap: true
}

export const KYC4ButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const KYC4ButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const KYC5Specs: ColumnGeneratorSpecs = {
    text: "Image/PDF Placeholder 5",
    size: 8,
    class: 'v-middle',
    isTextWrap: true
}

export const KYC5ButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2
}

export const KYC5Filler: ColumnGeneratorSpecs = {
    text: "",
    size: 2,
    class: 'v-middle',
    isTextWrap: true
}

export const KYC5ButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const KYC5ButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const AuthorizedChildIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const AuthorizedChildSpecs: ColumnGeneratorSpecs = {
    text: 'Authorization to Insured Child',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const AuthorizedChildButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const AuthorizedChildButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const AuthorizedChildButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const AOConsentIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const AOConsentSpecs: ColumnGeneratorSpecs = {
    text: 'Addendum to Client Information and Application Owner Consent and Waiver Form',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const AOConsentButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const AOConsentButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const AOConsentButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const AOW8IsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const AOW8Specs: ColumnGeneratorSpecs = {
    text: 'FATCA W-8',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const AOW8ButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const AOW8ButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const AOW8ButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const AOW9IsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const AOW9Specs: ColumnGeneratorSpecs = {
    text: 'FATCA W-9',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const AOW9ButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const AOW9ButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const AOW9ButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const MedResultAOIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const MedResultAOSpecs: ColumnGeneratorSpecs = {
    text: 'Medical Results (Applicant Owner)',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const MedResultAOButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const MedResultAOButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const MedResultAOButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const MedResultPIIsAttachedSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'medium',
        icon: 'checkmark-circle'
    },
    size: 2,
    class: 'indication-align'
}

export const MedResultPISpecs: ColumnGeneratorSpecs = {
    text: 'Medical Results (Proposed Insured)',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const MedResultPIButtonCaptureSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.UPLOAD_IMAGE
    },
    size: 2,
    push: 2
}

export const MedResultPIButtonViewSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'primary',
        icon: ICONS.OPEN_IMAGE
    },
    size: 2
}

export const MedResultPIButtonDeleteSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'clear',
        color: 'danger',
        icon: ICONS.DELETE
    },
    size: 2
}

export const SubmissionSubmitButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        fill: 'solid',
        title: 'Submit',
        color: 'primary',
        expand: 'full',
        size: 3
    }
}

export const EPolicySpecs: ColumnGeneratorSpecs = {
    text: 'Use paper policy',
    size: 8,
    class: 'v-middle',
    isTextWrap: true
}

export const EPolicyToggleSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'ePolicy',
        setFieldName: false,
        type: 'toggle',
        formGroup: SubmissionFormGroup
    },
    size: 4,
}

//Compliance Requirements
export const PoPOnlineCHSameAsAOTextSpecs: ColumnGeneratorSpecs = {
    text: 'Cardholder is the same as Applicant Owner?',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const PoPOnlineCHSameAsAOToggleSpecs: ColumnGeneratorSpecs = {
    class: 'online-payment-toggle',
    field: {
        attName: 'PoPCHSameAsAO',
        setFieldName: false,
        type: 'segment',
        options: ONLINE_PAYMENT_SEGMENT,
        formGroup: SubmissionFormGroup
    },
    size: 6,
}

export const PoPOnlineCHRelationToAOTextSpecs: ColumnGeneratorSpecs = {
    text: 'Relationship of Cardholder to Applicant Owner',
    size: 12,
    class: 'v-middle',
    isTextWrap: true
}

export const PoPOnlineCHRelationToAOSelectSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'PoPCHRelationToAO',
        interface: 'popover',
        setFieldName: false,
        type: 'selectize',
        options: ONLINE_PAYMENT_RELATIONSHIP,
        formGroup: SubmissionFormGroup
    },
    size: 12,
}

export const CHDetailsTextSpecs: ColumnGeneratorSpecs = {
    text: 'Please input cardholder details:',
    size: 12,
    class: 'v-middle',
    isTextWrap: true
}

export const CHDOBTextSpecs: ColumnGeneratorSpecs = {
    text: 'Date of Birth',
    size: 5,
    class: 'v-middle',
    isTextWrap: true
}

export const CHDOBSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'CHDOB',
        type: 'date',
        setFieldName: false,
        formGroup: SubmissionFormGroup,
        isAgeField: true
    },
    size: 7,
}

export const CHGenderTextSpecs: ColumnGeneratorSpecs = {
    text: 'Gender',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const CHGenderSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'CHGender',
        type: 'segment',
        setFieldName: false,
        options: GENDER,
        formGroup: SubmissionFormGroup,
        isRequired: true
    },
    size: 6
};

export const CHNationalityTextSpecs: ColumnGeneratorSpecs = {
    text: 'Nationality',
    size: 5,
    class: 'v-middle',
    isTextWrap: true
}

export const CHNationalitySpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'CHNationality',
        type: 'selectize',
        setFieldName: false,
        options: NATIONALITY,
        interface: 'popover',
        formGroup: SubmissionFormGroup
    },
    size: 7,
}

export const CHPOBTextSpecs: ColumnGeneratorSpecs = {
    text: 'Place of Birth',
    size: 12,
    class: 'v-middle',
    isTextWrap: true
}

export const CHCountryTextSpecs: ColumnGeneratorSpecs = {
    text: 'Country',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const CHCountrySpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'pobCountry',
        type: 'select',
        setFieldName: false,
        interface: 'popover',
        formGroup: SubmissionFormGroup
    },
    size: 6,
}

export const CHProvinceTextSpecs: ColumnGeneratorSpecs = {
    text: 'Province',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const CHProvinceSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'pobProvince',
        type: 'selectize',
        setFieldName: false,
        interface: 'popover',
        formGroup: SubmissionFormGroup
    },
    size: 6,
}

export const CHCityTextSpecs: ColumnGeneratorSpecs = {
    text: 'City/Municipality',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const CHCitySpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'pobCity',
        type: 'selectize',
        setFieldName: false,
        interface: 'popover',
        formGroup: SubmissionFormGroup
    },
    size: 6,
}

export const ReferrorSpecs: ColumnGeneratorSpecs = {
    text: 'Was this lead referred by your bank partner?',
    size: 6,
    class: 'v-middle',
    isTextWrap: true
}

export const ReferrorToggleSpecs: ColumnGeneratorSpecs = {
    class: 'referror-toggle',
    field: {
        attName: 'referredByBankPartner',
        setFieldName: false,
        type: 'segment',
        options: ONLINE_PAYMENT_SEGMENT,
        formGroup: SubmissionFormGroup
    },
    size: 6,
}


