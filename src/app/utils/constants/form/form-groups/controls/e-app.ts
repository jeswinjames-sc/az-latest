import { Validators } from '@angular/forms'
import { REGEXP } from '@utils/constants/regexp/regexp';
import { CONSTANTS_STRING } from '@utils/constants/string/constants-string';

//policy information
export const BeneficiariesFGControls = {
    firstName: ['', [Validators.required, Validators.pattern(REGEXP.NAME)]],
    middleName: ['', [Validators.pattern(REGEXP.NAME)]],
    lastName: ['', [Validators.required, Validators.pattern(REGEXP.NAME)]],
    dateOfBirth: ['', Validators.required],
    pobCountry: ['', Validators.required],
    pobProvince: ['', Validators.required],
    pobCity: ['', Validators.required],
    priority: ['', Validators.required],
    sharePercentage: ['', [Validators.required, Validators.pattern(REGEXP.PERCENTAGE), Validators.max(100)]],
    estatePriority: [''],
    estateSharePercentage: [''],
    designation: ['', Validators.required],
    isEstateBeneficiary: ['false'],
    relationToPI: ['', Validators.required],
    nationalityCountryCode: ['63', Validators.required],
    mobileNumber: ['', [Validators.required, Validators.maxLength(11), Validators.pattern(REGEXP.MOBILE_NUMBER)]],
    emailAddress: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(REGEXP.EMAIL)]],
    gender: ['', Validators.required],
    justification: [''],
    sameAOAddress: ['false'],
    samePIAddress: ['false'],
    unitBuilding: ['', [Validators.maxLength(120)]],
    blockNumber: ['', [Validators.maxLength(15)]],
    streetName: ['', [Validators.maxLength(40)]],
    barangay: ['', [Validators.maxLength(80)]],
    cityCode: [''],
    provinceCode: [''],
    countryCode: [''],
    zipCode: [''],

    declaration1: ['false'],
    declaration2: ['false'],
    declaration3: ['false'],
    declaration4: ['false']
};

export const BeneficiariesFGControlsWithoutValidations = {
    firstName: [''],
    middleName: [''],
    lastName: [''],
    dateOfBirth: [''],
    pobCountry: [''],
    pobProvince: [''],
    pobCity: [''],
    priority: [''],
    sharePercentage: [''],
    estatePriority: [''],
    estateSharePercentage: [''],
    designation: [''],
    isEstateBeneficiary: ['false'],
    relationToPI: [''],
    nationalityCountryCode: ['63'],
    mobileNumber: [''],
    emailAddress: [''],
    gender: [''],
    justification: [''],
    sameAOAddress: ['false'],
    samePIAddress: ['false'],
    unitBuilding: [''],
    blockNumber: [''],
    streetName: [''],
    barangay: [''],
    cityCode: [''],
    provinceCode: [''],
    countryCode: [''],
    zipCode: [''],

    declaration1: ['false'],
    declaration2: ['false'],
    declaration3: ['false'],
    declaration4: ['false']
};

export const PayoutBanksFGControls = { 
    coDepositorName: ['', [Validators.required, Validators.pattern(REGEXP.NAME)]] 
}

//insurance declaration
export const PendingApplicationsFGControls = {
    company: ['', [Validators.required, Validators.pattern(REGEXP.NAME)]],
    basicLife: ['', Validators.required],
    basicLifeCurrency: ['PHP', Validators.required],
    status: ['', Validators.required],
    yearOfIssue: ['', Validators.required]
}

export const TotalInsuranceInforceFGControls = {
    company: ['', [Validators.required, Validators.pattern(REGEXP.NAME)]],
    basicLife: ['', Validators.required],
    basicLifeCurrency: ['PHP', Validators.required],
    accident: ['', Validators.required],
    accidentCurrency: ['PHP', Validators.required],
    yearOfIssue: ['', Validators.required]
};

export const ReplacementNotificationFGControls = {
    company: ['', [Validators.required]],
    afcInsured: [],
    policyNo: ['', Validators.required],
    amountInsuranceReplaced: [],
    //amountInsuranceReplaced: ['', Validators.required],
    amountInsuranceReplacedCurrency: []
    //amountInsuranceReplacedCurrency: ['PHP', Validators.required]
}

export const AlcoholDoctorsFGControlsConfig = {
    name: ['', [Validators.required, Validators.maxLength(50), Validators.pattern(REGEXP.LEGAL_NAME)]],
    address: ['', [Validators.required, Validators.maxLength(50)]],
    dateOfConsultation: ['', Validators.required]
};

export const DetoxDoctorsFGControls = {
    name: ['', Validators.required]
};

export const VesselOpFGControls = {
    water: ['', Validators.required],
    port: ['', Validators.required]
};

export const BeneficialOwnerDeetsFGControlsWithoutValidations = {
    ownershipPercent: [''],
    gender: [''],
    nationality: [''],
    firstName: [''],
    middleName: [''],
    lastName: [''],
    pobCountryCode: [''],
    pobProvinceCode: [''],
    pobCityCode: [''],
    presentBuildingName: [''],
    presentBlockNumber: [''],
    presentStreet: [''],
    presentSubdivision: [''],
    presentCountryCode: [''],
    presentProvinceCode: [''],
    presentCityCode: [''],
    presentZipCode: [''],
    workBuildingName: [''],
    workBlockNumber: [''],
    workStreet: [''],
    workSubdivision: [''],
    workCountryCode: [''],
    workProvinceCode: [''],
    workCityCode: [''],
    workZipCode: [''],
    occupationCode: [''],
    occupationGrpCode: [''],
    occupationTitle: [''],
    vesselType: [''],
    annualIncome: [''],
    employer: [''],
    contactNumber: [''],
    email: [''],
    dateOfBirth: ['']
}

export const BeneficialOwnerDeetsFGControls = {
    ownershipPercent: ['', [Validators.required, Validators.min(20), Validators.max(100)]],
    gender: ['', Validators.required],
    nationality: [CONSTANTS_STRING.PH_CODE, Validators.required],
    firstName: ['', Validators.required],
    middleName: [''],
    lastName: ['', Validators.required],
    pobCountryCode: ['', Validators.required],
    pobProvinceCode: ['', Validators.required],
    pobCityCode: ['', Validators.required],
    presentBuildingName: [''],
    presentBlockNumber: [''],
    presentStreet: [''],
    presentSubdivision: [''],
    presentCountryCode: ['', Validators.required],
    presentProvinceCode: ['', Validators.required],
    presentCityCode: ['', Validators.required],
    presentZipCode: [''],
    workBuildingName: [''],
    workBlockNumber: [''],
    workStreet: [''],
    workSubdivision: [''],
    workCountryCode: ['', Validators.required],
    workProvinceCode: ['', Validators.required],
    workCityCode: ['', Validators.required],
    workZipCode: [''],
    occupationCode: ['', Validators.required],
    occupationGrpCode: ['', Validators.required],
    occupationTitle: ['', [Validators.required, Validators.pattern(REGEXP.LEGAL_NAME)]],
    vesselType: [''],
    annualIncome: ['', Validators.required],
    employer: ['', Validators.required],
    contactNumber: ['', [Validators.required, Validators.maxLength(13), Validators.pattern(REGEXP.MOBILE_NUMBER)]],
    email: ['', [Validators.required, Validators.maxLength(254), Validators.pattern(REGEXP.EMAIL)]],
    dateOfBirth: ['', Validators.required]
}

export const ForeignTravelCountriesFGControl = {
    country: ['', [Validators.required, Validators.maxLength(50)]],
    plannedStartDate: ['', Validators.required],
    plannedEndDate: ['', Validators.required],
    city: ['', [Validators.required, Validators.maxLength(50)]]
};
