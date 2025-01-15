import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidatorsService } from 'app/core/services/sync/sync-validations/custom-validators/custom-validators.service';
import { REGEXP } from '@utils/constants/regexp/regexp';

const customValidatorsService: CustomValidatorsService = new CustomValidatorsService();

export const SubmissionContBillingFormGroup: FormGroup = new FormBuilder().group({
    cardType: ['', [
        Validators.required
    ]],
    cardIssued: ['', [
        Validators.required
    ]],
    cardAccount: ['', [
        Validators.required,
        Validators.pattern(REGEXP.CREDIT_CARD)
    ]],
    cardAddress1: ['', [
        Validators.required
    ]],
    cardAddress2: [''],
    cardExpiry: ['', [
        Validators.required,
        customValidatorsService.ccExpiryValidator
    ]],
    isCompleted: [0]
})