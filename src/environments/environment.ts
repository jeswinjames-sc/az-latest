// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  config: {
    apiUrl: 'https://10.200.10.137:8080/zuul/api',
    androidVersionApiUrl: 'https://10.200.10.137:8080/xzuul/api',
    whatsNewApiUrl: 'https://ap1-gwuat.allianzpnblife.ph/xzuul/api',
    isSITEnabled: true,
    isWSAlertEnable: true,
    GA_startTrackerWithId: 'UA-139069681-1',
    server: 'https://10.200.10.137:8080/',
    fingerprint: '17 33 14 39 BD 7B D0 F6 04 0E B8 4E C0 BB F2 6C FA 54 C5 03 58 E3 45 92 5E 2A 74 89 3F 77 86 AE',
    backgroundProcess: false,
    isDisableEnableIdleTime: true
  },
  awsEnabled: false,
  AWS: {
    AWS_REGION: 'ap-southeast-1',
    S3_BUCKET_CLEAN: 'az-journey-non-prod-clean',
    S3_BUCKET_STAGING: 'az-journey-non-prod-main',
    S3_TEST_OBJECT_URL: 'https://allianz-journey-develop.s3.ap-southeast-1.amazonaws.com/test/test.png'
  },
  envCode: null,
  env: null,
  firebaseEnabled: false,
  journeyuiv2: false,
  firebase: {},
  dynatraceEnabled: true,
  accelarationAJ: {
    expiry: null,
    expired: null,
    expiring: null,
    isBenchMark: null
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
