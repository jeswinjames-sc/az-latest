import {
  CustomizeSalesIllustrationFormGroup,
  CustomizeSalesIllustrationPlanFormGroup
} from '@form-group/sales-illustration/customize-si-details-form-group';
import { DEATH_BENEFIT } from '@utils/constants/options/segment/death-benefit';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { UNDERWRITING_APPROACH } from '@utils/constants/options/segment/underwriting-approach';
import { CURRENCY } from '@utils/constants/options/segment/currency';
import * as _ from 'lodash';

export const RESET_CUSTOMIZE_SPECS = {
  options: undefined,
  isDisabled: false,
  formGroup: CustomizeSalesIllustrationFormGroup,
  interface: undefined,
  isVisible: undefined,
  conditionalFunction: undefined,
  onBlur: undefined
};

export const UnderwritingApproachSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'underwritingApproach',
    fieldName: 'Product Type',
    type: 'segment',
    setFieldName: true,
    options: UNDERWRITING_APPROACH,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label'
  },
  size: 6
};

export const PayModeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'payMode',
    fieldName: 'Mode of Payment',
    type: 'select',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const CurrencySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'currency',
    fieldName: 'Currency',
    type: 'segment',
    setFieldName: true,
    options: CURRENCY,
    ...RESET_CUSTOMIZE_SPECS,
    class: 'customize-si-label'
  },
  size: 6
};

export const RiskClassSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'riskClass',
    fieldName: 'Table Rating',
    type: 'text',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const InputPremiumSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'inputPremium',
    fieldName: 'Premium',
    type: 'text',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const DeathBenefitSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'deathBenefit',
    fieldName: 'Death Benefit',
    type: 'select',
    setFieldName: true,
    options: DEATH_BENEFIT,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6
};

export const BasicSumAssuredSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'basicSumAssured',
    fieldName: 'Basic Sum Assured',
    type: 'text',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};


export const SumAssuredMultipleSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'sumAssuredMultiple',
    fieldName: 'Sum Assured Multiple',
    type: 'text',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};


export const ApplicationNumberSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'applicationNumber',
    fieldName: 'Application Number',
    type: 'text',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end' 
  },
  size: 6,
};

export const PayYearsSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'payYears',
    fieldName: 'Pay years',
    type: 'text',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const DividendOptionSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'dividendOption',
    fieldName: 'Dividend Option',
    type: 'select',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};



export const PersonalObjectivesSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'personalObjectives',
    fieldName: 'Personal Objectives',
    type: 'select',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const FlatExtraSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'flatExtra',
    fieldName: 'Flat Extra',
    type: 'text',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const InputOptionSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'inputOption',
    fieldName: 'Input Option',
    type: 'segment',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const ModalPremiumSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'modalPremium',
    fieldName: 'Modal Premium',
    type: 'text',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6
};

export const PolicyDateSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'policyDate',
    fieldName: 'Policy Date',
    type: 'text',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const PlanVariantsSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'planVariants',
    fieldName: 'Chosen Health Plan:',
    type: 'select',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const PremiumPaymentSpec: ColumnGeneratorSpecs = { 
  field: { 
    attName: 'premiumPayment', 
    fieldName: 'Premium Payment', 
    type: 'select', 
    setFieldName: true, 
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  }, 
  size: 6, 
}; 

export const ProductNameSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'planName',
    formGroup: CustomizeSalesIllustrationPlanFormGroup,
    type: 'readOnly',
    attMaxLength: '150',
    setFieldName: false,
    fieldName: 'Customize Product:',
    class: 'customize-si-product-name'
  },
  size: 12
};

export const AreaOfCoverSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'areaOfCover',
    fieldName: 'Area of Cover',
    type: 'select',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const DeductibleSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'deductible',
    fieldName: 'Deductible',
    type: 'select',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const PolicySpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'policyDate',
    fieldName: 'Policy Date',
    type: 'select',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const ReferringPartnerSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'referringPartner',
    fieldName: 'Referred By',
    type: 'select',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const AnnualPlanLimitSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'annualPlanLimit',
    fieldName: 'Annual Plan Limit',
    type: 'text',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const BenefitsSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'benefits',
    fieldName: 'Benefits',
    type: 'select',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};

export const WellnessLimitSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'wellnessLimit',
    fieldName: 'Wellness Limit',
    type: 'text',
    setFieldName: true,
    ...RESET_CUSTOMIZE_SPECS,
    class:'customize-si-label ion-text-end'
  },
  size: 6,
};