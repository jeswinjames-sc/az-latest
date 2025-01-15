import { FormGroup, Validators } from '@angular/forms';
import { NonMedPBRFormGroup, DetoxDoctorsFormGroup, AlcoholDoctorsFormGroup } from '@form-group/e-app/non-med-pbr-form-group';

import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { DynamicTableSpecs } from '@models/specs/dynamic-table-specs';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';

import { DetoxDoctorsFGControls, AlcoholDoctorsFGControlsConfig } from '@fg-controls/e-app';

import { BOOLEAN } from '@utils/constants/options/segment/boolean';
import { SYMPTOMS } from '@utils/constants/symptoms';
import { FieldSpecs } from '@models/specs/field-specs';
import * as SymptomSpecs from '@form/column-specs/e-application/symptoms-pbr-col-specs';
import { NON_MED_MEDICAL_CONDITIONS } from '@utils/constants/options/select/e-application/non-med-question/med-conditions';

export const withFindingsNote: RowGeneratorSpecs = {
    columns: [
        {
            text: `Please declare details of your findings
            or diagnosis on the following questions`,
            class: 'note'
        }
    ],
    isHidden: true
};

export const MedConsultationCol: ColumnGeneratorSpecs = {
    size: 8,
    field: {
        type: 'checkbox',
        attName: 'medConsultation',
        fieldName: 'Medical consultation, including Annual Physical Exams or Executive Check-ups',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const MedConditionsCol: ColumnGeneratorSpecs = {
    size: 8,
    field: {
        type: 'select',
        attName: 'medConditions',
        formGroup: NonMedPBRFormGroup,
        setFieldName: true,
        fieldName: "Medical Conditions",
        isMultiple: true,
        options: NON_MED_MEDICAL_CONDITIONS,
        interface: 'popover'
    }
};

export const MedConsultationDescCol: ColumnGeneratorSpecs = {
    size: 8,
    template: ` <table>
                    <tr>
                        <td>
                            <ul>
                                <li>routine, pre-employment, pre-marriage, annual or physical, immigration and business permit purposes check-up with no abnormality results </li>
                                <li>normal child delivery, previous prenatal check-up with no high risk pregnancy related condition</li>
                                <li>Child Immunization / Child Monthly check up with no serious findings </li>
                                <li>wearing of glasses for short-sightedness, near-sightedness or astigmatism </li>
                                <li>full recovery from fever / colds / cough/ flu / sinusitis / upper respiratory tract infections lasting for no more than a month </li>
                                <li>successfully recovered from Tonsillectomy, Appendectomy, Cholecystectomy, Minor Bone fracture treatment or surgery done more than twelve (12) months ago. </li>
                            </ul>
                        </td>
                     </tr>
                </table>`
}

export const MedConsultationNormalCol: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'select',
        attName: 'medConsultationNormal',
        formGroup: NonMedPBRFormGroup,
        setFieldName: false,
        interface: 'popover',
        options: [
            { key: 'Y', value: 'Normal' },
            { key: 'N', value: 'With findings or diagnosis' }
        ]
    }
};

export const medConditionsRow: RowGeneratorSpecs = {// FIELDS: medicalConditions
    columns: [
        MedConditionsCol
    ],
    isHidden: true
};

export const medConsultationRow: RowGeneratorSpecs = {// FIELDS: medConsultation, medConsultationNormal
    columns: [
        MedConsultationCol,
        MedConsultationNormalCol
    ],
    isHidden: true
};

export const ReferredConsultCol: ColumnGeneratorSpecs = {
    field: {
        type: 'checkbox',
        attName: 'refferredForConsultation',
        fieldName: 'Referred for any consultation, medical test, or hospitalization',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const referredConsultRow: RowGeneratorSpecs = {// FIELDS: refferredForConsultation
    columns: [
        ReferredConsultCol
    ],
    isHidden: true
};


export const HaveConsultedCol: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        formGroup: NonMedPBRFormGroup,
        attName: 'haveConsulted',
        setFieldName: false,
        type: 'radio',
        options: BOOLEAN
    }
};

export const HaveDiseaseCol: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        formGroup: NonMedPBRFormGroup,
        attName: 'haveDisease',
        setFieldName: false,
        type: 'radio',
        options: BOOLEAN
    }
};

export const NonMedQuestionsFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE: Medical Qu...
            columns: [{ text: 'Medical Questionnaires' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: haveConsulted
            columns: [
                {
                    size: 8,
                    text:  `Have you ever been diagnosed or consulted with a medical doctor,
                        or referred for medical tests or hospitalization for any kind of medical
                        condition beyond the conditions listed below?`
                },
                HaveConsultedCol,
                MedConsultationDescCol
            ]
        },
        medConditionsRow,
        medConsultationRow,
        referredConsultRow,
        withFindingsNote,
        {// FIELDS: haveDisease
            columns: [
                {
                    size: 8,
                    text: `Have you ever been diagnosed or received treatment or medical advice for any lump, cyst, cancer, high blood, heart or lung disease, diabetes, kidney or liver disease, mental or neurological dysfunction, pending or previous minor or major operation, or any other ailment with or without physical impairment other than those listed in item number 1?`
                },
                HaveDiseaseCol
            ]
        }
    ]
};

const toggleControl = (formGroup: FormGroup, attrNames: string[], action: 'd' | 'e') => {
    attrNames.forEach(attrName => {
        if (action == 'e') {
            formGroup.get(attrName).enable()
        }
        else {
            formGroup.get(attrName).disable();
        }
    });
};

const setControlValues = (formGroup: FormGroup, attrNames: string[], value: string | boolean | number) => {
    attrNames.forEach(attrName => {
        formGroup.get(attrName).setValue(value);
    });
};

export const SignsAndSymptomsFormGenerator: FormGeneratorSpecs = {
    rows: [
        {// FIELDS: haveSymptomps
            columns: [
                {
                    size: 8,
                    text: `Other than the above conditions disclosed,
                        have you experienced any of the following signs
                        and symptoms in the past six (6) months?`
                },
                SymptomSpecs.HaveSymptomsColSpecs
            ]
        },
        {// FIELDS: vommitingOfBlood, prolongedCough, enlargedLymphNodes
            columns: [
                SymptomSpecs.vommitingOfBloodColSpecs,
                SymptomSpecs.prolongedCoughColSpecs,
                SymptomSpecs.enlargedLymphNodesColSpecs
            ]
        },
        {// FIELDS: persistentNoseBleed, bloodStool, faintingSpells
            columns: [
                SymptomSpecs.persistentNoseBleedColSpecs,
                SymptomSpecs.bloodStoolColSpecs,
                SymptomSpecs.faintingSpellsColSpecs,
            ]
        },
        {// FIELDS: recurrentSevereHeadaches, blurringVision, persistentFever
            columns: [
                SymptomSpecs.recurrentSevereHeadachesColSpecs,
                SymptomSpecs.blurringVisionColSpecs,
                SymptomSpecs.persistentFeverColSpecs
            ]
        },
        {// FIELDS: persistentFatigue, unexplainedWeightLossGain, unusualSkinLesions
            columns: [
                SymptomSpecs.persistentFatigueColSpecs,
                SymptomSpecs.unexplainedWeightLossGainColSpecs,
                SymptomSpecs.unusualSkinLesionsColSpecs
            ]
        },
        {// FIELDS: abnormalVaginalDischarge, persistentDiarrhea, abdominalPain
            columns: [
                SymptomSpecs.abnormalVaginalDischargeColSpecs,
                SymptomSpecs.persistentDiarrheaColSpecs,
                SymptomSpecs.abdominalPainColSpecs
            ]
        },
        {// label only
            columns: [
                SymptomSpecs.symptomLabelColSpecs
            ],
            isHidden: true
        }
    ]
};

export let SmokeMoreInfoRow1: RowGeneratorSpecs = {
    columns: [
        {
            size: 6,
            text: 'Number of years:'
        },
        {
            size: 3,
            field: {
                type: 'number',
                attMaxLength: 3,
                attName: 'smokingNoOfYrs',
                formGroup: NonMedPBRFormGroup,
                setFieldName: true,
                inputmode: 'numeric'
            }
        }
    ],
    isHidden: true
};
export let SmokeMoreInfoRow2: RowGeneratorSpecs = {
    columns: [
        {
            size: 6,
            text: 'Average number of sticks per day:'
        },
        {
            size: 3,
            field: {
                type: 'number',
                attMaxLength: 3,
                attName: 'smokingNoOfStick',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                inputmode: 'numeric'
            }
        },
        {

            size: 3,
            field: {
                type: 'segment',
                attName: 'smokingNoOfStickUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                attMaxLength: 50,
                options: [
                    { key: 'Per Day', value: 'perDay' },
                    { key: 'Per Week', value: 'perWeek' }
                ]
            }
        },

    ],
    isHidden: true
};
export let DrinkMoreInfoRow: RowGeneratorSpecs = {
    columns: [
        {
            text: 'Type of Alcohol',
            size: 4
        },
        {
            text: 'Regular Intake',
            size: 4
        },
        {
            text: 'Frequency',
            size: 4
        }
    ],
    isHidden: true
};
export let DrinkMoreInfoFieldRow: RowGeneratorSpecs = {
    columns: [
        {
            size: 4,
            field: {
                type: 'select',
                attName: 'alcoholType',
                setFieldName: false,
                formGroup: NonMedPBRFormGroup,
                interface: 'popover',
                options: [
                    { key: 'BEER', value: 'Beer' },
                    { key: 'HRDLQR', value: 'Hard Liquor' },
                    { key: 'WINE', value: 'Wine' },
                ]
            }
        },
        {
            size: 2,
            field: {
                type: 'number',
                attMaxLength: 3,
                attName: 'drinkUnitValue',
                formGroup: NonMedPBRFormGroup,
                placeholder: 'Amount',
                setFieldName: false,
                inputmode: 'numeric'
            }
        },
        {
            size: 2,
            field: {
                type: 'select',
                attName: 'drinkUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                interface: 'popover',
                options: [
                    { key: 'BTTLS', value: 'Bottles' },
                    { key: 'SHTS', value: 'Shots' },
                    { key: 'GLSS', value: 'Glasses' },
                ]
            }
        },
        {
            size: 2,
            field: {
                type: 'number',
                attMaxLength: 3,
                attName: 'drinkFreqValue',
                formGroup: NonMedPBRFormGroup,
                placeholder: 'Frequency',
                setFieldName: false,
                inputmode: 'numeric'
            }
        },
        {

            size: 2,
            field: {
                type: 'select',
                attName: 'drinkFreqUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                interface: 'popover',
                options: [
                    { key: '1', value: 'Per Week' },
                    { key: '2', value: 'Per Month' }
                ]
            }
        },
    ],
    isHidden: true
};
export let DrinkMoreInfoRow4: RowGeneratorSpecs = {
    columns: [
        {
            size: 8,
            text: `Have you ever consulted, been advised
                or been actively treated by any doctor regarding
                excessive consumption of alcohol?`
        },
        {
            size: 4,
            field: {
                type: 'radio',
                attName: 'didConsult',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
    ],
    isHidden: true
};

export const DidSmokeDrinkDrugsCol: ColumnGeneratorSpecs = {
    field: {
        type: 'checkbox',
        attName: 'didNotSmokeDrinkDrug',
        fieldName: 'None of the above apply to me',
        formGroup: NonMedPBRFormGroup
    }
};

export const DidSmokeDrinkDrugsLabelColSpecs: ColumnGeneratorSpecs = {
    template: `<ul>
                    <li>Do you smoke more than 30 sticks per day?</li>
                    <li>Do you consume alcoholic beverages more than 6 bottles beer / 10 shots hard liquor / 4 glasses of wine per day?</li>
                    <li>Except as prescribed by a physician, have you ever used habit forming drugs (cocaine, heroin, marijuana, LSD or amphetamines)?</li>
               </ul>`
}

export const DidSmokeDrinkDrugsLabelRowSpecs: RowGeneratorSpecs = {
    columns: [DidSmokeDrinkDrugsLabelColSpecs],
    isHidden: true
}

export const DidSmokeDrinkDrugsRow: RowGeneratorSpecs = {
    columns: [
        DidSmokeDrinkDrugsCol
    ]
};

export const DidSmokeField: FieldSpecs = {
    type: 'checkbox',
    attName: 'didSmoked',
    fieldName: 'Do you smoke more than 30 sticks per day?',
    setFieldName: false,
    formGroup: NonMedPBRFormGroup
};

export const DidDrinkField: FieldSpecs = {
    type: 'checkbox',
    attName: 'didDrink',
    fieldName: 'Do you consume alcoholic beverages more than 6 bottles beer / 10 shots hard liquor / 4 glasses of wine per day?',
    setFieldName: false,
    formGroup: NonMedPBRFormGroup
};

export const AbdominalQuestionFormSpecs: FormGeneratorSpecs = {
    rows: [
        { columns: [{ text: 'Select all options applicable to you.' }] },
        {
            columns: [{ field: DidSmokeField }]
        },
        {
            columns: [{ field: DidDrinkField }]
        },
        DrinkMoreInfoRow4
    ]
};

export const AlcoholDoctorTableSpecs: DynamicTableSpecs = {
    mainFormGroup: NonMedPBRFormGroup,
    formArrayKey: 'alcoholDoctors',
    secondaryFormGroup: AlcoholDoctorsFormGroup,
    controlConfiguration: AlcoholDoctorsFGControlsConfig,
    limit: 5,
    title: 'Alcohol Consultation',
    subTitle: 'Alcohol Consultation Information',
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
                        size: 5,
                        field: {
                            type: 'text',
                            attName: 'name',
                            attMaxLength: 50,
                            formGroup: AlcoholDoctorsFormGroup,
                            setFieldName: true,
                            fieldName: 'Name of the doctor/s or attending physician'
                        }
                    },
                    {
                        size: 4,
                        field: {
                            type: 'text',
                            attName: 'address',
                            attMaxLength: 50,
                            formGroup: AlcoholDoctorsFormGroup,
                            setFieldName: true,
                            fieldName: 'Address'
                        }
                    },
                    {
                        size: 3,
                        field: {
                            type: 'date',
                            dateFormatOutput: 'MM/DD/YYYY',
                            dateFormat: 'MM/YYYY',
                            attName: 'dateOfConsultation',
                            formGroup: AlcoholDoctorsFormGroup,
                            setFieldName: true,
                            fieldName: 'Date of Consultation'
                        }
                    }
                ]
            }
        ]
    },
    columns: [
        {
            formGrpCtrlName: 'name',
            columnName: 'Name of the doctor/s or attending physician'
        },
        {
            formGrpCtrlName: 'address',
            columnName: 'Address'
        },
        {
            formGrpCtrlName: 'dateOfConsultation',
            columnName: 'Date of Consultation',
        }
    ],
    isHidden: true
};

export const FormingDrugsField: FieldSpecs = {
    type: 'checkbox',
    attName: 'hadFormingDrugs',
    fieldName: 'Except as prescribed by a physician, have you ever used habit forming drugs (cocaine, heroin, marijuana, LSD or amphetamines)?',
    setFieldName: false,
    formGroup: NonMedPBRFormGroup
};

export let FormingDrugsRow: RowGeneratorSpecs = {
    columns: [{ field: FormingDrugsField }]
};

export const DidSeekSupportRehabCol: ColumnGeneratorSpecs = {
    field: {
        type: 'checkbox',
        attName: 'didSeekSupportRehab',
        fieldName: 'I did not seek physician support for rehabilitation',
        formGroup: NonMedPBRFormGroup
    }
};

export const DidSeekSupportRehabRow: RowGeneratorSpecs = {
    columns: [
        DidSeekSupportRehabCol
    ]
};

export const DetoxDoctorTitle: RowGeneratorSpecs = {// QuestionTitle: detoxDoctor
    columns: [
        {
            text: 'Name of any doctor(s) who attended to you for supervision/detoxification'
        }
    ],
    isHidden: true
}

export const DrugsFormGroup: FormGeneratorSpecs = {
    rows: [
        { columns: [{ text: 'Select all applicable options from the list and identify duration of use.' }] },
        {// TABLEHEADERS: FROM TO
            columns: [
                {
                    size: 8,
                    text: ''
                },
                {
                    size: 2,
                    text: 'From'
                },
                {
                    size: 2,
                    text: 'To'
                }
            ]
        },
        {// DRUG: Opiates
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'checkbox',
                        attName: 'hadOpiates',
                        fieldName: 'Opiates',
                        setFieldName: false,
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => setDrugDateValidation(NonMedPBRFormGroup, 'hadOpiates', ['hadOpiatesFrom' ,'hadOpiatesTo'])
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadOpiatesFrom',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadOpiatesTo',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
            ]
        },
        {// DRUG: Barbituarates
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'checkbox',
                        attName: 'hadBarbiturates',
                        fieldName: 'Barbiturates',
                        setFieldName: false,
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => setDrugDateValidation(NonMedPBRFormGroup, 'hadBarbiturates', ['hadBarbituratesFrom' ,'hadBarbituratesTo'])
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadBarbituratesFrom',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadBarbituratesTo',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
            ]
        },
        {// DRUG: sedatives
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'checkbox',
                        attName: 'hadSedatives',
                        fieldName: 'Sedatives',
                        setFieldName: false,
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => setDrugDateValidation(NonMedPBRFormGroup, 'hadSedatives', ['hadSedativesFrom' ,'hadSedativesTo'])
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadSedativesFrom',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadSedativesTo',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
            ]
        },
        {// DRUG: aphetamines
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'checkbox',
                        attName: 'hadAphetamines',
                        fieldName: 'Aphetamines',
                        setFieldName: false,
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => setDrugDateValidation(NonMedPBRFormGroup, 'hadAphetamines', ['hadAphetaminesFrom' ,'hadAphetaminesTo'])
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadAphetaminesFrom',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadAphetaminesTo',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
            ]
        },
        {// DRUG: Cocaine
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'checkbox',
                        attName: 'hadCocaine',
                        fieldName: 'Cocaine',
                        setFieldName: false,
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => setDrugDateValidation(NonMedPBRFormGroup, 'hadCocaine', ['hadCocaineFrom' ,'hadCocaineTo'])
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadCocaineFrom',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadCocaineTo',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
            ]
        },
        {// DRUG: Hallucinogens
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'checkbox',
                        attName: 'hadHallucinogens',
                        fieldName: 'Hallucinogens',
                        setFieldName: false,
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => setDrugDateValidation(NonMedPBRFormGroup, 'hadHallucinogens', ['hadHallucinogensFrom' ,'hadHallucinogensTo'])
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadHallucinogensFrom',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadHallucinogensTo',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
            ]
        },
        {// DRUG: Cannabis
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'checkbox',
                        attName: 'hadCannabis',
                        fieldName: 'Cannabis',
                        setFieldName: false,
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => setDrugDateValidation(NonMedPBRFormGroup, 'hadCannabis', ['hadCannabisFrom' ,'hadCannabisTo'])
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadCannabisFrom',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadCannabisTo',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
            ]
        },
        {// DRUG: Solvents
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'checkbox',
                        attName: 'hadSolvents',
                        fieldName: 'Solvents',
                        setFieldName: false,
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => setDrugDateValidation(NonMedPBRFormGroup, 'hadSolvents', ['hadSolventsFrom' ,'hadSolventsTo'])
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadSolventsFrom',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadSolventsTo',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
            ]
        },
        {// DRUG: Others
            columns: [
                {
                    size: 8,
                    field: {
                        type: 'checkbox',
                        attName: 'hadOthers',
                        fieldName: 'Others',
                        setFieldName: false,
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => setDrugDateValidation(NonMedPBRFormGroup, 'hadOthers', ['hadOthersFrom' ,'hadOthersTo'])
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadOthersFrom',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
                {
                    size: 2,
                    field: {
                        type: 'date',
                        dateFormatOutput: 'MM/DD/YYYY',
                        dateFormat: 'MM/YYYY',
                        attName: 'hadOthersTo',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: false,
                    }
                },
            ]
        },
        DidSeekSupportRehabRow,
        DetoxDoctorTitle
    ],
    isHidden: true
};

export const DetoxDoctorTableSpecs: DynamicTableSpecs = {
    mainFormGroup: NonMedPBRFormGroup,
    formArrayKey: 'detoxDoctors',
    secondaryFormGroup: DetoxDoctorsFormGroup,
    controlConfiguration: DetoxDoctorsFGControls,
    limit: 2,
    title: 'Name of the doctor/s or attending physician',
    subTitle: 'Physician Information',
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
                        size: 12,
                        field: {
                            type: 'text',
                            attName: 'name',
                            setFieldName: false,
                            attMaxLength: 50,
                            formGroup: DetoxDoctorsFormGroup
                        }
                    }
                ]
            }
        ]
    },
    columns: [
        {
            formGrpCtrlName: 'name',
            columnName: 'Name of the doctor/s or attending physician'
        }
    ],
    isHidden: true
};

export let PregnantWeeksFieldCol: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        type: 'number',
        attName: 'pregnantWeeks',
        setFieldName: true,
        fieldName: 'How many weeks?',
        formGroup: NonMedPBRFormGroup,
        inputmode: 'numeric',
    },
    isHidden: true
};

export const AreYouPregnantRow: RowGeneratorSpecs = {
    columns: [
        {
            size: 3,
            field: {
                type: 'radio',
                formGroup: NonMedPBRFormGroup,
                attName: 'isPregnant',
                setFieldName: true,
                fieldName: 'Are you pregnant?',
                options: BOOLEAN,
                conditionalFunction: () => {
                    const nullable = ['N', null, undefined];
                    if(nullable.includes(NonMedPBRFormGroup.get('isPregnant').value)) {
                        PregnantWeeksFieldCol.isHidden = true;
                        NonMedPBRFormGroup.get('pregnantWeeks').reset();
                        NonMedPBRFormGroup.get('pregnantWeeks').clearValidators();
                        NonMedPBRFormGroup.get('pregnantWeeks').updateValueAndValidity();
                    } else {
                        PregnantWeeksFieldCol.isHidden = false;
                        NonMedPBRFormGroup.get('pregnantWeeks').setValidators([Validators.required, Validators.min(1), Validators.max(42)]);
                    }
                }
            }
        },
        PregnantWeeksFieldCol
    ]
};

/**
 * Add a required validation on if checkbox is set ticked
 * @author JL Gutierrez
 */
function setDrugDateValidation(formGroup: FormGroup, checkbox: string, dates: string[]) {
  dates.forEach(date => {
    formGroup.get(date).clearValidators();

    if (formGroup.get(checkbox).value === true) {
      formGroup.get(date).setValidators([Validators.required]);
      formGroup.get(date).markAsTouched();
    } else {
      formGroup.get(date).reset();
    }

    formGroup.get(date).updateValueAndValidity();
  });
}