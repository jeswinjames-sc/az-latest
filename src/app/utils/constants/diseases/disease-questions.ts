import { Validators } from '@angular/forms';
import { REGEXP } from '../regexp/regexp';

export const DISEASE_QUESTIONS = {
    ADHERE: {
        formCtrl: [Validators.required],
        value: 'Adhere'
    },
    ALB_PRO: {
        formCtrl: [Validators.required],
        value: 'AlbuminProtein'
    },
    APP_SYMP: {
        formCtrl: [],
        value: 'AppSymptoms'
    },
    APP_SYMP_FW: {
        formCtrl: [],
        value: 'AppSymptomsFatigue'
    },
    APP_SYMP_HV: {
        formCtrl: [],
        value: 'AppSymptomsHoarse'
    },
    APP_SYMP_WL: {
        formCtrl: [],
        value: 'AppSymptomsWeight'
    },
    APP_SYMP_CI: {
        formCtrl: [],
        value: 'AppSymptomsCold'
    },
    APP_SYMP_BL: {
        formCtrl: [],
        value: 'AppSymptomsBloating'
    },
    APP_SYMP_NA: {
        formCtrl: [],
        value: 'AppSymptomsNausea'
    },
    APP_SYMP_HE: {
        formCtrl: [],
        value: 'AppSymptomsHeartburn'
    },
    APP_SYMP_AR: {
        formCtrl: [],
        value: 'AppSymptomsAcid'
    },
    APP_SYMP_ED: {
        formCtrl: [],
        value: 'AppSymptomsEpigastric'
    },
    APP_SYMP_LA: {
        formCtrl: [],
        value: 'AppSymptomsLoss'
    },
    APP_SYMP_FE: {
        formCtrl: [],
        value: 'AppSymptomsFever'
    },
    APP_SYMP_NS: {
        formCtrl: [],
        value: 'AppSymptomsNight'
    },
    APP_SYMP_CH: {
        formCtrl: [],
        value: 'AppSymptomsChills'
    },
    APP_SYMP_CTW: {
        formCtrl: [],
        value: 'AppSymptomsCoughThreeWeeks'
    },
    APP_SYMP_CB: {
        formCtrl: [],
        value: 'AppSymptomsCoughBlood'
    },
    APP_SYMP_CP: {
        formCtrl: [],
        value: 'AppSymptomsChestPain'
    },
    ATTACK_DURATION: {
        formCtrl: [Validators.required],
        value: 'AttackDuration'
    },
    ATTACK_FREQ_UNIT: {
        formCtrl: [Validators.required],
        value: 'AttackFrequencyUnit'
    },
    ATTACK_FREQ_VAL: {
        formCtrl: [Validators.required, Validators.maxLength(2)],
        value: 'AttackFrequencyValue'
    },
    BP_READING_DIA: {
        formCtrl: [Validators.required, Validators.maxLength(3)],
        value: 'BloodPressureReadingDia'
    },
    BP_READING_SYS: {
        formCtrl: [Validators.required, Validators.maxLength(3)],
        value: 'BloodPressureReadingSys'
    },
    CIRC_PROB: {
        formCtrl: [Validators.required],
        value: 'CirculationProb'
    },
    COMM_TREATMENT: {
        formCtrl: [Validators.required],
        value: 'CommencedTreatmentForm'
    },
    COMM_TREATMENT_DT: {
        formCtrl: [Validators.required],
        value: 'CommencedTreatmentDt'
    },
    CURR_MED: {
        formCtrl: [Validators.required, Validators.pattern(REGEXP.LEGAL_NAME)],
        value: 'CurMed'
    },
    CURR_TREATMENT: {
        formCtrl: [Validators.required],
        value: 'CurrTreatment'
    },
    DIAGNOSIS: {
        formCtrl: [Validators.required, Validators.pattern(REGEXP.LEGAL_NAME)],
        value: 'Diagnosis'
    },
    DISCOVERY_DATE: {
        formCtrl: [Validators.required],
        value: 'DiscoveryDiagDate'
    },
    DISCOVERY_DURATION: {
        formCtrl: [Validators.required, Validators.pattern(REGEXP.NUMERIC)],
        value: 'DiscoveryDuration'
    },
    DISCOVERY_DURATION_UNIT: {
        formCtrl: [Validators.required],
        value: 'DiscoveryDurationUnit'
    },
    DISEASE_NAME: {
        formCtrl: [Validators.required],
        value: 'DiseaseName'
    },
    DOCTOR_NAME: {
        formCtrl: [Validators.required, Validators.pattern(REGEXP.LEGAL_NAME)],
        value: 'DoctorName'
    },
    ELEV_BP: {
        formCtrl: [Validators.required],
        value: 'ElevatedBP'
    },
    EXP_SYMP: {
        formCtrl: [Validators.required],
        value: 'ExpSymptoms'
    },
    EYE_TROUBLE: {
        formCtrl: [Validators.required],
        value: 'EyeTrouble'
    },
    FIRST_ATTACK: {
        formCtrl: [Validators.required],
        value: 'FirstAttack'
    },
    FIRST_EPISODE: {
        formCtrl: [Validators.required],
        value: '1stEpisode'
    },
    FREQ_ATTACK: {
        formCtrl: [Validators.required],
        value: 'FrequentAttack'
    },
    FREQ_UNIT: {
        formCtrl: [Validators.required],
        value: 'FreqUnit'
    },
    FREQ_VALUE: {
        formCtrl: [Validators.required, Validators.maxLength(2)],
        value: 'FreqValue'
    },
    HEART_ATTACK: {
        formCtrl: [Validators.required],
        value: 'HeartAttack'
    },
    KIDNEY_TROUBLE: {
        formCtrl: [Validators.required],
        value: 'KidneyTrouble'
    },
    LAST_ATTACK: {
        formCtrl: [Validators.required],
        value: 'LastAttack'
    },
    LAST_CHECKUP: {
        formCtrl: [Validators.required],
        value: 'LastCheckup'
    },
    LAST_CHEST_PAIN: {
        formCtrl: [Validators.required],
        value: 'LastChestPain'
    },
    LASTS: {
        formCtrl: [Validators.required],
        value: 'Lasts'
    },
    MED_REVIEW: {
        formCtrl: [Validators.required],
        value: 'MedReview'
    },
    NAME: {
        formCtrl: [Validators.required],
        value: 'Name'
    },
    OFTEN_CONSULTATION: {
        formCtrl: [Validators.required],
        value: 'OftenConsultation'
    },
    OPT_CONTEMPLATED: {
        formCtrl: [Validators.required],
        value: 'OptContemplated'
    },
    PAST_HOSP: {
        formCtrl: [Validators.required],
        value: 'PastHosp'
    },
    PROB_VISION: {
        formCtrl: [Validators.required],
        value: 'ProbVision'
    },
    REC_TREATMENT: {
        formCtrl: [Validators.required],
        value: 'RecommendedTreatment'
    },
    RECOVERED_WORK: {
        formCtrl: [Validators.required],
        value: 'RecoveredWork'
    },
    RECUR_INFECT: {
        formCtrl: [Validators.required],
        value: 'RecurrInfections'
    },
    RETURN_WORK: {
        formCtrl: [Validators.required],
        value: 'ReturnWork'
    },
    SEIZURE_FREQ_UNIT: {
        formCtrl: [Validators.required],
        value: 'SeizureFreqUnit'
    },
    SEIZURE_FREQ_VALUE: {
        formCtrl: [Validators.required, Validators.maxLength(2)],
        value: 'SeizureFreqValue'
    },
    SEIZURE_LAST_ATTACK: {
        formCtrl: [Validators.required],
        value: 'SeizureLastAttack'
    },
    SEIZURE_LASTS: {
        formCtrl: [Validators.required],
        value: 'SeizureLasts'
    },
    SEVERE_ATTACK: {
        formCtrl: [Validators.required],
        value: 'SevereAttack'
    },
    SPEC_CONDITION: {
        formCtrl: [Validators.required],
        value: 'SpecCondition'
    },
    SURFACE_AFFECTED: {
        formCtrl: [Validators.required, Validators.maxLength(50)],
        value: 'SurfaceAffected'
    },
    SYMP_FREQ_UNIT: {
        formCtrl: [Validators.required],
        value: 'SymptomsFreqUnit'
    },
    SYMP_FREQ_VAL: {
        formCtrl: [Validators.required, Validators.maxLength(2)],
        value: 'SymptomsFreqValue'
    }
};
