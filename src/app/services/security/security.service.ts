import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';

declare var window: any;

@Injectable({
  providedIn: 'root'
})
export class SecurityService {
  private server: string;
  private fingerprint: string;

  constructor() {
    this.server = environment.config?.server;
    this.fingerprint = environment.config?.fingerprint;
  }

  /**
   * Validates the SSL certificate of the server
   * @returns Promise<string> Returns a promise that resolves to:
   * - '200': Connection is secure
   * - '201': Certificate validation failed
   * - '202': Error during certificate validation
   * - '300': No network connection
   */
  validateCertificate(): Promise<string> {
    if (environment.config?.isSITEnabled) {
      return Promise.resolve('200');
    }

    if (!navigator.onLine) {
      return Promise.resolve('300');
    }

    return new Promise((resolve) => {
      if (!window.plugins?.sslCertificateChecker) {
        console.warn('SSL Certificate Checker plugin not available');
        resolve('200'); // Resolve as secure in development environment
        return;
      }

      window.plugins.sslCertificateChecker.check(
        (successCallback: string) => {
          if (successCallback === 'CONNECTION_SECURE') {
            resolve('200');
          } else {
            resolve('201');
          }
        },
        () => {
          resolve('202');
        },
        this.server,
        this.fingerprint
      );
    });
  }
}
