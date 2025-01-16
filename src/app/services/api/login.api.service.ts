import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, firstValueFrom } from 'rxjs';
import { environment } from '@environment/environment';
import { CoreApiService } from '@core/services/core-api/core-api.service';
import { Storage } from '@ionic/storage';
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {
  private baseUrl = environment.config.apiUrl;
  private headers: HttpHeaders;

  constructor(
    private http: HttpClient,
    private coreApiService: CoreApiService,
    private storage: Storage
  ) {
    this.headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
  }
  public setHeaders(token: string) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token,
      'X-Channel-ID': '1',
      'X-Request-ID': Math.floor(Math.random() * 1000000000).toString()
    };
    return headers;
  }

  public async setHeadersWithMac(token: string) {
    const deviceId = (await Device.getId()).identifier;
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token,
      'X-Channel-ID': '1',
      'X-Request-ID': Math.floor(Math.random() * 1000000000).toString(),
      'Mac-Address': deviceId
    };
    return headers;
  }

  public setHeadersForChangePassword(token: string) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token
    };
    return headers;
  }

  async onlineLoginRequest(username: string, password: string) {
    const data = {
      'username': username,
      'password': password,
      'appid': 1
    };
    let headers = {
      'Content-Type': 'application/json'
    };
    let response: any;
    try {
      response = await this.http.post(`${environment.config.apiUrl.replace('/apixx', '').replace('/apiv2', '').replace('/api2', '').replace('/api', '')}/auth/login`, data, { headers });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async resetPasswordRequest(username: string) {
    const data = {
      'username': username,
      'appid': 1
    };

    let headers = {
      'Content-Type': 'application/json'
    };

    let response: any;
    response = await this.http.post(`${environment.config.apiUrl.replace('/apixx', '').replace('/apiv2', '').replace('/api2', '').replace('/api', '')}/auth/password/reset`, data, { headers });

    return response;
  }

  async changePasswordRequest(username: string, tempPassword: string, newPassword: string, token: string) {
    const data = {
      'username': username,
      'password': tempPassword,
      'newpassword' : newPassword,
      'appid': 1
    };

    let response: any;
    response = await this.http.post(`${environment.config.apiUrl.replace('/apixx', '').replace('/apiv2', '').replace('/api2', '').replace('/api', '')}/auth/password/change`, data, { headers: this.setHeaders(token) });

    return response;
  }

  accountManagerAPIRequest(email: string, token: string): Observable<any> {
    return this.http.get(`${environment.config.apiUrl}/accountmanagers?email=${email}`, { headers: this.setHeaders(token) });
  }

  async getSystemAPIRequest(accountmanagerID: string, token: string) {
    try {
      // tslint:disable-next-line: max-line-length
      const response = await this.http.get(`${environment.config.apiUrl}/accountmanager/sync?amid=${accountmanagerID}&res=settings`, { headers: this.setHeaders(token) });
      return response;
    } catch (error) {
      throw error;
    }
  }

  async getReferrorSettings(referrerId?: string, branchCode?: string, accountManagerID?: string, token?: string) {
    try {
      if (!token) {
        throw new Error('Token is required for authentication');
      }
      const response = await this.http.get(`${environment.config.apiUrl.replace('/api/', '/api')}/accountmanagers/${accountManagerID}/referrers`, { headers: this.setHeaders(token) });
      return response;
    } catch (error) {
      return error;
    }
  }

  async getOfflineApplicationNumber(accountManagerID?:string, token?: string, count?: number) {
    try {
      if (!token) {
        throw new Error('Token is required for authentication');
      }
      const response = await this.http.post(`${environment.config.apiUrl.replace('/api/', '/api')}/accountmanagers/${accountManagerID}/application-number/generate/${count}`, {}, { headers: await this.setHeadersWithMac(token) });
      return response;
    } catch (error) {
      return error;
    }
  }

}
