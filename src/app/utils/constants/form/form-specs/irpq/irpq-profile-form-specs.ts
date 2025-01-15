import * as IrpqProfile from '@utils/constants/form/column-specs/irpq';
import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';

export const PageDetailsFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      class: "ion-padding-start ion-text-left",
      columns: [
        IrpqProfile.PageDetailsSpecsPQ
      ]
    }
  ]
}

export const IrpqSlide1FormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      class: "ion-text-left ion-padding-start",
      columns: [
        IrpqProfile.Q1QuestionSpecs
      ]
    },
    {
      columns: [
        IrpqProfile.Q1ChoicesSpecs
      ]
    },
    {
      class: "ion-text-left ion-padding-start",
      columns: [
        IrpqProfile.Q2QuestionSpecs
      ]
    },
    {
      columns: [
        IrpqProfile.Q2ChoicesSpecs
      ]
    },
    {
      columns: [
        IrpqProfile.NextSlideFirstButtonSpecs
      ]
    }
  ]
}

export const IrpqSlide2FormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      class: "ion-text-left ion-padding-start",
      columns: [
        IrpqProfile.Q3QuestionSpecs
      ]
    },
    {
      columns: [
        IrpqProfile.Q3ChoicesSpecs
      ]
    },
    {
      class: "ion-text-left ion-padding-start",
      columns: [
        IrpqProfile.Q4QuestionSpecs
      ]
    },
    {
      columns: [
        IrpqProfile.Q4ChoicesSpecs
      ]
    },
    {
      columns: [
        IrpqProfile.PrevSlideButtonSpecs,
        IrpqProfile.NextSlideButtonSpecs
      ]
    }
  ]
}

export const IrpqSlide3FormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      class: "ion-text-left ion-padding-start",
      columns: [
        IrpqProfile.Q5QuestionSpecs
      ]
    },
    {
      columns: [
        IrpqProfile.Q5ChoicesSpecs
      ]
    },
    {
      class: "ion-text-left ion-padding-start",
      columns: [
        IrpqProfile.Q6QuestionSpecs
      ]
    },
    {
      columns: [
        IrpqProfile.Q6ChoicesSpecs
      ]
    },
    {
      columns: [
        IrpqProfile.PrevSlideButtonSpecs,
        IrpqProfile.NextSlideButtonSpecs
      ]
    }
  ]
}

export const irpqSlide4FormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      class: "ion-text-left ion-padding-start",
      columns: [
        IrpqProfile.Q7QuestionSpecs
      ]
    },
    {
      columns: [
        IrpqProfile.Q7ChoicesSpecs
      ]
    },
    {
      class: "ion-text-left ion-padding-start",
      columns: [
        IrpqProfile.Q8QuestionSpecs
      ]
    },
    {
      columns: [
        IrpqProfile.Q8ChoicesSpecs
      ]
    },
    {
      columns: [
        IrpqProfile.PrevSlideButtonSpecs,
        IrpqProfile.SubmitSlideButtonSpecs
      ]
    }
  ]
}