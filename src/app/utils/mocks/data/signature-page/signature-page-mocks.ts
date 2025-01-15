import { ISignatures } from '@pages/signature-page/signature';
import { SIGNATURE_TYPE } from '@utils/constants/modules/signature-page';

/* 
 * base 64 can be reused for attachments since they are so long, I cannot give individual base 64 for every attachments, 
*/
export const signatureBase64 = `TG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQsIGNvbnNlY3RldHVyIGFkaXBpcTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZ
						  		XQsIGNvbnNlY3RldHVyIGFkaXBpc2NpbmcgZWxpdCwgc2VkIGRvIGVpdXNtb2QgdGVtcG9yIGluY2lkaWR1bnQgdXQgbGF
						  		ib3JlIGV0IGRvbG9yZSBtYWduYSBhbGlxdWEu`;

export const eappId = '80209744-5add-433a-b446-a91cc59359e8';
export const leadId = '25bf59a1-f586-47b7-a6da-4c661b7d0db7';
export const naId = '0ae13ef0-8f3f-40ae-a7e5-427f45bc074d';
export const irpqId = '41694506-587b-4de0-a484-f0122275740d';
export const siId = 'a0c98009-ffaf-40c8-85dc-638e361d2aae';

//AO == PI sample data
export const signatureAOEqualsPIDrawToSignThirdPartyConsent = [
	{
		signatureBase64: signatureBase64,
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.applicantOwner, //1 is Applicant Owner
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: true,
		isAttestation: 'N',
		attestationBase64: '',
		videoScreenshotBase64: '',
		emailAcknowledgementBase64: ''
	},
	{
		signatureBase64: signatureBase64,
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.agent, //3 is Intermediary
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: true,
		isAttestation: 'N',
		attestationBase64: '',
		videoScreenshotBase64: '',
		emailAcknowledgementBase64: ''
	}
];

export const signatureAOEqualsPIDrawToSignNoThirdPartyConsent = [
	{
		signatureBase64: signatureBase64,
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.applicantOwner, //1 is Applicant Owner
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: false,
		isAttestation: 'N',
		attestationBase64: '',
		videoScreenshotBase64: '',
		emailAcknowledgementBase64: ''
	},
	{
		signatureBase64: signatureBase64,
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.agent, //3 is Intermediary
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: false,
		isAttestation: 'N',
		attestationBase64: '',
		videoScreenshotBase64: '',
		emailAcknowledgementBase64: ''
	}
];

export const signatureAOEqualsPIUploadAttestationThirdPartyConsent = [
	{
		signatureBase64: '',
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.applicantOwner, //1 is Applicant Owner
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: true,
		isAttestation: 'Y',
		attestationBase64: signatureBase64,
		videoScreenshotBase64: signatureBase64,
		emailAcknowledgementBase64: signatureBase64
	},
	{
		signatureBase64: '',
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.agent, //3 is Intermediary
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: true,
		isAttestation: 'Y',
		attestationBase64: signatureBase64,
		videoScreenshotBase64: signatureBase64,
		emailAcknowledgementBase64: signatureBase64
	}
];

export const signatureAOEqualsPIUploadAttestationNoThirdPartyConsent = [
	{
		signatureBase64: '',
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.applicantOwner, //1 is Applicant Owner
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: false,
		isAttestation: 'Y',
		attestationBase64: signatureBase64,
		videoScreenshotBase64: signatureBase64,
		emailAcknowledgementBase64: signatureBase64
	},
	{
		signatureBase64: '',
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.agent, //3 is Intermediary
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: false,
		isAttestation: 'Y',
		attestationBase64: signatureBase64,
		videoScreenshotBase64: signatureBase64,
		emailAcknowledgementBase64: signatureBase64
	}
];

//AO <> PI Sample Data
export const signatureAONotPIDrawToSignThirdPartyConsent = [
	{
		signatureBase64: signatureBase64,
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.applicantOwner, //1 is Applicant Owner
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: true,
		isAttestation: 'N',
		attestationBase64: '',
		videoScreenshotBase64: '',
		emailAcknowledgementBase64: ''
	},
	{
		signatureBase64: signatureBase64,
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.proposedInsured, //2 is Proposed Insured
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: true,
		isAttestation: 'N',
		attestationBase64: '',
		videoScreenshotBase64: '',
		emailAcknowledgementBase64: ''
	},
	{
		signatureBase64: signatureBase64,
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.agent, //3 is Intermediary
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: true,
		isAttestation: 'N',
		attestationBase64: '',
		videoScreenshotBase64: '',
		emailAcknowledgementBase64: ''
	}
];

export const signatureNotPIDrawToSignNoThirdPartyConsent = [
	{
		signatureBase64: signatureBase64,
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.applicantOwner, //1 is Applicant Owner
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: false,
		isAttestation: 'N',
		attestationBase64: '',
		videoScreenshotBase64: '',
		emailAcknowledgementBase64: ''
	},
	{
		signatureBase64: signatureBase64,
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.proposedInsured, //2 is Proposed Insured
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: false,
		isAttestation: 'N',
		attestationBase64: '',
		videoScreenshotBase64: '',
		emailAcknowledgementBase64: ''
	},
	{
		signatureBase64: signatureBase64,
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.agent, //3 is Intermediary
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: false,
		isAttestation: 'N',
		attestationBase64: '',
		videoScreenshotBase64: '',
		emailAcknowledgementBase64: ''
	}
];

export const signatureAONotPIUploadAttestationThirdPartyConsent = [
	{
		signatureBase64: '',
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.applicantOwner, //1 is Applicant Owner
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: true,
		isAttestation: 'Y',
		attestationBase64: signatureBase64,
		videoScreenshotBase64: signatureBase64,
		emailAcknowledgementBase64: signatureBase64
	},
	{
		signatureBase64: '',
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.proposedInsured, //2 is Proposed Insured
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: true,
		isAttestation: 'Y',
		attestationBase64: signatureBase64,
		videoScreenshotBase64: signatureBase64,
		emailAcknowledgementBase64: signatureBase64
	},
	{
		signatureBase64: '',
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.agent, //3 is Intermediary
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: true,
		isAttestation: 'Y',
		attestationBase64: signatureBase64,
		videoScreenshotBase64: signatureBase64,
		emailAcknowledgementBase64: signatureBase64
	}
];

export const signatureAONotPIUploadAttestationNoThirdPartyConsent = [
	{
		signatureBase64: '',
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.applicantOwner, //1 is Applicant Owner
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: false,
		isAttestation: 'Y',
		attestationBase64: signatureBase64,
		videoScreenshotBase64: signatureBase64,
		emailAcknowledgementBase64: signatureBase64
	},
	{
		signatureBase64: '',
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.proposedInsured, //2 is Proposed Insured
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: false,
		isAttestation: 'Y',
		attestationBase64: signatureBase64,
		videoScreenshotBase64: signatureBase64,
		emailAcknowledgementBase64: signatureBase64
	},
	{
		signatureBase64: '',
		signatureDate: Date.now(),
		eappId: eappId,
		signatureType: SIGNATURE_TYPE.agent, //3 is Intermediary
		paperFormatConsent: false, //paper format consent is now always false as of revised app form
		thirdPartyConsent: false,
		isAttestation: 'Y',
		attestationBase64: signatureBase64,
		videoScreenshotBase64: signatureBase64,
		emailAcknowledgementBase64: signatureBase64
	}
];

//Parameters for insertSignature() and updateSignature() functions (signature-page.service.ts)
export const consentsThirdParty = {
	paperFormatConsent: false,
	thirdPartyConsent: true
};

export const consentsNoThirdParty = {
	paperFormatConsent: false,
	thirdPartyConsent: false
};

export const attestationIsTrue = {
	isAttestation: 'Y',
	attestationBase64: signatureBase64,
	videoScreenshotBase64: signatureBase64,
	emailAcknowledgementBase64: signatureBase64
};

export const attestationIsFalse = {
	isAttestation: 'N',
	attestationBase64: '',
	videoScreenshotBase64: '',
	emailAcknowledgementBase64: ''
};

export const signaturesNoAttestationAOEqualsPI: ISignatures[] = [
	{
		type: SIGNATURE_TYPE.applicantOwner,
		value: signatureBase64
	},
	{
		type: SIGNATURE_TYPE.agent,
		value: signatureBase64
	}
];

export const signaturesNoAttestationAONotPI: ISignatures[] = [
	{
		type: SIGNATURE_TYPE.applicantOwner,
		value: signatureBase64
	},
	{
		type: SIGNATURE_TYPE.proposedInsured,
		value: signatureBase64
	},
	{
		type: SIGNATURE_TYPE.agent,
		value: signatureBase64
	}
];

export const signaturesButAttestation: ISignatures[] = [
	{
		type: SIGNATURE_TYPE.agent,
		value: signatureBase64
	}
];