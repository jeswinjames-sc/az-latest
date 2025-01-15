import { NonMedFormGroup } from '@form-group/e-app/non-med-form-group';
import { GenericDiseaseFurtherInfoSpecs } from '@models/specs/generic-disease-further-info-specs';
import { BOOLEAN } from '@utils/constants/options/segment/boolean';
import { FREQUENCY } from '@utils/constants/options/segment/frequency';
import { OFTEN } from '@utils/constants/options/segment/often';
import { SEVERITY } from '@utils/constants/options/segment/severity';
import { DIAGNOSIS_ABNORMAL_GROWTH } from '@utils/constants/options/segment/diagnosis';
import { TREATMENT } from '@utils/constants/options/segment/treatment';
import { FREQUENTLY } from '@utils/constants/options/segment/frequently';
import { HIVAIDSColSpecs, AbnormalLipidsColSpecs, AlcoholProblemColSpecs, AllergyColSpecs, AlzheimerColSpecs, AnxietyColSpecs, ArthritisColSpecs, AsthmaColSpecs, AtypiaColSpecs, AutismSpectrumDisorderColSpecs, BackPainColSpecs, BipolarColSpecs, BlackoutsColSpecs, BlindDeafMuteColSpecs, BloodDisorderColSpecs, BrainTumorColSpecs, BronchitisColSpecs, CaesareanDeliveryColSpecs, CartilageLigamentProblemColSpecs, ChestPainColSpecs, ChronicObstructiveColSpecs, CongenitalHeartDiseaseColSpecs, CrohnDiseaseColSpecs, CystsColSpecs, DepressionColSpecs, Diabetes1ColSpecs, Diabetes2ColSpecs, DownSyndromeColSpecs, DyspepsiaColSpecs, EatingDisorderColSpecs, EczemaColSpecs, EmphysemaColSpecs, EndometriosisColSpecs, EnlargedProstateColSpecs, EpilepsyColSpecs, EsophagusRefluxColSpecs, FibroidsMyomaColSpecs, GallBladderStoneColSpecs, GastritisColSpecs, GastrointestinalColSpecs, GerdColSpecs, GestationalDiabetesColSpecs, GlomerulonephritisColSpecs, GoutColSpecs, GravesDiseaseColSpecs, GrowthColSpecs, HashimotoThyroiditisColSpecs, HeartFailureColSpecs, HeartMurmurColSpecs, HemorrhoidsColSpecs, HepatitisBCColSpecs, HerniaColSpecs, HoleInTheHeartColSpecs, HormonalImbalanceColSpecs, HydronephosisColSpecs, HypertensionColSpecs, HyperthyroidismColSpecs, HypothyroidismColSpecs, ImpairedFastingGlucoseColSpecs, IrregularHeartbeatColSpecs, JointProblemColSpecs, KidneyFailureColSpecs, KidneyStoneColSpecs, KneeProblemColSpecs, LiverFailureColSpecs, LumpsColSpecs, MeningitisColSpecs, MenstrualProblemColSpecs, MiscarriageColSpecs, MoleColSpecs, MultipleSclerosisColSpecs, NephritisColSpecs, NervePainColSpecs, NormalDeliveryColSpecs, OtherAbnormalGrowthColSpecs, OtherBloodDiseaseColSpecs, OtherCongenitalDisorderColSpecs, OtherDiabetesColSpecs, OtherHeartAndCardiovascularDiseaseColSpecs, OtherKidneyDisorderColSpecs, OtherLungDiseaseColSpecs, OtherMentalDysfunctionColSpecs, OtherNeurologicalDysfunctionColSpecs, OtherPhysicalDeformityColSpecs, OthersSkinMuscleDisorderColSpecs, OthersStomachProblemsColSpecs, PancreasDiseaseColSpecs, ParalysisColSpecs, PelvicInflammatoryDiseaseColSpecs, PneumoniaColSpecs, PoliomyelitisColSpecs, PolycysticKidneyColSpecs, PolypsColSpecs, PreCancerousColSpecs, ProteinBloodUrineColSpecs, PsoriasisColSpecs, PulmonaryTBColSpecs, SchizopreniaColSpecs, SciaticaColSpecs, SeizuresColSpecs, SimpleToxicGoiterColSpecs, SleepApneaColSpecs, SlipDiscColSpecs, STDColSpecs, StrokeColSpecs, SuicideAttemptsColSpecs, ThalassemiaColSpecs, UlcerativeColitisColSpecs, UlcersColSpecs, UrethritisColSpecs, UrinaryTractInfectionColSpecs, PyelonephritisColSpecs, HeartAttackColSpecs } from '@form/column-specs/e-application/more-diseases-col-specs';

export const HypertensionFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hypertension',
    diseaseAlias: HypertensionColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'What is the latest blood pressure reading? (Systolic)',
            field: {
                type: 'number',
                attMaxLength: '3',
                attName: 'hypertensionBloodPressureReadingSys',
                formGroup: NonMedFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'What is the latest blood pressure reading? (Diastolic)',
            field: {
                type: 'number',
                attMaxLength: '3',
                attName: 'hypertensionBloodPressureReadingDia',
                formGroup: NonMedFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'Do you adhere strictly to the prescribe treatment?',
            field: {
                type: 'segment',
                attMaxLength: '50',
                attName: 'hypertensionAdhere',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN,
            }
        }
    ]
}
export const IrregularHeartbeatFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'irregularHeartbeat',
    diseaseAlias: IrregularHeartbeatColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const ChestPainFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'chestPain',
    diseaseAlias: ChestPainColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Approximate date of first attack',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'chestPainFirstAttack',
                formGroup: NonMedFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'Date of last attack',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'chestPainLastAttack',
                formGroup: NonMedFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'Frequency with which attacks occur (Value)',
            field: {
                type: 'selectize',
                interface: 'popover',
                attName: 'chestPainAttackFrequencyValue',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
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
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'When was the 1st episode?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'stroke1stEpisode',
                formGroup: NonMedFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'How often do you go for consultation?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'strokeOftenConsultation',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
            }
        },
    ]
}
export const HeartAttackFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'heartAttack',
    diseaseAlias: HeartAttackColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'When was the 1st episode?',
            field: {
                type: 'date',
                dateFormatOutput: 'MM/DD/YYYY',
                dateFormat: 'MM/YYYY',
                attName: 'heartAttack1stEpisode',
                formGroup: NonMedFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'How often do you go for consultation?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'heartAttackOftenConsultation',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
            }
        },
    ]
}
export const HeartMurmurFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'heartMurmur',
    diseaseAlias: HeartMurmurColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const HoleInTheHeartFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'holeInTheHeart',
    diseaseAlias: HoleInTheHeartColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const HeartFailureFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'heartFailure',
    diseaseAlias: HeartFailureColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const OtherHeartAndCardiovascularDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherHeartAndCardiovascularDisease',
    diseaseAlias: OtherHeartAndCardiovascularDiseaseColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Cardio Vascular Disease Name',
            field: {
                type: 'text',
                attName: 'otherHeartAndCardiovascularDiseaseDiseaseName',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const AsthmaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'asthma',
    diseaseAlias: AsthmaColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequently do you experience asthma attacks?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'asthmaFrequentAttack',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'How severe are the attacks?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'asthmaSevereAttack',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: SEVERITY
            }
        },
        {
            question: 'Any hospitalization in the past?',
            field: {
                type: 'segment',
                attName: 'asthmaPastHosp',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}

export const BronchitisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'bronchitis',
    diseaseAlias: BronchitisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequently do you experience asthma attacks?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'bronchitisFrequentAttack',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'How severe are the attacks?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'bronchitisSevereAttack',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: SEVERITY
            }
        },
        {
            question: 'Any hospitalization in the past?',
            field: {
                type: 'segment',
                attName: 'bronchitisPastHosp',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}

export const EmphysemaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'emphysema',
    diseaseAlias: EmphysemaColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const PneumoniaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'pneumonia',
    diseaseAlias: PneumoniaColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const SleepApneaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'sleepApnea',
    diseaseAlias: SleepApneaColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const ChronicObstructiveFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'chronicObstructive',
    diseaseAlias: ChronicObstructiveColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const PulmonaryTBFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'pulmonaryTB',
    diseaseAlias: PulmonaryTBColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Have you now recovered and are you now able to work?',
            field: {
                type: 'segment',
                attName: 'pulmonaryTBRecoveredWork',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'Do you still experience symptoms or sequels of any kind?',
            field: {
                type: 'segment',
                attName: 'pulmonaryTBExpSymptoms',
                formGroup: NonMedFormGroup,
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
                    formGroup: NonMedFormGroup,
                    attName: 'pulmonaryTBAppSymptomsFatigue',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Fever',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'pulmonaryTBAppSymptomsFever',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Night Sweats',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'pulmonaryTBAppSymptomsNight',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Chills',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'pulmonaryTBAppSymptomsChills',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Coughing that lasts 3 or more weeks',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'pulmonaryTBAppSymptomsCoughThreeWeeks',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Coughing up blood',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'pulmonaryTBAppSymptomsCoughBlood',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Chest pain or Pain with Breathing or Coughing',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'pulmonaryTBAppSymptomsChestPain',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Unintentional Weight Loss',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'pulmonaryTBAppSymptomsWeight',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Loss of Appetite',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
    ]
}

export const OtherLungDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherLungDisease',
    diseaseAlias: OtherLungDiseaseColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Lung and Respiratory Disease Name',
            field: {
                type: 'text',
                attName: 'otherLungDiseaseName',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const DepressionFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'depression',
    diseaseAlias: DepressionColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const AnxietyFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'anxiety',
    diseaseAlias: AnxietyColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const EatingDisorderFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'eatingDisorder',
    diseaseAlias: EatingDisorderColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const SuicideAttemptsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'suicideAttempts',
    diseaseAlias: SuicideAttemptsColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const BipolarFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'bipolar',
    diseaseAlias: BipolarColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const SchizopreniaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'schizoprenia',
    diseaseAlias: SchizopreniaColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const AlcoholProblemFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'alcoholProblem',
    diseaseAlias: AlcoholProblemColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const AlzheimerFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'alzheimer',
    diseaseAlias: AlzheimerColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const OtherMentalDysfunctionFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherMentalDysfunction',
    diseaseAlias: OtherMentalDysfunctionColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Mental Dysfunction Disease Name',
            field: {
                type: 'text',
                attName: 'otherMentalDysfunctionDiseaseName',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const EpilepsyFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'epilepsy',
    diseaseAlias: EpilepsyColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequent did/do your experience seizure? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'epilepsySeizureFreqValue',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent did/do your experience seizure? (Unit)',
            field: {
                type: 'segment',
                attName: 'epilepsySeizureFreqUnit',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
            }
        },
    ]
}

export const SeizuresFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'seizures',
    diseaseAlias: SeizuresColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequent did/do your experience seizure? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'seizuresFreqValue',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent did/do your experience seizure? (Unit)',
            field: {
                type: 'segment',
                attName: 'seizuresFreqUnit',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
            }
        },
    ]
}

export const BlackoutsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'blackouts',
    diseaseAlias: BlackoutsColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const NervePainFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'nervePain',
    diseaseAlias: NervePainColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const SciaticaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'sciatica',
    diseaseAlias: SciaticaColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const MultipleSclerosisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'multipleSclerosis',
    diseaseAlias: MultipleSclerosisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const BrainTumorFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'brainTumor',
    diseaseAlias: BrainTumorColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const OtherNeurologicalDysfunctionFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherNeurologicalDysfunction',
    diseaseAlias: OtherNeurologicalDysfunctionColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Neurological Dysfunction Disease Name',
            field: {
                type: 'text',
                attName: 'otherNeurologicalDysfunctionDiseaseName',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const HepatitisBCFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hepatitisBC',
    diseaseAlias: HepatitisBCColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'hepatitisBCOptContemplated',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}

export const ThalassemiaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'thalassemia',
    diseaseAlias: ThalassemiaColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const BloodDisorderFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'bloodDisorder',
    diseaseAlias: BloodDisorderColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const MeningitisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'meningitis',
    diseaseAlias: MeningitisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const HIVAIDSFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hIVAIDS',
    diseaseAlias: HIVAIDSColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const STDFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'sTD',
    diseaseAlias: STDColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}

export const OtherBloodDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherBloodDisease',
    diseaseAlias: OtherBloodDiseaseColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Blood and Liver Disease Name',
            field: {
                type: 'text',
                attName: 'otherBloodDiseaseName',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const PoliomyelitisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'poliomyelitis',
    diseaseAlias: PoliomyelitisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const ParalysisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'paralysis',
    diseaseAlias: ParalysisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const BlindDeafMuteFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'blindDeafMute',
    diseaseAlias: BlindDeafMuteColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const OtherPhysicalDeformityFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherPhysicalDeformity',
    diseaseAlias: OtherPhysicalDeformityColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Physical Deformity Disease Name',
            field: {
                type: 'text',
                attName: 'otherPhysicalDeformityDiseaseName',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const Diabetes1FI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'diabetes1',
    diseaseAlias: Diabetes1ColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Have you ever had elevated blood pressure?',
            field: {
                type: 'segment',
                attName: 'diabetes1ElevatedBP',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had heart attack?',
            field: {
                type: 'segment',
                attName: 'diabetes1HeartAttack',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had eye trouble?',
            field: {
                type: 'segment',
                attName: 'diabetes1EyeTrouble',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had kidney trouble?',
            field: {
                type: 'segment',
                attName: 'diabetes1KidneyTrouble',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had recurrent infections?',
            field: {
                type: 'segment',
                attName: 'diabetes1RecurrInfections',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had problems with your vision?',
            field: {
                type: 'segment',
                attName: 'diabetes1ProbVision',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had circulation problems with your legs?',
            field: {
                type: 'segment',
                attName: 'diabetes1CirculationProb',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had Albumin or protein in your urine?',
            field: {
                type: 'segment',
                attName: 'diabetes1AlbuminProtein',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },

    ]
}
export const Diabetes2FI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'diabetes2',
    diseaseAlias: Diabetes2ColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Have you ever had elevated blood pressure?',
            field: {
                type: 'segment',
                attName: 'diabetes2ElevatedBP',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had heart attack?',
            field: {
                type: 'segment',
                attName: 'diabetes2HeartAttack',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had eye trouble?',
            field: {
                type: 'segment',
                attName: 'diabetes2EyeTrouble',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had kidney trouble?',
            field: {
                type: 'segment',
                attName: 'diabetes2KidneyTrouble',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had recurrent infections?',
            field: {
                type: 'segment',
                attName: 'diabetes2RecurrInfections',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had problems with your vision?',
            field: {
                type: 'segment',
                attName: 'diabetes2ProbVision',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had circulation problems with your legs?',
            field: {
                type: 'segment',
                attName: 'diabetes2CirculationProb',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had Albumin or protein in your urine?',
            field: {
                type: 'segment',
                attName: 'diabetes2AlbuminProtein',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const ImpairedFastingGlucoseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'impairedFastingGlucose',
    diseaseAlias: ImpairedFastingGlucoseColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Have you ever had elevated blood pressure?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseElevatedBP',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had heart attack?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseHeartAttack',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had eye trouble?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseEyeTrouble',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had kidney trouble?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseKidneyTrouble',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had recurrent infections?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseRecurrInfections',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had problems with your vision?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseProbVision',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had circulation problems with your legs?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseCirculationProb',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had Albumin or protein in your urine?',
            field: {
                type: 'segment',
                attName: 'impairedFastingGlucoseAlbuminProtein',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const GestationalDiabetesFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'gestationalDiabetes',
    diseaseAlias: GestationalDiabetesColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Have you ever had elevated blood pressure?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesElevatedBP',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had heart attack?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesHeartAttack',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had eye trouble?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesEyeTrouble',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had kidney trouble?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesKidneyTrouble',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had recurrent infections?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesRecurrInfections',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had problems with your vision?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesProbVision',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had circulation problems with your legs?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesCirculationProb',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        },
        {
            question: 'Have you ever had Albumin or protein in your urine?',
            field: {
                type: 'segment',
                attName: 'gestationalDiabetesAlbuminProtein',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const SimpleToxicGoiterFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'simpleToxicGoiter',
    diseaseAlias: SimpleToxicGoiterColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'simpleToxicGoiterSymptomsFreqValue',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'simpleToxicGoiterSymptomsFreqUnit',
                formGroup: NonMedFormGroup,
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
                    formGroup: NonMedFormGroup,
                    attName: 'simpleToxicGoiterAppSymptomsFatigue',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Hoarse Voice',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'simpleToxicGoiterAppSymptomsHoarse',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Weight Loss',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'simpleToxicGoiterAppSymptomsWeight',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Cold Intolerance',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const GravesDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'gravesDisease',
    diseaseAlias: GravesDiseaseColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'gravesDiseaseSymptomsFreqValue',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'gravesDiseaseSymptomsFreqUnit',
                formGroup: NonMedFormGroup,
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
                    formGroup: NonMedFormGroup,
                    attName: 'gravesDiseaseAppSymptomsFatigue',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Hoarse Voice',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'gravesDiseaseAppSymptomsHoarse',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Weight Loss',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'gravesDiseaseAppSymptomsWeight',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Cold Intolerance',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const HashimotoThyroiditisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hashimotoThyroiditis',
    diseaseAlias: HashimotoThyroiditisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'hashimotoThyroiditisSymptomsFreqValue',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'hashimotoThyroiditisSymptomsFreqUnit',
                formGroup: NonMedFormGroup,
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
                    formGroup: NonMedFormGroup,
                    attName: 'hashimotoThyroiditisAppSymptomsFatigue',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Hoarse Voice',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'hashimotoThyroiditisAppSymptomsHoarse',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Weight Loss',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'hashimotoThyroiditisAppSymptomsWeight',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Cold Intolerance',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const HyperthyroidismFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hyperthyroidism',
    diseaseAlias: HyperthyroidismColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'hyperthyroidismSymptomsFreqValue',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'hyperthyroidismSymptomsFreqUnit',
                formGroup: NonMedFormGroup,
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
                    formGroup: NonMedFormGroup,
                    attName: 'hyperthyroidismAppSymptomsFatigue',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Hoarse Voice',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'hyperthyroidismAppSymptomsHoarse',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Weight Loss',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'hyperthyroidismAppSymptomsWeight',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Cold Intolerance',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const HypothyroidismFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hypothyroidism',
    diseaseAlias: HypothyroidismColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'hypothyroidismSymptomsFreqValue',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'hypothyroidismSymptomsFreqUnit',
                formGroup: NonMedFormGroup,
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
                    formGroup: NonMedFormGroup,
                    attName: 'hypothyroidismAppSymptomsFatigue',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Hoarse Voice',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'hypothyroidismAppSymptomsHoarse',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Weight Loss',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'hypothyroidismAppSymptomsWeight',
                    type: 'checkbox',
                    size: 3
                },
                {
                    fieldName: 'Cold Intolerance',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const GoutFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'gout',
    diseaseAlias: GoutColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const HormonalImbalanceFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hormonalImbalance',
    diseaseAlias: HormonalImbalanceColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const AbnormalLipidsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'abnormalLipids',
    diseaseAlias: AbnormalLipidsColSpecs.field.subFieldName,
    formGroup: NonMedFormGroup
}
export const OtherDiabetesFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherDiabetes',
    diseaseAlias: OtherDiabetesColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Diabetes and Thyroid Diseases Disease Name',
            field: {
                type: 'text',
                attName: 'otherDiabetesDiseaseName',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const SlipDiscFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'slipDisc',
    diseaseAlias: SlipDiscColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const PelvicInflammatoryDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'pelvicInflammatoryDisease',
    diseaseAlias: PelvicInflammatoryDiseaseColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const BackPainFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'backPain',
    diseaseAlias: BackPainColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const ArthritisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'arthritis',
    diseaseAlias: ArthritisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const KneeProblemFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'kneeProblem',
    diseaseAlias: KneeProblemColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const JointProblemFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'jointProblem',
    diseaseAlias: JointProblemColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const CartilageLigamentProblemFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'cartilageLigamentProblem', 
    diseaseAlias: CartilageLigamentProblemColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const EczemaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'eczema',
    diseaseAlias: EczemaColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const AllergyFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'allergy',
    diseaseAlias: AllergyColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const PsoriasisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'psoriasis',
    diseaseAlias: PsoriasisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const OthersSkinMuscleDisorderFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'othersSkinMuscleDisorder',
    diseaseAlias: OthersSkinMuscleDisorderColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Muscular, Skin and Skeletal Diseases Disease Name',
            field: {
                type: 'text',
                attName: 'othersSkinMuscleDisorderDiseaseName',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const GastrointestinalFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'gastrointestinal',
    diseaseAlias: GastrointestinalColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'gastrointestinalSymptomsFreqValue',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'gastrointestinalSymptomsFreqUnit',
                formGroup: NonMedFormGroup,
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
                    formGroup: NonMedFormGroup,
                    attName: 'gastrointestinalAppSymptomsBloating',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Nausea',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'gastrointestinalAppSymptomsNausea',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Heartburn',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'gastrointestinalAppSymptomsHeartburn',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Acid Reflux',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'gastrointestinalAppSymptomsAcid',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Epigastric Discomfort',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'gastrointestinalAppSymptomsEpigastric',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Loss of Appetite',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const GastritisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'gastritis',
    diseaseAlias: GastritisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'gastritisSymptomsFreqValue',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'gastritisSymptomsFreqUnit',
                formGroup: NonMedFormGroup,
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
                    formGroup: NonMedFormGroup,
                    attName: 'gastritisAppSymptomsBloating',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Nausea',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'gastritisAppSymptomsNausea',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Heartburn',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'gastritisAppSymptomsHeartburn',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Acid Reflux',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'gastritisAppSymptomsAcid',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Epigastric Discomfort',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'gastritisAppSymptomsEpigastric',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Loss of Appetite',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const UlcersFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'ulcers',
    diseaseAlias: UlcersColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'ulcersSymptomsFreqValue',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'ulcersSymptomsFreqUnit',
                formGroup: NonMedFormGroup,
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
                    formGroup: NonMedFormGroup,
                    attName: 'ulcersAppSymptomsBloating',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Nausea',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'ulcersAppSymptomsNausea',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Heartburn',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'ulcersAppSymptomsHeartburn',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Acid Reflux',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'ulcersAppSymptomsAcid',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Epigastric Discomfort',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'ulcersAppSymptomsEpigastric',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Loss of Appetite',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const GerdFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'gerd',
    diseaseAlias: GerdColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'gerdSymptomsFreqValue',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'gerdSymptomsFreqUnit',
                formGroup: NonMedFormGroup,
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
                    formGroup: NonMedFormGroup,
                    attName: 'gerdAppSymptomsBloating',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Nausea',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'gerdAppSymptomsNausea',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Heartburn',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'gerdAppSymptomsHeartburn',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Acid Reflux',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'gerdAppSymptomsAcid',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Epigastric Discomfort',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'gerdAppSymptomsEpigastric',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Loss of Appetite',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const DyspepsiaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'dyspepsia',
    diseaseAlias: DyspepsiaColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'dyspepsiaSymptomsFreqValue',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'dyspepsiaSymptomsFreqUnit',
                formGroup: NonMedFormGroup,
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
                    formGroup: NonMedFormGroup,
                    attName: 'dyspepsiaAppSymptomsBloating',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Nausea',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'dyspepsiaAppSymptomsNausea',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Heartburn',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'dyspepsiaAppSymptomsHeartburn',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Acid Reflux',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'dyspepsiaAppSymptomsAcid',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Epigastric Discomfort',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'dyspepsiaAppSymptomsEpigastric',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Loss of Appetite',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const EsophagusRefluxFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'esophagusReflux',
    diseaseAlias: EsophagusRefluxColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Value)',
            field: {
                type: 'number',
                attMaxLength: 2,
                attName: 'esophagusRefluxSymptomsFreqValue',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'How frequent and with what symptoms does this condition trouble you? (Unit)',
            field: {
                type: 'segment',
                attName: 'esophagusRefluxSymptomsFreqUnit',
                formGroup: NonMedFormGroup,
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
                    formGroup: NonMedFormGroup,
                    attName: 'esophagusRefluxAppSymptomsBloating',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Nausea',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'esophagusRefluxAppSymptomsNausea',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Heartburn',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'esophagusRefluxAppSymptomsHeartburn',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Acid Reflux',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'esophagusRefluxAppSymptomsAcid',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Epigastric Discomfort',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
                    attName: 'esophagusRefluxAppSymptomsEpigastric',
                    type: 'checkbox',
                    size: 4
                },
                {
                    fieldName: 'Loss of Appetite',
                    setFieldName: false,
                    formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const CrohnDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'crohnDisease',
    diseaseAlias: CrohnDiseaseColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const UlcerativeColitisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'ulcerativeColitis',
    diseaseAlias: UlcerativeColitisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const PancreasDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'pancreasDisease',
    diseaseAlias: PancreasDiseaseColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const LiverFailureFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'liverFailure',
    diseaseAlias: LiverFailureColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const HemorrhoidsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hemorrhoids',
    diseaseAlias: HemorrhoidsColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const HerniaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hernia',
    diseaseAlias: HerniaColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const OthersStomachProblemsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'othersStomachProblems',
    diseaseAlias: OthersStomachProblemsColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Gastrointestinal Disease Name',
            field: {
                type: 'text',
                attName: 'othersStomachProblemsDiseaseName',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const DownSyndromeFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'downSyndrome',
    diseaseAlias: DownSyndromeColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const AutismSpectrumDisorderFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'autismSpectrumDisorder',
    diseaseAlias: AutismSpectrumDisorderColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const CongenitalHeartDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'congenitalHeartDisease',
    diseaseAlias: CongenitalHeartDiseaseColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const OtherCongenitalDisorderFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherCongenitalDisorder',
    diseaseAlias: OtherCongenitalDisorderColSpecs.field.subFieldName,
    formGroup: NonMedFormGroup
}

export const EndometriosisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'endometriosis',
    diseaseAlias: EndometriosisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'endometriosisOptContemplated',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const FibroidsMyomaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'fibroidsMyoma',
    diseaseAlias: FibroidsMyomaColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'fibroidsMyomaOptContemplated',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const PolycysticKidneyFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'polycysticKidney',
    diseaseAlias: PolycysticKidneyColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'polycysticKidneyOptContemplated',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const KidneyStoneFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'kidneyStone',
    diseaseAlias: KidneyStoneColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'kidneyStoneOptContemplated',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const GallBladderStoneFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'gallBladderStone',
    diseaseAlias: GallBladderStoneColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Is any operation contemplated?',
            field: {
                type: 'segment',
                attName: 'gallBladderStoneOptContemplated',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                options: BOOLEAN
            }
        }
    ]
}
export const GlomerulonephritisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'glomerulonephritis',
    diseaseAlias: GlomerulonephritisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const MenstrualProblemFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'menstrualProblem',
    diseaseAlias: MenstrualProblemColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const UrinaryTractInfectionFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'urinaryTractInfection',
    diseaseAlias: UrinaryTractInfectionColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const ProteinBloodUrineFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'proteinBloodUrine',
    diseaseAlias: ProteinBloodUrineColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const KidneyFailureFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'kidneyFailure',
    diseaseAlias: KidneyFailureColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const EnlargedProstateFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'enlargedProstate',
    diseaseAlias: EnlargedProstateColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const PyelonephritisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'pyelonephritis',
    diseaseAlias: PyelonephritisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const UrethritisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'urethritis',
    diseaseAlias: UrethritisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const NephritisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'nephritis',
    diseaseAlias: NephritisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const HydronephosisFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'hydronephosis',
    diseaseAlias: HydronephosisColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const NormalDeliveryFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'normalDelivery',
    diseaseAlias: NormalDeliveryColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const CaesareanDeliveryFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'caesareanDelivery',
    diseaseAlias: CaesareanDeliveryColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const MiscarriageFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'miscarriage',
    diseaseAlias: MiscarriageColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const OtherKidneyDisorderFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherKidneyDisorder',
    diseaseAlias: OtherKidneyDisorderColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'Kidney and Reproductive Disease Name',
            field: {
                type: 'text',
                attName: 'otherKidneyDisorderDiseaseName',
                formGroup: NonMedFormGroup,
                setFieldName: false,
                attMaxLength: 50
            }
        },
    ]
}

export const CystsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'cysts',
    diseaseAlias: CystsColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'What is the specific condition or diagnosis if any?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'cystsSpecCondition',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'What was the recommended treatment?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'cystsRecommendedTreatment',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
    ]
}
export const PolypsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'polyps',
    diseaseAlias: PolypsColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'What is the specific condition or diagnosis if any?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'polypsSpecCondition',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false,
            }
        },
        {
            question: 'What was the recommended treatment?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'polypsRecommendedTreatment',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
    ]
}
export const GrowthFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'growth',
    diseaseAlias: GrowthColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'What is the specific condition or diagnosis if any?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'growthSpecCondition',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'What was the recommended treatment?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'growthRecommendedTreatment',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
    ]
}
export const LumpsFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'lumps',
    diseaseAlias: LumpsColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'What is the specific condition or diagnosis if any?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'lumpsSpecCondition',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'What was the recommended treatment?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'lumpsRecommendedTreatment',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
    ]
}
export const MoleFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'mole',
    diseaseAlias: MoleColSpecs.field.fieldName,
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'What is the specific condition or diagnosis if any?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'moleSpecCondition',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
        {
            question: 'What was the recommended treatment?',
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'moleRecommendedTreatment',
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
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
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        },
    ]
}
export const PreCancerousFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'preCancerous',
    diseaseAlias: PreCancerousColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const AtypiaFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'atypia',
    diseaseAlias: AtypiaColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}
export const OtherAbnormalGrowth: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherAbnormalGrowth',
    diseaseAlias: OtherAbnormalGrowthColSpecs.field.fieldName,
    formGroup: NonMedFormGroup
}


export const CancerFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'cancer',
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'What was the diagnosis/medical condition?',
            field: {
                type: 'text',
                attMaxLength: 50,
                attName: 'cancerDiagnosis',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        }
    ]
};

export const OtherDiseaseFI: GenericDiseaseFurtherInfoSpecs = {
    diseaseAttName: 'otherDefect',
    diseaseAlias: 'Any other defects, or medical conditions',
    formGroup: NonMedFormGroup,
    extraQuestions: [
        {
            question: 'What was the diagnosis/medical condition?',
            field: {
                type: 'text',
                attMaxLength: 50,
                attName: 'otherDefectDiagnosis',
                formGroup: NonMedFormGroup,
                setFieldName: false
            }
        }
    ]
};
