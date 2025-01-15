import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { REGEXP } from '@utils/constants/regexp/regexp';
const SIBMIFormBuilder = new FormBuilder();
export const SIBMIFormGroup: FormGroup = SIBMIFormBuilder.group({
  bmiMeasurementSystem: [null],
  bmiHeightInCm: [null, [Validators.required, Validators.max(999), Validators.pattern(REGEXP.NUMERIC)]],
  bmiHeightInFt: [null, [Validators.pattern(REGEXP.NUMERIC)]],
  bmiHeightInInches: [null, [Validators.pattern(REGEXP.NUMERIC)]],
  bmiWeightInKg: [null, [Validators.required, Validators.pattern(REGEXP.NUMBER)]],
  bmiWeightInlbs: [null, [Validators.required, Validators.pattern(REGEXP.NUMBER)]],
  bmiTotal: [null, [Validators.pattern(REGEXP.NUMERIC)]],
});
