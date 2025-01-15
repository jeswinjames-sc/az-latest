import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LeadSyncPersonRequest } from '@models/leads/lead-sync-request-model/leads-person-request';
import { LeadNeedPrioritiesRequest } from '@models/leads/lead-sync-request-model/leads-request-need-priorities';
import { LeadSyncDataRequest } from '@models/leads/lead-sync-request-model/leads-sync-leads-data';
import { CustomValidatorsService } from 'app/core/services/sync/sync-validations/custom-validators/custom-validators.service';
import { REGEXP } from '@utils/constants/regexp/regexp';

const LeadFormBuilder = new FormBuilder();
const customValidatorsService: CustomValidatorsService = new CustomValidatorsService();

export const BasicLeadFormGroup: FormGroup = LeadFormBuilder.group({
  firstName: ['', [
    Validators.required,
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  lastName: ['', [
    Validators.required,
    Validators.maxLength(50),
    Validators.pattern(REGEXP.LEGAL_NAME)
  ]],
  phoneNumber: ['', [
    Validators.required,
    Validators.maxLength(11),
    Validators.pattern(REGEXP.MOBILE_NUMBER)
  ]],
  emailAddress: ['', [
    Validators.required,
    Validators.maxLength(254),
    Validators.pattern(REGEXP.EMAIL)
  ]]
});

export const DetailedLeadFormGroup: FormGroup = LeadFormBuilder.group({
  referredByBankPartner: [null],
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
  phoneNumber: ['', [
    Validators.required,
    Validators.maxLength(11),
    Validators.pattern(REGEXP.MOBILE_NUMBER)
  ]],
  emailAddress: ['', [
    Validators.required,
    Validators.maxLength(254),
    Validators.pattern(REGEXP.EMAIL)
  ]],
  gender: [null],
  civilStatus: [null],
  dateOfBirth: ['', [Validators.required]],
  leadStatus: [null],
  age: [null, [
    Validators.maxLength(3),
    Validators.min(18),
    Validators.max(100)
  ]],
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
  occupationCode: [''],
  occupationGrpCode: [''],
  monthlyIncome: [
    null, [
      Validators.maxLength(12),
      Validators.pattern(REGEXP.NUMERIC)
    ]
  ],
  householdIncome: [
    null, [
      Validators.maxLength(12),
      Validators.pattern(REGEXP.NUMERIC)
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
    '', [
      Validators.maxLength(80)
    ]
  ],
  workCountryCode: [''],
  workProvinceCode: [''],
  workCityCode: [''],
  workZipCode: ['']
});

export const SegmentFormGroup: FormGroup = LeadFormBuilder.group({
  leadSegment: ['']
});

// VALIDATION BEFORE SUBMISSION
export const ValidationDetailedLeadFormGroup: FormGroup = LeadFormBuilder.group({
  referredByBankPartner: [null],
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
  phoneNumber: ['', [
    Validators.required,
    Validators.maxLength(16)
  ]],
  emailAddress: ['', [
    Validators.required,
    Validators.maxLength(254),
    Validators.pattern(REGEXP.EMAIL)
  ]],
  gender: [null, [
    Validators.maxLength(10),
    customValidatorsService.genderValidator
  ]],
  civilStatus: [null, [
    Validators.maxLength(20),
    customValidatorsService.civilStatusValidator
  ]],
  dateOfBirth: [null],
  leadStatus: [null, [
    customValidatorsService.leadStatusValidator
  ]],
  age: [null, [
    Validators.maxLength(3),
    Validators.min(18),
    Validators.max(100)
  ]],
  homeBuildingName: ['', [
    Validators.maxLength(120)
  ]],
  homeBlockNumber: ['', [
    Validators.maxLength(15)
  ]],
  homeStreet: ['', [
    Validators.maxLength(40)
  ]],
  homeSubdivision: ['', [
    Validators.maxLength(80)
  ]],
  homeCountryCode: ['', [
    Validators.maxLength(22),
    Validators.pattern(REGEXP.NUMERIC)
  ]],
  homeProvinceCode: ['', [
    Validators.maxLength(40)
  ]],
  homeCityCode: ['', [
    Validators.maxLength(43)
  ]],
  homeZipCode: ['', [
    Validators.maxLength(10),
   ]],
  occupationCode: ['', [
    Validators.maxLength(25),
  ]],
  occupationGrpCode: ['', [
    Validators.maxLength(25),
  ]],
  monthlyIncome: [null, [
    Validators.maxLength(12),
    Validators.pattern(REGEXP.NUMERIC)
  ]],
  householdIncome: [null, [
    Validators.maxLength(12),
    Validators.pattern(REGEXP.NUMERIC)
  ]],
  workBuildingName: ['', [
    Validators.maxLength(120)
  ]],
  workBlockNumber: ['', [
    Validators.maxLength(15)
  ]],
  workStreet: ['', [
    Validators.maxLength(40)
  ]],
  workSubdivision: ['', [
    Validators.maxLength(80)
  ]],
  workCountryCode: ['', [
    Validators.maxLength(22),
    Validators.pattern(REGEXP.NUMERIC)
  ]],
  workProvinceCode: ['', [
    Validators.maxLength(40)
  ]],
  workCityCode: ['', [
    Validators.maxLength(43)
  ]],
  workZipCode: ['', [
    Validators.maxLength(10),
  ]],
  hasFinancialNeedAgreement: [false, [
    customValidatorsService.trueOrFalseValidator
  ]],
  leadStatusDetails: ['', [
    Validators.maxLength(50)
  ]],
  retirementPriority: [null, [
    Validators.maxLength(22),
    Validators.pattern(REGEXP.NUMBER)
  ]],
  protectionPriority: [null, [
    Validators.maxLength(22),
    Validators.pattern(REGEXP.NUMBER)
  ]],
  estatePlanningPriority: [null],
  educationPriority: [null, [
    Validators.maxLength(22),
    Validators.pattern(REGEXP.NUMBER)
  ]],
  savingsPriority: [null, [
    Validators.maxLength(22),
    Validators.pattern(REGEXP.NUMBER)
  ]],
  healthPriority: [null, [
    Validators.maxLength(22),
    Validators.pattern(REGEXP.NUMBER)
  ]],
  serverId: [null, [
    Validators.maxLength(22),
    Validators.pattern(REGEXP.NUMBER)
  ]],
  proposalAge: [null, [
    Validators.maxLength(24),
    Validators.pattern(REGEXP.NUMBER)
  ]]
});

export const ValidationReferrors: FormGroup = LeadFormBuilder.group({
  employeeBranch: ['', [
    Validators.maxLength(8),
    Validators.pattern(REGEXP.NUMBER)
  ]],
  firstName: ['', [
    Validators.maxLength(50),
  ]],
  middleName: ['', [
    Validators.maxLength(50),
  ]],
  name: ['', [
    Validators.maxLength(50),
    Validators.pattern(REGEXP.NUMBER)
  ]],
  referrorCode: ['', [
    Validators.maxLength(50),
    Validators.pattern(REGEXP.NUMBER)
  ]],
  self: ['', [
    Validators.maxLength(22),
    Validators.pattern(REGEXP.NUMBER)
  ]],
});
