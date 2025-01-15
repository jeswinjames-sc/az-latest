import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export const SubmissionFormGroup: FormGroup = new FormBuilder().group({
    CHsameAsAO: [true],
    PoPType: [false],
    PoPCHSameAsAO: [true],
    PoPCHRelationToAO: [''],
    CHDOB: [''],
    CHGender: [''],
    CHNationality: [''],
    pobCountry: [''],
    pobProvince: [''],
    pobCity: [''],
    refNumber: ['', [
        Validators.required
    ]],
    chValidId: ['', [
        Validators.required
    ]],
    chValidIdType: ['', [
        Validators.required
    ]],
    chValidIdExpDate: ['', [
        Validators.required
    ]],
    chValidIdDOB: [''],
    validIdAO: ['', [
        Validators.required
    ]],
    validIdAOType: ['', [
        Validators.required
    ]],
    validIdAOExpDate: ['', [
        Validators.required
    ]],
    validIdAODOB: ['', [
        Validators.required
    ]],
    BancaReferralForm: [''],
    validIdPI: ['', [
        Validators.required
    ]],
    bancaSalesChecklistForm: ['',[
    ]],
    validIdPIType: ['', [
        Validators.required
    ]],
    validIdPIExpDate: ['', [
        Validators.required
    ]],
    validIdPIDOB: ['', [
        Validators.required
    ]],
    ePolicy: [true],
    formACR: ['', [
        Validators.required
    ]],
    formADA: ['', [
        Validators.required
    ]],
    formACB: ['', [
        Validators.required
    ]],
    attachEnroll: ['', [
        Validators.required
    ]],
    attachSalaryDeduction: ['', [
        Validators.required
    ]],
    onlinePayment: ['', [
        Validators.required
    ]],
    attachPoP: ['', [
        Validators.required
    ]],
    attachPOAO: ['', [
        Validators.required
    ]],
    attachKYC: [''],
    agentsReport: [''],
    attachAOConsent: ['', [
        Validators.required
    ]],
    attachAOW8: ['', [
        Validators.required
    ]],
    attachAOW9: ['', [
        Validators.required
    ]],
    attachMedResultAO: ['', [
        Validators.required
    ]],
    attachCreditCard: ['', [
        Validators.required
    ]],
    attachAuthorizedChild: ['', [
        Validators.required
    ]],
    attachMedResultPI: ['', [
        Validators.required
    ]],
    attachPoR: ['', [
        Validators.required
    ]],
    referredByBankPartner: ['', [
        Validators.required
    ]]
})