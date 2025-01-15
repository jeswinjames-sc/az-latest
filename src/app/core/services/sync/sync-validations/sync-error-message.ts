// Codes below are use in sync.service for proper message of errors that the users will see

const data = [
  { key: 'clientRefId', label: 'Client ref id'},
  { key: 'createdDate', label: 'Created date'},
  { key: 'isDeleted', label: 'Is deleted'},
  { key: 'lastUpdateDate', label: 'Last update date'}
];

const personalInformation = [
  { key: 'firstName', label: 'First name' },
  { key: 'middleName', label: 'Middle name' },
  { key: 'name', label: 'Name' },
  { key: 'lastName', label: 'Last name' },
  { key: 'gender', label: 'Gender' },
  { key: 'dateOfBirth', label: 'Date of birth' },
  { key: 'birthDate', label: 'Birth date' },
  { key: 'age', label: 'Age' },
  { key: 'occupation', label: 'Occupation' },
  { key: 'relationType', label: 'Relationship type' }
];

const addressHome = [
  { key: 'buildingName', label: 'Building name (Home)' },
  { key: 'cityCode', label: 'City code (Home)' },
  { key: 'countryCode', label: 'Country code (Home)' },
  { key: 'district', label: 'District (Home)' },
  { key: 'state', label: 'State (Home)' },
  { key: 'street', label: 'Street (Home)' },
  { key: 'streetNumber', label: 'Street number (Home)' },
  { key: 'type', label: 'Type (Home)' },
  { key: 'zipCode', label: 'Zipcode (Home)' }
];

const addressWork = [
  { key: 'buildingName', label: 'Building name (Work)' },
  { key: 'cityCode', label: 'City code (Work)' },
  { key: 'countryCode', label: 'Country code (Work)' },
  { key: 'district', label: 'District (Work)' },
  { key: 'state', label: 'State (Work)' },
  { key: 'street', label: 'Street (Work)' },
  { key: 'streetNumber', label: 'Street number (Work)' },
  { key: 'type', label: 'Type (Work)' },
  { key: 'zipCode', label: 'Zipcode (Work)' }
];

const contactChannels = [
  { key: 'email', label: 'Email' },
  { key: 'mailingAddress', label: 'Mailing Address' },
  { key: 'phoneNumber', label: 'Phone number' },
  { key: 'countryCode', label: 'Country code' },
  { key: 'areaCode', label: 'Area code' }
];


const bodyMeasurement = [
  { key: 'height', label: 'Height' },
  { key: 'heightUnit', label: 'Height unit' },
  { key: 'weight', label: 'Weight' },
  { key: 'weightUnit', label: 'Weight unit' },
];

export const LEADS_ERROR_MESSAGES = [
  ...data,
  ...personalInformation,
  { key: 'employeeBranch', label: 'Employee branch'},
  { key: 'referrorCode', label: 'Referror code' },
  { key: 'self', label: 'Self' },
  { key: 'referredByBankPartner', label: 'Referred by bank partner' },
  { key: 'phoneNumber', label: 'Phone number' },
  { key: 'emailAddress', label: 'Email address' },
  { key: 'civilStatus', label: 'Civil status' },
  { key: 'leadStatus', label: 'Status' },
  { key: 'age', label: 'Age' },
  { key: 'homeBuildingName', label: 'Building name (Home)' },
  { key: 'homeBlockNumber', label: 'Block number (Home)' },
  { key: 'homeStreet', label: 'Street (Home)' },
  { key: 'homeSubdivision', label: 'Subdivision (Home)' },
  { key: 'homeCountryCode', label: 'Country code (Home)' },
  { key: 'homeProvinceCode', label: 'Province (Home)' },
  { key: 'homeCityCode', label: 'City code (Home)' },
  { key: 'homeZipCode', label: 'Zipcode (Home)' },
  { key: 'occupationCode', label: 'Occupation' },
  { key: 'occupationGrpCode', label: 'Occupation group' },
  { key: 'monthlyIncome', label: 'Monthly income' },
  { key: 'householdIncome', label: 'Household income' },
  { key: 'workBuildingName', label: 'Building name (Work)' },
  { key: 'workBlockNumber', label: 'Block number (Work)' },
  { key: 'workStreet', label: 'Street (Work)' },
  { key: 'workSubdivision', label: 'Subdivision (Work)' },
  { key: 'workCountryCode', label: 'ountry code (Work)' },
  { key: 'workProvinceCode', label: 'Province (Work)' },
  { key: 'workCityCode', label: 'ity code (Work)' },
  { key: 'workZipCode', label: 'Zipcode (Work)' },
  { key: 'hasFinancialNeedAgreement', label: 'Has financial Need agreement' },
  { key: 'leadStatusDetails', label: 'Status details' },
  { key: 'retirementPriority', label: 'Retirement priority' },
  { key: 'protectionPriority', label: 'Protect priority' },
  { key: 'estatePlanningPriority', label: 'Estate planning priority' },
  { key: 'educationPriority', label: 'Education priority' },
  { key: 'savingsPriority', label: 'Savings priority' },
  { key: 'healthPriority', label: 'Health priority' },
  { key: 'serverId', label: 'Server id' },
  { key: 'proposalAge', label: 'Proposal age' }
];

export const NA_ERROR_MESSAGES = [
  ...data,
  { key: 'goalType', label: 'Goal type' },
  { key: 'isWaived', label: 'Is waived' },
  { key: 'needsVariables', label: 'Needs variable' },
  { key: 'relaredLead', label: 'Relaetd lead' },
  { key: 'self', label: 'Self' },
  { key: 'status', label: 'Status' },
  { key: 'type', label: 'Type' },
  { key: 'GA', label: 'How much is it today' },
  { key: 'SA', label: 'How much have you save so far field' },
  { key: 'HOUSD', label: 'When do you want to achieve your goal field' },

  { key: 'INCREPCMGA', label: 'How much is your monthly income field' },
  { key: 'INCREPBD', label: 'How long are you planning to save field' },

  { key: 'HTHFNDGA', label: 'How much is your desired health fund field' },

  { key: 'PHUNIIA', label: 'How old is your child field' },
  { key: 'PHUNICAGA', label: 'Where do you want to enroll your child field' },

  { key: 'RETFNDIA', label: 'How old are you field' },
  { key: 'RETFNDCMGA', label: 'How much is your monthly expences field' },
  { key: 'RETFNDBSA', label: 'When do you want to retire field' },
  { key: 'RETFNDBD', label: 'How long do you want to enjoy your retirement field' },

  { key: 'ESTPROGA1', label: 'How much cash do you have field' },
  { key: 'ESTPROGA2', label: 'How much is your real estate valued today field' },
  { key: 'ESTPROGA3', label: 'How much have you invested in Stocks and Bonds field' },
  { key: 'ESTPROGA4', label: 'Do you have assets field' },
];

export const IRPQ_ERROR_MESSAGES = [
  ...data,
  { key: 'self', label: 'Self' },
  { key: 'riskAppetiteScore', label: 'Risk appetite score' },
  { key: 'status', label: 'Status' },

  { key: 'GI1', label: 'Approximate networth' },
  { key: 'GI1_A1', label: 'Approximate networth' },
  { key: 'GI1_A2', label: 'Approximate networth' },
  { key: 'GI1_A3', label: 'Approximate networth' },
  { key: 'GI1_A4', label: 'Approximate networth' },
  { key: 'GI1_A5', label: 'Approximate networth' },

  { key: 'GI2', label: 'Approximate annual income' },
  { key: 'GI2_A1', label: 'Approximate annual income' },
  { key: 'GI2_A2', label: 'Approximate annual income' },
  { key: 'GI2_A3', label: 'Approximate annual income' },
  { key: 'GI2_A4', label: 'Approximate annual income' },

  { key: 'GI3', label: 'Most important objective' },
  { key: 'GI3_A1', label: 'Most important objective' },
  { key: 'GI3_A2', label: 'Most important objective' },
  { key: 'GI3_A3', label: 'Most important objective' },
  { key: 'GI3_A4', label: 'Most important objective' },
  { key: 'GI3_A5', label: 'Most important objective' },
  // { key: 'GI3_A6', label: 'Most important objective' },
  { key: 'GI3_A7', label: 'Most important objective' },
  { key: 'GI3_00', label: 'Most important objective' },

  { key: 'GI4_1', label: 'Life insurance or Pre Need Plan' },
  { key: 'GI4_A1', label: 'Life insurance' },
  { key: 'GI4_A2', label: 'Life insurance' },

  { key: 'GI4_2', label: 'Corporate bonds' },
  { key: 'GI4_A3', label: 'Corporate bonds' },
  { key: 'GI4_A4', label: 'Corporate bonds' },

  { key: 'GI4_3', label: 'Time deposit (Local/Foreign Currency)' },
  { key: 'GI4_A5', label: 'Time deposit (Local/Foreign Currency)' },
  { key: 'GI4_A6', label: 'Time deposit (Local/Foreign Currency)' },

  { key: 'GI4_4', label: 'Derivatives (Commodities/Futures/Options)' },
  { key: 'GI4_A7', label: 'Derivatives (Commodities/Futures/Options)' },
  { key: 'GI4_A8', label: 'Derivatives (Commodities/Futures/Options)' },

  { key: 'GI4_5', label: 'Mutual fund / Trust fund' },
  { key: 'GI4_A9', label: 'Mutual fund / Trust fund' },
  { key: 'GI4_A10', label: 'Mutual fund / Trust fund' },

  { key: 'GI4_6', label: 'Real estate' },
  { key: 'GI4_A11', label: 'Real estate' },
  { key: 'GI4_A12', label: 'Real estate' },

  { key: 'GI4_7', label: 'Stocks' },
  { key: 'GI4_A13', label: 'Stocks' },
  { key: 'GI4_A14', label: 'Stocks' },

  { key: 'GI4_8', label: 'Own business' },
  { key: 'GI4_A15', label: 'Own business' },
  { key: 'GI4_A16', label: 'Own business' },

  { key: 'GI4_9', label: 'Government securities' },
  { key: 'GI4_A17', label: 'Government securities' },
  { key: 'GI4_A18', label: 'Government securities' },

  { key: 'PI1', label: 'Profile question (1)' },
  { key: 'PI1_A1', label: 'Profile question (1)' },
  { key: 'PI1_A2', label: 'Profile question (1)' },
  { key: 'PI1_A3', label: 'Profile question (1)' },
  { key: 'PI1_A4', label: 'Profile question (1)' },

  { key: 'PI2', label: 'Profile question (2)' },
  { key: 'PI2_A1', label: 'Profile question (2)' },
  { key: 'PI2_A2', label: 'Profile question (2)' },
  { key: 'PI2_A3', label: 'Profile question (2)' },
  { key: 'PI2_A4', label: 'Profile question (2)' },

  { key: 'PI3', label: 'Profile question (3)' },
  { key: 'PI3_A1', label: 'Profile question (3)' },
  { key: 'PI3_A2', label: 'Profile question (3)' },
  { key: 'PI3_A3', label: 'Profile question (3)' },
  { key: 'PI3_A4', label: 'Profile question (3)' },

  { key: 'PI4', label: 'Profile question (4)' },
  { key: 'PI4_A1', label: 'Profile question (4)' },
  { key: 'PI4_A2', label: 'Profile question (4)' },
  { key: 'PI4_A3', label: 'Profile question (4)' },
  { key: 'PI4_A4', label: 'Profile question (4)' },

  { key: 'PI5', label: 'Profile question (5)' },
  { key: 'PI5_A1', label: 'Profile question (5)' },
  { key: 'PI5_A2', label: 'Profile question (5)' },
  { key: 'PI5_A3', label: 'Profile question (5)' },
  { key: 'PI5_A4', label: 'Profile question (5)' },

  { key: 'PI6', label: 'Profile question (6)' },
  { key: 'PI6_A1', label: 'Profile question (6)' },
  { key: 'PI6_A2', label: 'Profile question (6)' },
  { key: 'PI6_A3', label: 'Profile question (6)' },
  { key: 'PI6_A4', label: 'Profile question (6)' },

  { key: 'PI7', label: 'Profile question (7)' },
  { key: 'PI7_A1', label: 'Profile question (7)' },
  { key: 'PI7_A2', label: 'Profile question (7)' },
  { key: 'PI7_A3', label: 'Profile question (7)' },
  { key: 'PI7_A4', label: 'Profile question (7)' },

  { key: 'PI8', label: 'Profile question (8)' },
  { key: 'PI8_A1', label: 'Profile question (8)' },
  { key: 'PI8_A2', label: 'Profile question (8)' },
  { key: 'PI8_A3', label: 'Profile question (8)' },
  { key: 'PI8_A4', label: 'Profile question (8)' }
];

export const SI_ERROR_MESSAGES = [
  ...data,
  { key: 'baseRating', label: 'Base rating' },
  { key: 'calculationType', label: 'Calculation type' },
  { key: 'contractProcessState', label: 'Contract process state' },
  { key: 'currency', label: 'Curreny' },
  { key: 'deathBenefitType', label: 'Death benefit type' },
  { key: 'dividendOption', label: 'Devidend option' },
  { key: 'firstPremium', label: 'First permium' },
  { key: 'insuranceSum', label: 'Insurance sum' },
  { key: 'isAOequalsPI', label: 'Is equals PI' },
  { key: 'lifePriority', label: 'Life priority' },
  { key: 'multiplierFactor', label: 'Multiplier factor' },
  { key: 'paymentDuration', label: 'Payment duration' },
  { key: 'paymentFrequency', label: 'Payment frequency' },
  { key: 'productOfferingCategory', label: 'Product offering  category' },
  { key: 'productOfferingDescription', label: 'Product offering description' },
  { key: 'productOfferingName', label: 'Product offering name' },
  { key: 'self', label: 'Self' },
  { key: 'status', label: 'Status' },
  { key: 'underWritingApproach', label: 'Underwriting approach' },
  ...addressHome,
  ...addressWork,
  ...personalInformation,
  { key: 'bmi', label: 'BMI' },
  { key: 'hasMiddleName', label: 'Has middle name' },
  ...bodyMeasurement,
  { key: 'code', label: 'Code'},
  { key: 'flatExtra', label: 'Flat extra'},
  { key: 'regularTopUpPremium', label: 'Regulat Top up premium' },
  { key: 'withdrawalAmount', label: 'Withdrawal amount' },
  { key: 'withdrawalEndAge', label: 'Withdrawal end age' },
  { key: 'withdrawalStartAge', label: 'Withdrawal start age' }
];

export const EAPP_ERROR_MESSAGES = [
  ...data,
  { key: 'applicationNumber', label: 'Application number' },
  { key: 'contractProcessState', label: 'Contract process state' },
  { key: 'isAOequalsBO', label: 'Is equal Beneficiary Ownership (checkbox)' },
  { key: 'paymentMethod', label: 'Payment method' },
  { key: 'premiumDefaultOption', label: 'Premium default option' },
  { key: 'provisionalReceiptNumber', label: 'Provisional receipt number' },
  { key: 'self', label: 'Self' },
  { key: 'settlementOption', label: 'Settlement option' },
  { key: 'status', label: 'Status' },
  ...personalInformation,
  ...contactChannels,
  { key: 'annualIncome', label: 'Annual income'  },
  { key: 'annualIncomeCurrency', label: 'Annual income currency'  },
  { key: 'birthPlaceRegion', label: 'Birth place region'  },
  { key: 'cityOfBirth', label: 'City of birth'  },
  ...bodyMeasurement,
  { key: 'isUSPerson', label: 'Is US Person'  },
  { key: 'maidenName', label: 'Maiden name'  },
  { key: 'nationality', label: 'Nationality'  },
  { key: 'nativeCountry', label: 'Native country'  },
  { key: 'otherSourceOfIncome', label: 'Other source of inocme'  },
  { key: 'socialSecurityNumber', label: 'Social security number'  },
  { key: 'sourceOfIncome', label: 'Source of income'  },
  { key: 'vatIN', label: 'Vat IN'  },
  { key: 'isRevocable', label: 'Is revocable' },
  { key: 'justification', label: 'Justification' },
  { key: 'minor', label: 'Minor' },
  { key: 'order', label: 'Order' },
  { key: 'percent', label: 'Percent' },
  { key: 'priorityLevel', label: 'Priority level' },
  { key: 'usePreviousGuardian', label: 'Use previous guardian' },
  { key: 'fundName', label: 'Fund name'},
  { key: 'topUpPercentage', label: 'Top up percentage'},
  { key: 'paymentScheme', label: 'Payment Scheme'},
  { key: 'aoFirstName', label: 'AO First Name'  },
  { key: 'aoMiddleName', label: 'AO Middle Name'  },
  { key: 'aoLastName', label: 'AO Last Name'  },
  { key: 'otherFirstName', label: 'Other First Name'  },
  { key: 'otherMiddleName', label: 'Other Middle Name'  },
  { key: 'otherLastName', label: 'Other Last Name'  },
  { key: 'email', label: 'Email'  },
  { key: 'contactNumber', label: 'Contact Number'  },
  { key: 'pobCity', label: 'Place of birth City'  },
  { key: 'pobProvince', label: 'Place of birth Province'  },
  { key: 'pobCountry', label: 'Place of birth Country'  },
  { key: 'dateOfBirth', label: 'Date of birth'  },
  { key: 'gender', label: 'Date of birth'  },
  { key: 'civilStatus', label: 'Civil Status'  },
  { key: 'relationshipToPI', label: 'Relationship to PI'  },
  { key: 'employer', label: 'Employer'  },
  { key: 'workUnitBuilding', label: 'Work unit building'  },
  { key: 'workLotBlock', label: 'Work lot block'  },
  { key: 'workStreet', label: 'Work street'  },
  { key: 'workBarangay', label: 'Work barangey'  },
  { key: 'vesselOwner', label: 'Vessel owner'  },
  { key: 'otherSourceOfFunds', label: 'Other source of funds'  },
  { key: 'preferredMailingAddress', label: 'Preferred Mailing Address'  },
  { key: 'validIdNumber', label: 'Valid ID Number'  },
  { key: 'payoutOption', label: 'Payout option'  },
  { key: 'bankName', label: 'Bank Name'  },
  { key: 'bankBranch', label: 'Bank Branch'  },
  { key: 'accountNumber', label: 'Account number'  },
  { key: 'accountCurrency', label: 'Account currency'  },
  { key: 'jointAccount', label: 'Joint Account'  },
  { key: 'typeOfAccount', label: 'Type of Account'  },
  { key: 'bankAccountName', label: 'Bank Account Name'  },
  { key: 'payoutBanks', label: 'Payout Banks'  },
  { key: 'beneficiaries', label: 'Beneficiaries'  },
  { key: 'purpose', label: 'Purpose od Insurance'  },
  { key: 'sourceOfFunds', label: 'Source of Funds'  },
  { key: 'prominentPublicPosition', label: 'Prominent Public Position'  },
  { key: 'buildingName', label: 'Building Name'  },
  { key: 'cityCode', label: 'City'  },
  { key: 'district', label: 'District'  },
  { key: 'state', label: 'State'  },
  { key: 'street', label: 'Street'  },
  { key: 'streetNumber', label: 'Street Number'  },
  { key: 'zipCode', label: 'Zip Code'  },
  { key: 'addressReference', label: 'Address Reference'  },
  { key: 'height', label: 'Height' },
  { key: 'heightCM', label: 'Height CM' },
  { key: 'heightFT', label: 'Height FT' },
  { key: 'heightIN', label: 'Height IN' },
  { key: 'weightKG', label: 'Weight KG' }
];

export const EAPP_ERROR_MESSAGES_EXCLUSION = [
  { key: 'relationshipToPI', label: 'Relationship to PI'  },
  { key: 'buildingName', label: 'Building Name'  },
  { key: 'cityCode', label: 'City'  },
  { key: 'countryCode', label: 'Country code' },
  { key: 'district', label: 'District'  },
  { key: 'state', label: 'State'  },
  { key: 'street', label: 'Street'  },
  { key: 'streetNumber', label: 'Street Number'  },
  { key: 'zipCode', label: 'Zip Code'  },
  { key: 'premiumDefaultOption', label: 'Premium default option' },
  { key: 'settlementOption', label: 'Settlement option' },
  { key: 'bankName', label: 'Bank Name'  },
  { key: 'bankBranch', label: 'Bank Branch'  },
  { key: 'accountNumber', label: 'Account number'  },
  { key: 'accountCurrency', label: 'Account currency'  },
  { key: 'jointAccount', label: 'Joint Account'  },
  { key: 'typeOfAccount', label: 'Type of Account'  },
  { key: 'bankAccountName', label: 'Bank Account Name'  },
  { key: 'occupation', label: 'Occupation' },
  { key: 'vesselOwner', label: 'Vessel owner'  }
];

export const CHECKLIST_ERROR_MESSAGES = [
  ...data,
  { key: 'self', label: 'Self' },
  { key: 'applicationNumber', label: 'Application number' },
  { key: 'status', label: 'Status' },
  { key: 'checkoutId', label: 'Checkout id' },
  { key: 'data', label: 'Data' },
  { key: 'signedDate', label: 'Signed date' },
  { key: 'customerNumber', label: 'Customer number' },
  { key: 'relatedProductDeclaration', label: 'Related product declaration' },
  { key: 'generalDeclaration', label: 'General declaration' },
  { key: 'application', label: 'Application' },
  { key: 'delayedNoticeDeclaration', label: 'Delayed notice decalaration' },
  { key: 'replacementNotification', label: 'Replacement notification' },
  { key: 'furnishMedicalAuthorization', label: 'Furnished medical authorization' },
  { key: 'interimCoverageCertificate', label: 'Interim coverage certificate' },
  { key: 'needAnalysis', label: 'Need analysis' },
  { key: 'quotation', label: 'Quotation' },
  { key: 'investmentProfile', label: 'Investment profile' }
];