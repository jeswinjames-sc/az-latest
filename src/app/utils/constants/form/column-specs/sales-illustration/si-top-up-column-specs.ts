import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import {
  SITopUpWithdrawalFormGroup
} from '@form-group/sales-illustration/si-top-up-form-group';

export const PolicyYearSpec: ColumnGeneratorSpecs = {
  field: {
    attName: "policyYear",
    fieldName: "Policy Year",
    type: "text",
    attMaxLength: '3',
    setFieldName: true,
    formGroup: SITopUpWithdrawalFormGroup
  },
  size: 6
};

export const AgeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: "age",
    fieldName: "Age",
    type: "tel",
    attMaxLength: '3',
    setFieldName: true,
    formGroup: SITopUpWithdrawalFormGroup
  },
  size: 6
};

export const TopUpSpec: ColumnGeneratorSpecs = {
  field: {
    attName: "topUp",
    fieldName: "Top-ups",
    type: "tel",
    attMaxLength: '50',
    setFieldName: true,
    formGroup: SITopUpWithdrawalFormGroup
  },
  size: 12
};
export const WithdrawalSpec: ColumnGeneratorSpecs = {
  field: {
    attName: "withdrawal",
    fieldName: "Withdrawals",
    type: "tel",
    attMaxLength: '50',
    setFieldName: true,
    formGroup: SITopUpWithdrawalFormGroup
  },
  size: 12
};

export const RegularTopUpSpec: ColumnGeneratorSpecs = {
  field: {
    attName: "regularTopUp",
    fieldName: "Regular Top-up",
    type: "tel",
    attMaxLength: '50',
    setFieldName: true,
    formGroup: SITopUpWithdrawalFormGroup
  },
  size: 12
};

export const ScheduledWithdrawalStartAgeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: "scheduledWithdrawalStartAge",
    fieldName: "Scheduled Withdrawal Start Age",
    type: "tel",
    attMaxLength: '50',
    setFieldName: true,
    formGroup: SITopUpWithdrawalFormGroup
  },
  size: 12
};

export const ScheduledWithdrawalEndAgeSpec: ColumnGeneratorSpecs = {
  field: {
    attName: "scheduledWithdrawalEndAge",
    fieldName: "Scheduled Withdrawal End Age",
    type: "tel",
    attMaxLength: '50',
    setFieldName: true,
    formGroup: SITopUpWithdrawalFormGroup
  },
  size: 12
};

export const ScheduledWithdrawalAmountpSpec: ColumnGeneratorSpecs = {
  field: {
    attName: "scheduledWithdrawalAmount",
    fieldName: "Scheduled Withdrawal Amount",
    type: "tel",
    attMaxLength: '50',
    setFieldName: true,
    formGroup: SITopUpWithdrawalFormGroup
  },
  size: 12
};

export const TOPUPWITHDRAWAL_SPEC = [
  PolicyYearSpec, AgeSpec, TopUpSpec, WithdrawalSpec,
  RegularTopUpSpec, ScheduledWithdrawalStartAgeSpec,
  ScheduledWithdrawalEndAgeSpec, ScheduledWithdrawalAmountpSpec
];