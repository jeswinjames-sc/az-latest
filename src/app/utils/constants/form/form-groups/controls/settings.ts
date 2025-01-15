import { NullAstVisitor } from "@angular/compiler";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

export const SettingsFormGroup: FormGroup = new FormBuilder().group({
    newSync: [null],
    bgSync: [null]
});


export const ConfigDetailsFormGroup: FormGroup = new FormBuilder().group({
    name: [null],
    channel: [null],
    agentId: [null],
    variableLicenseType: [null],
    variableLicenseIssueDate: [null],
    variableLicenseStartDate: [null],
    variableLicenseEndDate: [null],
    tradLicenseType: [null],
    tradLicenseIssueDate: [null],
    tradLicenseStartDate: [null],
    tradLicenseEndDate: [null],
    referrer: [null],
    branch: [null],
    referrorName: [null],
    branchName: [null],
    branchCode: [null],
    referrorCode: [null],
    statusCode: [null],
    fullSyncProgress: [null],
    leadsFullSyncStatus: [null],
    naFullSyncStatus: [null],
    irpqFullSyncStatus: [null],
    siFullSyncStatus: [null],
    eappFullSyncStatus: [null],
    checklistFullSyncStatus: [null],
    referrorFullSyncStatus: [null],
    trackingLog: [null],
    apiLogger: [null],
    toggleLocalStorageSignature: [null]
});