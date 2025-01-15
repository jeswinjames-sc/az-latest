import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { REGEXP } from '@utils/constants/regexp/regexp';

export const SubmissionADAFormGroup: FormGroup = new FormBuilder().group({
    bankName: ['', [
        Validators.required
    ]],
    savings: ['', [
        Validators.required,
        Validators.pattern(REGEXP.ACCOUNT_NUMBER_12)
    ]],
    isCompleted: [0]
})