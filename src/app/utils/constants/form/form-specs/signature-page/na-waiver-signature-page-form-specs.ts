import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { NAFormGroup, ApplicantOwnerFormGroup } from '@form-group/signature-page/signature-page-form-group';
import { GenericFormSpecs } from '@form-specs/signature-page/generic-form-specs';
import {signaturePad} from '@form-specs/signature-page/contents/signature-pad';

export const NAWaiverColumnGeneratorSpecs: Array<ColumnGeneratorSpecs> = [
        {
            template: `<p style="text-align: justify;">I have selected `+NAFormGroup.get('needType').value+` as the need based on my current experience and hereby waive 
                                                                the completion of the ‘My Needs Analysis’ questionnaire of Allianz PNB Life Insurance, Inc. due to at least one of the following reasons:</p>

                                                                <ol>
                                                                    <li>I have done a similar analysis before and I am aware of my needs;</li>
                                                                    <li>I cannot provide all the information that the Financial Advisor requests;</li>
                                                                    <li>I do not have the time to provide the necessary information;</li>
                                                                </ol>
                                                                
                                                                <p style="text-align: justify;">I understand that the Financial Advisor is providing an advice based on limited information and/or the advice 
                                                                is based on no needs analysis being accomplished.</p>
                                                                
                                                                <p style="text-align: justify;">I also understand that since a full analysis was not completed, the appropriateness of the advice is also limited 
                                                                and I take full responsibility in considering whether the advice is appropriate to my actual needs.</p>`
        }
]

export function updateNAWaiver(){
    NAWaiverColumnGeneratorSpecs[0].template = `<p style="text-align: justify;">I have selected `+NAFormGroup.get('needType').value+` as the need based on my current experience and hereby waive 
                                                                the completion of the ‘My Needs Analysis’ questionnaire of Allianz PNB Life Insurance, Inc. due to at least one of the following reasons:</p>

                                                                <ol>
                                                                    <li>I have done a similar analysis before and I am aware of my needs;</li>
                                                                    <li>I cannot provide all the information that the Financial Advisor requests;</li>
                                                                    <li>I do not have the time to provide the necessary information;</li>
                                                                </ol>
                                                                
                                                                <p style="text-align: justify;">I understand that the Financial Advisor is providing an advice based on limited information and/or the advice 
                                                                is based on no needs analysis being accomplished.</p>
                                                                
                                                                <p style="text-align: justify;">I also understand that since a full analysis was not completed, the appropriateness of the advice is also limited 
                                                                and I take full responsibility in considering whether the advice is appropriate to my actual needs.</p>`;
}

export const NAWaiverContentRowGeneratorSpecs: Array<RowGeneratorSpecs> = [
        {
            columns: [{ text: 'Needs Analysis Waiver' }],
            class: 'form-sub-section-title'
        },
        {
            columns: NAWaiverColumnGeneratorSpecs
        },
        {
            columns: [
                {
                    field: {
                        setFieldName: false,
                        attName: "needsAnalysisWaiverCheck",
                        fieldName: `I have read and understood...`,
                        type: "checkbox",
                        formGroup: ApplicantOwnerFormGroup,
                        isRequired: true
                    }
                }
            ]
        }
    ]

export const NAWaiverRowGeneratorSpecs: RowGeneratorSpecs = {
	columns: [
	    { text: 'Needs Analysis Waiver', size: 10 },
	    {
	        button: {
	            fill: 'clear',
	            color: 'primary',
	            icon: 'document',
	            function: () => {
                signaturePad.show = false;
                GenericFormSpecs.rows = NAWaiverContentRowGeneratorSpecs;
	            }
	        },
	        size: 2
	    }
	],
	class: 'panel-listings'
}