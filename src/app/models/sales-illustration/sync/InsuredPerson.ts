import { PreferredContactChannels } from './PreferredContactChannels';
import { Addresses } from './Addresses';

export class InsuredPerson{
    self ?: any;
    name ?: any;
    middleName ?: any;
    firstName ?: any;
    gender ?: any;
    maritalStatus ?: any;
    birthDate ?: any;
    occupation ?: any;
    occupationTitle ?: any;
    preferredContactChannels ?: PreferredContactChannels;
    addresses ?: Addresses;
    hasMiddleName ?: Boolean;
    accountManager ?: any;
    houseHoldMonthlyIncome ?: any;
    monthlyIncome ?: any;
    appointments ?: any;
    otherLegalName ?: {};
    maidenName ?: {};
    employer ?: any;
    annualIncome ?: any;
    annualIncomeCurrency ?: any;
    sourceOfIncome ?: any;
    otherSourceOfIncome ?: any;
    height ?: any;
    heightUnit ?: any;
    weight ?: any;
    weightUnit ?: any;
    employerBranchDetail ?: any;
    employerBranch ?: any
    cityOfBirth ?: any;
    birthPlaceRegion ?: any;
    nativeCountry ?: any;
    nationality ?: any;
    isUsPerson ?: any;
    identificationType ?: any;
    identificationNumber ?: any;
    relationType ?: any;
    father ?: {};
    mother ?: {};
    siblings ?: {};
    questions ?: {};
    addressReference ?: any;
    empty ?: any;
    age ?: any;
}

export class InsuredPersonV2{
    self ?: any = null;
    name ?: any = null;
    middleName ?: any = null;
    firstName ?: any = null;
    gender ?: any = null;
    maritalStatus ?: any = null;
    birthDate ?: any = null;
    occupation ?: any = null;
    occupationTitle ?: any = null;
    preferredContactChannels ?: PreferredContactChannels;
    addresses ?: Addresses;
    otherLegalName ?: {} = {};
    motherMaidenName ?: {} = {};
    annualIncome ?: any = null;
    annualIncomeCurrency ?: any = null;
    sourceOfIncome ?: any = null;
    otherSourceOfIncome ?: any = null;
    height ?: any = null;
    heightUnit ?: any = null;
    weight ?: any = null;
    weightUnit ?: any = null;
    birthPlace ?: any = null;
    nationality ?: any = null;
    employer ?: any = null;
    natureOfBusiness ?: any = null;
    occupationDetails ?: any = null;
    age ?: any = null;
    suffix ?: any = null;
    ltgEmployeeTag ?: boolean = null;
    countryOfResidence ?: any = null;
    durationOfStay ?: any = null;
    identificationNumber ?: any = null;
    identificationType ?: any = null;
    usPerson ?: boolean = null;
}