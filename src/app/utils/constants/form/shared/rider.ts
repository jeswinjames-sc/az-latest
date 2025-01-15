import {
  WaiverRiderFormSpecs,
  AccidentRiderFormSpecs,
  FlexiFundRiderFormSpecs,
  TermRiderFormSpecs,
  DecreasingTermRiderFormSpecs,
  DreadDiseaseRiderFormSpecs,
  AddRiderFormSpecs,
  WaiverPremCriticalIllnessRiderFormSpecs,
  CriticalIllnessRiderFormSpecs,
  CostOfLivingAllowanceRiderFormSpecs,
  PayorsBenefitRiderFormSpecs,
  SustainabilityProtectionRiderFormSpecs,
  AccidentProtectRiderFormSpecs,
  HospitalSurgicalRiderFormSpecs
} from '@form/form-specs/sales-illustration/si-rider-form-specs';

import {
  WaiverRiderFormGroup,
  AccidentRiderFormGroup,
  FlexiFundRiderFormGroup,
  TermRiderFormGroup,
  DecreasingTermRiderFormGroup,
  DreadDiseaseRiderFormGroup,
  AddRiderFormGroup,
  WaiverPremCriticalIllnessRiderFormGroup,
  CriticalIllnessRiderFormGroup,
  CostOfLivingAllowanceRiderFormGroup,
  PayorsBenefitRiderFormGroup,
  SustainabilityProtectionRiderFormGroup,
  AccidentProtectRiderFormGroup,
  HospitalSurgicalRiderFormGroup
} from '@form-group/sales-illustration/si-rider-form-group';

export const RIDER_FORM_SPEC_GROUP = [
  {
    formSpecs:
      WaiverRiderFormSpecs,
    formGroup:
      WaiverRiderFormGroup,
    name: 'Waiver Rider',
  },
  {
    formSpecs:
      AccidentRiderFormSpecs,
    formGroup:
      AccidentRiderFormGroup,
    name: 'Accident Rider',
  },
  {
    formSpecs:
      FlexiFundRiderFormSpecs,
    formGroup:
      FlexiFundRiderFormGroup,
    name: 'Flexi Fund Rider',
  },
  {
    formSpecs:
      TermRiderFormSpecs,
    formGroup:
      TermRiderFormGroup,
    name: 'Term Rider'
  },
  {
    formSpecs:
      DecreasingTermRiderFormSpecs,
    formGroup:
      DecreasingTermRiderFormGroup,
    name: 'Decreasing Term Rider'
  },
  {
    formSpecs:
      DreadDiseaseRiderFormSpecs,
    formGroup:
      DreadDiseaseRiderFormGroup,
    name: 'Dread Disease Rider'
  },
  {
    formSpecs:
      AddRiderFormSpecs,
    formGroup:
      AddRiderFormGroup,
    name: 'ADD'
  },
  {
    formSpecs:
      WaiverPremCriticalIllnessRiderFormSpecs,
    formGroup:
      WaiverPremCriticalIllnessRiderFormGroup,
    name: 'WPCI'
  },
  {
    formSpecs:
      WaiverPremCriticalIllnessRiderFormSpecs,
    formGroup:
      WaiverPremCriticalIllnessRiderFormGroup,
    name: 'WPCID'
  },
  {
    formSpecs:
      CriticalIllnessRiderFormSpecs,
    formGroup:
      CriticalIllnessRiderFormGroup,
    name: 'CI100'
  },
  {
    formSpecs:
      HospitalSurgicalRiderFormSpecs,
    formGroup:
      HospitalSurgicalRiderFormGroup,
    name: 'HSR'
  },
  {
    formSpecs:
      CostOfLivingAllowanceRiderFormSpecs,
    formGroup:
      CostOfLivingAllowanceRiderFormGroup,
    name: 'COLA'
  },
  {
    formSpecs:
      PayorsBenefitRiderFormSpecs,
    formGroup:
    PayorsBenefitRiderFormGroup,
    name: 'PBR'
  },
  {
    formSpecs:
      SustainabilityProtectionRiderFormSpecs,
    formGroup:
    SustainabilityProtectionRiderFormGroup,
    name: 'Sustainability Protect'
  },
  {
    formSpecs:
    AccidentProtectRiderFormSpecs,
    formGroup:
    AccidentProtectRiderFormGroup,
    name: 'Accident Protect'
  }
];
