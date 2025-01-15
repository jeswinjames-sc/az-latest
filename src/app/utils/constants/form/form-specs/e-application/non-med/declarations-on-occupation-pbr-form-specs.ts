import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FormGeneratorSpecs } from '@models/specs/form-generator-specs';
import { RowGeneratorSpecs } from '@models/specs/row-generator-specs';
import { DynamicTableSpecs } from '@models/specs/dynamic-table-specs';

import { NonMedPBRFormGroup, VesselOpFormGroup, ForeignTravelCountriesPBRFormGroup } from '@form-group/e-app/non-med-pbr-form-group';
import { VesselOpFGControls, ForeignTravelCountriesFGControl } from '@fg-controls/e-app';

import { BOOLEAN } from '@utils/constants/options/segment/boolean';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { FLIGHT_EXPERIENCE } from '@utils/constants/options/select/e-application/flight-experience';
import { ILLNESS_CAUSE } from '@utils/constants/options/select/e-application/illness-cause';
import { ILLNESS_INJURY } from '@utils/constants/options/select/e-application/illness-injury';
import { ILLNESS_TREATMENT } from '@utils/constants/options/select/e-application/illness-treatment';
import { ILLNESS_RECOVERY } from '@utils/constants/options/select/e-application/illness-recovery';
import { PAST_MILITARY_RANK } from '@utils/constants/options/select/e-application/past-military-rank';
import { PAST_POLITICS_POSITION } from '@utils/constants/options/select/e-application/past-politics-position';
import { TRAVEL_PURPOSE } from '@utils/constants/options/select/e-application/travel-purpose';
import { ACTIVITIES, NOADDITIONALQUESTIONSACTIVITY, PBRACTIVITIES } from '@utils/constants/activities';
import { LIST_OF_COUNTRIES } from '@utils/constants/options/select/list-of-countries';
import { COUNTRIES_CODE_MAPPER } from '@utils/constants/country_mapper';
import * as OccupationSpecs from '@form/column-specs/e-application/occupations-pbr-col-specs';
import { PARASAILING_TYPE, DIVING_DEPTH, SPORTS_FREQUENCY } from '@utils/constants/options/select/e-application/occupation-options';
import * as EAPP_OPTIONS from '@utils/constants/options/segment/e-app-options';
import { AIRLINE_JOB } from '@utils/constants/options/select/e-application/airline-job';
import { AIRCRAFT_TYPE } from '@utils/constants/options/select/e-application/aircraft-type';

const setControlValues = (formGroup: FormGroup, attrNames: string[], value: string | boolean | number) => {
    attrNames.forEach(attrName => {
        formGroup.get(attrName).setValue(value);
    });
};

const toggleControl = (formGroup: FormGroup, attrNames: string[], action: 'd' | 'e') => {
    attrNames.forEach(attrName => {
        if (action === 'e') {
            formGroup.get(attrName).enable();
        }
        else {
            formGroup.get(attrName).disable();
        }
    });
};

function countryMapper() {
    const mapCountry = Object.assign({}, ...LIST_OF_COUNTRIES.map(object =>
        ({ [object.countryCode]: object.name })));

    return mapCountry;
}

export const DeclarationOfOccupationFormTitleRow: RowGeneratorSpecs = {
    columns: [{ text: 'Declarations on Occupation/Avocation' }],
    class: 'form-group-title'
};

export const DeOnOccFormSpecsColumn1: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        attName: 'occupation',
        type: 'selectize',
        interface: 'popover',
        formGroup: NonMedPBRFormGroup,
        setFieldName: true,
        fieldName: 'Please specify occupation',
    },
    isHidden: true
};

export const DeOnOccFormSpecsColumn1_Class: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        attName: 'occupationClass',
        type: 'selectize',
        interface: 'popover',
        formGroup: NonMedPBRFormGroup,
        setFieldName: true,
        fieldName: 'Occupation class',
    },
    isHidden: true
};

export const DeOnOccFormSpecsColumn2: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        attName: 'countryResidence',
        type: 'selectize',
        interface: 'popover',
        formGroup: NonMedPBRFormGroup,
        setFieldName: true,
        fieldName: 'Please specify country',
        countries: LIST_OF_COUNTRIES
    },
    isHidden: true
};

export const ChangeCountryResidenceCol: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        attName: 'changeCountryResidence',
        type: 'radio',
        formGroup: NonMedPBRFormGroup,
        setFieldName: true,
        fieldName: 'Country of residence?',
        options: BOOLEAN,
        conditionalFunction: () => {
            DeOnOccFormSpecsColumn2.isHidden = NonMedPBRFormGroup.get('changeCountryResidence').value === 'N';
        }
    }
};

export const ChangeOccupationCol: ColumnGeneratorSpecs = {
    size: 3,
    field: {
        attName: 'changeOccupation',
        type: 'radio',
        formGroup: NonMedPBRFormGroup,
        setFieldName: true,
        fieldName: 'Occupation?',
        options: BOOLEAN
    }
};

export const DeOnOccFormSpecs: FormGeneratorSpecs = {
    rows: [
        DeclarationOfOccupationFormTitleRow,
        {// FIELD: changeOccupation, occupation
            columns: [
                ChangeOccupationCol,
                DeOnOccFormSpecsColumn1,
                DeOnOccFormSpecsColumn1_Class
            ]
        },
        {// FIELD: changeOccupation, occupation
            columns: [
                ChangeCountryResidenceCol,
                DeOnOccFormSpecsColumn2
            ]
        }
    ]
};

// Military/Police Form Specs
export const MilBranchColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'select',
        attName: 'branchArmy',
        interface: 'popover',
        formGroup: NonMedPBRFormGroup,
        options: EAPP_OPTIONS.ARMY_BRANCH
    }
};

export const MilRankColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'select',
        attName: 'militaryRank',
        interface: 'popover',
        formGroup: NonMedPBRFormGroup,
        options: EAPP_OPTIONS.ARMY_RANK
    }
};

export const MilBranchRowSpecs: RowGeneratorSpecs = {
    // FIELDS: branchArmy
    columns: [
        {
            size: 6,
            text: 'In what branch of the armed forces are you serving?',
            setTextAsRequired: true
        },
        MilBranchColSpecs
    ]
};

export const MilRankRowSpecs: RowGeneratorSpecs = {
    // FIELDS: militaryRank
    columns: [
        {
            size: 6,
            text: 'What is your rank?',
            setTextAsRequired: true
        },
        MilRankColSpecs
    ]
}

export const MilOccFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Military/Police' }],
            class: 'form-sub-section-title'
        },
        MilBranchRowSpecs,
        MilRankRowSpecs
    ],
    isHidden: true
};

// Air Transportation Form Specs
export const AirTransTypeColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'select',
        attName: 'airlineJobType',
        interface: 'popover',
        formGroup: NonMedPBRFormGroup,
        options: AIRLINE_JOB
    }
};

export const AirTransCraftTypeColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'select',
        attName: 'airCraftType',
        interface: 'popover',
        formGroup: NonMedPBRFormGroup,
        options: AIRCRAFT_TYPE.PILOT
    }
};

export const AirTransFlyHoursColSpecs: ColumnGeneratorSpecs = 
{
    size: 6,
    field: {
        type: 'select',
        attName: 'flyingHours',
        interface: 'popover',
        formGroup: NonMedPBRFormGroup,
        options: FLIGHT_EXPERIENCE
    }
};

export const AirTransTypeRowSpecs: RowGeneratorSpecs = {
    // FIELDS: airlineJobType
    columns: [
        {
            size: 6,
            text: 'Are you an airline pilot or crew member or ground crew?'
        },
        AirTransTypeColSpecs
    ]
};

export const AirTransCraftTypeRowSpecs: RowGeneratorSpecs = {
    // FIELDS: airCraftType
    columns: [
        {
            size: 6,
            text: 'What types of aircraft do you presently fly?'
        },
        AirTransCraftTypeColSpecs
    ],
};

export const AirTransFlyHoursRowSpecs: RowGeneratorSpecs = {
    // FIELDS: flyingHours
    columns: [
        {
            size: 6,
            text: 'Number of your flying or expected flying hours per annum?'
        },
        AirTransFlyHoursColSpecs
    ],
};

export const AirTransOccFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Air Transportation' }],
            class: 'form-sub-section-title'
        },
        AirTransTypeRowSpecs,
        AirTransCraftTypeRowSpecs,
        AirTransFlyHoursRowSpecs
    ],
    isHidden: true
};

export const WaterPortTableSpecs: DynamicTableSpecs = {
    mainFormGroup: NonMedPBRFormGroup,
    formArrayKey: 'vesselOperationInfoNMED',
    secondaryFormGroup: VesselOpFormGroup,
    controlConfiguration: VesselOpFGControls,
    limit: 3,
    title: 'In what waters and between what ports does the vessel operate?',
    readOnly: false,
    hasShowMore: true,

    availableActions: {
        add: true,
        edit: true,
        save: true,
        delete: true
    },

    formGeneratorSpecs: {
        rows: [
            {
                columns: [
                    {
                        size: 6,
                        field: {
                            attName: 'water',
                            fieldName: 'Water',
                            setFieldName: true,
                            type: 'selectize',
                            interface: 'popover',
                            formGroup: VesselOpFormGroup,
                            countries: LIST_OF_COUNTRIES
                        }
                    },
                    {
                        size: 6,
                        field: {
                            attName: 'port',
                            fieldName: 'Port',
                            setFieldName: true,
                            type: 'selectize',
                            interface: 'popover',
                            formGroup: VesselOpFormGroup,
                            countries: LIST_OF_COUNTRIES
                        }
                    }
                ]
            }
        ]
    },
    columns: [
        {
            formGrpCtrlName: 'water',
            columnName: 'Water',
            mapper: countryMapper()
        },
        {
            formGrpCtrlName: 'port',
            columnName: 'Port',
            mapper: countryMapper()
        }
    ],
    isHidden: true
};

export const MarineIndusOccFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Marine Industry' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: vesselOwner, vesselType
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'text',
                        attMaxLength: 50,
                        attName: 'vesselOwner',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: true,
                        fieldName: 'Owner name of the vessel'
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'vesselType',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: true,
                        interface: 'popover',
                        fieldName: 'Type of vessel',
                        options: EAPP_OPTIONS.TYPE_OF_VESSEL
                    }
                }
            ]
        },
        {// FIELDS: vesselCountry, vesselOperateArea
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'selectize',
                        interface: 'popover',
                        attName: 'vesselCountry',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: true,
                        fieldName: 'In which country is the vessel registered?',
                        countries: LIST_OF_COUNTRIES
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'segment',
                        attName: 'isPoliticallySensitive',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: true,
                        fieldName: 'Is it likely that the vessel may operate in any politically sensitive area?',
                        options: BOOLEAN
                    }
                }
            ]
        }
    ],
    isHidden: true
};
export const MarineIndusOccMoreFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// FIELD: changeOccupation
            columns: [
                {
                    size: 6,
                    text: 'Is it likely that the vessel may operate in any politically sensitive area?'
                },
                {
                    size: 6,
                    field: {
                        type: 'segment',
                        attName: 'changeOccupation',
                        formGroup: NonMedPBRFormGroup,
                        options: BOOLEAN
                    }
                },
            ]
        }
    ],
    isHidden: true
};


export const ForeginCountriesTable: DynamicTableSpecs = {
    mainFormGroup: NonMedPBRFormGroup,
    formArrayKey: 'foreignTravelCountry',
    secondaryFormGroup: ForeignTravelCountriesPBRFormGroup,
    controlConfiguration: ForeignTravelCountriesFGControl,
    limit: 3,
    title: 'Travel Countries',
    subTitle: 'Travel Country Information',
    customSaveButtonName: 'Travel Country',
    readOnly: false,
    hasShowMore: true,

    availableActions: {
        add: true,
        edit: true,
        save: true,
        delete: true
    },

    formGeneratorSpecs: {
        rows: [
            {
                columns: [
                    {
                        size: 3,
                        field: {
                            attName: 'country',
                            fieldName: 'Country',
                            setFieldName: true,
                            type: 'selectize',
                            interface: 'popover',
                            formGroup: ForeignTravelCountriesPBRFormGroup,
                            countries: LIST_OF_COUNTRIES
                        }
                    },
                    {
                        size: 3,
                        field: {
                            attName: 'plannedStartDate',
                            fieldName: 'Planned Start Date',
                            setFieldName: true,
                            type: 'date',
                            formGroup: ForeignTravelCountriesPBRFormGroup,
                            isExpiredIDField: true,
                            dateFormatOutput: 'MM/DD/YYYY'
                        }
                    },
                    {
                        size: 3,
                        field: {
                            attName: 'plannedEndDate',
                            fieldName: 'Planned End Date',
                            setFieldName: true,
                            type: 'date',
                            formGroup: ForeignTravelCountriesPBRFormGroup,
                            isExpiredIDField: true,
                            dateFormatOutput: 'MM/DD/YYYY'
                        }
                    },
                    {
                        size: 3,
                        field: {
                            attName: 'city',
                            fieldName: 'City',
                            setFieldName: true,
                            type: 'text',
                            attMaxLength: 50,
                            formGroup: ForeignTravelCountriesPBRFormGroup
                        }
                    }
                ]
            }
        ]
    },
    columns: [
        {
            formGrpCtrlName: 'country',
            columnName: 'Country',
            mapper: COUNTRIES_CODE_MAPPER
        },
        {
            formGrpCtrlName: 'plannedStartDate',
            columnName: 'Planned Start Date'
        },
        {
            formGrpCtrlName: 'plannedEndDate',
            columnName: 'Planned End Date'
        },
        {
            formGrpCtrlName: 'city',
            columnName: 'City'
        }
    ],
    isHidden: true
};

export const TravelResidePlanCol: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'radio',
        attName: 'planToTravelOrResideAbroad',
        formGroup: NonMedPBRFormGroup,
        options: BOOLEAN,
        setFieldName: true
    }
};

export const DeOnOccForeignPurposeRow: RowGeneratorSpecs = {
    columns: [
        {
            size: 6,
            text: 'Specify your purpose'
        }
    ],
    isHidden: true
};

export const PurposeOccupationCol: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'purposeOccupation',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Occupation'
    }
};

export const PurposeBusinessTripCol: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'purposeBusinessTrip',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Business Trip'
    }
};

export const PurposeImmigrationCol: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'purposeImmigration',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Immigration'
    }
};

export const DeOnOccForeignPurposeRow1: RowGeneratorSpecs = {
    columns: [
        PurposeOccupationCol,
        PurposeBusinessTripCol,
        PurposeImmigrationCol
    ],
    isHidden: true
};

export const PurposeBusinessTravelCol: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'purposeBusinessTravel',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Business/Travel'
    }
};

export const PurposeEducationCol: ColumnGeneratorSpecs = {
    size: 4,
    field: {
        type: 'checkbox',
        attName: 'purposeEducation',
        formGroup: NonMedPBRFormGroup,
        fieldName: 'Education'
    }
};

export const DeOnOccForeignPurposeRow2: RowGeneratorSpecs = {
    columns: [
        PurposeBusinessTravelCol,
        PurposeEducationCol
    ],
    isHidden: true
};

export const DeOnOccForeignOccRow: RowGeneratorSpecs = {
    columns: [
        {
            size: 6,
            text: 'Please specify occupation'
        },
        {
            size: 6,
            field: {
                type: 'selectize',
                interface: 'popover',
                attName: 'foreignOccupation',
                formGroup: NonMedPBRFormGroup, 
                setFieldName: true
            }
        }
    ],
    isHidden: true
};

export const DeOnOccForeignTravelFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'Foreign Travel & Residence' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                {
                    size: 6,
                    text: 'Do you have plans to travel or reside abroad?'
                },
                TravelResidePlanCol
            ]
        },
        DeOnOccForeignPurposeRow,
        DeOnOccForeignPurposeRow1,
        DeOnOccForeignPurposeRow2,
        DeOnOccForeignOccRow
    ],
    isHidden: true
};

export const DecOnOccActivityLabelColSpecs: ColumnGeneratorSpecs = {
    template: `
                <table>
                    <tr>
                        <td>
                          <ul>
                              <li>Boxing</li>
                              <li>Hang Gliding/Parasailing</li>
                              <li>Yachting</li>
                              <li>Aerodium</li>
                              <li>Diving/Snorkelling, more than once a year</li>
                              <li>Biking, more than once a year</li>
                              <li>Wrestling/Gymnastics, more than once a year</li>
                              <li>Motor Racing</li>
                              <li>Canyoning/Canyoneering</li>
                              <li>Parachuting</li>
                              <li>Powerboat Racing</li>
                              <li>Other Sports/Hobbies</li>
                          </ul>
                        </td>
                        <td>
                            <ul>
                                <li>Martial Arts</li>
                                <li>Mountaineering/Trekking</li>
                                <li>Rafting</li>
                                <li>Basketball/Rugby/Football/Soccer/Polo/Hockey</li>
                                <li>Jet Skiing, more than once a year</li>
                                <li>Ice hockey/Ice Skating, more than once a year</li>
                                <li>Bungee Jumping/Paintball, more than once a year</li>
                                <li>Horse Racing</li>
                                <li>Mountain Biking</li>
                                <li>Sandboarding</li>
                                <li>Canoeing/Sea Kayaking, more than once a year</li>
                                <li>Triathlon</li>
                                <li>Surfing/Wakeboarding</li>
                            </ul>
                        </td>
                    </tr>
                </table>
    `
}

export const DeOnOccActivitiesFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// activitiesTitle
            columns: [
                {
                    text: `Select all applicable activities
                    that the Proposed Insured/Applicant Owner
                    engage or intend to engage in from the list.`
                },

            ]
        },
        {// FIELDS: didBoxing, didMartialArts
            columns: [
                OccupationSpecs.didBoxingColSpecs,
                OccupationSpecs.didMartialArtsColSpecs
            ]
        },
        {// FIELDS: didHanggliding, didMountaineering
            columns: [
                OccupationSpecs.didHangglidingColSpecs,
                OccupationSpecs.didMountaineeringColSpecs
            ]
        },
        {// FIELDS: didyachting, didRafting
            columns: [
                OccupationSpecs.didyachtingColSpecs,
                OccupationSpecs.didRaftingColSpecs
            ]
        },
        {// FIELDS: didAerodium, didBallSport
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didAerodium',
                        fieldName: 'Aerodium',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('Aerodium');
                        }
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didBallSport',
                        fieldName: 'Basketball/Rugby/Football/Soccer/Polo/Hockey',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('BallSport');
                        }
                    }
                }
            ]
        },
        {// FIELDS: didDiving, didJetski
            columns: [
                OccupationSpecs.didDivingColSpecs,
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didJetski',
                        fieldName: 'Jet Skiing, more than once a year',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('Jetski');
                        }
                    }
                }
            ]
        },
        {// FIELDS: didBiking, didIceHockey
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didBiking',
                        fieldName: 'Biking, more than once a year',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('Biking');
                        }
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didIceHockey',
                        fieldName: 'Ice hockey/Ice Skating, more than once a year',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('IceHockey');
                        }
                    }
                }
            ]
        },
        {// FIELDS: didWrestling, didBungeeJumping
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didWrestling',
                        fieldName: 'Wrestling/Gymnastics, more than once a year',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('Wrestling');
                        }
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didBungeeJumping',
                        fieldName: 'Bungee Jumping/Paintball, more than once a year',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('BungeeJumping');
                        }
                    }
                }
            ]
        },
        {// FIELDS: didMotorRacing, didHorseRacing
            columns: [
                OccupationSpecs.didMotorRacingColSpecs,
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didHorseRacing',
                        fieldName: 'Horse Racing',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('HorseRacing');
                        }
                    }
                }
            ]
        },
        {// FIELDS: didMotorboatRacing, didCarRacing
            columns: [
                // {
                //     size: 6,
                //     field: {
                //         type: 'checkbox',
                //         attName: 'didMotorboatRacing',
                //         fieldName: 'Motorboat Racing',
                //         formGroup: NonMedPBRFormGroup,
                //         conditionalFunction: () => {
                //             clearValidatorsForNonParentActivities('MotorboatRacing');
                //         }
                //     }
                // },
                // {
                //     size: 6,
                //     field: {
                //         type: 'checkbox',
                //         attName: 'didCarRacing',
                //         fieldName: 'Car Racing',
                //         formGroup: NonMedPBRFormGroup,
                //         conditionalFunction: () => {
                //             clearValidatorsForNonParentActivities('CarRacing');
                //         }
                //     }
                // }
            ]
        },
        {// FIELDS: didCanyoning, didMountainBiking
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didCanyoning',
                        fieldName: 'Canyoning/Canyoneering',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('Canyoning');
                        }
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didMountainBiking',
                        fieldName: 'Mountain Biking',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('MountainBiking');
                        }
                    }
                }
            ]
        },
        {// FIELDS: didParachuting, didSandboarding
            columns: [
                OccupationSpecs.didParachutingColSpecs,
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didSandboarding',
                        fieldName: 'Sandboarding',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('Sandboarding');
                        }
                    }
                }
            ]
        },
        {// FIELDS: didPowerboatRacing, didCanoe
            columns: [
                OccupationSpecs.didPowerboatRacingColSpecs,
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didSeaKayaking',
                        fieldName: 'Canoeing/Sea Kayaking, more than once a year',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('SeaKayaking');
                        }
                    }
                }
            ]
        },
        { //didOtherSports
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didSurfing',
                        fieldName: 'Surfing/Wakeboarding',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('Surfing');
                        }
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didOtherSports',
                        fieldName: 'Other Sports/Hobbies',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('OtherSports');
                        }
                    }
                }
                // {
                //     size: 6,
                //     field: {
                //         type: 'checkbox',
                //         attName: 'didPrivateFlying',
                //         fieldName: 'Private Flying',
                //         formGroup: NonMedPBRFormGroup,
                //         conditionalFunction: () => {
                //             clearValidatorsForNonParentActivities('PrivateFlying');
                //         }
                //     }
                // }
            ],
        },
        { //didOtherSports
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'didTriathlon',
                        fieldName: 'Triathlon',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            createGenericRowArray('Triathlon');
                        }
                    }
                }
            ],
        },
        {// Labels only
            columns: [DecOnOccActivityLabelColSpecs],
            isHidden: true
        },
        {// FIELDS: noneOfActivities
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'noneOfActivities',
                        fieldName: 'None of the above apply to me',
                        formGroup: NonMedPBRFormGroup,
                        conditionalFunction: () => {
                            const noActivityCtrlValue = NonMedPBRFormGroup.get('noneOfActivities').value ? JSON.parse(NonMedPBRFormGroup.get('noneOfActivities').value) : false;
                            if (noActivityCtrlValue) {
                                toggleControl(NonMedPBRFormGroup, PBRACTIVITIES, 'd')
                                setControlValues(NonMedPBRFormGroup, PBRACTIVITIES, null);
                            } else {
                                toggleControl(NonMedPBRFormGroup, PBRACTIVITIES, 'e');
                            }
                            toggleDisplayActivityLabel(noActivityCtrlValue);
                        }
                    }
                }
            ]
        }
    ]
};

const toggleDisplayActivityLabel = (toggleLabel: boolean) => {
    let formSpecsLength = DeOnOccActivitiesFormSpecs.rows.length;
    if (toggleLabel) {
        DeOnOccActivitiesFormSpecs.rows.forEach(rows => {
            rows.isHidden = true;
        });
        DeOnOccActivitiesFormSpecs.rows[formSpecsLength - 1].isHidden = false;
        DeOnOccActivitiesFormSpecs.rows[formSpecsLength - 2].isHidden = false;
    } else {
        DeOnOccActivitiesFormSpecs.rows.forEach(rows => {
            rows.isHidden = false;
        });
        DeOnOccActivitiesFormSpecs.rows[formSpecsLength - 2].isHidden = true;
    }
    DeOnOccActivitiesFormSpecs.rows[0].isHidden = false; //this is the description
}

export const didBoxingFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE
            columns: [{ text: 'Boxing' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: boxingType, willBeProBoxer
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'boxingType',
                        formGroup: NonMedPBRFormGroup,
                        interface: 'popover',
                        fieldName: 'Are you Engaged in:',
                        setFieldName: true,
                        options: [
                            { key: 'AMTRBXNG', value: 'Amateur Boxing/Workout' },
                            { key: 'PROBOX', value: 'Professional Boxing/Sports' }
                        ]
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'segment',
                        attName: 'willBeProBoxer',
                        formGroup: NonMedPBRFormGroup,
                        fieldName: 'Do you hope to turn professional at some stage in the future?',
                        setFieldName: true,
                        options: BOOLEAN
                    }
                }
            ]
        }
    ],
    isHidden: true
};
export const didDivingFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE
            columns: [{ text: 'Diving/Snorkelling, more than once a year' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: divingType
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'divingType',
                        formGroup: NonMedPBRFormGroup,
                        interface: 'popover',
                        fieldName: 'Are you Engaged in:',
                        setFieldName: true,
                        options: [
                            { key: 'Amateur diving', value: 'Amateur diving' },
                            { key: 'Professional diving', value: 'Professional diving' }
                        ]
                    }
                }
            ]
        },
        { columns: [{ text: 'Please state the following' }] },
        {// FIELDS: divingDepth, divingMxDepth, needsDivingDecompression
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'select',
                        attName: 'divingDepth',
                        formGroup: NonMedPBRFormGroup,
                        interface: 'popover',
                        setFieldName: true,
                        fieldName: 'Normal depth of dive',
                        options: DIVING_DEPTH
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'number',
                        attMaxLength: 3,
                        attName: 'divingMxDepth',
                        setFieldName: true,
                        fieldName: 'Maximum depth of dive',
                        formGroup: NonMedPBRFormGroup,
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'segment',
                        attName: 'needsDivingDecompression',
                        setFieldName: true,
                        fieldName: 'Decompression necessary?',
                        formGroup: NonMedPBRFormGroup,
                        options: BOOLEAN
                    }
                }
            ]
        },
        {// FIELDS: nightDiving, caveDiving, iceDiving
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'segment',
                        attName: 'nightDiving',
                        setFieldName: true,
                        fieldName: 'Night, drift diving?',
                        formGroup: NonMedPBRFormGroup,
                        options: BOOLEAN
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'segment',
                        attName: 'caveDiving',
                        setFieldName: true,
                        fieldName: 'Cave, pothole diving?',
                        formGroup: NonMedPBRFormGroup,
                        options: BOOLEAN
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'segment',
                        attName: 'iceDiving',
                        setFieldName: true,
                        fieldName: 'Ice diving?',
                        formGroup: NonMedPBRFormGroup,
                        options: BOOLEAN
                    }
                }
            ]
        },
        {// FIELDS: unaccompaniedDiving, divingParticipation
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'segment',
                        attName: 'unaccompaniedDiving',
                        setFieldName: true,
                        fieldName: 'Unaccompanied diving?',
                        formGroup: NonMedPBRFormGroup,
                        options: BOOLEAN
                    }
                }
            ]
        }
    ],
    isHidden: true
};
export const didHangglidingFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE
            columns: [{ text: 'Hang Gliding or Parasailing' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: parasailingType, parasailingPastYr, parasailingUpcomingYr
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'parasailingType',
                        formGroup: NonMedPBRFormGroup,
                        interface: 'popover',
                        setFieldName: true,
                        fieldName: 'Are you engaged in unpowered gliding or powered gliding?',
                        options: PARASAILING_TYPE
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'parasailingPastYr',
                        formGroup: NonMedPBRFormGroup,
                        interface: 'popover',
                        setFieldName: true,
                        fieldName: 'How many flights have you made in the past 12 months? ',
                        options: SPORTS_FREQUENCY
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'parasailingUpcomingYr',
                        formGroup: NonMedPBRFormGroup,
                        interface: 'popover',
                        setFieldName: true,
                        fieldName: 'How many do you anticipate making in the coming 12 months?',
                        options: SPORTS_FREQUENCY
                    }
                },
                {
                    size: 6,
                    field: {// parasailingflyingCompetition
                        type: 'segment',
                        fieldName: 'Have you engaged or are you likely to engage in any flying competitions, record attempts, acrobatics, stunts or exhibitions?',
                        attName: 'parasailingflyingCompetition',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: true,
                        options: BOOLEAN
                    }
                }
            ]
        }
    ],
    isHidden: true
};

export const professionalMotorRacingRow: RowGeneratorSpecs = {// FIELDS: motorRacingDragRacing, motorRacingIceRacing, motorRacingSpeedways
    columns: [
        {
            size: 4,
            field: {
                type: 'segment',
                attName: 'motorRacingMotorCrossPro',
                setFieldName: true,
                fieldName: 'Motor cross?',
                formGroup: NonMedPBRFormGroup,
                options: BOOLEAN
            }
        },
        {
            size: 4,
            field: {
                type: 'segment',
                attName: 'motorRacingIceRacingPro',
                setFieldName: true,
                fieldName: 'Ice racing?',
                formGroup: NonMedPBRFormGroup,
                options: BOOLEAN
            }
        },
        {
            size: 4,
            field: {
                type: 'segment',
                attName: 'motorRacingSpeedwayPro',
                setFieldName: true,
                fieldName: 'Speedway?',
                formGroup: NonMedPBRFormGroup,
                options: BOOLEAN
            }
        }
    ],
    isHidden: true
}

export const amatuerMotorRacing1: RowGeneratorSpecs = {// FIELDS: motorRacingDragRacing, motorRacingGrassTrack, motorRacingHillClimbs
    columns: [
        {
            size: 4,
            field: {
                type: 'segment',
                attName: 'motorRacingDragRacing',
                setFieldName: true,
                fieldName: 'Drag racing and sprints/grass?',
                formGroup: NonMedPBRFormGroup,
                options: BOOLEAN
            }
        },
        {
            size: 4,
            field: {
                type: 'segment',
                attName: 'motorRacingGrassTrack',
                setFieldName: true,
                fieldName: 'Grass track?',
                formGroup: NonMedPBRFormGroup,
                options: BOOLEAN
            }
        },
        {
            size: 4,
            field: {
                type: 'segment',
                attName: 'motorRacingHillClimbs',
                setFieldName: true,
                fieldName: 'Hill climbs?',
                formGroup: NonMedPBRFormGroup,
                options: BOOLEAN
            }
        }
    ],
    isHidden: true
}
export const amatuerMotorRacing2: RowGeneratorSpecs = {// FIELDS: motorRacingIceRacing, motorRacingMotorCross, motorRacingSandRacing
    columns: [
        {
            size: 4,
            field: {
                type: 'segment',
                attName: 'motorRacingIceRacing',
                setFieldName: true,
                fieldName: 'Ice Racing?',
                formGroup: NonMedPBRFormGroup,
                options: BOOLEAN
            }
        },
        {
            size: 4,
            field: {
                type: 'segment',
                attName: 'motorRacingMotorCross',
                setFieldName: true,
                fieldName: 'Motor cross or enduros?',
                formGroup: NonMedPBRFormGroup,
                options: BOOLEAN
            }
        },
        {
            size: 4,
            field: {
                type: 'segment',
                attName: 'motorRacingSandRacing',
                setFieldName: true,
                fieldName: 'Sand racing?',
                formGroup: NonMedPBRFormGroup,
                options: BOOLEAN
            }
        }
    ],
    isHidden: true
}
export const amatuerMotorRacing3: RowGeneratorSpecs = {// FIELDS: motorRacingSpeedways, motorRacingTrials
    columns: [
        {
            size: 4,
            field: {
                type: 'segment',
                attName: 'motorRacingSpeedways',
                setFieldName: true,
                fieldName: 'Speedways?',
                formGroup: NonMedPBRFormGroup,
                options: BOOLEAN
            }
        },
        {
            size: 4,
            field: {
                type: 'segment',
                attName: 'motorRacingTrials',
                setFieldName: true,
                fieldName: 'Trial?',
                formGroup: NonMedPBRFormGroup,
                options: BOOLEAN
            }
        }
    ],
    isHidden: true
}

export const didMotorRacingFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE
            columns: [{ text: 'Motor Racing' }],
            class: 'form-sub-section-title'
        },
        {
            columns: [
                OccupationSpecs.motorRacingTypeColSpecs,
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'motorRacingParticipation',
                        formGroup: NonMedPBRFormGroup,
                        interface: 'popover',
                        fieldName: 'Do you participate in:',
                        setFieldName: true,
                        options: [
                            { key: 'LCLEVNTS', value: 'Local events' },
                            { key: 'INTLEVNTS', value: 'International Events' },
                            { key: 'BOTH', value: 'Both' }
                        ]
                    }
                }
            ]
        },
        {
            columns: [
                OccupationSpecs.HaveIntentionColSpecs
            ]
        },
        amatuerMotorRacing1,
        amatuerMotorRacing2,
        amatuerMotorRacing3,
        professionalMotorRacingRow
    ],
    isHidden: true
};

export const didMountaineeringFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE
            columns: [{ text: 'Mountaineering/Trekking' }],
            class: 'form-sub-section-title'
        },
        { columns: [{ text: `Which of the following activities are you usually engaged in:` }] },
        {// FIELDS: joinedMountainHiking, joinedRockClimbing
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'joinedMountainHiking',
                        fieldName: 'Mountain hiking/trekking without climbing',
                        formGroup: NonMedPBRFormGroup
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'joinedRockClimbing',
                        fieldName: 'Rock Climbing',
                        formGroup: NonMedPBRFormGroup
                    }
                }
            ]
        },
        {// FIELDS: joinedBouldering, joinedFreeSoloDiving
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'joinedBouldering',
                        fieldName: 'Bouldering',
                        formGroup: NonMedPBRFormGroup
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'checkbox',
                        attName: 'joinedFreeSoloClimbing',
                        fieldName: 'Free Solo Climbing',
                        formGroup: NonMedPBRFormGroup
                    }
                }
            ]
        }
    ],
    isHidden: true
};
export const didParachutingFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE
            columns: [{ text: 'Parachuting' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: parachuteType, parachuteNo
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'select',
                        attName: 'parachuteType',
                        formGroup: NonMedPBRFormGroup,
                        interface: 'popover',
                        setFieldName: true,
                        fieldName: 'What type of jump are you usually engage in?',
                        options: [
                            { key: 'STTCLNE', value: 'Static Line' },
                            { key: 'FREEFLL', value: 'Free-fall' },
                            { key: 'BOTH', value: 'Both' }
                        ]
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'number',
                        attMaxLength: 2,
                        attName: 'parachuteNo',
                        fieldName: 'Plese indicate the number of jumps per year',
                        setFieldName: true,
                        formGroup: NonMedPBRFormGroup
                    }
                }
            ]
        }
    ],
    isHidden: true
};
export const didPowerboatRacingFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE
            columns: [{ text: 'Powerboat Racing' }],
            class: 'form-sub-section-title'
        },
        { columns: [{ text: `What types of powerboat racing are you usually in?` }] },
        {// FIELDS: joinedOffShoreRacing, joinedCatamarans, joinedDrugBoat
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'checkbox',
                        attName: 'joinedOffShoreRacing',
                        fieldName: 'Offshore racing',
                        formGroup: NonMedPBRFormGroup
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'checkbox',
                        attName: 'joinedCatamarans',
                        fieldName: 'Catamarans',
                        formGroup: NonMedPBRFormGroup
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'checkbox',
                        attName: 'joinedDrugBoat',
                        fieldName: 'Drug boats',
                        formGroup: NonMedPBRFormGroup
                    }
                }
            ]
        },
        {// FIELDS: joinedHydroplane, joinedCircuitRacingMono
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'checkbox',
                        attName: 'joinedHydroplane',
                        fieldName: 'Hydroplane racing',
                        formGroup: NonMedPBRFormGroup
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'checkbox',
                        attName: 'joinedCircuitRacingMono',
                        fieldName: 'Circuit racing-mono hull craft',
                        formGroup: NonMedPBRFormGroup
                    }
                }
            ]
        }
    ],
    isHidden: true
};
export const didyachtingFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE
            columns: [{ text: 'Yachting' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: yachtingEngagementReason, yachtType, yachtingCrewNo
            columns: [
                {
                    size: 5,
                    field: {
                        type: 'select',
                        attName: 'yachtingEngagementReason',
                        formGroup: NonMedPBRFormGroup,
                        interface: 'popover',
                        setFieldName: true,
                        fieldName: `Do you sail competitively or purely for pleasure?`,
                        options: [
                            { key: 'PLSRRLXTN', value: 'PLEASURE/RELAXATION' },
                            { key: 'SPRT', value: 'SPORT/COMPETITIVE SAILING' },
                        ]
                    }
                },
                {
                    size: 3,
                    field: {
                        type: 'select',
                        attName: 'yachtType',
                        formGroup: NonMedPBRFormGroup,
                        interface: 'popover',
                        setFieldName: true,
                        fieldName: 'Type of yachting',
                        options: [
                            { key: 'Offshore', value: 'Offshore' },
                            { key: 'Inshore', value: 'Inshore' },
                        ]
                    }
                },
                {
                    size: 3,
                    field: {
                        type: 'select',
                        attName: 'yachtingCrewNo',
                        formGroup: NonMedPBRFormGroup,
                        interface: 'popover',
                        setFieldName: true,
                        fieldName: 'Number of crew',
                        options: [
                            { key: 'SNGL', value: 'Single' },
                            { key: 'DBLE', value: 'Double' },
                            { key: 'THRTSX', value: '3-6' },
                            { key: 'SVNOMRE', value: '7 or more' },
                        ]
                    }
                },
            ]
        }
    ],
    isHidden: true
};
export const didMartialArtsFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE
            columns: [{ text: 'Martial Arts' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: martialArtsType, martialArtsFreq, martialArtsWeapon
            columns: [
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attMaxLength: 50,
                        attName: 'martialArtsType',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: true,
                        fieldName: 'What form of Martial Arts do you engaged in?'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'number',
                        attMaxLength: 2,
                        attName: 'martialArtsFreq',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: true,
                        fieldName: 'How often do you engage or compete?'
                    }
                },
                {
                    size: 4,
                    field: {
                        type: 'text',
                        attMaxLength: 50,
                        attName: 'martialArtsWeapon',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: true,
                        fieldName: 'Types of weapons do you use'
                    }
                }
            ]
        }
    ],
    isHidden: true
};
export const didRaftingFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// TITLE
            columns: [{ text: 'Rafting' }],
            class: 'form-sub-section-title'
        },
        {// FIELDS: raftingType, raftingFreq
            columns: [
                {
                    size: 6,
                    field: {
                        type: 'text',
                        attMaxLength: 50,
                        attName: 'raftingType',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: true,
                        fieldName: 'What type of Rafting do you engage in?'
                    }
                },
                {
                    size: 6,
                    field: {
                        type: 'number',
                        attMaxLength: 2,
                        attName: 'raftingFreq',
                        formGroup: NonMedPBRFormGroup,
                        setFieldName: true,
                        fieldName: 'How often do you engage or compete?'
                    }
                }
            ]
        }
    ],
    isHidden: true
};

export const genericSportTitleMapper: any = { 
    Aerodium: 'Aerodium', 
    BallSport: 'Basketball/Rugby/Football/Soccer/Polo/Hockey', 
    Conyoneering: 'Canyoning/Canyoneering', 
    Biking: 'Biking', 
    IceHockey: 'Ice hockey/Ice Skating', 
    Wrestling: 'Wrestling/Gymnastics', 
    BungeeJumping: 'Bungee Jumping', 
    HorseRacing: 'Horse Racing', 
    Canyoning: 'Canyoning', 
    MountainBiking: 'Mountain Biking', 
    Sandboarding: 'Sandboarding', 
    SeaKayaking: 'Canoe/ Sea Kayaking', 
    Surfing: 'Surfing/Wakeboarding', 
    Triathlon: 'Triathlon', 
    Jetski: 'Jet Skiing, more than once a year',
    OtherSports: 'Other Sports/Hobbies', 
};

export const clearValidatorsForNonParentActivities = (selectedSport: string) => {
    if (true) { //parentValue
        let haveAnswered: any = false; 
        PBRACTIVITIES.forEach(field => { 
          if (field) { 
            haveAnswered = haveAnswered || NonMedPBRFormGroup.get(field).value === true; 
          }   
        }); 
   
        PBRACTIVITIES.forEach(field => { 
          if (field) { 
            if (haveAnswered !== null && JSON.parse(haveAnswered) === true) { 
                NonMedPBRFormGroup.controls[field].clearValidators(); 
            } else { 
                NonMedPBRFormGroup.controls[field].setValidators([Validators.required]); 
                NonMedPBRFormGroup.controls[field].reset();
            } 
            NonMedPBRFormGroup.controls[field].updateValueAndValidity(); 
            NonMedPBRFormGroup.controls[field].markAsTouched(); 
          } 
        }); 
    } 
}

export const createGenericRowArray = (selectedSport: string) => {
    if (NonMedPBRFormGroup.value[`otherSportEngagementReason`] === undefined) {
        NonMedPBRFormGroup.addControl(`otherSportEngagementReason`, new FormControl(''));
        NonMedPBRFormGroup.addControl(`otherSportFreq`, new FormControl(''));
    }
    const rowArr = [];
    const tempSport = [];
    let sportTitle;
    let flag: boolean = true;
    Object.getOwnPropertyNames(genericSportTitleMapper).forEach(sport => {
        if (NonMedPBRFormGroup.value[`did${sport}`] && JSON.parse(NonMedPBRFormGroup.value[`did${sport}`])) {
            flag = flag && !(NonMedPBRFormGroup.value[`did${sport}`] || false);
            tempSport.push(genericSportTitleMapper[sport]);
            sportTitle = tempSport.join(', ');
        }
    });

    if(tempSport.length !== 0) {
        NonMedPBRFormGroup.controls[`otherSportEngagementReason`].setValidators([Validators.required]); 
        NonMedPBRFormGroup.controls[`otherSportFreq`].setValidators([Validators.required]);   
    } else {
        NonMedPBRFormGroup.controls[`otherSportEngagementReason`].clearValidators(); 
        NonMedPBRFormGroup.controls[`otherSportFreq`].clearValidators();
    }
    NonMedPBRFormGroup.controls[`otherSportEngagementReason`].updateValueAndValidity(); 
    NonMedPBRFormGroup.controls[`otherSportFreq`].updateValueAndValidity();

    if (true) { //parentValue
        let haveAnswered: any = false; 
        PBRACTIVITIES.forEach(field => { 
          if (field) { 
            haveAnswered = haveAnswered || NonMedPBRFormGroup.get(field).value === true; 
          }   
        }); 
   
        PBRACTIVITIES.forEach(field => { 
          if (field) { 
            if (haveAnswered !== null && JSON.parse(haveAnswered) === true) { 
                NonMedPBRFormGroup.controls[field].clearValidators(); 
            } else { 
                NonMedPBRFormGroup.controls[field].setValidators([Validators.required]);
                NonMedPBRFormGroup.controls[field].reset();
            } 
            NonMedPBRFormGroup.controls[field].updateValueAndValidity(); 
            NonMedPBRFormGroup.controls[field].markAsTouched(); 
          } 
        }); 
    } 

    if(!NOADDITIONALQUESTIONSACTIVITY.includes(selectedSport)) {
        rowArr.push({
            columns: [{ text: sportTitle }],
            class: 'form-sub-section-title',
            isHidden: flag
        });
    
        rowArr.push(
            {
                columns: [
                    {
                        size: 6,
                        field: {
                            type: 'select',
                            attName: `otherSportEngagementReason`,
                            formGroup: NonMedPBRFormGroup,
                            interface: 'popover',
                            setFieldName: true,
                            fieldName: `Do you engage purely for pleasure, as an instructor or competitively?`,
                            options: [
                                { key: 'PLSRRLXTN', value: 'PLEASURE/RELAXATION' },
                                { key: 'SPRT', value: 'SPORT/COMPETITIVE SAILING' },
                                { key: 'INSTRCTR', value: 'INSTRUCTOR' }
                            ]
                        }
                    },
                    {
                        size: 6,
                        field: {
                            type: 'number',
                            attMaxLength: 2,
                            attName: `otherSportFreq`,
                            formGroup: NonMedPBRFormGroup,
                            setFieldName: true,
                            fieldName: 'How often do you engage or compete?'
                        }
                    }
                ],
                isHidden: flag
            }
        );
        GenericSportFormSpecs.rows = rowArr;
    }
};
export const GenericSportFormSpecs: FormGeneratorSpecs = {
    rows: []
};

export const IllnessesRow: RowGeneratorSpecs = {
    columns: [
        {
            size: 6,
            field: {
                type: 'date',
                attName: 'illnessWhen',
                formGroup: NonMedPBRFormGroup,
                setFieldName: true,
                fieldName: 'When?',
                dateFormatOutput: 'MM/DD/YYYY'
            }
        },
        {
            size: 6,
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'illnessHow',
                formGroup: NonMedPBRFormGroup,
                setFieldName: true,
                fieldName: 'How?',
                options: ILLNESS_CAUSE
            }
        },
        {
            size: 6,
            text: 'What injuries did you sustain?'
        },
        {
            size: 6,
            text: ''
        },
        {
            size: 4,
            field: {
                type: 'checkbox',
                fieldName: 'Bone Fracture Or Dislocation',
                setFieldName: false,
                formGroup: NonMedPBRFormGroup,
                attName: 'illnessInjuryBone'
            }
        },
        {
            size: 4,
            field: {
                type: 'checkbox',
                fieldName: 'Loss Of Limb Or Body Part',
                setFieldName: false,
                formGroup: NonMedPBRFormGroup,
                attName: 'illnessInjuryLimb'
            }
        },
        {
            size: 4,
            field: {
                type: 'checkbox',
                fieldName: 'Spinal Cord Injury',
                setFieldName: false,
                formGroup: NonMedPBRFormGroup,
                attName: 'illnessInjurySpinal'
            }
        },
        {
            size: 4,
            field: {
                type: 'checkbox',
                fieldName: 'Head Trauma',
                setFieldName: false,
                formGroup: NonMedPBRFormGroup,
                attName: 'illnessInjuryHead'
            }
        },
        {
            size: 4,
            field: {
                type: 'checkbox',
                fieldName: 'Wound / Laceration',
                setFieldName: false,
                formGroup: NonMedPBRFormGroup,
                attName: 'illnessInjuryWound'
            }
        },
        {
            size: 4,
            field: {
                type: 'checkbox',
                fieldName: 'Organ Damage',
                setFieldName: false,
                formGroup: NonMedPBRFormGroup,
                attName: 'illnessInjuryOrgan'
            }
        },
        {
            size: 6,
            text: 'What kind of treatment did you receive or are you receiving?'
        },
        {
            size: 6,
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'illnessTreatment',
                formGroup: NonMedPBRFormGroup,
                options: ILLNESS_TREATMENT
            }
        },
        {
            size: 6,
            text: 'Have you fully recovered or any sequels to the injury remain?'
        },
        {
            size: 6,
            field: {
                type: 'select',
                interface: 'popover',
                attName: 'illnessHaveRecovered',
                formGroup: NonMedPBRFormGroup,
                options: ILLNESS_RECOVERY
            }
        },
        {
            size: 6,
            text: 'Is an operation contemplated?'
        },
        {
            size: 6,
            field: {
                type: 'segment',
                attName: 'illnessIsContemplated',
                formGroup: NonMedPBRFormGroup,
                options: BOOLEAN
            }
        }
    ],
    isHidden: true
};

export const HaveSufferedFormSpecs: FormGeneratorSpecs = {
    rows: [
        {// FIELDS: raftingType, raftingFreq
            columns: [
                {
                    size: 6,
                    text: 'Have you ever suffered any illness or injury as a result of your occupation or avocation?'
                },
                {
                    size: 6,
                    field: {
                        type: 'segment',
                        attName: 'haveSuffered',
                        formGroup: NonMedPBRFormGroup,
                        options: BOOLEAN,
                        conditionalFunction: () => {
                            IllnessesRow.isHidden = NonMedPBRFormGroup.get('haveSuffered').value === 'N';
                        }
                    }
                }
            ]
        },
        IllnessesRow
    ]
};


export const Past5YrFormSpecsColumn1: RowGeneratorSpecs = {
    columns: [
        {
            size: 6,
            text: 'What is your rank/position?'
        },
        {
            size: 6,
            field: {
                attName: 'militaryPastRank',
                type: 'select',
                formGroup: NonMedPBRFormGroup,
                interface: 'popover',
                options: PAST_MILITARY_RANK
            }
        },
    ],
    isHidden: true
};

export const Past5YrFormSpecsColumn2: RowGeneratorSpecs = {
    columns: [
        {
            size: 6,
            text: 'What is your rank/position?'
        },
        {
            size: 6,
            field: {
                attName: 'politicsPastPosition',
                type: 'select',
                formGroup: NonMedPBRFormGroup,
                interface: 'popover',
                options: PAST_POLITICS_POSITION
            }
        }
    ],
    isHidden: true
};

export const Past5YrFormSpecs: FormGeneratorSpecs = {
    rows: [
        {
            columns: [{ text: 'In the past 5 years, has the proposed Insured been:' }],
            class: 'form-sub-section-title'
        },
        {// FIELD: changeOccupation, occupation
            columns: [
                {
                    size: 6,
                    text: 'a member of the military or police or any militant or paramilitary organization?'
                },
                {
                    size: 6,
                    field: {
                        attName: 'haveBeenMilitary',
                        type: 'segment',
                        formGroup: NonMedPBRFormGroup,
                        options: BOOLEAN,
                        conditionalFunction: () => {
                            Past5YrFormSpecsColumn1.isHidden = NonMedPBRFormGroup.get('haveBeenMilitary').value === 'N';
                        }
                    }
                }
            ]
        },
        Past5YrFormSpecsColumn1,
        {// FIELD: changeOccupation, occupation
            columns: [
                {
                    size: 6,
                    text: 'active in politics as candidate or leader?'
                },
                {
                    size: 6,
                    field: {
                        attName: 'haveActivePolitics',
                        type: 'segment',
                        formGroup: NonMedPBRFormGroup,
                        options: BOOLEAN,
                        conditionalFunction: () => {
                            Past5YrFormSpecsColumn2.isHidden = NonMedPBRFormGroup.get('haveActivePolitics').value === 'N';
                        }
                    }
                }
            ]
        },
        Past5YrFormSpecsColumn2
    ]
};

export function checkForeignTravelCountry(isRequired: boolean = true) {  
    const foreignTravelCountry = NonMedPBRFormGroup.get('foreignTravelCountry').value;  
  
  
    ForeginCountriesTable.additionalValMsg = [];  
    let errors = {}  
  
    if (isRequired && foreignTravelCountry.length === 0) {  
        ForeginCountriesTable.additionalValMsg.push('Required to have at least one foreign travel country');  
        errors['required'] = true;  
    }  
    if (Object.keys(errors).length === 0) {  
        NonMedPBRFormGroup.get('foreignTravelCountry').setErrors(null)  
        ForeginCountriesTable.additionalValMsg = [];  
    } else {  
        NonMedPBRFormGroup.get('foreignTravelCountry').setErrors(errors)  
    }  
}  

