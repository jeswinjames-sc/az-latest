import { NonMedPBRFormGroup } from '@form-group/e-app/non-med-pbr-form-group';
import { BOOLEAN } from '@utils/constants/options/segment/boolean';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';

export const HaveSymptomsColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        formGroup: NonMedPBRFormGroup,
        attName: 'haveSymptomps',
        setFieldName: false,
        type: 'radio',
        options: BOOLEAN
    }
};

export const vommitingOfBloodColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'vommitingOfBlood',
        fieldName: 'Vomitting of Blood',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const prolongedCoughColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'prolongedCough',
        fieldName: 'Prolonged Cough',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const enlargedLymphNodesColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'enlargedLymphNodes',
        fieldName: 'Enlarged Lymph Nodes',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const persistentNoseBleedColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'persistentNoseBleed',
        fieldName: 'Persistent Nose Bleed',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const bloodStoolColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'bloodStool',
        fieldName: 'Blood in the Stool',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const faintingSpellsColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'faintingSpells',
        fieldName: 'Fainting Spells',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const recurrentSevereHeadachesColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'recurrentSevereHeadaches',
        fieldName: 'Recurrent Severe Headaches',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const blurringVisionColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'blurringVision',
        fieldName: 'Blurring Vision',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const persistentFeverColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'persistentFever',
        fieldName: 'Persistent Fever',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const persistentFatigueColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'persistentFatigue',
        fieldName: 'Persistent and Unexplained Fatigue',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const unexplainedWeightLossGainColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'unexplainedWeightLossGain',
        fieldName: 'Unexplained Weight Loss or Weight Gain',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const unusualSkinLesionsColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'unusualSkinLesions',
        fieldName: 'Unusual Skin Lesions',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const abnormalVaginalDischargeColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'abnormalVaginalDischarge',
        fieldName: 'Abnormal Vaginal Discharge/Bleeding',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const persistentDiarrheaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'persistentDiarrhea',
        fieldName: 'Persistent Diarrhea',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const abdominalPainColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'abdominalPain',
        fieldName: 'Abdominal Pain',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup
    }
};

export const symptomLabelColSpecs: ColumnGeneratorSpecs = {
    template: `<table>
                    <tr>
                        <td>
                            <ul>
                                <li>Vommiting of Blood</li>
                                <li>Persistent Nose Bleed</li>
                                <li>Recurrent Severe Headaches</li>
                                <li>Persistent and Unexplained Fatigue</li>
                                <li>Abnormal Vaginal Discharge/Bleeding</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Prolonged Cough</li>
                                <li>Blood in the Stool</li>
                                <li>Blurring Vision</li>
                                <li>Unexplained Weight Loss or Weight Gain</li>
                                <li>Persistent Diarrhea</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Enlarged Lymph Nodes</li>
                                <li>Fainting Spells</li>
                                <li>Persistent Fever</li>
                                <li>Unusual Skin Lesions</li>
                                <li>Abdominal Pain</li>
                            </ul>
                        </td>
                    </tr>
                </table>`
}