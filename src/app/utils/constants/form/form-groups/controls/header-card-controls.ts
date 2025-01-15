import { FormBuilder, FormGroup } from "@angular/forms";

export const HeaderControlFormGroup: FormGroup = new FormBuilder().group({
    filterLeads: [null]
});