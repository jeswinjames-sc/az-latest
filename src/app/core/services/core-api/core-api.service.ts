import { environment } from '@environment/environment';
import { Injectable } from '@angular/core';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { Storage } from '@ionic/storage';
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import { Platform } from '@ionic/angular';


@Injectable({
  providedIn: 'root'
})
export class CoreApiService {
  token: string;
  agentNumberKey: string;
  headers: object;
  amId:string;

  constructor(
    private http: HTTP,
    private platform: Platform,
    private storage: Storage
  ) {
    this.setAuth();
  }

  async setAuth() {
    await this.platform.ready();
    this.token = await this.storage.get(SETTING_KEYS.TOKEN);
    this.amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
  }

  setHeaders(token:string = this.token) {
    this.headers = {
      'Content-Type': 'application/json',
      'Authorization': this.token,
      'X-Channel-ID': '1',
      'X-Request-ID': Math.floor(Math.random() * 1000000000).toString(),
      'Access-Control-Max-Age': "86400" 
    };
    return this.headers;
  }

  async getIRPQ(amId: number, token: any, page: number) {
    let response: any
    try {
      response = await this.http.get(`${environment.config.apiUrl}/accountmanager/sync?amid=${amId}&res=investmentprofile&page=${page}&size=100`, {}, this.setHeaders(token));
    } catch (error) {
      response = error
    }
    return response
  }

  /**
   * Leads from WebService
   * @param amId 
   * @param token 
   * @param page
   */
  async getLeads(amId: number, token: any, page?: number) {
    let response: any;
    try {
      response = await this.http.get(`${environment.config.apiUrl}/accountmanager/sync?amid=${amId}&res=lead&page=${page}&size=100`, {}, this.setHeaders(token));
    } catch (error) {
      response = error;
    }

    return response;
  }

  /**
   * 
   * @param amId 
   * @param token 
   * @param page
   */
  async getNeedsAnalysis(amId: number, token: any, page?: number) {
    let response: any;
    try {
      response = await this.http.get(`${environment.config.apiUrl}/accountmanager/sync?amid=${amId}&res=needanalysis&page=${page}&size=100`, {}, this.setHeaders(token));
    } catch (error) {
      response = error;
    }
    return response;
  }

  /**
   * 
   * @param amId 
   * @param token 
   * @param page
   */
  async getSalesIllustration(amId: number, token: any, page?: number) {
    let response: any;
    try {
      response = await this.http.get(`${environment.config.apiUrl}/accountmanager/sync?amid=${amId}&res=quotation&page=${page}&size=10`, {}, this.setHeaders(token));
    } catch (error) {
      response = error;
    }
    return response;
  }

  /**
   * 
   * @param amId 
   * @param token 
   * @param resourceType
   * @param page
   */
  async getFullSync(amId, resourceType, token, page) {
    let response: any
    try {
      this.http.clearCookies();
      this.http.setRequestTimeout(300);
      this.http.setDataSerializer('json');
      if (resourceType == 'quotation') {
        response = await this.http.get(`${environment.config.apiUrl}/accountmanager/sync?amid=${amId}&res=${resourceType}&page=${page}&size=10&planType=INSURANCE`, {}, this.setHeaders(token));
      } else {
        response = await this.http.get(`${environment.config.apiUrl}/accountmanager/sync?amid=${amId}&res=${resourceType}&page=${page}&size=10`, {}, this.setHeaders(token));
      }
    } catch (error) {
      response = error
    }
    return response
  }

  async getFullSyncV2(amId, resourceType, token, page) {
    let response: any
    try {
      this.http.clearCookies();
      this.http.setRequestTimeout(300);
      this.http.setDataSerializer('json');
      response = await this.http.get(`${environment.config.apiUrl.replace('/apixx', '').replace('/apiv2', '').replace('/api2', '').replace('/api', '')}/apiv2/accountmanager/sync?page=${page}&size=10&amid=${amId}&res=${resourceType}&planType=HEALTH`, {}, this.setHeaders(token));
    } catch (error) {
      response = error
    }
    return response
  }

  async setDeltaSync(resourceType, request) {
    let response: any
    try {
      this.http.setDataSerializer('json');
      this.http.clearCookies();
      this.http.setRequestTimeout(5000);
      response = await this.http.post(`${environment.config.apiUrl}/accountmanager/sync?amid=${this.amId}&res=${resourceType}`, request, this.setHeaders());
    } catch (error) {
      response = error
    }
    return response;
  }

  async setDeltaSyncV2( resourceType, request) {
    let response: any
    try {
      this.http.setDataSerializer('json');
      this.http.clearCookies();
      this.http.setRequestTimeout(5000);
      response = await this.http.post(`${environment.config.apiUrl.replace('/apixx', '').replace('/apiv2', '').replace('/api2', '').replace('/api', '')}/apiv2/accountmanager/sync?amid=${this.amId}&res=${resourceType}`, request, this.setHeaders());
    } catch (error) {
      response = error
    }
    return response;
  }

  /**
   * Leads from WebService
   * @param amId 
   * @param token 
   * @param page
   */
  async getEAPP(amId: number, token: any, page: number) {
    let response: any;
    try {
      response = await this.http.get(`${environment.config.apiUrl}/accountmanager/sync?amid=${amId}&res=application&page=${page}&size=20`, {}, this.setHeaders(token));
    } catch (error) {
      response = error;
    }

    return response;
  }


  async uploadLogs(fileName: string, base64Log: string, amId, token) {

    const request = {
      documentType: 'MOBILE_LOG',
      text: fileName,
      data: base64Log
    }

    try {
      this.http.setDataSerializer('json');
      this.http.clearCookies();
      this.http.setRequestTimeout(300);
      return await this.http.post(`${environment.config.apiUrl}/accountmanagers/${amId}/uploadLog`, request, this.setHeaders(token));
    } catch (error) {
      return error;
    }
  }

  /**
 * GET api for updating all of the submission by their status and policy number
 * @author Edric Valdez
 * @param amId 
 * @param token 
 */
  async getChecklist(amId, token) {
    let response: any
    try {
      this.http.clearCookies();
      this.http.setRequestTimeout(300);
      this.http.setDataSerializer('json');
      response = await this.http.get(`${environment.config.apiUrl}/accountmanager/sync?amid=${amId}&res=package&withAttachments=false`, {}, this.setHeaders(token));
    } catch (error) {
      response = error
    }
    return response
  }

  async getAttachmentByContractID(ID, type, token) {
    let response: any
    try {
      this.http.clearCookies();
      this.http.setRequestTimeout(300);
      this.http.setDataSerializer('json');
      response = await this.http.get(`${environment.config.apiUrl}contracts/${ID}/documents/${type}?documentId=${type}`, {}, this.setHeaders(token));
    } catch (error) {
      response = error
    }
    return response
  }
 
  async getApplicationSubmittedOrExpiredApplications(status, pagefrom, pageto) {
    try {
      this.http.clearCookies();
      this.http.setRequestTimeout(300);
      this.http.setDataSerializer('json');
      return this.http.get(`${environment.config.apiUrl}/accountmanagers/${this.amId}/getApplications?page=${pagefrom}&size=${pageto}&status=${status}`, {}, this.setHeaders())
    } catch (error) {
      return error;
    }
  }

}
