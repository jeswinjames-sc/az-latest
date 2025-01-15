import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import * as siRiderFormSpecs from '@form/column-specs/sales-illustration/riders-column-specs';
import * as siButtonSpecs from '@form/column-specs/sales-illustration/si-button-specs';
const AddRiderFormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.AddDescAttachRidersSpec
      ],
      class: 'v-middle'
    },
    {
      columns: [
        {
          size: 4,
          offset: 2,
          text: 'Do you want to attach ADD rider to this policy?',
          class: 'v-middle'
        },
        siRiderFormSpecs.AddToggleAttachRidersSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.AddRiderSumAssuredSpec
      ]
    }
  ]
};

const AccidentRiderFormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.AccidentDescAttachRidersSpec
      ],
      class: 'v-middle'
    },
    {
      columns: [
        {
          size: 4,
          offset: 2,
          text: 'Do you want to attach Accident rider to this policy?',
          class: 'v-middle'
        },
        siRiderFormSpecs.AccidentToggleAttachRidersSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.AccidentRiderVariantSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.AccidentRiderSumAssuredSpec
      ]
    },
  ]
};

const WaiverRiderFormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.WaiverDescAttachRidersSpec
      ],
      class: 'v-middle'
    },
    {
      columns: [
        {
          size: 4,
          offset: 2,
          text: 'Do you want to attach Waiver rider to this policy?',
          class: 'v-middle'
        },
        siRiderFormSpecs.WaiverToggleAttachRidersSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.WaiverRiderVariantSpec
      ]
    }
  ]
};

const FlexiFundRiderFormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.FlexiFundDescAttachRidersSpec
      ],
      class: 'v-middle'
    },
    {
      columns: [
        {
          size: 4,
          offset: 2,
          text: 'Do you want to attach Flexi Fund rider to this policy?',
          class: 'v-middle'
        },
        siRiderFormSpecs.FlexiFundToggleAttachRidersSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.FlexiFundRiderVariantSpec
      ]
    }
  ]
};

const TermRiderFormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.TermDescAttachRidersSpec
      ],
      class: 'v-middle'
    },
    {
      columns: [
        {
          size: 4,
          offset: 2,
          text: 'Do you want to attach TERM rider to this policy?',
          class: 'v-middle'
        },
        siRiderFormSpecs.TermToggleAttachRidersSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.TermRiderVariantSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.TermRiderSumAssuredSpec
      ]
    },
  ]
};

const DecreasingTermRiderFormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.DecreasingTermDescAttachRidersSpec
      ],
      class: 'v-middle'
    },
    {
      columns: [
        {
          size: 4,
          offset: 2,
          text: 'Do you want to attach Decreasing TERM rider to this policy?',
          class: 'v-middle'
        },
        siRiderFormSpecs.DecreasingTermToggleAttachRidersSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.DecreasingTermRiderVariantSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.DecreasingTermRiderSumAssuredSpec
      ]
    },
  ]
};

const DreadDiseaseRiderFormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.DreadDiseaseDescAttachRidersSpec
      ],
      class: 'v-middle'
    },
    {
      columns: [
        {
          size: 4,
          offset: 2,
          text: 'Do you want to attach DREAD Disease rider to this policy?',
          class: 'v-middle'
        },
        siRiderFormSpecs.DreadDiseaseToggleAttachRidersSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.DreadDiseaseRiderVariantSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.DreadDiseaseRiderSumAssuredSpec
      ]
    },
  ]
};

const WaiverPremCriticalIllnessRiderFormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.WaiverPremCriticalIllnessDescAttachRidersSpec
      ],
      class: 'v-middle'
    },
    {
      columns: [
        {
          size: 4,
          offset: 2,
          text: 'Do you want to attach WPCID rider to this policy?',
          class: 'v-middle'
        },
        siRiderFormSpecs.WaiverPremCriticalIllnessToggleAttachRidersSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.WaiverPremCriticalIllnessRiderVariantSpec,
      ]
    },
    {
      columns: [
        siRiderFormSpecs.WaiverPremCriticalIllnessRiderSumAssuredSpec
      ]
    },
  ]
};

const CriticalIllnessRiderFormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.CriticalIllnessDescAttachRidersSpec
      ],
      class: 'v-middle'
    },
    {
      columns: [
        {
          size: 4,
          offset: 2,
          text: 'Do you want to attach CI100 rider to this policy?',
          class: 'v-middle'
        },
        siRiderFormSpecs.CriticalIllnessToggleAttachRidersSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.CriticalIllnessRiderSumAssuredSpec
      ]
    },
  ]
};

const CostOfLivingAllowanceRiderFormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.CostOfLivingAllowanceDescAttachRidersSpec 
      ],
      class: 'v-middle'
    },
    {
      columns: [
        {
          size: 4,
          offset: 2,
          text: 'Do you want to attach COLA rider to this policy?',
          class: 'v-middle'
        },
        siRiderFormSpecs.CostOfLivingAllowanceToggleAttachRidersSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.CostOfLivingAllowanceRiderVariantSpec
      ]
    },
  ]
};

const PayorsBenefitRiderFormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.PayorsBenefitDescAttachRidersSpec
      ],
      class: 'v-middle'
    },
    {
      columns: [
        {
          size: 4,
          offset: 2,
          text: 'Do you want to attach PBR rider to this policy?',
          class: 'v-middle'
        },
        siRiderFormSpecs.PayorsBenefitToggleAttachRidersSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.PayorsBenefitRiderVariantSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.PayorsBenefitRiderSumAssuredSpec
      ]
    },
  ]
};

const HospitalSurgicalRiderFormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.HospitalSurgicalDescAttachRidersSpec 
      ],
      class: 'v-middle'
    },
    {
      columns: [
        {
          size: 4,
          offset: 2,
          text: 'Do you want to attach HSR rider to this policy?',
          class: 'v-middle'
        },
        siRiderFormSpecs.HSRToggleAttachRidersSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.HospitalSurgicalRiderVariantSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.HospitalSurgicalRiderSumAssuredSpec
      ]
    }
  ]
};

const SustainabilityProtectionRiderFormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.SustainabilityProtectionDescAttachRidersSpec
      ],
      class: 'v-middle'
    },
    {
      columns: [
        {
          size: 4,
          offset: 2,
          text: 'Do you want to attach SPR rider to this policy?',
          class: 'v-middle'
        },
        siRiderFormSpecs.SustainabilityProtectionToggleAttachRidersSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.SustainabilityProtectionRiderVariantSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.SustainabilityProtectionRiderSumAssuredSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.SustainabilityProtectionRiderVariantDescSpec
      ]
    },
  ]
};

const AccidentProtectRiderFormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.AccidentProtectDescAttachRidersSpec
      ],
      class: 'v-middle'
    },
    {
      columns: [
        {
          size: 4,
          offset: 2,
          text: 'Do you want to attach APR rider to this policy?',
          class: 'v-middle'
        },
        siRiderFormSpecs.AccidentProtectToggleAttachRidersSpec
      ]
    },
    {
      columns: [
        siRiderFormSpecs.AccidentProtectRiderSumAssuredSpec
      ]
    },
  ]
};

export const AddRiderFormSpecs: FormGeneratorSpecs =
  AddRiderFormGeneratorSpecs;

export const AccidentRiderFormSpecs: FormGeneratorSpecs =
  AccidentRiderFormGeneratorSpecs;

export const WaiverRiderFormSpecs: FormGeneratorSpecs =
  WaiverRiderFormGeneratorSpecs;

export const FlexiFundRiderFormSpecs: FormGeneratorSpecs =
  FlexiFundRiderFormGeneratorSpecs;

export const TermRiderFormSpecs: FormGeneratorSpecs =
  TermRiderFormGeneratorSpecs;

export const DecreasingTermRiderFormSpecs: FormGeneratorSpecs =
  DecreasingTermRiderFormGeneratorSpecs;
export const DreadDiseaseRiderFormSpecs: FormGeneratorSpecs =
  DreadDiseaseRiderFormGeneratorSpecs;

export const WaiverPremCriticalIllnessRiderFormSpecs: FormGeneratorSpecs =
  WaiverPremCriticalIllnessRiderFormGeneratorSpecs;

export const CriticalIllnessRiderFormSpecs: FormGeneratorSpecs =
  CriticalIllnessRiderFormGeneratorSpecs;

export const CostOfLivingAllowanceRiderFormSpecs: FormGeneratorSpecs =
  CostOfLivingAllowanceRiderFormGeneratorSpecs;

export const PayorsBenefitRiderFormSpecs: FormGeneratorSpecs =
  PayorsBenefitRiderFormGeneratorSpecs;

export const SustainabilityProtectionRiderFormSpecs: FormGeneratorSpecs =
SustainabilityProtectionRiderFormGeneratorSpecs;

export const AccidentProtectRiderFormSpecs: FormGeneratorSpecs =
AccidentProtectRiderFormGeneratorSpecs;

export const HospitalSurgicalRiderFormSpecs: FormGeneratorSpecs =
  HospitalSurgicalRiderFormGeneratorSpecs;

export const RiderSegmentFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siRiderFormSpecs.RiderSegmentSpec
      ]
    }
  ]
};

export const SetRidersButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siButtonSpecs.PreviousFundsButtonColumnSpecs,
        siButtonSpecs.SetFundsButtonColumnSpecs
      ]
    }
  ]
};

export const SetSummaryButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siButtonSpecs.PreviousSummaryButtonColumnSpecs,
        siButtonSpecs.SetSummaryButtonColumnSpecs
      ]
    }
  ]
};
