import { FormGroup, FormBuilder } from '@angular/forms';
const SIRiderFormBuilder = new FormBuilder();

const SIRiderFormGroupControl = {
  descAttachRiders: [''], 
  toggleAttachRiders: [''],
  riderCode: [''],
  riderVersion: [''],
  riderSumAssured: [''],
  riderMultipleExtra: [''],
  riderRiskClass: [''],
  RIDER_VARIANT: [''],
};

export const WaiverRiderFormGroup: FormGroup = SIRiderFormBuilder.group(
  SIRiderFormGroupControl
);

export const AccidentRiderFormGroup: FormGroup = SIRiderFormBuilder.group(
  SIRiderFormGroupControl
);

export const FlexiFundRiderFormGroup: FormGroup = SIRiderFormBuilder.group(
  SIRiderFormGroupControl
);

export const TermRiderFormGroup: FormGroup = SIRiderFormBuilder.group(
  SIRiderFormGroupControl
);

export const DecreasingTermRiderFormGroup: FormGroup = SIRiderFormBuilder.group(
  SIRiderFormGroupControl
);

export const DreadDiseaseRiderFormGroup: FormGroup = SIRiderFormBuilder.group(
  SIRiderFormGroupControl
);

export const AddRiderFormGroup: FormGroup = SIRiderFormBuilder.group(
  SIRiderFormGroupControl
);

export const WaiverPremCriticalIllnessRiderFormGroup: FormGroup = SIRiderFormBuilder.group(
  SIRiderFormGroupControl
);

export const CriticalIllnessRiderFormGroup: FormGroup = SIRiderFormBuilder.group(
  SIRiderFormGroupControl
);

export const CostOfLivingAllowanceRiderFormGroup: FormGroup = SIRiderFormBuilder.group(
  SIRiderFormGroupControl
);

export const RiderSegmentFormGroup: FormGroup = SIRiderFormBuilder.group({
  riskTypeSegment: ['']
});

export const PayorsBenefitRiderFormGroup: FormGroup = SIRiderFormBuilder.group(
  SIRiderFormGroupControl
);

export const SustainabilityProtectionRiderFormGroup: FormGroup = SIRiderFormBuilder.group(
  SIRiderFormGroupControl
);

export const AccidentProtectRiderFormGroup: FormGroup = SIRiderFormBuilder.group(
  SIRiderFormGroupControl
);

export const HospitalSurgicalRiderFormGroup: FormGroup = SIRiderFormBuilder.group(
  SIRiderFormGroupControl
);