import { FieldSpecs } from '@models/specs/field-specs';
import { BOOLEAN } from '@utils/constants/options/segment/boolean';
import * as EAPP_OPTIONS from '@utils/constants/options/segment/e-app-options';

export let armyBranchField: FieldSpecs = {
    type: 'select',
    attName: 'armyBranch',
    setFieldName: true,
    interface: 'popover',
    fieldName: 'In what branch of the armed forces are you serving?',
    options: [
        { key: 'army', value: 'Army' },
        { key: 'navy', value: 'Navy' },
        { key: 'airForce', value: 'Air Force' },
        { key: 'notionalPolice', value: 'National Police' }
    ]
};

export let rankField: FieldSpecs = {
    type: 'select',
    attName: 'rank',
    setFieldName: true,
    interface: 'popover',
    fieldName: 'What is your rank?',
    options: [
        {
            key: 'Below Captain/ Below Senior Inspector',
            value: 'Below Captain/ Below Senior Inspector'
        },
        {
            key: 'Captain & Higher/ Senior Inspector & Higher',
            value: 'Captain & Higher/ Senior Inspector & Higher'
        },
    ]
};

export const airlineJobField: FieldSpecs = {
    type: 'select',
    attName: 'airlineJob',
    setFieldName: true,
    interface: 'popover',
    fieldName: 'Are you an airline pilot or crew member or ground crew?',
    options: [
        { key: 'Airline Pilot', value: 'Airline Pilot' },
        { key: 'Crew', value: 'Crew' },
        { key: 'Ground Crew', value: 'Ground Crew' }
    ]
};

export const aircraftTypeField: FieldSpecs = {
    type: 'select',
    attName: 'aircraftType',
    setFieldName: true,
    interface: 'popover',
    fieldName: 'What types of aircraft do you presently fly?',
    options: [
        { key: '1', value: 'Jetliner/International' },
        { key: '2', value: 'Domestic/Local' },
        { key: '3', value: 'Non-schedule chartered flights' },
        { key: '4', value: 'Helicopter' },
        { key: '5', value: 'Test pilot/flight instructor' }
    ]
};

export const numberOfFlightExpirienceField: FieldSpecs = {
    type: 'select',
    attName: 'numberOfFlightExpirience',
    setFieldName: true,
    interface: 'popover',
    fieldName: 'Number of your flying or expected flying hours per annum?',
    options: [
        { key: '1', value: 'Less than 25 hours' },
        { key: '2', value: '26 up to 100 hours' },
        { key: '3', value: '101 to 200 hours' },
        { key: '4', value: 'More than 200 hours' }
    ]
};

export const vesselOwnerField: FieldSpecs = {
    type: 'text',
    attMaxLength: 150,
    attName: 'vesselOwner',
    setFieldName: true,
    fieldName: 'Owner name of the vessel'
};

export const vesselTypeField: FieldSpecs = {
    type: 'select',
    attName: 'vesselType',
    setFieldName: true,
    interface: 'popover',
    fieldName: 'Type of vessel',
    options: EAPP_OPTIONS.TYPE_OF_VESSEL
};

export const vesselCountryField: FieldSpecs = {
    type: 'selectize',
    attName: 'vesselCountry',
    setFieldName: true,
    interface: 'popover',
    fieldName: 'In which country is the vessel registered?',
    options: []
};

export const isPoliticallySensitiveField: FieldSpecs = {
    type: 'select',
    attName: 'isPoliticallySensitive',
    setFieldName: true,
    interface: 'popover',
    fieldName: 'Is it likely that the vessel may operate in any politically sensitive area?',
    options: BOOLEAN
};
