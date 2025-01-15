import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorsService } from 'app/core/services/sync/sync-validations/custom-validators/custom-validators.service';
import { REGEXP } from '@utils/constants/regexp/regexp';

const numericValidation = [Validators.required, Validators.pattern(REGEXP.NUMERIC)];

const SCFormBuilder = new FormBuilder();
const customValidatorsService: CustomValidatorsService = new CustomValidatorsService();

const aCRFormGroup: FormGroup = SCFormBuilder.group({
  ACB000000101: SCFormBuilder.group({ ACB000000101_1: [null, [Validators.required]] }),
  ACB000000201: SCFormBuilder.group({ ACB000000201_1: [null, [Validators.required]] }),
  ACB000000301: SCFormBuilder.group({ ACB000000301_1: [null, [Validators.required]] }),
  ACB000000401: SCFormBuilder.group({ ACB000000401_1: [null, [Validators.required]] }),
  ACB000000501: SCFormBuilder.group({ ACB000000501_1: [null, [Validators.required]] })
});

const aCBFormGroup: FormGroup = SCFormBuilder.group({
  ACR000000101: SCFormBuilder.group({ ACR000000101_1: [null, [Validators.required]] }),
  ACR000000102: SCFormBuilder.group({ ACR000000102_1: [null] }),
  ACR000000201: SCFormBuilder.group({
    ACR000000201_1: [null, [Validators.required]],
    ACR000000201_OTHR: [null, []]
  }),
  ACR000000301: SCFormBuilder.group({ ACR000000301_1: [null, [Validators.required]] }),
  ACR000000302: SCFormBuilder.group({ ACR000000302_1: [null, []] }),
  ACR000000401: SCFormBuilder.group({ ACR000000401_1: [null, [Validators.required]] }),
  ACR000000402: SCFormBuilder.group({ ACR000000402_1: [null, []] }),
  ACR000000403: SCFormBuilder.group({ ACR000000403_1: [null, [Validators.required]] }),
  ACR000000404: SCFormBuilder.group({ ACR000000404_1: [null, []] }),
  ACR000000501: SCFormBuilder.group({ ACR000000501_1: [null, [Validators.required]] }),
  ACR000000502: SCFormBuilder.group({ ACR000000502_1: [null, [Validators.required]] }),
  ACR000000503: SCFormBuilder.group({ ACR000000503_1: [null, [Validators.required]] }),
  ACR000000504: SCFormBuilder.group({ ACR000000504_1: [null, [Validators.required]] }),
  ACR000000505: SCFormBuilder.group({ ACR000000505_1: [null, [Validators.required]] }),
  ACR000000506: SCFormBuilder.group({ ACR000000506_1: [null, [Validators.required]] }),
  ACR000000507: SCFormBuilder.group({ ACR000000507_1: [null, [Validators.required]] }),
  ACR000000601: SCFormBuilder.group({ ACR000000601_1: [null, []] }),
  ACR000000701: SCFormBuilder.group({ ACR000000701_1: [null, []] }),
  ACR000000702: SCFormBuilder.group({ ACR000000702_1: [null, []] }),
  ACR000000703: SCFormBuilder.group({ ACR000000703_1: [null, []] }),
  ACR000000704: SCFormBuilder.group({ ACR000000704_1: [null, []] }),
  ACR000000705: SCFormBuilder.group({ ACR000000705_1: [null, []] }),
  ACR000000706: SCFormBuilder.group({ ACR000000706_1: [null, []] }),
  ACR000000801: SCFormBuilder.group({ ACR000000801_1: [null, []] }),
  ACR100000101: SCFormBuilder.group({ ACR100000101_1: [null, []] }),
  ACR100000201: SCFormBuilder.group({ ACR100000201_1: [null, []] }),
  ACR100000301: SCFormBuilder.group({ ACR100000301_1: [null, []] }),
  ACR100000302: SCFormBuilder.group({ ACR100000302_1: [null, []] }),
  ACR100000303: SCFormBuilder.group({ ACR100000303_1: [null, []] }),
  ACR100000401: SCFormBuilder.group({ ACR100000401_1: [null, []] }),
  ACR100000402: SCFormBuilder.group({ ACR100000402_1: [null, []] }),
  ACR100000403: SCFormBuilder.group({ ACR100000403_1: [null, []] }),
  ACR100000404: SCFormBuilder.group({ ACR100000404_1: [null, []] }),
  ACR100000405: SCFormBuilder.group({ ACR100000405_1: [null, []] }),
  ACR100000406: SCFormBuilder.group({
    ACR100000406_00: [null, []],
    ACR100000406_OTHR: [null, []]
  }),
  ACR100000501: SCFormBuilder.group({ ACR100000501_1: [null, []] }),
  ACR100000502: SCFormBuilder.group({ ACR100000502_1: [null, []] }),
  ACR100000503: SCFormBuilder.group({ ACR100000503_1: [null, []] }),
  ACR100000504: SCFormBuilder.group({ ACR100000504_1: [null, []] }),
  ACR100000505: SCFormBuilder.group({ ACR100000505_1: [null, []] }),
  ACR100000506: SCFormBuilder.group({ ACR100000506_1: [null, []] }),
  ACR100000507: SCFormBuilder.group({
    ACR100000507_00: [null, []],
    ACR100000507_OTHR: [null, []]
  }),
  ACR100000601: SCFormBuilder.group({ ACR100000601_1: [null, []] }),
  ACR100000602: SCFormBuilder.group({ ACR100000602_1: [null, []] }),
  ACR100000603: SCFormBuilder.group({ ACR100000603_1: [null, []] }),
  ACR100000604: SCFormBuilder.group({ ACR100000604_1: [null, []] }),
  ACR100000605: SCFormBuilder.group({ ACR100000605_1: [null, []] }),
  ACR100000606: SCFormBuilder.group({
    ACR100000606_00: [null, []],
    ACR100000606_OTHR: [null, []]
  }),
  ACR100000701: SCFormBuilder.group({ ACR100000701_1: [null, []] }),
  ACR100000702: SCFormBuilder.group({ ACR100000702_1: [null, []] }),
  ACR100000703: SCFormBuilder.group({ ACR100000703_1: [null, []] }),
  ACR100000705: SCFormBuilder.group({ ACR100000705_1: [null, []] }),
  ACR100000706: SCFormBuilder.group({ ACR100000706_1: [null, []] }),
  ACR100000707: SCFormBuilder.group({ ACR100000707_1: [null, []] }),
  ACR100000704: SCFormBuilder.group({
    ACR100000704_00: [null, []],
    ACR100000704_OTHR: [null, []]
  }),
  ACR100000801: SCFormBuilder.group({ ACR100000801_1: [null, []] }),
  ACR100000802: SCFormBuilder.group({ ACR100000802_1: [null, []] }),
  ACR100000803: SCFormBuilder.group({ ACR100000803_1: [null, []] }),
  ACR100000804: SCFormBuilder.group({ ACR100000804_1: [null, []] }),
  ACR100000805: SCFormBuilder.group({ ACR100000805_1: [null, []] }),
  ACR100000806: SCFormBuilder.group({ ACR100000806_1: [null, []] }),
  ACR100000807: SCFormBuilder.group({
    ACR100000807_00: [null, []],
    ACR100000807_OTHR: [null, []]
  }),
  ACR100000901: SCFormBuilder.group({ ACR100000901_1: [null, []] }),
  ACR100000902: SCFormBuilder.group({ ACR100000902_1: [null, []] }),
  ACR100000903: SCFormBuilder.group({ ACR100000903_1: [null, []] }),
  ACR100000904: SCFormBuilder.group({
    ACR100000807_00: [null, []],
    ACR100000807_OTHR: [null, []]
  }),
  ACR100001001: SCFormBuilder.group({ ACR100001001_1: [null, []] }),
  ACR100001002: SCFormBuilder.group({ ACR100001002_1: [null, []] }),
  ACR100001003: SCFormBuilder.group({ ACR100001003_1: [null, []] }),
  ACR100001004: SCFormBuilder.group({
    ACR100001004_00: [null, []],
    ACR100001004_OTHR: [null, []]
  }),
  ACR100001101: SCFormBuilder.group({ ACR100001101_1: [null, []] }),
  ACR100001102: SCFormBuilder.group({ ACR100001102_1: [null, []] }),
  ACR100001103: SCFormBuilder.group({ ACR100001103_1: [null, []] }),
  ACR100001104: SCFormBuilder.group({
    ACR100001104_00: [null, []],
    ACR100001104_OTHR: [null, []]
  })
});

const questionsFormGroup: FormGroup = SCFormBuilder.group({
  ACB: aCBFormGroup,
  ACR: aCRFormGroup
});

const cardHolderFormGroup: FormGroup = SCFormBuilder.group({
  checkoutId: [null, [Validators.required]],
  cardHolderPerson: [null]
});

const selfFormGroup: FormGroup = SCFormBuilder.group({
  self: [null, [Validators.required]]
});

const dataFormGroup: FormGroup = SCFormBuilder.group({
  relatedLead: selfFormGroup,
  questions: questionsFormGroup,
  applicationNumber: [null, [Validators.required]],
  cardHolder: cardHolderFormGroup,
  self: selfFormGroup,
  policyNumber: [null],
  signatories: [null],
  status: [null, [customValidatorsService.submissionChecklistStatusValidator]]
});

export const SCFormGroup: FormGroup = SCFormBuilder.group({
  data: dataFormGroup,
  clientLeadRefId: [null, Validators.required],
  createdDate: [null, numericValidation],
  lastUpdateDate: [null, numericValidation],
  clientRefId: [null, Validators.required]
});

const personsFormGroup: FormGroup = SCFormBuilder.group({
  declarations: SCFormBuilder.group({
    relatedProductDeclaration: [null, [Validators.required, customValidatorsService.trueOrFalseValidator]],
    generalDeclaration: [null, [Validators.required, customValidatorsService.trueOrFalseValidator]],
    application: [null, [Validators.required, customValidatorsService.trueOrFalseValidator]],
    delayedNoticeDeclaration: [null, [Validators.required, customValidatorsService.trueOrFalseValidator]],
    replacementNotification: [null, [Validators.required, customValidatorsService.trueOrFalseValidator]],
    furnishMedicalAuthorization: [null, [Validators.required, customValidatorsService.trueOrFalseValidator]],
    interimCoverageCertificate: [null, [Validators.required, customValidatorsService.trueOrFalseValidator]],
    needAnalysis: [null, [Validators.required, customValidatorsService.trueOrFalseValidator]],
    quotation: [null, [Validators.required, customValidatorsService.trueOrFalseValidator]],
    investmentProfile: [null, [Validators.required, customValidatorsService.trueOrFalseValidator]],
  })
});

export const signatoriesFormGroup: FormGroup = SCFormBuilder.group({
  signatureData: SCFormBuilder.group({
    data: [null, [Validators.required]],
    signedDate: [null, numericValidation]
  }),
  persons: personsFormGroup,
  self: selfFormGroup,
  customerNumber: [null, [Validators.required]]
});