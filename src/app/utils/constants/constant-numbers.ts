/**
 * Numeric constants used throughout the application
 */
export const CONSTANT_NUMBERS = {
    // SQL Operation Status
    SQL_SUCCESS_STR: '0000',
    SQL_FAIL_STR: '9999',

    // Boolean Values
    TRUE_STR: '1',
    FALSE_STR: '0',
    TRUE: 1,
    FALSE: 0,

    // API Status Codes
    API_ACCEPTED: 202,
    API_ACCEPTED_STR: '202',
    API_OK: 200,
    API_OK_STR: '200',
    API_OK_NEWRES: 201,
    API_OK_NEWRES_STR: '201',
    BAD_REQUEST: 400,
    BAD_REQUEST_STR: '400',
    UNAUTHORIZED: 401,
    UNAUTHORIZED_STR: '401',
    LOCKED: 423,
    LOCKED_STR: '423',
    UNAUTHORIZED_610: 610,

    // Custom Error Codes
    CUSTOM_ERROR1: 601,
    CUSTOM_ERROR2: 603,
    EXPIRED_PW: 604,
    CONNECTION_TIMEOUT: -4,

    // Progress Status
    COMPLETED: 1,
    IN_PROGRESS: 0,

    // Business Rules
    RELATION_TO_PI_OTHERS: '49',
    MIN_POAO: 1,
    MAX_POAO: 4,
    MIN_KYC: 1,
    MAX_KYC: 5,
    MAX_FILENAME_LEN: 17
} as const;