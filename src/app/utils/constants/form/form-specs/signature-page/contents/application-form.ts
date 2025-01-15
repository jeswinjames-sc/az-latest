import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { GENERAL_DECLARATION } from '@form-specs/signature-page/contents/generic-declaration';
import {FormGroup} from '@angular/forms';

const APPLICATION_FORM_ACKNOWLEDGEMENT  = `<p>I hereby acknowledge the following:
    <ol type="1">
        <li> I am applying for a participating life insurance with <b>Allianz PNB Life Insurance, Inc.</b></li>
        <li> I understand that a participating life insurance Applicant Owner is 
          eligible to receive dividends subject to the following limitations/ conditions:
            <ol type="a">
                <li>
                    <b>Allianz PNB Life Insurance, Inc.</b> in its sole discretion determines the amount of dividends, if any;
                </li>
                <li> Dividend rates will typically vary based on the performance of a number of factors including Allianz 
                  PNB Life Insurance, Inc.'s investment returns, mortality experience, expense and taxes;
                </li>
                <li> In view of the variabality of dividend performance, it is not guaranteed:
                    <ol type="i">
                        <li> that there will be accumulated dividends sufficient to offset any future premiums; or </li>
                        <li> that the Policy will become self-liquidating (i.e. able to pay its own premiums) in the future.</li>
                    </ol>
                </li>
            </ol>
        </li>
        <li> That <b>Allianz PNB Life Insurance, Inc.</b> 
          shall have the right to adopt or change the basis for any distribution 
          of surplus and for the determination of any amount to be apportioned 
          by way of dividend to said policy (if participating).
        </li>
    </ol>
</p>`;

export const APPLICATION_FORM_TEMPLATE: RowGeneratorSpecs[] = [
    {
      columns: [{ text: 'Application Form' }],
      class: 'form-sub-section-title'
    },
    {
      columns: [
        {
          template: `  <p>I declare that all statements I have made are true and complete. I further confirm that these information are recoded accurately.</p>
                        <ol>
                            <li>APPLICANT OWNER INFORMATION</li>
                            <li>PROPOSED INSURED INFORMATION</li>
                            <li>INFORMATION ON BENEFICIARIES</li>
                            <li>INFORMATION ON POLICY APPLIED FOR</li>
                            <li>PAYOUT OPTION FOR ALL LIVING BENEFITS</li>
                            <li>LIFE INSURANCE QUESTIONS </li>
                            <li>DECLARATION ON PROPOSED REPLACEMENT OF EXISTING POLICY</li>
                            <li>NON-MEDICAL FOR PROPOSED INSURED</li>
                            <li>DECLARATIONS ON OCCUPATIOIN/AVOCATIONS</li>
                            <li>ACKNOWLEDGEMENT OF VARIABILITY APPLICABLE ONLY FOR PARTICIPATING LIFE INSURANCE POLICY</li>
                        </ol>` + APPLICATION_FORM_ACKNOWLEDGEMENT
        }
      ]
    },
    {
        columns: [
            {
                button: {
                  title: 'View Application Form',
                  color: 'primary',
                  shape: 'block',
                  fill: 'solid'
                },
                size: 4,
                offset: 8
            }
        ]
    }
];


const AFC_APPLICATION_FORM_ACKNOWLEDGEMENT  = `<p>I hereby acknowledge the following:
    <ol type="1">
        <li> I am applying for a participating life insurance with <b>Allianz PNB Life Insurance, Inc.</b></li>
        <li> I understand that as the Applicant Owner/Payor of a participating life insurance policy, I am eligible to receive dividends, subject to the following
        limitations/ conditions:
            <ol type="a">
                <li>
                    <b>Allianz PNB Life Insurance, Inc.</b> in its sole discretion determines the amount of dividends, if any; and
                </li>
                <li> Dividend rates will typically vary based on the performance of a number of factors including Allianz 
                  PNB Life Insurance, Inc.'s investment returns, mortality experience, expense and taxes; and
                </li>
                <li> In view of the variabality of dividend performance, it is not guaranteed:
                    <ol type="i">
                        <li> that there will be accumulated dividends sufficient to offset any future premiums; and/or </li>
                        <li> that the Policy will become self-liquidating (i.e. able to pay its own premiums) in the future.</li>
                    </ol>
                </li>
            </ol>
        </li>
        <li> That <b>Allianz PNB Life Insurance, Inc.</b> 
        shall have the right to adopt or change the basis for any distribution of surplus and for the determination
        of any amount to be apportioned by way of dividend to said policy (if participating).
        </li>
    </ol>
</p>`;


export const AFC_APPLICATION_FORM_TEMPLATE: RowGeneratorSpecs[] = [
  {
    columns: [{ text: 'Application Form' }],
    class: 'form-sub-section-title'
  },
  {
    columns: [
      {
        template: `  <p>I declare that all statements I have made are true and complete. I further confirm that these information are recoded accurately.</p>
                      <ol>
                          <li>APPLICANT OWNER INFORMATION</li>
                          <li>PROPOSED INSURED INFORMATION</li>
                          <li>INFORMATION ON BENEFICIARIES</li>
                          <li>INFORMATION ON POLICY APPLIED FOR</li>
                          <li>PAYOUT OPTION FOR ALL LIVING BENEFITS</li>
                          <li>LIFE INSURANCE QUESTIONS </li>
                          <li>DECLARATION ON PROPOSED REPLACEMENT OF EXISTING POLICY</li>
                          <li>NON-MEDICAL FOR PROPOSED INSURED</li>
                          <li>DECLARATIONS ON OCCUPATIOIN/AVOCATIONS</li>
                          <li>ACKNOWLEDGEMENT OF VARIABILITY APPLICABLE ONLY FOR PARTICIPATING LIFE INSURANCE POLICY</li>
                      </ol>` + AFC_APPLICATION_FORM_ACKNOWLEDGEMENT
      }
    ]
  },
  {
      columns: [
          {
              button: {
                title: 'View Application Form',
                color: 'primary',
                shape: 'block',
                fill: 'solid'
              },
              size: 4,
              offset: 8
          }
      ]
  }
];