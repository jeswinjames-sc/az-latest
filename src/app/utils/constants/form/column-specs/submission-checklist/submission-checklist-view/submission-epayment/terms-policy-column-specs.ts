import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs'
import { FormGeneratorSpecs } from '@models/specs/form-generator-specs'
import { RowGeneratorSpecs } from '@models/specs/row-generator-specs'

export const PolicyTermsToggleSpecs: RowGeneratorSpecs = {
    columns: [
        {
            button: {
                fill: 'clear',
                color: 'dark',
                icon: 'arrow-dropright'
            },
            size: 1
        },
        {
            text: 'Terms and Conditions',
            size: 11,
            class: 'ion-text-left'
        }
    ]
}

export const PolicyTermsIntroSpecs: ColumnGeneratorSpecs = {
    template: `Allianz Mobile Sales Illustration (hereafter referred to as "the Application"),  is a Mobile Application owned by 
    Allianz PNB Life Insurance Inc. (hereafter referred to as  “the Company”) that is intended to assist Financial Advisors 
    facilitate the sales process for <span class='text-highlight'>lead activity management and monitoring, financial needs analysis, 
    risk assessment,</span> proposal and application submission.`,
}

export const PolicyRevocableSpecs: ColumnGeneratorSpecs = {
    template: `The Company grants you a revocable, non-exclusive, non-transferable, and limited right to use the Application.`
}

export const PolicyBoundSpecs: ColumnGeneratorSpecs =  {
    template: `By accessing and using the Application, you accept and agree to be bound by these Terms and Conditions.  If you do not 
    accept the terms of service in its entirety, you cannot access and use this Application.`
}

export const PolicySafeguardSpecs: ColumnGeneratorSpecs = {
    template: `You agree to safeguard and maintain the confidentiality of your username and password. You shall be liable for any damage 
    to any party arising from the misuse of the Application by third parties who gain access to your account. You agree to notify the 
    Company immediately if you suspect or become aware of  any unauthorized access to your username and password or any unauthorized use 
    of your Account. If you suspect that your password has been compromised, you agree to report the same to the company within 24 hours.`
}

export const PolicyCancelSpecs: ColumnGeneratorSpecs = {
    template: `You understand that the company may cancel your access and remove the Application and related data to prevent misuse of the 
    Application as well as any unauthorized use or disclosure of customer data, in the following cases:
    <br>
    <ul>
        <li>the device is lost;</li>
        <li>your contract with the company is terminated; or</li>
        <li>the company detects a data or policy breach, a virus or similar threat to the security of the company’s data and technology infrastructure.</li>
    </ul>`
}

export const PolicyReviewSpecs: ColumnGeneratorSpecs = {
    template: `You agree to require the customer to review and confirm all information entered in the Application before you <span class='text-highlight'>generate the Sales 
    Illustration or submit application</span>. You will not knowingly submit, or permit the customer to submit false information. You agree to verify customer's 
    information against their identification documents, such as valid IDs and other relevant documents. <br>
    <span class='text-highlight'>You must ensure that information submitted to the company via this Application is consistent with identification documents, such as valid IDs 
    and other relevant documents submitted to the company</span>.`
}

export const PolicySecuritySpecs: ColumnGeneratorSpecs = {
    template: `You agree to protect the security and integrity of Allianz PNB Life’s customer data. You understand that using the Application enables you, the Financial Advisor, 
    to obtain customer data which you must protect against unauthorized use or disclosure. You agree not to keep personal copies of customer data obtained through this Application.`
}

export const PolicyEthicalSpecs: ColumnGeneratorSpecs = {
    template: `You agree to use the Application in an ethical manner, and with regard to your obligations under your Financial Advisor’s Contract, the Insurance Commission’s Market 
    Conduct Guidelines, and the company’s Code of Sales and Business Conduct.  Any breach of these Terms may be subject to disciplinary actions, including termination.`
}

export const PolicyTermsContentSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'policy-content',
            columns: [
                PolicyTermsIntroSpecs
            ]
        },
        {
            class: 'policy-content',
            columns: [
                PolicyRevocableSpecs
            ]
        },
        {
            class: 'policy-content',
            columns: [
                PolicyBoundSpecs
            ]
        },
        {
            class: 'policy-content',
            columns: [
                PolicySafeguardSpecs
            ]
        },
        {
            class: 'policy-content',
            columns: [
                PolicyCancelSpecs
            ]
        },
        {
            class: 'policy-content',
            columns: [
                PolicyReviewSpecs
            ]
        },
        {
            class: 'policy-content',
            columns: [
                PolicySecuritySpecs
            ]
        },
        {
            class: 'policy-content',
            columns: [
                PolicyEthicalSpecs
            ]
        }
    ]
}