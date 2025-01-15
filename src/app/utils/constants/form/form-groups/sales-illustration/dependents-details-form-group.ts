import { FormBuilder, FormGroup } from "@angular/forms";
import { DependentsDeetsFGControls } from "./sales-illustration-form-group";

export const DependentsDetailsFormGroup: FormGroup = new FormBuilder().group({
    DependentsDetailsGroup: new FormBuilder().array([])
})

