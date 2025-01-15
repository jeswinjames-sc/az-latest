import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { GENERAL_INFO } from '@utils/constants/options/select/irpq/create-edit-irpq/general-info';
import { GeneralInfoFormGroup } from '@utils/constants/form/form-groups/irpq/general-info-form-group';
import { GENERAL_ASSETS } from '@utils/constants/options/radio/irpq/general-info';

export const PageTitleSpecs: ColumnGeneratorSpecs = {
    template: '<h3>Investor Risk Profile Questionnaire</h3>'
}

export const PageDetailsSpecs: ColumnGeneratorSpecs = {
    template: `<p class='general-desc'>This questionnaire helps you determine your personal investment style that goes
    along with your protection needs. There are no right or wrong answers. It measures your investment time frame,
    financial situation, priorities, and goals. This will translate your needs into an asset allocation designed to
    reach your financial goals over the long term. Please accomplish this together with your Allianz PNB Life’s Intermediary
     who will answer any question you have and help you choose the appropriate investment to meet your financial needs.</p>
     <p class='general-desc'>As your personal circumstances change, we recommend that you repeat this on a yearly basis.</p>`
}

export const NetWorthSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'approxNetWorth',
        fieldName: 'Approximate Networth',
        type: 'select',
        options: GENERAL_INFO.NET_WORTH,
        interface: 'popover',
        setFieldName: true,
        formGroup: GeneralInfoFormGroup,
        isRequired: true
    },
    size: 4
}

export const AnnualIncomeSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'approxAnnualIncome',
        fieldName: 'Approximate Annual Income',
        type: 'select',
        options: GENERAL_INFO.ANNUAL_INCOME,
        interface: 'popover',
        setFieldName: true,
        formGroup: GeneralInfoFormGroup,
        isRequired: true
    },
    size: 4
}

export const ImportantObjSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'mostImportantObjective',
        fieldName: 'Most Important Objective',
        type: 'select',
        options: GENERAL_INFO.IMPORTANT_OBJ,
        interface: 'popover',
        setFieldName: true,
        formGroup: GeneralInfoFormGroup,
        isRequired: true
    },
    size: 4
}

export const ImportantObjOthersSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'mostImportantObjectiveOthers',
        fieldName: 'Most Important Objective',
        type: 'text',
        setFieldName: true,
        formGroup: GeneralInfoFormGroup,
        attMaxLength: 20
    },
    size: 4,
    isHidden: true
}

export const PleaseSelectSpecs: ColumnGeneratorSpecs = {
    template: '<b>Please Select All that Apply</b>',
    size: 5
}

export const CurrentlyHaveSpecs: ColumnGeneratorSpecs = {
    template: '<b>I Currently Have</b>',
    size: 3
}

export const UsedTohaveSpecs: ColumnGeneratorSpecs = {
    template: '<b>I Used to Have</b>',
    size: 3
}

export const LifeInsuranceSpecs: ColumnGeneratorSpecs = {
    class: 'align-middle',
    text: 'Life Insurance or Pre Need Plan',
    size: 5
}

export const LifeInsuranceRadioSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'hasInsurance',
        type: 'radio',
        setFieldName: false,
        options: GENERAL_ASSETS.LIFE_INSURANCE,
        formGroup: GeneralInfoFormGroup,
        allowEmpty: true
    },
    size: 6
}

export const CorporateBondsSpecs: ColumnGeneratorSpecs = {
    class: 'align-middle',
    text: 'Corporate Bonds',
    size: 5
}

export const CorporateBondsRadioSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'hasCorpoBond',
        type: 'radio',
        setFieldName: false,
        options: GENERAL_ASSETS.CORPORATE_BONDS,
        formGroup: GeneralInfoFormGroup,
        allowEmpty: true
    },
    size: 6
}

export const TimeDepositeSpecs: ColumnGeneratorSpecs = {
    class: 'align-middle',
    text: 'Time Deposit (Local/ Foreign Currency)',
    size: 5
}

export const TimeDepositeRadioSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'hasTimeDeposit',
        type: 'radio',
        setFieldName: false,
        options: GENERAL_ASSETS.TIME_DEPOSIT,
        formGroup: GeneralInfoFormGroup,
        allowEmpty: true
    },
    size: 6
}

export const DerivativesSpecs: ColumnGeneratorSpecs = {
    class: 'align-middle',
    text: 'Derivatives (Commodities/Futures/Options)',
    size: 5
}

export const DerivativesRadioSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'hasDerivatives',
        type: 'radio',
        setFieldName: false,
        options: GENERAL_ASSETS.DERIVATES,
        formGroup: GeneralInfoFormGroup,
        allowEmpty: true
    },
    size: 6
}

export const MutualFundSpecs: ColumnGeneratorSpecs = {
    class: 'align-middle',
    text: 'Mutual Fund / Trust Fund',
    size: 5
}

export const MutualFundRadioSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'hasMutualFund',
        type: 'radio',
        setFieldName: false,
        options: GENERAL_ASSETS.MUTUAL_FUND,
        formGroup: GeneralInfoFormGroup,
        allowEmpty: true
    },
    size: 6
}

export const RealEstateSpecs: ColumnGeneratorSpecs = {
    class: 'align-middle',
    text: 'Real Estate',
    size: 5
}

export const RealEstateRadioSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'hasRealEstate',
        type: 'radio',
        setFieldName: false,
        options: GENERAL_ASSETS.REAL_ESTATE,
        formGroup: GeneralInfoFormGroup,
        allowEmpty: true
    },
    size: 6
}

export const StocksSpecs: ColumnGeneratorSpecs = {
    class: 'align-middle',
    text: 'Stocks',
    size: 5
}

export const StocksRadioSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'hasStocks',
        type: 'radio',
        setFieldName: false,
        options: GENERAL_ASSETS.STOCKS,
        formGroup: GeneralInfoFormGroup,
        allowEmpty: true
    },
    size: 6
}

export const OwnBusinessSpecs: ColumnGeneratorSpecs = {
    class: 'align-middle',
    text: 'Your Own Business',
    size: 5
}

export const OwnBusinessRadioSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'hasBusiness',
        type: 'radio',
        setFieldName: false,
        options: GENERAL_ASSETS.OWN_BUSINESS,
        formGroup: GeneralInfoFormGroup,
        allowEmpty: true
    },
    size: 6
}

export const GovtSecuritiesSpecs: ColumnGeneratorSpecs = {
    class: 'align-middle',
    text: 'Government Securities',
    size: 5
}

export const GovtSecuritiesRadioSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'hasGovtSecurities',
        type: 'radio',
        setFieldName: false,
        options: GENERAL_ASSETS.GOVTSECURITIES,
        formGroup: GeneralInfoFormGroup,
        allowEmpty: true
    },
    size: 6
}

export const NextButtonColumnSpecs: ColumnGeneratorSpecs = {
    button: {
        title: 'Next',
        color: 'primary',
        shape: 'block',
        fill: 'solid'
    },
    size: 4,
    offset: 4
}