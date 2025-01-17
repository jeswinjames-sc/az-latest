import { STATUS } from '../status/status'

export const EAPP_QUERIES = {

    insertMain: [
        { fieldName: 'isDeleted', value: 0 },
        { fieldName: 'eappStatus', value: STATUS.IN_PROGRESS }
    ],

    updateAO: [
        { fieldName: 'contactNumber', formGroupControlName: 'contactNumber' },
        { fieldName: 'email', formGroupControlName: 'email' },
        { fieldName: 'relationshipToPI', formGroupControlName: 'relationshipToPI' },
        { fieldName: 'otherFirstName', formGroupControlName: 'otherFirstName' },
        { fieldName: 'otherMiddleName', formGroupControlName: 'otherMiddleName' },
        { fieldName: 'otherLastName', formGroupControlName: 'otherLastName' },
        { fieldName: 'motherFirstName', formGroupControlName: 'motherFirstName' },
        { fieldName: 'motherMiddleName', formGroupControlName: 'motherMiddleName' },
        { fieldName: 'motherLastName', formGroupControlName: 'motherLastName' },
        { fieldName: 'civilStatus', formGroupControlName: 'civilStatus' },
        { fieldName: 'pobCountry', formGroupControlName: 'pobCountry' },
        { fieldName: 'pobProvince', formGroupControlName: 'pobProvince' },
        { fieldName: 'pobCity', formGroupControlName: 'pobCity' },
        { fieldName: 'nationality', formGroupControlName: 'nationality' },
        { fieldName: 'isUSPerson', formGroupControlName: 'isUSPerson' },
        { fieldName: 'identificationType', formGroupControlName: 'identificationType' },
        { fieldName: 'identificationNumber', formGroupControlName: 'identificationNumber' },
        { fieldName: 'annualIncome', formGroupControlName: 'annualIncome' },
        { fieldName: 'employer', formGroupControlName: 'employer' },
        { fieldName: 'natureOfBusiness', formGroupControlName: 'natureOfBusiness' },
        { fieldName: 'sourceOfFunds', formGroupControlName: 'sourceOfFunds' },
        { fieldName: 'otherSourceOfFunds', formGroupControlName: 'otherSourceOfFunds' },
        { fieldName: 'preferredMailingAddress', formGroupControlName: 'preferredMailingAddress' },
        { fieldName: 'validIdNumber', formGroupControlName: 'validIdNumber' },
        { fieldName: 'coFirstName', formGroupControlName: 'coFirstName' },
        { fieldName: 'coMiddleName', formGroupControlName: 'coMiddleName' },
        { fieldName: 'coLastName', formGroupControlName: 'coLastName' },
        { fieldName: 'coDateOfBirth', formGroupControlName: 'coDateOfBirth' },
        { fieldName: 'coRelationship', formGroupControlName: 'coRelationship' },
        { fieldName: 'vesselOwner', formGroupControlName: 'vesselOwner' },
        { fieldName: 'vesselType', formGroupControlName: 'vesselType' },
        { fieldName: 'vesselCountry', formGroupControlName: 'vesselCountry' },
        { fieldName: 'airlineJob', formGroupControlName: 'airlineJob' },
        { fieldName: 'aircraftType', formGroupControlName: 'aircraftType' },
        { fieldName: 'numberOfFlightExpirience', formGroupControlName: 'numberOfFlightExpirience' },
        { fieldName: 'armyBranch', formGroupControlName: 'armyBranch' },
        { fieldName: 'rank', formGroupControlName: 'rank' },
        { fieldName: 'isPoliticallySensitive', formGroupControlName: 'isPoliticallySensitive' },
        { fieldName: 'fishingArea', formGroupControlName: 'fishingArea' },
        { fieldName: 'prominentPublicPosition', formGroupControlName: 'prominentPublicPosition' },
    ],
    updatePI: [
        { fieldName: 'contactNumber', formGroupControlName: 'contactNumber' },
        { fieldName: 'email', formGroupControlName: 'email' },
        { fieldName: 'relationshipToPI', formGroupControlName: 'relationshipToPI' },
        { fieldName: 'otherFirstName', formGroupControlName: 'otherFirstName' },
        { fieldName: 'otherMiddleName', formGroupControlName: 'otherMiddleName' },
        { fieldName: 'otherLastName', formGroupControlName: 'otherLastName' },
        { fieldName: 'motherFirstName', formGroupControlName: 'motherFirstName' },
        { fieldName: 'motherMiddleName', formGroupControlName: 'motherMiddleName' },
        { fieldName: 'motherLastName', formGroupControlName: 'motherLastName' },
        { fieldName: 'civilStatus', formGroupControlName: 'civilStatus' },
        { fieldName: 'pobCountry', formGroupControlName: 'pobCountry' },
        { fieldName: 'pobProvince', formGroupControlName: 'pobProvince' },
        { fieldName: 'pobCity', formGroupControlName: 'pobCity' },
        { fieldName: 'nationality', formGroupControlName: 'nationality' },
        { fieldName: 'isUSPerson', formGroupControlName: 'isUSPerson' },
        { fieldName: 'identificationType', formGroupControlName: 'identificationType' },
        { fieldName: 'identificationNumber', formGroupControlName: 'identificationNumber' },
        { fieldName: 'annualIncome', formGroupControlName: 'annualIncome' },
        { fieldName: 'employer', formGroupControlName: 'employer' },
        { fieldName: 'natureOfBusiness', formGroupControlName: 'natureOfBusiness' },
        { fieldName: 'sourceOfFunds', formGroupControlName: 'sourceOfFunds' },
        { fieldName: 'otherSourceOfFunds', formGroupControlName: 'otherSourceOfFunds' },
        { fieldName: 'vesselOwner', formGroupControlName: 'vesselOwner' },
        { fieldName: 'vesselType', formGroupControlName: 'vesselType' },
        { fieldName: 'vesselCountry', formGroupControlName: 'vesselCountry' },
        { fieldName: 'airlineJob', formGroupControlName: 'airlineJob' },
        { fieldName: 'aircraftType', formGroupControlName: 'aircraftType' },
        { fieldName: 'numberOfFlightExpirience', formGroupControlName: 'numberOfFlightExpirience' },
        { fieldName: 'armyBranch', formGroupControlName: 'armyBranch' },
        { fieldName: 'rank', formGroupControlName: 'rank' },
        { fieldName: 'isPoliticallySensitive', formGroupControlName: 'isPoliticallySensitive' },
        { fieldName: 'fishingArea', formGroupControlName: 'fishingArea' },
        { fieldName: 'prominentPublicPosition', formGroupControlName: 'prominentPublicPosition' },
    ],

    bene: [
        { fieldName: 'firstName', formGroupControlName: 'firstName' },
        { fieldName: 'middleName', formGroupControlName: 'middleName' },
        { fieldName: 'lastName', formGroupControlName: 'lastName' },
        { fieldName: 'dateOfBirth', formGroupControlName: 'dateOfBirth' },
        { fieldName: 'priority', formGroupControlName: 'priority' },
        { fieldName: 'sharePercentage', formGroupControlName: 'percentageOfShare' },
        { fieldName: 'designation', formGroupControlName: 'designation' },
        { fieldName: 'relationToPI', formGroupControlName: 'relationship' },
        { fieldName: 'nationalityCountryCode', formGroupControlName: 'nationality' },
        { fieldName: 'justification', formGroupControlName: 'justification' },
        { fieldName: 'unitBuilding', formGroupControlName: 'unitNumber' },
        { fieldName: 'blockNumber', formGroupControlName: 'blockNumber' },
        { fieldName: 'streetName', formGroupControlName: 'street' },
        { fieldName: 'barangay', formGroupControlName: 'barangay' },
        { fieldName: 'cityCode', formGroupControlName: 'city' },
        { fieldName: 'provinceCode', formGroupControlName: 'province' },
        { fieldName: 'countryCode', formGroupControlName: 'country' },
        { fieldName: 'zipCode', formGroupControlName: 'zipCode' }
        // { fieldName: 'firstName', value: BeneficiariesFormGroup.value.declaration1 },
        // { fieldName: 'firstName', value: BeneficiariesFormGroup.value.declaration2 },
        // { fieldName: 'firstName', value: BeneficiariesFormGroup.value.declaration3 },
        // { fieldName: 'firstName', value: BeneficiariesFormGroup.value.declaration4 },
        // { fieldName: 'guardianFirstName', value: BeneficiariesFormGroup.value.guardianFirstName },
        // { fieldName: 'guardianMiddleName', value: BeneficiariesFormGroup.value.guardianMiddleName },
        // { fieldName: 'guardianLastName', value: BeneficiariesFormGroup.value.guardianLastName },
        // { fieldName: 'guardianDateOfBirth', value: BeneficiariesFormGroup.value.guardianDateOfBirth },
        // { fieldName: 'guardianRelationToBene', value: BeneficiariesFormGroup.value.guardianRelationship }
    ],

    updateOwnerInsured: [
        { fieldName: 'isAOEqualBO', formGroupControlName: 'isAOEqualBO' }
    ],

    updatePolicyInfo: [
        { fieldName: 'paymentScheme', formGroupControlName: 'paymentScheme' },
        { fieldName: 'premiumDefaultOption', formGroupControlName: 'premiumDefaultOption' },
        { fieldName: 'settlementOption', formGroupControlName: 'settlementOption' },
        { fieldName: 'payoutOption', formGroupControlName: 'payoutOption' },
        { fieldName: 'bankName', formGroupControlName: 'bankName' },
        { fieldName: 'bankBranch', formGroupControlName: 'bankBranch' },
        { fieldName: 'accountCurrency', formGroupControlName: 'accountCurrency' },
        { fieldName: 'accountNumber', formGroupControlName: 'accountNumber' },
        { fieldName: 'jointAccount', formGroupControlName: 'jointAccount' },
        { fieldName: 'typeOfAccount', formGroupControlName: 'typeOfAccount' },
        { fieldName: 'bankAccountName', formGroupControlName: 'bankAccountName' },
        { fieldName: 'coDepositorName', formGroupControlName: 'coDepositorName' },
        { fieldName: 'purpose', formGroupControlName: 'purpose' },
        { fieldName: 'otherPurpose', formGroupControlName: 'otherPurpose' },
    ],

    updateInsuranceDeclaration: [
        { fieldName: 'hadInsuranceApplication', formGroupControlName: 'hadInsuranceApplication' },
        { fieldName: 'hasPendingApplication', formGroupControlName: 'hasPendingApplication' },
        { fieldName: 'spouseInforcedAmount', formGroupControlName: 'spouseInforcedAmount' },
        { fieldName: 'minorInforcedInsuranceAmount', formGroupControlName: 'minorInforcedInsuranceAmount' },
        { fieldName: 'policyWillBePaidBeOthers', formGroupControlName: 'policyWillBePaidBeOthers' },
        { fieldName: 'policyWillBePaidBeOthersMoreDetails', formGroupControlName: 'policyWillBePaidBeOthersMoreDetails' },
        { fieldName: 'policyIntentedToChange', formGroupControlName: 'policyIntentedToChange' },
        { fieldName: 'premiumsPaidByLoad', formGroupControlName: 'premiumsPaidByLoad' },
        { fieldName: 'interPolicyIntentedToChange', formGroupControlName: 'interPolicyIntentedToChange' },
        { fieldName: 'interPremiumsPaidByLoad', formGroupControlName: 'interPremiumsPaidByLoad' }
    ]

}