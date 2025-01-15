import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import {
  TitleSpecs, HealthFactorTextSpecs, HealthFactorSegmentSpec,
  HealthFactorInputSpecs, InsurancePurposeTextSpecs, InsurancePurposeRadioSpecs, InsurancePurposeInput,
  HouseHoldTextSpecs, HouseHoldIncomeTextSpecs, HouseHoldAOIncomeTextSpecs, HouseHoldAOIncomeSpecs,
  HouseHoldPIIncomeTextSpecs, HouseHoldPIIncomeSpecs, HasPISpecs,
  MilitaryMemberTextSpecs, MilitaryMemberSegmentSpecs, MilitaryMemberInputSpecs,
  BeenActiveTextSpecs, BeenActiveSegmentSpec, BeenActiveInputSpecs, AOBeneTextSpecs,
  PEPTextSpecs, PEPSegmentSpecs, RemitAgentTextSpecs, RemitAgentSegmentSpecs, NGOTextSpecs, NGOSegmentSpecs,
  CasinoTextSpecs, CasinoSegmentSpecs, BrokerTextSpecs, BrokerSegmentSpecs,
  JewelDealerTextSpecs, JewelDealerSegmentSpecs, GunDealerTextSpecs, GunDealerSegmentSpecs,
  SourceOfWealthTextSpecs,
  BankCertTextSpecs, BankCertSegmentSpecs,
  BankPaySlipTextSpecs, BankPaySlipSegmentSpecs,
  PassbookTextSpecs, PassbookSegmentSpecs,
  IncomeTaxTextSpecs, IncomeTaxSegmentSpecs,
  DeedOfSaleTextSpecs, DeedOfSaleSegmentSpecs,
  SourceOfWealthOthersTextSpecs, SourceOfWealthOthersInputSpecs,
  ReasonTransactionTextSpecs,
  SecurityTextSpecs, SecuritySegmentSpecs,
  ProtectionTextSpecs, ProtectionSegmentSpecs,
  HealthTextSpecs, HealthSegmentSpecs,
  EducationSegmentSpecs, EducationTextSpecs,
  RetirementTextSpecs, RetirementSegmentSpecs,
  EstatePlanningTextSpecs, EstatePlanningSegmentSpecs,
  ReasonOthersTextSpecs, ReasonOthersInputSpecs,
  OtherAssetsTextSpecs,
  NetHouseTextSpecs, NetHouseSegmentSpecs, NetHouseInputSpecs,
  NetBusinessTextSpecs, NetBusinessSegmentSpecs, NetBusinessInputSpecs,
  NetRealEstateTextSpecs, NetRealEstateSegmentSpecs, NetRealEstateInputSpecs,
  AssetsOthersTextSpecs, AssetsOthersInputSpecs,
  SourceOfFundTextSpecs,
  SalaryTextSpecs, SalarySegmentSpecs,
  BusinessTextSpecs, BusinessSegmentSpecs,
  GiftsTextSpecs, GiftsSegmentSpecs,
  LegalClaimsTextSpecs, LegalClaimsSegmentSpecs,
  InvestmentIncomeTextSpecs, InvestmentIncomeSegmentSpecs,
  SourceOfFundOthersTextSpecs, SourceOfFundOthersInputSpecs,
  NatureBusinessTextSpecs,
  BankingTextSpecs, BankingSegmentSpecs,
  ManufacturingTextSpecs, ManufacturingSegmentSpecs,
  InformationTechTextSpecs, InformationTechSegmentSpecs,
  PawnshopTextSpecs, PawnshopSegmentSpecs, 
  CasinoOccupationTextSpecs, CasinoOccupationSegmentSpecs,
  GovernmentServiceTextSpecs, GovernmentServiceSegmentSpecs,
  NatureBusinessOthersTextSpecs, NatureBusinessOthersInputSpecs,
  ConfirmDoBTextSpecs,
  PassportTextSpecs, PassportSegmentSpecs,
  NSOTextSpecs, NSOSegmentSpecs,
  MarriageTextSpecs, MarriageSegmentSpecs,
  VerifyAddressTextSpecs,
  BillsTextSpecs, BillsSegmentSpecs,
  CreditCardTextSpecs, CreditCardSegmentSpecs,
  OnsiteTextSpecs, OnsiteSegmentSpecs,
  ClientCaseTextSpecs,
  CourtDecisionTextSpecs, CourtDecisionSegmentSpecs,
  CourtResolutionTextSpecs, CourtResolutionSegmentSpecs,
  CourtAffidavitTextSpecs, CourtAffidavitSegmentSpecs,
  ClientCaseOthersTextSpecs, ClientCaseOthersInputSpecs,
  AttachSignatureSpecs, SubmitButtonSpecs,
  ResetButtonSpecs, PEPClientNameTextSpecs, PEPClientNameInputSpecs,
  PEPClientRoleTextSpecs, PEPClientRoleInputSpecs, PEPAdditionalInfoTextSpecs,
  PEPNameTextSpecs, PEPNameInputSpecs, PEPPositionTextSpecs, PEPPositionInputSpecs, PEPRelationshipTextSpecs,
  PEPRelationshipInputSpecs, ClientAdditionalInfoTextSpecs, SourceOfWealthOthersSegmentSpecs,
  AssetsOthersSegmentSpecs, SourceOfFundOthersSegmentSpecs, NatureBusinessOthersSegmentSpecs,
  ReasonOthersSegmentSpecs, ClientCaseOthersSegmentSpecs, ConfirmDoBOthersInputSpecs,
  ConfirmDoBOthersTextSpecs,
  ConfirmDoBOthersSegmentSpecs, VerifyAddressOthersTextSpecs,
  VerifyAddressOthersSegmentSpecs, VerifyAddressOthersInputSpecs
} from '@utils/constants/form/column-specs/submission-checklist/submission-checklist-view/submission-acr/submission-acr-column-specs';

export const SubmissionACRFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      class: 'form-group-title ion-padding-bottom',
      columns: [
        TitleSpecs
      ]
    },
    {
      columns: [
        ClientAdditionalInfoTextSpecs
      ]
    },
    {
      columns: [
        PEPClientNameTextSpecs,
        PEPClientNameInputSpecs,
        PEPClientRoleTextSpecs,
        PEPClientRoleInputSpecs
      ]
    },
    {
      columns: [
        PEPAdditionalInfoTextSpecs
      ]
    },
    {
      columns: [
        PEPNameTextSpecs,
        PEPNameInputSpecs,
        PEPPositionTextSpecs,
        PEPPositionInputSpecs,
        PEPRelationshipTextSpecs,
        PEPRelationshipInputSpecs
      ]
    },
    {
      columns: [
        SourceOfWealthTextSpecs,
        BankCertTextSpecs, BankCertSegmentSpecs,
        BankPaySlipTextSpecs, BankPaySlipSegmentSpecs,
        PassbookTextSpecs, PassbookSegmentSpecs,
        IncomeTaxTextSpecs, IncomeTaxSegmentSpecs,
        DeedOfSaleTextSpecs, DeedOfSaleSegmentSpecs,
        SourceOfWealthOthersTextSpecs,
        SourceOfWealthOthersSegmentSpecs,
        SourceOfWealthOthersInputSpecs
      ]
    },
    {
      columns: [
        OtherAssetsTextSpecs,
        NetHouseTextSpecs, NetHouseSegmentSpecs, NetHouseInputSpecs,
        NetBusinessTextSpecs, NetBusinessSegmentSpecs, NetBusinessInputSpecs,
        NetRealEstateTextSpecs, NetRealEstateSegmentSpecs, NetRealEstateInputSpecs,
        AssetsOthersTextSpecs, AssetsOthersSegmentSpecs, AssetsOthersInputSpecs
      ]
    },
    {
      columns: [
        SourceOfFundTextSpecs,
        SalaryTextSpecs, SalarySegmentSpecs,
        BusinessTextSpecs, BusinessSegmentSpecs,
        GiftsTextSpecs, GiftsSegmentSpecs,
        LegalClaimsTextSpecs, LegalClaimsSegmentSpecs,
        InvestmentIncomeTextSpecs, InvestmentIncomeSegmentSpecs,
        SourceOfFundOthersTextSpecs, SourceOfFundOthersSegmentSpecs, SourceOfFundOthersInputSpecs
      ]
    },
    {
      columns: [
        NatureBusinessTextSpecs,
        BankingTextSpecs, BankingSegmentSpecs,
        ManufacturingTextSpecs, ManufacturingSegmentSpecs,
        InformationTechTextSpecs, InformationTechSegmentSpecs,
        PawnshopTextSpecs, PawnshopSegmentSpecs, 
        CasinoOccupationTextSpecs, CasinoOccupationSegmentSpecs,
        GovernmentServiceTextSpecs, GovernmentServiceSegmentSpecs,
        NatureBusinessOthersTextSpecs,
        NatureBusinessOthersSegmentSpecs,
        NatureBusinessOthersInputSpecs,
      ]
    },
    {
      columns: [
        ReasonTransactionTextSpecs,
        SecurityTextSpecs, SecuritySegmentSpecs,
        ProtectionTextSpecs, ProtectionSegmentSpecs,
        HealthTextSpecs, HealthSegmentSpecs,
        EducationTextSpecs, EducationSegmentSpecs,
        RetirementTextSpecs, RetirementSegmentSpecs,
        EstatePlanningTextSpecs, EstatePlanningSegmentSpecs,
        ReasonOthersTextSpecs, ReasonOthersSegmentSpecs, ReasonOthersInputSpecs,
      ]
    },
    {
      columns: [
        ConfirmDoBTextSpecs,
        PassportTextSpecs,
        PassportSegmentSpecs,
        NSOTextSpecs,
        NSOSegmentSpecs,
        MarriageTextSpecs,
        MarriageSegmentSpecs,
        ConfirmDoBOthersTextSpecs,
        ConfirmDoBOthersSegmentSpecs,
        ConfirmDoBOthersInputSpecs
      ]
    },
    {
      columns: [
        VerifyAddressTextSpecs,
        BillsTextSpecs,
        BillsSegmentSpecs,
        CreditCardTextSpecs,
        CreditCardSegmentSpecs,
        OnsiteTextSpecs,
        OnsiteSegmentSpecs,
        VerifyAddressOthersTextSpecs,
        VerifyAddressOthersSegmentSpecs,
        VerifyAddressOthersInputSpecs
      ]
    },
    {
      class: 'ion-padding-bottom',
      columns: [
        ClientCaseTextSpecs,
        CourtDecisionTextSpecs, CourtDecisionSegmentSpecs,
        CourtResolutionTextSpecs, CourtResolutionSegmentSpecs,
        CourtAffidavitTextSpecs, CourtAffidavitSegmentSpecs,
        ClientCaseOthersTextSpecs,
        ClientCaseOthersSegmentSpecs,
        ClientCaseOthersInputSpecs
      ]
    },
    {
      columns: [
        AttachSignatureSpecs
      ]
    }
  ]
};

export const SubmissionACRButtonFormSpecs: FormGeneratorSpecs = {
  rows: [
    {
      columns: [
        ResetButtonSpecs,
        SubmitButtonSpecs
      ]
    }
  ]
};
