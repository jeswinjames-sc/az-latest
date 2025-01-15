import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { GenericFormSpecs } from '@form-specs/signature-page/generic-form-specs';
import { FormBuilder } from '@angular/forms';

export const AUTHORIZATION_TO_FURNISH_MEDICAL_OR_OTHER_RELATED_INFO = `<p> 
    <b>Allianz PNB Life Insurance, Inc.</b> is considering
    an application for insurance on my life and I hereby consent and authorize that: 
    <ol type="1">
        <li>Any physician, clinic, insurance company or other insurance industrance association, institution or
            person thath as any record of me and/or the proposed insured named in this application, may release or
            give to Allianz PNB Life Insurance, Inc. or its authorize representative, any and all information about 
            me and/or the proposed insured named in this application.
        </li>
        <li> Any information collected and held by Allianz PNB Life Insurance, Inc. may be released and/or disclosed
            to its affiliated companies and agents, other insurance companies and their affiliates and any medical 
            information sharing facility of the insurance industry for any legitimate purpose, including but not 
            limited to underwriting and administration of insurance coverage and claims;
        </li>
        <li> I and/or the proposed insured named in this application, may be subjected to HIV testing for
            the purpose of underwriting this application or the coverage related to the insurance policy, if issued;
        </li>
        <li> A personal investigation on me and/or the proposed insured named in this application can be conducted
            by a duly authorized inspection agency which will provide any applicable information concerning my 
            character, general reputation, personal characteristic, mode of living, health and financial status
            through personal interviews with friends, neighbors and associates.
        </li>
    </ol>
    A photostat (or similar copy) of this authorization shall be valid as the original. This authorization is in
    connection with my application for insurance only.
</p>`;

export const AUTHORIZATION_TO_FURNISH_MEDICAL_TEMPLATE: RowGeneratorSpecs[] = [
    {
        columns: [{ text: 'Authorization to Furnish Medical or Other Related Information' }],
        class: 'form-sub-section-title'
    },
    {
        columns: [
            {
                template: AUTHORIZATION_TO_FURNISH_MEDICAL_OR_OTHER_RELATED_INFO
            }
        ]
    }
];

// to be removed
export const AUTHORIZATION_TO_FURNISH_MEDICAL: RowGeneratorSpecs = {
    columns: [
        { text: 'Authorization to Furnish Medical or Other Related Information', size: 10 },
        {
            button: {
                fill: 'clear',
                color: 'primary',
                icon: 'document',
                function: () => {
                    GenericFormSpecs.rows = AUTHORIZATION_TO_FURNISH_MEDICAL_TEMPLATE;
                }
            },
            size: 2
        }
    ], class: 'panel-listings'
};