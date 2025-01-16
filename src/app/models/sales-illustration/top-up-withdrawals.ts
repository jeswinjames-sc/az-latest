export interface TopUpWithdrawals {
  id: number;
  policyYear: number;
  age: number;
  topUp: number;
  withdrawal: number;
  regularTopUp?: number;
  scheduledWithdrawalStartAge?: number;
  scheduledWithdrawalEndAge?: number;
  scheduledWithdrawalAmount?: number;
}