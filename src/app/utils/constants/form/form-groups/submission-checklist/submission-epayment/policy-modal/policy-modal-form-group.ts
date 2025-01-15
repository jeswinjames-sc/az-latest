import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export const PolicyCheckboxFormGroup: FormGroup = new FormBuilder().group({
    agreePolicy: [false, [Validators.required]]
})