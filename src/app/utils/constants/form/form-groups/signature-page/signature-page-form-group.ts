import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';
import { REGEXP } from '@utils/constants/regexp/regexp';
import { SIGNATURE_TYPE } from "@utils/constants/modules/signature-page";
const SignaturePageFormBuilder = new FormBuilder();

export const NAFormGroup: FormGroup = SignaturePageFormBuilder.group({
  needType: [{ value: '', disabled: true }],
  generatedDate: [{ value: '', disabled: true }],
  currentMonthlyIncome: [{ value: '', disabled: true }],
  incomeReplacementPeriod: [{ value: '', disabled: true }],
  desiredHealthFund: [{ value: '', disabled: true }],
  currentMonthlyExpenses: [{ value: '', disabled: true }],
  yearsToRetirement: [{ value: '', disabled: true }],
  retirementAge: [{ value: '', disabled: true }],
  retirementPeriod: [{ value: '', disabled: true }],
  annualTuitionFee: [{ value: '', disabled: true }],
  childAge: [{ value: '', disabled: true }],
  childAgeFreshman: [{ value: '', disabled: true }],
  collegeYearsCount: [{ value: '', disabled: true }],
  savings: [{ value: '', disabled: true }],
  goalValueInYears: [{ value: '', disabled: true }],
  currentGoalValue: [{ value: '', disabled: true }],
  currentGoalValueThirdYear: [{ value: '', disabled: true }],
  currentGoalValueFifthYear: [{ value: '', disabled: true }],
  currentGoalValueTenthYear: [{ value: '', disabled: true }],
  futureGoalValue: [{ value: '', disabled: true }],
  futureGoalValueThirdYear: [{ value: '', disabled: true }],
  futureGoalValueFifthYear: [{ value: '', disabled: true }],
  futureGoalValueTenthYear: [{ value: '', disabled: true }],
  savingsGoalValue: [{ value: '', disabled: true }],
  savingsThirdYear: [{ value: '', disabled: true }],
  savingsFifthYear: [{ value: '', disabled: true }],
  savingsTenthYear: [{ value: '', disabled: true }],
  savingsGap: [{ value: '', disabled: true }],
  savingsGapThirdYear: [{ value: '', disabled: true }],
  savingsGapFifthYear: [{ value: '', disabled: true }],
  savingsGapTenthYear: [{ value: '', disabled: true }],
  currentSavings: [{ value: '', disabled: true }],
  currentSavingsThirdYear: [{ value: '', disabled: true }],
  currentSavingsFifthYear: [{ value: '', disabled: true }],
  currentSavingsTenthYear: [{ value: '', disabled: true }],
  annualSavings: [{ value: '', disabled: true }],
  annualSavingsThirdYear: [{ value: '', disabled: true }],
  annualSavingsFifthYear: [{ value: '', disabled: true }],
  annualSavingsTenthYear: [{ value: '', disabled: true }],
  estateDtlCash: [{ value: '', disabled: true }],
  estateDtlRealEstate: [{ value: '', disabled: true }],
  estateDtlStockAndBonds: [{ value: '', disabled: true }],
  estateDtlOtherAssets: [{ value: '', disabled: true }],
  totalEstateValueCurrentYear: [{ value: '', disabled: true }],
  totalEstateValueFifthYear: [{ value: '', disabled: true }],
  totalEstateValueTenthYear: [{ value: '', disabled: true }],
  totalEstateValueTwentiethYear: [{ value: '', disabled: true }],
  estateTaxCurrentYear: [{ value: '', disabled: true }],
  estateTaxFifthYear: [{ value: '', disabled: true }],
  estateTaxTenthYear: [{ value: '', disabled: true }],
  estateTaxTwentiethYear: [{ value: '', disabled: true }]
});

export const AOApplicationFormGroup: FormGroup = SignaturePageFormBuilder.group({
  firstAgreement: [false, Validators.requiredTrue],
  secondAgreement: [false, Validators.requiredTrue]
});

export const ApplicantOwnerFormGroup: FormGroup = SignaturePageFormBuilder.group({
  needsAnalysisCheck: [false, Validators.requiredTrue],
  needsAnalysisWaiverCheck: [false, Validators.requiredTrue],
  irpqCheck: [false, Validators.requiredTrue],
  salesIllustrationCheck: SignaturePageFormBuilder.group({
    salesIllustrationCheckStandard: [false, Validators.requiredTrue]
  }),
  applicationFormCheck: [false, Validators.requiredTrue],
  generalDeclarationCheck: SignaturePageFormBuilder.group({
    paperFormatConsent: [false],
    thirdPartyConsent: [false],
    consentCheck: [false, Validators.requiredTrue]
  }),
  replacementNotificationFormCheck: [false, Validators.requiredTrue],
  authorizationToFurnishMedicalCheck: [false, Validators.requiredTrue],
  certificateOfInterimCheck: [false, Validators.requiredTrue]
});

export const ApplicantOwnerModulesFormGroup: FormGroup = SignaturePageFormBuilder.group({
  ApplicantOwnerFormGroup,
  signatureType: [SIGNATURE_TYPE.applicantOwner],
  signatureOption: ['', Validators.required],
  attestation: [''],
  videoScreenshot: [''],
  emailAcknowledgement: [''],
  signature: ['']
});

export const ProposedInsuredFormGroup: FormGroup = SignaturePageFormBuilder.group({
  salesIllustrationCheck: [false, Validators.requiredTrue],
  applicationFormCheck: [false, Validators.requiredTrue],
  generalDeclarationCheck: SignaturePageFormBuilder.group({
    paperFormatConsent: [false],
    thirdPartyConsent: [false],
    consentCheck: [false, Validators.requiredTrue]
  }),
  authorizationToFurnishMedicalCheck: [false, Validators.requiredTrue],
  certificateOfInterimCheck: [false, Validators.requiredTrue]
});

export const ProposedInsuredModulesFormGroup: FormGroup = SignaturePageFormBuilder.group({
  ProposedInsuredFormGroup,
  signatureType: [SIGNATURE_TYPE.proposedInsured],
  signatureOption: ['', Validators.required],
  attestation: [''],
  videoScreenshot: [''],
  emailAcknowledgement: [''],
  signature: ['']
});

export const IntermediaryFormGroup: FormGroup = SignaturePageFormBuilder.group({
  submodules: SignaturePageFormBuilder.group({
    irpqCheck: [false, Validators.requiredTrue],
    applicationFormCheck: [false, Validators.requiredTrue],
    generalDeclarationCheck: SignaturePageFormBuilder.group({
      paperFormatConsent: [false],
      thirdPartyConsent: [false],
      consentCheck: [false, Validators.requiredTrue]
    }),
    salesIllustrationCheck: [false, Validators.requiredTrue],
    authorizationToFurnishMedicalCheck: [false, Validators.requiredTrue],
    referrorDetails: SignaturePageFormBuilder.group({
      referrorId: [''],
      leadId: [''],
      fullName: [''],
      referrorCode: [''],
      branchName: [''],
      branchCode: [''],
      dateCreated: ['']
    }),
    replaceExistingPolicies: SignaturePageFormBuilder.group({
      intmPolicyIntendedToChange: ['', Validators.required],
      intmPremiumsPaidByLoan: ['', Validators.required]
    })
  }),
  signatureType: [SIGNATURE_TYPE.agent],
  disableEDD: [false],
  signature: ['', Validators.required]
});

// compiled all the formGroups into one
export const SignaturePageFormGroup = SignaturePageFormBuilder.group({
  ApplicantOwnerModulesFormGroup,
  ProposedInsuredModulesFormGroup,
  IntermediaryFormGroup
});
