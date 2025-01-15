import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import * as ResultColSpecs from '@utils/constants/form/column-specs/irpq/result/index';

export const ResultFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                ResultColSpecs.TotalScoreSpecs
            ]
        },
        {
            columns: [
                ResultColSpecs.ScoreDisplaySpecs
            ]
        },
        {
            class: "ion-text-justify",
            columns: [
                ResultColSpecs.BottomTextSpecs
            ]
        },
        {
            columns: [
                ResultColSpecs.EditButtonSpecs,
                ResultColSpecs.SubmitButtonSpecs
            ]
        }
    ]
}