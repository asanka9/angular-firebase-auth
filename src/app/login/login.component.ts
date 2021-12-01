import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  showforgotpassword = false;
  showResetEmailError = false;
  showResetEmail = false;

  forgotPasssword(value:number){
    this.showResetEmail = false;
    this.showResetEmailError = false;

    switch (value) {
      case 1:
        this.showforgotpassword = false;
        break;
      default:
        this.showforgotpassword = true;
        break;
    }
    
  }

  constructor(public authService: AuthService,private router:Router,private toastr: ToastrService) {
  }
  ngOnInit() {
  }

  loginGithub() {
    this.authService.loginGithub();
  }

  loginFacebook() {
    this.authService.loginFacebook();
  }

  loginGoogle() {
    this.authService.loginGoogle();
  }

  logout() {
    this.authService.logout();
  }

  loginEmailAndPassword(f:NgForm){
    if (f.valid) {
      this.authService.loginEmailPassword(f.value.email,f.value.password).then((result:any)=>{
        this.toastr.success('Hello world!', 'Toastr fun!');
        this.router.navigate(['home']);
      }).catch((err:any)=>{
        this.toastr.error('Hello world!', 'Toastr fun!');
      });
    }

  }


  getEmailForResetPassword(f:NgForm){
    if (f.valid) {
      this.authService.forgotPassword(f.value.email).then((result:any)=>{
        this.toastr.success('Hello world!', 'Toastr fun!');
      }).catch((err)=>{
        this.toastr.error('Hello world!', 'Toastr fun!');
      });
    }

  }

}
