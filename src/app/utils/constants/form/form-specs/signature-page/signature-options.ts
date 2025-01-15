import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';

export const SignatureOptionsTextSpecs: ColumnGeneratorSpecs = {
	text: 'Select your preferred method'
}

export const UploadAttestationButtonSpecs: ColumnGeneratorSpecs = {
	button: {
		title: 'Upload Attestation',
		fill: 'solid',
		color: 'primary',
		expand: 'block',
		function: () => {} //navigate to upload attestation view component
	},
	size: 6
}

export const DrawToSignButtonSpecs: ColumnGeneratorSpecs = {
	button: {
		title: 'Draw to Sign',
		fill: 'solid',
		color: 'primary',
		expand: 'block',
		function: () => {} //navigate to signature pad component
	},
	size: 6
}

export const SignatureOptionsFormSpecs: FormGeneratorSpecs = {
	rows: [
		{
			columns: [SignatureOptionsTextSpecs]
		},
		{
			columns: [DrawToSignButtonSpecs,
					  UploadAttestationButtonSpecs]
		}
	]
}

export const ChangeToAttestationButtonSpecs: ColumnGeneratorSpecs = {
	button: {
		title: 'Upload Attestation Instead',
		fill: 'clear',
		color: 'primary',
		function: () => {} //navigate to upload attestation view component
	}
}

export const ChangeToDrawToSignButtonSpecs: ColumnGeneratorSpecs = {
	button: {
		title: 'Draw to Sign Instead',
		fill: 'clear',
		color: 'primary',
		function: () => {} //navigate to signature pad component
	}
}

export const ChangeToAttestationFormSpecs: FormGeneratorSpecs = {
	rows: [
		{
			columns: [ChangeToAttestationButtonSpecs]
		}
	]
}

export const ChangeToDrawToSignFormSpecs: FormGeneratorSpecs = {
	rows: [
		{
			columns: [ChangeToDrawToSignButtonSpecs]
		}
	]
}

export const AttachAttestationButtonSpecs: ColumnGeneratorSpecs = {
	button: {
		title: 'Upload Attestation',
		fill: 'solid',
		color: 'primary'
	}
};

export const AttachAttestationFormSpecs: FormGeneratorSpecs = {
	rows: [
		{
			columns: [AttachAttestationButtonSpecs]
		}
	]
};

export const SignatureStatementHSBCTextSpecs1: ColumnGeneratorSpecs = {
	text: `If a material fact is not disclosed in this application, any policy issued may not be valid. If in doubt as to whether a fact is material, you are
	advised to disclose it. This includes information that you may have provided to the Intermediary but was not included in the application.
	Please check to ensure you are fully satisfied with the information declared in this application.`
}

export const SignatureStatementHSBCTextSpecs2: ColumnGeneratorSpecs = {
	text: `I declare that all statements I have made are true, completely and correctly recorded to the best of my knowledge and belief.`
}

export const SignatureOptionsFormSpecsHSBC: FormGeneratorSpecs = {
	rows: [
		{
			columns: [SignatureStatementHSBCTextSpecs1]
		},
		{
			columns: [SignatureStatementHSBCTextSpecs2]
		},
		
	]
}

export const SignatureStatementAFCTextSpecs1: ColumnGeneratorSpecs = {
	text: `If a material fact is not disclosed in this application, any policy issued may not be valid. If in doubt as to whether a fact is material, you are advised to
	disclose it. This includes information that you may have provided to the Intermediary but was not included in the application. Please check to ensure you
	are fully satisfied with the information declared in this application.`
}

export const SignatureStatementAFCTextSpecs2: ColumnGeneratorSpecs = {
	text: `I agree with the declarations and conditions of this application, and I declare that all statements I have made are true, completely and
	correctly recorded to the best of my knowledge and belief.`
}

export const SignatureOptionsFormSpecsAFC: FormGeneratorSpecs = {
	rows: [
		{
			columns: [SignatureStatementAFCTextSpecs1]
		},
		{
			columns: [SignatureStatementAFCTextSpecs2]
		},
		
	]
}
