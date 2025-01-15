import { CONSTANT_DB_TABLE } from './constant-table-name';

export const DYNAMIC_TABLE = {
    SQLLITE_TABLE_INFO: {
        vesselOperationInfo: {
            tableName: CONSTANT_DB_TABLE.EAPP_PERSON_VESSEL,
            primaryKey: 'vesselOperationID',
            foreignKey: 'personId'
        },
        beneficiaries: {
            tableName: CONSTANT_DB_TABLE.EAPP_BENE,
            primaryKey: 'beneId',
            foreignKey: 'eappId',
            excludedControls: ['sameAOAddress', 'samePIAddress']
        },
        payoutBanks: {
            tableName: CONSTANT_DB_TABLE.EAPP_PAYOUT_BANKS,
            primaryKey: 'bankId',
            foreignKey: 'eappId'
        },
        totalInsuranceInforce: {
            tableName: CONSTANT_DB_TABLE.EAPP_TOTAL_INSURANCE,
            primaryKey: 'totalInsuranceId',
            foreignKey: 'eappId'
        },
        replacementNotification: {
            tableName: CONSTANT_DB_TABLE.EAPP_REP_NOTIF,
            primaryKey: 'replacementNotifId',
            foreignKey: 'eappId'
        },
        siblings: {
            tableName: CONSTANT_DB_TABLE.EAPP_NONMED_FAMILY,
            primaryKey: 'famMemberId',
            foreignKey: 'nonMedId'
        },
        alcoholDoctors: {
            tableName: CONSTANT_DB_TABLE.EAPP_NONMED_ADOC,
            primaryKey: 'alcoholDoctorsId',
            foreignKey: 'nonMedId'
        },
        detoxDoctors: {
            tableName: CONSTANT_DB_TABLE.EAPP_NONMED_DDOC,
            primaryKey: 'detoxDoctorsId',
            foreignKey: 'nonMedId'
        },
        foreignTravelCountry: {
            tableName: CONSTANT_DB_TABLE.EAPP_NONMED_TRAVEL,
            primaryKey: 'foreignTravelId',
            foreignKey: 'nonMedId'
        },
        vesselOperationInfoNMED: {
            tableName: CONSTANT_DB_TABLE.EAPP_NONMED_VESSEL,
            primaryKey: 'vesselOperationId',
            foreignKey: 'nonMedId'
        },
        BeneficialOwnerGroup:{
            tableName: CONSTANT_DB_TABLE.BO,
            primaryKey: 'beneficiaryOwnerId',
            foreignKey: 'eappId'
        },
        dependentsGroup: {
            tableName: CONSTANT_DB_TABLE.DEPENDENTS,
            primaryKey: 'dependentsPrimaryId',
            foreignKey: 'siId',
            excludedControls: ['dateOfBirthAdult', 'durationOfStaySelect']
        }
    }
}