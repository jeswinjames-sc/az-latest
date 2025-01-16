import { ConfigDetailsFormGroup, SettingsFormGroup } from "@utils/constants/form/form-groups/controls/settings";
import { ColumnGeneratorSpecs } from "@models/specs/column-generator-specs";
import { FormGeneratorSpecs } from "@models/specs/form-generator-specs";
import { RowGeneratorSpecs } from "@models/specs/row-generator-specs";

export const BackgroundSyncFieldSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'bgSync',
        type: 'toggle',
        // setFieldName: false,
        formGroup: SettingsFormGroup
    },
    size: 6
};

export const BackgroundSyncTitle: ColumnGeneratorSpecs = {
    size: 6,
    text: 'Background Sync'
};

export const BackGroundRowSpecs: RowGeneratorSpecs = {
    columns: [
        BackgroundSyncTitle,
        BackgroundSyncFieldSpecs
    ]
}

export const SettingFormSpecs: FormGeneratorSpecs = {
    rows: [
        BackGroundRowSpecs
    ]
};

export const ConfigDetails: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{text : 'Agent Details'}],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'name',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Agent Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'channel',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Channel'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'agentId',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Agent ID'
                    }
                },
            ],
        },
        {
            columns: [{text : 'Variable License Details'}],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'variableLicenseType',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'License Type'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'variableLicenseIssueDate',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Issue Date'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'variableLicenseStartDate',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Start Date'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'variableLicenseEndDate',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'End Date'
                    }
                },
            ]
        },
        {
            columns: [{text : 'Traditional License Details'}],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'tradLicenseType',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'License Type'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'tradLicenseIssueDate',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Issue Date'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'tradLicenseStartDate',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Start Date'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'tradLicenseEndDate',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'End Date'
                    }
                }
            ]
        },
        {
            columns: [{text : 'Referror Details'}],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'selectize',
                        interface: 'popover',
                        attName: 'referrorName',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Referror Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'selectize',
                        interface: 'popover',
                        attName: 'branchName',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Branch Name'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'branchCode',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Branch Code'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'referrorCode',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Referror Code'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'statusCode',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Status Code'
                    }
                },
            ]
        },
        {
            columns: [{text : 'Module Full Sync Details'}],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'fullSyncProgress',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Fullsync Progress'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'leadsFullSyncStatus',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Leads'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'naFullSyncStatus',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Needs Analysis'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'irpqFullSyncStatus',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'IRPQ'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'siFullSyncStatus',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Sales Illustration'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'eappFullSyncStatus',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'E-App'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'checklistFullSyncStatus',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Checklist'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'referrorFullSyncStatus',
                        attMaxLength: 30,
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Referror'
                    }
                }
            ]
        },
        {
            columns: [{text : 'Step Tracking'}],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                {
                    size: 12,
                    field: {
                        type: 'textarea',
                        attName: 'trackingLog',
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Tracking log',
                        attMaxLength: '9999999999999999999999999999999999999999999999999999999999999999999999999999',
                        textAreaRows: "20"
                    }
                },
            ]
        },
        {
            columns: [{text : 'API logger'}],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                {
                    size: 12,
                    field: {
                        type: 'textarea',
                        attName: 'apiLogger',
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'API logger',
                        attMaxLength: '9999999999999999999999999999999999999999999999999999999999999999999999999999',
                        textAreaRows: "20"
                    }
                },
            ]
        },
        {
            columns: [{text : 'Signature location source'}],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                {
                    size: 12,
                    field: {
                        type: 'toggle',
                        attName: 'toggleLocalStorageSignature',
                        formGroup: ConfigDetailsFormGroup,
                        setFieldName: true,
                        fieldName: 'Is from Local storage'
                    }
                },
            ]
        }
    ]
}