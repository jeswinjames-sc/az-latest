import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { REGEXP } from '@utils/constants/regexp/regexp'; 

const SITopUpFormBuilder = new FormBuilder();

export const SITopUpWithdrawalFormGroup: FormGroup = SITopUpFormBuilder.group({
  policyYear: [null],
  age: [null],
  topUp: [null],
  withdrawal: [null],
  regularTopUp: [null, Validators.pattern(REGEXP.AMOUNT)], 
  scheduledWithdrawalStartAge: [null, Validators.pattern(REGEXP.AMOUNT)], 
  scheduledWithdrawalEndAge: [null, Validators.pattern(REGEXP.AMOUNT)], 
  scheduledWithdrawalAmount: [null, Validators.pattern(REGEXP.AMOUNT)] 
});
