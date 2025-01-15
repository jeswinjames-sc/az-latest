import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { NonMedFormGroup } from '@form-group/e-app/non-med-form-group';
import * as MoreDiseaseSpecs from '@form/column-specs/e-application/more-diseases-col-specs';

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
                MoreDiseaseSpecs.HypertensionColSpecs,
                MoreDiseaseSpecs.IrregularHeartbeatColSpecs,
                MoreDiseaseSpecs.ChestPainColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.StrokeColSpecs,
                MoreDiseaseSpecs.HeartAttackColSpecs,
                MoreDiseaseSpecs.HeartMurmurColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.HoleInTheHeartColSpecs,
                MoreDiseaseSpecs.HeartFailureColSpecs,
                MoreDiseaseSpecs.OtherHeartAndCardiovascularDiseaseColSpecs
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
                MoreDiseaseSpecs.AsthmaColSpecs,
                MoreDiseaseSpecs.BronchitisColSpecs,
                MoreDiseaseSpecs.EmphysemaColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.PneumoniaColSpecs,
                MoreDiseaseSpecs.SleepApneaColSpecs,
                MoreDiseaseSpecs.ChronicObstructiveColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.PulmonaryTBColSpecs,
                MoreDiseaseSpecs.CovidColSpecs,
                MoreDiseaseSpecs.OtherLungDiseaseColSpecs

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
                MoreDiseaseSpecs.DepressionColSpecs,
                MoreDiseaseSpecs.AnxietyColSpecs,
                MoreDiseaseSpecs.EatingDisorderColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.SuicideAttemptsColSpecs,
                MoreDiseaseSpecs.BipolarColSpecs,
                MoreDiseaseSpecs.SchizopreniaColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.AlcoholProblemColSpecs,
                MoreDiseaseSpecs.AlzheimerColSpecs,
                MoreDiseaseSpecs.OtherMentalDysfunctionColSpecs
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
                MoreDiseaseSpecs.EpilepsyColSpecs,
                MoreDiseaseSpecs.SeizuresColSpecs,
                MoreDiseaseSpecs.BlackoutsColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.NervePainColSpecs,
                MoreDiseaseSpecs.SciaticaColSpecs,
                MoreDiseaseSpecs.MultipleSclerosisColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.BrainTumorColSpecs,
                MoreDiseaseSpecs.OtherNeurologicalDysfunctionColSpecs
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
                MoreDiseaseSpecs.HepatitisBCColSpecs,
                MoreDiseaseSpecs.ThalassemiaColSpecs,
                MoreDiseaseSpecs.BloodDisorderColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.MeningitisColSpecs,
                MoreDiseaseSpecs.HIVAIDSColSpecs,
                MoreDiseaseSpecs.STDColSpecs,
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.OtherBloodDiseaseColSpecs
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
                MoreDiseaseSpecs.PoliomyelitisColSpecs,
                MoreDiseaseSpecs.ParalysisColSpecs,
                MoreDiseaseSpecs.BlindDeafMuteColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.OtherPhysicalDeformityColSpecs
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
                MoreDiseaseSpecs.Diabetes1ColSpecs,
                MoreDiseaseSpecs.Diabetes2ColSpecs,
                MoreDiseaseSpecs.ImpairedFastingGlucoseColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.GestationalDiabetesColSpecs,
                MoreDiseaseSpecs.SimpleToxicGoiterColSpecs,
                MoreDiseaseSpecs.GravesDiseaseColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.HashimotoThyroiditisColSpecs,
                MoreDiseaseSpecs.HyperthyroidismColSpecs,
                MoreDiseaseSpecs.HypothyroidismColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.GoutColSpecs,
                MoreDiseaseSpecs.HormonalImbalanceColSpecs,
                MoreDiseaseSpecs.AbnormalLipidsColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.OtherDiabetesColSpecs
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
                MoreDiseaseSpecs.SlipDiscColSpecs,
                MoreDiseaseSpecs.PsoriasisColSpecs,
                MoreDiseaseSpecs.BackPainColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.PelvicInflammatoryDiseaseColSpecs,
                MoreDiseaseSpecs.ArthritisColSpecs,
                MoreDiseaseSpecs.KneeProblemColSpecs,
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.JointProblemColSpecs,
                MoreDiseaseSpecs.CartilageLigamentProblemColSpecs,
                MoreDiseaseSpecs.EczemaColSpecs,
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.AllergyColSpecs,
                MoreDiseaseSpecs.OthersSkinMuscleDisorderColSpecs
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
                MoreDiseaseSpecs.GastrointestinalColSpecs,
                MoreDiseaseSpecs.GastritisColSpecs,
                MoreDiseaseSpecs.UlcersColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.GerdColSpecs,
                MoreDiseaseSpecs.DyspepsiaColSpecs,
                MoreDiseaseSpecs.EsophagusRefluxColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.CrohnDiseaseColSpecs,
                MoreDiseaseSpecs.UlcerativeColitisColSpecs,
                MoreDiseaseSpecs.PancreasDiseaseColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.LiverFailureColSpecs,
                MoreDiseaseSpecs.HemorrhoidsColSpecs,
                MoreDiseaseSpecs.HerniaColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.OthersStomachProblemsColSpecs
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
                MoreDiseaseSpecs.DownSyndromeColSpecs,
                MoreDiseaseSpecs.AutismSpectrumDisorderColSpecs,
                MoreDiseaseSpecs.CongenitalHeartDiseaseColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.OtherCongenitalDisorderColSpecs
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
                MoreDiseaseSpecs.EndometriosisColSpecs,
                MoreDiseaseSpecs.FibroidsMyomaColSpecs,
                MoreDiseaseSpecs.PolycysticKidneyColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.KidneyStoneColSpecs,
                MoreDiseaseSpecs.GallBladderStoneColSpecs,
                MoreDiseaseSpecs.GlomerulonephritisColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.MenstrualProblemColSpecs,
                MoreDiseaseSpecs.UrinaryTractInfectionColSpecs,
                MoreDiseaseSpecs.ProteinBloodUrineColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.KidneyFailureColSpecs,
                MoreDiseaseSpecs.EnlargedProstateColSpecs,
                MoreDiseaseSpecs.PyelonephritisColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.UrethritisColSpecs,
                MoreDiseaseSpecs.NephritisColSpecs,
                MoreDiseaseSpecs.HydronephosisColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.NormalDeliveryColSpecs,
                MoreDiseaseSpecs.CaesareanDeliveryColSpecs,
                MoreDiseaseSpecs.MiscarriageColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.OtherKidneyDisorderColSpecs
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
                MoreDiseaseSpecs.CystsColSpecs,
                MoreDiseaseSpecs.PolypsColSpecs,
                MoreDiseaseSpecs.GrowthColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.LumpsColSpecs,
                MoreDiseaseSpecs.MoleColSpecs,
                MoreDiseaseSpecs.PreCancerousColSpecs
            ]
        },
        {
            columns: [
                MoreDiseaseSpecs.AtypiaColSpecs,
                MoreDiseaseSpecs.OtherAbnormalGrowthColSpecs
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
