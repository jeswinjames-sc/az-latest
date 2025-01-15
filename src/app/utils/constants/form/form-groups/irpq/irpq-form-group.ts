import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidatorsService } from 'app/core/services/sync/sync-validations/custom-validators/custom-validators.service';
import { REGEXP } from '@utils/constants/regexp/regexp';

const IRPQFormBuilder = new FormBuilder();
const customValidatorsService: CustomValidatorsService = new CustomValidatorsService();

const trueOrFalseAndRequiredValidation = [ Validators.required, customValidatorsService.trueOrFalseValidator ];

const GI1FormValidation: FormGroup = IRPQFormBuilder.group({
  GI1_A1: [null, trueOrFalseAndRequiredValidation],
  GI1_A2: [null, trueOrFalseAndRequiredValidation],
  GI1_A3: [null, trueOrFalseAndRequiredValidation],
  GI1_A4: [null, trueOrFalseAndRequiredValidation],
  GI1_A5: [null, trueOrFalseAndRequiredValidation]
});

const GI2FormValidation: FormGroup = IRPQFormBuilder.group({
  GI2_A1: [null, trueOrFalseAndRequiredValidation],
  GI2_A2: [null, trueOrFalseAndRequiredValidation],
  GI2_A3: [null, trueOrFalseAndRequiredValidation],
  GI2_A4: [null, trueOrFalseAndRequiredValidation]
});

const GI3FormValidation: FormGroup = IRPQFormBuilder.group({
  GI3_A1: [null, trueOrFalseAndRequiredValidation],
  GI3_A2: [null, trueOrFalseAndRequiredValidation],
  GI3_A3: [null, trueOrFalseAndRequiredValidation],
  GI3_A4: [null, trueOrFalseAndRequiredValidation],
  GI3_A5: [null, trueOrFalseAndRequiredValidation],
  GI3_A6: [null, trueOrFalseAndRequiredValidation],
  GI3_A7: [null, trueOrFalseAndRequiredValidation],
  GI3_00: [null]
});

const GI4FormValidation: FormGroup = IRPQFormBuilder.group({
  GI4_A1: [null, trueOrFalseAndRequiredValidation],
  GI4_A2: [null, trueOrFalseAndRequiredValidation],
  GI4_A3: [null, trueOrFalseAndRequiredValidation],
  GI4_A4: [null, trueOrFalseAndRequiredValidation],
  GI4_A5: [null, trueOrFalseAndRequiredValidation],
  GI4_A6: [null, trueOrFalseAndRequiredValidation],
  GI4_A7: [null, trueOrFalseAndRequiredValidation],
  GI4_A8: [null, trueOrFalseAndRequiredValidation],
  GI4_A9: [null, trueOrFalseAndRequiredValidation],
  GI4_A10: [null, trueOrFalseAndRequiredValidation],
  GI4_A11: [null, trueOrFalseAndRequiredValidation],
  GI4_A12: [null, trueOrFalseAndRequiredValidation],
  GI4_A13: [null, trueOrFalseAndRequiredValidation],
  GI4_A14: [null, trueOrFalseAndRequiredValidation],
  GI4_A15: [null, trueOrFalseAndRequiredValidation],
  GI4_A16: [null, trueOrFalseAndRequiredValidation],
  GI4_A17: [null, trueOrFalseAndRequiredValidation],
  GI4_A18: [null, trueOrFalseAndRequiredValidation]
});

const PI1FormValidation: FormGroup = IRPQFormBuilder.group({
  PI1_A1: [null, trueOrFalseAndRequiredValidation],
  PI1_A2: [null, trueOrFalseAndRequiredValidation],
  PI1_A3: [null, trueOrFalseAndRequiredValidation],
  PI1_A4: [null, trueOrFalseAndRequiredValidation]
});

const PI2FormValidation: FormGroup = IRPQFormBuilder.group({
  PI2_A1: [null, trueOrFalseAndRequiredValidation],
  PI2_A2: [null, trueOrFalseAndRequiredValidation],
  PI2_A3: [null, trueOrFalseAndRequiredValidation],
  PI2_A4: [null, trueOrFalseAndRequiredValidation]
});

const PI3FormValidation: FormGroup = IRPQFormBuilder.group({
  PI3_A1: [null, trueOrFalseAndRequiredValidation],
  PI3_A2: [null, trueOrFalseAndRequiredValidation],
  PI3_A3: [null, trueOrFalseAndRequiredValidation],
  PI3_A4: [null, trueOrFalseAndRequiredValidation]
});

const PI4FormValidation: FormGroup = IRPQFormBuilder.group({
  PI4_A1: [null, trueOrFalseAndRequiredValidation],
  PI4_A2: [null, trueOrFalseAndRequiredValidation],
  PI4_A3: [null, trueOrFalseAndRequiredValidation],
  PI4_A4: [null, trueOrFalseAndRequiredValidation]
});

const PI5FormValidation: FormGroup = IRPQFormBuilder.group({
  PI5_A1: [null, trueOrFalseAndRequiredValidation],
  PI5_A2: [null, trueOrFalseAndRequiredValidation],
  PI5_A3: [null, trueOrFalseAndRequiredValidation],
  PI5_A4: [null, trueOrFalseAndRequiredValidation]
});

const PI6FormValidation: FormGroup = IRPQFormBuilder.group({
  PI6_A1: [null, trueOrFalseAndRequiredValidation],
  PI6_A2: [null, trueOrFalseAndRequiredValidation],
  PI6_A3: [null, trueOrFalseAndRequiredValidation],
  PI6_A4: [null, trueOrFalseAndRequiredValidation]
});

const PI7FormValidation: FormGroup = IRPQFormBuilder.group({
  PI7_A1: [null, trueOrFalseAndRequiredValidation],
  PI7_A2: [null, trueOrFalseAndRequiredValidation],
  PI7_A3: [null, trueOrFalseAndRequiredValidation],
  PI7_A4: [null, trueOrFalseAndRequiredValidation]
});

const PI8FormValidation: FormGroup = IRPQFormBuilder.group({
  PI8_A1: [null, trueOrFalseAndRequiredValidation],
  PI8_A2: [null, trueOrFalseAndRequiredValidation],
  PI8_A3: [null, trueOrFalseAndRequiredValidation],
  PI8_A4: [null, trueOrFalseAndRequiredValidation]
});

const GIFormValidations: FormGroup = IRPQFormBuilder.group({
  GI1: GI1FormValidation,
  GI2: GI2FormValidation,
  GI3: GI3FormValidation,
  GI4: GI4FormValidation
});

const PIFormValidations: FormGroup = IRPQFormBuilder.group({
  PI1: PI1FormValidation,
  PI2: PI2FormValidation,
  PI3: PI3FormValidation,
  PI4: PI4FormValidation,
  PI5: PI5FormValidation,
  PI6: PI6FormValidation,
  PI7: PI7FormValidation,
  PI8: PI8FormValidation
});

const QuestionOBjectFormValidation: FormGroup = IRPQFormBuilder.group({
  GI: GIFormValidations,
  PI: PIFormValidations,
});

const selfValidation = [Validators.maxLength(22), Validators.pattern(REGEXP.NUMBER)];

const SelfFormGroupValidation: FormGroup = IRPQFormBuilder.group({
  self: [null, selfValidation]
});

const IRPQDataFormValidation: FormGroup = IRPQFormBuilder.group({
  needAnalysis: SelfFormGroupValidation,
  prospectiveInvestor: SelfFormGroupValidation,
  questions: QuestionOBjectFormValidation,
  riskAppetiteScore: [null, []],
  status: [null, [ Validators.maxLength(22), customValidatorsService.irpqStatusValidator ]]
});

export const IRPQSyncRequestArrayFormValidation: FormGroup = IRPQFormBuilder.group({
  clientLeadRefId: [null, [ Validators.required ]],
  clientRefId: [null, [ Validators.required ]],
  createdDate: [null, [ Validators.required ]],
  data: IRPQDataFormValidation,
  isDeleted: [null, [ Validators.required, customValidatorsService.booleanOnly]],
  lastUpdateDate: [null, [ Validators.required ]],
});