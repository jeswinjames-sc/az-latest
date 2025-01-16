import { ApplicantOwner } from '@models/sales-illustration/applicant-owner';
import { ProposedInsured } from '@models/sales-illustration/proposed-insured';

export interface SalesIllustration {
  applicantOwner: ApplicantOwner;
  proposedInsured: ProposedInsured
}