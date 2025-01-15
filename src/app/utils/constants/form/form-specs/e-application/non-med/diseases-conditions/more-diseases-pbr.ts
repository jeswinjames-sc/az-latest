import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { NonMedPBRFormGroup } from '@form-group/e-app/non-med-pbr-form-group';
import * as MoreDiseasePBRSpecs from '@form/column-specs/e-application/more-diseases-pbr-col-specs';

/**
 * Naming disease name (diseases.ts) Capitalized + FormSpecs,
 * for dynamic adding of conditional function
 */

/**
 * Naming disease name (diseases.ts) Capitalized + FormSpecs,
 * for dynamic adding of conditional function
 */

export const HighBloodFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Heart and Cardiovascular' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                MoreDiseasePBRSpecs.HypertensionColSpecs,
                MoreDiseasePBRSpecs.IrregularHeartbeatColSpecs,
                MoreDiseasePBRSpecs.ChestPainColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.StrokeColSpecs,
                MoreDiseasePBRSpecs.HeartAttackColSpecs,
                MoreDiseasePBRSpecs.HeartMurmurColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.HoleInTheHeartColSpecs,
                MoreDiseasePBRSpecs.HeartFailureColSpecs,
                MoreDiseasePBRSpecs.OtherHeartAndCardiovascularDiseaseColSpecs
            ]
        }
    ]
};

export const LungDiseaseFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Lung and Respiratory' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                MoreDiseasePBRSpecs.AsthmaColSpecs,
                MoreDiseasePBRSpecs.BronchitisColSpecs,
                MoreDiseasePBRSpecs.EmphysemaColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.PneumoniaColSpecs,
                MoreDiseasePBRSpecs.SleepApneaColSpecs,
                MoreDiseasePBRSpecs.ChronicObstructiveColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.PulmonaryTBColSpecs,
                MoreDiseasePBRSpecs.CovidColSpecs,
                MoreDiseasePBRSpecs.OtherLungDiseaseColSpecs
            ]
        }
    ]
};

export const MentalDysfunctionFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Mental Dysfunction' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                MoreDiseasePBRSpecs.DepressionColSpecs,
                MoreDiseasePBRSpecs.AnxietyColSpecs,
                MoreDiseasePBRSpecs.EatingDisorderColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.SuicideAttemptsColSpecs,
                MoreDiseasePBRSpecs.BipolarColSpecs,
                MoreDiseasePBRSpecs.SchizopreniaColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.AlcoholProblemColSpecs,
                MoreDiseasePBRSpecs.AlzheimerColSpecs,
                MoreDiseasePBRSpecs.OtherMentalDysfunctionColSpecs
            ]
        },
    ]
};

export const NeurologicalDysfunctionFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Neurological Dysfunction' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                MoreDiseasePBRSpecs.EpilepsyColSpecs,
                MoreDiseasePBRSpecs.SeizuresColSpecs,
                MoreDiseasePBRSpecs.BlackoutsColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.NervePainColSpecs,
                MoreDiseasePBRSpecs.SciaticaColSpecs,
                MoreDiseasePBRSpecs.MultipleSclerosisColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.BrainTumorColSpecs,
                MoreDiseasePBRSpecs.OtherNeurologicalDysfunctionColSpecs
            ]
        }
    ]
};

export const BloodDiseaseFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Blood and Liver' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                MoreDiseasePBRSpecs.HepatitisBCColSpecs,
                MoreDiseasePBRSpecs.ThalassemiaColSpecs,
                MoreDiseasePBRSpecs.BloodDisorderColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.MeningitisColSpecs,
                MoreDiseasePBRSpecs.HIVAIDSColSpecs,
                MoreDiseasePBRSpecs.STDColSpecs,
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.OtherBloodDiseaseColSpecs
            ]
        }
    ]
};

export const PhysicalDeformityFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Physical Deformity' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                MoreDiseasePBRSpecs.PoliomyelitisColSpecs,
                MoreDiseasePBRSpecs.ParalysisColSpecs,
                MoreDiseasePBRSpecs.BlindDeafMuteColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.OtherPhysicalDeformityColSpecs
            ]
        }
    ]
};

export const DiabetesFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Diabetes and Thyroid Diseases' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                MoreDiseasePBRSpecs.Diabetes1ColSpecs,
                MoreDiseasePBRSpecs.Diabetes2ColSpecs,
                MoreDiseasePBRSpecs.ImpairedFastingGlucoseColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.GestationalDiabetesColSpecs,
                MoreDiseasePBRSpecs.SimpleToxicGoiterColSpecs,
                MoreDiseasePBRSpecs.GravesDiseaseColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.HashimotoThyroiditisColSpecs,
                MoreDiseasePBRSpecs.HyperthyroidismColSpecs,
                MoreDiseasePBRSpecs.HypothyroidismColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.GoutColSpecs,
                MoreDiseasePBRSpecs.HormonalImbalanceColSpecs,
                MoreDiseasePBRSpecs.AbnormalLipidsColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.OtherDiabetesColSpecs
            ]
        }
    ]
};

export const SkinMuscleDisorderFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Muscular, Skin and Skeletal' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                MoreDiseasePBRSpecs.SlipDiscColSpecs,
                MoreDiseasePBRSpecs.PsoriasisColSpecs,
                MoreDiseasePBRSpecs.BackPainColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.PelvicInflammatoryDiseaseColSpecs,
                MoreDiseasePBRSpecs.ArthritisColSpecs,
                MoreDiseasePBRSpecs.KneeProblemColSpecs,
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.JointProblemColSpecs,
                MoreDiseasePBRSpecs.CartilageLigamentProblemColSpecs,
                MoreDiseasePBRSpecs.EczemaColSpecs,
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.AllergyColSpecs,
                MoreDiseasePBRSpecs.OthersSkinMuscleDisorderColSpecs
            ]
        }
    ]
};

export const StomachProblemsFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Gastrointestinal' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                MoreDiseasePBRSpecs.GastrointestinalColSpecs,
                MoreDiseasePBRSpecs.GastritisColSpecs,
                MoreDiseasePBRSpecs.UlcersColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.GerdColSpecs,
                MoreDiseasePBRSpecs.DyspepsiaColSpecs,
                MoreDiseasePBRSpecs.EsophagusRefluxColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.CrohnDiseaseColSpecs,
                MoreDiseasePBRSpecs.UlcerativeColitisColSpecs,
                MoreDiseasePBRSpecs.PancreasDiseaseColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.LiverFailureColSpecs,
                MoreDiseasePBRSpecs.HemorrhoidsColSpecs,
                MoreDiseasePBRSpecs.HerniaColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.OthersStomachProblemsColSpecs
            ]
        }
    ]
};

export const CongenitalDisorderFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Congenital and Developmental Disorder' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                MoreDiseasePBRSpecs.DownSyndromeColSpecs,
                MoreDiseasePBRSpecs.AutismSpectrumDisorderColSpecs,
                MoreDiseasePBRSpecs.CongenitalHeartDiseaseColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.OtherCongenitalDisorderColSpecs
            ]
        }
    ]
};

export const KidneyDisorderFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Kidney and Reproductive (including child birth and pregnancy complications)' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                MoreDiseasePBRSpecs.EndometriosisColSpecs,
                MoreDiseasePBRSpecs.FibroidsMyomaColSpecs,
                MoreDiseasePBRSpecs.PolycysticKidneyColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.KidneyStoneColSpecs,
                MoreDiseasePBRSpecs.GallBladderStoneColSpecs,
                MoreDiseasePBRSpecs.GlomerulonephritisColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.MenstrualProblemColSpecs,
                MoreDiseasePBRSpecs.UrinaryTractInfectionColSpecs,
                MoreDiseasePBRSpecs.ProteinBloodUrineColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.KidneyFailureColSpecs,
                MoreDiseasePBRSpecs.EnlargedProstateColSpecs,
                MoreDiseasePBRSpecs.PyelonephritisColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.UrethritisColSpecs,
                MoreDiseasePBRSpecs.NephritisColSpecs,
                MoreDiseasePBRSpecs.HydronephosisColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.NormalDeliveryColSpecs,
                MoreDiseasePBRSpecs.CaesareanDeliveryColSpecs,
                MoreDiseasePBRSpecs.MiscarriageColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.OtherKidneyDisorderColSpecs
            ]
        }
    ]
};

export const AbnormalGrowthFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Cysts and Lumps or any Abnormal Growth' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                MoreDiseasePBRSpecs.CystsColSpecs,
                MoreDiseasePBRSpecs.PolypsColSpecs,
                MoreDiseasePBRSpecs.GrowthColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.LumpsColSpecs,
                MoreDiseasePBRSpecs.MoleColSpecs,
                MoreDiseasePBRSpecs.PreCancerousColSpecs
            ]
        },
        {
            columns: [
                MoreDiseasePBRSpecs.AtypiaColSpecs,
                MoreDiseasePBRSpecs.OtherAbnormalGrowthColSpecs
            ]
        }
    ]
};

function setSelectedMoreDisease(disease: string) {
    isMoreDiseaseSelected[disease] = !isMoreDiseaseSelected[disease]
}

export let isMoreDiseaseSelected = {
    hasHypertension: false,
    hasIrregularHeartbeat: false,
    hasChestPain: false,
    hasStroke: false,
    hasHeartAttack: false,
    hasHeartMurmur: false,
    hasHoleInTheHeart: false,
    hasHeartFailure: false,
    hasOtherHeartAndCardiovascularDisease: false,

    hasAsthma: false,
    hasBronchitis: false,
    hasEmphysema: false,
    hasPneumonia: false,
    hasSleepApnea: false,
    hasChronicObstructive: false,
    hasPulmonaryTB: false,
    hasOtherLungDisease: false,

    hasDepression: false,
    hasAnxiety: false,
    hasEatingDisorder: false,
    hasSuicideAttempts: false,
    hasBipolar: false,
    hasSchizoprenia: false,
    hasAlcoholProblem: false,
    hasAlzheimer: false,
    hasOtherMentalDysfunction: false,

    hasEpilepsy: false,
    hasSeizures: false,
    hasBlackouts: false,
    hasNervePain: false,
    hasSciatica: false,
    hasMultipleSclerosis: false,
    hasBrainTumor: false,
    hasOtherNeurologicalDysfunction: false,

    hasHepatitisBC: false,
    hasThalassemia: false,
    hasBloodDisorder: false,
    hasMeningitis: false,
    hasHIVAIDS: false,
    hasSTD: false,
    hasOtherBloodDisease: false,

    hasPoliomyelitis: false,
    hasParalysis: false,
    isBlindDeafMute: false,
    hasOtherPhysicalDeformity: false,

    hasDiabetes1: false,
    hasDiabetes2: false,
    hasImpairedFastingGlucose: false,
    hasGestationalDiabetes: false,
    hasSimpleToxicGoiter: false,
    hasGravesDisease: false,
    hasHashimotoThyroiditis: false,
    hasHyperthyroidism: false,
    hasHypothyroidism: false,
    hasGout: false,
    hasHormonalImbalance: false,
    hasAbnormalLipids: false,
    hasOtherDiabetes: false,

    hasSlipDisc: false,
    hasPelvicInflammatoryDisease: false,
    hasBackPain: false,
    hasArthritis: false,
    hasKneeProblem: false,
    hasJointProblem: false,
    hasCartilageLigamentProblem: false,
    hasEczema: false,
    hasAllergy: false,
    hasPsoriasis: false,
    hasOthersSkinMuscleDisorder: false,

    hasGastrointestinal: false,
    hasGastritis: false,
    hasUlcers: false,
    hasGerd: false,
    hasDyspepsia: false,
    hasEsophagusReflux: false,
    hasCrohnDisease: false,
    hasUlcerativeColitis: false,
    hasPancreasDisease: false,
    hasLiverFailure: false,
    hasHemorrhoids: false,
    hasHernia: false,
    hasOthersStomachProblems: false,

    hasDownSyndrome: false,
    hasAutismSpectrumDisorder: false,
    hasCongenitalHeartDisease: false,
    hasOtherCongenitalDisorder: false,

    hasEndometriosis: false,
    hasFibroidsMyoma: false,
    hasPolycysticKidney: false,
    hasKidneyStone: false,
    hasGallBladderStone: false,
    hasGlomerulonephritis: false,
    hasMenstrualProblem: false,
    hasUrinaryTractInfection: false,
    hasProteinBloodUrine: false,
    hasKidneyFailure: false,
    hasEnlargedProstate: false,
    hasPyelonephritis: false,
    hasUrethritis: false,
    hasNephritis: false,
    hasHydronephosis: false,
    hasNormalDelivery: false,
    hasCaesareanDelivery: false,
    hasMiscarriage: false,
    hasOtherKidneyDisorder: false,

    hasCysts: false,
    hasPolyps: false,
    hasGrowth: false,
    hasLumps: false,
    hasMole: false,
    hasPreCancerous: false,
    hasAtypia: false,
    hasOtherAbnormalGrowth: false
};
