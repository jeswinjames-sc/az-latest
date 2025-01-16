import { PreferredContactChannels } from './PreferredContactChannels';
import { Addresses } from './Addresses';
import { InsuredPerson } from './InsuredPerson';
import { Person } from '@models/eapp-request/person';

export class Beneficiary{
    self?: any;
    order?: any;
    justification?: any;
    priorityLevel?: any;
    isRevocable?: any;
    percent?: any;
    minor?: any;
    person?: InsuredPerson;
    usePreviousGuardian?: any;
    guardian?: Person;
    isEstateBeneficiary?: any;
}
