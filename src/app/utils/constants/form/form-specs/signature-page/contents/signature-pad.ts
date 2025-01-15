import {RowGeneratorSpecs} from '@models/specs/row-generator-specs';
import {ColumnGeneratorSpecs} from '@models/specs/column-generator-specs';
import { cloneDeep } from 'lodash';
import {SignaturePageModules} from '@pages/signature-page/signature';

export const signaturePad = {
  show: false,
  selectedModule: ''
};

export const signaturePadButton: ColumnGeneratorSpecs = {
  button: {
    fill: 'clear',
    color: 'primary',
    icon: 'document',
    disabled: true,
    function: () => {

    }
  },
  size: 2
};

export const SIGNATURE_PAD_TEMPLATE: RowGeneratorSpecs = {
  columns: [
    { text: 'Signature Pad', size: 10 },
    signaturePadButton,
  ]
};


export const PROPOSED_INSURED_SIGNATURE = cloneDeep(SIGNATURE_PAD_TEMPLATE);
PROPOSED_INSURED_SIGNATURE.columns[1].button.function = () => {
  signaturePad.show = true;
  signaturePad.selectedModule = SignaturePageModules.ProposedInsured;
};

export const INTERMEDIARY_SIGNATURE = cloneDeep(SIGNATURE_PAD_TEMPLATE);
INTERMEDIARY_SIGNATURE.columns[1].button.function = () => {
  signaturePad.show = true;
  signaturePad.selectedModule = SignaturePageModules.Intermediary;
};

export const APPLICATION_SIGNATURE = cloneDeep(SIGNATURE_PAD_TEMPLATE);
APPLICATION_SIGNATURE.columns[1].button.function = () => {
  signaturePad.show = true;
  signaturePad.selectedModule = SignaturePageModules.ApplicantOwner;
};
