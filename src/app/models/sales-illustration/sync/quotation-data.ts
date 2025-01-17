import { ContractHolder } from './contract-holder';
import { FundDetails } from './FundDetails';
import { BaseRating } from './BaseRating';
import { RelatedLead, RelatedLeadV2 } from './RelatedLead';
import { NeedsAnalysis } from './NeedsAnalysis';
import { InvestmentProfile } from './InvestmentProfile';
import { Coverage } from './Coverages';
import { TopUp } from './TopUs';
import { InsuredPerson } from './InsuredPerson';

export class QuotationData{
    contractHolder ?: ContractHolder;
    insuredPerson ?: InsuredPerson;
    contractProcessState ?: any;
    self ?: any;
    paymentDuration ?: any;
    underWritingApproach ?: any;
    currency ?: any;
    deathBenefitType ?: any;
    isAOequalsPI ?: any;
    fundDetails ?: FundDetails [];
    dividendOption ?: any;
    firstPremium ?: any;
    baseRating ?: BaseRating;
    productOfferingName ?: any;
    productOfferingDescription ?: any;
    productOfferingCategory ?: any;
    paymentFrequency ?: any;
    relatedLead ?: RelatedLead;
    needAnalysis ?: NeedsAnalysis;
    investmentProfile ?: InvestmentProfile;
    status ?: any;
    calculationType ?: any;
    coverages ?: Coverage [];
    topUp ?: TopUp;
    multiplierFactor ?: any;
    lifePriority ?: any;
    insuranceSum ?: any;
    forMultipleDisease?: any;
    hadMultipleDisease?: any;
    productOfferingVersion ?: number;
    premiumPayment?: string;
}

export class QuotationDataV2{
    resource ?: any = null; 
    status ?: any = null;
    createdDate ?: any = null;
    updatedDate?: any = null;
    quotationFinderService ?: any = {};
    planRepository ?: any = {};
    clientRefId ?: any = null;
    self ?: any = null;
    relatedLead ?: RelatedLead;
    fundDetails ?: FundDetails [];
    investmentProfile ?: InvestmentProfile;
    fnaId ?: NeedsAnalysis;
    contractHolder ?: ContractHolder;
    insuredPerson ?: InsuredPerson;
    insuranceSum?: any;
    firstPremium?: any;
    isAOequalsPI?: any;
    currency?: any;
    productOfferingName?: any;
    productOfferingDescription?: any;
    productOfferingCategory?: any;
    productOfferingVersion?: any;
    paymentFrequency?: any;
    calculationType?: any;
    multiplierFactor?: any;
    baseRating?: any;
    paymentDuration?: any;
    addressReference?: any;
    dividendOption?: any;
    deathBenefitType?: any;
    coverages?: any;
    lifePriority?: any;
    underWritingApproach?: any;
    planType?: any;
    classification?: any;
    deductible?: any;
    areaOfCover?: any;
    commencementOfCover?: any;
    dependents?: any = [];
}