import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { NAFormGroup, ApplicantOwnerFormGroup } from '@form-group/signature-page/signature-page-form-group';
import { GenericFormSpecs } from '@form-specs/signature-page/generic-form-specs';
import {signaturePad} from '@form-specs/signature-page/contents/signature-pad';

export const ProtectionColumnGeneratorSpecs: Array<ColumnGeneratorSpecs> = [
        {
            template: `<table>
                            <tr>
                                <td><strong>Goal:</strong></td>
                                <td>Income Replacement</td>
                                <td><strong>Generated Date:</strong></td>
                                <td>`+NAFormGroup.get('generatedDate').value+`</td>
                            </tr>
                            <tr>
                                <td><strong>Current Monthly Income:</strong></td>
                                <td>`+NAFormGroup.get('currentMonthlyIncome').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><strong>Income Replacement Period:</strong></td>
                                <td>`+NAFormGroup.get('incomeReplacementPeriod').value+` years</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><strong>Savings:</strong></td>
                                <td>`+NAFormGroup.get('savings').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><strong>Assumed Income Growth Rate:</strong></td>
                                <td>5%</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><strong>Goal Value in 3 yrs</strong></td>
                                <td><strong>Goal Value in 5 yrs</strong></td>
                                <td><strong>Goal Value in 10 yrs</strong></td>
                            </tr>
                            <tr>
                                <td>Current Goal Value</td>
                                <td>`+NAFormGroup.get('currentGoalValueThirdYear').value+`</td>
                                <td>`+NAFormGroup.get('currentGoalValueFifthYear').value+`</td>
                                <td>`+NAFormGroup.get('currentGoalValueTenthYear').value+`</td>
                            </tr>
                            <tr>
                                <td>Future Goal Value</td>
                                <td>`+NAFormGroup.get('futureGoalValueThirdYear').value+`</td>
                                <td>`+NAFormGroup.get('futureGoalValueFifthYear').value+`</td>
                                <td>`+NAFormGroup.get('futureGoalValueTenthYear').value+`</td>
                            </tr>
                            <tr>
                                <td>Savings</td>
                                <td>`+NAFormGroup.get('savingsThirdYear').value+`</td>
                                <td>`+NAFormGroup.get('savingsFifthYear').value+`</td>
                                <td>`+NAFormGroup.get('savingsTenthYear').value+`</td>
                            </tr>
                            <tr>
                                <td>Savings Gap</td>
                                <td>`+NAFormGroup.get('savingsGapThirdYear').value+`</td>
                                <td>`+NAFormGroup.get('savingsGapFifthYear').value+`</td>
                                <td>`+NAFormGroup.get('savingsGapTenthYear').value+`</td>
                            </tr>
                            <tr>
                                <td>How much do you need to set aside now?</td>
                                <td>`+NAFormGroup.get('currentSavingsThirdYear').value+`</td>
                                <td>`+NAFormGroup.get('currentSavingsFifthYear').value+`</td>
                                <td>`+NAFormGroup.get('currentSavingsTenthYear').value+`</td>
                            </tr>
                            <tr>
                                <td>How much do you need to set aside annually?</td>
                                <td>`+NAFormGroup.get('annualSavingsThirdYear').value+`</td>
                                <td>`+NAFormGroup.get('annualSavingsFifthYear').value+`</td>
                                <td>`+NAFormGroup.get('annualSavingsTenthYear').value+`</td>
                            </tr>
                       </table>`
        }
]

export const HealthFundColumnGeneratorSpecs: Array<ColumnGeneratorSpecs> = [
        {
            template: `<table>
                            <tr>
                                <td><strong>Goal:</strong></td>
                                <td>Health Fund</td>
                                <td><strong>Generated Date:</strong></td>
                                <td>`+NAFormGroup.get('generatedDate').value+`</td>
                            </tr>
                            <tr>
                                <td><strong>Desired Health Fund:</strong></td>
                                <td>`+NAFormGroup.get('desiredHealthFund').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><strong>Savings:</strong></td>
                                <td>`+NAFormGroup.get('savings').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><strong>Goal Value in 3 yrs</strong></td>
                                <td><strong>Goal Value in 5 yrs</strong></td>
                                <td><strong>Goal Value in 10 yrs</strong></td>
                            </tr>
                            <tr>
                                <td>Current Goal Value</td>
                                <td>`+NAFormGroup.get('currentGoalValueThirdYear').value+`</td>
                                <td>`+NAFormGroup.get('currentGoalValueFifthYear').value+`</td>
                                <td>`+NAFormGroup.get('currentGoalValueTenthYear').value+`</td>
                            </tr>
                            <tr>
                                <td>Savings</td>
                                <td>`+NAFormGroup.get('savingsThirdYear').value+`</td>
                                <td>`+NAFormGroup.get('savingsFifthYear').value+`</td>
                                <td>`+NAFormGroup.get('savingsTenthYear').value+`</td>
                            </tr>
                            <tr>
                                <td>Savings Gap</td>
                                <td>`+NAFormGroup.get('savingsGapThirdYear').value+`</td>
                                <td>`+NAFormGroup.get('savingsGapFifthYear').value+`</td>
                                <td>`+NAFormGroup.get('savingsGapTenthYear').value+`</td>
                            </tr>
                            <tr>
                                <td>How much do you need to set aside now?</td>
                                <td>`+NAFormGroup.get('currentSavingsThirdYear').value+`</td>
                                <td>`+NAFormGroup.get('currentSavingsFifthYear').value+`</td>
                                <td>`+NAFormGroup.get('currentSavingsTenthYear').value+`</td>
                            </tr>
                            <tr>
                                <td>How much do you need to set aside annually?</td>
                                <td>`+NAFormGroup.get('annualSavingsThirdYear').value+`</td>
                                <td>`+NAFormGroup.get('annualSavingsFifthYear').value+`</td>
                                <td>`+NAFormGroup.get('annualSavingsTenthYear').value+`</td>
                            </tr>
                       </table>`
        }
]

export const EducationColumnGeneratorSpecs: Array<ColumnGeneratorSpecs> = [
        {
            template: `<table>
                            <tr>
                                <td><strong>Goal:</strong></td>
                                <td>Education Fund</td>
                                <td><strong>Generated Date:</strong></td>
                                <td>`+NAFormGroup.get('generatedDate').value+`</td>
                            </tr>
                            <tr>
                                <td><strong>School:</strong></td>
                                <td>Under Graduate Local</td>
                                <td><strong>Annual Tuition Fee:</strong></td>
                                <td>`+NAFormGroup.get('annualTuitionFee').value+`</td>
                            </tr>
                            <tr>
                                <td><strong>Assumed Tuition Fee Increase Rate:</strong></td>
                                <td>7%</td>
                                <td><strong>Child's Age:</strong></td>
                                <td>`+NAFormGroup.get('childAge').value+`</td>
                            </tr>
                            <tr>
                                <td><strong>Age at Freshman Year:</strong></td>
                                <td>`+NAFormGroup.get('childAgeFreshman').value+`</td>
                                <td><strong>Years in College:</strong></td>
                                <td>`+NAFormGroup.get('collegeYearsCount').value+` years</td>
                            </tr>
                            <tr>
                                <td><strong>Savings:</strong></td>
                                <td>`+NAFormGroup.get('savings').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><strong>Goal Value in `+NAFormGroup.get('goalValueInYears').value+` years:</strong></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Current Goal Value</td>
                                <td>`+NAFormGroup.get('currentGoalValue').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Future Goal Value</td>
                                <td>`+NAFormGroup.get('futureGoalValue').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Savings</td>
                                <td>`+NAFormGroup.get('savingsGoalValue').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Savings Gap</td>
                                <td>`+NAFormGroup.get('savingsGap').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>How much do you need to set aside now?</td>
                                <td>`+NAFormGroup.get('currentSavings').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>How much do you need to set aside annually?</td>
                                <td>`+NAFormGroup.get('annualSavings').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                       </table>`
        }
]

export const RetirementColumnGeneratorSpecs: Array<ColumnGeneratorSpecs> = [
        {
            template: `<table>
                            <tr>
                                <td><strong>Goal:</strong></td>
                                <td>Retirement Fund</td>
                                <td><strong>Generated Date:</strong></td>
                                <td>`+NAFormGroup.get('generatedDate').value+`</td>
                            </tr>
                            <tr>
                                <td><strong>Current Monthly Expenses:</strong></td>
                                <td>`+NAFormGroup.get('currentMonthlyExpenses').value+`</td>
                                <td><strong>Inflation Rate:</strong></td>
                                <td>5%</td>
                            </tr>
                            <tr>
                                <td><strong>Years to Retirement:</strong></td>
                                <td>`+NAFormGroup.get('yearsToRetirement').value+` years</td>
                                <td><strong>Age at Retirement:</strong></td>
                                <td>`+NAFormGroup.get('retirementAge').value+`</td>
                            </tr>
                            <tr>
                                <td><strong>Retirement Period:</strong></td>
                                <td>`+NAFormGroup.get('retirementPeriod').value+`</td>
                                <td><strong>Savings:</strong></td>
                                <td>`+NAFormGroup.get('savings').value+`</td>
                            </tr>
                            <tr>
                                <td><strong>Goal Value in `+NAFormGroup.get('goalValueInYears').value+` years:</strong></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Current Goal Value</td>
                                <td>`+NAFormGroup.get('currentGoalValue').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Future Goal Value</td>
                                <td>`+NAFormGroup.get('futureGoalValue').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Savings</td>
                                <td>`+NAFormGroup.get('savingsGoalValue').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Savings Gap</td>
                                <td>`+NAFormGroup.get('savingsGap').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>How much do you need to set aside now?</td>
                                <td>`+NAFormGroup.get('currentSavings').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>How much do you need to set aside annually?</td>
                                <td>`+NAFormGroup.get('annualSavings').value+`</td>
                                <td></td>
                                <td></td>
                            </tr>
                       </table>`
        }
]

export const EstatePlanningColumnGeneratorSpecs: Array<ColumnGeneratorSpecs> = [
        {
            template: `<table>
                            <tr>
                                <td><strong>Goal:</strong></td>
                                <td>Estate Tax Protection</td>
                                <td><strong>Generated Date:</strong></td>
                                <td>`+NAFormGroup.get('generatedDate').value+`</td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><strong>Estate Details</strong></td>
                                <td><strong>Assumed Appreciation Rate</strong></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Cash:</td>
                                <td>`+NAFormGroup.get('estateDtlCash').value+` years</td>
                                <td>0%</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Real Estate:</td>
                                <td>`+NAFormGroup.get('estateDtlRealEstate').value+`</td>
                                <td>5%</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Stock and Bonds:</td>
                                <td>`+NAFormGroup.get('estateDtlStockAndBonds').value+`</td>
                                <td>3%</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Other Assets:</td>
                                <td>`+NAFormGroup.get('estateDtlOtherAssets').value+`</td>
                                <td>3%</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td><strong>Goal Value in 5, 10 and 20 Years</strong></td>
                                <td><strong>Total Estate Value</strong></td>
                                <td><Strong>Estate Tax</strong></td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>Current Year</td>
                                <td>`+NAFormGroup.get('totalEstateValueCurrentYear').value+`</td>
                                <td>`+NAFormGroup.get('estateTaxCurrentYear').value+`</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>5 Years</td>
                                <td>`+NAFormGroup.get('totalEstateValueFifthYear').value+`</td>
                                <td>`+NAFormGroup.get('estateTaxFifthYear').value+`</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>10 Years</td>
                                <td>`+NAFormGroup.get('totalEstateValueTenthYear').value+`</td>
                                <td>`+NAFormGroup.get('estateTaxTenthYear').value+`</td>
                                <td></td>
                            </tr>
                            <tr>
                                <td>20 Years</td>
                                <td>`+NAFormGroup.get('totalEstateValueTwentiethYear').value+`</td>
                                <td>`+NAFormGroup.get('estateTaxTwentiethYear').value+`</td>
                                <td></td>
                            </tr>
                       </table>`
        }
]

export const NAContentRowGeneratorSpecs: Array<RowGeneratorSpecs> = [
        {
            columns: [
                {
                    field: {
                        setFieldName: false,
                        attName: "needsAnalysisCheck",
                        fieldName: `I have read and understood...`,
                        type: "checkbox",
                        formGroup: ApplicantOwnerFormGroup
                    }
                }
            ]
        }
    ]

export const NARowGeneratorSpecs: RowGeneratorSpecs = {
	columns: [
	    { text: 'Needs Analysis', size: 10 },
	    {
	        button: {
	            fill: 'clear',
	            color: 'primary',
	            icon: 'document',
	            function: () => {
                signaturePad.show = false;


	            }
	        },
	        size: 2
	    }
	],
	class: 'panel-listings'
}