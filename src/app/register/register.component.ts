import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { FormControl, FormGroup } from '@angular/forms';
import firebase from 'firebase/compat/app';
import { AuthService } from '../auth.service';
import {NgForm} from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})



export class RegisterComponent implements OnInit {


  registerSucces = false;
  loading = true;

  constructor(public authService: AuthService,private toastr: ToastrService) {
  }
  ngOnInit() {
    
   }

  onSubmit(f: NgForm){  
  this.loading = true;  
  if (f.valid) {
    if (f.value.password == f.value.confirmpassword) {
      this.authService.signUp(f.value.email,f.value.password).then(
        (result) =>{
         if (result.user != null) {
          this.registerSucces = true;
           this.loading = false;
           
           result.user.sendEmailVerification();
         }
       }
     ).catch((error)=> {
       this.loading = true;
       this.registerSucces = false;
       this.toastr.error("Err","Something went wrong");
     })
    }else{
      this.toastr.error("Err","Password does not match");

    }

     
  }

  }


}
