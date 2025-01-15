import { NonMedFormGroup } from '@form-group/e-app/non-med-form-group';
import { ColumnGeneratorSpecs } from '@models/specs/column-generator-specs';
import { MOTOR_RACE_TYPE } from '@utils/constants/options/select/e-application/occupation-options';

export const didBoxingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didBoxing',
        fieldName: 'Boxing',
        formGroup: NonMedFormGroup
    }
};

export const didMartialArtsColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didMartialArts',
        fieldName: 'Martial Arts',
        formGroup: NonMedFormGroup
    }
};

export const didHangglidingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didHanggliding',
        fieldName: 'Hang Gliding/Parasailing',
        formGroup: NonMedFormGroup
    }
};

export const didMountaineeringColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didMountaineering',
        fieldName: 'Mountaineering/Trekking',
        formGroup: NonMedFormGroup
    }
};

export const didyachtingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didyachting',
        fieldName: 'Yachting',
        formGroup: NonMedFormGroup
    }
};

export const didRaftingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didRafting',
        fieldName: 'Rafting',
        formGroup: NonMedFormGroup
    }
};

export const didDivingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didDiving',
        fieldName: 'Diving/Snorkelling, more than once a year',
        formGroup: NonMedFormGroup
    }
};

export const didMotorRacingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didMotorRacing',
        fieldName: 'Motor Racing',
        formGroup: NonMedFormGroup
    }
};

export const didParachutingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didParachuting',
        fieldName: 'Parachuting',
        formGroup: NonMedFormGroup
    }
};

export const didPowerboatRacingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didPowerboatRacing',
        fieldName: 'Powerboat Racing',
        formGroup: NonMedFormGroup
    }
};

export const motorRacingTypeColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'select',
        attName: 'motorRacingType',
        formGroup: NonMedFormGroup,
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
        formGroup: NonMedFormGroup
    }
};

export const didCarRacingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didCarRacing',
        fieldName: 'Car Racing',
        formGroup: NonMedFormGroup
    }
};

export const didPrivateFlyingColSpecs: ColumnGeneratorSpecs = {
    size: 6,
    field: {
        type: 'checkbox',
        attName: 'didPrivateFlying',
        fieldName: 'Private Flying',
        formGroup: NonMedFormGroup
    }
};
