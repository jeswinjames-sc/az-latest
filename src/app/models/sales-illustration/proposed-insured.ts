import { BaseModel } from '@models/base-model';
import { BaseHomeAddress } from '@models/base-home-address';
import { BaseWorkAddress } from '@models/base-work-address';
import { BaseTableStatus } from '@models/base-table-status';
import { BaseOccupationCode } from '@models/base-occupation';

export interface ProposedInsured extends BaseModel, BaseHomeAddress, BaseWorkAddress, BaseTableStatus, BaseOccupationCode {
  personId: string;
  durationOfStay?: string;
  durationOfStayInput?: string;
  durationOfStaySelect?: string;
}