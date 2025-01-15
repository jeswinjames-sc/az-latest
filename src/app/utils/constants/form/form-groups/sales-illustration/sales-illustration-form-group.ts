import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContractHolder } from '@models/sales-illustration/sync/contract-holder';
import { CustomValidatorsService } from 'app/core/services/sync/sync-validations/custom-validators/custom-validators.service';
import { REGEXP } from '@utils/constants/regexp/regexp';

const SalesIllusrationFormBuilder = new FormBuilder();
const customValidatorsService: CustomValidatorsService = new CustomValidatorsService();

export const AOCreateSalesIllustrationFormGroup: FormGroup = SalesIllusrationFormBuilder.group({
  isAoEqualsToPi: [true, [
    Validators.required
  ]],
  firstName: ['', [
    Validators.required,
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  middleName: ['', [
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  noMiddleName: [false],
  lastName: ['', [
    Validators.required,
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  gender: [null, Validators.required],
  dateOfBirth: [null, Validators.required],
  age: [null, [Validators.min(18), Validators.max(100)]],
  homeBuildingName: ['', [
    Validators.maxLength(120)
  ]
  ],
  homeBlockNumber: [
    '', [
      Validators.maxLength(15)
    ]
  ],
  homeStreet: [
    '', [
      Validators.maxLength(40)
    ]
  ],
  homeSubdivision: [
    '', [
      Validators.maxLength(80)
    ]
  ],
  homeCountryCode: [''],
  homeProvinceCode: [''],
  homeCityCode: [''],
  homeZipCode: [''],
  occupationCode: [
    '', [
      Validators.maxLength(16)
    ]
  ],
  occupationGrpCode: [''],
  vesselType: [''],
  occupationTitle: [
    '', [
      Validators.pattern(REGEXP.LEGAL_NAME),
      Validators.required,
    ]
  ],
  workBuildingName: [
    '', [
      Validators.maxLength(120)
    ]
  ],
  workBlockNumber: [
    '', [
      Validators.maxLength(15)
    ]
  ],
  workStreet: [
    '', [
      Validators.maxLength(40)
    ]
  ],
  workSubdivision: [
    '', [Validators.maxLength(80)]
  ],
  workCountryCode: [''],
  workProvinceCode: [''],
  workCityCode: [''],
  workZipCode: ['']
});

export const PICreateSalesIllustrationFormGroup: FormGroup = SalesIllusrationFormBuilder.group({
  sameAsAoAddress: [''],
  firstName: ['', [
    Validators.required,
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  middleName: ['', [
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  noMiddleName: [false],
  lastName: ['', [
    Validators.required,
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  gender: ['', Validators.required],
  age: [null, [Validators.min(0), Validators.max(100)]],
  dateOfBirth: ['', Validators.required],
  homeBuildingName: ['', [
    Validators.maxLength(120)
  ]
  ],
  homeBlockNumber: [
    '', [
      Validators.maxLength(15)
    ]
  ],
  homeStreet: [
    '', [
      Validators.maxLength(40)
    ]
  ],
  homeSubdivision: [
    '', [
      Validators.maxLength(80)
    ]
  ],
  homeCountryCode: [''],
  homeProvinceCode: [''],
  homeCityCode: [''],
  homeZipCode: [''],
  occupationCode: [
    '', [
      Validators.required,
      Validators.maxLength(16)
    ]
  ],
  occupationGrpCode: ['', Validators.required],
  vesselType: [''],
  occupationTitle: [
    '', [
      Validators.pattern(REGEXP.LEGAL_NAME)
    ]
  ],
  workBuildingName: [
    '', [
      Validators.maxLength(120)
    ]
  ],
  workBlockNumber: [
    '', [
      Validators.maxLength(15)
    ]
  ],
  workStreet: [
    '', [
      Validators.maxLength(40)
    ]
  ],
  workSubdivision: [
    '', [Validators.maxLength(80)]
  ],
  workCountryCode: [''],
  workProvinceCode: [''],
  workCityCode: [''],
  workZipCode: ['']
});

export const LifeAOCreateSalesIllustrationFormGroup: FormGroup = SalesIllusrationFormBuilder.group({
  isAoEqualsToPi: [true, [
    Validators.required
  ]],
  classification: ['', Validators.required],
  firstName: ['', [
    Validators.required,
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  middleName: ['', [
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  noMiddleName: [false],
  lastName: ['', [
    Validators.required,
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  suffix: [''],
  gender: [null, Validators.required],
  dateOfBirth: [null, Validators.required],
  age: [null, [Validators.min(18), Validators.max(100)]],
  homeBuildingName: ['', [
    Validators.maxLength(120)
  ]
  ],
  homeBlockNumber: [
    '', [
      Validators.maxLength(15)
    ]
  ],
  homeStreet: [
    '', [
      Validators.maxLength(40)
    ]
  ],
  homeSubdivision: [
    '', [
      Validators.maxLength(80)
    ]
  ],
  homeCountryCode: [''],
  homeProvinceCode: [''],
  homeCityCode: [''],
  homeZipCode: [''],
  durationOfStayInput: ['', Validators.required],
  durationOfStaySelect: ['', Validators.required],
  occupationCode: [
    '', [
      Validators.maxLength(16)
    ]
  ],
  occupationGrpCode: [''],
  vesselType: [
    '', [
      Validators.maxLength(16)
    ]
  ],
  occupationTitle: [
    '', [
      Validators.required,
      Validators.pattern(REGEXP.LEGAL_NAME)
    ]
  ],
  ltgTag: [false],
  workBuildingName: [
    '', [
      Validators.maxLength(120)
    ]
  ],
  workBlockNumber: [
    '', [
      Validators.maxLength(15)
    ]
  ],
  workStreet: [
    '', [
      Validators.maxLength(40)
    ]
  ],
  workSubdivision: [
    '', [Validators.maxLength(80)]
  ],
  workCountryCode: [''],
  workProvinceCode: [''],
  workCityCode: [''],
  workZipCode: [''],
  dependentsGroup: new FormBuilder().array([]),
});

export const LifePICreateSalesIllustrationFormGroup: FormGroup = SalesIllusrationFormBuilder.group({
  sameAsAoAddress: [''],
  firstName: ['', [
    Validators.required,
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  middleName: ['', [
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  noMiddleName: [false],
  lastName: ['', [
    Validators.required,
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  suffix: [''],
  gender: ['', Validators.required],
  age: [null, [Validators.min(0), Validators.max(100)]],
  dateOfBirth: ['', Validators.required],
  homeBuildingName: ['', [
    Validators.maxLength(120)
  ]
  ],
  homeBlockNumber: [
    '', [
      Validators.maxLength(15)
    ]
  ],
  homeStreet: [
    '', [
      Validators.maxLength(40)
    ]
  ],
  homeSubdivision: [
    '', [
      Validators.maxLength(80)
    ]
  ],
  homeCountryCode: [''],
  homeProvinceCode: [''],
  homeCityCode: [''],
  homeZipCode: [''],
  occupationCode: [
    '', [
      Validators.required,
      Validators.maxLength(16)
    ]
  ],
  occupationGrpCode: ['', Validators.required],
  vesselType: [
    '', [
      Validators.maxLength(16)
    ]
  ],
  occupationTitle: [
    '', [
      Validators.pattern(REGEXP.LEGAL_NAME)
    ]
  ],
  workBuildingName: [
    '', [
      Validators.maxLength(120)
    ]
  ],
  workBlockNumber: [
    '', [
      Validators.maxLength(15)
    ]
  ],
  workStreet: [
    '', [
      Validators.maxLength(40)
    ]
  ],
  workSubdivision: [
    '', [Validators.maxLength(80)]
  ],
  workCountryCode: [''],
  workProvinceCode: [''],
  workCityCode: [''],
  workZipCode: [''],
  durationOfStayInput: ['', Validators.required],
  durationOfStaySelect: ['', Validators.required],
});

/**
 * Used to validate quotation.data before SI sync
 * @author Kiko Garcia
 */
 export const ValidationSIFormGroup: FormGroup = SalesIllusrationFormBuilder.group({
  baseRatingCode: [null, [
    Validators.maxLength(50),
    Validators.pattern(REGEXP.TEXT),
    customValidatorsService.baseRatingCodeValidator
  ]],
  flatExtra: [null, [
    Validators.maxLength(22),
    Validators.pattern(REGEXP.NUMERIC)
  ]],
  inputOption: [null, [
    Validators.maxLength(50),
    customValidatorsService.inputOptionValidator
  ]],
  currency: [null, [
    Validators.required,
    Validators.maxLength(3),
    Validators.pattern(REGEXP.TEXT),
    customValidatorsService.currencyValidator
  ]],
  deathBenefit: [null, [
    Validators.maxLength(50),
    customValidatorsService.deathBenefitValidator
  ]],
  dividendOption: [null, [
    Validators.maxLength(50),
    customValidatorsService.dividendOptionValidator
  ]],
  premiumTotal: [null, [
    Validators.maxLength(22),
  ]],
  inputPremium: [null, [
    Validators.maxLength(22),
  ]],
  basicSumAssured: [null, [
    Validators.required,
    Validators.maxLength(22),
  ]],
  isAoEqualsPi: [null, [
    customValidatorsService.oneOrZeroValidator
  ]],
  irpqServerId: [null, [
    Validators.maxLength(22)
  ]],
  lifePriorityCategory: [null, [
    Validators.maxLength(100),
    customValidatorsService.lifePriorityValidator
  ]],
  sumAssuredMultiple: [null, [
    Validators.maxLength(22)
  ]],
  naServerId: [null, [
    Validators.maxLength(22)
  ]],
  payYears: [null, [
    Validators.maxLength(22)
  ]],
  payMode: [null, [
    Validators.maxLength(22)
  ]],
  personalObjectives: [null, [
    Validators.maxLength(30),
    customValidatorsService.personalObjectivesValidator
  ]],
  planCode: [null, [
    Validators.maxLength(50),
    customValidatorsService.planCodeValidator
  ]],
  leadServerId: [null, [
    Validators.required,
    Validators.maxLength(100)
  ]],
  serverId: [null, [
    Validators.required,
    Validators.maxLength(22)
  ]],
  status: [null, [
    Validators.required,
    Validators.maxLength(30),
    customValidatorsService.siStatusValidator
  ]],
  regularTopUpPremium: [null, [
    Validators.maxLength(22),
  ]],
  scheduledWithdrawalAmount: [null, [
    Validators.maxLength(22),
  ]],
  scheduledWithdrawalEndAge: [null, [
    Validators.maxLength(22),
  ]],
  scheduledWithdrawalStartAge: [null, [
    Validators.maxLength(22),
  ]],
  underwritingApproach: [null, [
    Validators.required,
    Validators.maxLength(7),
    customValidatorsService.underwritingApproachValidator
  ]],
})

/**
 * Used to validate aoPerson data before SI sync
 * @author Kiko Garcia
 */
export const ValidationAOFormGroup: FormGroup = SalesIllusrationFormBuilder.group({
  serverId: ['', [
    Validators.required,
    Validators.pattern(REGEXP.NUMERIC),
    Validators.maxLength(22)
  ]],
  lastName: ['', [
    Validators.maxLength(50),
  ]],
  firstName: ['', [
    Validators.maxLength(50),
  ]],
  middleName: ['', [
    Validators.maxLength(50),
  ]],
  dateOfBirth: [null, [
    customValidatorsService.earlierThanTodayValidator
  ]],
  gender: [null, [
    customValidatorsService.genderValidator
  ]],
  occupation: ['', [
    Validators.maxLength(50)
  ]],
  homeUnitBuilding: ['', [
    Validators.maxLength(120)
  ]],
  homeLotBlock: ['', [
    Validators.maxLength(22)
  ]],
  homeStreet: ['', [
    Validators.maxLength(22)
  ]],
  homeBarangay: ['', [
    Validators.maxLength(80)
  ]],
  homeCityCode: ['', [
    Validators.pattern(REGEXP.TEXT),
    Validators.maxLength(5)
  ]],
  homeProvinceCode: ['', [
    Validators.pattern(REGEXP.TEXT),
    Validators.maxLength(5)
  ]],
  homeZipCode: ['', [
    Validators.maxLength(22)
  ]],
  homeCountryCode: ['', [
    Validators.maxLength(22)
  ]],
  workUnitBuilding: ['', [
    Validators.maxLength(120)
  ]],
  workLotBlock: ['', [
    Validators.maxLength(22)
  ]],
  workStreet: ['', [
    Validators.maxLength(22)
  ]],
  workBarangay: ['', [
    Validators.maxLength(80)
  ]],
  workCityCode: ['', [
    Validators.maxLength(5)
  ]],
  workProvinceCode: ['', [
    Validators.maxLength(5)
  ]],
  workZipCode: ['', [
    Validators.maxLength(22)
  ]],
  workCountryCode: ['', [
    Validators.maxLength(22)
  ]],
});

/**
 * Codes below are used for sync validation before submission
 * @author JL Gutierrez
 */

const homeAndWorkAddress: FormGroup = SalesIllusrationFormBuilder.group({
  buildingName: [null, [Validators.maxLength(120)]],
  cityCode: [null],
  countryCode: [null, [Validators.pattern(REGEXP.WHOLE_NUMBER)]],
  district: [null],
  state: [null],
  street: [null, [Validators.maxLength(40)]],
  streetNumber: [null, [Validators.maxLength(40)]],
  type: [null],
  zipCode: [null, [Validators.maxLength(4), Validators.pattern(REGEXP.WHOLE_NUMBER)]]
});

const addressValidation: FormGroup = SalesIllusrationFormBuilder.group({
  homeAddress: homeAndWorkAddress,
  workAddress: homeAndWorkAddress
});


const questionsValidation: FormGroup = SalesIllusrationFormBuilder.group({
  EAZY: []
});

const topUpValidation: FormGroup = SalesIllusrationFormBuilder.group({
  regularTopUpPremium: [null, [Validators.maxLength(22)]],
  withdrawalAmount: [null, [Validators.maxLength(22)]],
  withdrawalEndAge: [null, [Validators.maxLength(22)]],
  withdrawalStartAge: [null, [Validators.maxLength(22)]]
});

const selfValidation: FormGroup = SalesIllusrationFormBuilder.group({
  self: [null, [Validators.pattern(REGEXP.WHOLE_NUMBER)]]
});

const contractHolderValidation: FormGroup = SalesIllusrationFormBuilder.group({
  address: addressValidation,
  birthDate: [null, [customValidatorsService.earlierThanTodayValidator]],
  firstName: [null, [Validators.required, Validators.maxLength(50), Validators.pattern(REGEXP.LEGAL_NAME)]],
  gender: [null, [Validators.required, customValidatorsService.genderValidator]],
  hasMiddleName: [null, [Validators.required, customValidatorsService.booleanOnly]],
  middleName: [null, [Validators.maxLength(50), Validators.pattern(REGEXP.LEGAL_NAME)]],
  name: [null, [Validators.required, Validators.maxLength(50), Validators.pattern(REGEXP.LEGAL_NAME)]],
  occupation: [null],
  questions: questionsValidation,
  selfValidation
});

const baseRatingValidation: FormGroup = SalesIllusrationFormBuilder.group({
  code: [null, [Validators.required, customValidatorsService.baseRatingCodeValidator]],
  flatExtra: [null, [Validators.pattern(REGEXP.WHOLE_NUMBER)]]
});

const qoutationDataValidation: FormGroup = SalesIllusrationFormBuilder.group({
  baseRating: baseRatingValidation,
  calculationType: [null, [Validators.required, customValidatorsService.inputOptionValidator]],
  contractHolder: contractHolderValidation,
  contractProcessState: [null],
  currency: [null, [Validators.required, customValidatorsService.currencyValidator]],
  deathBenefitType: [null],
  dividendOption: [null],
  firstPremium: [null, [Validators.required]],
  insuranceSum: [null, [Validators.required, Validators.pattern(REGEXP.WHOLE_NUMBER)]],
  investmentProfile: selfValidation,
  isAOequalsPI: [null, [Validators.required, customValidatorsService.booleanOnly]],
  lifePriority: [null, [Validators.required, Validators.maxLength(100)]],
  multiplierFactor: [null],
  needAnalysis: selfValidation,
  paymentDuration: [null],
  paymentFrequency: [null, [Validators.required, customValidatorsService.paymentFrequencyValidator]],
  productOfferingCategory: [null],
  productOfferingDescription: [null, [Validators.required, Validators.maxLength(50)]],
  productOfferingName: [null, [Validators.required]],
  relatedLead: selfValidation,
  selfValidation,
  status: [null, [Validators.required, customValidatorsService.siStatusValidator]],
  topUp: topUpValidation,
  underWritingApproach: [null, [Validators.required, customValidatorsService.underwritingApproachValidator]]
});

export const QuotationsValidation: FormGroup = SalesIllusrationFormBuilder.group({
  clientRefId: [null, [Validators.required]],
  createdDate: [null, [Validators.required, Validators.pattern(REGEXP.WHOLE_NUMBER)]],
  data: qoutationDataValidation,
  isDeleted: [null, [Validators.required, customValidatorsService.booleanOnly]],
  lastUpdateDate: [null, [Validators.pattern(REGEXP.WHOLE_NUMBER)]]
});

const siQoutationDataValidation: FormGroup = SalesIllusrationFormBuilder.group({
  baseRating: baseRatingValidation,
  calculationType: [null, [Validators.required, customValidatorsService.inputOptionValidator]],
  contractHolder: contractHolderValidation,
  contractProcessState: [null],
  currency: [null, [Validators.required, customValidatorsService.currencyValidator]],
  deathBenefitType: [null],
  dividendOption: [null],
  firstPremium: [null, [Validators.required]],
  insuranceSum: [null, [Validators.required, Validators.pattern(REGEXP.WHOLE_NUMBER)]],
  investmentProfile: selfValidation,
  isAOequalsPI: [null, [Validators.required, customValidatorsService.booleanOnly]],
  lifePriority: [null, [Validators.required, Validators.maxLength(100)]],
  multiplierFactor: [null],
  needAnalysis: SalesIllusrationFormBuilder.group({
    self: [null, [
      Validators.required
    ]]
  }),
  paymentDuration: [null],
  paymentFrequency: [null, [Validators.required, customValidatorsService.paymentFrequencyValidator]],
  productOfferingCategory: [null],
  productOfferingDescription: [null, [Validators.required, Validators.maxLength(50)]],
  productOfferingName: [null, [Validators.required]],
  relatedLead: selfValidation,
  selfValidation,
  status: [null, [Validators.required, customValidatorsService.siStatusValidator]],
  topUp: topUpValidation,
  underWritingApproach: [null, [Validators.required, customValidatorsService.underwritingApproachValidator]]
});

export const SIQuotationsValidation: FormGroup = SalesIllusrationFormBuilder.group({
  clientRefId: [null, [Validators.required]],
  createdDate: [null, [Validators.required, Validators.pattern(REGEXP.WHOLE_NUMBER)]],
  data: siQoutationDataValidation,
  isDeleted: [null, [Validators.required, customValidatorsService.booleanOnly]],
  lastUpdateDate: [null, [Validators.pattern(REGEXP.WHOLE_NUMBER)]]
});

export const BMIValidation: FormGroup = SalesIllusrationFormBuilder.group({
  bmi: [null, [Validators.required, Validators.pattern(REGEXP.NUMBER)]],
  height: [null, [Validators.required, Validators.pattern(REGEXP.WHOLE_NUMBER)]],
  heightUnit: [null, [Validators.required]],
  weight: [null, [Validators.required, Validators.pattern(REGEXP.WHOLE_NUMBER)]],
  weightUnit: [null, [Validators.required]]
});

export const DependentsDeetsFGControls = {
  firstName: ['', Validators.required],
  middleName: [''],
  lastName: ['', Validators.required],
  suffix: [''],
  dateOfBirth: [''],
  dateOfBirthAdult: [''],
  gender: ['', Validators.required],
  relationToPI: ['', Validators.required],
  civilStatus: ['', Validators.required],
  occupationCode: ['', Validators.required],
  occupationGrpCode: ['', Validators.required],
  occupationTitle: ['', [Validators.required, Validators.pattern(REGEXP.LEGAL_NAME)]],
  vesselType: [''],
  homeBuildingName: [''],
  homeBlockNumber: [''],
  homeStreet: [''],
  homeSubdivision: [''],
  homeCountryCode: ['', Validators.required],
  homeProvinceCode: ['', Validators.required],
  homeCityCode: ['', Validators.required],
  homeZipCode: [''],
  workBuildingName: [''],
  workBlockNumber: [''],
  workStreet: [''],
  workSubdivision: [''],
  workCountryCode: [''],
  workProvinceCode: [''],
  workCityCode: [''],
  workZipCode: [''],
  durationOfStay: ['', Validators.required],
  durationOfStaySelect: ['', Validators.required]
}
