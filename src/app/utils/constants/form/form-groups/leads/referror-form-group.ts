import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { REGEXP } from '@utils/constants/regexp/regexp';

const ReferrorFormBuilder = new FormBuilder();

export const ReferrorFormGroup: FormGroup = ReferrorFormBuilder.group({
  fullname: ['', [
    Validators.required,
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  firstName: [''] ,
  middleName: [''],
  lastName: [''], 
  branchName: [null, [
    Validators.required,
  ]],
  branchCode: [null, [
    Validators.maxLength(8),
    Validators.required,
  ]],
  referrorCode: [null, [
    Validators.maxLength(8),
    Validators.required,
    Validators.pattern(REGEXP.ALPHANUMERIC)
  ]],
  referredByBankPartner: ['', [
    Validators.required
  ]],
  statusCode: [null],
  closingBranch: [null, [
    Validators.required
  ]]
});


export const hsbcReferrorSubmittedFormGroup: FormGroup = new FormBuilder().group({
  empId: [null],
  refName: [null],
  branch: [null],
  closingBranch: [null]
});

export const referrorSubmittedFormGroup: FormGroup = new FormBuilder().group({
  empId: [null],
  refName: [null],
  branch: [null],
});