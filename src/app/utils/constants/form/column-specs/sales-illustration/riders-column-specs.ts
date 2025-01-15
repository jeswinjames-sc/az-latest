import {
  AccidentRiderFormGroup,
  WaiverRiderFormGroup,
  FlexiFundRiderFormGroup,
  TermRiderFormGroup,
  DecreasingTermRiderFormGroup,
  DreadDiseaseRiderFormGroup,
  WaiverPremCriticalIllnessRiderFormGroup,
  CriticalIllnessRiderFormGroup,
  CostOfLivingAllowanceRiderFormGroup,
  PayorsBenefitRiderFormGroup,
  SustainabilityProtectionRiderFormGroup,
  AccidentProtectRiderFormGroup,
  HospitalSurgicalRiderFormGroup
} from '@form-group/sales-illustration/si-rider-form-group';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import {
  AddRiderFormGroup,
  RiderSegmentFormGroup
} from '@form-group/sales-illustration/si-rider-form-group';
import { CURRENCY } from '@utils/enums/currency';
import { BOOLEAN } from '@utils/constants/options/segment/boolean';

export const AddDescAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'descAttachRiders',
    type: 'readOnly',
    setFieldName: true,
    fieldName: '',
    formGroup: AddRiderFormGroup,
  },
};

export const AddToggleAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'toggleAttachRiders',
    type: 'segment',
    options: BOOLEAN,
    setFieldName: false,
    fieldName: 'ADD',
    formGroup: AddRiderFormGroup,
  },
  size: 4,
};
export const AddRiderSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderSumAssured',
    fieldName: 'Sum Assured',
    type: 'inputV2',
    setFieldName: true,
    attMaxLength: '50',
    formGroup: AddRiderFormGroup,
    currency: CURRENCY.PHP,
    showCurrency: false
  },
  size: 4,
  offset: 4
};
export const AddRiderMultipleExtraSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderMultipleExtra',
    fieldName: 'Multiple Extra',
    type: 'tel',
    setFieldName: true,
    formGroup: AddRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const AddRiderRiskClassSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderRiskClass',
    fieldName: 'Table Rating',
    type: 'select',
    setFieldName: true,
    formGroup: AddRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const AddRiderVariantSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'RIDER_VARIANT',
    fieldName: 'Variant',
    type: 'select',
    setFieldName: true,
    formGroup: AddRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const AccidentDescAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'descAttachRiders',
    type: 'readOnly',
    setFieldName: true,
    fieldName: '',
    formGroup: AccidentRiderFormGroup,
  }
};

export const AccidentToggleAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'toggleAttachRiders',
    type: 'segment',
    options: BOOLEAN,
    setFieldName: false,
    fieldName: 'ACCIDENT RIDER',
    formGroup: AccidentRiderFormGroup,
  },
  size: 4,
};
export const AccidentRiderSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderSumAssured',
    fieldName: 'Sum Assured',
    type: 'inputV2',
    setFieldName: true,
    attMaxLength: '50',
    formGroup: AccidentRiderFormGroup,
    currency: CURRENCY.PHP,
    showCurrency: false
  },
  size: 4,
  offset: 4
};
export const AccidentRiderMultipleExtraSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderMultipleExtra',
    fieldName: 'Multiple Extra',
    type: 'tel',
    setFieldName: true,
    formGroup: AccidentRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const AccidentRiderRiskClassSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderRiskClass',
    fieldName: 'Table Rating',
    type: 'select',
    setFieldName: true,
    formGroup: AccidentRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const AccidentRiderVariantSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'RIDER_VARIANT',
    fieldName: 'Variant',
    type: 'selectV2',
    setFieldName: true,
    formGroup: AccidentRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const WaiverDescAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'descAttachRiders',
    type: 'readOnly',
    setFieldName: true,
    fieldName: '',
    formGroup: WaiverRiderFormGroup,
  }
};

export const WaiverToggleAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'toggleAttachRiders',
    type: 'segment',
    options: BOOLEAN,
    setFieldName: false,
    fieldName: 'WAIVER RIDER',
    formGroup: WaiverRiderFormGroup,
  },
  size: 4,
};
export const WaiverRiderSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderSumAssured',
    fieldName: 'Sum Assured',
    type: 'inputV2',
    setFieldName: true,
    attMaxLength: '50',
    formGroup: WaiverRiderFormGroup,
    currency: CURRENCY.PHP,
    showCurrency: false
  },
  size: 4,
  offset: 4
};
export const WaiverRiderMultipleExtraSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderMultipleExtra',
    fieldName: 'Multiple Extra',
    type: 'text',
    setFieldName: true,
    formGroup: WaiverRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const WaiverRiderRiskClassSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderRiskClass',
    fieldName: 'Table Rating',
    type: 'text',
    setFieldName: true,
    formGroup: WaiverRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const WaiverRiderVariantSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'RIDER_VARIANT',
    fieldName: 'Variant',
    type: 'selectV2',
    setFieldName: false,
    formGroup: WaiverRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const FlexiFundDescAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'descAttachRiders',
    type: 'readOnly',
    setFieldName: true,
    fieldName: '',
    formGroup: FlexiFundRiderFormGroup,
  }
};

export const FlexiFundToggleAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'toggleAttachRiders',
    type: 'segment',
    options: BOOLEAN,
    setFieldName: false,
    fieldName: 'FLEXI FUND RIDER',
    formGroup: FlexiFundRiderFormGroup,
  },
  size: 4,
};
export const FlexiFundRiderSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderSumAssured',
    fieldName: 'Sum Assured',
    type: 'inputV2',
    setFieldName: true,
    attMaxLength: '50',
    formGroup: FlexiFundRiderFormGroup,
    currency: CURRENCY.PHP,
    showCurrency: false
  },
  size: 4,
  offset: 4
};
export const FlexiFundRiderMultipleExtraSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderMultipleExtra',
    fieldName: 'Multiple Extra',
    type: 'text',
    setFieldName: true,
    formGroup: FlexiFundRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const FlexiFundRiderRiskClassSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderRiskClass',
    fieldName: 'Table Rating',
    type: 'text',
    setFieldName: true,
    formGroup: FlexiFundRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const FlexiFundRiderVariantSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'RIDER_VARIANT',
    fieldName: 'Variant',
    type: 'select',
    setFieldName: true,
    formGroup: FlexiFundRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const TermDescAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'descAttachRiders',
    type: 'readOnly',
    setFieldName: true,
    fieldName: '',
    formGroup: TermRiderFormGroup,
  }
};
export const TermToggleAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'toggleAttachRiders',
    type: 'segment',
    options: BOOLEAN,
    setFieldName: false,
    fieldName: 'TERM RIDER',
    formGroup: TermRiderFormGroup,
  },
  size: 4,
};
export const TermRiderSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderSumAssured',
    fieldName: 'Sum Assured',
    type: 'inputV2',
    setFieldName: true,
    attMaxLength: '50',
    formGroup: TermRiderFormGroup,
    currency: CURRENCY.PHP,
    showCurrency: false
  },
  size: 4,
  offset: 4
};
export const TermRiderMultipleExtraSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderMultipleExtra',
    fieldName: 'Multiple Extra',
    type: 'text',
    setFieldName: true,
    formGroup: TermRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const TermRiderRiskClassSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderRiskClass',
    fieldName: 'Table Rating',
    type: 'text',
    setFieldName: true,
    formGroup: TermRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const TermRiderVariantSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'RIDER_VARIANT',
    fieldName: 'Variant',
    type: 'select',
    setFieldName: true,
    formGroup: TermRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const DecreasingTermDescAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'descAttachRiders',
    type: 'readOnly',
    setFieldName: true,
    fieldName: '',
    formGroup: DecreasingTermRiderFormGroup,
  }
};
export const DecreasingTermToggleAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'toggleAttachRiders',
    type: 'segment',
    options: BOOLEAN,
    setFieldName: false,
    fieldName: 'DECREASING TERM',
    formGroup: DecreasingTermRiderFormGroup,
  },
  size: 4,
};
export const DecreasingTermRiderSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderSumAssured',
    fieldName: 'Sum Assured',
    type: 'inputV2',
    setFieldName: true,
    attMaxLength: '50',
    formGroup: DecreasingTermRiderFormGroup,
    currency: CURRENCY.PHP,
    showCurrency: false
  },
  size: 4,
  offset: 4
};
export const DecreasingTermRiderMultipleExtraSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderMultipleExtra',
    fieldName: 'Multiple Extra',
    type: 'text',
    setFieldName: true,
    formGroup: DecreasingTermRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const DecreasingTermRiderRiskClassSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderRiskClass',
    fieldName: 'Table Rating',
    type: 'text',
    setFieldName: true,
    formGroup: DecreasingTermRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const DecreasingTermRiderVariantSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'RIDER_VARIANT',
    fieldName: 'Variant',
    type: 'select',
    setFieldName: true,
    formGroup: DecreasingTermRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const DreadDiseaseDescAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'descAttachRiders',
    type: 'readOnly',
    setFieldName: true,
    fieldName: '',
    formGroup: DreadDiseaseRiderFormGroup,
  }
};
export const DreadDiseaseToggleAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'toggleAttachRiders',
    type: 'segment',
    options: BOOLEAN,
    setFieldName: false,
    fieldName: 'DREAD DISEASE RIDER',
    formGroup: DreadDiseaseRiderFormGroup,
  },
  size: 4,
};
export const DreadDiseaseRiderSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderSumAssured',
    fieldName: 'Sum Assured',
    type: 'inputV2',
    setFieldName: true,
    attMaxLength: '50',
    formGroup: DreadDiseaseRiderFormGroup,
    currency: CURRENCY.PHP,
    showCurrency: false
  },
  size: 4,
  offset: 4
};
export const DreadDiseaseRiderMultipleExtraSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderMultipleExtra',
    fieldName: 'Multiple Extra',
    type: 'text',
    setFieldName: true,
    formGroup: DreadDiseaseRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const DreadDiseaseRiderRiskClassSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderRiskClass',
    fieldName: 'Table Rating',
    type: 'text',
    setFieldName: true,
    formGroup: DreadDiseaseRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const DreadDiseaseRiderVariantSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'RIDER_VARIANT',
    fieldName: 'Variant',
    type: 'text',
    setFieldName: true,
    formGroup: DreadDiseaseRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const WaiverPremCriticalIllnessDescAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'descAttachRiders',
    type: 'readOnly',
    setFieldName: true,
    fieldName: '',
    formGroup: WaiverPremCriticalIllnessRiderFormGroup,
  }
};
export const WaiverPremCriticalIllnessToggleAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'toggleAttachRiders',
    type: 'segment',
    options: BOOLEAN,
    setFieldName: false,
    fieldName: 'WPCI RIDER',
    formGroup: WaiverPremCriticalIllnessRiderFormGroup,
  },
  size: 4,
};
export const WaiverPremCriticalIllnessRiderSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderSumAssured',
    fieldName: 'Sum Assured',
    type: 'inputV2',
    setFieldName: true,
    attMaxLength: '50',
    formGroup: WaiverPremCriticalIllnessRiderFormGroup,
    currency: CURRENCY.PHP,
    showCurrency: false
  },
  size: 4,
  offset: 4
};
export const WaiverPremCriticalIllnessRiderMultipleExtraSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderMultipleExtra',
    fieldName: 'Multiple Extra',
    type: 'text',
    setFieldName: true,
    formGroup: WaiverPremCriticalIllnessRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const WaiverPremCriticalIllnessRiderRiskClassSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderRiskClass',
    fieldName: 'Table Rating',
    type: 'text',
    setFieldName: true,
    formGroup: WaiverPremCriticalIllnessRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const WaiverPremCriticalIllnessRiderVariantSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'RIDER_VARIANT',
    fieldName: 'Variant',
    type: 'selectV2',
    setFieldName: false,
    formGroup: WaiverPremCriticalIllnessRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const CriticalIllnessDescAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'descAttachRiders',
    type: 'readOnly',
    setFieldName: true,
    fieldName: '',
    formGroup: CriticalIllnessRiderFormGroup,
  }
};
export const CriticalIllnessToggleAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'toggleAttachRiders',
    type: 'segment',
    options: BOOLEAN,
    setFieldName: false,
    fieldName: 'CI100',
    formGroup: CriticalIllnessRiderFormGroup,
  },
  size: 4,
};
export const CriticalIllnessRiderSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderSumAssured',
    fieldName: 'Sum Assured',
    type: 'inputV2',
    setFieldName: true,
    attMaxLength: '50',
    formGroup: CriticalIllnessRiderFormGroup,
    currency: CURRENCY.PHP,
    showCurrency: false
  },
  size: 4,
  offset: 4
};
export const CriticalIllnessRiderMultipleExtraSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderMultipleExtra',
    fieldName: 'Multiple Extra',
    type: 'tel',
    setFieldName: true,
    formGroup: CriticalIllnessRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const CriticalIllnessRiderRiskClassSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderRiskClass',
    fieldName: 'Table Rating',
    type: 'select',
    setFieldName: true,
    formGroup: CriticalIllnessRiderFormGroup,
  },
  size: 4,
  offset: 4
};
export const CriticalIllnessRiderVariantSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'RIDER_VARIANT',
    fieldName: 'Variant',
    type: 'selectV2',
    setFieldName: true,
    formGroup: CriticalIllnessRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const CostOfLivingAllowanceDescAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'descAttachRiders',
    type: 'readOnly',
    setFieldName: true,
    fieldName: '',
    formGroup: CostOfLivingAllowanceRiderFormGroup,
  }
};

export const CostOfLivingAllowanceToggleAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'toggleAttachRiders',
    type: 'segment',
    options: BOOLEAN,
    setFieldName: false,
    fieldName: 'COLA',
    formGroup: CostOfLivingAllowanceRiderFormGroup,
  },
  size: 4,
};

export const CostOfLivingAllowanceRiderSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderSumAssured',
    fieldName: 'Sum Assured',
    type: 'inputV2',
    setFieldName: true,
    attMaxLength: '50',
    formGroup: CostOfLivingAllowanceRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const CostOfLivingAllowanceRiderMultipleExtraSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderMultipleExtra',
    fieldName: 'Multiple Extra',
    type: 'tel',
    setFieldName: true,
    formGroup: CostOfLivingAllowanceRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const CostOfLivingAllowanceRiderRiskClassSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderRiskClass',
    fieldName: 'Table Rating',
    type: 'select',
    setFieldName: true,
    formGroup: CostOfLivingAllowanceRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const CostOfLivingAllowanceRiderVariantSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'RIDER_VARIANT',
    fieldName: 'Variant',
    type: 'selectV2',
    setFieldName: true,
    formGroup: CostOfLivingAllowanceRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const RiderSegmentSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riskTypeSegment',
    type: 'segment',
    setFieldName: false,
    isSegmentOption: false,
    formGroup: RiderSegmentFormGroup
  },
  size: 12
};

export const PayorsBenefitDescAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'descAttachRiders',
    type: 'readOnly',
    setFieldName: true,
    fieldName: '',
    formGroup: PayorsBenefitRiderFormGroup,
  }
};

export const PayorsBenefitToggleAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'toggleAttachRiders',
    type: 'segment',
    options: BOOLEAN,
    setFieldName: false,
    fieldName: 'PBR',
    formGroup: PayorsBenefitRiderFormGroup,
  },
  size: 4,
};

export const PayorsBenefitRiderSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderSumAssured',
    fieldName: 'Sum Assured',
    type: 'inputV2',
    setFieldName: true,
    attMaxLength: '50',
    formGroup: PayorsBenefitRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const PayorsBenefitRiderMultipleExtraSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderMultipleExtra',
    fieldName: 'Multiple Extra',
    type: 'tel',
    setFieldName: true,
    formGroup: PayorsBenefitRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const PayorsBenefitRiderRiskClassSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderRiskClass',
    fieldName: 'Table Rating',
    type: 'select',
    setFieldName: true,
    formGroup: PayorsBenefitRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const PayorsBenefitRiderVariantSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'RIDER_VARIANT',
    fieldName: 'Variant',
    type: 'selectV2',
    setFieldName: true,
    formGroup: PayorsBenefitRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const SustainabilityProtectionDescAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'descAttachRiders',
    type: 'readOnly',
    setFieldName: true,
    fieldName: '',
    formGroup: SustainabilityProtectionRiderFormGroup,
  }
};

export const SustainabilityProtectionToggleAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'toggleAttachRiders',
    type: 'segment',
    options: BOOLEAN,
    setFieldName: false,
    fieldName: 'SPR',
    formGroup: SustainabilityProtectionRiderFormGroup,
  },
  size: 4,
};

export const SustainabilityProtectionRiderSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderSumAssured',
    fieldName: 'Sum Assured',
    type: 'inputV2',
    setFieldName: true,
    attMaxLength: '50',
    formGroup: SustainabilityProtectionRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const SustainabilityProtectionRiderMultipleExtraSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderMultipleExtra',
    fieldName: 'Multiple Extra',
    type: 'tel',
    setFieldName: true,
    formGroup: SustainabilityProtectionRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const SustainabilityProtectionRiderRiskClassSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderRiskClass',
    fieldName: 'Table Rating',
    type: 'select',
    setFieldName: true,
    formGroup: SustainabilityProtectionRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const SustainabilityProtectionRiderVariantSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'RIDER_VARIANT',
    fieldName: 'Sustainability Partner',
    type: 'selectV2',
    setFieldName: true,
    formGroup: SustainabilityProtectionRiderFormGroup
  },
  size: 4,
  offset: 4
};

export const SustainabilityProtectionRiderVariantDescSpec: ColumnGeneratorSpecs = {
  size: 8,
  offset: 2,
  class: 'ion-text-left'
};

export const AccidentProtectDescAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'descAttachRiders',
    type: 'readOnly',
    setFieldName: true,
    fieldName: '',
    formGroup: AccidentProtectRiderFormGroup,
  }
};

export const AccidentProtectToggleAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'toggleAttachRiders',
    type: 'segment',
    options: BOOLEAN,
    setFieldName: false,
    fieldName: 'APR',
    formGroup: AccidentProtectRiderFormGroup,
  },
  size: 4,
};

export const AccidentProtectRiderSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderSumAssured',
    fieldName: 'Sum Assured',
    type: 'inputV2',
    setFieldName: true,
    attMaxLength: '50',
    formGroup: AccidentProtectRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const AccidentProtectRiderMultipleExtraSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderMultipleExtra',
    fieldName: 'Multiple Extra',
    type: 'selectV2',
    setFieldName: true,
    formGroup: AccidentProtectRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const AccidentProtectRiderRiskClassSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderRiskClass',
    fieldName: 'Table Rating',
    type: 'select',
    setFieldName: true,
    formGroup: AccidentProtectRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const AccidentProtectRiderVariantSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'RIDER_VARIANT',
    fieldName: 'Variant',
    type: 'selectV2',
    setFieldName: true,
    formGroup: AccidentProtectRiderFormGroup
  },
  size: 4,
  offset: 4
};

export const AccidentProtectRiderVariantDescSpec: ColumnGeneratorSpecs = {
  size: 8,
  offset: 2,
  class: 'ion-text-left'
};

export const HospitalSurgicalDescAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'descAttachRiders',
    type: 'readOnly',
    setFieldName: true,
    fieldName: '',
    formGroup: HospitalSurgicalRiderFormGroup,
  }
};

export const HSRToggleAttachRidersSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'toggleAttachRiders',
    type: 'segment',
    options: BOOLEAN,
    setFieldName: false,
    fieldName: 'HSR',
    formGroup: HospitalSurgicalRiderFormGroup,
  },
  size: 4,
};

export const HospitalSurgicalRiderVariantSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'RIDER_VARIANT',
    fieldName: 'Variant',
    type: 'selectV2',
    setFieldName: true,
    formGroup: HospitalSurgicalRiderFormGroup,
  },
  size: 4,
  offset: 4
};

export const HospitalSurgicalRiderSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riderSumAssured',
    fieldName: 'Maximum Hospitalization Limit',
    type: 'inputV2',
    setFieldName: true,
    attMaxLength: '50',
    formGroup: HospitalSurgicalRiderFormGroup
  },
  size: 4,
  offset: 4
};