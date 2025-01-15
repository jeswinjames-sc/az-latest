import { Injectable } from '@angular/core';
import { Observable, fromEvent, merge, of, from } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';
import { Platform } from '@ionic/angular';

@Injectable({ providedIn: 'root' })
export class ConnectivityService {

  public appIsOnline$: Observable<boolean>;
  ctr = 0;

  constructor(
    private platform: Platform,
    private http: HTTP
  ) {
    this.initConnectivityMonitoring();
  }

  private async initConnectivityMonitoring() {
    await this.platform.ready();

    if (!window || !navigator || !('onLine' in navigator)) return;

    this.appIsOnline$ = merge(
      of(navigator.onLine),
      fromEvent(window, 'online'),
      fromEvent(window, 'offline')
    ).pipe(
      switchMap(online => {
        this.ctr++;
        //console.log(this.ctr, " online ::", navigator.onLine);
        return navigator.onLine ?
          from(this.checkInternetAccess()) :
          of(false)
      })
    )

  }

  private checkInternetAccess(): Promise<boolean> {
    const ACCESS_URL = `https://google.com`;
    return new Promise(resolve => {
      this.http.get(ACCESS_URL, '', this.setHeaders())
        .then(_ => { //console.log('internet YeS');
          resolve(true)
        })
        .catch(_ => { //console.log('internet No'); 
          resolve(false)
        })
    })
  }

  private setHeaders(): {} {
    return {
      'Accept': '*/*',
      'Content-Type': 'application/json'
    }
  }


  checkInternet(): Promise<Boolean> {
    return new Promise((resolve) => {
      resolve(navigator.onLine);
    })
  }
}
