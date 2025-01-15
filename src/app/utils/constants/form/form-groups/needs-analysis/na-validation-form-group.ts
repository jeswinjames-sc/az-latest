import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidatorsService } from 'app/core/services/sync/sync-validations/custom-validators/custom-validators.service';
import { REGEXP } from '@utils/constants/regexp/regexp';

const formBuilder = new FormBuilder();
const customValidatorsService: CustomValidatorsService = new CustomValidatorsService();

const NeedAnalysisRequestDataValidation: FormGroup = formBuilder.group({
  goalType: [null],
  isWaived: [null, [Validators.required, customValidatorsService.trueOrFalseValidator]],
  needsVariables: ['', [Validators.required, customValidatorsService.needsVariablesValidator]],
  relaredLead: formBuilder.group({
    self: [null, [ Validators.pattern(REGEXP.WHOLE_NUMBER), Validators.maxLength(22) ]]
  }),
  self: [null],
  status: [null, [Validators.required, customValidatorsService.fnaStatusValidator]],
  type: [null, [Validators.required, customValidatorsService.needTypeValidator]]
});

export const NeedAnalysisSyncRequestValidation: FormGroup = formBuilder.group({
  clientLeadRefId: [null, [Validators.required]],
  clientRefId: [null, [Validators.required]],
  createdDate: [null, [Validators.required, Validators.pattern(REGEXP.WHOLE_NUMBER)]],
  data: NeedAnalysisRequestDataValidation,
  isDeleted: [null, [Validators.required, customValidatorsService.booleanOnly]],
  lastUpdateDate: [null, [Validators.pattern(REGEXP.WHOLE_NUMBER)]]
});