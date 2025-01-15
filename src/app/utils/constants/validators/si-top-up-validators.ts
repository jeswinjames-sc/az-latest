export const SI_TOP_UP_VALIDATORS = {
  policyYear: {
    max: 100,
    min: 0
  },
  topUp: {
    max: 1000000000,
    min: 20000
  },
  withdrawal: {
    max: 999999999999999,
    min: 10000,
  },
  regularTopUp: {
    max: 1000000000,
    min: 0
  },
  scheduledWithdrawalStartAge: {
    max: 100,
    min: 50
  },
  scheduledWithdrawalEndAge: {
    max: 100,
    min: 65
  },
  scheduledWithdrawalAmount: {
    max: 999999999999999,
    min: 10000
  }
}