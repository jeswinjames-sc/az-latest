/**
 * Storage keys for application settings.
 * IMPORTANT: Only one key is allowed to be inserted at all times in the Settings table!
 */
export const SETTING_KEYS = {
    // User Authentication
    USERNAME: 'UN',
    PASSWORD: 'PWD',
    TOKEN: 'TOKEN',
    ACCOUNT_MANAGER_ID: 'ACCTMNGRID',
    ACCOUNTMANAGER_AGENT_NAME: 'AMD_AGENT_NAME',
    HAS_AGREED_TC: 'HAS_AGREED_TC',
    INITIAL_LOGGED_IN: 'INITIALLOGGEDIN',
    
    // User Information
    LAST_NAME: 'LN',
    FIRST_NAME: 'FN',
    EMAIL: 'EMAIL',
    CHANNEL: 'CHANNEL',
    
    // Login Security
    LASTLOGIN_TIMESTAMP: 'LL_TS',
    BAD_PWD_COUNT: 'BP_C',
    BAD_PWD_TIMESTAMP: 'BP_TS',
    REQUIRES_PWD_CHANGE: 'REQUIRES_PWD_CHANGE',
    LOCKED_OFFLINE: 'LOCKED_OFFLINE',
    INVALID_OFFLINE_LOGIN_COUNT: 'OFLCNT',
    
    // Database & Storage
    DB_VERSION: 'DBVERSION',
    SETTINGS_DATA: 'STD',
    BCK_UP_SETTINGS_DATA: 'BCK_UP_SETTINGS_DATA',
    LOGIN_DATA: 'LGD',
    ACCOUNTMANAGER_DATA: 'AMD',
    REFFERROR_DATA: 'RFD',
    OFFLINE_APP_ERROR: 'OAE',
    SEQUENCE_NUMBER: 'Sequence-Number',
    FULLSYNCAGE: 'FULL_SYNC_AGE',
    
    // Channel Types
    CHANNEL_PNB: 'PNB',
    CNANNEL_HSBC: 'HSBC',
    CHANNEL_AGENCY: 'AGENCY',
    
    // Product Types
    RECPRO_TRADITIONAL: 'Traditional',
    RECPRO_UL: 'Unit-Linked',
    
    // AWS Configuration
    AWS_TOKEN: 'AWS_TOKEN',
    AWS_IDENTITY_ID: 'AWS_IDENTITY_ID',
    AWS_CREDENTIALS: 'AWS_CREDENTIALS',
    
    // System Configuration
    MAC: 'MAC',
    SUB_BUSS: 'BUSS',
    DYNATRACE_ERRORS: 'DYNATRACE_ERRORS'
} as const;

// Type for the SETTING_KEYS object
export type SettingKey = keyof typeof SETTING_KEYS;

// Type for the values of SETTING_KEYS
export type SettingValue = typeof SETTING_KEYS[SettingKey];
