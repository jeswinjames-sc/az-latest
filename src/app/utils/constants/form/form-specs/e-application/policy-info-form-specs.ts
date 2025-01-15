import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { PolicyInfoFormGroup, PayoutBanksNameFormGroup } from '@form-group/e-app/policy-info-form-group';
import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { BOOLEAN } from '@utils/constants/options/segment/boolean';
import * as EAPP_OPTIONS from '@utils/constants/options/segment/e-app-options';
import { RouterLinkWithHref } from '@angular/router';
import { RowGeneratorComponent } from '@components/forms/row-generator/row-generator.component';
import { DEFAULT_PAYMENT_SCHEME } from '@utils/constants/payment-scheme';
import { BANK_PAYOUT } from '@utils/constants/options/select/bank';
import { DynamicTableSpecs } from '@models/specs/dynamic-table-specs';
import { PayoutBanksFGControls } from '@fg-controls/e-app';
import { FormArray } from '@angular/forms';
import { INSURANCE_PURPOSE } from '@utils/constants/options/radio/submission-checklist/acr-insurance-purpose';

export function checkCoDepositor(isRequired: boolean = true) {
    const coDepositors = PolicyInfoFormGroup.get('payoutBanks').value;
    // const payoutBanksFG = PolicyInfoFormGroup.get('payoutBanks') as FormArray
    PayoutBankAccountNameTableSpecs.additionalValMsg = []
    let errors = {}
    if (isRequired && coDepositors.length === 0) {
      PayoutBankAccountNameTableSpecs.additionalValMsg.push('Required to have at least one co-depositor');
      errors['required'] = true;
    }

    if (Object.keys(errors).length === 0)
        PolicyInfoFormGroup.get('payoutBanks').setErrors(null)
    else
        PolicyInfoFormGroup.get('payoutBanks').setErrors(errors)
}

export const biTitleRow: RowGeneratorSpecs = {
    columns: [{ text: 'Beneficiaries Information' }],
    class: 'form-group-title'
};

export const piTitleRow: RowGeneratorSpecs = {
    columns: [{ text: 'Policy information' }],
    class: 'form-group-title'
};

export const PaymentSchemeSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'select',
        attName: 'paymentScheme',
        formGroup: PolicyInfoFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Payment Scheme',
        options: DEFAULT_PAYMENT_SCHEME.PNB
    }
};

export const PaymentSchemeNoteSpecs: ColumnGeneratorSpecs = {
    size: 12,
    field: {
        type: 'note',
        attName: 'paymentSchemeNote',
        formGroup: PolicyInfoFormGroup,
        fieldName: 'Proceed to AZ Touch for Credit Card enrollment through Auto Pay.',
    },
    isHidden: true
};

export const InsurancePurposeSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'select',
        attName: 'purpose',
        formGroup: PolicyInfoFormGroup,
        setFieldName: true,
        interface: 'popover',
        fieldName: 'Purpose of Insurance',
        options: INSURANCE_PURPOSE
    }
};

export const OtherInsurancePurposeSpecs: ColumnGeneratorSpecs = {
    size: 12,
    field: {
        type: 'text',
        attMaxLength: 100,
        attName: 'otherPurpose',
        formGroup: PolicyInfoFormGroup,
        setFieldName: true,
        fieldName: 'Purpose of Insurance (Others)',
    }
};

export const PolicyInfoFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Policy Information
            columns: [{ text: 'Policy Information' }],
            class: 'form-sub-section-title'
        },
        { // READONLY: basicPlan, sumAssured, amountOfPayment FIELDS: paymentScheme, ipurpose, otherPurpose
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'basicPlan',
                        attMaxLength: 30,
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Basic Plan'
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'sumAssured',
                        attMaxLength: 3,
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Sum Assured'
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'policyAmount',
                        attMaxLength: 3,
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Policy Amount'
                    },
                    isHidden: true
                },
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'amountOfPayment',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Amount of Payment Deposit'
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'readOnly',
                        attName: 'payMode',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Mode of Payment'
                    }
                },
                PaymentSchemeSpecs,
                InsurancePurposeSpecs,
                OtherInsurancePurposeSpecs,
                PaymentSchemeNoteSpecs
            ]
        }
    ]
};
export const TraditionalInfo: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Trad Info
            columns: [{ text: 'Traditional Information' }],
            class: 'form-sub-section-title'
        },
        {// READONLY: dividendOption FIELDS: premiumDefaultOption, settlementOption
            columns: [
                {
                    size: 2,
                    field: {
                        type: 'readOnly',
                        attName: 'dividendOption',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Dividend Option'
                    }
                },
                {
                    size: 5,
                    field: {
                        type: 'select',
                        attName: 'premiumDefaultOption',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'Premium Default Option',
                        options: [
                            { key: 'A', value: 'Premium Loan' },
                            { key: 'R', value: 'Reduced Paid-Up' },
                            { key: 'E', value: 'Extend Term Insurance' },
                            { key: 'C', value: 'Cash Surrender' }
                        ]
                    }
                },
                {
                    size: 5,
                    field: {
                        type: 'select',
                        attName: 'settlementOption',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'Settlement Option for Anticipated Endowment',
                        options: [
                            { key: 'PIC', value: 'Paid in Cash' },
                            { key: 'LDI', value: 'Left on Deposit' }
                        ]
                    }
                }
            ]
        }
    ],
    isHidden: true
};
export const UnitLinkInfo: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Unit Link Info
            columns: [{ text: 'Unit Link Information' }],
            class: 'form-sub-section-title'
        },
        {// READONLY: deathBenefitType, withTopUp, topUpAmount
            columns: [
                {
                    size: 3,
                    field: {
                        type: 'readOnly',
                        attName: 'deathBenefitType',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Type of Death Benefit'
                    }
                },
                {
                    size: 3,
                    field: {
                        type: 'readOnly',
                        attName: 'withTopUp',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'With Top-up?'
                    }
                },
                {
                    size: 3,
                    field: {
                        type: 'readOnly',
                        attName: 'topUpAmount',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Top-up Amount'
                    }
                }
            ]
        }
    ],
    isHidden: true
};

export const RidersInfoFormSpecsBase: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Rider Info
            columns: [{ text: 'Rider Information' }],
            class: 'form-sub-section-title'
        },
        {// TABLEHEADERS: additional benefit, coverage amount
            columns: [
                {
                    size: 6,
                    text: 'Additional Benefit(s)'
                },
                {
                    size: 6,
                    text: 'Coverage Amount'
                }
            ],
            class: 'table-header'
        }
    ]
};
export const PesoFundsFormSpecsBase: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Rider Info
            columns: [{ text: 'Funds Information' }],
            class: 'form-sub-section-title'
        },
        {// TABLEHEADERS: Peso funds, basic plan direction, top up direction
            columns: [
                {
                    size: 6,
                    text: 'Peso Funds'
                },
                {
                    size: 3,
                    text: 'Basic Plan Direction'
                },
                {
                    size: 3,
                    text: 'Top-Up Direction'
                }
            ],
            class: 'table-header'
        }
    ]
};
export const DollarFundsFormSpecsBase: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Rider Info
            columns: [{ text: 'Funds Information' }],
            class: 'form-sub-section-title'
        },
        {// TABLEHEADERS: dollar fund name, basic plan direction, top up direction
            columns: [
                {
                    size: 6,
                    text: 'Dollar Funds'
                },
                {
                    size: 3,
                    text: 'Basic Plan Direction'
                },
                {
                    size: 3,
                    text: 'Top-Up Direction'
                }
            ],
            class: 'table-header'
        }
    ]
};

export const PayOutOption: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Payout Option...
            columns: [{ text: 'Payout Option for All Living Benefits' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: payoutOption
            columns: [
                {
                    field: {
                        attName: 'payoutOption',
                        type: 'radio',
                        setFieldName: true,
                        options: [
                            { key: 'A', value: 'Automatic Transfer to My Account', size: 6 },
                            { key: 'C', value: 'Cheque', size: 6 },
                        ],
                        formGroup: PolicyInfoFormGroup,
                        allowEmpty: true,
                        fieldName: 'Payout Option'
                    }
                }
            ]
        }
    ]
};
export const PayOutOptionTransferFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                {
                    template: `
                    <p>
                        I hereby agree that all my living benefits (anticipated endowment proceeds net of
                        outstanding loans, dividends, policy loan,
                        withdrawals, surrenders and maturities) and refund amounting to PHP5,000 and above or
                        its
                        USD equivalent will automatically be transferred to my account with details indicated
                        below,
                        hereby granting
                        <b>Allianz PNB Life Insurance,Inc.</b> authority to effect the
                        same.
                    </p>
                    <p>
                        I fully understand and agree that the authorisation shall be on a continuing basis and
                        shall remain in full force and effect
                        unless cancelled by the undersigned in writing or as determined by
                        <b>Allianz PNB Life Insurance,Inc.</b>
                    </p>
                    <p>
                        By signing this application form, I agree to inform
                        <b>Allianz PNB Life Insurance,Inc.</b> in writing of any change in
                        the information provided
                        or in my account status. I also authorize
                        <b>Allianz PNB Life Insurance,Inc.</b> to deduct from the proceed
                        any applicable bank charges.
                    </p>`
                }
            ]
        },
        {// FIELDS: bankName, bankBranch, bankAccountName
            columns: [

                {
                    size: 4,
                    field: {
                        type: 'select',
                        attName: 'bankName',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'Bank Name',
                        options: BANK_PAYOUT
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attMaxLength: 50,
                        attName: 'bankBranch',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Bank Branch'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attMaxLength: 160,
                        attName: 'bankAccountName',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Bank Account Name',
                    }
                }
            ]
        },
        {// FIELDS: accountNumber, accountCurrency, jointAccount
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'number',
                        attName: 'accountNumber',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Account Number',
                        inputmode: 'numeric',
                        isRequired: true
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'accountCurrency',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Account Currency'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'segment',
                        attName: 'jointAccount',
                        formGroup: PolicyInfoFormGroup,
                        fieldName: 'Joint Account',
                        options: BOOLEAN,
                        setFieldName: true
                    }
                }
            ]
        },
        {// FIELDS: typeOfAccount
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'select',
                        attName: 'typeOfAccount',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'Type of Account',
                        options: [
                            { key: 'A', value: 'AND' },
                            { key: 'O', value: 'OR' },
                            { key: 'AO', value: 'AND/OR' }
                        ]
                    },
                    isHidden: true
                }
            ] 
        } 
    ], 
    isHidden: true 
}; 
 
export const PayoutBankAccountNameTableSpecs: DynamicTableSpecs = { 
    mainFormGroup: PolicyInfoFormGroup, 
    formArrayKey: 'payoutBanks', 
    secondaryFormGroup: PayoutBanksNameFormGroup, 
    controlConfiguration: PayoutBanksFGControls, 
    limit: 2, 
    title: 'Co-Depositor Names Summary', 
    subTitle: 'Co-Depositor Information',
    customSaveButtonName: 'Co-Depositor',
    readOnly: false, 
    hasShowMore: true, 
 
    availableActions: { 
        add: true, 
        edit: true, 
        save: true, 
        delete: true 
    }, 
 
    formGeneratorSpecs: { 
        rows: [ 
            { 
                columns: [ 
                    { 
                        field: { 
                            type: 'text', 
                            attMaxLength: 118, 
                            attName: 'coDepositorName', 
                            formGroup: PayoutBanksNameFormGroup, 
                            setFieldName: true, 
                            fieldName: `Co-Depositor's Name` 
                        } 
                    } 
                ] 
            } 
        ] 
    }, 
    columns: [ 
        { 
            formGrpCtrlName: 'coDepositorName', 
            columnName: `Co-Depositor's Names` 
        }, 
    ] 
}; 

export const PolicyInfoNextButtonCol: ColumnGeneratorSpecs = {
    push: 10,
    size: 2,
    button: {
        title: 'next',
        fill: 'solid',
        color: 'primary',
        expand: 'block'
    }
};

export const PolicyInfoNextButtonRow: RowGeneratorSpecs = {
    columns: [PolicyInfoNextButtonCol]
};

export const PolicyInfoSubmitButtonCol: ColumnGeneratorSpecs = {
    push: 9,
    size: 3,
    button: {
        title: 'Proceed to Signature Page',
        fill: 'solid',
        color: 'primary',
        expand: 'block'
    },
    class: 'proceed-signature-btn'
};
export const BeneficiaryNoteColSpecs: ColumnGeneratorSpecs = {
    // * do not format/pre-wrap the following text
    // tslint:disable-next-line: max-line-length
    text: `The written CONSENT of ALL IRREVOCABLE beneficiaries will be required in all future transactions on the Policy. It is understood that the beneficiaries share equally unless indicated otherwise in the % share column. \n \nIMPORTANT NOTE ON MINOR BENEFICIARIES: According to Section 182 of the Revised Insurance Code, minors may exercise their rights (including receiving benefits and giving consent as irrevocable beneficiaries) under the insurance policy only through a Guardian. The parent/s, by default, are the minor’s guardian. When the interest of the minor exceeds Five Hundred Thousand Pesos (PHP 500,000.00), the law further requires that a petition be filed in court for the posting of a guardian’s bond.`,
    class: 'note column-text-wrap'
};

export const PolicyInfoSubmitButtonRow: RowGeneratorSpecs = {
    columns: [PolicyInfoSubmitButtonCol]
};

export const BeneficiaryNoteRowSpecs: RowGeneratorSpecs = {
    columns: [BeneficiaryNoteColSpecs]
};

//READONLY FORM SPECS
export const PolicyInfoFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Policy Information
            columns: [{ text: 'Policy Information' }],
            class: 'form-sub-section-title'
        },
        { // READONLY: basicPlan, sumAssured, amountOfPayment FIELDS: paymentScheme
            columns: [
                {
                    size: 2,
                    field: {
                        type: 'readOnly',
                        attName: 'basicPlan',
                        attMaxLength: 30,
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Basic Plan'
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'readOnly',
                        attName: 'sumAssured',
                        attMaxLength: 3,
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Sum Assured'
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'readOnly',
                        attName: 'policyAmount',
                        attMaxLength: 3,
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Policy Amount'
                    },
                    isHidden: true
                },
                {
                    size: 3,
                    field: {
                        type: 'readOnly',
                        attName: 'amountOfPayment',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Amount of Payment Deposit'
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'readOnly',
                        attName: 'payMode',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Mode of Payment'
                    }
                },
                {
                    size: 3,
                    field: {
                        type: 'readOnly',
                        attName: 'paymentScheme',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Payment Scheme',
                        readOnlySpecs: {
                            type: 'paymentScheme',
                            listOfKeyValues: EAPP_OPTIONS.PAYMENT_SCHEME
                        }
                    }
                },
            ]
        }
    ]
};

export const TraditionalInfoReadOnly: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Trad Info
            columns: [{ text: 'Traditional Information' }],
            class: 'form-sub-section-title'
        },
        {// READONLY: dividendOption FIELDS: premiumDefaultOption, settlementOption
            columns: [
                {
                    size: 2,
                    field: {
                        type: 'readOnly',
                        attName: 'dividendOption',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Dividend Option'
                    }
                },
                {
                    size: 5,
                    field: {
                        type: 'readOnly',
                        attName: 'premiumDefaultOption',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Premium Default Option',
                        readOnlySpecs: {
                            type: 'premiumDefaultOption',
                            listOfKeyValues: EAPP_OPTIONS.PREMIUM_DEFAULT_OPTION
                        }
                    }
                },
                {
                    size: 5,
                    field: {
                        type: 'readOnly',
                        attName: 'settlementOption',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Settlement Option for Anticipated Endowment',
                        readOnlySpecs: {
                            type: 'settlementOption',
                            listOfKeyValues: EAPP_OPTIONS.SETTLEMENT_OPTION
                        }
                    }
                }
            ]
        }
    ],
    isHidden: true
};

export const PayOutOptionReadOnly: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Payout Option...
            columns: [{ text: 'Payout Option for All Living Benefits' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: payoutOption
            columns: [
                {
                    field: {
                        attName: 'payoutOption',
                        type: 'readOnly',
                        setFieldName: true,
                        formGroup: PolicyInfoFormGroup,
                        fieldName: 'Payout Option',
                        readOnlySpecs: {
                            type: 'payoutOption',
                            listOfKeyValues: EAPP_OPTIONS.PAYOUT_OPTION
                        }
                    }
                }
            ]
        }
    ]
};

export const PayOutOptionTransferFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                {
                    template: `
                    <p>
                        I hereby agree that all my living benefits (anticipated endowment proceeds net of
                        outstanding loans, dividends, policy loan,
                        withdrawals, surrenders and maturities) and refund amounting to PHP5,000 and above or
                        its
                        USD equivalent will automatically be transferred to my account with details indicated
                        below,
                        hereby granting
                        <b>Allianz PNB Life Insurance,Inc.</b> authority to effect the
                        same.
                    </p>
                    <p>
                        I fully understand and agree that the authorisation shall be on a continuing basis and
                        shall remain in full force and effect
                        unless cancelled by the undersigned in writing or as determined by
                        <b>Allianz PNB Life Insurance,Inc.</b>
                    </p>
                    <p>
                        By signing this application form, I agree to inform
                        <b>Allianz PNB Life Insurance,Inc.</b> in writing of any change in
                        the information provided
                        or in my account status. I also authorize
                        <b>Allianz PNB Life Insurance,Inc.</b> to deduct from the proceed
                        any applicable bank charges.
                    </p>`
                }
            ]
        },
        {// FIELDS: bankName, bankBranch, bankAccountName
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'bankName',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'Bank Name',
                        readOnlySpecs: {
                            type: 'bankName',
                            listOfKeyValues: BANK_PAYOUT
                        }
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 50,
                        attName: 'bankBranch',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Bank Branch'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 160,
                        attName: 'bankAccountName',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Bank Account Name',
                    }
                }
            ]
        },
        {// FIELDS: accountNumber, accountCurrency, jointAccount
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 25,
                        attName: 'accountNumber',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Account Number'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'accountCurrency',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Account Currency'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'jointAccount',
                        formGroup: PolicyInfoFormGroup,
                        fieldName: 'Joint Account',
                        setFieldName: true,
                        readOnlySpecs: {
                            type: 'yesNo'
                        }
                    }
                }
            ]
        },
        {// FIELDS: typeOfAccount
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'typeOfAccount',
                        formGroup: PolicyInfoFormGroup,
                        setFieldName: true,
                        fieldName: 'Type of Account',
                        readOnlySpecs: {
                            type: 'accountType',
                            listOfKeyValues: EAPP_OPTIONS.ACCOUNT_TYPE
                        }
                    },
                    isHidden: true
                }
            ]
        }
    ],
    isHidden: true
};
