import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public auth: AngularFireAuth) {
  }
  ngOnInit() {
  }

  loginGithub() {
    this.auth.signInWithPopup(new firebase.auth.GithubAuthProvider()).then(
      function () {
        alert("Succes");
      }
    ).catch(function(error) { });
  }

  loginFacebook() {
    this.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(
      function () {
        alert("Succes");
      }
    ).catch(function(error) { });
  }

  loginGoogle() {
    this.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider()).then(
      function () {
        alert("Succes");
      }
    ).catch(function(error) { });
  }

  logout() {
    this.auth.signOut();
  }


  signUp(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }


  forgotPassword(email:string){
    return this.auth.sendPasswordResetEmail(email);
  }

  loginEmailPassword(email: string, password: string){
    return this.auth.signInWithEmailAndPassword(email,password);
  }


}
