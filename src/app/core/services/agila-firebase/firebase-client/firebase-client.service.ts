import { Injectable } from '@angular/core';
import { environment } from '@environment/environment';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { BehaviorSubject } from 'rxjs';

/**
 * Injectable
 * - This services is responsible for  Firebase integration
 * @author Jerone Altura
 */
@Injectable({
  providedIn: 'root'
})
export class FirebaseClientService {
  private firebaseConfig = environment.firebase;
  public firestoreDb: firebase.firestore.Firestore;
  public authentication$: BehaviorSubject<boolean> = new BehaviorSubject(false);
  private isAuthenticated: boolean;


  /**
  * Initializes the Firebase app and sets up the Firestore database.
  * @param token The custom authentication token.
  */
  async initializeFirebase() {

    const app = firebase.initializeApp(this.firebaseConfig);
    firebase.firestore().settings({
      cacheSizeBytes: firebase.firestore.CACHE_SIZE_UNLIMITED
    });
    this.firestoreDb = firebase.firestore(app);

    console.log('Firebase Intialized')
    firebase.firestore().enablePersistence()
      .catch((err) => {
        console.log(err)
    });

    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        console.log('Firebase Authenticated');
        this.isAuthenticated = true;
        this.authentication$.next(this.isAuthenticated);
      } else {
        console.log('Firebase not Authenticated');
        this.isAuthenticated = false;
        this.authentication$.next(this.isAuthenticated);
      }
    })
  }


  /**
  * Logs out the currently authenticated user.
  * @returns A promise that resolves when the user is successfully logged out.
  */
  async logout(): Promise<void> {
    return await firebase.auth().signOut();

  }

 /**
  * Authenticates user in firebase.
  * @param token The custom authentication token.
  */
  async signInFirebase(token: string) {
    console.log('')
       return !this.isAuthenticated ? await firebase.auth().signInWithCustomToken(token) : null;  
  }


  getServerTimeStamp() {
    return firebase.firestore.Timestamp.now()
  }



}