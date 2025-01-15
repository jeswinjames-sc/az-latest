import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { SCORE_DISPLAY_BLOCKS } from '@utils/constants/modules/irpq/result/score-display-blocks';
import * as _ from 'lodash';
import { BaseEditButton, BaseSubmitButton } from '@utils/constants/buttons';

export const TotalScoreSpecs: ColumnGeneratorSpecs = {}

export const ScoreDisplaySpecs: ColumnGeneratorSpecs = {}

export const BottomTextSpecs: ColumnGeneratorSpecs = {
    template: `Allianz PNB Life Insurance, Inc. is committed to respecting the privacy of your personal information in the
    accomplishment of this questionnaire. We gather this information strictly for your own use. We will not provide or
    sell any information contained herein to any third party. No sales person will call you unless you specifically request 
    it. In order to maintain a current risk stance, the result of this questionnaire is valid for 1 year from the date of 
    completion.`
}

export const EditButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        ..._.clone(BaseEditButton)
    },
    size: 6
}

export const SubmitButtonSpecs: ColumnGeneratorSpecs = {
    button: {
        ..._.clone(BaseSubmitButton)
    },
    size: 6
}