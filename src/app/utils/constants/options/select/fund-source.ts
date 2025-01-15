export const FUND_SOURCE_KEY = {
    BUSINESS: '1',
    SALARY: '2',
    DONATIONS: '3',
    REMITTANCES: '4',
    INVESTMENTS: '5',
    OTHERS: '6',
}

export const FUND_SOURCE = [
    {
        key: FUND_SOURCE_KEY.BUSINESS,
        value: 'Business'
    },
    {
        key: FUND_SOURCE_KEY.SALARY,
        value: 'Salary'
    },
    {
        key: FUND_SOURCE_KEY.DONATIONS,
        value: 'Donations'
    },
    {
        key: FUND_SOURCE_KEY.REMITTANCES,
        value: 'Remittances/Allowances'
    },
    {
        key: FUND_SOURCE_KEY.INVESTMENTS,
        value: 'Investments'
    },
    {
        key: FUND_SOURCE_KEY.OTHERS,
        value: 'Others'
    }
];

export const FUND_SOURCE_NON_INCOME = [
    {
        key: '3',
        value: 'Donations'
    },
    {
        key: '4',
        value: 'Remittances'
    },
    {
        key: '5',
        value: 'Investments'
    },
    {
        key: '6',
        value: 'Others'
    }
];
