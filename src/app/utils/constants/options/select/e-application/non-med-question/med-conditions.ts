export const MED_CONDITIONS_KEY = {
    HYPERTENSION: 'NMED00000024_1',
    DIABETES: 'NMED00000024_2',
    ASTHMA: 'NMED00000024_3',
    LIPIDS: 'NMED00000024_4',
    COVID: 'NMED00000024_5',
    OTHERS: 'NMED00000024_OTHR',
}

export const MED_CONDITIONS = {
    'NMED00000024_1':'hasMedConHypertension',
    'NMED00000024_2':'hasMedConDiabetes',
    'NMED00000024_3':'hasMedConAstma',
    'NMED00000024_4':'hasMedConLipids',
    'NMED00000024_5':'hasMedConCovid',
    'NMED00000024_OTHR':'hasOtherMedConditions'
}


export const NON_MED_MEDICAL_CONDITIONS = [
    {
        key: MED_CONDITIONS_KEY.HYPERTENSION,
        value: 'Hypertension'
    },
    {
        key: MED_CONDITIONS_KEY.DIABETES,
        value: 'Diabetes'
    },
    {
        key: MED_CONDITIONS_KEY.ASTHMA,
        value: 'Asthma'
    },
    {
        key: MED_CONDITIONS_KEY.LIPIDS,
        value: 'Dyslipidemia/Hyperlipidemia/Abnormal Lipids'
    },
    {
        key: MED_CONDITIONS_KEY.COVID,
        value: 'COVID'
    },
    {
        key: MED_CONDITIONS_KEY.OTHERS,
        value: 'Others'
    }
];
