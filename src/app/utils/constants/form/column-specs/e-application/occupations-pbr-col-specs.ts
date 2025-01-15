import { NonMedPBRFormGroup } from '@form-group/e-app/non-med-pbr-form-group';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { MOTOR_RACE_TYPE } from '@utils/constants/options/select/e-application/occupation-options';

export const didBoxingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didBoxing',
        fieldName: 'Boxing',
        formGroup: NonMedPBRFormGroup
    }
};

export const didMartialArtsColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didMartialArts',
        fieldName: 'Martial Arts',
        formGroup: NonMedPBRFormGroup
    }
};

export const didHangglidingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didHanggliding',
        fieldName: 'Hang Gliding/Parasailing',
        formGroup: NonMedPBRFormGroup
    }
};

export const didMountaineeringColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didMountaineering',
        fieldName: 'Mountaineering/Trekking',
        formGroup: NonMedPBRFormGroup
    }
};

export const didyachtingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didyachting',
        fieldName: 'Yachting',
        formGroup: NonMedPBRFormGroup
    }
};

export const didRaftingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didRafting',
        fieldName: 'Rafting',
        formGroup: NonMedPBRFormGroup
    }
};

export const didDivingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didDiving',
        fieldName: 'Diving/Snorkelling, more than once a year',
        formGroup: NonMedPBRFormGroup
    }
};

export const didMotorRacingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didMotorRacing',
        fieldName: 'Motor Racing',
        formGroup: NonMedPBRFormGroup
    }
};

export const didParachutingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didParachuting',
        fieldName: 'Parachuting',
        formGroup: NonMedPBRFormGroup
    }
};

export const didPowerboatRacingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didPowerboatRacing',
        fieldName: 'Powerboat Racing',
        formGroup: NonMedPBRFormGroup
    }
};

export const motorRacingTypeColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'select',
        attName: 'motorRacingType',
        formGroup: NonMedPBRFormGroup,
        interface: 'popover',
        fieldName: 'Are you Engaged in:',
        setFieldName: true,
        options: MOTOR_RACE_TYPE
    }
};

export const HaveIntentionColSpecs: ColumnGeneratorSpecs = {
    text: 'Do you have any intention of engaging into the following',
    isHidden: true
};

export const didMotorboatRacingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didMotorboatRacing',
        fieldName: 'Motorboat Racing',
        formGroup: NonMedPBRFormGroup
    }
};

export const didCarRacingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didCarRacing',
        fieldName: 'Car Racing',
        formGroup: NonMedPBRFormGroup
    }
};

export const didPrivateFlyingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didPrivateFlying',
        fieldName: 'Private Flying',
        formGroup: NonMedPBRFormGroup
    }
};