import {
  FundRiskTypeFormGroup,
  HistoricalNavpuFundFormGroup
} from '@form-group/sales-illustration/si-fund-selection-form-group';
import { RISK_TYPE } from '@utils/constants/options/segment/risk-type';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import {
  LowFundSelectionFormGroup,
  MediumFundSelectionFormGroup,
  HighFundSelectionFormGroup
} from '@form-group/sales-illustration/si-fund-selection-form-group';
import {
  HISTORICAL_NAVPU
} from '@utils/constants/options/segment/historical-navpu';
import { IonLabel } from '@ionic/angular';
import { values } from 'lodash';

export const PFIFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PFIF',
    fieldName: 'Peso Fixed Income Fund (PFIF)',
    type: 'range',
    setFieldName: true,
    formGroup: LowFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
    
  },
  size: 12,
};

export const PMMFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PMMF',
    fieldName: 'Peso Money Market Fund (PMMF)',
    type: 'range',
    setFieldName: true,
    formGroup: LowFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const DFIFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'DFIF',
    fieldName: 'Dollar Fixed Income Fund (DFIF)',
    type: 'range',
    setFieldName: true,
    formGroup: LowFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const DGODPBFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'DGODPBF',
    fieldName: 'Dollar Global Opportunistic Dividend Paying Bond Fund (DGODPBF)',
    type: 'range',
    setFieldName: true,
    formGroup: LowFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const PBFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PBF',
    fieldName: 'Peso Balanced Fund (PBF)',
    type: 'range',
    setFieldName: true,
    formGroup: MediumFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const PBDPFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PBDPF',
    fieldName: 'Peso Balanced Dividend-Paying Fund (PBDPF)',
    type: 'range',
    setFieldName: true,
    formGroup: MediumFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const PHDIDPFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PHDIDPF',
    fieldName: 'Peso-Hedged Diversified Income Dividend Paying Fund (PHDIDPF)',
    type: 'range',
    setFieldName: true,
    formGroup: MediumFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const DFADPBFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'DFADPBF',
    fieldName: 'Dollar Flexi Asia Dividend Paying Bond Fund (DFADPBF)',
    type: 'range',
    setFieldName: true,
    formGroup: MediumFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const DFABFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'DFABF',
    fieldName: 'Dollar Flexi Asia Bond Fund (DFABF)',
    type: 'range',
    setFieldName: true,
    formGroup: MediumFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const DGLIDPFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'DGLIDPF',
    fieldName: 'Dollar Global Income Dividend-Paying Fund (DGLIDPF)',
    type: 'range',
    setFieldName: true,
    formGroup: MediumFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const PEPGFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PEPGF',
    fieldName: 'Peso Equity Power Growth Fund (PEPGF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const DEPGFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'DEPGF',
    fieldName: 'Dollar Equity Power Growth Fund (DEPGF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const PDEFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PDEF',
    fieldName: 'Peso Dynasty Equity Fund (PDEF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const PODEFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PODEF',
    fieldName: 'Peso Optimized Dividend Equity Fund (PODEF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const PEFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PEF',
    fieldName: 'Peso Equity Fund (PEF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const PHAMIPDPFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PHAMIPDPF',
    fieldName: 'Peso-Hedged Asian Multi-Income Plus Dividend Paying Fund (PHAMIPDPF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const PHGSEFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PHGSEF',
    fieldName: 'Peso-Hedged Global Sustainability Equity Fund (PHGSEF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const PHGRADPFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PHGRADPF',
    fieldName: 'Peso-Hedged Global Real Assets Dividend Paying Fund (PHGRADPF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const PHIAGDPFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PHIAGDPF',
    fieldName: 'Peso-Hedged Income and Growth Dividend Paying Fund (PHIAGDPF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const PMSEFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PMSEF',
    fieldName: 'Peso Multi-Sector Equity Fund (PMSEF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const PHSGEDPFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PHSGEDPF',
    fieldName: 'Peso-Hedged Systematic Global Equity Dividend Paying Fund (PHSGEDPF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const DGEFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'DGEF',
    fieldName: 'Dollar Global Equity Fund (DGEF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const DAMIPDPFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'DAMIPDPF',
    fieldName: 'Dollar Asian Multi-Income Plus Dividend Paying Fund (DAMIPDPF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const DIGDPFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'DIGDPF',
    fieldName: 'Dollar Income and Growth Dividend Paying Fund (DIGDPF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const DGEPFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'DGEPF',
    fieldName: 'Dollar Global Equity Plus Fund (DGEPF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const DIGFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'DIGF',
    fieldName: 'Dollar Income and Growth Fund (DIGF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const DGRADPFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'DGRADPF',
    fieldName: 'Dollar Global Real Assets Dividend Paying Fund (DGRADPF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const DSGEDPFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'DSGEDPF',
    fieldName: 'Dollar Systematic Global Equity Dividend Paying Fund (DSGEDPF)',
    type: 'range',
    setFieldName: true,
    formGroup: HighFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const PSPDPFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'PSPDPF',
    fieldName: 'Peso Stability Plus Dividend Paying Fund (PSPDPF)',
    type: 'range',
    setFieldName: true,
    formGroup: MediumFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const DSPDPFSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'DSPDPF',
    fieldName: 'Dollar Stability Plus Dividend Paying Fund (DSPDPF)',
    type: 'range',
    setFieldName: true,
    formGroup: MediumFundSelectionFormGroup,
    range: {
      min: 0,
      max: 100,
      step: 5,
      ticks: true,
      snaps: true,
      pin: true
    }
  },
  size: 12,
};

export const RiskTypeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'risk',
    type: 'segment',
    setFieldName: false,
    options: RISK_TYPE,
    formGroup: FundRiskTypeFormGroup,
    isSegmentOption: false,
  },
  size: 12
};

export const NavpuYearButtonSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'navpuYear',
    type: 'segment',
    setFieldName: false,
    options: HISTORICAL_NAVPU,
    formGroup: HistoricalNavpuFundFormGroup,
    isSegmentOption: false,
  },
  size: 12
};
