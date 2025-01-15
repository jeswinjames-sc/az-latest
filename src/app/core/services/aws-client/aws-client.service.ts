import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import AWS from 'aws-sdk/global';
import S3 from 'aws-sdk/clients/s3';
import { Storage } from '@ionic/storage';
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import CognitoIdentity from 'aws-sdk/clients/cognitoidentity';
import { ModalController } from '@ionic/angular';
import { ModalViewComponent } from '@components/modal-view/modal-view.component';

interface AwsApiKey {
  apiVersion: string,
  accessKeyId: string;
  secretAccessKey: string;
  sessionToken: string;
  region: string;
}

@Injectable({
  providedIn: 'root'
})
export class AwsClientService {

  public awsApiKey: AwsApiKey;
  public awsS3Client: any;
  awsToken: string;
  awsIdentityId: string;
  region = 'ap-southeast-1';
  

  constructor(
    private storage: Storage,
    private mdlCtrl: ModalController
  ) {}

  async retrieveAWSCredentials(awsData) {
    const { token, identityId } = awsData.data.aws;
    AWS.config.region = 'ap-southeast-1';
    const params = {
      IdentityId: identityId,
      Logins : {
        'cognito-identity.amazonaws.com': token
      }
    }
    
    let cognitoClient = new CognitoIdentity();
    cognitoClient.getCredentialsForIdentity(params, async (err, data) => {
      if(err){
        console.log("CREDENTIAL ERROR: ",err, err.stack); 
      } else {
        if(data && Object.keys(data).length > 0) {
          await this.setAwsCreds(data);
          if(!this.testTokenValidity()) {  
            this.promptPasswordModal();
          }
        }
      }  
    });
  }

  async testTokenValidity(key: string = environment.AWS.S3_TEST_OBJECT_URL, bucket: string = environment.AWS.S3_BUCKET_STAGING) {
    let params = {
      Bucket: bucket,
      Key: key, // file path  
      Expires: 300 // 5 mins
    };
    const awsCreds = await this.getAwsCreds();
    if(!!awsCreds){
      const awsS3Client = new S3(awsCreds) //auth aws
      let url = awsS3Client.getSignedUrl('getObject', params);
      return url ? true : false;
    } else {
      return false;
    }
  }

  async initializaAWS() {
    const awsCreds = await this.getAwsCreds();
    if(!!awsCreds){
      //auth aws
      console.log("LOG initializaAWS");
      this.awsS3Client = new S3(awsCreds);
    } 
  }

  async setAwsCreds(awsCreds) {
    if(awsCreds && Object.keys(awsCreds).length > 0) {
      await this.storage.set(SETTING_KEYS.AWS_CREDENTIALS, awsCreds);
      const { AccessKeyId, SecretKey, SessionToken } = awsCreds.Credentials;
 
      this.awsApiKey = {
        apiVersion: '2006-03-01',
        accessKeyId: AccessKeyId,
        secretAccessKey: SecretKey,
        sessionToken: SessionToken,
        region: this.region
      }
    }
  }

  async promptPasswordModal() {
    const modalProps = {
      type: 'password',
      data: 'AWS Credentials are invalid. Unable to proceed. Please log in again to refresh credentials.'
    }
    const isModalOpened = await this.mdlCtrl.getTop();
    if(!isModalOpened){
      let pwMdl = await this.mdlCtrl.create({
        component: ModalViewComponent,
        backdropDismiss: false,
        componentProps: {
          modalProps: modalProps,
          modalCtrl: this.mdlCtrl,
        },
        cssClass: 'password-mdl'
      });
      return await pwMdl.present();
    }
  }

  async getAwsCreds() {
    let awsCreds = await this.storage.get(SETTING_KEYS.AWS_CREDENTIALS);
    if(awsCreds && Object.keys(awsCreds).length > 0  ) {
      return {
        apiVersion: '2006-03-01',
        accessKeyId: awsCreds.Credentials.AccessKeyId,
        secretAccessKey: awsCreds.Credentials.SecretKey,
        sessionToken: awsCreds.Credentials.SessionToken,
        region: this.region
      }
    } return false;
  }

  async getAwsToken() {
    return await this.storage.get(SETTING_KEYS.AWS_TOKEN);
  }

  async getAwsIdentityId() {
    return await this.storage.get(SETTING_KEYS.AWS_IDENTITY_ID);
  }
}

