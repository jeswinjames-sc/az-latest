import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { DeleteButtonColumnSpecs } from '@form/column-specs/shared/button/delete-button-specs';
import { AddButtonColumnSpecs } from '@form/column-specs/shared/button/add-button-specs';
import { UpdateButtonColumnSpecs } from '@form/column-specs/shared/button/update-button-specs';
import * as siButtonSpecs from '@form/column-specs/sales-illustration/si-button-specs';
import * as siTopUpFormSpecs from '@form/column-specs/sales-illustration/si-top-up-column-specs';

export const SITopUpWithdrawalFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siTopUpFormSpecs.PolicyYearSpec,
        siTopUpFormSpecs.AgeSpec
      ]
    },
    {
      columns: [
        siTopUpFormSpecs.TopUpSpec,
        siTopUpFormSpecs.WithdrawalSpec
      ]
    },
    {
      columns: [
        AddButtonColumnSpecs,
        UpdateButtonColumnSpecs,
        DeleteButtonColumnSpecs
      ]
    },
    {
      columns: [
        siTopUpFormSpecs.RegularTopUpSpec,
        siTopUpFormSpecs.ScheduledWithdrawalStartAgeSpec
      ]
    },
    {
      columns: [
        siTopUpFormSpecs.ScheduledWithdrawalEndAgeSpec,
        siTopUpFormSpecs.ScheduledWithdrawalAmountpSpec
      ]
    }
  ]
};

export const SetTopUpWithdrawalButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siButtonSpecs.PreviousSummaryButtonColumnSpecs,
        siButtonSpecs.SetSummaryButtonColumnSpecs
      ]
    }
  ]
};
