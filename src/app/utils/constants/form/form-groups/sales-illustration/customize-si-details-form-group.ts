import { FormGroup, FormBuilder } from '@angular/forms';
const CustomizeSalesIllustrationFormBuilder = new FormBuilder();

export const CustomizeSalesIllustrationFormGroup: FormGroup = CustomizeSalesIllustrationFormBuilder.group({
  underwritingApproach: [null],
  payMode: [null],
  currency: [null],
  riskClass: [null],
  inputPremium: [null],
  deathBenefit: [null],
  basicSumAssured: [null],
  sumAssuredMultiple: [null],
  applicationNumber: [null],
  payYears: [null],
  personalObjectives: [null],
  personalObjectivesVersion: [null],
  premiumPayment: [null],
  flatExtra: [null],
  inputOption: [null],
  modalPremium: [null],
  isRiderAvailable: [null],
  isFundAvailable: [null],
  planName: [null],
  dividendOption: [null],
  policyDate: [null],
  planVariants: [null],
  areaOfCover: [null],
  deductible: [null],
  referringPartner: [null],
  annualPlanLimit: [null],
  benefits: [null],
  wellnessLimit: [null]
});

export const CustomizeSalesIllustrationPlanFormGroup: FormGroup = CustomizeSalesIllustrationFormBuilder.group({
  planName: [''],
  planCode: [''],
  planVersion: ['']
});
