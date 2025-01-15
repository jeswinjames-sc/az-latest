export const ATTACHMENT_DOCUMENTS = [
    {
        docName: 'Application Form',
        colSpecs: 'AppForm',
        docKey: 'AF',
        docType: 'document'
    },
    {
        docName: 'Needs Analysis Form',
        docKey: 'FNA'
    },
    {
        docName: 'Needs Analysis Waiver',
        colSpecs: 'NAWaiver',
        docKey: 'NAW',
        docType: 'document'
    },
    {
        docName: 'Certificate of Interim Coverage',
        colSpecs: 'CIC',
        docKey: 'CIC',
        docType: 'document'
    },
    {
        docName: 'Replacement Notification Form',
        colSpecs: 'Replacement',
        docKey: 'RNF',
        docType: 'document'
    },
    {
        docName: 'Authorization For Continuous Billing',
        colSpecs: 'Billing',
        docKey: 'ACB',
        docType: 'form',
        formGroup: 'creditCard',
        fieldName: 'formACB'
    },
    {
        docName: 'Authorization for Auto Debit',
        colSpecs: 'AutoDebit',
        docKey: 'ADA',
        docType: 'form',
        formGroup: 'ADA',
        fieldName: 'formADA'
    },
    {
        docName: 'Auto Debit Arrangement Enrollment Form',
        colSpecs: 'Enroll',
        docKey: 'ADAEF',
        docType: 'attachment',
        formGroup: 'ADA',
        fieldName: 'attachEnroll'
    },
    {
        docName: 'Authorization for Premium Deduction',
        colSpecs: 'SalaryDeduction',
        docKey: 'APD',
        docType: 'attachment',
        formGroup: 'salaryDeduction',
        fieldName: 'attachSalaryDeduction'
    },
    {
        docName: 'Proof of Payment',
        colSpecs: 'PoP',
        docKey: 'PP',
        docType: 'attachment',
        formGroup: 'ProofOfPayment',
        fieldName: 'attachPoP'
    },
    {
        docName: 'Reference Number',
        colSpecs: 'RefNumber',
        docKey: 'RN',
        docType: 'text',
        formGroup: 'ProofOfPayment',
        fieldName: 'refNumber'
    },
    {
        docName: 'Proof of Bank Account Ownership',
        colSpecs: 'POAO1',
        docKey: 'POAO1',
        docType: 'attachment',
        formGroup: 'proofBankAcctOwner',
        fieldName: 'attachPOAO'
    },
    {
        docName: 'Proof of Bank Account Ownership',
        colSpecs: 'POAO2',
        docKey: 'POAO2',
        docType: 'attachment',
        formGroup: 'proofBankAcctOwner',
        fieldName: 'attachPOAO'
    },
    {
        docName: 'Proof of Bank Account Ownership',
        colSpecs: 'POAO3',
        docKey: 'POAO3',
        docType: 'attachment',
        formGroup: 'proofBankAcctOwner',
        fieldName: 'attachPOAO'
    },
    {
        docName: 'Proof of Bank Account Ownership',
        colSpecs: 'POAO4',
        docKey: 'POAO4',
        docType: 'attachment',
        formGroup: 'proofBankAcctOwner',
        fieldName: 'attachPOAO'
    },
    {
        docName: 'KYC',
        colSpecs: 'KYC1',
        docKey: 'KYC1',
        docType: 'attachment',
        formGroup: 'kyc',
        fieldName: 'attachKYC'
    },
    {
        docName: 'KYC',
        colSpecs: 'KYC2',
        docKey: 'KYC2',
        docType: 'attachment',
        formGroup: 'kyc',
        fieldName: 'attachKYC'
    },
    {
        docName: 'KYC',
        colSpecs: 'KYC3',
        docKey: 'KYC3',
        docType: 'attachment',
        formGroup: 'kyc',
        fieldName: 'attachKYC'
    },
    {
        docName: 'KYC',
        colSpecs: 'KYC4',
        docKey: 'KYC4',
        docType: 'attachment',
        formGroup: 'kyc',
        fieldName: 'attachKYC'
    },
    {
        docName: 'KYC',
        colSpecs: 'KYC5',
        docKey: 'KYC5',
        docType: 'attachment',
        formGroup: 'kyc',
        fieldName: 'attachKYC'
    },
    {
        docName: `Agent's Report`,
        colSpecs: 'agentsReport',
        docKey: 'agentsReport',
        docType: 'form',
        formGroup: 'agentsReport',
        fieldName: 'agentsReport'
    },
    {
        docName: 'Valid ID AO',
        colSpecs: 'ValidIDAO',
        docKey: 'VIDAO',
        docType: 'attachment',
        formGroup: 'validIdAO',
        fieldName: 'validIdAO'
    },
    {
        docName: 'Banca Referral Form',
        colSpecs: 'BancaReferralForm',
        docKey: 'BRF',
        docType: 'attachment',
        formGroup: 'BancaReferralForm',
        fieldName: 'BancaReferralForm'
    },
    {
        docName: 'Banca Sales Checklist Form',
        colSpecs: 'bancaSalesChecklistForm',
        docKey: 'BSCF',
        docType: 'attachment',
        formGroup: 'bancaSalesChecklistForm',
        fieldName: 'bancaSalesChecklistForm'
    },
    {
        docName: 'Addendum to Client Information and Application Owner Consent and Waiver Form',
        colSpecs: 'AOConsent',
        docKey: 'APPLAOCWF',
        docType: 'attachment',
        formGroup: 'FATCA',
        fieldName: 'attachAOConsent'
    },
    {
        docName: 'FATCA W-8',
        colSpecs: 'AOW8',
        docKey: 'AOW8',
        docType: 'attachment',
        formGroup: 'FATCA',
        fieldName: 'attachAOW8'
    },
    {
        docName: 'FATCA W-9',
        colSpecs: 'AOW9',
        docKey: 'AOW9',
        docType: 'attachment',
        formGroup: 'FATCA',
        fieldName: 'attachAOW9'
    },
    {
        docName: 'Medical Results (Applicant Owner)',
        colSpecs: 'MedResultAO',
        docKey: 'MRAO',
        docType: 'attachment',
        formGroup: 'medResult',
        fieldName: 'attachMedResultAO'
    },
    {
        docName: 'Sales Illustration',
        colSpecs: 'SI',
        docKey: 'SI',
        docType: 'document'
    },
    {
        docName: 'Investor Risk Profile Questionnaire',
        colSpecs: 'IRPQ',
        docKey: 'IRPQ',
        docType: 'document'
    },
    {
        docName: 'Authorization To Furnish Medical or Other Related Information',
        colSpecs: 'AuthorizationMed',
        docKey: 'AFMO',
        docType: 'document'
    },
    {
        docName: `Agents's Confidential Report`,
        colSpecs: 'ACR',
        docKey: 'ACR',
        docType: 'form',
        formGroup: 'ACR',
        fieldName: 'formACR'
    },
    {
        docName: 'Authorization to Charge Premium from Credit Card',
        colSpecs: 'CreditCard',
        docKey: 'ACPCC',
        docType: 'attachment',
        formGroup: 'creditCard',
        fieldName: 'attachCreditCard'
    },
    {
        docName: 'Card Holder Valid ID',
        colSpecs: 'CHValidId',
        docKey: 'CHVID',
        docType: 'attachment',
        formGroup: 'creditCard',
        fieldName: 'chValidId'
    },
    {
        docName: 'Authorization to Insured Child',
        colSpecs: 'AuthorizedChild',
        docKey: 'AIC',
        docType: 'attachment',
        formGroup: 'authorizedChild',
        fieldName: 'attachAuthorizedChild'
    },
    {
        docName: 'Medical Results (Proposed Insured)',
        colSpecs: 'MedResultPI',
        docKey: 'MRPI',
        docType: 'attachment',
        formGroup: 'medResult',
        fieldName: 'attachMedResultPI'
    },
    {
        docName: 'Proof of Relationship',
        colSpecs: 'PoR',
        docKey: 'PR',
        docType: 'attachment',
        formGroup: 'creditCard',
        fieldName: 'attachPoR'
    },
    {
        docName: 'Valid ID PI',
        colSpecs: 'ValidIDPI',
        docKey: 'VIDPI',
        docType: 'attachment',
        formGroup: 'validIdPI',
        fieldName: 'validIdPI'
    }
]
