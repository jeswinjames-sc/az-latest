import { FormGroup, FormBuilder, Validators } from '@angular/forms';

export const GeneralInfoFormGroup: FormGroup = new FormBuilder().group({
    approxNetWorth: ['', [
        Validators.required
    ]],
    approxAnnualIncome: ['', [
        Validators.required
    ]],
    mostImportantObjective: ['', [
        Validators.required
    ]],
    mostImportantObjectiveOthers: ['', []],
    lifeInsuranceCheck: [false, []],
    hasInsurance: ['', []],
    corporateBondsCheck: [false, []],
    hasCorpoBond: ['', []],
    timeDepositeCheck: [false, []],
    hasTimeDeposit: ['', []],
    derivativesCheck: [false, []],
    hasDerivatives: ['', []],
    mutualFundCheck: [false, []],
    hasMutualFund: ['', []],
    realEstateCheck: [false, []],
    hasRealEstate: ['', []],
    stocksCheck: [false, []],
    hasStocks: ['', []],
    ownBusinessCheck: [false, []],
    hasBusiness: ['', []],
    govtSecuritiesCheck: [false, []],
    hasGovtSecurities: ['', []],
})