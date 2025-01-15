import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import {
  FundDescription,
  HistoricalNavpuDescription
} from '@form/column-specs/shared/template/template-spec';

import * as siButtonSpecs from '@form/column-specs/sales-illustration/si-button-specs';
import * as siFundsFormSpecs from '@form/column-specs/sales-illustration/si-fund-selection-column-specs';

export const HIGH_COL_SPEC = [
  siFundsFormSpecs.PEFSpec,
  siFundsFormSpecs.PDEFSpec,
  siFundsFormSpecs.PMSEFSpec,
  siFundsFormSpecs.PODEFSpec,
  siFundsFormSpecs.PHGSEFSpec,
  siFundsFormSpecs.PHAMIPDPFSpec,
  siFundsFormSpecs.PHGRADPFSpec,
  siFundsFormSpecs.PHIAGDPFSpec,
  siFundsFormSpecs.PHSGEDPFSpec,
  siFundsFormSpecs.DGEFSpec,
  siFundsFormSpecs.DAMIPDPFSpec,
  siFundsFormSpecs.DIGDPFSpec,
  siFundsFormSpecs.DIGFSpec,
  siFundsFormSpecs.DGEPFSpec,
  siFundsFormSpecs.DGRADPFSpec,
  siFundsFormSpecs.DSGEDPFSpec,
  siFundsFormSpecs.PEPGFSpec,
  siFundsFormSpecs.DEPGFSpec,
];

export const MEDIUM_COL_SPEC = [
  siFundsFormSpecs.PBFSpec,
  siFundsFormSpecs.PBDPFSpec,
  siFundsFormSpecs.PHDIDPFSpec,
  siFundsFormSpecs.DFADPBFSpec,
  siFundsFormSpecs.DFABFSpec,
  siFundsFormSpecs.DGLIDPFSpec,
  siFundsFormSpecs.PSPDPFSpec,
  siFundsFormSpecs.DSPDPFSpec
];

export const LOW_COL_SPEC = [
  siFundsFormSpecs.PFIFSpec,
  siFundsFormSpecs.PMMFSpec,
  siFundsFormSpecs.DFIFSpec,
  siFundsFormSpecs.DGODPBFSpec
];

export const HighFundSelectionFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: HIGH_COL_SPEC
    }
  ]
};

export const MediumFundSelectionFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: MEDIUM_COL_SPEC
    }
  ]
};

export const LowFundSelectionFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: LOW_COL_SPEC
    },
  ]
};

export const FundDescriptionFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        FundDescription
      ]
    },
  ]
};

export const FundHistoricalNavpuFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        HistoricalNavpuDescription
      ]
    },
  ]
};

export const HistoricalNavpuButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siFundsFormSpecs.NavpuYearButtonSpec
      ]
    },
  ]
};

export const FundRiskTypeFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siFundsFormSpecs.RiskTypeSpec
      ]
    },
  ]
};

export const SetFundButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siButtonSpecs.PreviousTopUpWithdrawalButtonColumnSpecs,
        siButtonSpecs.SetTopUpWithdrawalButtonColumnSpecs
      ]
    }
  ]
};
