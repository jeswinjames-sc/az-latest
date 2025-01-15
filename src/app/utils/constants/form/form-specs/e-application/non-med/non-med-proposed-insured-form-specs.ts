import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { NonMedFormGroup } from '@form-group/e-app/non-med-form-group';
import { MEMBER_COUNT, MEMBER_COUNT_READ_ONLY } from '@utils/constants/options/segment/e-app-options';
import { FieldSpecs } from '@models/specs/field-specs';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { MESSAGE } from '@utils/constants/string/message';

export const NonMedQuesFormTitleRow: RowGeneratorSpecs = { // TITLE: non-med proposed insured
    columns: [{ text: 'Non-Medical Questions for Proposed Insured' }],
    class: 'form-sub-section-title'
}

export const CancerTypeColSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'cancerTypeCount',
        type: 'text',
        attMaxLength: 50,
        setFieldName: false,
        formGroup: NonMedFormGroup
    },
    size: 3
}

export const CancerFamilyCountColSpecs: ColumnGeneratorSpecs = {
    field: {
        attName: 'cancerFamilyCount',
        type: 'radio',
        setFieldName: false,
        options: MEMBER_COUNT,
        formGroup: NonMedFormGroup,
        isNmedPbrTableField: true,
        class: 'global-grid-center'
    },
    size: 6
}

export const FamilyHistoryFormSpecs: FormGeneratorSpecs = {
    rows: [
        { // TITLE: build ...
            columns: [{ text: 'Family History of the Proposed Insured' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                {
                    template: `
                        <table style="width: 100%;" border="0" cellpadding="0">
                            <tr>
                                <td width="10"></td>
                                <td>
                                    <img width="55" align="center" src="assets/images/common/exclamation-warning.png"/>
                                </td>
                                <td width="7"></td>
                                <td>
                                    Please declare if any of your
                                    immediate family members (father, mother  and siblings) developed
                                    the following conditions before the
                                    age of 60.
                                </td>
                            </tr>
                        </table>
                    `,
                    class: 'nmed-pbr-note'
                },
            ]
        },
        NonMedQuesFormTitleRow,
        { // TABLE HEADERS
            columns: [
                { text: 'Condition', size: 6 },
                { text: 'Not Applicable', size: 2 },
                { text: '1 Member', size: 2 },
                { text: '2 or more members', size: 2 }
            ],
            class: 'nmed-pbr-table-header'
        },
        { // Cardiovascular
            columns: [
                { text: 'Cardiovascular Disease / Coronary Artery Disease / Myocardial Infraction / Hypertension', size: 6 },
                {
                    field: {
                        attName: 'cardiovascularDisFamilyCount',
                        type: 'radio',
                        setFieldName: false,
                        options: MEMBER_COUNT,
                        formGroup: NonMedFormGroup,
                        isNmedPbrTableField: true,
                        isNmedPbrTableFieldOdd: true,
                        class: 'global-grid-center'
                    },
                    size: 6
                }
            ],
            class: 'nmed-pbr-table-content-odd'
        },
        { // Cerebrovascular
            columns: [
                { text: 'Cerebrovascular Disease / Stroke', size: 6 },
                {
                    field: {
                        attName: 'cerebrovascularDisFamilyCount',
                        type: 'radio',
                        setFieldName: false,
                        options: MEMBER_COUNT,
                        formGroup: NonMedFormGroup,
                        isNmedPbrTableField: true,
                        class: 'global-grid-center'
                    },
                    size: 6
                }
            ],
            class: 'nmed-pbr-table-content-even'
        },
        { // Diabetes
            columns: [
                { text: 'Diabetes Mellitus', size: 6 },
                {
                    field: {
                        attName: 'diabetesFamilyCount',
                        type: 'radio',
                        setFieldName: false,
                        options: MEMBER_COUNT,
                        formGroup: NonMedFormGroup,
                        isNmedPbrTableField: true,
                        isNmedPbrTableFieldOdd: true,
                        class: 'global-grid-center'
                    },
                    size: 6
                }
            ],
            class: 'nmed-pbr-table-content-odd'
        },
        { // Alzheimer
            columns: [
                { text: 'Alzheimer\'s / Parkinson\'s Disease', size: 6 },
                {
                    field: {
                        attName: 'alzheimersFamilyCount',
                        type: 'radio',
                        setFieldName: false,
                        options: MEMBER_COUNT,
                        formGroup: NonMedFormGroup,
                        isNmedPbrTableField: true,
                        class: 'global-grid-center'
                    },
                    size: 6
                }
            ],
            class: 'nmed-pbr-table-content-even'
        },
        { // Polycystic
            columns: [
                { text: 'Polycystic Kidney Disease', size: 6 },
                {
                    field: {
                        attName: 'kidneyDisFamilyCount',
                        type: 'radio',
                        setFieldName: false,
                        options: MEMBER_COUNT,
                        formGroup: NonMedFormGroup,
                        isNmedPbrTableField: true,
                        isNmedPbrTableFieldOdd: true,
                        class: 'global-grid-center'
                    },
                    size: 6
                }
            ],
            class: 'nmed-pbr-table-content-odd'
        },
        { // Cancer
            columns: [
                { text: 'Cancer specify type:', size: 3 },
                CancerTypeColSpecs,
                CancerFamilyCountColSpecs
            ],
            class: 'nmed-pbr-table-content-even'
        }
    ]
}

export function convertCMtoFTandIN(cmValue){
    // convert CM to IN
    let convertedToInches = Math.round((Number(cmValue) / 2.54) * 100) / 100;
    // get FT, no decimal
    let convertedFeet = Math.floor(convertedToInches / 12);
    // get remaining IN
    let remainingInches = Math.round((convertedToInches % 12) * 100) / 100;

    NonMedFormGroup.get('heightFT').setValue(convertedFeet)
    NonMedFormGroup.get('heightIN').setValue(remainingInches) 
}

function convertFTandINtoCM(measurement: string, value){
    let feet = measurement == 'ft' ? value : NonMedFormGroup.get('heightFT').value;
    let inches = measurement == 'in' ? value : NonMedFormGroup.get('heightIN').value;
    let totalInches = Number(inches) + (Number(feet) * 12)
    let convertedCentimeter = Math.round((totalInches * 2.54) * 100) / 100;

    NonMedFormGroup.get('heightCM').setValue(convertedCentimeter);
}

export function checkBMI() {
    let height = Number(NonMedFormGroup.get('heightCM').value) || 0;
    let weight = Number(NonMedFormGroup.get('weightKG').value) || 0;
    let bmi = Math.round(weight/(Math.pow(height/100, 2)) * 100)/100;
    const affectedFields = ['heightCM','weightKG'];

    if(bmi < 10 || Number.isNaN(bmi)) {
        affectedFields.forEach(field => {
            NonMedFormGroup.get(field).setErrors({ 'minBMI': true});
            NonMedFormGroup.get(field).markAsTouched();
        });

    } else if (bmi > 50) {
        affectedFields.forEach(field => {
            NonMedFormGroup.get(field).setErrors({ 'maxBMI': true});
            NonMedFormGroup.get(field).markAsTouched();
        });
    } else {
        affectedFields.forEach(field => {
            NonMedFormGroup.get(field).updateValueAndValidity();
        });
    }
}

export const NonMedProposedInsuredFormSpecs: FormGeneratorSpecs = {
    rows: [
        { // TITLE: build ...
            columns: [{ text: 'Build - Proposed Insured' }],
            class: 'form-sub-section-title'
        },
        { // FIELDS: height
            columns: [
                {
                    size: 3,
                    field: {
                        formGroup: NonMedFormGroup,
                        attName: 'heightCM',
                        fieldName: 'Height(cm)',
                        type: 'number',
                        setFieldName: true,
                        keyUpFunction: (ev:any) => {
                            convertCMtoFTandIN(ev);
                        },
                        conditionalFunction: () => {
                            checkBMI();
                        }
                    }
                },
                {
                    size: 2,
                    field: {
                        formGroup: NonMedFormGroup,
                        attName: 'heightFT',
                        fieldName: '(ft)',
                        type: 'number',
                        setFieldName: true,
                        keyUpFunction: (ev:any) => {
                            convertFTandINtoCM('ft', ev);
                        },
                        conditionalFunction: () => {
                            checkBMI();
                        }
                    }
                },
                {
                    size: 2,
                    field: {
                        formGroup: NonMedFormGroup,
                        attName: 'heightIN',
                        fieldName: '(in)',
                        type: 'number',
                        setFieldName: true,
                        keyUpFunction: (ev:any) => {
                            convertFTandINtoCM('in', ev);
                        },
                        conditionalFunction: () => {
                            checkBMI();
                        }
                    }
                }
            ]
        },
        { // FIELDS: weight
            columns: [
                {
                    size: 3,
                    field: {
                        formGroup: NonMedFormGroup,
                        attName: 'weightKG',
                        fieldName: 'Weight (kg)',
                        attMaxLength: 3,
                        type: 'number',
                        setFieldName: true,
                        keyUpFunction: (ev:any) => {

                            let kg = ev
                            let convertedLBS = Math.round((Number(kg) / 0.453592) * 100) / 100;

                            NonMedFormGroup.get('weightLBS').setValue(convertedLBS)

                        },
                        conditionalFunction: () => {
                            checkBMI();
                        }
                    }
                },
                {
                    size: 2,
                    field: {
                        formGroup: NonMedFormGroup,
                        attName: 'weightLBS',
                        fieldName: '(lbs)',
                        type: 'number',
                        setFieldName: true,
                        keyUpFunction: (ev:any) => {

                            let lbs = ev
                            let convertedKG = Math.round((Number(lbs) * 0.453592) * 100) / 100;

                            NonMedFormGroup.get('weightKG').setValue(convertedKG)

                        },
                        conditionalFunction: () => {
                            checkBMI();
                        }

                    }
                }
            ]
        }
    ]
}

export const CancerTypeReadOnly: ColumnGeneratorSpecs = {
    field: {
        attName: 'cancerTypeCount',
        type: 'readOnly',
        attMaxLength: 50,
        setFieldName: false,
        formGroup: NonMedFormGroup
    },
    size: 3
}

export const CancerFamilyCountReadOnly: ColumnGeneratorSpecs = {
    field: {
        attName: 'cancerFamilyCount',
        type: 'readOnly',
        setFieldName: false,
        formGroup: NonMedFormGroup,
        readOnlySpecs: {
            type: 'default',
            listOfKeyValues: MEMBER_COUNT_READ_ONLY
        }
    },
    size: 6
}

export const FamilyHistoryReadOnlySpecs: FormGeneratorSpecs = {
    rows: [
        { // TITLE: build ...
            columns: [{ text: 'Family History of the Proposed Insured' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                {
                    template: `
                        <table style="width: 100%;" border="0" cellpadding="0">
                            <tr>
                                <td width="10"></td>
                                <td>
                                    <img width="55" align="center" src="assets/images/common/exclamation-warning.png"/>
                                </td>
                                <td width="7"></td>
                                <td>
                                    Please declare if any of your
                                    immediate family members (father, mother  and siblings) developed
                                    the following conditions before the
                                    age of 60.
                                </td>
                            </tr>
                        </table>
                    `,
                    class: 'nmed-pbr-note'
                },
            ]
        },
        {    
            columns: [{ text: 'Non-Medical Questions for Proposed Insured' }],
            class: 'form-sub-section-title'
        },
        { // TABLE HEADERS
            columns: [
                { text: 'Condition', size: 6 },
                { text: 'Not Applicable / 1 Member / 2 or more members', size: 6 }
            ],
            class: 'nmed-pbr-table-header'
        },
        { // Cardiovascular
            columns: [
                { text: 'Cardiovascular Disease / Coronary Artery Disease / Myocardial Infraction / Hypertension', size: 6 },
                {
                    field: {
                        attName: 'cardiovascularDisFamilyCount',
                        type: 'readOnly',
                        setFieldName: false,
                        formGroup: NonMedFormGroup,
                        readOnlySpecs: {
                            type: 'default',
                            listOfKeyValues: MEMBER_COUNT_READ_ONLY
                        },
                        isNmedPbrTableField: true,
                        isNmedPbrTableFieldOdd: true,
                        class: 'global-grid-center'
                    },
                    size: 6
                }
            ],
            class: 'nmed-pbr-table-content-odd'
        },
        { // Cerebrovascular
            columns: [
                { text: 'Cerebrovascular Disease / Stroke', size: 6 },
                {
                    field: {
                        attName: 'cerebrovascularDisFamilyCount',
                        type: 'readOnly',
                        setFieldName: false,
                        options: MEMBER_COUNT,
                        formGroup: NonMedFormGroup,
                        readOnlySpecs: {
                            type: 'default',
                            listOfKeyValues: MEMBER_COUNT_READ_ONLY
                        },
                        isNmedPbrTableField: true,
                        class: 'global-grid-center'
                    },
                    size: 6
                }
            ],
            class: 'nmed-pbr-table-content-even'
        },
        { // Diabetes
            columns: [
                { text: 'Diabetes Mellitus', size: 6 },
                {
                    field: {
                        attName: 'diabetesFamilyCount',
                        type: 'readOnly',
                        setFieldName: false,
                        options: MEMBER_COUNT,
                        formGroup: NonMedFormGroup,
                        readOnlySpecs: {
                            type: 'default',
                            listOfKeyValues: MEMBER_COUNT_READ_ONLY
                        },
                        isNmedPbrTableField: true,
                        isNmedPbrTableFieldOdd: true,
                        class: 'global-grid-center'
                    },
                    size: 6
                }
            ],
            class: 'nmed-pbr-table-content-odd'
        },
        { // Alzheimer
            columns: [
                { text: 'Alzheimer\'s / Parkinson\'s Disease', size: 6 },
                {
                    field: {
                        attName: 'alzheimersFamilyCount',
                        type: 'readOnly',
                        setFieldName: false,
                        options: MEMBER_COUNT,
                        formGroup: NonMedFormGroup,
                        readOnlySpecs: {
                            type: 'default',
                            listOfKeyValues: MEMBER_COUNT_READ_ONLY
                        },
                        isNmedPbrTableField: true,
                        class: 'global-grid-center'
                    },
                    size: 6
                }
            ],
            class: 'nmed-pbr-table-content-even'
        },
        { // Polycystic
            columns: [
                { text: 'Polycystic Kidney Disease', size: 6 },
                {
                    field: {
                        attName: 'kidneyDisFamilyCount',
                        type: 'readOnly',
                        setFieldName: false,
                        options: MEMBER_COUNT,
                        formGroup: NonMedFormGroup,
                        readOnlySpecs: {
                            type: 'default',
                            listOfKeyValues: MEMBER_COUNT_READ_ONLY
                        },
                        isNmedPbrTableField: true,
                        isNmedPbrTableFieldOdd: true,
                        class: 'global-grid-center'
                    },
                    size: 6
                }
            ],
            class: 'nmed-pbr-table-content-odd'
        },
        { // Cancer
            columns: [
                { text: 'Cancer specify type:', size: 3 },
                CancerTypeReadOnly,
                CancerFamilyCountReadOnly
            ],
            class: 'nmed-pbr-table-content-even'
        }
    ]
}


export const NonMedNextButtonCol: ColumnGeneratorSpecs = {
    push: 10,
    size: 2,
    button: {
        title: 'next',
        fill: 'solid',
        color: 'primary',
        expand: 'block'
    }
};

export const NonMedNextButtonRow: RowGeneratorSpecs = {
    columns: [NonMedNextButtonCol]
};

export const NonMedSubmitButtonCol: ColumnGeneratorSpecs = {
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

export const NonMedSubmitButtonRow: RowGeneratorSpecs = {
    columns: [NonMedSubmitButtonCol]
};