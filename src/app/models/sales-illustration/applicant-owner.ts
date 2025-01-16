import { BaseApplicantOwner } from './base-applicant-owner';
import { BaseTableStatus } from '@models/base-table-status';
import { BaseWorkAddress } from '@models/base-work-address';
import { BaseHomeAddress } from '@models/base-home-address';
import { BaseModel } from '@models/base-model';
import { BaseOccupationCode } from '@models/base-occupation';

export interface ApplicantOwner extends BaseModel, BaseHomeAddress, BaseWorkAddress, BaseTableStatus, BaseOccupationCode {
  classification?: string;
  ltgTag?: string;
  isAoEqualsToPi: boolean | string;
  data?: BaseApplicantOwner;
  durationOfStay?: string;
  durationOfStayInput?: string;
  durationOfStaySelect?: string;
}