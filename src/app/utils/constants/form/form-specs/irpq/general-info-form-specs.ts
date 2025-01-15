import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import * as CreateEditColSpecs from '@utils/constants/form/column-specs/irpq'

export const GeneralInfoFormSpecs: FormGeneratorSpecs = {
    rows: [
      {
        columns: [
          CreateEditColSpecs.PageTitleSpecs
        ]
      },
      {
        columns: [
          CreateEditColSpecs.PageDetailsSpecs
        ]
      },
      {
        columns: [
          CreateEditColSpecs.NetWorthSpecs,
          CreateEditColSpecs.AnnualIncomeSpecs,
          CreateEditColSpecs.ImportantObjSpecs,
          CreateEditColSpecs.ImportantObjOthersSpecs,
        ]
      },
      {
        class: "plan-header",
        columns: [
          CreateEditColSpecs.PleaseSelectSpecs,
          CreateEditColSpecs.CurrentlyHaveSpecs,
          CreateEditColSpecs.UsedTohaveSpecs
        ]
      },
      {
        columns: [
          CreateEditColSpecs.LifeInsuranceSpecs,
          CreateEditColSpecs.LifeInsuranceRadioSpecs,
        ]
      },
      {
        columns: [
          CreateEditColSpecs.CorporateBondsSpecs,
          CreateEditColSpecs.CorporateBondsRadioSpecs
        ]
      },
      {
        columns: [
          CreateEditColSpecs.TimeDepositeSpecs,
          CreateEditColSpecs.TimeDepositeRadioSpecs,
        ]
      },
      {
        columns: [
          CreateEditColSpecs.DerivativesSpecs,
          CreateEditColSpecs.DerivativesRadioSpecs
        ]
      },
      {
        columns: [
          CreateEditColSpecs.MutualFundSpecs,
          CreateEditColSpecs.MutualFundRadioSpecs,
        ]
      },
      {
        columns: [
          CreateEditColSpecs.RealEstateSpecs,
          CreateEditColSpecs.RealEstateRadioSpecs
        ]
      },
      {
        columns: [
          CreateEditColSpecs.StocksSpecs,
          CreateEditColSpecs.StocksRadioSpecs,
        ]
      },
      {
        columns: [
          CreateEditColSpecs.OwnBusinessSpecs,
          CreateEditColSpecs.OwnBusinessRadioSpecs
        ]
      },
      {
        columns: [
          CreateEditColSpecs.GovtSecuritiesSpecs,
          CreateEditColSpecs.GovtSecuritiesRadioSpecs
        ]
      },
      {
        columns: [
          CreateEditColSpecs.NextButtonColumnSpecs
        ]
      }
    ]
  }