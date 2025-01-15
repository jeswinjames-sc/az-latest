import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { ApplicantOwnerFormGroup } from '@form-group/signature-page/signature-page-form-group';
import { GenericFormSpecs } from '@form-specs/signature-page/generic-form-specs';
import {signaturePad} from '@form-specs/signature-page/contents/signature-pad';
import { RowBlocksSpecs, ColumnBlocksSpecs } from '@models/blocks';

export const IRPQRowBlocksSpecs: RowBlocksSpecs = {
    columns: [
      {
        title: 'Total Score',
        content: null,
        size: 4,
        isActive: true
      },
      {
        title: 'Risk Profile',
        content: null,
        size: 4,
        isActive: true
      },
      {
        title: 'Recommended Allocation in Equity Investment',
        content: null,
        size: 4,
        isActive: true
      }
    ]
};

export const RiskAverseDef: string = '<p><strong>Risk Averse</strong> - You are most interested in protecting the value of your investment and you are satisfied with earnings from ordinary bank deposit products. Your investment horizon is short to moderate and you do not have tolerance for risk and volatility. You seek capital preservation.</p>';
export const ConservativeDef: string = '<p><strong>Conservative</strong> - You are comfortable having your assets managed conservatively with an emphasis on the stability that comes from fixed income investments, while generating capital appreciation overtime. Your investment horizon is short to moderate and your tolerance towards risk and volatility is moderate. You seek capital preservation while achieving some growth on your investment.</p>';
export const ModerateDef: string = '<p><strong>Moderate</strong> - You are most interested in protecting the value of your investment and you are satisfied with earnings from ordinary bank deposit products. Your investment horizon is short to moderate and you do not have tolerance for risk and volatility. You seek capital preservation.</p>';
export const GrowthOrientedDef: string = '<p><strong>Growth - Oriented</strong> - You are seeking long term capital appreciation with little or no requirement from additional income. You can tolerate greater year to year volatility, as well as some moderate to strong fluctuations in the capital value of your investment. You realize that overtime, equity markets usually outperforms other investments.</p>';

export const AOIRPQColumnGeneratorSpecs: Array<ColumnGeneratorSpecs> = [
        {
            template: null
        }
]

export function updateIRPQDef(profile: string, score: number){
  switch(profile.toUpperCase()){
    case 'RISK-AVERSE':
      AOIRPQColumnGeneratorSpecs[0].template = `
                                                 <p><strong>Understanding your profile:</strong></p>
                                                 `+RiskAverseDef+`
                                                 <p><strong>DECLARATIONS</strong></p>
                                                 <p>I am signing below and declaring that:</p>
                                                 <ol>
                                                     <li>This Investor Risk Profile Questionnaire (IRPQ) has been designed by Allianz PNB Life Insurance, Inc. as a guide 
                                                     to assess my risk appetite and investment objectives based on the answers that I provided;</li>
                                                     <li> I take full responsibility for my investment decision including the corresponding allocation even if such varies 
                                                     with the results of this questionnaire;</li>
                                                     <li>I am aware that Allianz PNB Life Insurance, Inc. makes no guarantee as to the accuracy or completeness of the results provided;</li>
                                                     <li>The Intermediary has explained to me in detail the result of this questionnaire and how to appreciate the resulting risk profile;</li>
                                                     <li>I authorize Allianz PNB Life Insurance, Inc. to use this information about me as necessary to the conduct of performing investment related services on my behalf.</li>
                                                 </ol>`;
      IRPQRowBlocksSpecs.columns[0].content = String(score).toString();
      IRPQRowBlocksSpecs.columns[1].content = 'Risk Averse';
      IRPQRowBlocksSpecs.columns[2].content = 'None';
      break;
    case 'CONSERVATIVE':
      AOIRPQColumnGeneratorSpecs[0].template = `
                                                 <p><strong>Understanding your profile:</strong></p>
                                                 `+ConservativeDef+`
                                                 <p><strong>DECLARATIONS</strong></p>
                                                 <p>I am signing below and declaring that:</p>
                                                 <ol>
                                                     <li>This Investor Risk Profile Questionnaire (IRPQ) has been designed by Allianz PNB Life Insurance, Inc. as a guide 
                                                     to assess my risk appetite and investment objectives based on the answers that I provided;</li>
                                                     <li> I take full responsibility for my investment decision including the corresponding allocation even if such varies 
                                                     with the results of this questionnaire;</li>
                                                     <li>I am aware that Allianz PNB Life Insurance, Inc. makes no guarantee as to the accuracy or completeness of the results provided;</li>
                                                     <li>The Intermediary has explained to me in detail the result of this questionnaire and how to appreciate the resulting risk profile;</li>
                                                     <li>I authorize Allianz PNB Life Insurance, Inc. to use this information about me as necessary to the conduct of performing investment related services on my behalf.</li>
                                                 </ol>`;
      IRPQRowBlocksSpecs.columns[0].content = String(score).toString();
      IRPQRowBlocksSpecs.columns[1].content = 'Conservative';
      IRPQRowBlocksSpecs.columns[2].content = 'Up to 20%';
      break;
    case 'MODERATE':
      AOIRPQColumnGeneratorSpecs[0].template = `
                                                 <p><strong>Understanding your profile:</strong></p>
                                                 `+ModerateDef+`
                                                 <p><strong>DECLARATIONS</strong></p>
                                                 <p>I am signing below and declaring that:</p>
                                                 <ol>
                                                     <li>This Investor Risk Profile Questionnaire (IRPQ) has been designed by Allianz PNB Life Insurance, Inc. as a guide 
                                                     to assess my risk appetite and investment objectives based on the answers that I provided;</li>
                                                     <li> I take full responsibility for my investment decision including the corresponding allocation even if such varies 
                                                     with the results of this questionnaire;</li>
                                                     <li>I am aware that Allianz PNB Life Insurance, Inc. makes no guarantee as to the accuracy or completeness of the results provided;</li>
                                                     <li>The Intermediary has explained to me in detail the result of this questionnaire and how to appreciate the resulting risk profile;</li>
                                                     <li>I authorize Allianz PNB Life Insurance, Inc. to use this information about me as necessary to the conduct of performing investment related services on my behalf.</li>
                                                 </ol>`;
      IRPQRowBlocksSpecs.columns[0].content = String(score).toString();
      IRPQRowBlocksSpecs.columns[1].content = 'Moderate';
      IRPQRowBlocksSpecs.columns[2].content = 'Between 20% and 50%';
      break;
    case 'GROWTH':
      AOIRPQColumnGeneratorSpecs[0].template = `
                                                 <p><strong>Understanding your profile:</strong></p>
                                                 `+GrowthOrientedDef+`
                                                 <p><strong>DECLARATIONS</strong></p>
                                                 <p>I am signing below and declaring that:</p>
                                                 <ol>
                                                     <li>This Investor Risk Profile Questionnaire (IRPQ) has been designed by Allianz PNB Life Insurance, Inc. as a guide 
                                                     to assess my risk appetite and investment objectives based on the answers that I provided;</li>
                                                     <li> I take full responsibility for my investment decision including the corresponding allocation even if such varies 
                                                     with the results of this questionnaire;</li>
                                                     <li>I am aware that Allianz PNB Life Insurance, Inc. makes no guarantee as to the accuracy or completeness of the results provided;</li>
                                                     <li>The Intermediary has explained to me in detail the result of this questionnaire and how to appreciate the resulting risk profile;</li>
                                                     <li>I authorize Allianz PNB Life Insurance, Inc. to use this information about me as necessary to the conduct of performing investment related services on my behalf.</li>
                                                 </ol>`;
      IRPQRowBlocksSpecs.columns[0].content = String(score).toString();
      IRPQRowBlocksSpecs.columns[1].content = 'Growth - Oriented';
      IRPQRowBlocksSpecs.columns[2].content = 'At least 50%';
      break;
  }
}

export const AOIRPQContentRowGeneratorSpecs: Array<RowGeneratorSpecs> = [
        {
            columns: [{ text: 'Investor Risk Profile Questionnaire' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                {
                    blocks: [IRPQRowBlocksSpecs]
                }
            ]
        },
        {
            columns: AOIRPQColumnGeneratorSpecs
        },
        {
            columns: [
                {
                    button: {
                      title: 'View IRPQ',
                      color: 'primary',
                      shape: 'block',
                      fill: 'solid'
                    },
                    size: 4,
                    offset: 8
                }
            ]
        },
        {
            columns: [
                {
                    field: {
                        setFieldName: false,
                        attName: "irpqCheck",
                        fieldName: `I have read and understood...`,
                        type: "checkbox",
                        formGroup: ApplicantOwnerFormGroup
                    }
                }
            ]
        }
    ]