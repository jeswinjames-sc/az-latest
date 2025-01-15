import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import * as siCustomizeFormSpecs from '@form/column-specs/sales-illustration/customize-si-details';
import * as siButtonSpecs from '@form/column-specs/sales-illustration/si-button-specs';

export const CustomizeSalesIllustrationFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siCustomizeFormSpecs.ProductNameSpec,
        siCustomizeFormSpecs.UnderwritingApproachSpec,
        siCustomizeFormSpecs.PayModeSpec,
        siCustomizeFormSpecs.PlanVariantsSpec,
        siCustomizeFormSpecs.CurrencySpec,
        siCustomizeFormSpecs.InputPremiumSpec,
        siCustomizeFormSpecs.DividendOptionSpec,
        siCustomizeFormSpecs.DeathBenefitSpec,
        siCustomizeFormSpecs.InputOptionSpec,
        siCustomizeFormSpecs.ModalPremiumSpec,
        siCustomizeFormSpecs.BasicSumAssuredSpec,
        siCustomizeFormSpecs.SumAssuredMultipleSpec,
        siCustomizeFormSpecs.ApplicationNumberSpec,
        siCustomizeFormSpecs.PayYearsSpec,
        siCustomizeFormSpecs.PersonalObjectivesSpec,
        siCustomizeFormSpecs.FlatExtraSpec, 
        siCustomizeFormSpecs.PremiumPaymentSpec,
        siCustomizeFormSpecs.AreaOfCoverSpec,
        siCustomizeFormSpecs.DeductibleSpec,
        siCustomizeFormSpecs.PolicyDateSpec,
        siCustomizeFormSpecs.ReferringPartnerSpec,
        siCustomizeFormSpecs.AnnualPlanLimitSpec,
        siCustomizeFormSpecs.BenefitsSpec,
        siCustomizeFormSpecs.WellnessLimitSpec,

      ],
    }
  ]
};

export const RiderButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siButtonSpecs.PreviousRidersButtonColumnSpecs,
        siButtonSpecs.AttachRidersButtonColumnSpecs
      ]
    }
  ]
};

export const FundsButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siButtonSpecs.PreviousFundsButtonColumnSpecs,
        siButtonSpecs.SetFundsButtonColumnSpecs
      ]
    }
  ]
};

export const HealthRiderButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siButtonSpecs.HealthPreviousRidersButtonColumnSpecs,
        siButtonSpecs.HealthAttachRidersButtonColumnSpecs
      ]
    }
  ]
};

export const EazyHealthSummaryButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siButtonSpecs.EazyHealthPreviousButtonColumnSpecs,
        siButtonSpecs.EazyHealthSummaryButtonColumnSpecs
      ]
    }
  ]
};

export const SummaryButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siButtonSpecs.PreviousSummaryButtonColumnSpecs,
        siButtonSpecs.SetSummaryButtonColumnSpecs
      ]
    }
  ]
};

export const BussSummaryButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siButtonSpecs.BussPreviousButtonColumnSpecs,
        siButtonSpecs.BussSummaryButtonColumnSpecs
      ]
    }
  ]
};