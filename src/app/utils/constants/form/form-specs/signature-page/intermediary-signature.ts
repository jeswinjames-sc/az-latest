import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { IntermediaryFormGroup } from '@form-group/signature-page/signature-page-form-group';

export const IntermediarySignatureFormSpecs: FormGeneratorSpecs = {
    rows: [
    	{
    		columns: [
    			{
    				template: `
    						<p>There are no known factors (health or otherwise) evident from the application
    						form and that could affect the evaluation of the application. Furthermore, the 
							identity of the Proposed Insured, Applicant Owner, or Beneficiary is not any of the 
							following: </p>
    				`
    			}
    		]
    	},
    	{
    		columns: [
    			{
    				template: `
    					<ul>
    						<li>A Politically Exposed Person (PEP) or an immediate family member or a close associate of Politically Exposed Person.</li>
    						<li>A remittance agent, money changer, or foreign exchange dealer.</li>
    						<li>A member of Non Government Organization (NGO), Non-Profit Organization (NPO) or Foundation.</li>
    						<li>Connected with a casino and related gaming entities.</li>
    						<li>A customs broker, a jewel/gem/precious metal dealer.</li>
    						<li>A gun/ammunition/military equipment dealer.</li>
    						<li>A shell company.</li>
    						<li>From High-Risk Jurisdictions/Countries that are recognized as having inadequate internationally accepted anti-money laundering standards; 
							does not sufficiently regulate business to counteract money-laundering; fails to incorporate Financial Action Task Force (FATF) recommendation 
							into its regulatory regimes</li>
    						<li>From countries that exhibits a relatively high prevalence or risk of crime, corruption, or terrorist financing.</li>    
    					</ul>
    				`
    			}
    		]
    	},
		{
    		columns: [
    			{
    				field: {
    					setFieldName: false,
    					attName: 'disableEDD',
    					fieldName: `Please TICK the box if the Proposed Insured, Applicant Owner, or Beneficiary identity is ANY of the mentioned above. WHEN TICKED, an ADDITIONAL INTERMEDIARY DECLARATIONS (AID) FORM must be FILLED and SUBMITTED.`,
						type: 'checkbox',
    					formGroup: IntermediaryFormGroup
    				}
    			}
    		]
    	},
		{
			columns:[
				{
					template: `
					<p>I certify that I have verified the identity of the Proposed Insured and/or Applicant Owner. I have issued a Provisional Receipt
					to the Applicant Owner for the premium payment received, if applicable.</p>
				 	<p>I have personally presented and explained the product and its benefits and have personally witnessed the Proposed Insured and/or
					Applicant Owner signing the application before the appllication is submitted.</p>   
    				`,
					isHidden: false
				}
			]
		},
		{
			columns:[
				{
					template: `
					<p>I certify that I have verified the identity of the Applicant Owner, I have personally presented and explained the product and its 
					benefits and have personally witnessed the Applicant Owner signing the application before the application is submitted, and I have 
					also filled out and submitted the Enhanced Due Diligence (EDD) form, if applicable to the Applicant Owner.</p>   
    				`,
					isHidden: false
				}
			]
		}
    ]
}

export const IntermediaryDeclarationForHealthProductsFormSpecs: FormGeneratorSpecs = {
	rows: [
		{
			columns: [
				{
					template: `
    						<p>I certify that (1) I have verified the identity of the Applicant Owner, (2) I have issued a Provisional
							Receipt to the Applicant Owner for the amount of payment received, (3) I have personally presented and explained
							the product and its benefits and have personally witnessed the Applicant Owner signing the application before
							the application is submitted, and (4) I have also filled out and submitted the Additional Intermediary Declarations Form, if applicable
							to the Applicant Owner</p>
    				`
				}
			]
		}
	]
}