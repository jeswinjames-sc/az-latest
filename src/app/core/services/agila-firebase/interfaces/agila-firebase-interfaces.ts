import { EMODULES } from "../enums/agila-firebase-enums";

export interface IUserAppActivity {
    module: EMODULES
    body: IFNAMain | ISI_MAIN | IEAPP_Main;
    type: string; // 'offlinedata' | 'request body';
    moduleId: string; // naId, siId , eappId
}

export interface IFNAMain {
    naId?: string;
    leadId: string;
    needType: string;
    dateCreated: number;
    isDeleted?: number;
    syncStatus: number;
    serverId: string;
    isCompleted?: number;
    dateModified: number;
    isWaived?: number;
    FNA_S?: IFNA_S;
    FNA_P?: IFNA_P;
    FNA_H?: IFNA_H;
    FNA_E?: IFNA_E;
    FNA_R?: IFNA_R;
    FNA_Ep?: IFNA_Ep;
    timeStamp?: any;
}

export interface IFNA_S {
    naId: string;
    savingsGoal: string;
    goalCost: number;
    yearsToAchieveGoal: number;
    currentSavings: number;
}

export interface IFNA_P {
    naId: string;
    monthlyIncome: number;
    yearsToAchieveGoal: number;
    currentSavings: number;
}

export interface IFNA_H {
    naId: string;
    goalCost: number;
    currentSavings: number;
}

export interface IFNA_E {

    naId: string;
    childAge: number;
    schoolType: string;
    annualTutionFee: number;
    currentSavings: number;
}

export interface IFNA_R {
    naId: string;
    age: number;
    monthlyExpenses: number;
    yearsUntilRetirement: number;
    retirementYears: number;
    currentSavings: number;
}

export interface IFNA_Ep {
    naId: string;
    currentSavings: number;
    realEstateValue: number;
    investmentBondStocks: number;
    otherAssets: number;
}

export interface ISI_MAIN {
    siId: string;
    leadId: string;
    naId: string;
    irpqId: string;
    annualPremium: string;
    basicSumAssured: number;
    currency: string;
    dateCreated: string;
    dateModified: string;
    deathBenefit: string;
    dividendOption: string;
    flatExtra: number;
    inputOption: string;
    inputPremium: number;
    isAoEqualsPi: number;
    isCompleted: number;
    isDeleted: number;
    isTraditional: number;
    modalPremium: number;
    payMode: string;
    payYears: number;
    pdfFilePath: string;
    personalObjectives: string;
    planCode: string;
    planVersion: number;
    planVariant: string;
    riskClass: string;
    serverId: string;
    sumAssuredMultiple: number;
    syncStatus: number;
    tableRating: string;
    underwritingApproach: string;
    lifePriorityCategory: string;
    regularTopUp: number;
    scheduledWithdrawalAmount: number;
    scheduledWithdrawalEndAge: number;
    scheduledWithdrawalStartAge: number;
    leadServerId: string;
    naServerId: string;
    irpqServerId: string;
    productCode: string;
    baseRatingCode: string;
    bmiHeightInCm: number;
    bmiWeightInKg: number;
    bmiTotal: number;
    premiumTotal: number;
    deductible: string;
    areaOfCover: string;
    policyDate: string;
    referringPartner: string;
    annualPlanLimit: string;
    benefits: string;
    wellnessLimit: string;
    SI_PERSONS?: ISI_PERSONS[];
    SI_TOPUP?: ISI_TOPUP;
    SI_RIDERS?: ISI_RIDERS[];
    SI_FUNDS?: ISI_FUNDS[];
    timeStamp?: any;
}

export interface ISI_PERSONS {
    personId: string;
    siId: string;
    classification: string;
    ltgTag: string;
    personType: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    gender: string;
    occupationCode: string;
    occupationGrpCode: string;
    occupationTitle: string;
    vesselType: string;
    homeUnitBuilding: string;
    homeLotBlock: string;
    homeStreet: string;
    homeBarangay: string;
    homeCountryCode: string;
    homeProvinceCode: string;
    homeCityCode: string;
    homeZipCode: string;
    workUnitBuilding: string;
    workLotBlock: string;
    workStreet: string;
    workBarangay: string;
    workCountryCode: string;
    workProvinceCode: string;
    workCityCode: string;
    workZipCode: string;
    serverId: string;
}

export interface ISI_TOPUP {
    siId: string;
    age: number;
    policyYear: string;
    topUpAmt: number;
    withdrawalAmt: number;
}

export interface ISI_RIDERS {
    siId: string;
    riderKey: string;
    riskClassCode: string;
    riskClassVersion: number;
    riderVersion: number;
    riderCode: string;
    multipleExtra: number;
    sumAssured: number;
}

export interface ISI_FUNDS {
    siId: string;
    fundKey: string;
    fundDirection: number;
    fundVersion: number;
}

export interface IEAPP_Main {
    eappId: string;
    siId: string;
    leadId: string;
    applicationNumber: string;
    paymentScheme: string;
    premiumDefaultOption: string;
    settlementOption: string;
    isSoftSubmitted: string;
    payoutOption: string;
    bankName: string;
    bankBranch: string;
    accountCurrency: string;
    accountNumber: string;
    jointAccount: string;
    typeOfAccount: string;
    bankAccountName: string;
    coDepositorName: string;
    hadInsuranceApplication: string;
    hasPendingApplication: string;
    spouseInforcedAmount: string;
    minorInforcedInsuranceAmount: string;
    policyWillBePaidBeOthers: string;
    policyWillBePaidBeOthersMoreDetails: string;
    policyIntentedToChange: string;
    premiumsPaidByLoad: string;
    interPolicyIntentedToChange: string;
    interPremiumsPaidByLoad: string;
    eappStatus: string;
    dateCreated: string;
    isDeleted: number;
    syncStatus: number;
    serverId: string;
    leadServerId: string;
    siServerId: string;
    dateModified: string;
    isAOEqualBO: string;
    purpose: string;
    otherPurpose: string;
    generatedOnline: boolean;
    attachedDate: string;
    EAPP_Person?: IEAPP_Person;
    EAPP_Beneficiaries?: IEAPP_Beneficiaries[];
    EAPP_FundsTopUpDirection?: IEAPP_FundsTopUpDirection;
    EAPP_Payout_Banks?: IEAPP_Payout_Banks[];
    EAPP_PendingApplication?: IEAPP_PendingApplication;
    EAPP_TotalInsuranceInforce?: IEAPP_TotalInsuranceInforce;
    EAPP_ReplacementNotification?: IEAPP_ReplacementNotification;
    EAPP_NonMed_Main?: IEAPP_NonMed_Main[];
    EAPP_Signatures?: IEAPP_Signatures[];
    timeStamp?: any;
}

export interface IEAPP_Person {
    personId: string;
    eappId: string;
    personType: string;
    contactNumber: string;
    email: string;
    relationshipToPI: string;
    otherFirstName: string;
    otherMiddleName: string;
    otherLastName: string;
    motherFirstName: string;
    motherMiddleName: string;
    motherLastName: string;
    civilStatus: string;
    pobCountry: string;
    pobProvince: string;
    pobCity: string;
    nationality: string;
    isUSPerson: string;
    identificationType: string;
    identificationNumber: string;
    annualIncome: number;
    employer: string;
    natureOfBusiness: string;
    occupationTitle: string;
    sourceOfFunds: string;
    otherSourceOfFunds: string;
    preferredMailingAddress: string;
    validIdNumber: string;
    coFirstName: string;
    coMiddleName: string;
    coLastName: string;
    coDateOfBirth: string;
    coRelationship: string;
    armyBranch: string;
    rank: string;
    airlineJob: string;
    aircraftType: string;
    numberOfFlightExpirience: string;
    vesselOwner: string;
    vesselType: string;
    vesselCountry: string;
    fishingArea: string;
    serverId: string;
    isPoliticallySensitive: string;
    prominentPublicPosition: string;
    EAPP_Person_VesselOperationInfo?: IEAPP_Person_VesselOperationInfo;
}

export interface IEAPP_Person_VesselOperationInfo {
    vesselOperationID: string;
    personId: string;
    water: string;
    port: string;
}

export interface IEAPP_Beneficiaries {
    beneId: string;
    eappId: string;
    hasNoMiddleName: number;
    firstName: string;
    middleName: string;
    lastName: string;
    dateOfBirth: string;
    nationalityCountryCode: string;
    designation: string;
    priority: string;
    sharePercentage: number;
    relationToPI: string;
    justification: string;
    unitBuilding: string;
    blockNumber: string;
    streetName: string;
    barangay: string;
    countryCode: string;
    provinceCode: string;
    cityCode: string;
    zipCode: string;
    declaration1: string;
    declaration2: string;
    declaration3: string;
    declaration4: string;
    guardianFirstName: string;
    guardianMiddleName: string;
    guardianLastName: string;
    guardianDateOfBirth: string;
    guardianRelationToBene: string;
    serverId: string;
    questionCodeSet: string;
    pobCountry: string;
    pobProvince: string;
    pobCity: string;
    mobileNumber: string;
    emailAddress: string;
    gender: string;
}

export interface IEAPP_FundsTopUpDirection {
    eappId: string;
    fundKey: string;
    topUpDirection: string;
}

export interface IEAPP_Payout_Banks {
    bankId: string;
    eappId: string;
    coDepositorName: string;
}

export interface IEAPP_PendingApplication {
    pendingAppId: string;
    eappId: string;
    company: string;
    basicLife: string;
    basicLifeCurrency: string;
    status: string;
    yearOfIssue: string;
}

export interface IEAPP_TotalInsuranceInforce {
    totalInsuranceId: string;
    eappId: string;
    company: string;
    basicLife: string;
    basicLifeCurrency: string;
    accident: string;
    accidentCurrency: string;
    yearOfIssue: string;
}

export interface IEAPP_ReplacementNotification {
    replacementNotifId: string;
    eappId: string;
    company: string;
    policyNo: string;
    amountInsuranceReplaced: string;
    amountInsuranceReplacedCurrency: string;
    afcInsured: string;
}

export interface IEAPP_NonMed_FamilyMembers {
    famMemberId: string;
    nonMedId: string;
    relationship: number;
    firstName: string;
    middleName: string;
    lastName: string;
    age: number;
    hasCancer: string;
    hasCoronary: string;
    hasCardiovascular: string;
    hasAlzheimers: string;
}

export interface IEAPP_NonMed_Main {
    nonMedId: string;
    eappId: string;
    isForPBR: string;
    heightCM: number;
    weightKG: number;
    noParent: string;
    fatherFirstName: string;
    fatherLastName: string;
    fatherMiddleName: string;
    fatherAge: number;
    motherFirstName: string;
    motherLastName: string;
    motherMiddleName: string;
    motherAge: number;
    cardiovascularDisFamilyCount: string;
    cerebrovascularDisFamilyCount: string;
    diabetesFamilyCount: string;
    alzheimersFamilyCount: string;
    kidneyDisFamilyCount: string;
    cancerFamilyCount: string;
    cancerTypeCount: string;
    EAPP_NonMed_FamilyMembers?: IEAPP_NonMed_FamilyMembers[];
    EAPP_NonMed_Alcohol_Doctors?: IEAPP_NonMed_Alcohol_Doctors[];
    EAPP_NonMed_Detox_Doctors?: IEAPP_NonMed_Detox_Doctors[];
    EAPP_NonMed_Foreign_Travel_Residence?: IEAPP_NonMed_Foreign_Travel_Residence[];
    EAPP_NonMed_VesselOperationInfo?: IEAPP_NonMed_VesselOperationInfo[];
    EAPP_NonMed_Answers?: IEAPP_NonMed_Answers[];
}

export interface IEAPP_NonMed_Alcohol_Doctors {
    alcoholDoctorsId: string;
    nonMedId: string;
    name: string;
    address: string;
    dateOfConsultation: string;
}

export interface IEAPP_NonMed_Detox_Doctors {
    detoxDoctorsId: string;
    nonMedId: string;
    name: string;
}

export interface IEAPP_NonMed_Foreign_Travel_Residence {
    foreignTravelId: string;
    nonMedId: string;
    country: string;
    plannedStartDate: string;
    plannedEndDate: string;
    city: string;
}

export interface IEAPP_NonMed_VesselOperationInfo {
    vesselOperationId: string;
    nonMedId: string;
    water: string;
    port: string;
}

export interface IEAPP_NonMed_Answers {
    nonMedId: string;
    questionId: string;
    answerValue: string;
}

export interface IEAPP_Signatures {
    signatureId: string;
    eappId: string;
    signatureType: string;
    signatureBase64: string;
    signatureDate: string;
    paperFormatConsent: boolean;
    thirdPartyConsent: boolean;
    isAttestation: string;
    attestationBase64: string;
    videoScreenshotBase64: string;
    emailAcknowledgementBase64: string;
    disableEDD: boolean;
    referrorId: string;
    intmPolicyIntendedToChange: string;
    intmPremiumsPaidByLoan: string;
}

export interface IIRPQ {
    irpqId: string;
    leadId: string;
    naId: string;
}

export interface ISQL_data {
    module?: string,
    moduleId?: string;
}