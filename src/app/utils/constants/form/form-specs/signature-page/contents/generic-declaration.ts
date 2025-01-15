import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';

export const GENERAL_DECLARATION = `
<ol type="1">
  <li> That these declarations with the answers to the above questions, shall be the basis of the Policy and
       form part of the same
  </li>
  <li> That Article 1250 of the Civil Code of the Philippines (Republic Act 386) relating to extraordinary
       inflation of deflation shall not apply in determining the extent of liability under the provisions of
       the Policy;
  </li>
  <li> That I hereby warrant the eligibility of the beneficiary or beneficiaries named in this application, and
       further warrant that I shall not, in the future, designate any beneficiary who is ineligible under Articles
       2021 and 739 of the Civil Code of the Philippines (Republic Act 386).
  </li>
  <li> That should <b>Allianz PNB Life Insurance, Inc.</b> pay the proceeds of of the Policy to an ineligible
       beneficiary, believing in good faith that said beneficiary is eligible, said payment shall free
       <b>Allianz PNB Life Insurance, Inc</b> from liability under the Policy, if within sixty (60) days from the
       presentation by the ineligible beneficiary of the claim and proof of death of the insured,
       no adverse claim is filed with <b>Allianz PNB Life Insurance, Inc.</b> by the person legally entitled to the proceeds of the policy;
  </li>
  <li> That I hereby waive all provisions of law forbidding any physician, clinic or other persons from
       disclosing or giving information or any record pertaining to any consultation, examination, attendance
       or treatment of the Proposed Insured and/or Applicant Owner, if Applicable;
  </li>
  <li> That in accordance with the Insurance Commission's Circular Letter No. 2016-54, my information
       will be uploaded to a Medical Information Database which includes medical and non-medical information,
       accessible to life insurance companies for the purpose of enhancing risk assessment and preventing fraud.
       Once uploaded, all life insurance companies will only have limited access to My Information in order to
       protect my right to privacy in accordance with law. A copy of Circular Letter No. 2016-54 may be accessed
       at the Insurance Commission's website at <a href="https://www.insurance.gov.ph">www.insurance.gov.ph;</a>
  </li>
  <li> That if I accept deliver of the Policy and retain the same without objection within 15
       (for Unit-Linked Plans) days from date of acceptance, such retention shall amount to an approval on my part
       of the insurance written therein and constitute a ratification by me, of any corrections or additions to
       this application imposed by  <b>Allianz PNB Life Insurance, Inc.</b> in the space "For Home Office Use Only"
  </li>
  <li> That I am not engaged in any of the unlawful activites listed
       in the Anti-Money Laundering Act of 2001 as amended and that I declare that the funds where premiums are
       sourced from, were not generated from any of the unlawful activities listed;
  </li>
  <li> That during the effectivity of the policy, I agree that in case <strong>Allianz PNB Life Insurance, Inc.</strong> is unable to comply with relevant 
       customer due diligence (CDD) measures, as required under the Anti-Money Laundering Act, as amended and relevant issuances, due to the 
       fault of the client, <strong>Allianz PNB Life Insurance, Inc.</strong> may apply the following: <strong>a)</strong> Measures to restrict the services 
       available or prohibit any further transactions on the policy until full and proper CDD measures have been successfully conducted; <strong>b)</strong> 
       In case the foregoing is unsuccessful, terminate business relationship. The exercise of Allianz PNB Life Insurance, Inc. of this measure shall only entitle 
       the customer to receive the unused portions of premium or withdrawal value, if any, whichever is applicable;
  </li>
  <li> That I am bound by obligations set out in the relevant United Nations Security Council Resolutions relating 
       to the prevention and suppression of proliferation financing of weapons of mass destruction, including the 
       freezing and unfreezing actions as well as prohibitions from conducting transactions with designated persons and entities;
  </li>
  <li> That if I decide to transact with <b>Allianz PNB Life Insurance, Inc.</b> through electronic means,
       I agree to be solely responsible for the safekeeping of my password and/or other electronic
       identification, and shall hold <b>Allianz PNB Life Insurance, Inc.</b> free and harmless from any
       and all misuse of such password and/or electronic dentification; and
  </li>
  <li> I hereby expressly authorize <strong>Allianz PNB Life Insurance, Inc.</strong>, to obtain, collect, record, organize, store, update, modify, use, share, transfer, disclose, 
       and/or destroy ("Process"), whether manually or via electronic channels, any and all information, including personal and sensitive information (Personal Data), 
       about me, the life to be insured, my designated beneficiaries, and if applicable, the beneficial owner/s of my Policy for the following to;
       <ol type="i">
         <li> facilitate issuance of my Policy, process claims and other policy benefits , monitor and improve the quality of my Policy/ies and such services availed 
              of by me, through programs including but not limited to offer of related products, customer satisfaction surveys, and statistical, actuarial and risk analyses;
         </<li>
         <li> comply with legal or regulatory obligations of <strong>Allianz PNB Life Insurance, Inc.</strong> under applicable local or foreign laws, rules and regulations relating to 
              matters including but not limited to anti-money laundering, and tax monitoring/review/reporting.
         </li>
       </ol>
       <p>I shall inform <strong>Allianz PNB Life Insurance, Inc.</strong> of any changes relating to my Personal Data.</p>
  </li>
</ol>
`;

export const GENERAL_DECLARATION2 = `
<ol type="1" start="13">
  <li> I understand that my policy, including any endorsements, riders and other related documents (Policy), will be sent to me in electronic format. I also understand that <strong>Allianz 
       PNB Life Insurance, Inc.</strong> shall communicate with me primarily via electronic channels, i.e. email, SMS, and mobile and web applications. This includes Premium Reminders, Renewal Notices, 
       Reinstatement Notices, and other related documents. If I need a copy of my Policy, notices and other correspondence in paper form, I will contact <strong>Allianz PNB Life Insurance, Inc.</strong> 
       by sending an e-mail to <strong>customercare@allianzpnblife.ph</strong>.
  </li>
</ol>
`;


export function generalDeclarationTemplate(generalDeclarationFormGroup){
  const GENERAL_DECLARATION_TEMPLATE: RowGeneratorSpecs[] = [
    {
      columns: [{ text: 'General Declaration' }],
      class: 'form-sub-section-title'
    },
    {
      columns: [
        {
          template: GENERAL_DECLARATION
        }
      ]
    },
    {
      columns: [
        {
          field : {
            setFieldName: false,
            attName: 'thirdPartyConsent',
            fieldName: ` I further authorize Allianz PNB Life Insurance, Inc. to share, transfer and/or disclose my information to 
            any of its subsidiaries, affiliates, and partners for offer of related products and services.`,
            type: 'checkbox',
            formGroup: generalDeclarationFormGroup
          }
        }
      ]
    },
    {
      columns: [
        {
          template: GENERAL_DECLARATION2
        }
      ]
    }
  ];

  return GENERAL_DECLARATION_TEMPLATE;
}

export const EAZYHEALTH_GENERAL_DECLARATION = `
<ol type="1">
  <li>That these declarations with the answers to the above questions, shall be the basis of the Policy and form part of the same:</li>
  <li>That Article 1250 of the Civil Code of the Philippines (Republic Act 386) relating to extraordinary inflation or deflation shall not apply in
  determining the extent of liability under the provisions of the Policy;</li>
  <li>That I hereby warrant the eligibility of the beneficiary or beneficiaries named in this application, and further warrant that I shall not, in
  the future, designate any beneficiary who is ineligible under Articles 2021 and 739 of the Civil Code of the Philippines (Republic Act 386);</li>
  <li>That should Allianz PNB Life Insurance, Inc. pay the proceeds of the Policy to an ineligible beneficiary, believing in good faith that said
  beneficiary is eligible, said payment shall free Allianz PNB Life Insurance, Inc. from liability under the Policy, if within sixty (60) days from
  the presentation by the ineligible beneficiary of the claim and proof of death of the Insured, no adverse claim is filed with Allianz PNB Life
  Insurance, Inc. by the person legally entitled to the proceeds of the policy</li>
  <li>That I hereby waive all provisions of law forbidding any physician, clinic, or other persons from disclosing or giving information or any
  record pertaining to any consultation, examination, attendance or treatment of the Proposed Insured and/or Applicant Owner, if
  Applicable;</li>
  <li>That I am not engaged in any of the unlawful activities listed in the Anti-Money Laundering Act of 2001 as amended and that I declare
that the funds where premiums are sourced from, were not generated from any of the unlawful activities listed;</li>
  <li>That if I decide to transact with Allianz PNB Life Insurance, Inc., through electronic means, I agree to be solely responsible for the
safekeeping of my password and/or other electronic identification, and shall hold Allianz PNB Life Insurance, Inc. free and harmless from
any and all misuse of such password and/or electronic dentification;</li>
  <li>That I hereby expressly authorize Allianz PNB Life Insurance, Inc. to obtain, collect, record, organize, store, update, modify, use, share,
  transfer, disclose and/or destroy ("Process"), whether manually or via electronic channels, any and all information, including personal and
  sensitive information, about me, the life to be insured, and/or my Policy/ies, to 1) facilitate, monitor and improve the quality of my
  Policy/ies and such services availed of by me, through programs including but not limited to offer of related products and services,
  customer satisfaction surveys,and statistical, actuarial and risk analyses, and to 2) comply with legal or regulatory obligations of Allianz
  PNB Life Insurance, Inc. under applicable local or foreign laws, rules and regulations relating to matters including but not limited to antimoney
  laundering, and tax monitoring/review/reporting. I also expressly authorize Allianz PNB Life Insurance, Inc. to share, transfer
  and/or disclose the said information to any of its intermediaries, branches, subsidiaries, affiliates, service providers, partners and
  government agencies for the said purposes. I likewise promise to inform Allianz PNB Life Insurance, Inc. of any changes relating to my personal information.</li>
</ol>
<p>I also understand that Allianz PNB Life Insurance, Inc. shall communicate with me primarily via electronic channels, i.e. email,
SMS, and mobile and web applications. Policy contracts, official receipts and other similar documents will also be sent to me in
electronic format if available.</p>
`;

export function generalDeclarationEazyHealthTemplate(generalDeclarationFormGroup){
  const GENERAL_DECLARATION_TEMPLATE: RowGeneratorSpecs[] = [
    {
      columns: [{ text: 'General Declaration' }],
      class: 'form-sub-section-title'
    },
    {
      columns: [
        {
          template: EAZYHEALTH_GENERAL_DECLARATION
        }
      ]
    },
    {
      columns: [
        {
          field : {
            setFieldName: false,
            attName: 'paperFormatConsent',
            fieldName: ` I prefer receiving communications from Allianz PNB Life Insurance, Inc. in paper format. I understand that the
                        notices, disclosures, and similar documents received thru mail or other non-electronic channels might be
                        delayed and I will not hold Allianz PNB Life Insurance, Inc. responsible especially if the delay is due to
                        circumstances beyond its control.`,
            type: 'checkbox',
            formGroup: generalDeclarationFormGroup
          }
        }
      ]
    },
    {
      columns: [
        {
          field : {
            setFieldName: false,
            attName: 'thirdPartyConsent',
            fieldName: ` I also expressly authorize Allianz PNB Life Insurance, Inc. to share, transfer and/or disclose my information to any of its
            subsidiaries, affiliates, and partners for offer of related products and services.`,
            type: 'checkbox',
            formGroup: generalDeclarationFormGroup
          }
        }
      ]
    }
  ];

  return GENERAL_DECLARATION_TEMPLATE;
}




export const AFC_GENERAL_DECLARATION = `
<ol type="1">
  <li> 
    That these declarations, with the answers to the above questions, shall be the basis of the Policy and form part of the same;
  </li>
  <li> 
    That Article 1250 of the Civil Code of the Philippines (Republic Act 386) relating to extraordinary inflation or deflation shall not apply in determining
    the extent of liability under the provisions of the Policy;
  </li>
  <li> 
    That I hereby warrant the eligibility of the beneficiary or beneficiaries named in this application, and further warrant that I shall not,
    in the future, designate any beneficiary who is ineligible under Articles 2021 and 739 of the Civil Code of the Philippines (Republic Act 386);
  </li>
  <li>
      That should <b>Allianz PNB Life Insurance, Inc.</b> pay the proceeds of the Policy to an ineligible beneficiary, believing in good faith that said beneficiary is
      eligible, said payment shall free <b>Allianz PNB Life Insurance, Inc.</b> from liability under the Policy, if within sixty (60) days from the presentation by the
      ineligible beneficiary of the claim and proof of death of the Insured, no adverse claim is filed with <b>Allianz PNB Life Insurance, Inc.</b> by the person
      legally entitled to the proceeds of the policy;
  </li>
  <li>
      That I hereby waive all provisions of law forbidding any physician, clinic, or other persons from disclosing or giving information or any record pertaining
      to any consultation, examination, attendance or treatment of the Proposed Insured and/or Applicant Owner, if applicable;
  </li>
  <li> That in accordance with the Insurance Commission's Circular Letter No. 2016-54, my information
       will be uploaded to a Medical Information Database which includes medical and non-medical information,
       accessible to life insurance companies for the purpose of enhancing risk assessment and preventing fraud.
       Once uploaded, all life insurance companies will only have limited access to My Information in order to
       protect my right to privacy in accordance with law. A copy of Circular Letter No. 2016-54 may be accessed
       at the Insurance Commission's website at <a href="https://www.insurance.gov.ph">www.insurance.gov.ph;</a>
  </li>
  <li> 
      That I am not engaged in any of the unlawful activities listed in the Anti-Money Laundering Act of 2001 (AMLA), as amended, and that I declare that
      the funds where premiums are sourced from, were not generated from any of the unlawful activities listed;
  </li>
  <li> 
      That during the effectivity of the policy, I agree that in case <b>Allianz PNB Life Insurance, Inc.</b> is unable to comply with relevant customer due diligence
      (CDD) measures, as required under the Anti-Money Laundering Act (AMLA), as amended and relevant issuances, due to my fault, Allianz PNB Life
      Insurance, Inc. may apply the following: a) Measures to restrict the services available or prohibit any further transactions on the policy until full and
      proper CDD measures have been successfully conducted; b) In case the foregoing is unsuccessful, terminate business relationship. The exercise of
      <b>Allianz PNB Life Insurance, Inc.</b> of this measure shall only entitle me to receive the unused portions of premium or withdrawal value, if any, whichever
      is applicable;
  </li>
  <li>
      That I am bound by obligations set out in the relevant United Nations Security Council Resolutions relating to the prevention and suppression of
      proliferation financing of weapons of mass destruction, including the freezing and unfreezing actions as well as prohibitions from conducting
      transactions with designated persons and entities;
  </li>
  <li>
      That if I decide to transact with <b>Allianz PNB Life Insurance, Inc.</b>, through electronic means, I agree to be solely responsible for the safekeeping of my
      password and/or other electronic identification, and shall hold <b>Allianz PNB Life Insurance, Inc.</b> free and harmless from any and all misuse of such
      password and/or electronic dentification; and
  </li>
  <li>
      I hereby expressly authorize <b>Allianz PNB Life Insurance, Inc.</b>, to obtain, collect, record, organize, store, update, modify, use, share, transfer, disclose,
      and/or destroy ("Process"), whether manually or via electronic channels, any and all information, including personal and sensitive information
      (Personal Data), about me, the life to be insured, my designated beneficiaries, and if applicable, the beneficial owner/s of my Policy for the following to;

      <ol type="i">
        <li>
          facilitate issuance of my Policy, process claims and other policy benefits , monitor and improve the quality of my Policy/ies and such services
          availed of by me, through programs including but not limited to offer of related products, customer satisfaction surveys, and statistical,
          actuarial and risk analyses;
        </li>
        <li>
        comply with legal or regulatory obligations of <b>Allianz PNB Life Insurance, Inc.</b> under applicable local or foreign laws, rules and regulations
        relating to matters including but not limited to anti-money laundering, and tax monitoring/review/reporting.
        </li>
      </ol>

      I shall inform Allianz PNB Life Insurance, Inc. of any changes relating to my Personal Data.
  </li>
`;

export const AFC_GENERAL_DECLARATION2 = `
<ol type="1" start="12">
<li value="12">
I understand that my policy, including any endorsements, riders and other related documents (Policy), will be sent to me in electronic format. I also
understand that <b>Allianz PNB Life Insurance, Inc.</b> shall communicate with me primarily via electronic channels, i.e. email, SMS, and mobile and web
applications. This includes Premium Reminders, Renewal Notices, Reinstatement Notices, and other related documents. If I need a copy of my Policy,
notices and other correspondence in paper form, I will contact <b>Allianz PNB Life Insurance, Inc.</b> by sending an e-mail to customercare@allianzpnblife.ph.
</li>

<p><h4>COOLING-OFF PERIOD</h4> <b>(IF APPLICABLE; PLEASE REFER TO YOUR POLICY CONTRACT FOR FULL DETAILS).</b>
If, after reading the Policy Contract and you don't agree to any of its terms or conditions, you have the option to cancel and return it to us within fifteen
(15) days from the date you received it. Please refer to your Policy Contract for the amount to be refunded.</p>

`;

export function generalDeclarationTemplateAFC(generalDeclarationFormGroup){
  const AFC_GENERAL_DECLARATION_TEMPLATE: RowGeneratorSpecs[] = [
    {
      columns: [{ text: 'General Declaration' }],
      class: 'form-sub-section-title'
    },
    {
      columns: [
        {
          template: AFC_GENERAL_DECLARATION
        }
      ]
    },
    {
      columns: [
        {
          field : {
            setFieldName: false,
            attName: 'thirdPartyConsent',
            fieldName: ` I further authorize Allianz PNB Life Insurance, Inc. to share, transfer and/or disclose my information to 
            any of its subsidiaries, affiliates, and partners for offer of related products and services.`,
            type: 'checkbox',
            formGroup: generalDeclarationFormGroup
          }
        }
      ]
    },
    {
      columns: [
        {
          template: AFC_GENERAL_DECLARATION2,
        },
      ],
    },
  ];

  return AFC_GENERAL_DECLARATION_TEMPLATE;
}
