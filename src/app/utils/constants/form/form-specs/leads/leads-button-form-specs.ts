import * as buttonColumnSpecs from '@form/column-specs/leads/leads-button-column-specs';
import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { Consent, ConsentDescription } from '@form/column-specs/shared/template/template-spec';

export const LeadSegmentButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        buttonColumnSpecs.LeadSegmentSpec,
      ],
      class: 'ion-no-padding'
    }
  ]
};

export const StarsButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        buttonColumnSpecs.CompleteLeadButtonSpecs
      ]
    }
  ]
};

export const SaveLeadButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        buttonColumnSpecs.SaveLeadButtonSpecs
      ]
    }
  ]
};

export const ReferrorButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        buttonColumnSpecs.AddReferrorButtonSpecs
      ]
    },
    {
      columns: [
        Consent,
        ConsentDescription
      ]
    },
    {
      columns: [
        buttonColumnSpecs.CompleteLeadButtonSpecs
      ]
    }
  ]
};

export const ViewLeadButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        buttonColumnSpecs.CreateNAViewLeadButtonSpecs,
        buttonColumnSpecs.CreateIRPQViewLeadButtonSpecs,
        buttonColumnSpecs.CreateSIViewLeadButtonSpecs,
        buttonColumnSpecs.CreateEAPPViewLeadButtonSpecs
      ]
    },
    {
      columns: [
        buttonColumnSpecs.MyNAViewLeadButtonSpecs,
        buttonColumnSpecs.MyIRPQViewLeadButtonSpecs,
        buttonColumnSpecs.MySIViewLeadButtonSpecs,
        buttonColumnSpecs.MyEAPPViewLeadButtonSpecs
      ]
    }
  ]
};