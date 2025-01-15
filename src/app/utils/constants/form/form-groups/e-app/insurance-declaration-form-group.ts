import { FormBuilder, FormGroup, Validators } from "@angular/forms"

export const InsuranceDeclarationFormGroup: FormGroup = new FormBuilder().group({
    totalInsuranceInforce: new FormBuilder().array([]),
    policyIntentedToChange: [],
    premiumsPaidByLoad: [],
    replacementNotification: new FormBuilder().array([]),
    interPolicyIntentedToChange: [],
    interPremiumsPaidByLoad: []
})