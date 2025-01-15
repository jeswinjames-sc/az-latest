import { FormGroup, FormBuilder, Validators } from '@angular/forms';
const SIDeclarationsFormBuilder = new FormBuilder();
export const SIDeclarationsFormGroup: FormGroup = SIDeclarationsFormBuilder.group({
  forMultipleDisease: [false, [Validators.required]],
  hadMultipleDisease: [false, [Validators.required]],
  bussMedAtt: [false, [Validators.required]],
  bussDiagnoseSpec: [false, [Validators.required]],
  exDisease: [false, [Validators.required]],
});
