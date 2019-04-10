import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthSeviceService {

  constructor(private AFauth: AngularFireAuth, public router: Router) { }

  login(email:string, password:string){
    return this.AFauth.auth.signInWithEmailAndPassword(email,password);
  }
  logout(){
    this.AFauth.auth.signOut();
    this.router.navigate(['/login']);
  }
  register(displayname: string, email: string, password: string){
    console.log(email);
    return this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
      res.user.updateProfile({displayName: displayname});
    });
  }
}