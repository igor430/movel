import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthSeviceService {


  constructor(
    private AFauth: AngularFireAuth, 
    public router: Router,
    ) { }

  login(email:string, password:string){
    return this.AFauth.auth.signInWithEmailAndPassword(email,password);
  }
  logout(){
    this.AFauth.auth.signOut();
    this.router.navigate(['/pages/login']);
  }

  getEmail(){
    return this.AFauth.auth.currentUser.email;
  }

  getUid(){
    return this.AFauth.auth.currentUser.uid;
  }

  getNome(){
    return this.AFauth.auth.currentUser.displayName;
  }


  register(displayname: string, email: string, password: string){
    return this.AFauth.auth.createUserWithEmailAndPassword(email, password).then(res => {
      console.log(res.user.displayName)
      console.log(res.user.email)
      console.log(res.user.uid)
    });
  }

}
