import { Injectable, OnDestroy } from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { AlertService } from '@services/alert/alert.service';
import { App } from '@capacitor/app';
import { Device } from '@capacitor/device';
import { MESSAGE } from '@utils/constants/string/message'; 
import { ICONS } from '@utils/constants/icon/icons';
import { ROUTES } from '@utils/constants/route/routes';
import { environment } from '@environment/environment';
import { interval } from 'rxjs';

@Injectable({
 providedIn: 'root'
})
export class AppService implements OnDestroy {
 private userLoggedIn: boolean;
 timedOut = false;
 alert: any[] = [];
 private idleTimer?: Subscription;
 private timeoutTimer?: Subscription;
 private idleTimeInSeconds = 570; // 9.5 minutes
 private timeoutInSeconds = 30;

 public appPages = [
   {
     title: 'Dashboard',
     url: environment.journeyuiv2 ? `/${ROUTES.DASHBOARD_V2}` : `/${ROUTES.DASHBOARD}`,
     isDisabled: false,
     icon: ICONS.DASHBOARD
   },
   {
     title: 'Leads',
     url: `/${ROUTES.LEADS}`,
     isDisabled: false,
     icon: ICONS.LEADS
   },
   {
     title: 'Needs Analysis',
     url: `/${ROUTES.NEEDS_ANALYSIS}`,
     isDisabled: false,
     icon: ICONS.NA
   },
   {
     title: 'IRPQ',
     url: `/${ROUTES.IRPQ}`,
     isDisabled: false,
     icon: ICONS.IRPQ
   },
   {
     title: 'Sales Illustration',
     url: `/${ROUTES.SALES_ILLUSTRATION}`,
     isDisabled: false,
     icon: ICONS.SI
   }
 ];

 constructor(
   private alertService: AlertService
 ) {
   this.userLoggedIn = false;
   this.setupIdleListeners();
 }

 private async setupIdleListeners() {
   // Listen for app state changes
   App.addListener('appStateChange', ({ isActive }) => {
     if (isActive) {
       this.reset();
     } else {
       this.stopTimers();
     }
   });

   // Listen for user interactions
   const events = ['click', 'touchstart', 'mousemove', 'keydown'];
   events.forEach(eventName => {
     document.addEventListener(eventName, () => this.reset());
   });
 }

 setUserLoggedIn(userLoggedIn: boolean) {
   this.userLoggedIn = userLoggedIn;
 }

 getUserLoggedIn(): boolean {
   return this.userLoggedIn;
 }

 setApplicationIdleTime() {
   if (this.userLoggedIn) {
     this.reset();
   }
 }

 private stopTimers() {
   if (this.idleTimer) {
     this.idleTimer.unsubscribe();
   }
   if (this.timeoutTimer) {
     this.timeoutTimer.unsubscribe();
   }
 }

 async reset() {
   this.stopTimers();
   this.timedOut = false;

   // Start idle timer
   this.idleTimer = interval(this.idleTimeInSeconds * 1000).subscribe(async () => {
     // Show warning alert
     this.alert = [];
     const alert = await this.alertService.displayAlert(
       MESSAGE.IDLE_TIME,
       'OK',
       () => {
         this.alert.forEach(alt => alt.dismiss());
         this.reset();
       }
     );
     this.alert.push(alert);
     alert.present();

     // Start timeout timer
     this.timeoutTimer = interval(this.timeoutInSeconds * 1000).subscribe(() => {
       this.timedOut = true;
       this.alert.forEach(alt => alt.dismiss());
       this.stopTimers();
       // Call your auth service logout method here
       // this.authService.logoutUser();
       this.alert = [];
     });
   });
 }

 ngOnDestroy() {
   this.stopTimers();
   this.alert.forEach(alert => alert.dismiss());
   document.removeEventListener('click', () => this.reset());
   document.removeEventListener('touchstart', () => this.reset());
   document.removeEventListener('mousemove', () => this.reset());
   document.removeEventListener('keydown', () => this.reset());
 }
}