export const AIRCRAFT_TYPE_CODE = {
    JETLINER: 'JTLNRINT',
    DOMESTIC_LOCAL: 'DMSTCL',
    NON_SCHED_FLIGHT: 'NSCDLCFS',
    HELICOPTER: 'HLCPTR',
    TEST_PILOT: 'TPLT'
}

export const AIRCRAFT_TYPE = {
    PILOT: [
        { key: AIRCRAFT_TYPE_CODE.JETLINER, value: 'Jetliner/International' },
        { key: AIRCRAFT_TYPE_CODE.DOMESTIC_LOCAL, value: 'Domestic/Local' },
        { key: AIRCRAFT_TYPE_CODE.NON_SCHED_FLIGHT, value: 'Non-schedule chartered flights' },
        { key: AIRCRAFT_TYPE_CODE.HELICOPTER, value: 'Helicopter' },
        { key: AIRCRAFT_TYPE_CODE.TEST_PILOT, value: 'Test pilot/flight instructor' }
    ],
    CREW: [
        { key: AIRCRAFT_TYPE_CODE.JETLINER, value: 'Jetliner/International' },
        { key: AIRCRAFT_TYPE_CODE.DOMESTIC_LOCAL, value: 'Domestic/Local' },
    ]
};
