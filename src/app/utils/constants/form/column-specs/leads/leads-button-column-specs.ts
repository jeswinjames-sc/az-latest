import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { MODULE } from '@utils/enums/module';
import { SegmentFormGroup } from '@form-group/leads/lead-form-group';
import { LEAD_SEGMENT } from '@utils/constants/options/segment/lead-option';

export const LeadSegmentSpec: ColumnGeneratorSpecs = {
  field: {
    attName: 'leadSegment',
    type: 'segment',
    setFieldName: false,
    isSegmentOption: true,
    options: LEAD_SEGMENT,
    formGroup: SegmentFormGroup,
    class: "remove-padding"
  },
  class:"remove-padding"
};

export const BasicLeadSaveButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: 'Create Lead',
    color: 'primary',
    shape: 'block',
    fill: 'solid'
  },
  size: 4
};

export const BasicLeadCancelButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: 'Cancel',
    color: 'primary',
    shape: 'block',
    fill: 'clear'
  },
  size: 4,
  offset: 2
};

export const CreateEditLeadNextButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: 'Proceed to Need Section',
    color: 'primary',
    shape: 'block',
    fill: 'solid'
  },
  size: 4,
  offset: 4
};

export const StarsNextButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: 'Proceed to Referror Section',
    color: 'primary',
    shape: 'block',
    fill: 'solid'
  },
  size: 4,
  offset: 4
};

export const AddReferrorButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: 'Add Referror',
    color: 'primary',
    shape: 'block',
    fill: 'solid'
  },
  size: 4,
  offset: 4
};

export const SaveLeadButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: 'Save',
    color: 'primary',
    shape: 'block',
    fill: 'solid'
  },
  size: 3,
  offset: 9
};

export const CompleteLeadButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: 'Complete',
    color: 'primary',
    shape: 'block',
    fill: 'solid'
  },
  size: 4,
  offset: 4
};

export const CreateNAViewLeadButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: `Create ${MODULE.NA}`,
    color: 'primary',
    shape: 'block',
    fill: 'outline'
  },
  size: 3
};

export const CreateIRPQViewLeadButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: `Create ${MODULE.IRPQ}`,
    color: 'primary',
    shape: 'block',
    fill: 'outline'
  },
  size: 3
};

export const CreateSIViewLeadButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: `Create ${MODULE.SI}`,
    color: 'primary',
    shape: 'block',
    fill: 'outline'
  },
  size: 3
};

export const CreateEAPPViewLeadButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: `Create ${MODULE.EAPP}`,
    color: 'primary',
    shape: 'block',
    fill: 'outline'
  },
  size: 3
};

export const MyNAViewLeadButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: `My ${MODULE.NA}`,
    color: 'primary',
    shape: 'block',
    fill: 'solid'
  },
  size: 3
};

export const MyIRPQViewLeadButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: `My ${MODULE.IRPQ}`,
    color: 'primary',
    shape: 'block',
    fill: 'solid'
  },
  size: 3
};

export const MySIViewLeadButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: `My ${MODULE.SI}`,
    color: 'primary',
    shape: 'block',
    fill: 'solid'
  },
  size: 3
};

export const MyEAPPViewLeadButtonSpecs: ColumnGeneratorSpecs = {
  button: {
    title: `My ${MODULE.EAPP}`,
    color: 'primary',
    shape: 'block',
    fill: 'solid'
  },
  size: 3
};
