import { BaseCountries } from '@models/account-manager/countries';
import { BaseOccupation } from '@models/account-manager/occupation';
import { ColSpecs } from '@models/specs/col-specs';
import { FormGroup } from '@angular/forms';
import { Range } from '@models/specs/range-specs';
import { RowGeneratorSpecs } from './row-generator-specs';

interface OptionsInterface {
  key?: any;
  code?: string;
  value?: string;
  name?: string;
  size?: number;
  img?: string;
  maxHospLimit?: string;
}

export interface FieldSpecs extends ColSpecs {
    attName: string;
    fieldName?: string;
    setFieldName?: boolean;
    type: string;
    checked?: boolean;
    attMaxLength?: string | number;
    options?: OptionsInterface[];
    isDisabled?: boolean;
    conditionalFunction?: any;
    innerConditionalFunction?: any;
    isAddress?: boolean;
    isSegmentOption?: boolean;
    formGroup?: FormGroup;
    isRequired?: boolean;
    interface?: string;
    allowEmpty?: boolean;
    isQuestionnaire?: true;
    setInputLabel?: boolean;
    hasStepperButton?: boolean;
    countries?: Array<BaseCountries>;
    states?: Array<BaseCountries>;
    city?: Array<BaseCountries>;
    zipcode?: Array<BaseCountries>;
    occupations?: Array<BaseOccupation>;
    occupationGroup?: Array<BaseOccupation>;
    vesselType?: Array<BaseOccupation>;
    branchName?: { branchName: string }[];
    branchCode?: Array<{}>;
    isVisible?: boolean;
    debounce?: number;
    range?: Range;
    idType?: { option?: any[], value?: string, idType?: any, exp_date?: boolean, dob?: boolean }[];
    onBlur?: any;
    placeholder?: string;
    keyUpFunction?: any;
    inputmode?: string;
    icon?: string;
    canClearValue?: boolean;
    maxDate?: string;
    isAgeField?: boolean;
    isAge21Max?: boolean;
    selectedText?: string;
    isMultiple?: boolean;
    subFieldName?: string;
    isExpiredIDField?: boolean;
    dateFormat?: string;
    currency?: string;
    showCurrency?: boolean;
    searchItems?: { searchItems: string }[];
    dateFormatOutput?: string;
    rows?: Array<RowGeneratorSpecs>;
    readOnlySpecs?: {
        type: 'date' | 'currency' | 'gender' | 'civilStatus' | 'relationship' |
        'textarea' |
        'idType' | 'armyBranch' | 'armyRank' | 'aircraftPilot' | 'aircraftCrew' |
        'flightExp' | 'airlineJob' | 'fundSource' | 'mailingAddress' | 'vesselType' |
        'fishingArea' | 'boolean' | 'yesNo' | 'country' | 'paymentScheme' | 'premiumDefaultOption' |
        'settlementOption' | 'payoutOption' | 'bankName' | 'currencyCode' | 'accountType' | 'default' | 'nationality',
        listOfKeyValues?: any
    };
    countryList?: { countryCode: string, name: string }[];
    showInfo?: boolean;
    showToggleValue?: boolean;
    infoFunction?: any;
    showErrMsgOnly?: boolean;
    class?: string;
    isNmedPbrTableField?: boolean;
    isNmedPbrTableFieldOdd?: boolean;
    textAreaRows?: string;
}

export const isFieldSpecs = (obj: any): obj is FieldSpecs => {
    return (obj as FieldSpecs).type !== undefined;
}