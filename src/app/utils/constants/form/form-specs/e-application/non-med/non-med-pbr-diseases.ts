import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { Subject } from 'rxjs';
import * as DiseaseSpecs from '@form/column-specs/e-application/diseases-pbr-col-specs';

export let selectedDiseases: Subject<string[]> = new Subject<string[]>()

export const NonMedDiseasesFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                DiseaseSpecs.HighBloodColSpecs,
                DiseaseSpecs.LungDiseaseColSpecs
            ]
        },
        {
            columns: [
                DiseaseSpecs.MentalDysfunctionColSpecs,
                DiseaseSpecs.NeurologicalDysfunctionColSpecs
            ]
        },
        {
            columns: [
                DiseaseSpecs.BloodDiseaseColSpecs,
                DiseaseSpecs.PhysicalDeformityColSpecs
            ]
        },
        {
            columns: [
                DiseaseSpecs.DiabetesColSpecs,
                DiseaseSpecs.SkinMuscleDisorderColSpecs
            ]
        },
        {
            columns: [
                DiseaseSpecs.StomachProblemsColSpecs,
                DiseaseSpecs.CongenitalDisorderColSpecs
            ]
        },
        {
            columns: [
                DiseaseSpecs.KidneyDisorderColSpecs,
                DiseaseSpecs.CancerColSpecs
            ]
        },
        {
            columns: [
                DiseaseSpecs.AbnormalGrowthColSpecs,
                DiseaseSpecs.LipidsColSpecs
            ]
        },
        {
            columns: [
                DiseaseSpecs.OtherDefectColSpecs
            ]
        },
        {
            columns: [
                DiseaseSpecs.diseasesLabelColSpecs
            ],
            isHidden: true
        }
    ]
};

export let isDiseaseSelected = {
    highBlood: false,
    lungDisease: false,
    mentalDysfunction: false,
    neurologicalDysfunction: false,
    bloodDisease: false,
    physicalDeformity: false,
    diabetes: false,
    skinMuscleDisorder: false,
    stomachProblems: false,
    congenitalDisorder: false,
    kidneyDisorder: false,
    cancer: false,
    abnormalGrowth: false,
    otherDefect: false,
    lipids: false
};
