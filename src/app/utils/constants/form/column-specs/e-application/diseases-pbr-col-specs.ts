import { NonMedPBRFormGroup } from '@form-group/e-app/non-med-pbr-form-group';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';

/**
 * Naming disease name capitalized + ColSpecs,
 * for dynamic adding of conditional function
 */

export const HighBloodColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Heart and Cardiovascular',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasHighBlood',
        type: 'checkbox'
    },
    size: 6
};

export const LungDiseaseColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Lung and Respiratory',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasLungDisease',
        type: 'checkbox'
    },
    size: 6
};

export const MentalDysfunctionColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Mental Dysfunction',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasMentalDysfunction',
        type: 'checkbox'
    },
    size: 6
};

export const NeurologicalDysfunctionColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Neurological Dysfunction',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasNeurologicalDysfunction',
        type: 'checkbox'
    },
    size: 6
};

export const BloodDiseaseColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Blood or Liver Disease',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasBloodDisease',
        type: 'checkbox'
    },
    size: 6
};

export const PhysicalDeformityColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Physical Deformity',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasPhysicalDeformity',
        type: 'checkbox'
    },
    size: 6
};

export const DiabetesColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Diabetes and Thyroid Diseases',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasDiabetes',
        type: 'checkbox'
    },
    size: 6
};

export const SkinMuscleDisorderColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Muscular, Skin and Skeletal',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasSkinMuscleDisorder',
        type: 'checkbox'
    },
    size: 6
};

export const StomachProblemsColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Gastrointestinal',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasStomachProblems',
        type: 'checkbox'
    },
    size: 6
};

export const CongenitalDisorderColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Congenital and Developmental Disorder',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasCongenitalDisorder',
        type: 'checkbox'
    },
    size: 6
};

export const KidneyDisorderColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Kidney and Reproductive Disorder',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasKidneyDisorder',
        type: 'checkbox'
    },
    size: 6
};

export const CancerColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Cancer',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasCancer',
        type: 'checkbox'
    },
    size: 6
};

export const AbnormalGrowthColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Cysts and Lumps',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasAbnormalGrowth',
        type: 'checkbox'
    },
    size: 6
};

export const LipidsColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Dyslipidemia/Hyperlipidemia/Abnormal Lipids',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasLipids',
        type: 'checkbox'
    },
    size: 6
};

export const OtherDefectColSpecs: ColumnGeneratorSpecs = {
    field: {
        fieldName: 'Any other defects, or medical conditions not already disclosed in the list',
        setFieldName: false,
        formGroup: NonMedPBRFormGroup,
        attName: 'hasOtherDefect',
        type: 'checkbox'
    },
    size: 6
};

export const diseasesLabelColSpecs: ColumnGeneratorSpecs = {
    template: `<table>
                    <tr>
                        <td>
                            <ul>
                                <li>Heart and Cardiovascular</li>
                                <li>Mental Dysfunction</li>
                                <li>Blood or Liver Disease</li>
                                <li>Diabetes and Thyroid Diseases</li>
                                <li>Gastrointestinal</li>
                                <li>Kidney and Reproductive Disorder</li>
                                <li>Cysts and Lumps</li>
                            </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Lung and Respiratory</li>
                                <li>Neurological Dysfunction</li>
                                <li>Physical Deformity</li>
                                <li>Muscular, Skin and Skeletal</li>
                                <li>Congenital and Developmental Disorder</li>
                                <li>Cancer</li>
                                <li>Dyslipidemia/Hyperlipidemia/Abnormal Lipids</li>
                                <li>Any other defects, or medical conditions not already disclosed in the list</li>
                            </ul>
                        </td>
                    </tr>
                </table>`
}