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
import { QuotationsValidation, SIQuotationsValidation, BMIValidation } from '@form-group/sales-illustration/sales-illustration-form-group';
import { IRPQSyncRequestArrayFormValidation } from '@form-group/irpq/irpq-form-group';
import { SCFormGroup, signatoriesFormGroup } from '@form-group/submission-checklist/submission-checklist-list-form-group';
import { ValidationEappFormGroup, BeneficiariesValidation, FundDetailsValidation, ApplicantOwnerFormGroup } from '@form-group/e-app/applicant-owner-form-group';

import { MODULE } from '@utils/enums/module';
import { DeltaSyncResponse } from 'app/core/models/delta-sync-response';
import {
  CHECKLIST_ERROR_MESSAGES,
  EAPP_ERROR_MESSAGES,
  EAPP_ERROR_MESSAGES_EXCLUSION,
  IRPQ_ERROR_MESSAGES,
  LEADS_ERROR_MESSAGES,
  NA_ERROR_MESSAGES,
  SI_ERROR_MESSAGES } from './sync-error-message';
import { REGEXP } from '@utils/constants/regexp/regexp';
import { PolicyInfoFormGroup } from '@form-group/e-app/policy-info-form-group';
import { NonMedFormGroup } from '@form-group/e-app/non-med-form-group';
import { ContractHolder } from '@models/sales-illustration/sync/contract-holder';

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
   async leadSyncValidation(moduleId: string, leads: Leads): Promise<DeltaSyncResponse[]> {

    this.errors = [];

    if (!this.hasModuleId(moduleId, 'leadSyncValidation')) {
      return this.errors;
    }

    const leadValidationsFormGroup: FormGroup = ValidationDetailedLeadFormGroup;
    leadValidationsFormGroup.patchValue(leads);

    if (leadValidationsFormGroup.invalid) {
      await this.getValidationErrors(leadValidationsFormGroup.controls, moduleId, MODULE.LEAD);
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

    const isGI1Valid = this.isFormControlsHaveTrueValue(iRPQValidationsFormGroup.get('data').get('questions').get('GI').get('GI1')['controls']);
    if (!isGI1Valid) {
      this.errors.push(this.formatError(moduleId, MODULE.IRPQ, {GI1: {required: true}}, 'GI1'));
    }

    const isGI2Valid = this.isFormControlsHaveTrueValue(iRPQValidationsFormGroup.get('data').get('questions').get('GI').get('GI2')['controls']);
    if (!isGI2Valid) {
      this.errors.push(this.formatError(moduleId, MODULE.IRPQ, {GI2: {required: true}}, 'GI2'));
    }

    const isGI3Valid = this.isFormControlsHaveTrueValue(iRPQValidationsFormGroup.get('data').get('questions').get('GI').get('GI3')['controls']);
    if (!isGI3Valid) {
      this.errors.push(this.formatError(moduleId, MODULE.IRPQ, {GI3: {required: true}}, 'GI3'));
    }

    const isPI1Valid = this.isFormControlsHaveTrueValue(iRPQValidationsFormGroup.get('data').get('questions').get('PI').get('PI1')['controls']);
    if (!isPI1Valid) {
      this.errors.push(this.formatError(moduleId, MODULE.IRPQ, {PI1: {required: true}}, 'PI1'));
    }

    const isPI2Valid = this.isFormControlsHaveTrueValue(iRPQValidationsFormGroup.get('data').get('questions').get('PI').get('PI2')['controls']);
    if (!isPI2Valid) {
      this.errors.push(this.formatError(moduleId, MODULE.IRPQ, {PI2: {required: true}}, 'PI2'));
    }

    const isPI4Valid = this.isFormControlsHaveTrueValue(iRPQValidationsFormGroup.get('data').get('questions').get('PI').get('PI4')['controls']);
    if (!isPI4Valid) {
      this.errors.push(this.formatError(moduleId, MODULE.IRPQ, {PI4: {required: true}}, 'PI4'));
    }

    const isPI5Valid = this.isFormControlsHaveTrueValue(iRPQValidationsFormGroup.get('data').get('questions').get('PI').get('PI5')['controls']);
    if (!isPI5Valid) {
      this.errors.push(this.formatError(moduleId, MODULE.IRPQ, {PI5: {required: true}}, 'PI5'));
    }

    const isPI6Valid = this.isFormControlsHaveTrueValue(iRPQValidationsFormGroup.get('data').get('questions').get('PI').get('PI6')['controls']);
    if (!isPI6Valid) {
      this.errors.push(this.formatError(moduleId, MODULE.IRPQ, {PI6: {required: true}}, 'PI6'));
    }

    const isPI7Valid = this.isFormControlsHaveTrueValue(iRPQValidationsFormGroup.get('data').get('questions').get('PI').get('PI7')['controls']);
    if (!isPI7Valid) {
      this.errors.push(this.formatError(moduleId, MODULE.IRPQ, {PI7: {required: true}}, 'PI7'));
    }

    const isPI8Valid = this.isFormControlsHaveTrueValue(iRPQValidationsFormGroup.get('data').get('questions').get('PI').get('PI8')['controls']);
    if (!isPI8Valid) {
      this.errors.push(this.formatError(moduleId, MODULE.IRPQ, {PI8: {required: true}}, 'PI8'));
    }

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
   * Determines if control has a true value
   * @param controls
   * @returns true if form controls have true value
   */
  isFormControlsHaveTrueValue(controls: AbstractControl): boolean {
    //console.log(controls);
    for (const control in controls) {
      //console.log(controls[control].value)
      if (controls[control].value === true) {
        return true;
      }
    }
    return false;
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

    const needsVariables = needAnalysis.data.needsVariables;
    if (needAnalysis.data.goalType == 'HOU') {
      // is required
      if (!needsVariables.GA || needsVariables.GA.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {GA: {required: true}}, 'GA'));
      }
      if (!needsVariables.SA || needsVariables.SA.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {SA: {required: true}}, 'SA'));
      }

      if (!needsVariables.SD || needsVariables.SD.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {HOUSD: {required: true}}, 'HOUSD'));
      }
    }

    if (needAnalysis.data.goalType == 'INCREP') {
      // is required
      if (!needsVariables.CMGA || needsVariables.CMGA.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {INCREPCMGA: {required: true}}, 'INCREPCMGA'));
      }
      if (!needsVariables.BD || needsVariables.BD.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {INCREPBD: {required: true}}, 'INCREPBD'));
      }

      if (!needsVariables.SA || needsVariables.SA.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {SA: {required: true}}, 'SA'));
      }
    }

    if (needAnalysis.data.goalType == 'HTHFND') {
      if (!needsVariables.GA || needsVariables.GA.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {HTHFNDGA: {required: true}}, 'HTHFNDGA'));
      }
      if (!needsVariables.SA || needsVariables.SA.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {SA: {required: true}}, 'SA'));
      }
    }

    if (needAnalysis.data.goalType == 'PHUNI') {
      if (!needsVariables.IA || needsVariables.IA.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {PHUNIIA: {required: true}}, 'PHUNIIA'));
      }

      if (!needsVariables.CAGA || needsVariables.CAGA.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {PHUNICAGA: {required: true}}, 'PHUNICAGA'));
      }

      if (!needsVariables.SA || needsVariables.SA.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {SA: {required: true}}, 'SA'));
      }
    }


    if (needAnalysis.data.goalType == 'RETFND') {
      if (!needsVariables.IA || needsVariables.IA.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {RETFNDIA: {required: true}}, 'RETFNDIA'));
      }

      if (!needsVariables.CMGA || needsVariables.CMGA.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {RETFNDCMGA: {required: true}}, 'RETFNDCMGA'));
      }

      if (!needsVariables.BSA || needsVariables.BSA.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {RETFNDBSA: {required: true}}, 'RETFNDBSA'));
      }

      if (!needsVariables.BD || needsVariables.BD.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {RETFNDBD: {required: true}}, 'RETFNDBD'));
      }

      if (!needsVariables.SA || needsVariables.SA.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {SA: {required: true}}, 'SA'));
      }
    }

    if (needAnalysis.data.goalType == 'ESTPRO') {
      if (!needsVariables.GA1 || needsVariables.GA1.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {ESTPROGA1: {required: true}}, 'ESTPROGA1'));
      }

      if (!needsVariables.GA2 || needsVariables.GA2.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {ESTPROGA2: {required: true}}, 'ESTPROGA2'));
      }

      if (!needsVariables.GA3 || needsVariables.GA3.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {ESTPROGA3: {required: true}}, 'ESTPROGA3'));
      }

      if (!needsVariables.GA4 || needsVariables.GA4.length === 0) {
        this.errors.push(this.formatError(needAnalysis.clientRefId, MODULE.NA, {ESTPROGA4: {required: true}}, 'ESTPROGA4'));
      }
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
  async sISyncValidation(quotation: Quotations, isNaSync: boolean, product: string): Promise<DeltaSyncResponse[]> {
    this.errors = [];
    const eazyHealthCode = 'EAZY_HEALTH';

    if (!this.hasModuleId(quotation.clientRefId, 'sISyncValidation')) {
      return this.errors;
    }
    
    const siValidationFormGroup: FormGroup = isNaSync ? SIQuotationsValidation : QuotationsValidation;
    siValidationFormGroup.patchValue(quotation);

    if(product == eazyHealthCode || product.includes(eazyHealthCode)){
      const bmiValidationFormGroup: FormGroup = BMIValidation;
      const contractHolder: ContractHolder = quotation.data.contractHolder;
      bmiValidationFormGroup.patchValue({ 
        bmi: contractHolder.bmi,
        height: contractHolder.height,
        heightUnit: contractHolder.heightUnit,
        weight: contractHolder.weight,
        weightUnit: contractHolder.weightUnit
      })

      if(bmiValidationFormGroup.invalid) {
        await this.getValidationErrors(bmiValidationFormGroup.controls, quotation.clientRefId, MODULE.SI);
      }
    }
   
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

    const eappApplicantOwnerFormGroup = ApplicantOwnerFormGroup;
    eappApplicantOwnerFormGroup.patchValue(eApp);
    this.getValidationErrors(eappApplicantOwnerFormGroup.controls, eApp.clientRefId, MODULE.EAPP);

    const eappPolicyInfoFormGroup = PolicyInfoFormGroup;
    eappPolicyInfoFormGroup.patchValue(eApp);
    this.getValidationErrors(eappPolicyInfoFormGroup.controls, eApp.clientRefId, MODULE.EAPP);

    const eappNonMedFormGroup = NonMedFormGroup;
    eappPolicyInfoFormGroup.patchValue(eApp);
    this.getValidationErrors(eappNonMedFormGroup.controls, eApp.clientRefId, MODULE.EAPP);

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

      if (moduleName === MODULE.EAPP) {
        if(EAPP_ERROR_MESSAGES_EXCLUSION.find(j => j.key === control)) {
          continue;
        }

        if(!EAPP_ERROR_MESSAGES.find(k => k.key === control)) {
          continue;
        }
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

    const fieldNameError = this.getFieldNameError(fieldName, module);
    const errorMsg  = erorsObj.map((err: string, index: number) => {
      return this.formatMessageErrors(errors, err, fieldNameError);
    });

    let error: any;
    if(typeof errorMsg[0] == 'string'){
      error = [{
        'message': errorMsg[0].toString(),
        'field': fieldNameError ? fieldNameError : fieldName,
        'value': 'N/A'
      }]
    } else {
      error = errorMsg;
    }
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
