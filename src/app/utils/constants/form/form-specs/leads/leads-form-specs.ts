import * as buttonColumnSpecs from '@form/column-specs/leads/leads-button-column-specs';
import * as formColumnSpecs from '@form/column-specs/leads/leads-form-column-specs';
import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import {
  BasicLeadInstruction,
  PersonalInformation,
  WorkInformation,
  PresentAddress,
  ReferredByBankPartner
} from '@form/column-specs/shared/template/template-specs';

export const BasicLeadFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        BasicLeadInstruction
      ]
    },
    {
      columns: [
        formColumnSpecs.BasicLeadFirstNameSpec,
        formColumnSpecs.BasicLeadLastNameSpec
      ]
    },
    {
      columns: [
        formColumnSpecs.ImgSpec,
      ]
    },
    {
      columns: [
        formColumnSpecs.BasicLeadPhoneNumberSpec,
        formColumnSpecs.BasicLeadEmailAddressSpec
      ]
    },
    {
      columns: [
        buttonColumnSpecs.BasicLeadCancelButtonSpecs,
        buttonColumnSpecs.BasicLeadSaveButtonSpecs
      ]
    }
  ]
};

export const CreateEditLeadFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        PersonalInformation
      ]
    },
    {
      columns: [
        formColumnSpecs.CreateEditLeadFirstNameSpec,
        formColumnSpecs.CreateEditLeadMiddleNameSpec,
        formColumnSpecs.CreateEditLeadLastNameSpec
      ]
    },
    {
      columns: [
        formColumnSpecs.CreateEditLeadEmailAddressSpec,
        formColumnSpecs.CreateEditLeadPhoneNumberSpec,
        formColumnSpecs.CreateEditLeadCivilStatusSpec,
      ]
    },
    {
      columns: [
        formColumnSpecs.CreateEditLeadDateOfBirthSpec,
        formColumnSpecs.CreateEditLeadAgeSpec,
        formColumnSpecs.CreateEditLeadGenderSpec,
        formColumnSpecs.CreateEditLeadLeadStatusSpec,
      ]
    },
    {
      columns: [
        PresentAddress
      ]
    },
    {
      columns: [
        formColumnSpecs.CreateEditLeadUnitBldgSpec,
        formColumnSpecs.CreateEditLeadLotBlkSpec
      ]
    },
    {
      columns: [
        formColumnSpecs.CreateEditLeadStreetNameSpec,
        formColumnSpecs.CreateEditLeadHomeSubdivisionSpec,
      ]
    },
    {
      columns: [
        formColumnSpecs.CreateEditLeadHomeCountrySpec,
        formColumnSpecs.CreateEditLeadHomeProvinceSpec
      ]
    },
    {
      columns: [
        formColumnSpecs.CreateEditLeadHomeCitySpec,
        formColumnSpecs.CreateEditLeadHomeZipCodeSpec
      ]
    },
    {
      columns: [
        WorkInformation
      ]
    },
    {
      columns: [
        formColumnSpecs.CreateEditLeadClassOccupationSpec,
        formColumnSpecs.CreateEditLeadOccupationGroupingSpec
      ]
    },
    {
      columns: [
        formColumnSpecs.CreateEditLeadMonthlyIncomeSpec,
        formColumnSpecs.CreateEditLeadHouseholdIncomeSpec
      ]
    },
    {
      columns: [
        formColumnSpecs.CreateEditLeadWorkUnitBldgSpec,
        formColumnSpecs.CreateEditLeadWorkLotBldgSpec
      ]
    },
    {
      columns: [
        formColumnSpecs.CreateEditLeadWorkStreetNameSpec,
        formColumnSpecs.CreateEditLeadWorkSubdivisionSpec
      ]
    },
    {
      columns: [
        formColumnSpecs.CreateEditLeadWorkCountrySpec,
        formColumnSpecs.CreateEditLeadWorkProvinceSpec
      ]
    },
    {
      columns: [
        formColumnSpecs.CreateEditLeadWorkCitySpec,
        formColumnSpecs.CreateEditLeadWorkZipCodeSpec
      ]
    },
    // {
    //   columns: [
    //     buttonColumnSpecs.CreateEditLeadNextButtonSpecs
    //   ]
    // },
  ]
};

export const ReferrorFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        formColumnSpecs.ReferrorFirstNameSpec,
        formColumnSpecs.ReferrorMiddleNameSpec,
        formColumnSpecs.ReferrorLastNameSpec
      ]
    },
    {
      columns: [
        formColumnSpecs.ReferrorBranchNameSpec,
        formColumnSpecs.ReferrorBranchCodeSpec,
        formColumnSpecs.ReferrorReferrorCodeSpec
      ]
    },
    {
      columns: [
        {
          size: 3,
          text: '*Max of 1 Referror Only'
        },
      ]
    },
  ]
};