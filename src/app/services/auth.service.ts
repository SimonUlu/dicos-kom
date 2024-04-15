import { Injectable } from '@angular/core';
import { Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { getAuth } from 'firebase/auth';
import { onAuthStateChanged } from '@angular/fire/auth';
import { GoogleAuthProvider, signOut, User, signInWithPopup } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public firebaseService: Firestore) { }

  async createUserWithGoogle(): Promise<void> {
    const auth = getAuth();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        if (credential) {
          const token = credential.accessToken;
          console.log(token);
        } 
        const user = result.user;
        return user;
      }).catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

  }

  getAuthState(): Observable<boolean> {
    return new Observable<boolean>(subscriber => {
      const auth = getAuth();

      const unsubscribe = onAuthStateChanged(auth, user => {
        // user = true if user is found
        subscriber.next(!!user);
      }, error => {
        subscriber.error(error);
      });

      return () => unsubscribe();
    })
  }

  async logOutUser(): Promise<void> {
    const auth = getAuth();
    signOut(auth).then(() => {
      // sign out is successfull
    }).catch((error) => {
      console.log(error);
    })
  } 



}
