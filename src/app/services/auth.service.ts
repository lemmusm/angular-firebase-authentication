import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from '@angular/fire/auth';
import * as firebase from 'firebase/app';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {

    user: Observable<firebase.User>;

    constructor(public afAuth: AngularFireAuth, private router:Router) {
      this.user = afAuth.authState;
      this.afAuth.authState.subscribe(auth => {
          if(auth) {
            this.router.navigate(['/dashboard']);
              console.log('You are authenticated', auth)
          } else {
              console.log('You are not authenticated')
          }

      });
    }

    loginWithGoogle() {

      //setCustomParameters host domain (hd)

      /**

        let provider = new firebase.auth.GoogleAuthProvider();
        provider.addScope('email');
        provider.setCustomParameters({
          'hd':'domain.edu.mx'
        });
        this.afAuth.auth.signInWithPopup(provider)
        .then((data)=>{
          this.router.navigate(['/dashboard']);
        })
        .catch((error)=>{
          console.log(error)
        });

      **/

      this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
      .then((data)=>{
        this.router.navigate(['/dashboard']);
      })
      .catch((error)=>{
        console.log(error)
      });
    }

    logout() {
      this.afAuth.auth.signOut()
      .then(()=>{
        this.router.navigate(['/login']);
      });
    }
}
