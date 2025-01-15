import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { NonMedFormGroup } from '@form-group/e-app/non-med-form-group';

/**
 * Naming extra-disease name (extra-diseases.ts) Capitalized + ColSpecs,
 * for dynamic adding of conditional function
 */

// * highBlood
export const HypertensionColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHypertension',
        formGroup: NonMedFormGroup,
        fieldName: 'Hypertension',
        type: 'checkbox'
    }
};

export const IrregularHeartbeatColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasIrregularHeartbeat',
        formGroup: NonMedFormGroup,
        fieldName: 'Irregular Heartbeat',
        type: 'checkbox'
    }
};

export const ChestPainColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasChestPain',
        formGroup: NonMedFormGroup,
        fieldName: 'Chest Pain or Angina',
        type: 'checkbox'
    }
};

export const StrokeColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasStroke',
        formGroup: NonMedFormGroup,
        fieldName: 'Stroke',
        type: 'checkbox'
    }
};

export const HeartAttackColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHeartAttack',
        formGroup: NonMedFormGroup,
        fieldName: 'Heart Attack or Coronary Artery Disease',
        type: 'checkbox'
    }
};

export const HeartMurmurColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHeartMurmur',
        formGroup: NonMedFormGroup,
        fieldName: 'Heart Murmur',
        type: 'checkbox'
    }
};

export const HoleInTheHeartColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHoleInTheHeart',
        formGroup: NonMedFormGroup,
        fieldName: 'Hole in the Heart',
        type: 'checkbox'
    }
};

export const HeartFailureColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHeartFailure',
        formGroup: NonMedFormGroup,
        fieldName: 'Heart Failure',
        type: 'checkbox'
    }
};

export const OtherHeartAndCardiovascularDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherHeartAndCardiovascularDisease',
        formGroup: NonMedFormGroup,
        fieldName: 'Others',
        type: 'checkbox'
    }
};

// * lungDisease
export const AsthmaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAsthma',
        formGroup: NonMedFormGroup,
        fieldName: 'Asthma',
        type: 'checkbox'
    }
};

export const BronchitisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasBronchitis',
        formGroup: NonMedFormGroup,
        fieldName: 'Bronchitis',
        type: 'checkbox'
    }
};

export const EmphysemaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasEmphysema',
        formGroup: NonMedFormGroup,
        fieldName: 'Emphysema',
        type: 'checkbox'
    }
};

export const CovidColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasCovid',
        formGroup: NonMedFormGroup,
        fieldName: 'Covid',
        type: 'checkbox'
    }
};

export const PneumoniaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPneumonia',
        formGroup: NonMedFormGroup,
        fieldName: 'Pneumonia',
        type: 'checkbox'
    }
};

export const SleepApneaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSleepApnea',
        formGroup: NonMedFormGroup,
        fieldName: 'Sleep Apnea',
        type: 'checkbox'
    }
};

export const ChronicObstructiveColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasChronicObstructive',
        formGroup: NonMedFormGroup,
        fieldName: 'Chronic Obstructive Pulmonary Disease (COPD)',
        type: 'checkbox'
    }
};

export const PulmonaryTBColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPulmonaryTB',
        formGroup: NonMedFormGroup,
        fieldName: 'Pulmonary Tuberculosis',
        type: 'checkbox'
    }
};


export const SinusitisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSinusitis',
        formGroup: NonMedFormGroup,
        fieldName: 'Sinusitis',
        type: 'checkbox'
    }
};

export const URTIColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasURTI',
        formGroup: NonMedFormGroup,
        fieldName: 'Upper Respiratory Tract Infection (URTI)/Systemic Viral Infection',
        type: 'checkbox'
    }
};

export const OtherLungDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherLungDisease',
        formGroup: NonMedFormGroup,
        fieldName: 'Others',
        type: 'checkbox'
    }
};

// * mentalDysfunction
export const DepressionColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasDepression',
        formGroup: NonMedFormGroup,
        fieldName: 'Depression',
        type: 'checkbox'
    }
};

export const AnxietyColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAnxiety',
        formGroup: NonMedFormGroup,
        fieldName: 'Anxiety',
        type: 'checkbox'
    }
};

export const EatingDisorderColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasEatingDisorder',
        formGroup: NonMedFormGroup,
        fieldName: 'Eating Disorder',
        type: 'checkbox'
    }
};

export const SuicideAttemptsColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSuicideAttempts',
        formGroup: NonMedFormGroup,
        fieldName: 'Suicide Attempts',
        type: 'checkbox'
    }
};

export const BipolarColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasBipolar',
        formGroup: NonMedFormGroup,
        fieldName: 'Bipolar',
        type: 'checkbox'
    }
};

export const SchizopreniaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSchizoprenia',
        formGroup: NonMedFormGroup,
        fieldName: 'Schizophrenia',
        type: 'checkbox'
    }
};

export const AlcoholProblemColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAlcoholProblem',
        formGroup: NonMedFormGroup,
        fieldName: 'Alcohol/Drug Problem',
        type: 'checkbox'
    }
};

export const AlzheimerColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAlzheimer',
        formGroup: NonMedFormGroup,
        fieldName: 'Alzheimer',
        type: 'checkbox'
    }
};

export const OtherMentalDysfunctionColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherMentalDysfunction',
        formGroup: NonMedFormGroup,
        fieldName: 'Other',
        type: 'checkbox'
    }
};

// * neurologicalDysfunction
export const EpilepsyColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasEpilepsy',
        formGroup: NonMedFormGroup,
        fieldName: 'Epilepsy',
        type: 'checkbox'
    }
};

export const SeizuresColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSeizures',
        formGroup: NonMedFormGroup,
        fieldName: 'Seizures',
        type: 'checkbox'
    }
};

export const MeningitisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasMeningitis',
        formGroup: NonMedFormGroup,
        fieldName: 'Meningitis',
        type: 'checkbox'
    }
};

export const BlackoutsColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasBlackouts',
        formGroup: NonMedFormGroup,
        fieldName: 'Blackouts',
        type: 'checkbox'
    }
};

export const NervePainColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasNervePain',
        formGroup: NonMedFormGroup,
        fieldName: 'Nerve Pain',
        type: 'checkbox'
    }
};

export const SciaticaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSciatica',
        formGroup: NonMedFormGroup,
        fieldName: 'Sciatica',
        type: 'checkbox'
    }
};

export const MultipleSclerosisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasMultipleSclerosis',
        formGroup: NonMedFormGroup,
        fieldName: 'Multiple Sclerosis',
        type: 'checkbox'
    }
};

export const BrainTumorColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasBrainTumor',
        formGroup: NonMedFormGroup,
        fieldName: 'Brain Tumor',
        type: 'checkbox'
    }
};

export const OtherNeurologicalDysfunctionColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherNeurologicalDysfunction',
        formGroup: NonMedFormGroup,
        fieldName: 'Others',
        type: 'checkbox'
    }
};

// * bloodDisease
export const HepatitisBCColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHepatitisBC',
        formGroup: NonMedFormGroup,
        fieldName: 'Hepatitis B or C',
        type: 'checkbox'
    }
};

export const ThalassemiaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasThalassemia',
        formGroup: NonMedFormGroup,
        fieldName: 'Thalassemia',
        type: 'checkbox'
    }
};

export const BloodDisorderColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasBloodDisorder',
        formGroup: NonMedFormGroup,
        fieldName: 'Blood Disorder',
        type: 'checkbox'
    }
};

export const HIVAIDSColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHIVAIDS',
        formGroup: NonMedFormGroup,
        fieldName: 'HIV or AIDS related complex',
        type: 'checkbox'
    }
};

export const STDColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSTD',
        formGroup: NonMedFormGroup,
        fieldName: 'Sexually Transmitted Disease',
        type: 'checkbox'
    }
};

export const OtherBloodDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherBloodDisease',
        formGroup: NonMedFormGroup,
        fieldName: 'Others',
        type: 'checkbox'
    }
};

// * physicalDeformity
export const PoliomyelitisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPoliomyelitis',
        formGroup: NonMedFormGroup,
        fieldName: 'Poliomyelitis',
        type: 'checkbox'
    }
};

export const ParalysisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasParalysis',
        formGroup: NonMedFormGroup,
        fieldName: 'Paralysis',
        type: 'checkbox'
    }
};

export const BlindDeafMuteColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'isBlindDeafMute',
        formGroup: NonMedFormGroup,
        fieldName: 'Blind, Deaf or Mute',
        type: 'checkbox'
    }
};

export const OtherPhysicalDeformityColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherPhysicalDeformity',
        formGroup: NonMedFormGroup,
        fieldName: 'Others',
        type: 'checkbox'
    }
};

// * diabetes
export const Diabetes1ColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasDiabetes1',
        formGroup: NonMedFormGroup,
        fieldName: 'Diabetes Type 1',
        type: 'checkbox'
    }
};

export const Diabetes2ColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasDiabetes2',
        formGroup: NonMedFormGroup,
        fieldName: 'Diabetes Type 2',
        type: 'checkbox'
    }
};

export const ImpairedFastingGlucoseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasImpairedFastingGlucose',
        formGroup: NonMedFormGroup,
        fieldName: 'Impaired Fasting Glucose',
        type: 'checkbox'
    }
};

export const GestationalDiabetesColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGestationalDiabetes',
        formGroup: NonMedFormGroup,
        fieldName: 'Gestational Diabetes',
        type: 'checkbox'
    }
};

export const SimpleToxicGoiterColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSimpleToxicGoiter',
        formGroup: NonMedFormGroup,
        fieldName: 'Simple/Toxic Goiter',
        type: 'checkbox'
    }
};

export const GravesDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGravesDisease',
        formGroup: NonMedFormGroup,
        fieldName: 'Graves Disease',
        type: 'checkbox'
    }
};

export const HashimotoThyroiditisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHashimotoThyroiditis',
        formGroup: NonMedFormGroup,
        fieldName: 'Hashimoto/Thyroiditis',
        type: 'checkbox'
    }
};

export const HyperthyroidismColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHyperthyroidism',
        formGroup: NonMedFormGroup,
        fieldName: 'Hyperthyroidism',
        type: 'checkbox'
    }
};

export const HypothyroidismColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHypothyroidism',
        formGroup: NonMedFormGroup,
        fieldName: 'Hypothyroidism',
        type: 'checkbox'
    }
};

export const GoutColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGout',
        formGroup: NonMedFormGroup,
        fieldName: 'Gout',
        type: 'checkbox'
    }
};

export const HormonalImbalanceColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHormonalImbalance',
        formGroup: NonMedFormGroup,
        fieldName: 'Hormonal Imbalance',
        type: 'checkbox'
    }
};

export const AbnormalLipidsColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAbnormalLipids', // add more details
        formGroup: NonMedFormGroup,
        fieldName: 'Abnormal Lipids',
        subFieldName: 'Abnormal Lipids (cholesterol, triglycerides, LDL)',
        type: 'checkbox'
    }
};

export const OtherDiabetesColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherDiabetes',
        formGroup: NonMedFormGroup,
        fieldName: 'Others',
        type: 'checkbox'
    }
};

// * skinMuscleDisorder
export const SlipDiscColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSlipDisc',
        formGroup: NonMedFormGroup,
        fieldName: 'Slip Disc',
        type: 'checkbox'
    }
};

export const PsoriasisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPsoriasis',
        formGroup: NonMedFormGroup,
        fieldName: 'Psoriasis',
        type: 'checkbox'
    }
};

export const BackPainColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasBackPain',
        formGroup: NonMedFormGroup,
        fieldName: 'Back Pain',
        type: 'checkbox'
    }
};

export const ArthritisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasArthritis',
        formGroup: NonMedFormGroup,
        fieldName: 'Arthritis',
        type: 'checkbox'
    }
};

export const KneeProblemColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasKneeProblem',
        formGroup: NonMedFormGroup,
        fieldName: 'Knee Problem',
        type: 'checkbox'
    }
};

export const JointProblemColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasJointProblem',
        formGroup: NonMedFormGroup,
        fieldName: 'Joint Problem',
        type: 'checkbox'
    }
};

export const CartilageLigamentProblemColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasCartilageLigamentProblem',
        formGroup: NonMedFormGroup,
        fieldName: 'Cartilage or Ligament Problem',
        type: 'checkbox'
    }
};

export const EczemaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasEczema',
        formGroup: NonMedFormGroup,
        fieldName: 'Eczema',
        type: 'checkbox'
    }
};

export const AllergyColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAllergy',
        formGroup: NonMedFormGroup,
        fieldName: 'Allergy',
        type: 'checkbox'
    }
};

export const OthersSkinMuscleDisorderColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOthersSkinMuscleDisorder',
        formGroup: NonMedFormGroup,
        fieldName: 'Others',
        type: 'checkbox'
    }
};

// * stomachProblems
export const GastrointestinalColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGastrointestinal',
        formGroup: NonMedFormGroup,
        fieldName: 'Stomach Problem',
        type: 'checkbox'
    }
};

export const GastritisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGastritis',
        formGroup: NonMedFormGroup,
        fieldName: 'Gastritis',
        type: 'checkbox'
    }
};

export const UlcersColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasUlcers',
        formGroup: NonMedFormGroup,
        fieldName: 'Ulcers',
        type: 'checkbox'
    }
};

export const GerdColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGerd',
        formGroup: NonMedFormGroup,
        fieldName: 'Gerd',
        type: 'checkbox'
    }
};

export const DyspepsiaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasDyspepsia',
        formGroup: NonMedFormGroup,
        fieldName: 'Dyspepsia',
        type: 'checkbox'
    }
};

export const EsophagusRefluxColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasEsophagusReflux',
        formGroup: NonMedFormGroup,
        fieldName: 'Esophagus Reflux',
        type: 'checkbox'
    }
};

export const CrohnDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasCrohnDisease',
        formGroup: NonMedFormGroup,
        fieldName: `Crohn's Disease`,
        type: 'checkbox'
    }
};

export const UlcerativeColitisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasUlcerativeColitis',
        formGroup: NonMedFormGroup,
        fieldName: 'Ulcerative Colitis/Colitis',
        type: 'checkbox'
    }
};

export const PancreasDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPancreasDisease',
        formGroup: NonMedFormGroup,
        fieldName: 'Disease of the Pancreas or Liver',
        type: 'checkbox'
    }
};

export const LiverFailureColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasLiverFailure',
        formGroup: NonMedFormGroup,
        fieldName: 'Liver Failure/Liver Cirrhosis',
        type: 'checkbox'
    }
};

export const HemorrhoidsColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHemorrhoids',
        formGroup: NonMedFormGroup,
        fieldName: 'Hemorrhoids',
        type: 'checkbox'
    }
};

export const HerniaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHernia',
        formGroup: NonMedFormGroup,
        fieldName: 'Hernia',
        type: 'checkbox'
    }
};

export const OthersStomachProblemsColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOthersStomachProblems',
        formGroup: NonMedFormGroup,
        fieldName: 'Others',
        type: 'checkbox'
    }
};

// * congenitalDisorder
export const DownSyndromeColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasDownSyndrome',
        formGroup: NonMedFormGroup,
        fieldName: 'Down Syndrome',
        type: 'checkbox'
    }
};

export const AutismSpectrumDisorderColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAutismSpectrumDisorder',
        formGroup: NonMedFormGroup,
        fieldName: 'Autism Spectrum Disorder',
        type: 'checkbox'
    }
};

export const CongenitalHeartDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasCongenitalHeartDisease',
        formGroup: NonMedFormGroup,
        fieldName: 'Congenital Heart Disease',
        type: 'checkbox'
    }
};

export const OtherCongenitalDisorderColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherCongenitalDisorder',
        formGroup: NonMedFormGroup,
        fieldName: 'Other',
        subFieldName: 'Other Developmental Conditions (ADHD, mental retardation, learning disabilities)',
        type: 'checkbox'
    }
};

// * kidneyDisorder
export const EndometriosisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasEndometriosis',
        formGroup: NonMedFormGroup,
        fieldName: 'Endometriosis',
        type: 'checkbox'
    }
};

export const FibroidsMyomaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasFibroidsMyoma',
        formGroup: NonMedFormGroup,
        fieldName: 'Fibroids/Myoma',
        type: 'checkbox'
    }
};

export const PolycysticKidneyColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPolycysticKidney',
        formGroup: NonMedFormGroup,
        fieldName: 'Polycystic Kidney Disease',
        type: 'checkbox'
    }
};

export const KidneyStoneColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasKidneyStone',
        formGroup: NonMedFormGroup,
        fieldName: 'Kidney Stone',
        type: 'checkbox'
    }
};

export const GallBladderStoneColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGallBladderStone',
        formGroup: NonMedFormGroup,
        fieldName: 'Gall Bladder Stone',
        type: 'checkbox'
    }
};

export const GlomerulonephritisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGlomerulonephritis',
        formGroup: NonMedFormGroup,
        fieldName: 'Glomerulonephritis',
        type: 'checkbox'
    }
};

export const MenstrualProblemColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasMenstrualProblem',
        formGroup: NonMedFormGroup,
        fieldName: 'Menstrual Problem',
        type: 'checkbox'
    }
};

export const UrinaryTractInfectionColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasUrinaryTractInfection',
        formGroup: NonMedFormGroup,
        fieldName: 'Urinary Tract Infection',
        type: 'checkbox'
    }
};

export const ProteinBloodUrineColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasProteinBloodUrine',
        formGroup: NonMedFormGroup,
        fieldName: 'Protein or Blood in Urine',
        type: 'checkbox'
    }
};

export const KidneyFailureColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasKidneyFailure',
        formGroup: NonMedFormGroup,
        fieldName: 'Kidney Failure',
        type: 'checkbox'
    }
};

export const EnlargedProstateColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasEnlargedProstate',
        formGroup: NonMedFormGroup,
        fieldName: 'Enlargement of Prostate / Benign Prostatic Hyperplasia',
        type: 'checkbox'
    }
};

export const PelvicInflammatoryDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPelvicInflammatoryDisease',
        formGroup: NonMedFormGroup,
        fieldName: 'Pelvic Inflammatory Disease',
        type: 'checkbox'
    }
};

export const PyelonephritisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPyelonephritis',
        formGroup: NonMedFormGroup,
        fieldName: 'Pyelonephritis',
        type: 'checkbox'
    }
};

export const UrethritisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasUrethritis',
        formGroup: NonMedFormGroup,
        fieldName: 'Urethritis',
        type: 'checkbox'
    }
};

export const NephritisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasNephritis',
        formGroup: NonMedFormGroup,
        fieldName: 'Nephritis',
        type: 'checkbox'
    }
};

export const HydronephosisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHydronephosis',
        formGroup: NonMedFormGroup,
        fieldName: 'Hydronephosis',
        type: 'checkbox'
    }
};

export const NormalDeliveryColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasNormalDelivery',
        formGroup: NonMedFormGroup,
        fieldName: 'Normal Delivery',
        type: 'checkbox'
    }
};

export const CaesareanDeliveryColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasCaesareanDelivery',
        formGroup: NonMedFormGroup,
        fieldName: 'Caesarean Delivery',
        type: 'checkbox'
    }
};

export const MiscarriageColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasMiscarriage',
        formGroup: NonMedFormGroup,
        fieldName: 'Miscarriage or abortion',
        type: 'checkbox'
    }
};

export const OtherKidneyDisorderColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherKidneyDisorder',
        formGroup: NonMedFormGroup,
        fieldName: 'Other',
        type: 'checkbox'
    }
};

// * abnormalGrowth
export const CystsColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasCysts',
        formGroup: NonMedFormGroup,
        fieldName: 'Cysts',
        type: 'checkbox'
    }
};

export const PolypsColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPolyps',
        formGroup: NonMedFormGroup,
        fieldName: 'Polyps',
        type: 'checkbox'
    }
};

export const GrowthColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGrowth',
        formGroup: NonMedFormGroup,
        fieldName: 'Growth',
        type: 'checkbox'
    }
};

export const LumpsColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasLumps',
        formGroup: NonMedFormGroup,
        fieldName: 'Lumps',
        type: 'checkbox'
    }
};

export const MoleColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasMole',
        formGroup: NonMedFormGroup,
        fieldName: 'Mole',
        type: 'checkbox'
    }
};

export const PreCancerousColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPreCancerous',
        formGroup: NonMedFormGroup,
        fieldName: 'Pre-cancerous',
        type: 'checkbox'
    }
};

export const AtypiaColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAtypia',
        formGroup: NonMedFormGroup,
        fieldName: 'Atypia',
        type: 'checkbox'
    }
};

export const OtherAbnormalGrowthColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherAbnormalGrowth',
        formGroup: NonMedFormGroup,
        fieldName: 'Others',
        type: 'checkbox'
    }
};
