import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { VesselOpFGControls, BeneficialOwnerDeetsFGControls } from '@fg-controls/e-app';
import { CustomValidatorsService } from 'app/core/services/sync/sync-validations/custom-validators/custom-validators.service';
import { REGEXP } from '@utils/constants/regexp/regexp';

const customValidatorsService: CustomValidatorsService = new CustomValidatorsService();
export const ApplicationOwnerFormBuilder = new FormBuilder()

export const ApplicantOwnerFormGroup: FormGroup = ApplicationOwnerFormBuilder.group({
    aoFirstName: ['', [Validators.required, Validators.maxLength(50)]],
    aoMiddleName: ['', [Validators.maxLength(50)]],
    aoLastName: ['', [Validators.required, Validators.maxLength(50)]],
    otherFirstName: ['', [Validators.maxLength(150), Validators.pattern(REGEXP.LEGAL_NAME)]],
    otherMiddleName: ['', [Validators.maxLength(150), Validators.pattern(REGEXP.LEGAL_NAME)]],
    otherLastName: ['', [Validators.maxLength(150), Validators.pattern(REGEXP.LEGAL_NAME)]],
    email: ['', [Validators.required, Validators.maxLength(254), Validators.pattern(REGEXP.EMAIL)]],
    contactNumber: ['', [Validators.required, Validators.maxLength(13), Validators.pattern(REGEXP.MOBILE_NUMBER)]],
    //place of birth
    pobCity: [null, [Validators.required]],
    pobProvince: [null, [Validators.required]],
    pobCountry: [null, [Validators.required]],
    dateOfBirth: [null, [Validators.required]],
    pobCityName: [null],
    pobProvinceName: [null],
    pobCountryName: [null],
    gender: [null, [Validators.required]],
    nationality: [null, [Validators.required]],
    nationalityName: [null],
    isUSPerson: [null, [Validators.required]],
    civilStatus: [null, [Validators.required]],
    relationshipToPI: [null, [Validators.required]],
    //permanent address
    homeUnitBuilding: [null],
    homeLotBlock: [null],
    homeStreet: [null],
    homeBarangay: [null],
    homeCountryCode: [null, []],
    homeProvinceCode: [null, []],
    homeCityCode: [null, []],
    homeZipCode: [null, []],
    annualIncome: [],
    occupation: [],
    occupationTitle: [],
    employer: [],
    natureOfBusiness: [],
    workUnitBuilding: [null, [Validators.maxLength(120)]],
    workLotBlock: [null, [Validators.maxLength(15)]],
    workStreet: [null, [Validators.maxLength(40)]],
    workBarangay: [null, [Validators.maxLength(80)]],
    workCountryCode: [null, []],
    workProvinceCode: [null, []],
    workCityCode: [null, []],
    workZipCode: [null, []],
    armyBranch: ['', []],
    rank: ['', []],
    airlineJob: ['', []],
    aircraftType: ['', []],
    numberOfFlightExpirience: ['', []],
    fishingArea: ['', []],
    vesselOwner: [null, [Validators.maxLength(150), Validators.pattern(REGEXP.NAME)]],
    vesselType: [''],
    vesselCountry: [''],
    vesselOperationInfo: ApplicationOwnerFormBuilder.array([]),
    isPoliticallySensitive: [],
    isAoEqualsPi: ["Y", []],
    sourceOfFunds: [],
    otherSourceOfFunds: ['', [Validators.pattern(REGEXP.TEXT)]],
    preferredMailingAddress: ['', [Validators.required]],
    validIdNumber: ['', [Validators.required, Validators.maxLength(12), Validators.pattern(REGEXP.ALPHANUMERIC)]],
    //contingent owner
    coFirstName: ['', []],
    coMiddleName: ['', []],
    coLastName: ['', []],
    coDateOfBirth: ['', []],
    coRelationship: ['', []],
    isAOEqualBO: [true],
    prominentPublicPosition : [null,[]],
    validIdNum: ['',[]],
    identificationNumber: ['', []]
})

export const PolicyInsuredFormBuilder: FormBuilder = new FormBuilder();

export const PolicyInsuredFormGroup: FormGroup = PolicyInsuredFormBuilder.group({
    piFirstName: ['', [Validators.required, Validators.maxLength(50)]],
    piMiddleName: ['', [Validators.maxLength(50)]],
    piLastName: ['', [Validators.required, Validators.maxLength(50)]],
    otherFirstName: ['', [Validators.maxLength(150), Validators.pattern(REGEXP.LEGAL_NAME)]],
    otherMiddleName: ['', [Validators.maxLength(150), Validators.pattern(REGEXP.LEGAL_NAME)]],
    otherLastName: ['', [Validators.maxLength(150), Validators.pattern(REGEXP.LEGAL_NAME)]],
    contactNumber: ['', [Validators.required, Validators.maxLength(13), Validators.pattern(REGEXP.MOBILE_NUMBER)]],
    email: ['', [Validators.required, Validators.maxLength(254), Validators.pattern(REGEXP.EMAIL)]],
    //place of birth
    pobCity: [null, [Validators.required]],
    pobProvince: [null, [Validators.required]],
    pobCountry: [null, [Validators.required]],
    pobCityName: [null],
    pobProvinceName: [null],
    pobCountryName: [null],
    dateOfBirth: [null, [Validators.required]],
    gender: [null, [Validators.required]],
    nationality: [null, [Validators.required]],
    nationalityName: [null],
    isUSPerson: [null],
    civilStatus: [null, [Validators.required]],
    //permanent address
    homeUnitBuilding: [null, [Validators.maxLength(120)]],
    homeLotBlock: [null, [Validators.maxLength(15)]],
    homeStreet: [null, [Validators.maxLength(40)]],
    homeBarangay: [null, [Validators.maxLength(80)]],
    homeCountryCode: [null, []],
    homeProvinceCode: [null, []],
    homeCityCode: [null, []],
    homeZipCode: [null, []],
    annualIncome: [],
    occupation: [],
    occupationTitle: [],
    employer: [],
    natureOfBusiness: [],
    workUnitBuilding: [null, [Validators.maxLength(120)]],
    workLotBlock: [null, [Validators.maxLength(15)]],
    workStreet: [null, [Validators.maxLength(40)]],
    workBarangay: [null, [Validators.maxLength(80)]],
    workCountryCode: ['', []],
    workProvinceCode: ['', []],
    workCityCode: ['', []],
    workZipCode: ['', []],
    armyBranch: ['', []],
    rank: ['', []],
    airlineJob: ['', []],
    aircraftType: ['', []],
    numberOfFlightExpirience: ['', []],
    fishingArea: ['', []],
    vesselOwner: [null, [Validators.maxLength(150)]],
    vesselType: [''],
    vesselCountry: [''],
    vesselOperationInfo: PolicyInsuredFormBuilder.array([]),
    isPoliticallySensitive: [],
    sourceOfFunds: [],
    otherSourceOfFunds: ['', [Validators.pattern(REGEXP.TEXT)]],
    identificationNumber: ['', []],
    prominentPublicPosition : [null,[]]
});

export const BenificialOwnerFormGroup: FormGroup = new FormBuilder().group({
    BeneficialOwnerGroup: new FormBuilder().array([])
})
export const BeneficialOwnerDeetsFormGroup: FormGroup = new FormBuilder().group(BeneficialOwnerDeetsFGControls)
export const VesselOpFormGroup: FormGroup = new FormBuilder().group(VesselOpFGControls);

// Validations for before syncing
const SelfValidation: FormGroup = new FormBuilder().group({
  self: [null, [Validators.maxLength(22)]]
});

const EappRequestPayOutValidation: FormGroup = new FormBuilder().group({
  bankAccountName: [null, [Validators.maxLength(160)]],
  bankAccountNumber: [null, [Validators.maxLength(25)]],
  bankBranch: [null, [Validators.maxLength(50)]],
  bankName: [null, [Validators.maxLength(300)]],
  currency: [null, [Validators.maxLength(5)]],
  jointAccountType: [null, [Validators.maxLength(10), customValidatorsService.jointAccountTypeValidator]],
  method: [null, [Validators.maxLength(1), customValidatorsService.methodValidator]],
  coDepositorName: [null, [Validators.maxLength(118)]]
});

const AddressValidation: FormGroup = new FormBuilder().group({
  buildingName: [null, [Validators.required, Validators.maxLength(120)]],
  cityCode: [null, [Validators.required, Validators.maxLength(5)]],
  countryCode: [null, [Validators.required, Validators.maxLength(22)]],
  district: [null, [Validators.required, Validators.maxLength(80)]],
  self: [null, [Validators.maxLength(22)]],
  state: [null, [Validators.required, Validators.maxLength(5)]],
  street: [null, [Validators.required, Validators.maxLength(40)]],
  streetNumber: [null, [Validators.required, Validators.maxLength(15)]],
  type: [null, [customValidatorsService.addressTypeValidator]],
  zipCode: [null, [Validators.required]]
});

const BeneficiaryPersonValidation: FormGroup = new FormBuilder().group({
  address: new FormBuilder().group({
    homeAddress: AddressValidation
  }),
  addressReference: [null, [customValidatorsService.addressReferenceValidator]],
  age: [null, [Validators.required, Validators.maxLength(3), Validators.pattern(REGEXP.WHOLE_NUMBER)]],
  birthDate: [null, [Validators.required, customValidatorsService.earlierThanTodayValidator]],
  firstName: [null, [Validators.maxLength(50)]],
  middleName: [null, [Validators.maxLength(50)]],
  occupationTitle: [null, [Validators.pattern(REGEXP.LEGAL_NAME)]],
  name: [null, [Validators.maxLength(50)]],
  nationality: [null, [Validators.required, Validators.maxLength(20)]],
  questions: [],
  relationType: [null, [Validators.maxLength(50), customValidatorsService.relationTypeValidator]],
  self: [null, [Validators.maxLength(22), Validators.pattern(REGEXP.WHOLE_NUMBER)]],
});

const FullNamevalidator = {
  firstName: [null, [Validators.maxLength(50)]],
  middleName: [null, [Validators.maxLength(50)]],
  name: [null, [Validators.maxLength(50)]],

};

export const FamilyMemberValidator: FormGroup = new FormBuilder().group({
  age: [null, [Validators.max(3)]],
  birthDate: [null, [customValidatorsService.earlierThanTodayValidator]],
  FullNamevalidator,
  relationType: [null, [Validators.maxLength(50), customValidatorsService.relationTypeValidator]],
  self: [null, [Validators.maxLength(22), Validators.pattern(REGEXP.WHOLE_NUMBER)]],
});

const PreferredContactChannels: FormGroup = new FormBuilder().group({
  email: [null, [Validators.maxLength(254), Validators.email, Validators.pattern(REGEXP.EMAIL)]],
  mailingAddress: [null, [Validators.maxLength(254)]],
  phoneNumber: [null, [Validators.maxLength(254)]],
  phoneChannel: new FormBuilder().group({
    countryCode: [null, [Validators.maxLength(3)]],
    areaCode: [null, [Validators.maxLength(3)]],
    phoneNumber: [null, [Validators.maxLength(50)]],
  })
});

const ContractHolderValidation: FormGroup = new FormBuilder().group({
  annualIncome: [null, [Validators.pattern(REGEXP.AMOUNT)]],
  annualIncomeCurrency: [null, [Validators.maxLength(10), customValidatorsService.currencyValidator]],
  birthPlaceRegion: [null, [Validators.maxLength(35)]],
  cityOfBirth: [null, [Validators.maxLength(35)]],
  father: FamilyMemberValidator,
  height: [null, [Validators.pattern(REGEXP.AMOUNT)]],
  heightUnit: [null, [Validators.maxLength(20)]],
  isUsPerson: [null, [customValidatorsService.booleanOnly]],
  maidenName: new FormBuilder().group(FullNamevalidator),
  mother: FamilyMemberValidator,
  nationality: [null, [Validators.maxLength(20)]],
  nativeCountry: [null, [Validators.maxLength(30)]],
  otherLegalName: [null],
  otherSourceOfIncome: [null, [Validators.maxLength(100)]],
  preferredContactChannels: PreferredContactChannels,
  questions: [null],
  relationType: [null, [Validators.maxLength(15), customValidatorsService.relationTypeValidator]],
  self: [null, [Validators.maxLength(22)]],
  siblings: FamilyMemberValidator,
  socialSecurityNumber: [null, [Validators.maxLength(12)]],
  sourceOfIncome: [null, [Validators.maxLength(30), customValidatorsService.sourceOfIncomeValidator]],
  vatIN: [null, [Validators.maxLength(12)]],
  weight: [null, [Validators.pattern(REGEXP.AMOUNT)]],
  weightUnit: [null, [Validators.maxLength(20)]]
});

const InsuredPersonValidation: FormGroup = new FormBuilder().group({
  annualIncome: [null, [Validators.pattern(REGEXP.AMOUNT)]],
  annualIncomeCurrency: [null, [Validators.maxLength(10), customValidatorsService.currencyValidator]],
  birthPlaceRegion: [null, [Validators.maxLength(35)]],
  cityOfBirth: [null, [Validators.maxLength(35)]],
  father: FamilyMemberValidator,
  height: [null, [Validators.pattern(REGEXP.AMOUNT)]],
  heightUnit: [null, [Validators.maxLength(20)]],
  isUsPerson: [null, [customValidatorsService.booleanOnly]],
  maidenName: [null],
  mother: FamilyMemberValidator,
  nationality: [null, [Validators.maxLength(20)]],
  nativeCountry: [null, [Validators.maxLength(30)]],
  otherLegalName: [null],
  otherSourceOfIncome: [null, [Validators.maxLength(100)]],
  preferredContactChannels: PreferredContactChannels,
  questions: [null],
  relationType: [null, [Validators.maxLength(15), customValidatorsService.relationTypeValidator]],
  self: [null, [Validators.maxLength(22)]],
  siblings: [null],
  socialSecurityNumber: [null, [Validators.maxLength(12)]],
  sourceOfIncome: [null, [Validators.maxLength(30), customValidatorsService.sourceOfIncomeValidator]],
  vatIN: [null, [Validators.maxLength(12)]],
  weight: [null, [Validators.pattern(REGEXP.AMOUNT)]],
  weightUnit: [null, [Validators.maxLength(20)]]
});

const EappRequestDataValidation: FormGroup = new FormBuilder().group({
  applicationNumber: [null, [Validators.maxLength(14), Validators.pattern(REGEXP.WHOLE_NUMBER)]],
  beneficialOwners: [],
  beneficiaries: [],
  contingentOwner: FamilyMemberValidator,
  contractHolder: ContractHolderValidation,
  contractProcessState: [null, [Validators.required, Validators.maxLength(100)]],
  fundDetails: [],
  insurePerson: InsuredPersonValidation,
  insuranceSum: [],
  isAOequalsBO: [null, customValidatorsService.booleanOnly],
  payOut: EappRequestPayOutValidation,
  paymentFrequency: [],
  paymentMethod: [null, [Validators.maxLength(1), customValidatorsService.paymentMethodValidator]],
  premiumDefaultOption: [null, [Validators.maxLength(1), customValidatorsService.premiumDefaultOptionValidator]],
  productOfferingDescription: [null],
  productOfferingName: [null],
  provisionalReceiptNumber: [null, [Validators.maxLength(20)]],
  questions: [null],
  quotation: new FormBuilder().group({
    clientRefId: [null, [Validators.maxLength(22)]],
    self: [null, [Validators.maxLength(22)]]
  }),
  relatedLead: SelfValidation,
  self: [null, [Validators.maxLength(22), Validators.required]],
  settlementOption: [null, [Validators.maxLength(50)]],
  status: [null, [Validators.maxLength(100), Validators.required, customValidatorsService.eappStatusValidator]]
});

export const ValidationEappFormGroup: FormGroup = new FormBuilder().group({
    clientLeadRefId: [null],
    clientRefId: [null, [Validators.required]],
    createdDate: [null],
    data: EappRequestDataValidation,
    isDeleted: [null, [customValidatorsService.booleanOnly]],
    lastUpdateDate: [null],
});

export const BeneficiariesValidation: FormGroup = new FormBuilder().group({
    guardian: new FormBuilder().group({
      age: [null, [Validators.max(3)]],
      birthDate: [null, [customValidatorsService.earlierThanTodayValidator]],
      FullNamevalidator,
      relationType: [null, [Validators.maxLength(50), customValidatorsService.relationTypeValidator]],
      self: [null, [Validators.maxLength(22), Validators.pattern(REGEXP.WHOLE_NUMBER)]],
    }),
    isRevocable: [null, [customValidatorsService.booleanOnly]],
    justification: [null, [Validators.maxLength(50)]],
    minor: [null, [customValidatorsService.booleanOnly]],
    order: [null, [Validators.maxLength(3)]],
    percent: [null, [Validators.maxLength(22)]],
    person: BeneficiaryPersonValidation,
    priorityLevel: [null, [Validators.maxLength(1), customValidatorsService.priorityLevelValidator]],
    self: [null],
    usePreviousGuardian: [null, [customValidatorsService.booleanOnly]]
});

export const FundDetailsValidation: FormGroup = new FormBuilder().group({
  fundName: [null, [Validators.maxLength(10)]],
  self: [null, [Validators.maxLength(10), customValidatorsService.fundDetailValidator]],
  specificFund: new FormBuilder().group({
    topUpPercentage: [null, [Validators.maxLength(22)]]
  })
});
