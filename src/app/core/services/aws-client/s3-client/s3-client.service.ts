import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import S3 from 'aws-sdk/clients/s3';
import { BehaviorSubject } from 'rxjs';
import { AwsClientService } from '../aws-client.service';

interface FileParams {
  ACL?: string;
  Bucket?: string;
  Key: string;
  Body: string;
  ContentEncoding?: string;
  ContentType: string;
}

@Injectable({
  providedIn: 'root'
})
export class S3ClientService {

  // awsS3Client: any;
  public awsS3UploadStatus$: BehaviorSubject<any> = new BehaviorSubject({});
  constructor(
    private awsClientService: AwsClientService
  ) {
    
  }
 
  async uploadFile(file, path, encoding = '', cleanBucket = false) {
    //upload to staging
    let params: FileParams = {
      Bucket: cleanBucket ? environment.AWS.S3_BUCKET_CLEAN : environment.AWS.S3_BUCKET_STAGING,
      Body: file,
      Key: `${path}/${file.name}`, // filename with path  
      ContentType: file.type,
    }

    if (encoding !== '') { // ContentEncoding: 'base64', generate key base on form control name and random number 
      params.Body = file.body
      params.ContentEncoding = encoding;
    }

    return this.upload(params)
  }

  // Below s3 upload have the checkFileInCleanBucket and Reupload logic
  async upload(params: FileParams) { // returns instance of s3client for upload progress status
    const awsS3Client = this.awsClientService.awsS3Client;
    if(awsS3Client) {
      return awsS3Client.upload(params, async (err: any, data: any) => {
        if (err) {
          this.awsS3UploadStatus$.next({ status: 'error', file: params.Key, err: err })
          return false;
        } else if(await this.checkFileInCleanBucket(data.Key)) {
          this.awsS3UploadStatus$.next({ status: 'success', file: params.Key, result: data })
          return true;
        } else {
          this.awsS3UploadStatus$.next({ status: 'reupload', file: params.Key, err: 'file does not exist in clean bucket.'})
          return true;
        }
      })
    }
  }

  async checkFileInCleanBucket(filePath: string) {
    if(filePath) {
      let isFileExist = await this.getHeadObject({Bucket: environment.AWS.S3_BUCKET_CLEAN,Key: filePath});
      let fileUrl = isFileExist ? await this.getCleanUrl(filePath) : false; //this will return signedUrl
      return fileUrl ? true : false;
    }
  }

  async checkFileInTempBucket(filePath: string) {
    if(filePath) {
     return await this.getHeadObject({Bucket: environment.AWS.S3_BUCKET_STAGING,Key: filePath});
    }
  }


  getStagingUrl(key: string) {
    const bucket = environment.AWS.S3_BUCKET_STAGING
    return this.download(key, bucket)
  }

  async getCleanUrl(key: string) {
    const bucket = environment.AWS.S3_BUCKET_CLEAN
    return await this.download(key, bucket)
  }


  async download(key: string, bucket: string = environment.AWS.S3_BUCKET_STAGING) {

    let params = {
      Bucket: bucket,
      Key: key, // file path  
      Expires: 300 // 5 mins
    };
    const awsS3Client = this.awsClientService.awsS3Client;
    return await awsS3Client.getSignedUrl('getObject', params);
  }

  
  async getHeadObject(params: any) : Promise<boolean>{ 
    return await new Promise(async (resolve) => {
      const awsS3Client = this.awsClientService.awsS3Client;

      await awsS3Client.headObject(params, async function (err, data) {  
        if (err) {  
          resolve(false);
        } else {  
          resolve(true);
        }
      });  
   })
  }

 
  // Do not delete this code . Draft for future use of dataDIrectory for storing data
  // async set(key, value) {
  //   try{
  //     return await this.file.writeFile(this.file.dataDirectory, key, value, {replace: true}); //.then(_ => console.log('Directory exists')).catch(err => console.log('Directory doesn\'t exist'));
  //   }catch(error){
  //     return false;
  //   }
  // }

  // async get(key) {
  //   return await this.file.readAsText(this.file.applicationDirectory,key);
  // }





}
