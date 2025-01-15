import * as _ from 'lodash';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { SubmissionACRFormGroup } from '@form-group/submission-checklist/submission-acr-form-group';
import { BOOLEAN } from '@utils/constants/options/segment/boolean';
import { INSURANCE_PURPOSE } from '@utils/constants/options/radio/submission-checklist/acr-insurance-purpose';
import { BaseButton, BaseDeleteButton, BaseSubmitButton } from '@utils/constants/buttons';
import { ACR_RELATIONSHIP } from '@utils/constants/options/select/submission-checklist/acr-relationship';

export const TitleSpecs: ColumnGeneratorSpecs = {};

export const HealthFactorTextSpecs: ColumnGeneratorSpecs = {
    text: `1. Are you aware of any factor (health or otherwise) which is not evident
    from the application and which could affect the evaluation of this application?`,
    size: 8
};

export const HealthFactorInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'healthFactorYes',
        type: 'text',
        attMaxLength: 50,
        setFieldName: false,
        formGroup: SubmissionACRFormGroup
    }
};

export const HealthFactorSegmentSpec: ColumnGeneratorSpecs = {
    field: {
        attName: 'healthFactor',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 4
};

export const InsurancePurposeTextSpecs: ColumnGeneratorSpecs = {
    text: `2. What is purpose of this insurance?`,
};

export const InsurancePurposeRadioSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'insurancePurpose',
        type: 'radio',
        setFieldName: false,
        options: INSURANCE_PURPOSE,
        formGroup: SubmissionACRFormGroup
    },
};

export const InsurancePurposeInput: ColumnGeneratorSpecs = {
    field: {
        attName: 'insurancePurposeOthers',
        type: 'text',
        setFieldName: false,
        attMaxLength: 50,
        formGroup: SubmissionACRFormGroup
    },
    size: 6
};

export const HouseHoldTextSpecs: ColumnGeneratorSpecs = {
    text: `3. What is annual household income during the past year of
    the Applicant Owner Proposed Insured?`,
};

export const HouseHoldIncomeTextSpecs: ColumnGeneratorSpecs = {
    text: `Household Income`,
    size: 6,
    push: 6,
    class: 'ion-text-center'
};

export const HouseHoldAOIncomeTextSpecs: ColumnGeneratorSpecs = {
    text: 'Applicant Owner',
    size: 6,
    class: 'align-middle ion-text-center'
};

export const HouseHoldPIIncomeTextSpecs: ColumnGeneratorSpecs = {
    text: 'Proposed Insured',
    size: 6,
    class: 'align-middle ion-text-center'
};

export const HouseHoldAOIncomeSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'houseHoldAOIncome',
        type: 'number',
        fieldName: 'Applicant Owner',
        setFieldName: false,
        currency: 'PHP',
        formGroup: SubmissionACRFormGroup
    },
    size: 6
};

export const HouseHoldPIIncomeSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'houseHoldPIIncome',
        type: 'number',
        fieldName: 'Proposed Insured',
        setFieldName: false,
        currency: 'PHP',
        formGroup: SubmissionACRFormGroup
    },
    size: 6
};

export const HasPISpecs: ColumnGeneratorSpecs = {
    text: `4. In the past 5 years, has the Proposed Insured: `,
};

export const MilitaryMemberTextSpecs: ColumnGeneratorSpecs = {
    text: `a) Been a member of the military police or police or nay militant or paramilitary organization?`,
    size: 7,
    offset: 1,
    class: 'v-middle'
};

export const BeenActiveTextSpecs: ColumnGeneratorSpecs = {
    text: `b) Been active in politics as a candidate or leader?`,
    size: 7,
    offset: 1,
    class: 'v-middle'
};

export const MilitaryMemberInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'militaryMemberYes',
        type: 'text',
        setFieldName: false,
        attMaxLength: 50,
        formGroup: SubmissionACRFormGroup
    },
    size: 11,
    offset: 1
};

export const BeenActiveInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'beenActiveYes',
        type: 'text',
        attMaxLength: 50,
        setFieldName: false,
        formGroup: SubmissionACRFormGroup
    },
    size: 11,
    offset: 1
};

export const MilitaryMemberSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'militaryMember',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 4
};

export const BeenActiveSegmentSpec: ColumnGeneratorSpecs = {
    field: {
        attName: 'beenActive',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 4
};

export const AOBeneTextSpecs: ColumnGeneratorSpecs = {
    text: `5. Is the Proposed Insured Applicant Owner or Beneficiary?`,
};

export const PEPTextSpecs: ColumnGeneratorSpecs = {
    text: `a) a Politically Exposed Person (PEP) or an immediate family member or a close
    associate of politically exposed person?`,
    size: 7,
    offset: 1,
    class: 'v-middle'
};

export const RemitAgentTextSpecs: ColumnGeneratorSpecs = {
    text: `b) a remittance agent, money changer or foreign exchange dealer?`,
    size: 7,
    offset: 1,
    class: 'v-middle'
};

export const NGOTextSpecs: ColumnGeneratorSpecs = {
    text: `c) a Non-Government Organization (NGO), Non-Profit Organization (NPO) or Foundation?`,
    size: 7,
    offset: 1,
    class: 'v-middle'
};

export const CasinoTextSpecs: ColumnGeneratorSpecs = {
    text: `d) connected with a casino and related gaming entities?`,
    size: 7,
    offset: 1,
    class: 'v-middle'
};

export const BrokerTextSpecs: ColumnGeneratorSpecs = {
    text: `e) a Customs broker?`,
    size: 7,
    offset: 1,
    class: 'v-middle'
};

export const JewelDealerTextSpecs: ColumnGeneratorSpecs = {
    text: `f) a jewel/gem/precious metal dealer`,
    size: 7,
    offset: 1,
    class: 'v-middle'
};

export const GunDealerTextSpecs: ColumnGeneratorSpecs = {
    text: `g) a gun/ammunation/military equipment dealer?`,
    size: 7,
    offset: 1,
    class: 'v-middle'
};

export const PEPSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'PEP',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 4
};

export const RemitAgentSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'remitAgent',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 4
};

export const NGOSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'NGO',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 4
};

export const CasinoSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'casino',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 4
};

export const BrokerSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'broker',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 4
};

export const JewelDealerSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'jewelDealer',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 4
};

export const GunDealerSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'gunDealer',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 4
};

export const ClientAdditionalInfoTextSpecs: ColumnGeneratorSpecs = {
    text: `To be accomplished by Intermediary if any of the following clients: Proposed Insured, Applicant Owner, Beneficial Owner or Beneficiary/ies named in the above
    mentioned application is classified as a High Risk Client (HRC). The objective is to check the financial capacity and fund sources of an HRC.`,
    size: 11,
    offset: 1
};
export const PEPClientNameTextSpecs: ColumnGeneratorSpecs = {
    text: `Name of Client`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const PEPClientNameInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'pepClientName',
        type: 'text',
        attMaxLength: 50,
        setFieldName: false,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const PEPClientRoleTextSpecs: ColumnGeneratorSpecs = {
    text: `Client Role (PI, AO, BO or Bene)`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const PEPClientRoleInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'pepClientRole',
        type: 'select',
        interface: 'popover',
        options: [
            { key: 'Applicant Owner', value: 'Applicant Owner' },
            { key: 'Proposed Insured', value: 'Proposed Insured' },
            { key: 'Beneficial Owner', value: 'Beneficial Owner' },
            { key: 'Beneficiary', value: 'Beneficiary' },
        ],
        setFieldName: false,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const PEPAdditionalInfoTextSpecs: ColumnGeneratorSpecs = {
    text: `Reason why client is considered as an HRC`,
    size: 11,
    offset: 1
};

export const PEPNameTextSpecs: ColumnGeneratorSpecs = {
    text: `Name of HRC`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const PEPNameInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'pepName',
        type: 'text',
        attMaxLength: 150,
        setFieldName: false,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const PEPPositionTextSpecs: ColumnGeneratorSpecs = {
    text: `Reason`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const PEPPositionInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'pepPosition',
        type: 'text',
        attMaxLength: 150,
        setFieldName: false,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const PEPRelationshipTextSpecs: ColumnGeneratorSpecs = {
    text: `Relationship to Client`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const PEPRelationshipInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'pepRelationship',
        interface: 'popover',
        setFieldName: false,
        type: 'selectize',
        options: ACR_RELATIONSHIP,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const SourceOfWealthTextSpecs: ColumnGeneratorSpecs = {
    text: `1. Verify the source of wealth of the client. “Source of Wealth” refers to the resource from which
    the customer’s wealth, including all monetary instruments and properties, came, comes, or will come from,
    such as employment, business, investment, foreign remittance, inheritance, donation, and winnings.`,
    size: 11,
    offset: 1
};

export const BankCertTextSpecs: ColumnGeneratorSpecs = {
    text: `Latest Bank Certificate`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const BankPaySlipTextSpecs: ColumnGeneratorSpecs = {
    text: `Latest Pay Slip (1 month)`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const PassbookTextSpecs: ColumnGeneratorSpecs = {
    text: `Latest Passbook`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const IncomeTaxTextSpecs: ColumnGeneratorSpecs = {
    text: `Latest Income Tax Return`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const DeedOfSaleTextSpecs: ColumnGeneratorSpecs = {
    text: `Deed of Sale of Property`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const SourceOfWealthOthersTextSpecs: ColumnGeneratorSpecs = {
    text: `Others`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const BankCertSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'bankCert',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const BankPaySlipSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'bankPaySlip',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const PassbookSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'passbook',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const IncomeTaxSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'incomeTax',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const DeedOfSaleSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'deedOfSale',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const SourceOfWealthOthersInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'sourceOfWealthOthers',
        type: 'text',
        attMaxLength: 50,
        setFieldName: false,
        formGroup: SubmissionACRFormGroup
    },
    size: 5,
    offset: 7
};

export const SourceOfWealthOthersSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'sourceOfWealthOthersYes',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const OtherAssetsTextSpecs: ColumnGeneratorSpecs = {
    text: `2. Other assets owned by the client. `,
    size: 11,
    offset: 1
};

export const NetHouseTextSpecs: ColumnGeneratorSpecs = {
    text: `House`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const NetBusinessTextSpecs: ColumnGeneratorSpecs = {
    text: `Business`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const NetRealEstateTextSpecs: ColumnGeneratorSpecs = {
    text: `Real Estate`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const AssetsOthersTextSpecs: ColumnGeneratorSpecs = {
    text: `Others`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const NetHouseSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'netHouse',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const NetHouseInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'netHouseInput',
        type: 'text',
        setFieldName: false,
        currency: 'PHP',
        inputmode: 'decimal',
        formGroup: SubmissionACRFormGroup
    },
    size: 5,
    offset: 7
};

export const NetBusinessSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'netBusiness',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const NetBusinessInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'netBusinessInput',
        type: 'text',
        setFieldName: false,
        currency: 'PHP',
        inputmode: 'decimal',
        formGroup: SubmissionACRFormGroup
    },
    size: 5,
    offset: 7
};

export const NetRealEstateSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'netRealEstate',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const NetRealEstateInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'netRealEstateInput',
        type: 'text',
        setFieldName: false,
        currency: 'PHP',
        inputmode: 'decimal',
        formGroup: SubmissionACRFormGroup
    },
    size: 5,
    offset: 7
};

export const AssetsOthersInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'assetsOthers',
        type: 'text',
        attMaxLength: 50,
        setFieldName: false,
        formGroup: SubmissionACRFormGroup
    },
    size: 5,
    offset: 7
};

export const AssetsOthersSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'assetsOthersYes',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const SourceOfFundTextSpecs: ColumnGeneratorSpecs = {
    text: `3. Verify the source of fund. “Source of Fund” refers to the origin of the funds that is the subject of
    the transaction, such as cash on hand, safety deposit box, and a particular bank or investment account.`,
    size: 11,
    offset: 1
};

export const SalaryTextSpecs: ColumnGeneratorSpecs = {
    text: `Salary/wages`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const BusinessTextSpecs: ColumnGeneratorSpecs = {
    text: `Business`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const GiftsTextSpecs: ColumnGeneratorSpecs = {
    text: `Gifts/Inheritance`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const LegalClaimsTextSpecs: ColumnGeneratorSpecs = {
    text: `Legal Claims`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const InvestmentIncomeTextSpecs: ColumnGeneratorSpecs = {
    text: `Investment Income`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const SourceOfFundOthersTextSpecs: ColumnGeneratorSpecs = {
    text: `Others`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const SalarySegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'salary',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const BusinessSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'business',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const GiftsSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'gifts',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const LegalClaimsSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'legalClaims',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const InvestmentIncomeSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'investmentIncome',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const SourceOfFundOthersInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'sourceOfFundOthers',
        type: 'text',
        attMaxLength: 50,
        setFieldName: false,
        formGroup: SubmissionACRFormGroup
    },
    size: 5,
    offset: 7
};

export const SourceOfFundOthersSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'sourceOfFundOthersYes',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const NatureBusinessTextSpecs: ColumnGeneratorSpecs = {
    text: `4. What is the nature of occupation and/or business of client?`,
    size: 11,
    offset: 1
};

export const BankingTextSpecs: ColumnGeneratorSpecs = {
    text: `Banking`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const ManufacturingTextSpecs: ColumnGeneratorSpecs = {
    text: `Manufacturing`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const InformationTechTextSpecs: ColumnGeneratorSpecs = {
    text: `Information Technology`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const PawnshopTextSpecs: ColumnGeneratorSpecs = {
    text: `Pawnshop or Jewelry Trader`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const CasinoOccupationTextSpecs: ColumnGeneratorSpecs = {
    text: `Casino`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const GovernmentServiceTextSpecs: ColumnGeneratorSpecs = {
    text: `Government Service`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const NatureBusinessOthersTextSpecs: ColumnGeneratorSpecs = {
    text: `Others`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const BankingSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'banking',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const ManufacturingSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'manufacturing',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const InformationTechSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'informationTech',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const PawnshopSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'pawnshop',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const CasinoOccupationSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'casinoOccupation',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const GovernmentServiceSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'governmentService',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const NatureBusinessOthersInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'natureBusinessOthers',
        type: 'text',
        attMaxLength: 50,
        setFieldName: false,
        formGroup: SubmissionACRFormGroup
    },
    size: 5,
    offset: 7
};

export const NatureBusinessOthersSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'natureBusinessOthersYes',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};


export const ReasonTransactionTextSpecs: ColumnGeneratorSpecs = {
    text: `5. What is the reason for the transaction? (If purchasing a new policy, what is the purpose of the policy`,
    size: 11,
    offset: 1
};

export const SecurityTextSpecs: ColumnGeneratorSpecs = {
    text: `Security`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const ProtectionTextSpecs: ColumnGeneratorSpecs = {
    text: `Protection`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const HealthTextSpecs: ColumnGeneratorSpecs = {
    text: `Health`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const EducationTextSpecs: ColumnGeneratorSpecs = {
    text: `Education`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const RetirementTextSpecs: ColumnGeneratorSpecs = {
    text: `Retirement`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const EstatePlanningTextSpecs: ColumnGeneratorSpecs = {
    text: `Estate Planning`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const ReasonOthersTextSpecs: ColumnGeneratorSpecs = {
    text: `Others`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const SecuritySegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'security',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const ProtectionSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'protection',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const HealthSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'health',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const EducationSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'education',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const RetirementSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'retirement',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const EstatePlanningSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'estatePlanning',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const ReasonOthersInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'reasonOthers',
        type: 'text',
        attMaxLength: 50,
        setFieldName: false,
        formGroup: SubmissionACRFormGroup
    },
    size: 5,
    offset: 7
};

export const ReasonOthersSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'reasonOthersYes',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const ConfirmDoBTextSpecs: ColumnGeneratorSpecs = {
    text: `6. Confirm date of birth from an official document`,
    size: 11,
    offset: 1
};

export const ConfirmDoBOthersTextSpecs: ColumnGeneratorSpecs = {
    text: `Others`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const ConfirmDoBOthersInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'confirmDobOthers',
        type: 'text',
        attMaxLength: 50,
        setFieldName: false,
        formGroup: SubmissionACRFormGroup
    },
    size: 5,
    offset: 7
};

export const ConfirmDoBOthersSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'confirmDobOthersYes',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const PassportTextSpecs: ColumnGeneratorSpecs = {
    text: `Passport`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const NSOTextSpecs: ColumnGeneratorSpecs = {
    text: `NSO Birth Certificate`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const MarriageTextSpecs: ColumnGeneratorSpecs = {
    text: `Marriage Contract`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const VerifyAddressTextSpecs: ColumnGeneratorSpecs = {
    text: `7. Verify permanent address through evaluation of proof of billing
    (utility bills/credit card statement etc.) or do an occular visit/on-site visitation`,
    size: 11,
    offset: 1
};

export const VerifyAddressOthersTextSpecs: ColumnGeneratorSpecs = {
    text: `Others`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const VerifyAddressOthersInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'verifyAddressOthers',
        type: 'text',
        attMaxLength: 50,
        setFieldName: false,
        formGroup: SubmissionACRFormGroup
    },
    size: 5,
    offset: 7
};

export const VerifyAddressOthersSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'verifyAddressOthersYes',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const BillsTextSpecs: ColumnGeneratorSpecs = {
    text: `Utility Bills`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const CreditCardTextSpecs: ColumnGeneratorSpecs = {
    text: `Credit Card Statement`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const OnsiteTextSpecs: ColumnGeneratorSpecs = {
    text: `On-site Visit`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const PassportSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'passport',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const NSOSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'NSO',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const MarriageSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'marriage',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const BillsSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'bills',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const CreditCardSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'creditCard',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const OnsiteSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'onsite',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const ClientCaseTextSpecs: ColumnGeneratorSpecs = {
    text: `8. If the client is involved in any litigation case, kindly request client to submit a written statement
    pertaining to the status of the case together with the pertinent court document/s.`,
    size: 11,
    offset: 1
};

export const CourtDecisionTextSpecs: ColumnGeneratorSpecs = {
    text: `Court Decision`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const CourtResolutionTextSpecs: ColumnGeneratorSpecs = {
    text: `Court Resolution`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const CourtAffidavitTextSpecs: ColumnGeneratorSpecs = {
    text: `Court Affidavit`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const ClientCaseOthersTextSpecs: ColumnGeneratorSpecs = {
    text: `Others`,
    size: 5,
    offset: 2,
    class: 'v-middle'
};

export const CourtDecisionSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'courtDecision',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const CourtResolutionSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'courtResolution',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const CourtAffidavitSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'courtAffidavit',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const ClientCaseOthersInputSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'clientCaseOthers',
        type: 'text',
        attMaxLength: 50,
        setFieldName: false,
        formGroup: SubmissionACRFormGroup
    },
    size: 5,
    offset: 7
};

export const ClientCaseOthersSegmentSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'clientCaseOthersYes',
        type: 'segment',
        setFieldName: false,
        options: BOOLEAN,
        formGroup: SubmissionACRFormGroup
    },
    size: 5
};

export const AttachSignatureSpecs: ColumnGeneratorSpecs = {
    button: {
        ..._.clone(BaseButton),
        title: 'Attach Signature'
    }
};

export const ResetButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        ..._.clone(BaseDeleteButton),
        title: 'Reset'
    },
    size: 6
};

export const SubmitButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        ..._.clone(BaseSubmitButton)
    },
    size: 6
};
