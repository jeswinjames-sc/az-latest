export const environment = {
  production: true,
  config: {
    apiUrl: 'https://azst.allianzpnblife.ph/zuul/api',
    androidVersionApiUrl: 'https://azst.allianzpnblife.ph/xzuul/api',
    whatsNewApiUrl: 'https://azst.allianzpnblife.ph/xzuul/api',
    isSITEnabled: false,
    isWSAlertEnable: false,
    GA_startTrackerWithId: 'UA-139168450-1',
    server: 'https://azst.allianzpnblife.ph',
    fingerprint: 'FD F2 B0 26 9B CA EC A9 6B 9C 1C BD 6C 4C 22 D0 20 21 EF 4F 37 37 F7 0D 40 04 9D 18 14 F5 07 EB',
    backgroundProcess: false,
    isDisableEnableIdleTime: true
  },
  awsEnabled: false,
  AWS: {
    AWS_REGION: 'ap-southeast-1',
    S3_BUCKET_CLEAN: 'az-journey-prod-clean',
    S3_BUCKET_STAGING: 'az-journey-prod-temp',
    S3_TEST_OBJECT_URL: 'https://az-journey-prod-temp.s3.ap-southeast-1.amazonaws.com/test.png'
  },
  env: 'PROD',
  envCode: '3',
  firebaseEnabled: false,
  firebase: {
    apiKey: "AIzaSyCNUs8S2ptHUI61AfBfhFad9xBjD4KxzWc",
    authDomain: "azjourneydev.firebaseapp.com",
    projectId: "azjourneydev",
    storageBucket: "azjourneydev.appspot.com",
    messagingSenderId: "850867503027",
    appId: "1:850867503027:web:fa5e76ac07e19d663655c6",
    measurementId: "G-Y63H65RF71"
  },
  dynatraceEnabled: true,
  journeyuiv2: true,
  accelarationAJ: {
    expiry: null,
    expired: null,
    expiring: null,
    isBenchMark: false
  }
};
