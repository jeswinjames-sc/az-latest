// * Only picked data that is used in siInfo input
export const DEFAULT_MOCK_LOCATION = [
    {
        name: 'PHILIPPINES',
        countryCode: '63',
        states: [
            {
                stateId: 'MM',
                name: 'Metro Manila',
                cities: [
                    {
                        cityCode: 'CLC',
                        name: 'Caloocan',
                        zipCodes: [
                            {
                                area: 'Caloocan City Central Post Office',
                                zipCode: '1400'
                            }
                        ]
                    },
                    {
                        cityCode: 'MKT',
                        name: 'Makati',
                        zipCodes: [
                            {
                                area: 'La Paz, Singkamas, and Tejeros',
                                zipCode: '1204'
                            }
                        ]
                    }
                ]
            }
        ]
    }
];
