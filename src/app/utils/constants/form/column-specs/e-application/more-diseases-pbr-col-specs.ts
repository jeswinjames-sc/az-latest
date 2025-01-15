import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { NonMedPBRFormGroup } from '@form-group/e-app/non-med-pbr-form-group';

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
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Hypertension',
        type: 'checkbox'
    }
};

export const IrregularHeartbeatColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasIrregularHeartbeat',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Irregular Heartbeat',
        type: 'checkbox'
    }
};

export const ChestPainColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasChestPain',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Chest Pain or Angina',
        type: 'checkbox'
    }
};

export const StrokeColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasStroke',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Stroke',
        type: 'checkbox'
    }
};

export const HeartAttackColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHeartAttack',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Heart Attack or Coronary Artery Disease',
        type: 'checkbox'
    }
};

export const HeartMurmurColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHeartMurmur',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Heart Murmur',
        type: 'checkbox'
    }
};

export const HoleInTheHeartColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHoleInTheHeart',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Hole in the Heart',
        type: 'checkbox'
    }
};

export const HeartFailureColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHeartFailure',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Heart Failure',
        type: 'checkbox'
    }
};

export const OtherHeartAndCardiovascularDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherHeartAndCardiovascularDisease',
        formGroup: NonMedPBRFormGroup,
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
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Asthma',
        type: 'checkbox'
    }
};

export const BronchitisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasBronchitis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Bronchitis',
        type: 'checkbox'
    }
};

export const EmphysemaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasEmphysema',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Emphysema',
        type: 'checkbox'
    }
};

export const PneumoniaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPneumonia',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Pneumonia',
        type: 'checkbox'
    }
};

export const CovidColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasCovid',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Covid',
        type: 'checkbox'
    }
};

export const SleepApneaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSleepApnea',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Sleep Apnea',
        type: 'checkbox'
    }
};

export const ChronicObstructiveColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasChronicObstructive',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Chronic Obstructive Pulmonary Disease (COPD)',
        type: 'checkbox'
    }
};

export const PulmonaryTBColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPulmonaryTB',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Pulmonary Tuberculosis',
        type: 'checkbox'
    }
};


export const SinusitisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSinusitis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Sinusitis',
        type: 'checkbox'
    }
};

export const URTIColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasURTI',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Upper Respiratory Tract Infection (URTI)/Systemic Viral Infection',
        type: 'checkbox'
    }
};

export const OtherLungDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherLungDisease',
        formGroup: NonMedPBRFormGroup,
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
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Depression',
        type: 'checkbox'
    }
};

export const AnxietyColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAnxiety',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Anxiety',
        type: 'checkbox'
    }
};

export const EatingDisorderColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasEatingDisorder',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Eating Disorder',
        type: 'checkbox'
    }
};

export const SuicideAttemptsColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSuicideAttempts',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Suicide Attempts',
        type: 'checkbox'
    }
};

export const BipolarColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasBipolar',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Bipolar',
        type: 'checkbox'
    }
};

export const SchizopreniaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSchizoprenia',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Schizophrenia',
        type: 'checkbox'
    }
};

export const AlcoholProblemColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAlcoholProblem',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Alcohol/Drug Problem',
        type: 'checkbox'
    }
};

export const AlzheimerColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAlzheimer',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Alzheimer',
        type: 'checkbox'
    }
};

export const OtherMentalDysfunctionColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherMentalDysfunction',
        formGroup: NonMedPBRFormGroup,
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
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Epilepsy',
        type: 'checkbox'
    }
};

export const SeizuresColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSeizures',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Seizures',
        type: 'checkbox'
    }
};

export const MeningitisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasMeningitis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Meningitis',
        type: 'checkbox'
    }
};

export const BlackoutsColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasBlackouts',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Blackouts',
        type: 'checkbox'
    }
};

export const NervePainColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasNervePain',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Nerve Pain',
        type: 'checkbox'
    }
};

export const SciaticaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSciatica',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Sciatica',
        type: 'checkbox'
    }
};

export const MultipleSclerosisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasMultipleSclerosis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Multiple Sclerosis',
        type: 'checkbox'
    }
};

export const BrainTumorColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasBrainTumor',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Brain Tumor',
        type: 'checkbox'
    }
};

export const OtherNeurologicalDysfunctionColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherNeurologicalDysfunction',
        formGroup: NonMedPBRFormGroup,
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
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Hepatitis B or C',
        type: 'checkbox'
    }
};

export const ThalassemiaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasThalassemia',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Thalassemia',
        type: 'checkbox'
    }
};

export const BloodDisorderColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasBloodDisorder',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Blood Disorder',
        type: 'checkbox'
    }
};

export const HIVAIDSColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHIVAIDS',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'HIV or AIDS related complex',
        type: 'checkbox'
    }
};

export const STDColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSTD',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Sexually Transmitted Disease',
        type: 'checkbox'
    }
};

export const OtherBloodDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherBloodDisease',
        formGroup: NonMedPBRFormGroup,
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
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Poliomyelitis',
        type: 'checkbox'
    }
};

export const ParalysisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasParalysis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Paralysis',
        type: 'checkbox'
    }
};

export const BlindDeafMuteColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'isBlindDeafMute',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Blind, Deaf or Mute',
        type: 'checkbox'
    }
};

export const OtherPhysicalDeformityColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherPhysicalDeformity',
        formGroup: NonMedPBRFormGroup,
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
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Diabetes Type 1',
        type: 'checkbox'
    }
};

export const Diabetes2ColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasDiabetes2',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Diabetes Type 2',
        type: 'checkbox'
    }
};

export const ImpairedFastingGlucoseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasImpairedFastingGlucose',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Impaired Fasting Glucose',
        type: 'checkbox'
    }
};

export const GestationalDiabetesColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGestationalDiabetes',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Gestational Diabetes',
        type: 'checkbox'
    }
};

export const SimpleToxicGoiterColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasSimpleToxicGoiter',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Simple/Toxic Goiter',
        type: 'checkbox'
    }
};

export const GravesDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGravesDisease',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Graves Disease',
        type: 'checkbox'
    }
};

export const HashimotoThyroiditisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHashimotoThyroiditis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Hashimoto/Thyroiditis',
        type: 'checkbox'
    }
};

export const HyperthyroidismColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHyperthyroidism',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Hyperthyroidism',
        type: 'checkbox'
    }
};

export const HypothyroidismColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHypothyroidism',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Hypothyroidism',
        type: 'checkbox'
    }
};

export const GoutColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGout',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Gout',
        type: 'checkbox'
    }
};

export const HormonalImbalanceColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHormonalImbalance',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Hormonal Imbalance',
        type: 'checkbox'
    }
};

export const AbnormalLipidsColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAbnormalLipids', // add more details
        formGroup: NonMedPBRFormGroup,
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
        formGroup: NonMedPBRFormGroup,
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
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Slip Disc',
        type: 'checkbox'
    }
};

export const PsoriasisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPsoriasis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Psoriasis',
        type: 'checkbox'
    }
};

export const BackPainColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasBackPain',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Back Pain',
        type: 'checkbox'
    }
};

export const ArthritisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasArthritis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Arthritis',
        type: 'checkbox'
    }
};

export const KneeProblemColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasKneeProblem',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Knee Problem',
        type: 'checkbox'
    }
};

export const JointProblemColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasJointProblem',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Joint Problem',
        type: 'checkbox'
    }
};

export const CartilageLigamentProblemColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasCartilageLigamentProblem',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Cartilage or Ligament Problem',
        type: 'checkbox'
    }
};

export const EczemaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasEczema',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Eczema',
        type: 'checkbox'
    }
};

export const AllergyColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAllergy',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Allergy',
        type: 'checkbox'
    }
};

export const OthersSkinMuscleDisorderColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOthersSkinMuscleDisorder',
        formGroup: NonMedPBRFormGroup,
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
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Stomach Problem',
        type: 'checkbox'
    }
};

export const GastritisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGastritis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Gastritis',
        type: 'checkbox'
    }
};

export const UlcersColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasUlcers',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Ulcers',
        type: 'checkbox'
    }
};

export const GerdColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGerd',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Gerd',
        type: 'checkbox'
    }
};

export const DyspepsiaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasDyspepsia',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Dyspepsia',
        type: 'checkbox'
    }
};

export const EsophagusRefluxColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasEsophagusReflux',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Esophagus Reflux',
        type: 'checkbox'
    }
};

export const CrohnDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasCrohnDisease',
        formGroup: NonMedPBRFormGroup,
        fieldName: `Crohn's Disease`,
        type: 'checkbox'
    }
};

export const UlcerativeColitisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasUlcerativeColitis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Ulcerative Colitis/Colitis',
        type: 'checkbox'
    }
};

export const PancreasDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPancreasDisease',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Disease of the Pancreas or Liver',
        type: 'checkbox'
    }
};

export const LiverFailureColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasLiverFailure',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Liver Failure/Liver Cirrhosis',
        type: 'checkbox'
    }
};

export const HemorrhoidsColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHemorrhoids',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Hemorrhoids',
        type: 'checkbox'
    }
};

export const HerniaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHernia',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Hernia',
        type: 'checkbox'
    }
};

export const OthersStomachProblemsColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOthersStomachProblems',
        formGroup: NonMedPBRFormGroup,
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
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Down Syndrome',
        type: 'checkbox'
    }
};

export const AutismSpectrumDisorderColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAutismSpectrumDisorder',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Autism Spectrum Disorder',
        type: 'checkbox'
    }
};

export const CongenitalHeartDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasCongenitalHeartDisease',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Congenital Heart Disease',
        type: 'checkbox'
    }
};

export const OtherCongenitalDisorderColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherCongenitalDisorder',
        formGroup: NonMedPBRFormGroup,
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
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Endometriosis',
        type: 'checkbox'
    }
};

export const FibroidsMyomaColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasFibroidsMyoma',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Fibroids/Myoma',
        type: 'checkbox'
    }
};

export const PolycysticKidneyColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPolycysticKidney',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Polycystic Kidney Disease',
        type: 'checkbox'
    }
};

export const KidneyStoneColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasKidneyStone',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Kidney Stone',
        type: 'checkbox'
    }
};

export const GallBladderStoneColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGallBladderStone',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Gall Bladder Stone',
        type: 'checkbox'
    }
};

export const GlomerulonephritisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGlomerulonephritis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Glomerulonephritis',
        type: 'checkbox'
    }
};

export const MenstrualProblemColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasMenstrualProblem',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Menstrual Problem',
        type: 'checkbox'
    }
};

export const UrinaryTractInfectionColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasUrinaryTractInfection',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Urinary Tract Infection',
        type: 'checkbox'
    }
};

export const ProteinBloodUrineColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasProteinBloodUrine',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Protein or Blood in Urine',
        type: 'checkbox'
    }
};

export const KidneyFailureColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasKidneyFailure',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Kidney Failure',
        type: 'checkbox'
    }
};

export const EnlargedProstateColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasEnlargedProstate',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Enlargement of Prostate / Benign Prostatic Hyperplasia',
        type: 'checkbox'
    }
};

export const PelvicInflammatoryDiseaseColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPelvicInflammatoryDisease',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Pelvic Inflammatory Disease',
        type: 'checkbox'
    }
};

export const PyelonephritisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPyelonephritis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Pyelonephritis',
        type: 'checkbox'
    }
};

export const UrethritisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasUrethritis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Urethritis',
        type: 'checkbox'
    }
};

export const NephritisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasNephritis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Nephritis',
        type: 'checkbox'
    }
};

export const HydronephosisColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasHydronephosis',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Hydronephosis',
        type: 'checkbox'
    }
};

export const NormalDeliveryColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasNormalDelivery',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Normal Delivery',
        type: 'checkbox'
    }
};

export const CaesareanDeliveryColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasCaesareanDelivery',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Caesarean Delivery',
        type: 'checkbox'
    }
};

export const MiscarriageColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasMiscarriage',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Miscarriage or abortion',
        type: 'checkbox'
    }
};

export const OtherKidneyDisorderColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherKidneyDisorder',
        formGroup: NonMedPBRFormGroup,
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
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Cysts',
        type: 'checkbox'
    }
};

export const PolypsColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPolyps',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Polyps',
        type: 'checkbox'
    }
};

export const GrowthColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasGrowth',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Growth',
        type: 'checkbox'
    }
};

export const LumpsColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasLumps',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Lumps',
        type: 'checkbox'
    }
};

export const MoleColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasMole',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Mole',
        type: 'checkbox'
    }
};

export const PreCancerousColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasPreCancerous',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Pre-cancerous',
        type: 'checkbox'
    }
};

export const AtypiaColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasAtypia',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Atypia',
        type: 'checkbox'
    }
};

export const OtherAbnormalGrowthColSpecs: ColumnGeneratorSpecs ={
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasOtherAbnormalGrowth',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Others',
        type: 'checkbox'
    }
};

export const LipidsColSpecs: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        setFieldName: false,
        attName: 'hasLipids',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Lipids',
        type: 'checkbox'
    }
};

