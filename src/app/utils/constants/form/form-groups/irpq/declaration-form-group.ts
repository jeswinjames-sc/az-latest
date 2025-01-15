import { FormGroup, FormBuilder } from '@angular/forms';

export const DeclarationFormGroup: FormGroup = new FormBuilder().group({
    declarationCheck: [false, []]
})