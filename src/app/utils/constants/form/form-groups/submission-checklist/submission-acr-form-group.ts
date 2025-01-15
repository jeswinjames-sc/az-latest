import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export const SubmissionACRFormGroup: FormGroup = new FormBuilder().group({
  healthFactor: [''],
  healthFactorYes: [''],
  insurancePurpose: [''],
  insurancePurposeOthers: [''],
  houseHoldAOIncome: [''],
  houseHoldPIIncome: [''],
  militaryMember: [''],
  militaryMemberYes: [''],
  beenActive: [''],
  beenActiveYes: [''],
  PEP: [''],
  remitAgent: [''],
  NGO: [''],
  casino: [''],
  broker: [''],
  jewelDealer: [''],
  gunDealer: [''],
  validateIncome: ['', [
  ]],
  pepClientName: ['', [
    Validators.required
  ]],
  pepClientRole: ['', [
    Validators.required
  ]],
  pepName: ['', [
    Validators.required
  ]],
  pepPosition: ['', [
    Validators.required
  ]],
  pepRelationship: ['', [
    Validators.required
  ]],
  bankCert: ['', [
    Validators.required
  ]],
  bankPaySlip: ['', [
    Validators.required
  ]],
  passbook: ['', [
    Validators.required
  ]],
  incomeTax: ['', [
    Validators.required
  ]],
  deedOfSale: ['', [
    Validators.required
  ]],
  sourceOfWealthOthers: ['', [
    Validators.required
  ]],
  sourceOfWealthOthersYes: ['', [
    Validators.required
  ]],
  netHouse: ['', [
    Validators.required
  ]],
  netHouseInput: ['', [
    Validators.required
  ]],
  netBusiness: ['', [
    Validators.required
  ]],
  netBusinessInput: ['', [
    Validators.required
  ]],
  netRealEstate: ['', [
    Validators.required
  ]],
  netRealEstateInput: ['', [
    Validators.required
  ]],
  assetsOthers: ['', [
    Validators.required
  ]],
  assetsOthersYes: ['', [
    Validators.required
  ]],
  salary: ['', [
    Validators.required
  ]],
  business: ['', [
    Validators.required
  ]],
  gifts: ['', [
    Validators.required
  ]],
  legalClaims: ['', [
    Validators.required
  ]],
  investmentIncome: ['', [
    Validators.required
  ]],
  sourceOfFundOthers: ['', [
    Validators.required
  ]],
  sourceOfFundOthersYes: ['', [
    Validators.required
  ]],
  banking: ['', [
    Validators.required
  ]],
  manufacturing: ['', [
    Validators.required
  ]],
  informationTech: ['', [
    Validators.required
  ]],
  pawnshop: ['', [
    Validators.required
  ]],
  casinoOccupation: ['', [
    Validators.required
  ]],
  governmentService: ['', [
    Validators.required
  ]],
  natureBusinessOthers: ['', [
    Validators.required
  ]],
  natureBusinessOthersYes: ['', [
    Validators.required
  ]],
  security: ['', [
    Validators.required
  ]],
  protection: ['', [
    Validators.required
  ]],
  health: ['', [
    Validators.required
  ]],
  education: ['', [
    Validators.required
  ]],
  retirement: ['', [
    Validators.required
  ]],
  estatePlanning: ['', [
    Validators.required
  ]],
  reasonOthers: ['', [
    Validators.required
  ]],
  reasonOthersYes: ['', [
    Validators.required
  ]],
  passport: ['', [
    Validators.required
  ]],
  NSO: ['', [
    Validators.required
  ]],
  marriage: ['', [
    Validators.required
  ]],
  confirmDobOthers: ['', [
    Validators.required
  ]],
  confirmDobOthersYes: ['', [
    Validators.required
  ]],
  verifyAddressOthers: ['', [
    Validators.required
  ]],
  verifyAddressOthersYes: ['', [
    Validators.required
  ]],
  bills: ['', [
    Validators.required
  ]],
  creditCard: ['', [
    Validators.required
  ]],
  onsite: ['', [
    Validators.required
  ]],
  courtDecision: ['', [
    Validators.required
  ]],
  courtResolution: ['', [
    Validators.required
  ]],
  courtAffidavit: ['', [
    Validators.required
  ]],
  clientCaseOthers: ['', [
    Validators.required
  ]],
  clientCaseOthersYes: ['', [
    Validators.required
  ]],
  ACRsignature: ['', [
    Validators.required
  ]],
  isCompleted: [0]
})
