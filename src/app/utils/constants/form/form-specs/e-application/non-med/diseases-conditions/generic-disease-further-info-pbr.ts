import { BOOLEAN } from '@utils/constants/options/segment/boolean';
import { FREQUENCY } from '@utils/constants/options/segment/frequency';
import { OFTEN } from '@utils/constants/options/segment/often';
import { SEVERITY } from '@utils/constants/options/segment/severity';
import { DIAGNOSIS_ABNORMAL_GROWTH } from '@utils/constants/options/segment/diagnosis';
import { TREATMENT } from '@utils/constants/options/segment/treatment';

import { GenericDiseaseFurtherInfoSpecs } from '@models/specs/generic-disease-further-info-specs';
import { NonMedPBRFormGroup } from '@form-group/e-app/non-med-pbr-form-group';
import { FREQUENTLY } from '@utils/constants/options/segment/frequently';
import { AbnormalLipidsColSpecs, AlcoholProblemColSpecs, AllergyColSpecs, AlzheimerColSpecs, AnxietyColSpecs, ArthritisColSpecs, AsthmaColSpecs, AtypiaColSpecs, AutismSpectrumDisorderColSpecs, BackPainColSpecs, BipolarColSpecs, BlackoutsColSpecs, BlindDeafMuteColSpecs, BloodDisorderColSpecs, BrainTumorColSpecs, BronchitisColSpecs, CaesareanDeliveryColSpecs, CartilageLigamentProblemColSpecs, ChestPainColSpecs, ChronicObstructiveColSpecs, CongenitalHeartDiseaseColSpecs, CrohnDiseaseColSpecs, CystsColSpecs, DepressionColSpecs, Diabetes1ColSpecs, Diabetes2ColSpecs, DownSyndromeColSpecs, DyspepsiaColSpecs, EatingDisorderColSpecs, EczemaColSpecs, EmphysemaColSpecs, EndometriosisColSpecs, EnlargedProstateColSpecs, EpilepsyColSpecs, EsophagusRefluxColSpecs, FibroidsMyomaColSpecs, GallBladderStoneColSpecs, GastritisColSpecs, GastrointestinalColSpecs, GerdColSpecs, GestationalDiabetesColSpecs, GlomerulonephritisColSpecs, GoutColSpecs, GravesDiseaseColSpecs, GrowthColSpecs, HashimotoThyroiditisColSpecs, HeartAttackColSpecs, HeartFailureColSpecs, HeartMurmurColSpecs, HemorrhoidsColSpecs, HepatitisBCColSpecs, HerniaColSpecs, HIVAIDSColSpecs, HoleInTheHeartColSpecs, HormonalImbalanceColSpecs, HydronephosisColSpecs, HypertensionColSpecs, HyperthyroidismColSpecs, HypothyroidismColSpecs, ImpairedFastingGlucoseColSpecs, IrregularHeartbeatColSpecs, JointProblemColSpecs, KidneyFailureColSpecs, KidneyStoneColSpecs, KneeProblemColSpecs, LiverFailureColSpecs, LumpsColSpecs, MeningitisColSpecs, MenstrualProblemColSpecs, MiscarriageColSpecs, MoleColSpecs, MultipleSclerosisColSpecs, NephritisColSpecs, NervePainColSpecs, NormalDeliveryColSpecs, OtherAbnormalGrowthColSpecs, OtherBloodDiseaseColSpecs, OtherCongenitalDisorderColSpecs, OtherDiabetesColSpecs, OtherHeartAndCardiovascularDiseaseColSpecs, OtherKidneyDisorderColSpecs, OtherLungDiseaseColSpecs, OtherMentalDysfunctionColSpecs, OtherNeurologicalDysfunctionColSpecs, OtherPhysicalDeformityColSpecs, OthersSkinMuscleDisorderColSpecs, OthersStomachProblemsColSpecs, PancreasDiseaseColSpecs, ParalysisColSpecs, PelvicInflammatoryDiseaseColSpecs, PneumoniaColSpecs, PoliomyelitisColSpecs, PolycysticKidneyColSpecs, PolypsColSpecs, PreCancerousColSpecs, ProteinBloodUrineColSpecs, PsoriasisColSpecs, PulmonaryTBColSpecs, PyelonephritisColSpecs, SchizopreniaColSpecs, SciaticaColSpecs, SeizuresColSpecs, SimpleToxicGoiterColSpecs, SleepApneaColSpecs, SlipDiscColSpecs, STDColSpecs, StrokeColSpecs, SuicideAttemptsColSpecs, ThalassemiaColSpecs, UlcerativeColitisColSpecs, UlcersColSpecs, UrethritisColSpecs, UrinaryTractInfectionColSpecs } from '@form/column-specs/e-application/more-diseases-pbr-col-specs';

export const HypertensionFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hypertension',
    diseaseAlias: HypertensionColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'What is the latest blood pressure reading? (Systolic)',
            field: {
                type: 'number',
                attMaxLength: '3',
                attName: 'hypertensionBloodPressureReadingSys',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'What is the latest blood pressure reading? (Diastolic)',
            field: {
                type: 'number',
                attMaxLength: '3',
                attName: 'hypertensionBloodPressureReadingDia',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'Do you adhere strictly to the prescribe treatment?',
            field: {
                type: 'segment',
                attMaxLength: '50',
                attName: 'hypertensionAdhere',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN,
            }
        }
    ]
}
export const IrregularHeartbeatFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'irregularHeartbeat',
    diseaseAlias: IrregularHeartbeatColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const ChestPainFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'chestPain',
    diseaseAlias: ChestPainColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Approximate date of first attack',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                attName: 'chestPainFirstAttack',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'Date of last attack',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                attName: 'chestPainLastAttack',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'Frequency with which attacks occur (Value)',
            field: {
                type: 'selectize',
                interface: 'popover',
                attName: 'chestPainAttackFrequencyValue',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: [
                    { key: 0, value: '0' },
                    { key: 1, value: '1' },
                    { key: 2, value: '2' },
                    { key: 3, value: '3' },
                    { key: 4, value: '4' },
                    { key: 5, value: '5' },
                    { key: 6, value: '6' },
                    { key: 7, value: '7' },
                    { key: 8, value: '8' },
                    { key: 9, value: '9' },
                    { key: 10, value: '10' },
                ]
            }
        },
        {
            question: 'Frequency with which attacks occur (Unit)',
            field: {
                type: 'segment',
                attName: 'chestPainAttackFrequencyUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENCY
            }
        },
        {
            question: 'Duration of attacks',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'chestPainAttackDuration',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: [
                    { key: 1, value: '1' },
                    { key: 2, value: '2' },
                    { key: 3, value: '3' },
                    { key: 4, value: '4' },
                    { key: 5, value: '5' }
                ]
            }
        }
    ]
}
export const StrokeFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'stroke',
    diseaseAlias: StrokeColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'When was the 1st episode?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'stroke1stEpisode',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'How often do you go for consultation?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'strokeOftenConsultation',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: OFTEN
            }
        },
        {
            question: 'When was your last check-up?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'strokeLastCheckup',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'When did you last have chest pain or discomfort?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'strokeLastChestPain',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
    ]
}
export const HeartAttackFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'heartAttack',
    diseaseAlias: HeartAttackColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'When was the 1st episode?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'heartAttack1stEpisode',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'How often do you go for consultation?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'heartAttackOftenConsultation',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: OFTEN
            }
        },
        {
            question: 'When was your last check-up?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'heartAttackLastCheckup',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'When did you last have chest pain or discomfort?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'heartAttackLastChestPain',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
    ]
}
export const HeartMurmurFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'heartMurmur',
    diseaseAlias: HeartMurmurColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const HoleInTheHeartFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'holeInTheHeart',
    diseaseAlias: HoleInTheHeartColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const HeartFailureFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'heartFailure',
    diseaseAlias: HeartFailureColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const OtherHeartAndCardiovascularDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherHeartAndCardiovascularDisease',
    diseaseAlias: OtherHeartAndCardiovascularDiseaseColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Cardio Vascular Disease Name',
            field: {
                type: 'text',
                attName: 'otherHeartAndCardiovascularDiseaseDiseaseName',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                attMaxLength: 50,
            }
        },
    ]
}

export const AsthmaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'asthma',
    diseaseAlias: AsthmaColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequently do you experience asthma attacks?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'asthmaFrequentAttack',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENTLY
            }
        },
        {
            question: 'When was the last attack?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'asthmaLastAttack',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'How severe are the attacks?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'asthmaSevereAttack',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: SEVERITY
            }
        },
        {
            question: 'Any hospitalization in the past?',
            field: {
                type: 'segment',
                attName: 'asthmaPastHosp',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}

export const BronchitisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'bronchitis',
    diseaseAlias: BronchitisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequently do you experience asthma attacks?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'bronchitisFrequentAttack',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENTLY
            }
        },
        {
            question: 'When was the last attack?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'bronchitisLastAttack',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'How severe are the attacks?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'bronchitisSevereAttack',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: SEVERITY
            }
        },
        {
            question: 'Any hospitalization in the past?',
            field: {
                type: 'segment',
                attName: 'bronchitisPastHosp',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}

export const EmphysemaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'emphysema',
    diseaseAlias: EmphysemaColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const PneumoniaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'pneumonia',
    diseaseAlias: PneumoniaColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const SleepApneaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'sleepApnea',
    diseaseAlias: SleepApneaColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const ChronicObstructiveFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'chronicObstructive',
    diseaseAlias: ChronicObstructiveColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const PulmonaryTBFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'pulmonaryTB',
    diseaseAlias: PulmonaryTBColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Have you now recovered and are you now able to work?',
            field: {
                type: 'segment',
                attName: 'pulmonaryTBRecoveredWork',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Provide date of return to work',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'pulmonaryTBReturnWork',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'Do you still experience symptoms or sequels of any kind?',
            field: {
                type: 'segment',
                attName: 'pulmonaryTBExpSymptoms',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Select applicable symptoms',
            fields: [
                {
                    fieldName: 'Fatigue',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'pulmonaryTBAppSymptomsFatigue',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Fever',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'pulmonaryTBAppSymptomsFever',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Night Sweats',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'pulmonaryTBAppSymptomsNight',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Chills',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'pulmonaryTBAppSymptomsChills',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Coughing that lasts 3 or more weeks',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'pulmonaryTBAppSymptomsCoughThreeWeeks',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Coughing up blood',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'pulmonaryTBAppSymptomsCoughBlood',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Chest pain or Pain with Breathing or Coughing',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'pulmonaryTBAppSymptomsChestPain',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Unintentional Weight Loss',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'pulmonaryTBAppSymptomsWeight',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Loss of Appetite',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'pulmonaryTBAppSymptomsLoss',
                    type: 'checkbox',
                    size: 4
                },
            ]
        },
        {
            question: 'Are you still under medical review?',
            field: {
                type: 'segment',
                attName: 'pulmonaryTBMedReview',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
    ]
}

export const OtherLungDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherLungDisease',
    diseaseAlias: OtherLungDiseaseColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Lung and Respiratory Disease Name',
            field: {
                type: 'text',
                attName: 'otherLungDiseaseName',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const DepressionFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'depression',
    diseaseAlias: DepressionColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const AnxietyFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'anxiety',
    diseaseAlias: AnxietyColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const EatingDisorderFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'eatingDisorder',
    diseaseAlias: EatingDisorderColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const SuicideAttemptsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'suicideAttempts',
    diseaseAlias: SuicideAttemptsColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const BipolarFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'bipolar',
    diseaseAlias: BipolarColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const SchizopreniaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'schizoprenia',
    diseaseAlias: SchizopreniaColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const AlcoholProblemFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'alcoholProblem',
    diseaseAlias: AlcoholProblemColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const AlzheimerFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'alzheimer',
    diseaseAlias: AlzheimerColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const OtherMentalDysfunctionFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherMentalDysfunction',
    diseaseAlias: OtherMentalDysfunctionColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Mental Dysfunction Disease Name',
            field: {
                type: 'text',
                attName: 'otherMentalDysfunctionDiseaseName',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const EpilepsyFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'epilepsy',
    diseaseAlias: EpilepsyColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequent did/do your experience seizure? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'epilepsySeizureFreqValue',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent did/do your experience seizure? (Unit)',
            field: {
                type: 'segment',
                attName: 'epilepsySeizureFreqUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENCY
            }
        },
        {
            question: 'How long does the seizure last?',
            field: {
                type: 'selectize',
                interface: 'popover',
                attName: 'epilepsySeizureLasts',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: [
                    { key: 0, value: '0' },
                    { key: 1, value: '1' },
                    { key: 2, value: '2' },
                    { key: 3, value: '3' },
                    { key: 4, value: '4' },
                    { key: 5, value: '5' },
                    { key: 6, value: '6' },
                    { key: 7, value: '7' },
                    { key: 8, value: '8' },
                    { key: 9, value: '9' },
                    { key: 10, value: '10' },
                ]
            }
        },
        {
            question: 'When was the last seizure?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'epilepsySeizureLastAttack',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
    ]
}

export const SeizuresFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'seizures',
    diseaseAlias: SeizuresColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequent did/do your experience seizure? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'seizuresFreqValue',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent did/do your experience seizure? (Unit)',
            field: {
                type: 'segment',
                attName: 'seizuresFreqUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENCY
            }
        },
        {
            question: 'How long does the seizure last?',
            field: {
                type: 'selectize',
                interface: 'popover',
                attName: 'seizuresLasts',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: [
                    { key: 0, value: '0' },
                    { key: 1, value: '1' },
                    { key: 2, value: '2' },
                    { key: 3, value: '3' },
                    { key: 4, value: '4' },
                    { key: 5, value: '5' },
                    { key: 6, value: '6' },
                    { key: 7, value: '7' },
                    { key: 8, value: '8' },
                    { key: 9, value: '9' },
                    { key: 10, value: '10' },
                ]
            }
        },
        {
            question: 'When was the last seizure?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'seizuresLastAttack',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
    ]
}

export const BlackoutsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'blackouts',
    diseaseAlias: BlackoutsColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const NervePainFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'nervePain',
    diseaseAlias: NervePainColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const SciaticaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'sciatica',
    diseaseAlias: SciaticaColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const MultipleSclerosisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'multipleSclerosis',
    diseaseAlias: MultipleSclerosisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const BrainTumorFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'brainTumor',
    diseaseAlias: BrainTumorColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const OtherNeurologicalDysfunctionFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherNeurologicalDysfunction',
    diseaseAlias: OtherNeurologicalDysfunctionColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Neurological Dysfunction Disease Name',
            field: {
                type: 'text',
                attName: 'otherNeurologicalDysfunctionDiseaseName',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const HepatitisBCFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hepatitisBC',
    diseaseAlias: HepatitisBCColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'hepatitisBCOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}

export const ThalassemiaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'thalassemia',
    diseaseAlias: ThalassemiaColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const BloodDisorderFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'bloodDisorder',
    diseaseAlias: BloodDisorderColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const MeningitisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'meningitis',
    diseaseAlias: MeningitisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const HIVAIDSFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hIVAIDS',
    diseaseAlias: HIVAIDSColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const STDFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'sTD',
    diseaseAlias: STDColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}

export const OtherBloodDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherBloodDisease',
    diseaseAlias: OtherBloodDiseaseColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Blood and Liver Disease Name',
            field: {
                type: 'text',
                attName: 'otherBloodDiseaseName',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const PoliomyelitisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'poliomyelitis',
    diseaseAlias: PoliomyelitisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const ParalysisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'paralysis',
    diseaseAlias: ParalysisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const BlindDeafMuteFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'blindDeafMute',
    diseaseAlias: BlindDeafMuteColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const OtherPhysicalDeformityFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherPhysicalDeformity',
    diseaseAlias: OtherPhysicalDeformityColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Physical Deformity Disease Name',
            field: {
                type: 'text',
                attName: 'otherPhysicalDeformityDiseaseName',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const Diabetes1FI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'diabetes1',
    diseaseAlias: Diabetes1ColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Have you ever had elevated blood pressure?',
            field: {
                type: 'segment',
                attName: 'diabetes1ElevatedBP',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had heart attack?',
            field: {
                type: 'segment',
                attName: 'diabetes1HeartAttack',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had eye trouble?',
            field: {
                type: 'segment',
                attName: 'diabetes1EyeTrouble',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had kidney trouble?',
            field: {
                type: 'segment',
                attName: 'diabetes1KidneyTrouble',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had recurrent infections?',
            field: {
                type: 'segment',
                attName: 'diabetes1RecurrInfections',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had problems with your vision?',
            field: {
                type: 'segment',
                attName: 'diabetes1ProbVision',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had circulation problems with your legs?',
            field: {
                type: 'segment',
                attName: 'diabetes1CirculationProb',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had Albumin or protein in your urine?',
            field: {
                type: 'segment',
                attName: 'diabetes1AlbuminProtein',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },

    ]
}
export const Diabetes2FI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'diabetes2',
    diseaseAlias: Diabetes2ColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Have you ever had elevated blood pressure?',
            field: {
                type: 'segment',
                attName: 'diabetes2ElevatedBP',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had heart attack?',
            field: {
                type: 'segment',
                attName: 'diabetes2HeartAttack',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had eye trouble?',
            field: {
                type: 'segment',
                attName: 'diabetes2EyeTrouble',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had kidney trouble?',
            field: {
                type: 'segment',
                attName: 'diabetes2KidneyTrouble',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had recurrent infections?',
            field: {
                type: 'segment',
                attName: 'diabetes2RecurrInfections',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had problems with your vision?',
            field: {
                type: 'segment',
                attName: 'diabetes2ProbVision',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had circulation problems with your legs?',
            field: {
                type: 'segment',
                attName: 'diabetes2CirculationProb',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had Albumin or protein in your urine?',
            field: {
                type: 'segment',
                attName: 'diabetes2AlbuminProtein',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const ImpairedFastingGlucoseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'impairedFastingGlucose',
    diseaseAlias: ImpairedFastingGlucoseColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Have you ever had elevated blood pressure?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseElevatedBP',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had heart attack?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseHeartAttack',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had eye trouble?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseEyeTrouble',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had kidney trouble?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseKidneyTrouble',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had recurrent infections?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseRecurrInfections',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had problems with your vision?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseProbVision',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had circulation problems with your legs?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseCirculationProb',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had Albumin or protein in your urine?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseAlbuminProtein',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const GestationalDiabetesFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'gestationalDiabetes',
    diseaseAlias: GestationalDiabetesColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Have you ever had elevated blood pressure?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesElevatedBP',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had heart attack?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesHeartAttack',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had eye trouble?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesEyeTrouble',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had kidney trouble?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesKidneyTrouble',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had recurrent infections?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesRecurrInfections',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had problems with your vision?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesProbVision',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had circulation problems with your legs?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesCirculationProb',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had Albumin or protein in your urine?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesAlbuminProtein',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const SimpleToxicGoiterFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'simpleToxicGoiter',
    diseaseAlias: SimpleToxicGoiterColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'simpleToxicGoiterSymptomsFreqValue',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'simpleToxicGoiterSymptomsFreqUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENCY,
            }
        },
        {
            question: 'Select applicable symptoms',
            fields: [
                {
                    fieldName: 'Fatigue/Weakness',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'simpleToxicGoiterAppSymptomsFatigue',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Hoarse Voice',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'simpleToxicGoiterAppSymptomsHoarse',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Weight Loss',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'simpleToxicGoiterAppSymptomsWeight',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Cold Intolerance',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'simpleToxicGoiterAppSymptomsCold',
                    type: 'checkbox',
                    size: 3
                }
            ]
        },
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'simpleToxicGoiterOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const GravesDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'gravesDisease',
    diseaseAlias: GravesDiseaseColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'gravesDiseaseSymptomsFreqValue',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'gravesDiseaseSymptomsFreqUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENCY
            }
        },
        {
            question: 'Select applicable symptoms',
            fields: [
                {
                    fieldName: 'Fatigue/Weakness',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gravesDiseaseAppSymptomsFatigue',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Hoarse Voice',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gravesDiseaseAppSymptomsHoarse',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Weight Loss',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gravesDiseaseAppSymptomsWeight',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Cold Intolerance',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gravesDiseaseAppSymptomsCold',
                    type: 'checkbox',
                    size: 3
                }
            ]
        },
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'gravesDiseaseOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const HashimotoThyroiditisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hashimotoThyroiditis',
    diseaseAlias: HashimotoThyroiditisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'hashimotoThyroiditisSymptomsFreqValue',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'hashimotoThyroiditisSymptomsFreqUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENCY
            }
        },
        {
            question: 'Select applicable symptoms',
            fields: [
                {
                    fieldName: 'Fatigue/Weakness',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'hashimotoThyroiditisAppSymptomsFatigue',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Hoarse Voice',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'hashimotoThyroiditisAppSymptomsHoarse',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Weight Loss',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'hashimotoThyroiditisAppSymptomsWeight',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Cold Intolerance',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'hashimotoThyroiditisAppSymptomsCold',
                    type: 'checkbox',
                    size: 3
                }
            ]
        },
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'hashimotoThyroiditisOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const HyperthyroidismFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hyperthyroidism',
    diseaseAlias: HyperthyroidismColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'hyperthyroidismSymptomsFreqValue',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'hyperthyroidismSymptomsFreqUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENCY
            }
        },
        {
            question: 'Select applicable symptoms',
            fields: [
                {
                    fieldName: 'Fatigue/Weakness',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'hyperthyroidismAppSymptomsFatigue',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Hoarse Voice',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'hyperthyroidismAppSymptomsHoarse',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Weight Loss',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'hyperthyroidismAppSymptomsWeight',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Cold Intolerance',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'hyperthyroidismAppSymptomsCold',
                    type: 'checkbox',
                    size: 3
                }
            ]
        },
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'hyperthyroidismOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const HypothyroidismFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hypothyroidism',
    diseaseAlias: HypothyroidismColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'hypothyroidismSymptomsFreqValue',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'hypothyroidismSymptomsFreqUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENCY
            }
        },
        {
            question: 'Select applicable symptoms',
            fields: [
                {
                    fieldName: 'Fatigue/Weakness',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'hypothyroidismAppSymptomsFatigue',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Hoarse Voice',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'hypothyroidismAppSymptomsHoarse',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Weight Loss',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'hypothyroidismAppSymptomsWeight',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Cold Intolerance',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'hypothyroidismAppSymptomsCold',
                    type: 'checkbox',
                    size: 3
                }
            ]
        },
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'hypothyroidismOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const GoutFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'gout',
    diseaseAlias: GoutColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const HormonalImbalanceFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hormonalImbalance',
    diseaseAlias: HormonalImbalanceColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const AbnormalLipidsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'abnormalLipids',
    diseaseAlias: AbnormalLipidsColSpecs.field.subFieldName,
    formGroup: NonMedPBRFormGroup
}
export const OtherDiabetesFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherDiabetes',
    diseaseAlias: OtherDiabetesColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Diabetes and Thyroid Diseases Disease Name',
            field: {
                type: 'text',
                attName: 'otherDiabetesDiseaseName',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const SlipDiscFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'slipDisc',
    diseaseAlias: SlipDiscColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const PelvicInflammatoryDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'pelvicInflammatoryDisease',
    diseaseAlias: PelvicInflammatoryDiseaseColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const BackPainFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'backPain',
    diseaseAlias: BackPainColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const ArthritisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'arthritis',
    diseaseAlias: ArthritisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const KneeProblemFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'kneeProblem',
    diseaseAlias: KneeProblemColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const JointProblemFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'jointProblem',
    diseaseAlias: JointProblemColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const CartilageLigamentProblemFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'cartilageLigamentProblem', 
    diseaseAlias: CartilageLigamentProblemColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const EczemaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'eczema',
    diseaseAlias: EczemaColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const AllergyFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'allergy',
    diseaseAlias: AllergyColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const PsoriasisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'psoriasis',
    diseaseAlias: PsoriasisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const OthersSkinMuscleDisorderFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'othersSkinMuscleDisorder',
    diseaseAlias: OthersSkinMuscleDisorderColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Muscular, Skin and Skeletal Diseases Disease Name',
            field: {
                type: 'text',
                attName: 'othersSkinMuscleDisorderDiseaseName',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const GastrointestinalFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'gastrointestinal',
    diseaseAlias: GastrointestinalColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'gastrointestinalSymptomsFreqValue',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'gastrointestinalSymptomsFreqUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENCY
            }
        },
        {
            question: 'Select applicable symptoms',
            fields: [
                {
                    fieldName: 'Bloating',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gastrointestinalAppSymptomsBloating',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Nausea',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gastrointestinalAppSymptomsNausea',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Heartburn',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gastrointestinalAppSymptomsHeartburn',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Acid Reflux',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gastrointestinalAppSymptomsAcid',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Epigastric Discomfort',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gastrointestinalAppSymptomsEpigastric',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Loss of Appetite',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gastrointestinalAppSymptomsLoss',
                    type: 'checkbox',
                    size: 4
                }
            ]
        },
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'gastrointestinalOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const GastritisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'gastritis',
    diseaseAlias: GastritisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'gastritisSymptomsFreqValue',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'gastritisSymptomsFreqUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENCY
            }
        },
        {
            question: 'Select applicable symptoms',
            fields: [
                {
                    fieldName: 'Bloating',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gastritisAppSymptomsBloating',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Nausea',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gastritisAppSymptomsNausea',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Heartburn',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gastritisAppSymptomsHeartburn',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Acid Reflux',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gastritisAppSymptomsAcid',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Epigastric Discomfort',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gastritisAppSymptomsEpigastric',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Loss of Appetite',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gastritisAppSymptomsLoss',
                    type: 'checkbox',
                    size: 4
                }
            ]
        },
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'gastritisOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const UlcersFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'ulcers',
    diseaseAlias: UlcersColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'ulcersSymptomsFreqValue',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'ulcersSymptomsFreqUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENCY
            }
        },
        {
            question: 'Select applicable symptoms',
            fields: [
                {
                    fieldName: 'Bloating',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'ulcersAppSymptomsBloating',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Nausea',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'ulcersAppSymptomsNausea',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Heartburn',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'ulcersAppSymptomsHeartburn',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Acid Reflux',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'ulcersAppSymptomsAcid',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Epigastric Discomfort',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'ulcersAppSymptomsEpigastric',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Loss of Appetite',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'ulcersAppSymptomsLoss',
                    type: 'checkbox',
                    size: 4
                }
            ]
        },
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'ulcersOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const GerdFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'gerd',
    diseaseAlias: GerdColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'gerdSymptomsFreqValue',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'gerdSymptomsFreqUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENCY
            }
        },
        {
            question: 'Select applicable symptoms',
            fields: [
                {
                    fieldName: 'Bloating',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gerdAppSymptomsBloating',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Nausea',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gerdAppSymptomsNausea',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Heartburn',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gerdAppSymptomsHeartburn',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Acid Reflux',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gerdAppSymptomsAcid',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Epigastric Discomfort',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gerdAppSymptomsEpigastric',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Loss of Appetite',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'gerdAppSymptomsLoss',
                    type: 'checkbox',
                    size: 4
                }
            ]
        },
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'gerdOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const DyspepsiaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'dyspepsia',
    diseaseAlias: DyspepsiaColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'dyspepsiaSymptomsFreqValue',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'dyspepsiaSymptomsFreqUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENCY
            }
        },
        {
            question: 'Select applicable symptoms',
            fields: [
                {
                    fieldName: 'Bloating',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'dyspepsiaAppSymptomsBloating',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Nausea',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'dyspepsiaAppSymptomsNausea',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Heartburn',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'dyspepsiaAppSymptomsHeartburn',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Acid Reflux',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'dyspepsiaAppSymptomsAcid',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Epigastric Discomfort',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'dyspepsiaAppSymptomsEpigastric',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Loss of Appetite',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'dyspepsiaAppSymptomsLoss',
                    type: 'checkbox',
                    size: 4
                }
            ]
        },
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'dyspepsiaOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const EsophagusRefluxFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'esophagusReflux',
    diseaseAlias: EsophagusRefluxColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'esophagusRefluxSymptomsFreqValue',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'esophagusRefluxSymptomsFreqUnit',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: FREQUENCY
            }
        },
        {
            question: 'Select applicable symptoms',
            fields: [
                {
                    fieldName: 'Bloating',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'esophagusRefluxAppSymptomsBloating',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Nausea',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'esophagusRefluxAppSymptomsNausea',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Heartburn',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'esophagusRefluxAppSymptomsHeartburn',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Acid Reflux',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'esophagusRefluxAppSymptomsAcid',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Epigastric Discomfort',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'esophagusRefluxAppSymptomsEpigastric',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Loss of Appetite',
                    setFieldName: false,
                    formGroup: NonMedPBRFormGroup,
                    attName: 'esophagusRefluxAppSymptomsLoss',
                    type: 'checkbox',
                    size: 4
                }
            ]
        },
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'esophagusRefluxOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const CrohnDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'crohnDisease',
    diseaseAlias: CrohnDiseaseColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const UlcerativeColitisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'ulcerativeColitis',
    diseaseAlias: UlcerativeColitisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const PancreasDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'pancreasDisease',
    diseaseAlias: PancreasDiseaseColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const LiverFailureFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'liverFailure',
    diseaseAlias: LiverFailureColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const HemorrhoidsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hemorrhoids',
    diseaseAlias: HemorrhoidsColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const HerniaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hernia',
    diseaseAlias: HerniaColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const OthersStomachProblemsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'othersStomachProblems',
    diseaseAlias: OthersStomachProblemsColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Gastrointestinal Disease Name',
            field: {
                type: 'text',
                attName: 'othersStomachProblemsDiseaseName',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const DownSyndromeFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'downSyndrome',
    diseaseAlias: DownSyndromeColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const AutismSpectrumDisorderFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'autismSpectrumDisorder',
    diseaseAlias: AutismSpectrumDisorderColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const CongenitalHeartDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'congenitalHeartDisease',
    diseaseAlias: CongenitalHeartDiseaseColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const OtherCongenitalDisorderFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherCongenitalDisorder',
    diseaseAlias: OtherCongenitalDisorderColSpecs.field.subFieldName,
    formGroup: NonMedPBRFormGroup
}

export const EndometriosisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'endometriosis',
    diseaseAlias: EndometriosisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'endometriosisOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const FibroidsMyomaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'fibroidsMyoma',
    diseaseAlias: FibroidsMyomaColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'fibroidsMyomaOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const PolycysticKidneyFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'polycysticKidney',
    diseaseAlias: PolycysticKidneyColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'polycysticKidneyOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const KidneyStoneFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'kidneyStone',
    diseaseAlias: KidneyStoneColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'kidneyStoneOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const GallBladderStoneFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'gallBladderStone',
    diseaseAlias: GallBladderStoneColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'gallBladderStoneOptContemplated',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const GlomerulonephritisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'glomerulonephritis',
    diseaseAlias: GlomerulonephritisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const MenstrualProblemFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'menstrualProblem',
    diseaseAlias: MenstrualProblemColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const UrinaryTractInfectionFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'urinaryTractInfection',
    diseaseAlias: UrinaryTractInfectionColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const ProteinBloodUrineFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'proteinBloodUrine',
    diseaseAlias: ProteinBloodUrineColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const KidneyFailureFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'kidneyFailure',
    diseaseAlias: KidneyFailureColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const EnlargedProstateFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'enlargedProstate',
    diseaseAlias: EnlargedProstateColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const PyelonephritisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'pyelonephritis',
    diseaseAlias: PyelonephritisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const UrethritisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'urethritis',
    diseaseAlias: UrethritisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const NephritisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'nephritis',
    diseaseAlias: NephritisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const HydronephosisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hydronephosis',
    diseaseAlias: HydronephosisColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const NormalDeliveryFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'normalDelivery',
    diseaseAlias: NormalDeliveryColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const CaesareanDeliveryFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'caesareanDelivery',
    diseaseAlias: CaesareanDeliveryColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const MiscarriageFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'miscarriage',
    diseaseAlias: MiscarriageColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const OtherKidneyDisorderFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherKidneyDisorder',
    diseaseAlias: OtherKidneyDisorderColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'Kidney and Reproductive Disease Name',
            field: {
                type: 'text',
                attName: 'otherKidneyDisorderDiseaseName',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const CystsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'cysts',
    diseaseAlias: CystsColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'What is the specific condition or diagnosis if any?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'cystsSpecCondition',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: DIAGNOSIS_ABNORMAL_GROWTH
            }
        },
        {
            question: 'identify surface/ area or body part affected?',
            field: {
                type: 'text',
                attMaxLength: 50,
                attName: 'cystsSurfaceAffected',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'What was the recommended treatment?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'cystsRecommendedTreatment',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: TREATMENT
            }
        },
        {
            question: 'With what form(s) of therapy did treatment commence?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'cystsCommencedTreatmentForm',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: TREATMENT
            }
        },
        {
            question: 'When did treatment commence?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'cystsCommencedTreatmentDt',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
    ]
}
export const PolypsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'polyps',
    diseaseAlias: PolypsColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'What is the specific condition or diagnosis if any?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'polypsSpecCondition',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: DIAGNOSIS_ABNORMAL_GROWTH
            }
        },
        {
            question: 'identify surface/ area or body part affected?',
            field: {
                type: 'text',
                attMaxLength: 50,
                attName: 'polypsSurfaceAffected',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'What was the recommended treatment?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'polypsRecommendedTreatment',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: TREATMENT
            }
        },
        {
            question: 'With what form(s) of therapy did treatment commence?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'polypsCommencedTreatmentForm',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: TREATMENT
            }
        },
        {
            question: 'When did treatment commence?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'polypsCommencedTreatmentDt',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
    ]
}
export const GrowthFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'growth',
    diseaseAlias: GrowthColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'What is the specific condition or diagnosis if any?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'growthSpecCondition',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: DIAGNOSIS_ABNORMAL_GROWTH
            }
        },
        {
            question: 'identify surface/ area or body part affected?',
            field: {
                type: 'text',
                attMaxLength: 50,
                attName: 'growthSurfaceAffected',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'What was the recommended treatment?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'growthRecommendedTreatment',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: TREATMENT
            }
        },
        {
            question: 'With what form(s) of therapy did treatment commence?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'growthCommencedTreatmentForm',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: TREATMENT
            }
        },
        {
            question: 'When did treatment commence?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'growthCommencedTreatmentDt',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
    ]
}
export const LumpsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'lumps',
    diseaseAlias: LumpsColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'What is the specific condition or diagnosis if any?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'lumpsSpecCondition',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: DIAGNOSIS_ABNORMAL_GROWTH
            }
        },
        {
            question: 'identify surface/ area or body part affected?',
            field: {
                type: 'text',
                attMaxLength: 50,
                attName: 'lumpsSurfaceAffected',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'What was the recommended treatment?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'lumpsRecommendedTreatment',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: TREATMENT
            }
        },
        {
            question: 'With what form(s) of therapy did treatment commence?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'lumpsCommencedTreatmentForm',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: TREATMENT
            }
        },
        {
            question: 'When did treatment commence?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'lumpsCommencedTreatmentDt',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
    ]
}
export const MoleFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'mole',
    diseaseAlias: MoleColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'What is the specific condition or diagnosis if any?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'moleSpecCondition',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: DIAGNOSIS_ABNORMAL_GROWTH
            }
        },
        {
            question: 'identify surface/ area or body part affected?',
            field: {
                type: 'text',
                attMaxLength: 50,
                attName: 'moleSurfaceAffected',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'What was the recommended treatment?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'moleRecommendedTreatment',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: TREATMENT
            }
        },
        {
            question: 'With what form(s) of therapy did treatment commence?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'moleCommencedTreatmentForm',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false,
                options: TREATMENT
            }
        },
        {
            question: 'When did treatment commence?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'moleCommencedTreatmentDt',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        },
    ]
}
export const PreCancerousFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'preCancerous',
    diseaseAlias: PreCancerousColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const AtypiaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'atypia',
    diseaseAlias: AtypiaColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}
export const OtherAbnormalGrowth: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherAbnormalGrowth',
    diseaseAlias: OtherAbnormalGrowthColSpecs.field.fieldName,
    formGroup: NonMedPBRFormGroup
}


export const CancerFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'cancer',
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'What was the diagnosis/medical condition?',
            field: {
                type: 'text',
                attMaxLength: 50,
                attName: 'cancerDiagnosis',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        }
    ]
};

export const OtherDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherDefect',
    diseaseAlias: 'Any other defects, or medical conditions',
    formGroup: NonMedPBRFormGroup,
    extraQuestions: [
        {
            question: 'What was the diagnosis/medical condition?',
            field: {
                type: 'text',
                attMaxLength: 50,
                attName: 'otherDefectDiagnosis',
                formGroup: NonMedPBRFormGroup,
                setFieldName: false
            }
        }
    ]
}