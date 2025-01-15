import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup, Validators } from '@angular/forms';
import * as _ from 'lodash';

// Models
import { Leads } from '@models/leads/leads';
import { ReferrorLeadRequest } from '@models/leads/lead-sync-request-model/leads-referror-request';
import { NeedAnalaysisSyncRequest } from '@models/need-analysis-sync-request/need-analysis-sync';
import { IRPQSyncRequestArray } from '@models/irpq';
import { CheckListsRequest } from '@models/submission-checklist/submission-sync/checklists-request';
import { Quotations } from '@models/sales-illustration/sync/quotation';

// Form group validations
import { ValidationDetailedLeadFormGroup, ValidationReferrors } from '@form-group/leads/lead-form-group';
import { NeedAnalysisSyncRequestValidation } from '@form-group/needs-analysis/na-validation-form-group';
import { QuotationsValidation } from '@form-group/sales-illustration/sales-illustration-form-group';
import { IRPQSyncRequestArrayFormValidation } from '@form-group/irpq/irpq-form-group';
import { SCFormGroup, signatoriesFormGroup } from '@form-group/submission-checklist/submission-checklist-list-form-group';
import { ValidationEappFormGroup, BeneficiariesValidation, FundDetailsValidation } from '@form-group/e-app/applicant-owner-form-group';

import { MODULE } from '@utils/enums/module';
import { DeltaSyncResponse } from 'app/core/models/delta-sync-response';
import {
  CHECKLIST_ERROR_MESSAGES,
  EAPP_ERROR_MESSAGES,
  IRPQ_ERROR_MESSAGES,
  LEADS_ERROR_MESSAGES,
  NA_ERROR_MESSAGES,
  SI_ERROR_MESSAGES } from './sync-error-message';
import { REGEXP } from '@utils/constants/regexp/regexp';

interface AbstractControlInterface {
  [key: string]: AbstractControl;
}

interface ErrorInterface {
  [key: string]: string | boolean | ErrorInterface;
}

@Injectable({
  providedIn: 'root'
})
export class SyncValidationsService {

  errors: DeltaSyncResponse[] = [];

  /**
   * @param leadsToValidate unsync leads data to validate,
   * @param referrorToValidate validate referrors if not empty
   * @returns Promise<DeltaSyncResponse[]> {
   * @author Kiko Garcia & JL Gutierrez
   */
   async leadSyncValidation(moduleId: string, leads: Leads, referrors: ReferrorLeadRequest[]): Promise<DeltaSyncResponse[]> {

    this.errors = [];

    if (!this.hasModuleId(moduleId, 'leadSyncValidation')) {
      return this.errors;
    }

    const leadValidationsFormGroup: FormGroup = ValidationDetailedLeadFormGroup;
    leadValidationsFormGroup.patchValue(leads);

    if (leadValidationsFormGroup.invalid) {
      await this.getValidationErrors(leadValidationsFormGroup.controls, moduleId, MODULE.LEAD);
    }

    // validate referrors
    if (leads.referredByBankPartner === true && referrors.length > 0) {
      referrors.map(async (referror: ReferrorLeadRequest) => {
        const refferorFormGroup: FormGroup = ValidationReferrors;
        refferorFormGroup.patchValue(referror);

        if (refferorFormGroup.invalid) {
          await this.getValidationErrors(refferorFormGroup.controls, moduleId, MODULE.LEAD);
        }
      });
    }

    return this.errors;
  }

  /**
   * @param irpq Collection of data from IRPQ
   * @returns Promise<DeltaSyncResponse[]>
   * @author JL Gutierrez
   */
  async iRPQSyncValidation(irpq: IRPQSyncRequestArray): Promise<DeltaSyncResponse[]> {

    this.errors = [];

    if (!this.hasModuleId(irpq.clientRefId, 'iRPQSyncValidation')) {
      return this.errors;
    }

    const moduleId = irpq.clientRefId;
    const iRPQValidationsFormGroup: FormGroup = IRPQSyncRequestArrayFormValidation;
    iRPQValidationsFormGroup.patchValue(irpq);

    const gI3 = iRPQValidationsFormGroup.get('data').get('questions').get('GI').get('GI3');
    const gi3a7 = gI3.get('GI3_A7');
    const gi300 = gI3.get('GI3_00');

    let gi00IsInvalid = false;

    if (gi3a7.value === true && gi300 && gi300.value.length === 0) {
      gi00IsInvalid = true;
    }

    if (iRPQValidationsFormGroup.invalid) {
      await this.getValidationErrors(iRPQValidationsFormGroup.controls, moduleId, MODULE.IRPQ);
    }

    if ( gi00IsInvalid) {
      this.errors.push(this.formatError(moduleId, MODULE.IRPQ, {GI13: {required: true}}, 'GI3_00'));
    }

    return this.errors;
  }

  /**
   *
   * @param needAnalysis NeedAnalaysisSyncRequest,
   * @returns Promise<DeltaSyncResponse[]>
   * @author Kiko Garcia & JL Gutierrez
   */
  async nASyncValidation(needAnalysis: NeedAnalaysisSyncRequest): Promise<DeltaSyncResponse[]> {
    this.errors = [];

    if (!this.hasModuleId(needAnalysis.clientRefId, 'nASyncValidation')) {
      return this.errors;
    }

    const naValidationFormGroup: FormGroup = NeedAnalysisSyncRequestValidation;
    naValidationFormGroup.patchValue(needAnalysis);

    if (naValidationFormGroup.invalid) {
      await this.getValidationErrors(naValidationFormGroup.controls, needAnalysis.clientRefId, MODULE.NA);
    }

    return this.errors;
  }

  /**
   * @param quotation,
   * @returns Promise<DeltaSyncResponse[]> {
   * @author Kiko Garcia & JL Gutierrez
   */
  async sISyncValidation(quotation: Quotations): Promise<DeltaSyncResponse[]> {

    this.errors = [];

    if (!this.hasModuleId(quotation.clientRefId, 'sISyncValidation')) {
      return this.errors;
    }

    const siValidationFormGroup: FormGroup = QuotationsValidation;
    siValidationFormGroup.patchValue(quotation);

    if (siValidationFormGroup.invalid) {
      await this.getValidationErrors(siValidationFormGroup.controls, quotation.clientRefId, MODULE.SI);
    }

   //console.log('SI', quotation, siValidationFormGroup);

    return this.errors;
  }

  /**
   *
   * @param eappToValidate unsync na data to validate,
   * @returns Promise<DeltaSyncResponse[]>
   * @author Kiko Garcia & JL Gutierrez
   */
  async eAPPSyncValidation(eApp: any): Promise<DeltaSyncResponse[]> {

   //console.log(eApp);

    this.errors = [];

    if (!this.hasModuleId(eApp.clientRefId, 'submissionChecklistValidation')) {
      return this.errors;
    }

    const eappFormGroup = ValidationEappFormGroup;
    eappFormGroup.patchValue(eApp);
    this.getValidationErrors(eappFormGroup.controls, eApp.clientRefId, MODULE.EAPP);

    const beneficiaries = eApp.data.beneficiaries;

    if (beneficiaries && beneficiaries.length > 0) {

      const beneficiariesFormGroup = BeneficiariesValidation;

      for (const beneficiary of beneficiaries) {
        beneficiariesFormGroup.patchValue(beneficiary);
        this.getValidationErrors(beneficiariesFormGroup.controls, eApp.clientRefId, MODULE.EAPP);
      }
    }

    const fundDetails = eApp.data.fundDetails;
    if (fundDetails && fundDetails.length > 0) {
      const fundDetailsFormGroup = FundDetailsValidation;

      for (const fundDetail of fundDetails) {
        fundDetailsFormGroup.patchValue(fundDetail);
        this.getValidationErrors(fundDetailsFormGroup.controls, eApp.clientRefId, MODULE.EAPP);
      }
    }

    return this.errors;
  }

  /**
   * @param checklistRequest
   * @returns Promise<DeltaSyncResponse[]>
   * @author JL Gutierrez
   */
   async submissionChecklistValidation(checklistRequest: CheckListsRequest): Promise<DeltaSyncResponse[]> {

    if (!this.hasModuleId(checklistRequest.clientRefId, 'submissionChecklistValidation')) {
      return;
    }

    const moduleId = checklistRequest.clientRefId;
    const scValidation: FormGroup = SCFormGroup;
    scValidation.patchValue(checklistRequest);
    this.errors = [];

    const isSignatoryIsNull = checklistRequest.data.signatories === null;
    if (!isSignatoryIsNull) {

      for (const signatory of checklistRequest.data.signatories) {

        const signatoriesValidation: FormGroup = signatoriesFormGroup;
        signatoriesValidation.patchValue(signatory);

        this.getValidationErrors(signatoriesValidation.controls, moduleId, MODULE.SUBMISSION_CHECKLIST);
      }
    }

    if (scValidation.invalid) {
      this.getValidationErrors(scValidation.controls, moduleId, MODULE.SUBMISSION_CHECKLIST);
    }

    return this.errors;
  }

  /**
   * Loops in control, calls itself if the current loop has control; collects all controls that are invalid
   * @param controls
   * @param moduleId
   * @param moduleName
   * @author JL Gutierrez
   */
   async getValidationErrors(controls: AbstractControlInterface, moduleId: string, moduleName: MODULE): Promise<void> {

    for (const control in controls) {
      if (controls[control].valid) {
        continue;
      }

      const formData = controls[control];
      const keys = Object.keys(formData);

      if (keys.includes('controls')) {
        const data = Object.entries(formData).filter(k => k[0] === 'controls');
        await this.getValidationErrors(data[0][1], moduleId, moduleName);
        continue;
      }

     //console.log(`control ${control} have an error: `, formData);

      this.errors.push(this.formatError(moduleId, moduleName, formData.errors, control));
    }
  }

  /**
   * check if module.clientRefId / moduleId is included or not
   * @param moduleId
   * @param fnModule
   * @returns returns true if moduleId has value
   */
   hasModuleId(moduleId: string, fnName: string): boolean {
    if (moduleId === null) {
     //console.log(`${fnName} Error: No clientRefId included.`);
      return false;
    }

    return true;
  }

  /**
   * formats the error found.
   * @param moduleId
   * @param moduleName
   * @param errorMessage
   * @returns DeltaSyncResponse
   * @author JL Gutierrez
   */
   formatError(moduleId: string, module: MODULE, errors: ErrorInterface, fieldName: string): DeltaSyncResponse {

    if (moduleId === null) {
     //console.log('moduleId has an error in sync-validation.service.formatError');
      return;
    }

    if (!module) {
     //console.log('moduleName has an error in sync-validation.service.formatError');
      return;
    }

    const erorsObj = Object.keys(errors);
    if (erorsObj.length === 0) {
     //console.log('there\'s no error message available in sync-validation.service.formatError');
      return;
    }

    const error  = erorsObj.map((err: string, index: number) => {
      return this.formatMessageErrors(errors, err, this.getFieldNameError(fieldName, module));
    });

   //console.log(error);

    return {
      moduleId,
      module,
      error,
      documentType: null,
      syncStatus: 619,
      timestamp: Date.now(),
    };
  }

  /**
   * Gets the error label for each validation keys
   * @param fieldName string
   * @param module Module
   * @returns fieldName that is converted to user readable string
   * @author JL Gutierrez
   */
   getFieldNameError(fieldName: string, module: MODULE): string {
    let errorKey: { key: string, label: string };

    switch (module) {
      case MODULE.LEAD:
        errorKey = LEADS_ERROR_MESSAGES.find(k => k.key === fieldName);
        break;

      case MODULE.IRPQ:
        errorKey = IRPQ_ERROR_MESSAGES.find(k => k.key === fieldName);
        break;

      case MODULE.NA:
        errorKey = NA_ERROR_MESSAGES.find(k => k.key === fieldName);
        break;

      case MODULE.SI:
        errorKey = SI_ERROR_MESSAGES.find(k => k.key === fieldName);
        break;

      case MODULE.EAPP:
        errorKey = EAPP_ERROR_MESSAGES.find(k => k.key === fieldName);
        break;

      // SUBMISSION CHECKLIST
      default:
        errorKey = CHECKLIST_ERROR_MESSAGES.find(k => k.key === fieldName);
        break;
    }

    if (Object.keys(errorKey).length > 0) {
      return errorKey.label;
    }

    return `${module}.${fieldName}`;
  }

  /**
   * Converts the error message to be readable by users
   * @param error: string | ErrorInterface
   * @param label: string
   * @returns User readable error messages
   */
  formatMessageErrors(errorsObject: ErrorInterface, error: string, label: string): string {
    switch (error) {
      case 'required':
        return `${label} needs a value.`;

      case 'email':
        return `${label} needs a valid email address.`;

      case 'maxlength':
      case 'minlength':

        const requiredMaxLength = errorsObject[error]['requiredLength'];
        const minORMaxLength = error === 'maxlength' ? 'maximum' : 'minimum';
        return `${label} requires ${minORMaxLength} of ${requiredMaxLength} length of letter(s).`;

      case 'max':
      case 'min':
        const requiredMax = errorsObject[error]['max'];
        const minOrMax = error === 'max' ? 'higher' : 'lower';
        return `${label} requires a number not ${minOrMax} than ${requiredMax}.`;

      case 'pattern':

        const regexpKeys = Object.keys(REGEXP);
        const requiredPattern = errorsObject[error]['requiredPattern'];
        const patternError = regexpKeys.find((patternName: string) => {
         //console.log(REGEXP[patternName] + '===' + requiredPattern);
          return REGEXP[patternName] == requiredPattern;
        });

        return `${label}'s pattern is not suitable for ${patternError.toLowerCase()} pattern`;

      case 'whitespace':
        return `${label} needs no whitespace.`;

      default:
        return `${label} has an invalid value`;
    }
  }
}
