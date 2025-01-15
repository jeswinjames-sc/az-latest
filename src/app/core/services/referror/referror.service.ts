import { Injectable } from '@angular/core';
import { Referror } from '@models/leads/referror';
import { UtilService } from '@services/util/util.service';
import { DbService } from '@services/db/db.service';
import { CONSTANT_DB_TABLE } from '@utils/constants/constant-table-name';
import { Storage } from '@ionic/storage';
import { SETTING_KEYS } from '@utils/constants/setting-keys';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { environment } from '@environment/environment';
import { HSBC_REFERRING_BRANCHES } from '@utils/constants/submission-checklist/options/segments/referring-branch-segment';
import { CHANNEL } from '@utils/enums/channel';
import { SettingsService } from '@services/settings/settings.service.service';
export interface IReferrorData {
  leadClientRefId?: string,
  serverId?: string,
  value?: Referror
}

export interface IGetReferrorParams {
  leadsServerId?: string, //lead serverId
  eappServerId?: string // eapp serverID
}
@Injectable({
  providedIn: 'root'
})
export class ReferrorService {

  constructor(
    private databaseService: DbService,
    private utilService: UtilService,
    private storage: Storage,
    private http: HTTP,
    private settingsService: SettingsService
  ) { }

  public setHeadersWithMac(token: string) {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': token,
      'X-Channel-ID': '1',
      'X-Request-ID': Math.floor(Math.random() * 1000000000).toString()
    };
    return headers;
  }

  async post(referrorData: IReferrorData): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      try {
        const { leadClientRefId, serverId, value } = referrorData;
        const { firstName, middleName, lastName, branchName, branchCode, referrorCode, closingBranch } = value;
        const referrorId = this.utilService.generateUUID();
        const dateCreated = this.utilService.setDate();
        const packageId = serverId;
        const token = await this.storage.get(SETTING_KEYS.TOKEN);
        const amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
        let body = {
          self: referrorCode,
          name: lastName,  //ws property for lastname      
          middleName,
          firstName,
          employeeBranch: branchCode,
          leadClientRefId,
          contractId: packageId
        }

        if (this.settingsService.journeyGlobalData.channel == CHANNEL.HSBC) {
          let hsbcBody = {
            closingBranch: closingBranch,
            closingBranchDesc: HSBC_REFERRING_BRANCHES[closingBranch],
            refBranchDesc: branchName
          }

          body = Object.assign({}, body, hsbcBody);
        }

        const url = `${environment.config.apiUrl.replace('/api/', '/api')}/accountmanagers/${amId}/packages/${packageId}/referrers/${referrorCode}`;
        const response = await this.http.post(url, body, this.setHeadersWithMac(token));
        if (response.status == 200) {
          await this.databaseService.insertTableData(
            CONSTANT_DB_TABLE.REFERROR,
            ['referrorId', 'leadId', 'firstName', 'middleName', 'lastName', 'branchName',
              'branchCode', 'referrorCode', 'dateCreated', 'isDeleted', 'syncStatus', 'serverId', 'closingBranch'],
            [referrorId, leadClientRefId, firstName, middleName, lastName,
              branchName, branchCode, referrorCode, dateCreated, 0, 0, 0, closingBranch]
          );
          resolve(true);
        }
      } catch (e) {
        return false;
      }
    })
  }

  async get(referrors: any, leadWS: any, amId: any, token: any): Promise<string> {
    return new Promise(async (resolve, reject) => {
      try {
        if (referrors != null) {
          const referrorId = this.utilService.generateUUID();
          const accountManagerData = await this.storage.get(SETTING_KEYS.ACCOUNTMANAGER_DATA);
          const data = JSON.parse(accountManagerData.data);
          const branchList = data[0].branchList;
          const url = `${environment.config.apiUrl.replace('/api/', '/api')}/accountmanagers/${amId}/referrers`;

          const response = await this.http.get(url, {}, this.setHeadersWithMac(token));
          const referrorData = JSON.parse(response.data);
          const sqlInsert = 'INSERT INTO Referrors(referrorId,leadId,firstName,middleName,lastName,branchName,branchCode,referrorCode,dateCreated,isDeleted,syncStatus,serverId,closingBranch)';
          if (response.status == 200) {
            if (referrorData.length > 0) {
              for (const referror of referrorData) {
                this.databaseService.database.executeSql(`${sqlInsert}
                  VALUES(
                    ${referrorId}, 
                    ${leadWS.clientRefId},
                    ${referror.firstName}, 
                    ${referror.middleName},
                    ${referror.name}, 
                    ${branchList[referror.employeeBranch]}, 
                    ${referror.employeeBranch}, 
                    ${referror.referrorCode},
                    ${leadWS.createdDate}, 
                    0, 
                    2, 
                    ${referror.self},
                    ${referror.closingBranch}
                  )
                  ON CONFLICT(referrorId,leadId,referrorCode) DO UPDATE SET
                  firstName=${referror.firstName},
                  middleName=${referror.middleName},
                  lastName=${referror.name},
                  branchName=${branchList[referror.employeeBranch]},
                  branchCode=${referror.employeeBranch},
                  referrorCode=${referror.referrorCode}`
                );
              }
            }
          }
        }
        resolve(referrors);
      } catch (e) {
        reject(e);
      }
    })
  }

  async getHSBCReferrors(accountManagerID?: string, token?: string) {
    try {
      let referrorCode = 'PAG001'; //HSBC PARENT AGENCY LOV
      const response = await this.http.get(`${environment.config.apiUrl.replace('/api/', '/api')}/accountmanagers/${accountManagerID}/referrers/${referrorCode}`, {}, this.setHeadersWithMac(token));
      return response;
    } catch (error) {
      return error;
    }
  }

  // url http://10.187.28.215:8080/dispatcher/accountmanagers/2004308/leads/56130/packages/155017/referrers/400606
  async getReferror(params: IGetReferrorParams) {
    const amId = await this.storage.get(SETTING_KEYS.ACCOUNT_MANAGER_ID);
    const { leadsServerId, eappServerId } = params;
    const token = await this.storage.get(SETTING_KEYS.TOKEN);
    const url = `${environment.config.apiUrl.replace('/api/','/api')}/accountmanagers/${amId}/leads/${leadsServerId}/packages/${eappServerId}/referrer`
    return  await this.http.get(url,{},this.setHeadersWithMac(token));
  }
}
