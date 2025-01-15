export const NEED_ANALYSIS_TYPE = {
    SAVINGS: {
      CODE: 'SAV',
      GOAL_TYPES: {
        MAR: 'MAR',
        HOU: 'HOU',
        CAR: 'CAR',
        TRV: 'TRV',
        WLTMGT: 'WLTMGT',
        STRFAM: 'STRFAM',
        PERDEV: 'PERDEV'
      },
      GOAL_TYPE_EQUIVALENT: {
        MAR: 'Marriage',
        HOU: 'House',
        CAR: 'Car',
        TRV: 'Travel',
        WLTMGT: 'Savings & Investment',
        STRFAM: 'Family',
        PERDEV: 'Personal Development'
      }
    },
    PROTECTION: {
      CODE:'PRT',
      GOAL_TYPES: {
        INCREP: 'INCREP'
      }
    },
    HEALTH: {
      CODE: 'HLTH',
      GOAL_TYPES: {
        HTHFND: 'HTHFND'
      }
    },
    EDUCATION: {
      CODE: 'EDU',
      GOAL_TYPES: {
        PHUNI: 'PHUNI',
        INTUNI: 'INTUNI',
        IVYSCH: 'IVYSCH'
      },
      GOAL_TYPE_EQUIVALENT: {
        PHUNI: 'Philippine College/University',
        INTUNI: 'International University',
        IVYSCH: 'Ivy Leauge School'
      },
      DEFAULT_TUITION: {
        PHUNI: '250,000',
        INTUNI: '3,000,000',
        IVYSCH: '5,000,000'
      }
    },
    ESTATE_PLANNING:{
      CODE:'EST',
      GOAL_TYPES: {
          ESTPRO: 'ESTPRO'
        }
    },
    RETIREMENT: {
      CODE:'RET',
      GOAL_TYPES: {
        RETFND: 'RETFND'
      }
    }
  };
