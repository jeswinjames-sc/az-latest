import * as SubCheckListCols from '@utils/constants/form/column-specs/submission-checklist/submission-checklist-view'
import { FormGeneratorSpecs } from '@models/specs/form-generator-specs'

export const AppNumberFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                SubCheckListCols.AppNumberSpecs
            ]
        }
    ]
}

export const ModalsFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.AppFormSpecs,
                SubCheckListCols.AppFormButtonViewSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.SISpecs,
                SubCheckListCols.SIButtonViewSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.NAWaiverSpecs,
                SubCheckListCols.NAWaiverButtonViewSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.IRPQSpecs,
                SubCheckListCols.IRPQButtonViewSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.CICSpecs,
                SubCheckListCols.CICButtonViewSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.AuthorizationMedSpecs,
                SubCheckListCols.AuthorizationMedButtonViewSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.ReplacementSpecs,
                SubCheckListCols.ReplacementButtonViewSpecs
            ]
        }
    ]
}

export const ACRFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.ACRIsAttachedSpecs,
                SubCheckListCols.ACRSpecs,
                SubCheckListCols.ACRButtonEditSpecs
            ]
        }
    ]
}

export const SubmissionFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.AuthorizedChildIsAttachedSpecs,
                SubCheckListCols.AuthorizedChildSpecs,
                SubCheckListCols.AuthorizedChildButtonCaptureSpecs,
                SubCheckListCols.AuthorizedChildButtonViewSpecs,
                SubCheckListCols.AuthorizedChildButtonDeleteSpecs
            ]
        },
    ]
}

export const POAOFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.POAOIsAttachedSpecs,
                SubCheckListCols.POAOSpecs
            ]   
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.POAO1Filler,
                SubCheckListCols.POAO1ButtonViewSpecs,
                SubCheckListCols.POAO1Specs,
                SubCheckListCols.POAO1ButtonCaptureSpecs,
                SubCheckListCols.POAO1ButtonDeleteSpecs
            ]   
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.POAO2Filler,
                SubCheckListCols.POAO2ButtonViewSpecs,
                SubCheckListCols.POAO2Specs,
                SubCheckListCols.POAO2ButtonCaptureSpecs,
                SubCheckListCols.POAO2ButtonDeleteSpecs
            ]   
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.POAO3Filler,
                SubCheckListCols.POAO3ButtonViewSpecs,
                SubCheckListCols.POAO3Specs,
                SubCheckListCols.POAO3ButtonCaptureSpecs,
                SubCheckListCols.POAO3ButtonDeleteSpecs
            ]   
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.POAO4Filler,
                SubCheckListCols.POAO4ButtonViewSpecs,
                SubCheckListCols.POAO4Specs,
                SubCheckListCols.POAO4ButtonCaptureSpecs,
                SubCheckListCols.POAO4ButtonDeleteSpecs
            ]   
        },
    ]
}

export const KYCFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.KYCIsAttachedSpecs,
                SubCheckListCols.KYCSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.KYC1Filler,
                SubCheckListCols.KYC1ButtonViewSpecs,
                SubCheckListCols.KYC1Specs,
                SubCheckListCols.KYC1ButtonCaptureSpecs,
                SubCheckListCols.KYC1ButtonDeleteSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.KYC2Filler,
                SubCheckListCols.KYC2ButtonViewSpecs,
                SubCheckListCols.KYC2Specs,
                SubCheckListCols.KYC2ButtonCaptureSpecs,
                SubCheckListCols.KYC2ButtonDeleteSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.KYC3Filler,
                SubCheckListCols.KYC3ButtonViewSpecs,
                SubCheckListCols.KYC3Specs,
                SubCheckListCols.KYC3ButtonCaptureSpecs,
                SubCheckListCols.KYC3ButtonDeleteSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.KYC4Filler,
                SubCheckListCols.KYC4ButtonViewSpecs,
                SubCheckListCols.KYC4Specs,
                SubCheckListCols.KYC4ButtonCaptureSpecs,
                SubCheckListCols.KYC4ButtonDeleteSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.KYC5Filler,
                SubCheckListCols.KYC5ButtonViewSpecs,
                SubCheckListCols.KYC5Specs,
                SubCheckListCols.KYC5ButtonCaptureSpecs,
                SubCheckListCols.KYC5ButtonDeleteSpecs
            ]
        }
    ]
}

export const AgentsReportFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                SubCheckListCols.AgentsReportFiller,
                SubCheckListCols.AgentsReportTextSpecs
            ]
        },
        {
            columns: [
                SubCheckListCols.AgentsReportFiller,
                SubCheckListCols.AgentsReportInputSpecs
            ]
        }
    ]
}

export const ValidIdFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.ValidIDAOIsAttachedSpecs,
                SubCheckListCols.ValidIDAOSpecs,
                SubCheckListCols.ValidIDAOButtonCaptureSpecs,
                SubCheckListCols.ValidIDAOButtonViewSpecs,
                SubCheckListCols.ValidIDAOButtonDeleteSpecs
            ]
        },
        {
            columns: [
                SubCheckListCols.ValidIDAOIdTypeTextSpecs,
                SubCheckListCols.ValidIDAOTypeSpecs,
            ]
        },
        {
            columns: [
                SubCheckListCols.ValidIDAOExpDateTextSpecs,
                SubCheckListCols.ValidIDAOExpDateSpecs,
            ]
        },
        {
            columns: [
                SubCheckListCols.ValidIDAODOBTextSpecs,
                SubCheckListCols.ValidIDAODOBSpecs,
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.ValidIDPIIsAttachedSpecs,
                SubCheckListCols.ValidIDPISpecs,
                SubCheckListCols.ValidIDPIButtonCaptureSpecs,
                SubCheckListCols.ValidIDPIButtonViewSpecs,
                SubCheckListCols.ValidIDPIButtonDeleteSpecs
            ]
        },
        {
            columns: [
                SubCheckListCols.ValidIDPIIdTypeTextSpecs,
                SubCheckListCols.ValidIDPITypeSpecs,
            ]
        },
        {
            columns: [
                SubCheckListCols.ValidIDPIExpDateTextSpecs,
                SubCheckListCols.ValidIDPIExpDateSpecs,
            ]
        },
        {
            columns: [
                SubCheckListCols.ValidIDPIDOBTextSpecs,
                SubCheckListCols.ValidIDPIDOBSpecs,
            ]
        }
    ]
}

export const PoPFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                SubCheckListCols.PoPUseSpecs,
                SubCheckListCols.PoPButtonToggleSpecs,
            ],
            class: "border-btm-1"
        },
        {
            columns: [
                SubCheckListCols.PoPOnlineCHSameAsAOTextSpecs,
                SubCheckListCols.PoPOnlineCHSameAsAOToggleSpecs,
            ]
        },
        {
            columns: [
                SubCheckListCols.PoPOnlineCHRelationToAOTextSpecs,
                SubCheckListCols.PoPOnlineCHRelationToAOSelectSpecs,
                SubCheckListCols.CHDetailsTextSpecs,
                SubCheckListCols.CHDOBTextSpecs,
                SubCheckListCols.CHDOBSpecs,
                SubCheckListCols.CHGenderTextSpecs,
                SubCheckListCols.CHGenderSpecs,
                SubCheckListCols.CHNationalityTextSpecs,
                SubCheckListCols.CHNationalitySpecs,
                SubCheckListCols.CHPOBTextSpecs,
                SubCheckListCols.CHCountryTextSpecs,
                SubCheckListCols.CHCountrySpecs,
                SubCheckListCols.CHProvinceTextSpecs,
                SubCheckListCols.CHProvinceSpecs,
                SubCheckListCols.CHCityTextSpecs,
                SubCheckListCols.CHCitySpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.PoPOnlineIsAttachedSpecs,
                SubCheckListCols.PoPOnlineSpecs,
                SubCheckListCols.PoPOnlineButtonPaySpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.PoPIsAttachedSpecs,
                SubCheckListCols.PoPSpecs,
                SubCheckListCols.PoPButtonCaptureSpecs,
                SubCheckListCols.PoPButtonViewSpecs,
                SubCheckListCols.PoPButtonDeleteSpecs
            ]
        },
        {
            columns: [
                SubCheckListCols.RefNumberTextSpecs,
                SubCheckListCols.RefNumberInputSpecs
            ]
        },
    ]
}

export const MedResultFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.MedResultAOIsAttachedSpecs,
                SubCheckListCols.MedResultAOSpecs,
                SubCheckListCols.MedResultAOButtonCaptureSpecs,
                SubCheckListCols.MedResultAOButtonViewSpecs,
                SubCheckListCols.MedResultAOButtonDeleteSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.MedResultPIIsAttachedSpecs,
                SubCheckListCols.MedResultPISpecs,
                SubCheckListCols.MedResultPIButtonCaptureSpecs,
                SubCheckListCols.MedResultPIButtonViewSpecs,
                SubCheckListCols.MedResultPIButtonDeleteSpecs
            ]
        }
    ]
}

export const PaymentSchemeCreditFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                SubCheckListCols.CHSameAsAOSpecs,
                SubCheckListCols.CHSameAsAOSegment
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.BillingIsAttachedSpecs,
                SubCheckListCols.BillingSpecs,
                SubCheckListCols.BillingButtonEditSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.CreditCardIsAttachedSpecs,
                SubCheckListCols.CreditCardSpecs,
                SubCheckListCols.CreditCardButtonCaptureSpecs,
                SubCheckListCols.CreditCardButtonViewSpecs,
                SubCheckListCols.CreditCardButtonDeleteSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.PoRIsAttachedSpecs,
                SubCheckListCols.PoRSpecs,
                SubCheckListCols.PoRButtonCaptureSpecs,
                SubCheckListCols.PoRButtonViewSpecs,
                SubCheckListCols.PoRButtonDeleteSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.CHValidIdIsAttachedSpecs,
                SubCheckListCols.CHValidIdSpecs,
                SubCheckListCols.CHValidIdButtonCaptureSpecs,
                SubCheckListCols.CHValidIdButtonViewSpecs,
                SubCheckListCols.CHValidIdButtonDeleteSpecs
            ]
        },
        {
            columns: [
                SubCheckListCols.CHValidIdIdTypeTextSpecs,
                SubCheckListCols.CHValidIdTypeInputSpecs
            ]
        },
        {
            columns: [
                SubCheckListCols.CHValidIdExpDateTextSpecs,
                SubCheckListCols.CHValidIdExpDateSpecs
            ]
        }
    ]
}

export const PaymentSchemeSalaryDeductionFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.SalaryDeductionIsAttachedSpecs,
                SubCheckListCols.SalaryDeductionSpecs,
                SubCheckListCols.SalaryDeductionButtonCaptureSpecs,
                SubCheckListCols.SalaryDeductionButtonViewSpecs,
                SubCheckListCols.SalaryDeductionButtonDeleteSpecs
            ]
        }
    ]
}

export const PaymentSchemeADAFormSpecs: FormGeneratorSpecs = {
    rows: [
        // {
        //     class: 'checklist',
        //     columns: [
        //         SubCheckListCols.AutoDebitIsAttachedSpecs,
        //         SubCheckListCols.AutoDebitSpecs,
        //         SubCheckListCols.AutoDebitButtonEditSpecs
        //     ]
        // },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.EnrollIsAttachedSpecs,
                SubCheckListCols.EnrollSpecs,
                SubCheckListCols.EnrollButtonCaptureSpecs,
                SubCheckListCols.EnrollButtonViewSpecs,
                SubCheckListCols.EnrollButtonDeleteSpecs
            ]
        },
    ]
}

export const FATCAFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.AOConsentIsAttachedSpecs,
                SubCheckListCols.AOConsentSpecs,
                SubCheckListCols.AOConsentButtonCaptureSpecs,
                SubCheckListCols.AOConsentButtonViewSpecs,
                SubCheckListCols.AOConsentButtonDeleteSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.AOW8IsAttachedSpecs,
                SubCheckListCols.AOW8Specs,
                SubCheckListCols.AOW8ButtonCaptureSpecs,
                SubCheckListCols.AOW8ButtonViewSpecs,
                SubCheckListCols.AOW8ButtonDeleteSpecs
            ]
        },
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.AOW9IsAttachedSpecs,
                SubCheckListCols.AOW9Specs,
                SubCheckListCols.AOW9ButtonCaptureSpecs,
                SubCheckListCols.AOW9ButtonViewSpecs,
                SubCheckListCols.AOW9ButtonDeleteSpecs
            ]
        }
    ]
}

export const EPolicyFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                SubCheckListCols.EPolicySpecs,
                SubCheckListCols.EPolicyToggleSpecs
            ]
        }
    ]
}

export const SubmissionSubmitFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                SubCheckListCols.SubmissionSubmitButtonSpecs
            ]
        }
    ]
}

export const BancaReferralFormFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.BancaReferralFormIsAttachedSpecs,
                SubCheckListCols.BancaReferralFormSpecs,
                SubCheckListCols.BancaReferralFormButtonCaptureSpecs,
                SubCheckListCols.BancaReferralFormButtonViewSpecs,
                SubCheckListCols.BancaReferralFormButtonDeleteSpecs
            ]
        }
    ]
}

export const ReferrorFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [
                SubCheckListCols.ReferrorSpecs,
                SubCheckListCols.ReferrorToggleSpecs,
            ]
        },
    ]
}

export const bancaSalesChecklistFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            class: 'checklist',
            columns: [
                SubCheckListCols.bancaSalesChecklistFormIsAttachedSpecs,
                SubCheckListCols.bancaSalesChecklistFormSpecsLabel,
                SubCheckListCols.bancaSalesChecklistFormButtonCaptureSpecs,
                SubCheckListCols.bancaSalesChecklistFormButtonViewSpecs,
                SubCheckListCols.bancaSalesChecklistFormButtonDeleteSpecs
            ]
        }
    ]
}