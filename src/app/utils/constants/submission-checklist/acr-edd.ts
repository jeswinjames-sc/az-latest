export const ENHANCED_DUE_DILIGENCE = [
    {
        colSpecs: 'ClientAdditionalInfo',
    },
    {
        colSpecs: 'PEPClientName',
        formGroup: 'pepClientName',
        hasSegment: false,
        hasInput: true
    },
    {
        colSpecs: 'PEPClientRole',
        formGroup: 'pepClientRole',
        hasSegment: false,
        hasInput: true
    },
    {
        colSpecs: 'PEPAdditionalInfo',
    },
    {
        colSpecs: 'PEPName',
        formGroup: 'pepName',
        hasSegment: false,
        hasInput: true,
    },
    {
        colSpecs: 'PEPPosition',
        formGroup: 'pepPosition',
        hasSegment: false,
        hasInput: true,
    },
    {
        colSpecs: 'PEPRelationship',
        formGroup: 'pepRelationship',
        hasSegment: false,
        hasInput: true,
    },
    {
        colSpecs: 'SourceOfWealth',
    },
    {
        colSpecs: 'BankCert',
        formGroup: 'bankCert',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'sourceOfWealth'
    },
    {
        colSpecs: 'BankPaySlip',
        formGroup: 'bankPaySlip',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'sourceOfWealth'
    },
    {
        colSpecs: 'Passbook',
        formGroup: 'passbook',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'sourceOfWealth'
    },
    {
        colSpecs: 'IncomeTax',
        formGroup: 'incomeTax',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'sourceOfWealth'
    },
    {
        colSpecs: 'DeedOfSale',
        formGroup: 'deedOfSale',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'sourceOfWealth'
    },
    {
        colSpecs: 'SourceOfWealthOthers',
        formGroup: 'sourceOfWealthOthers',
        hasSegment: false,
        hasInput: true,
        isOthers: true,
        validationGroup: 'sourceOfWealth'
    },
    {
        colSpecs: 'SourceOfWealthOthers',
        formGroup: 'sourceOfWealthOthersYes',
        hasSegment: true,
        hasInput: false,
        isSegmentOthers: true,
        validationGroup: 'sourceOfWealth'
    },
    {
        colSpecs: 'OtherAssets',
    },
    {
        colSpecs: 'NetHouse',
        formGroup: 'netHouse',
        hasSegment: true,
        hasInput: false,
        hasToggleInput: true,
        isOptional: true,
        validationGroup: 'otherAssets'
    },
    {
        colSpecs: 'NetBusiness',
        formGroup: 'netBusiness',
        hasSegment: true,
        hasInput: false,
        hasToggleInput: true,
        isOptional: true,
        validationGroup: 'otherAssets'
    },
    {
        colSpecs: 'NetRealEstate',
        formGroup: 'netRealEstate',
        hasSegment: true,
        hasInput: false,
        hasToggleInput: true,
        isOptional: true,
        validationGroup: 'otherAssets'
    },
    {
        colSpecs: 'AssetsOthers',
        formGroup: 'assetsOthers',
        hasSegment: false,
        hasInput: true,
        isOthers: true,
        isOptional: true,
        validationGroup: 'otherAssets'
    },
    {
        colSpecs: 'AssetsOthers',
        formGroup: 'assetsOthersYes',
        hasSegment: true,
        hasInput: false,
        isOptional: true,
        isSegmentOthers: true,
        validationGroup: 'otherAssets'
    },
    {
        colSpecs: 'SourceOfFund',
    },
    {
        colSpecs: 'Salary',
        formGroup: 'salary',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'sourceOfFund'
    },
    {
        colSpecs: 'Business',
        formGroup: 'business',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'sourceOfFund'
    },
    {
        colSpecs: 'Gifts',
        formGroup: 'gifts',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'sourceOfFund'
    },
    {
        colSpecs: 'LegalClaims',
        formGroup: 'legalClaims',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'sourceOfFund'
    },
    {
        colSpecs: 'InvestmentIncome',
        formGroup: 'investmentIncome',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'sourceOfFund'
    },
    {
        colSpecs: 'SourceOfFundOthers',
        formGroup: 'sourceOfFundOthers',
        hasSegment: false,
        hasInput: true,
        isOthers: true,
        validationGroup: 'sourceOfFund'
    },
    {
        colSpecs: 'SourceOfFundOthers',
        formGroup: 'sourceOfFundOthersYes',
        hasSegment: true,
        hasInput: false,
        isSegmentOthers: true,
        validationGroup: 'sourceOfFund'
    },
    {
        colSpecs: 'NatureBusiness',
    },
    {
        colSpecs: 'Banking',
        formGroup: 'banking',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'natureBusiness'
    },
    {
        colSpecs: 'Manufacturing',
        formGroup: 'manufacturing',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'natureBusiness'
    },
    {
        colSpecs: 'InformationTech',
        formGroup: 'informationTech',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'natureBusiness'
    },
    {
        colSpecs: 'Pawnshop',
        formGroup: 'pawnshop',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'natureBusiness'
    },
    {
        colSpecs: 'CasinoOccupation',
        formGroup: 'casinoOccupation',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'natureBusiness'
    },
    {
        colSpecs: 'GovernmentService',
        formGroup: 'governmentService',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'natureBusiness'
    },
    {
        colSpecs: 'NatureBusinessOthers',
        formGroup: 'natureBusinessOthers',
        hasSegment: false,
        hasInput: true,
        isOthers: true,
        validationGroup: 'natureBusiness'
    },
    {
        colSpecs: 'NatureBusinessOthers',
        formGroup: 'natureBusinessOthersYes',
        hasSegment: true,
        hasInput: false,
        isSegmentOthers: true,
        validationGroup: 'natureBusiness'
    },
    {
        colSpecs: 'ReasonTransaction',
    },
    {
        colSpecs: 'Security',
        formGroup: 'security',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'reason'
    },
    {
        colSpecs: 'Protection',
        formGroup: 'protection',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'reason'
    },
    {
        colSpecs: 'Health',
        formGroup: 'health',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'reason'
    },
    {
        colSpecs: 'Education',
        formGroup: 'education',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'reason'
    },
    {
        colSpecs: 'Retirement',
        formGroup: 'retirement',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'reason'
    },
    {
        colSpecs: 'EstatePlanning',
        formGroup: 'estatePlanning',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'reason'
    },
    {
        colSpecs: 'ReasonOthers',
        formGroup: 'reasonOthers',
        hasSegment: false,
        hasInput: true,
        isOthers: true,
        validationGroup: 'reason'
    },
    {
        colSpecs: 'ReasonOthers',
        formGroup: 'reasonOthersYes',
        hasSegment: true,
        hasInput: false,
        isSegmentOthers: true,
        validationGroup: 'reason'
    },
    {
        colSpecs: 'ConfirmDoB',
    },
    {
        colSpecs: 'Passport',
        formGroup: 'passport',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'confirmDob'
    },
    {
        colSpecs: 'NSO',
        formGroup: 'NSO',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'confirmDob'
    },
    {
        colSpecs: 'Marriage',
        formGroup: 'marriage',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'confirmDob'
    },
    {
        colSpecs: 'ConfirmDoBOthers',
        formGroup: 'confirmDobOthers',
        hasSegment: false,
        hasInput: true,
        isOthers: true,
        validationGroup: 'confirmDob'
    },
    {
        colSpecs: 'ConfirmDoBOthers',
        formGroup: 'confirmDobOthersYes',
        hasSegment: true,
        hasInput: false,
        isSegmentOthers: true,
        validationGroup: 'confirmDob'
    },
    {
        colSpecs: 'VerifyAddress',
    },
    {
        colSpecs: 'Bills',
        formGroup: 'bills',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'verifyAddress'
    },
    {
        colSpecs: 'CreditCard',
        formGroup: 'creditCard',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'verifyAddress'
    },
    {
        colSpecs: 'Onsite',
        formGroup: 'onsite',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'verifyAddress'
    },
    {
        colSpecs: 'VerifyAddressOthers',
        formGroup: 'verifyAddressOthers',
        hasSegment: false,
        hasInput: true,
        isOthers: true,
        validationGroup: 'verifyAddress'
    },
    {
        colSpecs: 'VerifyAddressOthers',
        formGroup: 'verifyAddressOthersYes',
        hasSegment: true,
        hasInput: false,
        isSegmentOthers: true,
        validationGroup: 'verifyAddress'
    },
    {
        colSpecs: 'ClientCase',
    },
    {
        colSpecs: 'CourtDecision',
        formGroup: 'courtDecision',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'clientCase'
    },
    {
        colSpecs: 'CourtResolution',
        formGroup: 'courtResolution',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'clientCase'
    },
    {
        colSpecs: 'CourtAffidavit',
        formGroup: 'courtAffidavit',
        hasSegment: true,
        hasInput: false,
        validationGroup: 'clientCase'
    },
    {
        colSpecs: 'ClientCaseOthers',
        formGroup: 'clientCaseOthers',
        hasSegment: false,
        hasInput: true,
        isOthers: true,
        validationGroup: 'clientCase'
    },
    {
        colSpecs: 'ClientCaseOthers',
        formGroup: 'clientCaseOthersYes',
        hasSegment: true,
        hasInput: false,
        isSegmentOthers: true,
        validationGroup: 'clientCase'
    },
];
