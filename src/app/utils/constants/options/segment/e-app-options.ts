export const EAPP_OPTIONS_CODE = {
    ARMY: 'ARMY',
    NAVY: 'NAVY',
    AIR_FORCE: 'AIRFRC',
    NATIONAL_POLICE: 'NTLPOLICE',
    CAPTAIN_HIGHER: 'CAPTHGR',
    CAPTAIN_BELOW: 'CAPTBLW',
    LUXURY_CRUISE_PASSENGERS: 'LXRYLNRS',
    CARGO_BULK: 'CRGSHPS',
    OIL_PET_CHEM: 'OLPTRLM',
    OFF_SHORE: 'OFSHRE',
    DEEP_SEA: 'DPSEA',
    LAKE: 'LAKE',
    POND: 'POND'
};

export const PRIMARY_BENE_PRIORITY = {
    key: 'P',
    name: 'primary'
};
export const CONTINGENT_BENE_PRIORITY = {
    key: 'C',
    name: 'contingent'
};

export const BENE_PRIORITY = [
    { key: PRIMARY_BENE_PRIORITY.key, value: PRIMARY_BENE_PRIORITY.name },
    { key: CONTINGENT_BENE_PRIORITY.key, value: CONTINGENT_BENE_PRIORITY.name }
];

export const EAPP_RELATIONSHIP = [
    { key: '1', value: 'Mother' },
    { key: '2', value: 'Father' },
    { key: '3', value: 'Spouse' },
    { key: '4', value: 'Son' },
    { key: '5', value: 'Daughter' },
    { key: '6', value: 'Brother' },
    { key: '7', value: 'Sister' },
    { key: '8', value: 'Grandson' },
    { key: '9', value: 'Granddaughter' },
    { key: '10', value: 'Grandfather' },
    { key: '11', value: 'Grandmother' },
    { key: '14', value: 'Child' },
    { key: '15', value: 'Cousin' },
    { key: '12', value: 'Aunt' },
    { key: '23', value: 'Uncle' },
    { key: '24', value: 'Nephew' },
    { key: '25', value: 'Niece' },
    { key: '26', value: 'Parent' },
    { key: '30', value: 'Wife' },
    { key: '32', value: 'Husband' },
    { key: '49', value: 'Others' }
];

export const RELATIONSHIP_DEGREE = {
    first: [1, 2, 4, 5, 6, 7, 10, 11, 12, 23, 24, 25, 30, 32],
    second: [3, 8, 9, 14, 26],
    third: [15, 49]
};

export const BENE_DESIGNATION = [
    { key: 'true', value: 'revocable' },
    { key: 'false', value: 'irrevocable' }
];

export const CURRENCY_OPTIONS = [
    { key: 'PHP', value: 'PHP' },
    { key: 'USD', value: 'USD' }
];

export const IDENTIFICATION_TYPE = [
    { key: '1', value: 'TIN' },
    { key: '2', value: 'SSS' },
    { key: '3', value: 'GSIS' }
];

export const ARMY_BRANCH = [
    { key: EAPP_OPTIONS_CODE.ARMY, value: 'Army' },
    { key: EAPP_OPTIONS_CODE.NAVY, value: 'Navy' },
    { key: EAPP_OPTIONS_CODE.AIR_FORCE, value: 'Air Force' },
    { key: EAPP_OPTIONS_CODE.NATIONAL_POLICE, value: 'National Police' }
];

export const ARMY_RANK = [
    {
        key: EAPP_OPTIONS_CODE.CAPTAIN_BELOW,
        value: 'Below Captain/ Below Senior Inspector'
    },
    {
        key: EAPP_OPTIONS_CODE.CAPTAIN_HIGHER,
        value: 'Captain & Higher/ Senior Inspector & Higher'
    },
];

export const PREFERRED_MAILING_ADDRESS = [
    { key: 'P', value: 'Present' },
    { key: 'W', value: 'Work' }
];

export const TYPE_OF_VESSEL = [
    {
        key: EAPP_OPTIONS_CODE.LUXURY_CRUISE_PASSENGERS,
        value: 'Luxury Liners/Cruise Ships/Passenger Ships'
    },
    {
        key: EAPP_OPTIONS_CODE.CARGO_BULK,
        value: 'Cargo Ships/Bulk Carriers'
    },
    {
        key: EAPP_OPTIONS_CODE.OIL_PET_CHEM,
        value: 'Oil/Petroleum/Chemical Tankers'
    },
];

export const FISHING_AREA = [
    {
        key: EAPP_OPTIONS_CODE.OFF_SHORE,
        value: 'Off-shore'
    },
    {
        key: EAPP_OPTIONS_CODE.DEEP_SEA,
        value: 'Deep-sea/In-shore'
    },
    {
        key: EAPP_OPTIONS_CODE.LAKE,
        value: 'Lake'
    },
    {
        key: EAPP_OPTIONS_CODE.POND,
        value: 'Pond'
    }
];

// POLICY INFO OPTIONS

export const PAYMENT_SCHEME = [
    { key: 'A', value: 'Auto-Debit' },
    { key: 'R', value: 'Cash/Check' },
    { key: 'C', value: 'Credit Card' },
    { key: 'P', value: 'PDC Payment' },
    { key: 'G', value: 'Group' },
    { key: 'S', value: 'Salary Deduction' },
    { key: 'F', value: 'Fund Transfer' }
];

export const PREMIUM_DEFAULT_OPTION = [
    { key: 'A', value: 'Premium Loan' },
    { key: 'R', value: 'Reduced Paid-Up' },
    { key: 'E', value: 'Extend Term Insurance' },
    { key: 'C', value: 'Cash Surrender' }
];

export const SETTLEMENT_OPTION = [
    { key: 'PIC', value: 'Paid in Cash' },
    { key: 'LDI', value: 'Left on Deposit' }
];

export const PAYOUT_OPTION = [
    { key: 'A', value: 'Automatic Transfer to My Account' },
    { key: 'C', value: 'Cheque' }
];

export const BANK_NAME = [
    { key: 'PNB', value: 'PNB' }
];

export const ACCOUNT_TYPE = [
    { key: 'A', value: 'AND' },
    { key: 'O', value: 'OR' },
    { key: 'AO', value: 'AND/OR' }
];

export const MEMBER_COUNT = [
    {
        value: "",
        key: 0,
        size: 4
    },
    {
        value: "",
        key: 1,
        size: 4
    },
    {
        value: "",
        key: 2,
        size: 4
    }
]

export const MEMBER_COUNT_READ_ONLY = [
    {
        value: "Not Applicable",
        key: 0
    },
    {
        value: "1 Member",
        key: 1
    },
    {
        value: "2 or more members",
        key: 2
    }
]