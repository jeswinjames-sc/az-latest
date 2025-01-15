// Define version keys from 2 to 26
type VersionNumber = 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26;
type VersionKey = `V${VersionNumber}`;

export const MIGRATION_SCRIPTS: Record<VersionKey, string> = 
{
	V2: `
		ALTER TABLE Submission_ACR ADD COLUMN bankCert TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN bankPaySlip TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN passbook TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN incomeTax TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN deedOfSale TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN sourceOfWealthOthers TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN netHouse TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN netBusiness TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN netRealEstate TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN assetsOthers TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN salary TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN business TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN gifts TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN legalClaims TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN investmentIncome TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN sourceOfFundOthers TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN banking TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN manufacturing TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN informationTech TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN natureBusinessOthers TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN security TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN protection TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN health TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN education TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN retirement TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN estatePlanning TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN reasonOthers TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN courtDecision TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN courtResolution TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN courtAffidavit TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN clientCaseOthers TEXT;
		ALTER TABLE EAPP_Person ADD COLUMN isPoliticallySensitive TEXT;
		ALTER TABLE SI_MAIN ADD COLUMN baseRatingCode TEXT;`,
	V3: `
		ALTER TABLE Submission_EPayment ADD COLUMN checkoutId TEXT;
		ALTER TABLE Submission_Checklist ADD COLUMN CHrelationToAO TEXT;
		ALTER TABLE EAPP_Signatures ADD COLUMN isAttestation TEXT;
		ALTER TABLE EAPP_Signatures ADD COLUMN attestationBase64 TEXT;
		UPDATE EAPP_Signatures SET isAttestation = 'N';`,
	V4: `
		ALTER TABLE Submission_ACR ADD COLUMN sourceOfWealthOthersYes TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN assetsOthersYes TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN sourceOfFundOthersYes TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN natureBusinessOthersYes TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN reasonOthersYes TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN confirmDobOthersYes TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN verifyAddressOthersYes TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN clientCaseOthersYes TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN pepClientName TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN pepClientRole TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN pepName TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN pepPosition TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN pepRelationship TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN netHouseInput TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN netBusinessInput TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN netRealEstateInput TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN confirmDobOthers TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN verifyAddressOthers TEXT;
		`,
	V5: `
		ALTER TABLE Submission_Checklist ADD COLUMN CHDOB TEXT;
		ALTER TABLE Submission_Checklist ADD COLUMN CHGender TEXT;
		ALTER TABLE Submission_Checklist ADD COLUMN CHNationality TEXT;
		ALTER TABLE Submission_Checklist ADD COLUMN pobCountry TEXT;
		ALTER TABLE Submission_Checklist ADD COLUMN pobProvince TEXT;
		ALTER TABLE Submission_Checklist ADD COLUMN pobCity TEXT;

		CREATE TABLE Addresses (
			addressId TEXT PRIMARY KEY,
			buildingName TEXT,
			blockNumber TEXT,
			street TEXT,
			subdivision TEXT,
			countryCode TEXT,
			provinceCode TEXT,
			cityCode TEXT,
			zipCode TEXT
		);

		CREATE TABLE Names (
				nameId TEXT PRIMARY KEY,
				firstName TEXT,
				middleName TEXT,
				lastName TEXT
		);

		CREATE TABLE Beneficiary_Owners(
				beneficiaryOwnerId TEXT PRIMARY KEY,
				nameId TEXT,
				ownershipPercent INT,
				gender TEXT,
				nationality TEXT,
				pobAddressId TEXT,
				presentAddressId TEXT
		);
		`,
	V6: `
		ALTER TABLE EAPP_Signatures ADD COLUMN videoScreenshotBase64 TEXT;
		ALTER TABLE EAPP_Signatures ADD COLUMN emailAcknowledgementBase64 TEXT;
		ALTER TABLE Beneficiary_Owners ADD COLUMN eappId TEXT;
	`,
	V7: `
		ALTER TABLE EAPP_Main ADD COLUMN isAOEqualBO TEXT;
		ALTER TABLE EAPP_Person ADD COLUMN prominentPublicPosition TEXT;
		ALTER TABLE EAPP_Beneficiaries ADD COLUMN pobCountry TEXT;
		ALTER TABLE EAPP_Beneficiaries ADD COLUMN pobProvince TEXT;
		ALTER TABLE EAPP_Beneficiaries ADD COLUMN pobCity TEXT;
		ALTER TABLE EAPP_Beneficiaries ADD COLUMN mobileNumber TEXT;
		ALTER TABLE EAPP_Beneficiaries ADD COLUMN emailAddress TEXT;
		ALTER TABLE EAPP_Beneficiaries ADD COLUMN gender TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN firstName TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN middleName TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN lastName TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN pobCountryCode TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN pobProvinceCode TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN pobCityCode TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN presentBuildingName TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN presentBlockNumber TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN presentStreet TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN presentSubdivision TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN presentCountryCode TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN presentProvinceCode TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN presentCityCode TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN presentZipCode TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN workBuildingName TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN workBlockNumber TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN workStreet TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN workSubdivision TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN workCountryCode TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN workProvinceCode TEXT;
        ALTER TABLE Beneficiary_Owners ADD COLUMN workCityCode TEXT;
		ALTER TABLE Beneficiary_Owners ADD COLUMN workZipCode TEXT;

		ALTER TABLE EAPP_NonMed_Main ADD COLUMN cardiovascularDisFamilyCount TEXT;
        ALTER TABLE EAPP_NonMed_Main ADD COLUMN cerebrovascularDisFamilyCount TEXT;
        ALTER TABLE EAPP_NonMed_Main ADD COLUMN diabetesFamilyCount TEXT;
        ALTER TABLE EAPP_NonMed_Main ADD COLUMN alzheimersFamilyCount TEXT;
        ALTER TABLE EAPP_NonMed_Main ADD COLUMN kidneyDisFamilyCount TEXT;
        ALTER TABLE EAPP_NonMed_Main ADD COLUMN cancerFamilyCount TEXT;
		ALTER TABLE EAPP_NonMed_Main ADD COLUMN cancerTypeCount TEXT;

		CREATE TABLE EAPP_Payout_Banks(
			bankId TEXT PRIMARY KEY,
			eappId TEXT,
			bankAccountName TEXT
		);
	`,
	V8: `
		ALTER TABLE EAPP_Signatures ADD COLUMN disableEDD BOOLEAN;
		ALTER TABLE EAPP_Signatures ADD COLUMN referrorId TEXT;
		ALTER TABLE EAPP_Signatures ADD COLUMN intmPolicyIntendedToChange TEXT;
		ALTER TABLE EAPP_Signatures ADD COLUMN intmPremiumsPaidByLoan TEXT;
	`
	,
	V9: `
		ALTER TABLE Beneficiary_Owners ADD COLUMN occupationCode TEXT;
		ALTER TABLE Beneficiary_Owners ADD COLUMN occupationGrpCode TEXT;
		ALTER TABLE Beneficiary_Owners ADD COLUMN annualIncome TEXT;
		ALTER TABLE Beneficiary_Owners ADD COLUMN employer TEXT;
		ALTER TABLE Beneficiary_Owners ADD COLUMN contactNumber TEXT;
		ALTER TABLE Beneficiary_Owners ADD COLUMN email TEXT;
		ALTER TABLE Beneficiary_Owners ADD COLUMN dateOfBirth TEXT;
		ALTER TABLE Leads ADD COLUMN referredByBankPartner BOOLEAN;
	`,
	V10: `
		ALTER TABLE SI_MAIN ADD COLUMN planVariant TEXT;
		ALTER TABLE SI_MAIN ADD COLUMN bmiHeightInCm INT;
		ALTER TABLE SI_MAIN ADD COLUMN bmiWeightInKg INT;
		ALTER TABLE SI_MAIN ADD COLUMN bmiTotal INT;
		ALTER TABLE SI_MAIN ADD COLUMN premiumTotal INT;
	`,
	V11: `
		ALTER TABLE SI_MAIN ADD COLUMN premiumPayment TEXT;
	`,
	V12: `
		ALTER TABLE Beneficiary_Owners ADD COLUMN vesselType TEXT;
	`,
	V13: `
		UPDATE EAPP_Signatures
		   SET signatureBase64 = 'data:image/png;base64,' || signatureBase64
		 WHERE signatureBase64 IS NOT NULL
		   AND TRIM(signatureBase64) != '' 
		   AND signatureBase64 NOT LIKE '%data:%';

		UPDATE EAPP_Signatures
		   SET attestationBase64 = 'data:image/png;base64,' || attestationBase64
		 WHERE attestationBase64 IS NOT NULL
		   AND TRIM(attestationBase64) != ''
		   AND attestationBase64 NOT LIKE '%data:%';

		UPDATE EAPP_Signatures
		   SET videoScreenshotBase64 = 'data:image/png;base64,' || videoScreenshotBase64
		 WHERE videoScreenshotBase64 IS NOT NULL
		   AND TRIM(videoScreenshotBase64) != ''
		   AND videoScreenshotBase64 NOT LIKE '%data:%';

		UPDATE EAPP_Signatures
		   SET emailAcknowledgementBase64 = 'data:image/png;base64,' || emailAcknowledgementBase64
		 WHERE emailAcknowledgementBase64 IS NOT NULL
		   AND TRIM(emailAcknowledgementBase64) != '' 
		   AND emailAcknowledgementBase64 NOT LIKE '%data:%';
		
		UPDATE Submission_Attachments
		   SET attachmentBase64 = 'data:image/png;base64,' || attachmentBase64
		 WHERE attachmentBase64 IS NOT NULL
		   AND TRIM(attachmentBase64) != '' 
		   AND attachmentBase64 NOT LIKE '%data:%';
	`,
	V14: `
		ALTER TABLE Submission_ACR ADD COLUMN pawnshop TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN casinoOccupation TEXT;
		ALTER TABLE Submission_ACR ADD COLUMN governmentService TEXT;

		ALTER TABLE EAPP_Payout_Banks
		RENAME bankAccountName TO coDepositorName;
	`,
	V15: `
		ALTER TABLE EAPP_Main ADD COLUMN purpose TEXT;
		ALTER TABLE EAPP_Main ADD COLUMN otherPurpose TEXT;
	`,
	V16: `
		ALTER TABLE EAPP_Main ADD COLUMN generatedOnline BOOLEAN;
	`,
	V17: `
		ALTER TABLE SI_PERSONS ADD COLUMN occupationTitle TEXT;
		ALTER TABLE Beneficiary_Owners ADD COLUMN occupationTitle TEXT;
		ALTER TABLE EAPP_Person ADD COLUMN occupationTitle TEXT;
	`,
	V18: `
		ALTER TABLE EAPP_Main ADD COLUMN attachedDate TEXT;
	`,
	V19: `
	ALTER TABLE Submission_Attachments ADD COLUMN displayFileName TEXT;
	ALTER TABLE SI_PERSONS ADD COLUMN classification TEXT;
	ALTER TABLE SI_PERSONS ADD COLUMN ltgTag TEXT;
	ALTER TABLE SI_PERSONS ADD COLUMN durationOfStay TEXT;
	ALTER TABLE SI_MAIN ADD COLUMN areaOfCover TEXT;
	ALTER TABLE SI_MAIN ADD COLUMN deductible TEXT;
	ALTER TABLE SI_MAIN ADD COLUMN referringPartner TEXT;	
	ALTER TABLE SI_MAIN ADD COLUMN policyDate TEXT;	
	ALTER TABLE SI_MAIN ADD COLUMN annualPlanLimit TEXT;	
	ALTER TABLE SI_MAIN ADD COLUMN benefits TEXT;	
	ALTER TABLE SI_MAIN ADD COLUMN wellnessLimit TEXT;
	CREATE TABLE Dependents_Table(
        dependentsPrimaryId TEXT PRIMARY KEY,
        siId TEXT,
		dependentSelf TEXT,
        gender TEXT,
        presentAddressId TEXT,
        firstName TEXT,
        middleName TEXT,
        lastName TEXT,
		suffix TEXT,
        homeBuildingName TEXT,
        homeBlockNumber TEXT,
        homeStreet TEXT,
        homeSubdivision TEXT,
        homeCountryCode TEXT,
        homeProvinceCode TEXT,
        homeCityCode TEXT,
        homeZipCode TEXT,
        workBuildingName TEXT,
        workBlockNumber TEXT,
        workStreet TEXT,
        workSubdivision TEXT,
        workCountryCode TEXT,
        workProvinceCode TEXT,
        workCityCode TEXT,
        workZipCode TEXT,
        occupationCode TEXT,
        occupationGrpCode TEXT,
        occupationTitle TEXT,
        vesselType TEXT,
        dateOfBirth TEXT,
		relationToPI TEXT,
		civilStatus TEXT,
		countryOfResidence TEXT,
        durationOfStay TEXT
	);
	`,
	V20: `
		ALTER TABLE SI_MAIN ADD COLUMN premiumPayment TEXT;
		ALTER TABLE SI_MAIN ADD COLUMN totalPremium INTEGER;
	`,
	V21: `
		ALTER TABLE EAPP_Person ADD COLUMN validIdNumber TEXT;
		ALTER TABLE EAPP_ReplacementNotification ADD COLUMN afcInsured TEXT;
	`,
	V22: `
		ALTER TABLE Referrors ADD COLUMN closingBranch TEXT;
		ALTER TABLE Submission_Checklist ADD COLUMN agentsReport TEXT;
	`,
	V23: `
	ALTER TABLE EAPP_Beneficiaries ADD COLUMN isEstateBeneficiary TEXT;
	ALTER TABLE EAPP_Beneficiaries ADD COLUMN estatePriority TEXT;
	ALTER TABLE EAPP_Beneficiaries ADD COLUMN estateSharePercentage INT;
	`,
	V24: ``,
	V25: `
	ALTER TABLE EAPP_Main ADD COLUMN signatureLogs TEXT;
	ALTER TABLE EAPP_Main ADD COLUMN signatureEditTag BOOLEAN;
	`,
	V26: `
	ALTER TABLE FNA_Main ADD COLUMN leadServerId TEXT`
};
