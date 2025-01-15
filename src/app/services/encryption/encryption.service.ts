import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';
import { Device } from '@capacitor/device';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {
    constructor(
    ) {
     }

    encryptedKey!: string;
    secretKey = 'agila';

    async setEncryptedKey() {
        const deviceId = (await Device.getId()).identifier;
        const key = 'AGILA_' + deviceId;
        const encryptedData = CryptoJS.AES.encrypt(key, this.secretKey).toString();
        this.encryptedKey = encryptedData;
    }

    getDecryptedKey() {
        const encryptedData = this.encryptedKey;
        if (encryptedData) {
            return CryptoJS.AES.decrypt(encryptedData, this.secretKey).toString(CryptoJS.enc.Utf8);
        }
        return null;
    }

    public getPasswordDecrypted(password: string): string {
        try {
          // Decrypt
          let bytes = CryptoJS.AES.decrypt(password.toString(), this.secretKey);
          let plaintext = bytes.toString(CryptoJS.enc.Utf8);
          return plaintext;
        } catch (err) {
          throw err;
        }
      }

    public setPasswordEncrypted(password: string) {
      try {
        // Encrypt
        let ciphertext = CryptoJS.AES.encrypt(password, this.secretKey).toString();
        return ciphertext;
      } catch (err) {
        throw err;
      }
    }
}
