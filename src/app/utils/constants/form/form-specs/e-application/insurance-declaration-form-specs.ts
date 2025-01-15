import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { InsuranceDeclarationFormGroup } from '@form-group/e-app/insurance-declaration-form-group';
import { DynamicTableSpecs } from '@models/specs/dynamic-table-specs';
import { TotalInsuranceInforceFGControls, PendingApplicationsFGControls, ReplacementNotificationFGControls } from '@fg-controls/e-app';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { BOOLEAN } from '@utils/constants/options/segment/boolean';
import { FormBuilder } from '@angular/forms';
import { CURRENCY_OPTIONS } from '@utils/constants/options/segment/e-app-options';
import { NOT_APPLICABLE_SYNTAX } from '@utils/constants/not-applicable-syntax';


export const DecProposedReplacementTitleRow: RowGeneratorSpecs = {
    columns: [{ text: 'Declaration on the Proposed Replacement of the Existing Policy(ies)' }],
    class: 'form-group-title-black'
};

export const DecProposedReplacementSubTitleRow: RowGeneratorSpecs = {
    columns: [{ template: `
                        <table style="width: 100%;" border="0" cellpadding="0">
                            <tr>
                                <td>
                                    <img width="40" src="assets/images/common/bulb-warning.png"/>
                                </td>
                                <td width="20"></td>
                                <td>
                                    To be filled out by Proposed Insured and/or Applicant Owner
                                    <br>Declaration on the Proposed Replacement of the Existing Policy(ies)
                                </td>
                            </tr>
                        </table>
                        `,  class: 'note'}]
};

export const DecProposedReplacementSubTitle1Row: RowGeneratorSpecs = {
    columns: [{ text: 'Declaration on the Proposed Replacement of the Existing Policy(ies)' }],
    class: 'read-only-value'
};


export const DecProposedReplacementAFCSubTitleRow: RowGeneratorSpecs = {
    columns: [{ text: 'To be filled up by Intermediary' }],
    class: 'form-sub-section-title'
};

export const DecProposedReplacementAFCSubTitle1Row: RowGeneratorSpecs = {
    columns: [{ text: 'To be filled up by Proposed Insure and/or Applicant Owner' }],
    class: 'form-sub-section-title'
};

const totalInsuranceFormGroup = new FormBuilder().group(TotalInsuranceInforceFGControls);
totalInsuranceFormGroup.get('basicLife').disable();
totalInsuranceFormGroup.get('basicLifeCurrency').disable();
totalInsuranceFormGroup.get('accident').disable();
totalInsuranceFormGroup.get('accidentCurrency').disable();
totalInsuranceFormGroup.get('yearOfIssue').disable();

export const TotalInsuranceInforceTableSpecs: DynamicTableSpecs = {
    mainFormGroup: InsuranceDeclarationFormGroup,
    formArrayKey: 'totalInsuranceInforce',
    secondaryFormGroup: totalInsuranceFormGroup,
    controlConfiguration: TotalInsuranceInforceFGControls,
    title: 'Insurance Information',
    subTitle: 'Insurance Inforced Information',
    limit: 5,
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
                        size: 1,
                        text: ''
                    },
                    {
                        size: 2,
                        text: 'Company',
                        class: 'insdecl-mdl-content'
                    },
                    {
                        size: 8,
                        field: {
                            setFieldName: false,
                            //fieldName: 'Company',
                            type: 'text',
                            attName: 'company',
                            attMaxLength: 50,
                            formGroup: totalInsuranceFormGroup,
                            conditionalFunction: () => {
                                if (
                                    totalInsuranceFormGroup.get('company').value &&
                                    !NOT_APPLICABLE_SYNTAX.includes(totalInsuranceFormGroup.get('company').value.toUpperCase())
                                ) {
                                    totalInsuranceFormGroup.get('basicLife').enable();
                                    totalInsuranceFormGroup.get('basicLifeCurrency').enable();
                                    totalInsuranceFormGroup.get('accident').enable();
                                    totalInsuranceFormGroup.get('accidentCurrency').enable();
                                    totalInsuranceFormGroup.get('yearOfIssue').enable();
                                } else {
                                    totalInsuranceFormGroup.get('basicLife').reset();
                                    totalInsuranceFormGroup.get('basicLifeCurrency').reset();
                                    totalInsuranceFormGroup.get('accident').reset();
                                    totalInsuranceFormGroup.get('accidentCurrency').reset();
                                    totalInsuranceFormGroup.get('yearOfIssue').reset();

                                    totalInsuranceFormGroup.get('basicLife').disable();
                                    totalInsuranceFormGroup.get('basicLifeCurrency').disable();
                                    totalInsuranceFormGroup.get('accident').disable();
                                    totalInsuranceFormGroup.get('accidentCurrency').disable();
                                    totalInsuranceFormGroup.get('yearOfIssue').disable();

                                    totalInsuranceFormGroup.get('company').setErrors({ 'notApplicable' : true })
                                }
                            }
                        }
                    },
                    {
                        size: 1,
                        text: ''
                    }
                ]
            },
            {
                columns: [
                    {
                        size: 1,
                        text: ''
                    },
                    {
                        size: 2,
                        text: 'Basic Life Currency',
                        class: 'insdecl-mdl-content'
                    },
                    {
                        size: 1,
                        field: {
                            setFieldName: false,
                            //fieldName: 'Basic Life Currency',
                            type: 'select',
                            attName: 'basicLifeCurrency',
                            formGroup: totalInsuranceFormGroup,
                            interface: 'popover',
                            options: CURRENCY_OPTIONS
                        }
                    },
                    {
                        size: 1,
                        text: 'Amount',
                        class: 'insdecl-mdl-content'
                    },
                    {
                        size: 6,
                        field: {
                            setFieldName: false,
                            //fieldName: 'Amount',
                            type: 'number',
                            attName: 'basicLife',
                            attMaxLength: 7,
                            formGroup: totalInsuranceFormGroup
                        }
                    },
                    {
                        size: 1,
                        text: ''
                    }
                ]
            },
            {
                columns: [
                    {
                        size: 1,
                        text: ''
                    },
                    {
                        size: 2,
                        text: 'Accident Currency',
                        class: 'insdecl-mdl-content'
                    },
                    {
                        size: 1,
                        field: {
                            setFieldName: false,
                            //fieldName: 'Accident Currency',
                            type: 'select',
                            attName: 'accidentCurrency',
                            formGroup: totalInsuranceFormGroup,
                            interface: 'popover',
                            options: CURRENCY_OPTIONS
                        }
                    },
                    {
                        size: 1,
                        text: 'Amount',
                        class: 'insdecl-mdl-content'
                    },
                    {
                        size: 6,
                        field: {
                            setFieldName: false,
                            //fieldName: 'Amount',
                            type: 'number',
                            attName: 'accident',
                            formGroup: totalInsuranceFormGroup,
                            attMaxLength: 7

                        }
                    },
                    {
                        size: 1,
                        text: ''
                    }
                ]
            },
            {
                columns: [
                    {
                        size: 1,
                        text: ''
                    },
                    {
                        size: 2,
                        text: 'Year of Issue',
                        class: 'insdecl-mdl-content'
                    },
                    {
                        size: 8,
                        field: {
                            setFieldName: false,
                            //fieldName: 'Year of Issue',
                            type: 'date',
                            attName: 'yearOfIssue',
                            formGroup: totalInsuranceFormGroup,
                            dateFormat: 'YYYY',
                            dateFormatOutput: 'YYYY'
                        }
                    },
                    {
                        size: 1,
                        text: ''
                    }
                ]
            }
        ]
    },
    columns: [
        {
            formGrpCtrlName: 'company',
            columnName: 'Company'
        },
        {
            formGrpCtrlName: 'basicLifeCurrency',
            columnName: 'Basic Life Currency'
        },
        {
            formGrpCtrlName: 'basicLife',
            columnName: 'Basic Life Amount'
        },
        {
            formGrpCtrlName: 'accidentCurrency',
            columnName: 'Accident Currency',
        },
        {
            formGrpCtrlName: 'accident',
            columnName: 'Accident Amount',
        },
        {
            formGrpCtrlName: 'yearOfIssue',
            columnName: 'Year of Issue',
            field: {
                type: 'date',
                attName: 'yearOfIssue',
                dateFormat: 'YYYY',
                dateFormatOutput: 'YYYY'
            }
        }
    ]
};

export const polIntntdToChngeCol: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'radio',
        attName: 'policyIntentedToChange',
        formGroup: InsuranceDeclarationFormGroup,
        setFieldName: false,
        options: BOOLEAN
    }
};

export const premiumsPaidByLoadCol: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'radio',
        attName: 'premiumsPaidByLoad',
        formGroup: InsuranceDeclarationFormGroup,
        setFieldName: false,
        options: BOOLEAN
    }
};

export function checkTotInsInforcedTblData() {
    const totalInsuranceInforce = InsuranceDeclarationFormGroup.get('totalInsuranceInforce').value;

    if(totalInsuranceInforce.length === 0) {
        InsuranceDeclarationFormGroup.get('policyIntentedToChange').reset();
        InsuranceDeclarationFormGroup.get('premiumsPaidByLoad').reset();
        InsuranceDeclarationFormGroup.get('policyIntentedToChange').disable();
        InsuranceDeclarationFormGroup.get('premiumsPaidByLoad').disable();
    } else {
        InsuranceDeclarationFormGroup.get('policyIntentedToChange').enable();
        InsuranceDeclarationFormGroup.get('premiumsPaidByLoad').enable();
    }
}

export const DecProposedReplacementFormGroup: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                {
                    text: `Is the Policy applied for intended to change
                        or replace any existing insurance in force on the
                        life of Proposed Insured?`,
                    size: 8,
                    class: 'insdecl-mdl-content'
                },
                polIntntdToChngeCol
            ]
        },
        {
            columns: [
                {
                    text: `Will premiums for the insurance applied for
                        be paid by a policy loan, withdrawal, or surrender
                        from any existing policy?`,
                    size: 8,
                    class: 'insdecl-mdl-content'
                },
                premiumsPaidByLoadCol
            ]
        }
    ]
};

export function checkReplacmentNotification(isRequired: boolean = false) {
    if (isRequired) {
        const policyIntentedToChange = InsuranceDeclarationFormGroup.get('policyIntentedToChange').value;
        const premiumsPaidByLoad = InsuranceDeclarationFormGroup.get('premiumsPaidByLoad').value;

        if((policyIntentedToChange && policyIntentedToChange === 'Y') ||
            (premiumsPaidByLoad && premiumsPaidByLoad === 'Y')) {
            const replacementNotifications = InsuranceDeclarationFormGroup.get('replacementNotification').value;
            ReplacementNotificationTableSpecs.additionalValMsg = [];
            let errors = {};

            if (replacementNotifications.length === 0) {
                ReplacementNotificationTableSpecs.additionalValMsg.push('This is required');
                errors['required'] = true;
            }

            if (Object.keys(errors).length === 0)
                InsuranceDeclarationFormGroup.get('replacementNotification').setErrors(null);
            else
                InsuranceDeclarationFormGroup.get('replacementNotification').setErrors(errors);
        }else InsuranceDeclarationFormGroup.get('replacementNotification').setErrors(null);
    }
}

const replacementNotifFormGroup = new FormBuilder().group(ReplacementNotificationFGControls);
export const ReplacementNotificationTableSpecs: DynamicTableSpecs = {
    mainFormGroup: InsuranceDeclarationFormGroup,
    formArrayKey: 'replacementNotification',
    secondaryFormGroup: replacementNotifFormGroup,
    controlConfiguration: ReplacementNotificationFGControls,
    limit: 5,
    title: 'Replacement Notification Summary',
    subTitle: 'Replacement Notification Information',
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
                        size: 4,
                        text: 'Company'
                    },
                    {
                        size: 4,
                        text: 'Insured'
                    },
                    {
                        size: 4,
                        text: 'Policy Number'
                    },
                    {
                        size: 4,
                        text: 'Amount of Insurance Being Replaced'
                    }
                ]
            },
            {
                columns: [
                    {
                        size: 4,
                        field: {
                            type: 'text',
                            attName: 'company',
                            attMaxLength: 100,
                            formGroup: replacementNotifFormGroup
                        }
                    },
                    {
                        size: 4,
                        field: {
                            type: 'text',
                            attName: 'afcInsured',
                            attMaxLength: 100,
                            formGroup: replacementNotifFormGroup
                        }
                    },
                    {
                        size: 4,
                        field: {
                            type: 'text',
                            attName: 'policyNo',
                            attMaxLength: 100,
                            formGroup: replacementNotifFormGroup
                        }
                    },
                    {
                        size: 1,
                        field: {
                            type: 'select',
                            attName: 'amountInsuranceReplacedCurrency',
                            formGroup: replacementNotifFormGroup,
                            interface: 'popover',
                            options: CURRENCY_OPTIONS
                        }
                    },
                    {
                        size: 3,
                        field: {
                            type: 'number',
                            attName: 'amountInsuranceReplaced',
                            attMaxLength: 7,
                            formGroup: replacementNotifFormGroup
                        }
                    }
                ]
            }
        ]
    },
    columns: [
        {
            formGrpCtrlName: 'company',
            columnName: 'Company'
        },
        {
            formGrpCtrlName: 'afcInsured',
            columnName: 'Insured'
        },
        {
            formGrpCtrlName: 'policyNo',
            columnName: 'Policy Number'
        },
        {
            formGrpCtrlName: 'amountInsuranceReplacedCurrency',
            columnName: 'Amount Currency'
        },
        {
            formGrpCtrlName: 'amountInsuranceReplaced',
            columnName: 'Amount of Insurance Being Replaced'
        }
    ],
    isHidden: true
};

export const DecProposedReplacementReminderNoteColSpecs: ColumnGeneratorSpecs = {
    // * do not format/pre-wrap the following text
    // tslint:disable-next-line: max-line-length
    text: 
    `REMINDER:\tIt is usually disadvantageous to REPLACE existing life insurance policy(ies) with a new one. Some disadvantages are: 
    \t\t\t1) You may not be insurable on standard terms
    \t\t\t2) You may have to pay a higher Premium in view of higher age
    \t\t\t3) You may lose financial benefits
    \t\t\tPlease note that in your own interest, we would advise that you consult your present insurer before making a final decision. 
    \t\t\tHear from both sides and make a careful comparison. You can then be sure that you are making a decision that is in your best interest.` ,
    class: 'note-warning column-text-pre-wrap'
};

export const DecProposedReplacementReminderNoteRow: RowGeneratorSpecs = {
    columns: [DecProposedReplacementReminderNoteColSpecs]
};

export const InsuranceDeclarationNextButtonCol: ColumnGeneratorSpecs = {
    push: 10,
    size: 2,
    button: {
        title: 'next',
        fill: 'solid',
        color: 'primary',
        expand: 'block'
    }
};

export const InsuranceDeclarationNextButtonRow: RowGeneratorSpecs = {
    columns: [InsuranceDeclarationNextButtonCol]
};

//readOnly
export const hasPndingAppReadOnlyCol: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attName: 'hasPendingApplication',
        formGroup: InsuranceDeclarationFormGroup,
        readOnlySpecs: {
            type: 'yesNo'
        }
    }
};

export const hadInsuranceApplicationReadOnlyCol: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attName: 'hadInsuranceApplication',
        formGroup: InsuranceDeclarationFormGroup,
        readOnlySpecs: {
            type: 'yesNo'
        }
    }
}

export const LifeInsuranceQuestionsFormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                {
                    text: `Within the last 2 years, have you ever had
                        any application or reinstatement of life, health,
                        or accident insurance which was declined, rated,
                        postponed, withdrawn or in any way modified?`,
                    size: 8
                },
                hadInsuranceApplicationReadOnlyCol
            ]
        },
        {// FIELDS: hasPendingApplication
            columns: [
                {
                    text: `Any pending applications or inforce policies
                        with Allianz PNB Life Insurance, Inc. or another
                        life insurance company?`,
                    size: 8
                },
                hasPndingAppReadOnlyCol
            ]
        }
    ]
};

export const PolicyWillBePaidBeOthersReadOnlyColumn: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attName: 'policyWillBePaidBeOthers',
        formGroup: InsuranceDeclarationFormGroup,
        readOnlySpecs: {
            type: 'yesNo'
        }
    }
};

export const PolicyWillBePaidBeOthersDetailsReadOnlyColumn: ColumnGeneratorSpecs = {
    size: 8,
    field: {
        type: 'readOnly',
        attMaxLength: 50,
        attName: 'policyWillBePaidBeOthersMoreDetails',
        fieldName: 'Payment of Policy Details',
        setFieldName: true,
        formGroup: InsuranceDeclarationFormGroup
    },
    isHidden: true
};

export const LifeInsuranceQuestions2FormReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                {
                    text: `If the Proposed Insured is a homemaker(not working),
                        what amount of life insurance is now inforce on the spouse?`
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 16,
                        attName: 'spouseInforcedAmount',
                        formGroup: InsuranceDeclarationFormGroup,
                    }
                }
            ]
        },
        {
            columns: [
                {
                    text: `If the Proposed Insured is below 18 years old,
                        what amount of life insurance is now inforce on the
                        proposed insured's parents in all companies?`
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attMaxLength: 16,
                        attName: 'minorInforcedInsuranceAmount',
                        formGroup: InsuranceDeclarationFormGroup,
                    }
                }
            ]
        },
        {
            columns: [
                {
                    text: `Will anyone other than the Proposed Insured
                        and/or Owner/payor will be paying for this policy?`
                },
            ]
        },
        {
            columns: [PolicyWillBePaidBeOthersReadOnlyColumn, PolicyWillBePaidBeOthersDetailsReadOnlyColumn]
        }
    ]
};

export const polIntntdToChngeReadOnlyCol: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attName: 'policyIntentedToChange',
        formGroup: InsuranceDeclarationFormGroup,
        readOnlySpecs: {
            type: 'yesNo'
        }
    }
};

export const premiumsPaidByLoadReadOnlyCol: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'readOnly',
        attName: 'premiumsPaidByLoad',
        formGroup: InsuranceDeclarationFormGroup,
        readOnlySpecs: {
            type: 'yesNo'
        }
    }
};

export const DecProposedReplacementFormReadOnlyGroup: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                {
                    text: `Is the Policy applied for intended to change
                        or replace any existing insurance in force on the
                        life of Proposed Insured?`,
                    size: 8,
                    class: 'insdecl-mdl-content'
                },
                polIntntdToChngeReadOnlyCol
            ]
        },
        {
            columns: [
                {
                    text: `Will premiums for the insurance applied for
                        be paid by a policy loan, withdrawal, or surrender
                        from any existing policy?`,
                    size: 8,
                    class: 'insdecl-mdl-content'
                },
                premiumsPaidByLoadReadOnlyCol
            ]
        }
    ]
};

export const DecProposedReplacement2FormReadOnlyGroup: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                {
                    text: `Is the Policy applied for intended to change
                        or replace any existing insurance in force on the
                        life of Proposed Insured?`,
                    size: 8,
                    class: 'insdecl-mdl-content'
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'interPolicyIntentedToChange',
                        formGroup: InsuranceDeclarationFormGroup,
                        readOnlySpecs: {
                            type: 'yesNo'
                        }
                    }
                }
            ]
        },
        {
            columns: [
                {
                    text: `Will premiums for the insurance applied for
                        be paid by a policy loan, withdrawal, or surrender
                        from any existing policy?`,
                    size: 8,
                    class: 'insdecl-mdl-content'
                },
                {
                    size: 4,
                    field: {
                        type: 'readOnly',
                        attName: 'interPremiumsPaidByLoad',
                        formGroup: InsuranceDeclarationFormGroup,
                        readOnlySpecs: {
                            type: 'yesNo'
                        }
                    }
                }
            ]
        }
    ]
};
//end readonly