import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';

export const PolicyPrivacyToggleSpecs: RowGeneratorSpecs = {
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
            text: 'Privacy Notice',
            size: 11,
            class: 'ion-text-left'
        }
    ]
}

export const PolicyPrivacyIntroSpecs: ColumnGeneratorSpecs = {
    template: `We, <b>Allianz PNB Life Insurance, Inc.</b> (“Allianz PNB Life”), are part of the Allianz Group, 
    and are an authorized insurance company in the Republic of the Philippines providing insurance 
    products and services. Protecting your privacy is a top priority for us. This privacy notice 
    explains how and what type of personal information will be collected, why it is collected and to 
    whom it is shared or disclosed. Please read this notice carefully.`,
}

export const PolicyPrivacyPersonalInfoControllerTitleSpecs: ColumnGeneratorSpecs = {
    text: `1.	Who is the personal information controller?`,
    size: 12,
    class: 'mt-1 privacy-notice-label'
}

export const PolicyPrivacyPersonalInfoControllerLabelSpecs: ColumnGeneratorSpecs = {
    template: `A personal information controller is the individual or legal person who controls and is responsible 
    to keep and use personal information in paper or electronic files. For all your transactions and interactions 
    with us, Allianz PNB Life is the personal information controller as defined by relevant information protection 
    laws and regulation.`,
    class: 'notice-content'
}

export const PolicyPrivacyPersonalInfoCollectedTitleSpecs: ColumnGeneratorSpecs = {
    text: `2.	What personal information will be collected?`,
    size: 12,
    class: 'mt-1 privacy-notice-label'
}

export const PolicyPrivacyPersonalInfoCollectedLabelSpecs: ColumnGeneratorSpecs = {
    template: `We may collect and process various types of personal information about you such as your name, address, 
    telephone number, email address, social media accounts and photographs.<br><br>
    We may also collect and process sensitive personal information such as your nationality, marital status, age or 
    birthday, health, education, IDs and numbers issued by government agencies like SSS, TIN, Driver’s License, 
    Credit Card or Bank details,  and others.`,
    class: 'notice-content'
}

export const PolicyPrivacyObtainPersonalInfoTitleSpecs: ColumnGeneratorSpecs = {
    text: `3.	How will we obtain and use your personal information?`,
    size: 12,
    class: 'mt-1 privacy-notice-label'
}

export const PolicyPrivacyObtainPersonalInfoLabelSpecs: ColumnGeneratorSpecs = {
    template: `We will collect and use your personal information that you provide to us for a number of purposes and with 
    your express consent (unless applicable laws and regulations do not require us to obtain your express consent) as 
    shown below:`,
    size: 12,
    class: 'notice-content'
}

export const PolicyPrivacyObtainPersonalInfoTableSpecs: ColumnGeneratorSpecs = {
    template: `
    <table style="width: 100%;" border="1" cellpadding="2">
      <thead>
        <tr>
          <td>Purpose</td>
          <td>Your express consent?</td>
        </tr>
      </thead>
      <tbody>
      <tr>
        <td>Insurance contract administration (e.g., quotation, underwriting, claims handling)</td>
        <td>Yes, only where needed. However, where we need to process your personal information in order to underwrite 
        your insurance and / or process you claim, we will not obtain your express consent.</td>
      </tr>
      <tr>
        <td>To permit Allianz Group companies and selected third parties to inform you, about products and services we 
        feel may interest you in accordance with your marketing preferences. You can change these at any time by contacting us.</td>
        <td>Yes</td>
      </tr>
      <tr>
        <td>For automated decision making (including profiling), to personalize your experience on the website by 
        presenting products, services, marketing messages, offers, and content tailored to you, and to make other decisions 
        about you using computerised technology such as assessing which products might be most suitable for you.</td>
        <td>Yes, where needed. However, where we need to process your personal information in order to underwrite your insurance 
        and / or process you claim, we will not obtain your express consent.</td>
      </tr>
      <tr>
        <td>Fraud prevention and detection</td>
        <td>No</td>
      </tr>
      <tr>
        <td>Meet any legal obligations (e.g. AMLA, tax, accounting and administrative obligations,)</td>
        <td>No</td>
      </tr>
      <tr>
        <td>To redistribute risk by means of reinsurance and co-insurance)</td>
        <td>No</td>
      </tr>
      </tbody>
    </table>`,
    size: 12,
    class: 'notice-content'
}

export const PolicyPrivacyObtainPersonalInfoDetailsSpecs: ColumnGeneratorSpecs = {
    template: `As mentioned and for the purposes indicated above, we will process personal information we have received 
    about you from public databases, third parties such as brokers and business partners, other insurers, credit reference 
    and fraud prevention agencies, advertising networks, analytics providers, search information providers, delegated 
    authorities and lawyers. <br><br>

    For those purposes indicated above where we have indicated that we do not require your express consent or where we 
    otherwise require your personal information to underwrite your insurance and/or process your claim, we will process 
    your personal information based on our provision of insurance and related services and/or to comply with our legal 
    obligations. <br><br>
    
    We will need your personal information if you would like to purchase our products and services. If you do not wish 
    to provide this to us, we may not be able to provide the products and services you request, that you may be interested 
    in, or to tailor our offerings to your particular requirements. 
    `,
    class: 'notice-content'
}

export const PolicyPrivacyAccessPersonalInfoTitleSpecs: ColumnGeneratorSpecs = {
    text: `4.	Who will have access to your personal information?`,
    size: 12,
    class: 'mt-1 privacy-notice-label'
}

export const PolicyPrivacyAccessPersonalInfoLabelSpecs: ColumnGeneratorSpecs = {
    template: `We will ensure that your personal information is processed in a manner that is compatible with the purposes 
    indicated above.<br><br>

    For the stated purposes, your personal information may be disclosed to the following parties who operate as third party 
    personal information controllers:<br><br>
     
    Public authorities, other Allianz Group companies, other insurers, co-insurers, re-insurers, insurance intermediaries/brokers,  
    rtner banks. For the stated purposes, we may also share your personal information with the following parties who operate as 
    personal information processors under our instruction:<br>
    `,
    size: 12,
    class: 'notice-content'
}

export const PolicyPrivacyAccessPersonalInfoListSpecs: ColumnGeneratorSpecs = {
    template: `
    <ul>
      <li>Other Allianz Group companies, technical consultants, experts, lawyers, medical doctors; and service companies to 
      discharge operations (claims, IT, postal, document management); and</li>
      <li>Advertisers and advertising networks to send you marketing communications, as permitted under local law and in accordance 
      with your communication preferences. We do not share your personal information with non-affiliated third parties for their 
      own marketing use without your permission.</li>
    </ul>
    <br>
    Finally, we may share your personal information in the following instances: 
    <br>
    <ul>
      <li>In the event of any contemplated or actual reorganization, merger, sale, joint venture, assignment, transfer or other 
      disposition of all or any portion of our business, assets or stock (including in any insolvency or similar proceedings; and</li>
      <li>To meet any legal obligation, including to the relevant regulatory agency if you make a complaint about the product or 
      service we have provided to you.</li>
    </ul>`,
    class: 'notice-content'
}

export const PolicyPrivacyPersonalInfoProcessTitleSpecs: ColumnGeneratorSpecs = {
    text: `5.	Where will my personal information be processed?`,
    size: 12,
    class: 'mt-1 privacy-notice-label'
}

export const PolicyPrivacyPersonalInfoProcessLabelSpecs: ColumnGeneratorSpecs = {
    template: `Your personal information may be processed both inside 
    and outside of the Philippines, subject always to contractual 
    restrictions regarding confidentiality and security in line with 
    applicable information protection laws and regulations. We will not 
    disclose your personal information to parties who are not authorized 
    to process them.`,
    class: 'notice-content'
}

export const PolicyPrivacyRightsRespectTitleSpecs: ColumnGeneratorSpecs = {
    text: `6.	What are your rights in respect of your personal information?`,
    size: 12,
    class: 'mt-1 privacy-notice-label'
}

export const PolicyPrivacyRightsRespectListSpecs: ColumnGeneratorSpecs = {
    template: `
    Where permitted by applicable law or regulation, you have the right to:<br>
    <ul>
      <li>Access your personal information held about you and to learn the origin of the information, the purposes and 
      ends of the processing, the details of the personal information controller(s), the information processor(s) and 
      the parties to whom the information may be disclosed; </li>
      <li>Withdraw your consent at any time where your personal information is processed with your consen;</li>
      <li>Update or correct your personal information so that it is always accurate;</li>
      <li>Delete your personal information from our records if it is no longer needed for the purposes indicated above;</li>
      <li>Restrict the processing of your personal information in certain circumstances, for example where you have 
      contested the accuracy of your personal information, for the period enabling us to verify its accuracy;</li>
      <li>Obtain your personal information in an electronic format for you or for your new insurer; and</li>
      <li>File a complaint with us and/or the relevant information protection authority.</li>
    </ul>
    You may exercise these rights by contacting us as detailed in section 9 below providing your name, email address, account 
    identification or policy number and purpose of your request.`,
    class: 'notice-content'
}

export const PolicyPrivacyObjectProcessingTitleSpecs: ColumnGeneratorSpecs = {
    text: `7.	How can you object to the processing of your personal information?`,
    size: 12,
    class: 'mt-1 privacy-notice-label'
}

export const PolicyPrivacyObjectProcessingLabelSpecs: ColumnGeneratorSpecs = {
    template: `Where permitted by applicable law or regulation, you have the right to object to us processing your personal 
    information, or tell us to stop processing it (including for purposes of direct marketing). Once you have informed us of 
    this request, we shall no longer process your personal information unless permitted by applicable laws and regulations. 
    You may exercise this right by contacting us as indicated in Section 9 below.`,
    class: 'notice-content'
}

export const PolicyPrivacyKeepPersonalInfoTitleSpecs: ColumnGeneratorSpecs = {
    text: `8.	How long do we keep your personal information?`,
    size: 12,
    class: 'mt-1 privacy-notice-label'
}

export const PolicyPrivacyKeepPersonalInfoLabelSpecs: ColumnGeneratorSpecs = {
    template: `We will retain your personal information while your policy is inforce or remains reinstatable, unless a longer 
    retention period is required or as permitted by law.<br><br>
    We will not retain your personal information for longer than necessary and we will hold it only for the purposes for which 
    it was obtained.`,
    class: 'notice-content'
}

export const PolicyPrivacyContactUsTitleSpecs: ColumnGeneratorSpecs = {
    text: `9.	How can you contact us? `,
    size: 12,
    class: 'mt-1 privacy-notice-label'
}

export const PolicyPrivacyContactUsLabelSpecs: ColumnGeneratorSpecs = {
    template: `If you have any queries about how we use your personal information, you can contact us by dialling our customer 
    service hotline, email or post as follows:<br><br>

    <span class="brand-text">Allianz PNB Life Insurance, Inc.</span><br>
    Data Protection Officer<br>
    9th Floor, Allied Bank Center, 6754 Ayala Avenue corner Legaspi Street, Makati City, Philippines <br>
    Email: <span class="email-link">protectprivacy@allianzpnblife.ph</span><br>
    Customer Service Hotline: 8818-4357`,
    class: 'notice-content'
}

export const PolicyPrivacyUpdatePrivacyNoticeTitleSpecs: ColumnGeneratorSpecs = {
    text: `10.	How often do we update this privacy notice?`,
    size: 12,
    class: 'mt-1 privacy-notice-label'
}

export const PolicyPrivacyUpdatePrivacyNoticeLabelSpecs: ColumnGeneratorSpecs = {
    template: `We regularly review this privacy notice. We will ensure the most recent version is available on our website 
    [Insert OE website URL] and we will tell you directly when there’s an important change that may impact you. This privacy 
    notice was last updated on March 25, 2019.`,
    class: 'notice-content'
}

export const PolicyShortContentSpecs: ColumnGeneratorSpecs = {
    template: `We will process your payment details such as your credit card number, card expiration date and the cvv/cvc to 
    complete your transaction. For your added security, please ensure that you, the CLIENT will personally provide these details.
    <br>
    <br>
    Please refer to our <a href="https://www.allianzpnblife.ph/privacy-notice.html">https://www.allianzpnblife.ph/privacy-notice.html</a> for more information about how we process your personal information.
    `
}

export const PolicyPrivacyContentSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'policy-content',
            columns: [
                PolicyShortContentSpecs
            ]
        }
    ]
}