import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import {
  ApplicantOwnerSection, IsAoSameAsPiSection,
  PresentAddressSection, WorkAddressSection,
  ProposedInsuredInfoSection,
  ClassificationSection,
  LifeIsAoSameAsPiSection,
  LifeClassificationSection
} from '@form/column-specs/shared/template/template-specs';
import * as siFormSpecs from '@form/column-specs/sales-illustration/sales-illustration-column-specs';
import * as siButtonSpecs from '@form/column-specs/sales-illustration/si-button-specs';
export const AOCreateSalesIllustrationFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        ApplicantOwnerSection
      ]
    },
    {
      columns: [
        IsAoSameAsPiSection,
        siFormSpecs.IsAoSameAsPiSpec
      ]
    },
    {
      columns: [
        siFormSpecs.FirstNameSpec,
        siFormSpecs.MiddleNameSpec,
        siFormSpecs.LastNameSpec,
      ]
    },
    {
      columns: [
        siFormSpecs.DateOfBirthSpec,
        siFormSpecs.AgeSpec,
        siFormSpecs.GenderSpec
      ]
    },
    {
      columns: [
        siFormSpecs.ClassOccupationSpec,
        siFormSpecs.OccupationGroupingSpec,
        siFormSpecs.OccupationTitleSpec
      ]
    },
    {
      columns: [
        siFormSpecs.VesselSpec
      ]
    },
    {
      columns: [
        PresentAddressSection
      ]
    },
    {
      columns: [
        siFormSpecs.UnitBldgSpec,
        siFormSpecs.LotBlkSpec
      ]
    },
    {
      columns: [
        siFormSpecs.StreetNameSpec,
        siFormSpecs.HomeSubdivisionSpec,
      ]
    },
    {
      columns: [
        siFormSpecs.HomeCountrySpec,
        siFormSpecs.HomeProvinceSpec
      ]
    },
    {
      columns: [
        siFormSpecs.HomeCitySpec,
        siFormSpecs.HomeZipCodeSpec
      ]
    },
    {
      columns: [
        WorkAddressSection
      ]
    },
    {
      columns: [
        siFormSpecs.WorkUnitBldgSpec,
        siFormSpecs.WorkLotBldgSpec
      ]
    },
    {
      columns: [
        siFormSpecs.WorkStreetNameSpec,
        siFormSpecs.WorkSubdivisionSpec
      ]
    },
    {
      columns: [
        siFormSpecs.WorkCountrySpec,
        siFormSpecs.WorkProvinceSpec
      ]
    },
    {
      columns: [
        siFormSpecs.WorkCitySpec,
        siFormSpecs.WorkZipCodeSpec
      ]
    }
  ]
};

export const PICreateSalesIllustrationFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        ProposedInsuredInfoSection
      ]
    },
    {
      columns: [
        siFormSpecs.PIFirstNameSpec,
        siFormSpecs.PIMiddleNameSpec,
        siFormSpecs.PILastNameSpec,
      ]
    },
    {
      columns: [
        siFormSpecs.PIDateOfBirthSpec,
        siFormSpecs.PIAgeSpec,
        siFormSpecs.PIGenderSpec
      ]
    },
    {
      columns: [
        siFormSpecs.PIClassOccupationSpec,
        siFormSpecs.PIOccupationGroupingSpec,
        siFormSpecs.PIOccupationTitleSpec
      ]
    },
    {
      columns: [
        siFormSpecs.PIVesselSpec
      ]
    },
    {
      columns: [
        PresentAddressSection
      ]
    },
    {
      columns: [
        siFormSpecs.PISameAsAoAddressCheckBoxSpec
      ]
    },
    {
      columns: [
        siFormSpecs.PIUnitBldgSpec,
        siFormSpecs.PILotBlkSpec
      ]
    },
    {
      columns: [
        siFormSpecs.PIStreetNameSpec,
        siFormSpecs.PIHomeSubdivisionSpec,
      ]
    },
    {
      columns: [
        siFormSpecs.PIHomeCountrySpec,
        siFormSpecs.PIHomeProvinceSpec
      ]
    },
    {
      columns: [
        siFormSpecs.PIHomeCitySpec,
        siFormSpecs.PIHomeZipCodeSpec
      ]
    },
    {
      columns: [
        WorkAddressSection
      ]
    },
    {
      columns: [
        siFormSpecs.PIWorkUnitBldgSpec,
        siFormSpecs.PIWorkLotBldgSpec
      ]
    },
    {
      columns: [
        siFormSpecs.PIWorkStreetNameSpec,
        siFormSpecs.PIWorkSubdivisionSpec
      ]
    },
    {
      columns: [
        siFormSpecs.PIWorkCountrySpec,
        siFormSpecs.PIWorkProvinceSpec
      ]
    },
    {
      columns: [
        siFormSpecs.PIWorkCitySpec,
        siFormSpecs.PIWorkZipCodeSpec
      ]
    }
  ]
};

export const LifeAOCreateSalesIllustrationFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        LifeIsAoSameAsPiSection,
        siFormSpecs.LifeIsAoSameAsPiSpec,
        LifeClassificationSection,
        siFormSpecs.LifeClassificationSpec
      ]
    },
    {
      columns: [
        ApplicantOwnerSection
      ]
    },
    {
      columns: [
        siFormSpecs.LifeFirstNameSpec,
        siFormSpecs.LifeMiddleNameSpec,
        siFormSpecs.LifeLastNameSpec,
        siFormSpecs.SuffixSpec
      ]
    },
    {
      columns: [
        siFormSpecs.LifeDateOfBirthSpec,
        siFormSpecs.LifeAgeSpec,
        siFormSpecs.LifeNoMiddleNameSpec,
        siFormSpecs.LifeGenderSpec
      ]
    },
    {
      columns: [
        siFormSpecs.LifeClassOccupationSpec,
        siFormSpecs.LifeOccupationGroupingSpec,
        siFormSpecs.LifeOccupationTitleSpec
      ]
    },
    {
      columns: [
        siFormSpecs.LifeVesselSpec,
        siFormSpecs.LTGTagSpec
      ]
    },
    {
      columns: [
        PresentAddressSection
      ]
    },
    {
      columns: [
        siFormSpecs.LifeUnitBldgSpec,
        siFormSpecs.LifeLotBlkSpec
      ]
    },
    {
      columns: [
        siFormSpecs.LifeStreetNameSpec,
        siFormSpecs.LifeHomeSubdivisionSpec,
      ]
    },
    {
      columns: [
        siFormSpecs.LifeHomeCountrySpec,
        siFormSpecs.LifeHomeProvinceSpec,
        siFormSpecs.LifeHomeCitySpec,
        siFormSpecs.LifeHomeZipCodeSpec,
        siFormSpecs.LifeDurationOfStayInputSpec,
        siFormSpecs.LifeDurationOfStaySelectSpec,
      ]
    },  
    {
      columns: [
        WorkAddressSection
      ]
    },
    {
      columns: [
        siFormSpecs.LifeWorkUnitBldgSpec,
        siFormSpecs.LifeWorkLotBldgSpec
      ]
    },
    {
      columns: [
        siFormSpecs.LifeWorkStreetNameSpec,
        siFormSpecs.LifeWorkSubdivisionSpec
      ]
    },
    {
      columns: [
        siFormSpecs.LifeWorkCountrySpec,
        siFormSpecs.LifeWorkProvinceSpec,
        siFormSpecs.LifeWorkCitySpec,
        siFormSpecs.LifeWorkZipCodeSpec
      ]
    }
  ]
};

export const LifePICreateSalesIllustrationFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        ProposedInsuredInfoSection
      ]
    },
    {
      columns: [
        siFormSpecs.LifePIFirstNameSpec,
        siFormSpecs.LifePIMiddleNameSpec,
        siFormSpecs.LifePILastNameSpec,
        siFormSpecs.LifePISuffixSpec
      ]
    },
    {
      columns: [
        siFormSpecs.LifePIDateOfBirthSpec,
        siFormSpecs.LifePIAgeSpec,
        siFormSpecs.LifePINoMiddleNameSpec,
        siFormSpecs.LifePIGenderSpec
      ]
    },
    {
      columns: [
        siFormSpecs.LifePIClassOccupationSpec,
        siFormSpecs.LifePIOccupationGroupingSpec,
        siFormSpecs.LifePIOccupationTitleSpec
      ]
    },
    {
      columns: [
        siFormSpecs.LifePIVesselSpec
      ]
    },
    {
      columns: [
        PresentAddressSection
      ]
    },
    {
      columns: [
        siFormSpecs.LifePISameAsAoAddressCheckBoxSpec
      ]
    },
    {
      columns: [
        siFormSpecs.LifePIUnitBldgSpec,
        siFormSpecs.LifePILotBlkSpec
      ]
    },
    {
      columns: [
        siFormSpecs.LifePIStreetNameSpec,
        siFormSpecs.LifePIHomeSubdivisionSpec,
      ]
    },
    {
      columns: [
        siFormSpecs.LifePIHomeCountrySpec,
        siFormSpecs.LifePIHomeProvinceSpec,
        siFormSpecs.LifePIHomeCitySpec,
        siFormSpecs.LifePIHomeZipCodeSpec
      ]
    },
    {
      columns: [
        siFormSpecs.LifePIDurationOfStayInputSpec,
        siFormSpecs.LifePIDurationOfStaySelectSpec,
      ]
    }, 
    {
      columns: [
        WorkAddressSection
      ]
    },
    {
      columns: [
        siFormSpecs.LifePIWorkUnitBldgSpec,
        siFormSpecs.LifePIWorkLotBldgSpec
      ]
    },
    {
      columns: [
        siFormSpecs.LifePIWorkStreetNameSpec,
        siFormSpecs.LifePIWorkSubdivisionSpec
      ]
    },
    {
      columns: [
        siFormSpecs.LifePIWorkCountrySpec,
        siFormSpecs.LifePIWorkProvinceSpec,
        siFormSpecs.LifePIWorkCitySpec,
        siFormSpecs.LifePIWorkZipCodeSpec
      ]
    }
  ]
};

export const CreateSIButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siButtonSpecs.PreviousSIButtonColumnSpecs,
        siButtonSpecs.CreateSIAOButtonColumnSpecs,
        siButtonSpecs.CreateSIPIButtonColumnSpecs
      ]
    }
  ]
};

export const LifeCreateSIButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        siButtonSpecs.LifePreviousSIButtonColumnSpecs,
        siButtonSpecs.LifeCreateSIAOButtonColumnSpecs,
        siButtonSpecs.LifeCreateSIPIButtonColumnSpecs,
        siButtonSpecs.AddDependentsButtonColumnSpecs,
        siButtonSpecs.RemoveDependentsButtonColumnSpecs
      ]
    }
  ]
};
