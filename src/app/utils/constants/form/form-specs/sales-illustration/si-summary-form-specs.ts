import {
  SISummaryAOFormGroup, SISummaryIHPCoverageFormGroup, SISummaryPIFormGroup,
  SISummaryPlanFormGroup,
} from '@form-group/sales-illustration/si-summary-form-group';
import {
  ApplicantOwnerTitle,
  ProposedInsuredTitle,
  PlanTitle,
  SISummaryBenefitTableHeaderSpecs,
  SISummaryPremiumBreakdownHeaderSpecs,
  CoverageTitle,
  BenefitsTitle,
  SISummaryPremiumSummaryHeaderSpecs
} from '@form/column-specs/sales-illustration/si-summary-column-specs';
import {
  FormGeneratorSpecs
} from '@models/specs/form-generator-specs';
import * as siButtonSpecs from '@form/column-specs/sales-illustration/si-button-specs';

export const SISummaryAOFormSpecs: FormGeneratorSpecs = {
  rows: [
    { // Applicant Owner
      columns: [
        ApplicantOwnerTitle
      ]
    },
    {
      columns: [
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'firstName',
            attMaxLength: '150',
            formGroup: SISummaryAOFormGroup,
            setFieldName: true,
            fieldName: 'First Name'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'middleName',
            attMaxLength: '150',
            formGroup: SISummaryAOFormGroup,
            setFieldName: true,
            fieldName: 'Middle Name'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'lastName',
            attMaxLength: '150',
            formGroup: SISummaryAOFormGroup,
            setFieldName: true,
            fieldName: 'Last Name'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'dateOfBirth',
            attMaxLength: '150',
            formGroup: SISummaryAOFormGroup,
            setFieldName: true,
            fieldName: 'Date of Birth'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'age',
            attMaxLength: '3',
            formGroup: SISummaryAOFormGroup,
            setFieldName: true,
            fieldName: 'Age'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'gender',
            attMaxLength: '150',
            formGroup: SISummaryAOFormGroup,
            setFieldName: true,
            fieldName: 'Gender'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'occupationCode',
            attMaxLength: '150',
            formGroup: SISummaryAOFormGroup,
            setFieldName: true,
            fieldName: 'Occupation Classification'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'occupationGrpCode',
            attMaxLength: '150',
            formGroup: SISummaryAOFormGroup,
            setFieldName: true,
            fieldName: 'Occupation Group'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'occupationTitle',
            attMaxLength: '60',
            formGroup: SISummaryAOFormGroup,
            setFieldName: true,
            fieldName: 'Occupation (Title/Duties)'
          }
        },
        {
          size: 8,
          field: {
            type: 'readOnly',
            attName: 'vessel',
            attMaxLength: '150',
            formGroup: SISummaryAOFormGroup,
            setFieldName: true,
            fieldName: 'Vessel'
          }
        },
        {
          size: 12,
          field: {
            type: 'readOnly',
            attName: 'homeAddress',
            attMaxLength: '150',
            formGroup: SISummaryAOFormGroup,
            setFieldName: true,
            fieldName: 'Home Address'
          }
        },
        {
          size: 12,
          field: {
            type: 'readOnly',
            attName: 'workAddress',
            attMaxLength: '150',
            formGroup: SISummaryAOFormGroup,
            setFieldName: true,
            fieldName: 'Work Address'
          }
        }
      ],
    }
  ]
};

export const SISummaryPIFormSpecs: FormGeneratorSpecs = {
  rows: [
    { // Proposed Insured
      columns: [
        ProposedInsuredTitle
      ]
    },
    {
      columns: [
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'firstName',
            attMaxLength: '150',
            formGroup: SISummaryPIFormGroup,
            setFieldName: true,
            fieldName: 'First Name'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'middleName',
            attMaxLength: '150',
            formGroup: SISummaryPIFormGroup,
            setFieldName: true,
            fieldName: 'Middle Name'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'lastName',
            attMaxLength: '150',
            formGroup: SISummaryPIFormGroup,
            setFieldName: true,
            fieldName: 'Last Name'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'dateOfBirth',
            attMaxLength: '150',
            formGroup: SISummaryPIFormGroup,
            setFieldName: true,
            fieldName: 'Date of Birth'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'age',
            attMaxLength: '3',
            formGroup: SISummaryPIFormGroup,
            setFieldName: true,
            fieldName: 'Age'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'gender',
            attMaxLength: '150',
            formGroup: SISummaryPIFormGroup,
            setFieldName: true,
            fieldName: 'Gender'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'occupationCode',
            attMaxLength: '150',
            formGroup: SISummaryPIFormGroup,
            setFieldName: true,
            fieldName: 'Occupation Classification'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'occupationGrpCode',
            attMaxLength: '150',
            formGroup: SISummaryPIFormGroup,
            setFieldName: true,
            fieldName: 'Occupation Group'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'occupationTitle',
            attMaxLength: '60',
            formGroup: SISummaryPIFormGroup,
            setFieldName: true,
            fieldName: 'Occupation (Title/Duties)'
          }
        },
        {
          size: 8,
          field: {
            type: 'readOnly',
            attName: 'vessel',
            attMaxLength: '150',
            formGroup: SISummaryPIFormGroup,
            setFieldName: true,
            fieldName: 'Vessel'
          }
        },
        {
          size: 12,
          field: {
            type: 'readOnly',
            attName: 'homeAddress',
            attMaxLength: '150',
            formGroup: SISummaryPIFormGroup,
            setFieldName: true,
            fieldName: 'Home Address'
          }
        },
        {
          size: 12,
          field: {
            type: 'readOnly',
            attName: 'workAddress',
            attMaxLength: '150',
            formGroup: SISummaryPIFormGroup,
            setFieldName: true,
            fieldName: 'Work Address'
          }
        }
      ],
    }
  ]
};

export const SISummaryPlanFormSpecs: FormGeneratorSpecs = {
  rows: [
    { // Plan Information
      columns: [
        PlanTitle
      ]
    },
    {
      columns: [
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'planName',
            attMaxLength: '150',
            formGroup: SISummaryPlanFormGroup,
            setFieldName: true,
            fieldName: 'Plan Name'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'underwritingApproach',
            attMaxLength: '150',
            formGroup: SISummaryPlanFormGroup,
            setFieldName: true,
            fieldName: 'Underwriting Approach'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'inputOption',
            attMaxLength: '150',
            formGroup: SISummaryPlanFormGroup,
            setFieldName: true,
            fieldName: 'Input Option'
          },
          isHidden: true
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'paymode',
            attMaxLength: '150',
            formGroup: SISummaryPlanFormGroup,
            setFieldName: true,
            fieldName: 'Mode of Payment'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'modalPremium',
            attMaxLength: '150',
            formGroup: SISummaryPlanFormGroup,
            setFieldName: true,
            fieldName: 'Modal Premium'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'premium',
            attMaxLength: '150',
            formGroup: SISummaryPlanFormGroup,
            setFieldName: true,
            fieldName: 'Premium'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'basicSumAssured',
            attMaxLength: '150',
            formGroup: SISummaryPlanFormGroup,
            setFieldName: true,
            fieldName: 'Basic Sum Assured'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'deathBenefit',
            attMaxLength: '150',
            formGroup: SISummaryPlanFormGroup,
            setFieldName: true,
            fieldName: 'Death Benefit Option'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'dividendOption',
            attMaxLength: '150',
            formGroup: SISummaryPlanFormGroup,
            setFieldName: true,
            fieldName: 'Dividend Option'
          },
          isHidden: true
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'noLapsePeriod',
            attMaxLength: '150',
            formGroup: SISummaryPlanFormGroup,
            setFieldName: true,
            fieldName: 'No Lapse Period'
          },
          isHidden: true
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'sumAssuredMultiple',
            attMaxLength: '150',
            formGroup: SISummaryPlanFormGroup,
            setFieldName: true,
            fieldName: 'Sum Assured Multiple'
          },
          isHidden: true
        },
      ],
    }
  ]
};

export const SISummaryIHPCoverageFormSpecs: FormGeneratorSpecs = {
  rows: [
    { // Coverage Information
      columns: [
        CoverageTitle
      ]
    },
    {
      columns: [
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'planName',
            attMaxLength: '150',
            formGroup: SISummaryIHPCoverageFormGroup,
            setFieldName: true,
            fieldName: 'Health Name'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'annualPlanLimit',
            attMaxLength: '150',
            formGroup: SISummaryIHPCoverageFormGroup,
            setFieldName: true,
            fieldName: 'Annual Plan Limit'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'modeOfPayment',
            attMaxLength: '150',
            formGroup: SISummaryIHPCoverageFormGroup,
            setFieldName: true,
            fieldName: 'Mode of Payment'
          },
          isHidden: true
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'areaOfCover',
            attMaxLength: '150',
            formGroup: SISummaryIHPCoverageFormGroup,
            setFieldName: true,
            fieldName: 'Area of Cover'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'deductible',
            attMaxLength: '150',
            formGroup: SISummaryIHPCoverageFormGroup,
            setFieldName: true,
            fieldName: 'Deductible'
          }
        },
        {
          size: 4,
          field: {
            type: 'readOnly',
            attName: 'wellnessLimit',
            attMaxLength: '150',
            formGroup: SISummaryIHPCoverageFormGroup,
            setFieldName: true,
            fieldName: 'Wellness Limit'
          }
        },
      ],
    }
  ]
};

export const SISummaryIHPBenefitFormSpecs: FormGeneratorSpecs = {
  rows: [
    { // Benefits Information
      columns: [
        BenefitsTitle
      ]
    },
  ]
}; 

export const SISummaryRidersInfoFormSpecsBase: FormGeneratorSpecs = {
  rows: [
    {
      columns: [{ text: 'Rider Benefits' }],
      class: 'form-group-title'
    },
    {
      columns: [
        {
          size: 6,
          text: 'Available Riders'
        },
        {
          size: 6,
          text: 'Rider Sum Assured'
        }
      ]
    }
  ]
};

export const SISummaryPesoFundsFormSpecsBase: FormGeneratorSpecs = {
  rows: [
    {
      columns: [{ text: 'Funds Allocation' }],
      class: 'form-group-title'
    },
    {
      columns: [
        {
          size: 6,
          text: 'Peso Funds'
        },
        {
          size: 6,
          text: 'Fund Direction'
        }
      ]
    }
  ]
};

export const SISummaryDollarFundsFormSpecsBase: FormGeneratorSpecs = {
  rows: [
    {
      columns: [{ text: 'Funds Allocation' }],
      class: 'form-group-title'
    },
    {
      columns: [
        {
          size: 6,
          text: 'Dollar Funds'
        },
        {
          size: 6,
          text: 'Fund Direction'
        }
      ]
    }
  ]
};

export const SISummaryFundDirectionFormSpecsBase: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        {
          size: 12,
          text: 'Fund Direction'
        }
      ]
    }
  ]
}

export const SISummaryTopUpDirectionFormSpecsBase: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        {
          size: 12,
          text: 'Top Up Direction'
        }
      ]
    }
  ]
}

export const SISummaryTopupWithdrawalFormSpecsBase: FormGeneratorSpecs = {
  rows: [
    {
      columns: [{ text: 'Top-Ups and Withdrawal' }],
      class: 'form-group-title'
    }
  ]
};

export const SISummaryPremiumBreakdownSpecsBase: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        SISummaryPremiumBreakdownHeaderSpecs
      ],
      class: 'form-group-title'
    }
  ]
};

export const SISummaryPremiumSummarySpecsBase: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        SISummaryPremiumSummaryHeaderSpecs
      ],
      class: 'form-group-title'
    }
  ]
}; 

export const SISummaryBenefitTableSpecsBase: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        SISummaryBenefitTableHeaderSpecs
      ],
      class: 'form-group-title'
    }
  ]
};


export const GenerateSIButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siButtonSpecs.EmailSalesIllustrationColumnSpecs,
        siButtonSpecs.ViewSalesIllustrationOutputColumnSpecs,
        siButtonSpecs.CreateApplicationFormButtonColumnSpecs
      ]
    }
  ]
};

export const ActionSIButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siButtonSpecs.EditSalesIllustrationColumnSpecs,
        siButtonSpecs.DeleteSalesIllustrationColumnSpecs,
      ]
    }
  ]
};
