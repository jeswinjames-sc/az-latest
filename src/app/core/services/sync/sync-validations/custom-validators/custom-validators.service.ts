import { Injectable } from '@angular/core';
import { AbstractControl, Form, FormControl, ValidatorFn, Validators } from '@angular/forms';
import { CATEGORY_MAPPER } from '@services/sync-service/life-priority-ws';
import { DIVIDEND_OPTION_WS } from '@utils/constants/dividend-option-ws';
import { NEED_ANALYSIS_TYPE } from '@utils/constants/need-analysis-types';
import { PLANS } from '@utils/constants/options/product-info/plans';
import { UNDERWRITING_APPROACH } from '@utils/constants/options/product-info/underwriting-approach';
import { CURRENCY } from '@utils/constants/options/segment/currency';
import { DEATH_BENEFIT } from '@utils/constants/options/segment/death-benefit';
import { GENDER } from '@utils/constants/options/segment/gender';
import { CIVIL_STATUS } from '@utils/constants/options/select/civil-status';
import { LEAD_STATUS } from '@utils/constants/options/select/lead-status';
import moment from 'moment';
import * as _ from 'lodash';
import { ACCOUNT_TYPE, EAPP_RELATIONSHIP, PAYOUT_OPTION, PREMIUM_DEFAULT_OPTION } from '@utils/constants/options/segment/e-app-options';
import { FUNDS } from '@utils/constants/options/product-info/funds';
import { toUpper } from 'lodash';

interface SyncValidationInterface {
  [key: string]: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorsService {

  /**
   * Doesn't accept white spaces as valid value
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
  noWhitespaceValidator(control: FormControl): SyncValidationInterface {
    const isWhitespace = _.trim(control.value || '').length === 0;
    return !isWhitespace ? null : { whitespace: true };
  }

  /**
   * Expects control value to be of boolean type
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia & JL Gutierrez
   */
  booleanOnly(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    let isBoolean = false;

    if (typeof control.value === 'string') {
      isBoolean = control.value.toLowerCase() === 'true' || control.value.toLowerCase() === 'false';
    }

    const isValid = _.isBoolean(_.get(control, 'value')) || isBoolean;
    return isValid ? null : { invalidBoolean: true };
  }

  /**
   * Expects control value to be 'true' or 'false' (string type)
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
  trueOrFalseValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const isValid = (_.toString(_.get(control, 'value')) == 'true');
    return isValid ? null : { invalidBoolean: true };
  }

  /**
   * Expects control value to be '1' or '0' (string type)
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
  oneOrZeroValidator(control: FormControl): SyncValidationInterface {
    const isValid = (_.toString(_.get(control, 'value')) == '1') || (_.toString(_.get(control, 'value')) == '0');
    return isValid ? null : { invalidBoolean: true };
  }

  /**
   * Expects control value to be present in acceptedValues (string type) or null
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia & JL Gutierrez
   */
  leadStatusValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const acceptedValues = _.map(LEAD_STATUS, val => _.get(val, 'key'));
    const isValid = acceptedValues.includes(control.value);

    return isValid ? null : { invalidLeadStatus: true };
  }

  /**
   * Expects control value to be present in acceptedValues (string type) or null
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia & JL Gutierrez
   */
  genderValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const acceptedValues = _.map(GENDER, val => _.get(val, 'key'));
    return acceptedValues.includes(control.value) ? null : { invalidGender: true };
  }

  /**
   * Expects control value to be present in acceptedValues (string type) or null
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia & JL Gutierrez
   */
  civilStatusValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }


    const civilStatus = _.clone(CIVIL_STATUS);
    civilStatus.push({
      key: 'N',
      value: 'Not disclosed'
    });

    const acceptedValues = _.map(civilStatus, val => _.get(val, 'key'));
    return acceptedValues.includes(control.value) ? null : { invalidCivilStatus: true };
  }

  /**
   * Expects control value to be present in acceptedValues (string type)
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
  needTypeValidator(control: FormControl): SyncValidationInterface {
    const acceptedValues = _.map(NEED_ANALYSIS_TYPE, el => _.get(el, 'CODE'));
    return acceptedValues.includes(control.value) ? null : { invalidNeedtype: true };
  }

  /**
   * Expects control value to be present in acceptedValues (string type)
   * @param control
   * @returns null if valid | { invalidGoalType: true } if invalid
   * @author Kiko Garcia
   */
  goalTypeValidator(needType: string): ValidatorFn  {
    let acceptedValues = [];

    switch (needType) {
      case(NEED_ANALYSIS_TYPE.EDUCATION.CODE):
        acceptedValues = _.map(NEED_ANALYSIS_TYPE.EDUCATION.GOAL_TYPES, el => el);
        break;

      case(NEED_ANALYSIS_TYPE.ESTATE_PLANNING.CODE):
        acceptedValues = _.map(NEED_ANALYSIS_TYPE.ESTATE_PLANNING.GOAL_TYPES, el => el);
        break;

      case(NEED_ANALYSIS_TYPE.HEALTH.CODE):
        acceptedValues = _.map(NEED_ANALYSIS_TYPE.HEALTH.GOAL_TYPES, el => el);
        break;

      case(NEED_ANALYSIS_TYPE.PROTECTION.CODE):
        acceptedValues = _.map(NEED_ANALYSIS_TYPE.PROTECTION.GOAL_TYPES, el => el);
        break;

      case(NEED_ANALYSIS_TYPE.RETIREMENT.CODE):
        acceptedValues = _.map(NEED_ANALYSIS_TYPE.RETIREMENT.GOAL_TYPES, el => el);
        break;

      case(NEED_ANALYSIS_TYPE.SAVINGS.CODE):
        acceptedValues = _.map(NEED_ANALYSIS_TYPE.SAVINGS.GOAL_TYPES, el => el);
        break;

      default:
        console.log('Invalid needType or needType doesn\'t have a match. needType: ', needType);
        break;
    }

    return (control: FormControl) => {
      const isValid = acceptedValues.includes(control);
      return isValid ? null : { invalidGoalType: true };
    };
  }

  /**
   * Expects control value to be present in acceptedValues (string type)
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
  fnaStatusValidator(control: FormControl): SyncValidationInterface {
    const acceptedValues = ['ATTACHED', 'COMPLETED', 'EXPIRED', 'IN-PROGRESS', 'SIGNED', 'SUBMITTED'];
    return acceptedValues.includes(control.value) ? null : { invalidFnaStatus: true };
  }

  /**
   * Expects control keys to be present in acceptedKeys; control value maxLength < 22
   * @param control
   * @returns null if valid | { invalidNeedsVariables: true } if invalid
   * @author Kiko Garcia
   */
  needsVariablesValidator(control: FormControl): SyncValidationInterface {
    const controlValue = _.get(control, 'value');
    const acceptedKeys = ['APR', 'APR1', 'APR2', 'APR3', 'APR4', 'BD', 'BSA', 'CAGA', 'CEA1', 'CEA2', 'CEA3', 'CEA4', 'CMGA', 'EST0',
      'EST1', 'EST2', 'EST3', 'FG1', 'FG2', 'FG3', 'GA', 'GA1', 'GA2', 'GA3', 'GA4', 'IA', 'IR', 'RCPROD', 'RETE', 'RETNEA', 'SA', 'SAV',
      'SAV1', 'SAV2', 'SAV3', 'SD', 'SG1', 'SG2', 'SG3', 'TANA1', 'TANA2', 'TANA3', 'TANN1', 'TANN2', 'TANN3', 'TF1', 'TF2', 'TF3', 'TF4',
      'TR'];

    // check if there are invalid keys
    const actualKeys = _.keys(controlValue);
    const invalidKeys = [];

    actualKeys.forEach(key => {
      if (!acceptedKeys.includes(key)) {
        invalidKeys.push(key);
      }
    });

    // check values
    const invalidValues = [];
    const maxChars = 22;

    for (const key in controlValue) {
      if (_.size(_.toString(controlValue[key])) > maxChars) {
        invalidValues.push({ key: controlValue[key] });
      }
    }

    const isValid = !_.size(invalidKeys) && !_.size(invalidValues);

    return isValid ? null : { invalidNeedsVariables: true };
  }

  /**
   * Validates data.status value in IRPQ Response
   * @param control
   * @returns Null | { invalidIrpqStatus: true }
   * @author JL Gutierrez
   */
  irpqStatusValidator(control: FormControl): SyncValidationInterface {

    const acceptedValues = ['ATTACHED', 'COMPLETED', 'EXPIRED', 'IN-PROGRESS', 'SIGNED', 'SUBMITTED'];
    return acceptedValues.includes(control.value) ? null : { invalidIrpqStatus: true };
  }

  /**
   * Expects control value to be present in acceptedValues or null
   * @param control
   * @returns null if valid | { invalidbaseRatingCode: true } if invalid
   * @author Kiko Garcia
   */
  baseRatingCodeValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const acceptedValues = ['TG', 'TH', 'TI', 'TJ', 'TK', 'TL', 'TM', 'TN', 'TO', 'TP', 'STD', 'TA', 'TB', 'TC', 'TD', 'TE', 'TF'];
    return acceptedValues.includes(control.value) ? null : { invalidbaseRatingCode: true };
  }

  /**
   * Expects control value to be present in acceptedValues or null
   * @param control
   * @returns null if valid | { invalidInputOption: true } if invalid
   * @author Kiko Garcia
   */
   inputOptionValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const acceptedValues = ['SUMASSURED', 'PREMIUM'];

    return acceptedValues.includes(control.value) ? null : { invalidInputOption: true };
  }

  /**
   * Expects control value to be present in acceptedValues
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
  currencyValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const acceptedValues = _.map(CURRENCY, el => _.get(el, 'key'));
    return acceptedValues.includes(control.value) ? null : { invalidCurrency: true };
  }

  /**
   * Expects control value to be present in acceptedValues or null
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
  deathBenefitValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const acceptedValues = _.map(DEATH_BENEFIT, el => _.get(el, 'key'));
    return acceptedValues.includes(control.value) ? null : { invalidDeathBenefit: true };
  }

  /**
   * Expects control value to be present in acceptedValues or null
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
  dividendOptionValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const acceptedValues = _.map(DIVIDEND_OPTION_WS, el => _.get(el, 'CODE_WS'));
    const isValid = (acceptedValues.includes(_.get(control, 'value')) || _.get(control, 'value') == null);

    return isValid ? null : { invalidDividendOption: true };
  }

  /**
   * Expects control value to be present in acceptedValues
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
  lifePriorityValidator(control: FormControl): SyncValidationInterface {
    const acceptedValues = _.keys(CATEGORY_MAPPER);
    return acceptedValues.includes(control.value) ? null : { invalidLifePriority: true };
  }

  /**
   * Expects control value to be present in acceptedValues or {}
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
  personalObjectivesValidator(control: FormControl): SyncValidationInterface {
    const acceptedValues = [
      'AZGRW', 'AZGRWPA', 'AZPK', 'AZPKPA', 'AZWIZ10', 'AZWIZ5', 'AZWIZPA17', 'FIUL10', 'FIUL5', 'FIUL7', 'FLXPA_IDB', 'FLXPA_LDB',
      'FLX_IDB', 'FLX_LDB', 'PRO10_IDB', 'PRO10_LDB', 'RET10_LDB'];

    return control.value || acceptedValues.includes(control.value) ||
      control.value === {} ? null : { invalidPersonalObjectives: true };
  }

  /**
   * Expects control value to be present in acceptedValues
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
   planCodeValidator(control: FormControl): SyncValidationInterface {
    const acceptedValues = _.keys(PLANS);
    return acceptedValues.includes(control.value) ? null : { invalidPersonalObjectives: true };
  }

  /**
   * Expects control value to be present in acceptedValues
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
   siStatusValidator(control: FormControl): SyncValidationInterface {
    const acceptedValues = ['ATTACHED', 'COMPLETED', 'EXPIRED', 'IN-PROGRESS', 'SIGNED', 'SUBMITTED'];
    return acceptedValues.includes(control.value) ? null : { invalidSiStatus: true };
  }

  /**
   * Expects control value to be present in acceptedValues
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
   underwritingApproachValidator(control: FormControl): SyncValidationInterface {
    const acceptedValues = _.map(UNDERWRITING_APPROACH, el => el);
    return acceptedValues.includes(control.value) ? null : { invalidUnderwritingApproach: true };
  }

  /**
   * Expects control value to be a date that is earlier than the current date
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
   earlierThanTodayValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const today = new Date();
    const isValid = moment(_.get(control, 'value')).isBefore(today);

    return isValid ? null : { invalidDate: true };
  }

  /**
   * Validates data.status value in Submission Checklist
   * @param control
   * @returns SyncValidationInterface
   * @author JL Gutierrez
   */
  submissionChecklistStatusValidator(control: FormControl): SyncValidationInterface {
    const acceptedValues = ['SIGNED', 'SUBMITTED', 'POST SUBMISSION STATUS', 'UNDERWRITING', 'FOR UNDERWRITING', 'ISSUANCE',
      'FOR ISSUANCE', 'EXPIRED', 'ENCODED'];
    return acceptedValues.includes(control.value) ? null : { invalidSubmissionChecklistStatus: true };
  }

  /**
   * Expects control value to be present in acceptedValues
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
   paymentMethodValidator(control: FormControl): SyncValidationInterface {
    const acceptedValues = ['A', 'R', 'C', 'P', 'G', 'S'];
    return acceptedValues.includes(control.value) ? null : { invalidPaymentMethod: true };
  }

  /**
   * Expects control value to be present in acceptedValues
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
   premiumDefaultOptionValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const acceptedValues = _.map(PREMIUM_DEFAULT_OPTION, e => e.key );
    return acceptedValues.includes(control.value) ? null : { invalidPremiumDefaultOptionValidator: true };
  }

  /**
   * Expects control value to be present in acceptedValues
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
   relationTypeValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const acceptedValues = _.map(EAPP_RELATIONSHIP, e => e.key );
    return acceptedValues.includes(control.value) ? null : { invalidRelationType: true };
  }

  /**
   * Expects control value to be present in acceptedValues
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
   jointAccountTypeValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const acceptedValues = _.map(ACCOUNT_TYPE, e => e.key );
    return acceptedValues.includes(control.value) ? null : { invalidJointAccountType: true };
  }

  /**
   * Expects control value to be present in acceptedValues
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
   methodValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const acceptedValues = _.map(PAYOUT_OPTION, e => e.key );
    return acceptedValues.includes(control.value) ? null : { invalidMethod: true };
  }

  /**
   * Expects control value to be present in acceptedValues
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
   priorityLevelValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const acceptedValues = ['C', 'P'];
    return acceptedValues.includes(control.value.toUpperCase()) ? null : { invalidPriorityLevel: true };
  }

  /**
   * Expects control value to be present in acceptedValues
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
   sourceOfIncomeValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const acceptedValues = ['1', '2', '3', '4', '5', '6'];
    return acceptedValues.includes(control.value.toString()) ? null : { invalidSourceOfIncome: true };
  }

  /**
   * Expects control value to be present in acceptedValues
   * @param control
   * @returns SyncValidationInterface
   * @author Kiko Garcia
   */
   fundDetailValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const funds = _.clone(FUNDS);
    _.assign(funds, {FIULF: 'FIUL Fund - Tranche YYYYMMDD'});
    const acceptedValues = _.keys(funds);

    return acceptedValues.includes(control.value) ? null : { invalidFundDetail: true };
  }

  /**
   * Address type validator
   * @param control
   * @returns SyncValidationInterface
   * @author JL Gutierrez
   */
  addressTypeValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const acceptedValues = ['WORK', 'HOME'];
    return acceptedValues.includes(control.value) ? null : { invalidAddressType: true };
  }

  /**
   * Address reference validator
   * @param control
   * @returns SyncValidationInterface
   * @author JL Gutierrez
   */
  addressReferenceValidator(control: FormControl): SyncValidationInterface {
    const acceptedValues = ['NEW', 'OWNER', 'INSURED'];
    return acceptedValues.includes(control.value) ? null : { invalidAddressReference: true };
  }

  eappStatusValidator(control: FormControl): SyncValidationInterface {
    const acceptedValues = ['ATTACHED', 'COMPLETED', 'EXPIRED', 'IN-PROGRESS', 'SIGNED', 'SUBMITTED'];
    return acceptedValues.includes(control.value) ? null : { invalidEappStatus: true };
  }


  /**Credit Card Expiry validator
   * @param control
   * @returns SyncValidationInterface
   * @author Juniel Galarce
   */

  ccExpiryValidator(control: FormControl): SyncValidationInterface {

    if (!control.value) {
      return null;
    }

    const today = moment(new Date()).format('MM/DD/YY');
    const selectDate = moment(_.get(control, 'value')).format('MM/DD/YY');
    const isInvalid = moment(selectDate).isSameOrAfter(today);

    return isInvalid ? null : { invalidDate: true };
  }

   paymentFrequencyValidator(control: FormControl): SyncValidationInterface {
    const acceptedValues = ['A', 'M', 'Q', 'S', 'I'];
    return acceptedValues.includes(control.value) ? null : { invalidPaymentFrequency: true };
  }
}