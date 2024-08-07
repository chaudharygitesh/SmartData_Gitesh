import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent {
  registerbtn(){
    this.router.navigate(['/Register'])
  }
  adminlogin=new FormGroup({
    email: new FormControl('', [Validators.required, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6) ])
})
constructor(private router :Router,private toastr:ToastrService) {}

usergo(){
  this.router.navigate(['/Buyer']);
}
  datafetch(){
    var arr=localStorage.getItem('users')
    var obj=arr?JSON.parse(arr):[]
    obj.forEach((user: {
      name: any;
      contact: any;
      designation: any;
      email: any;
      password: any;
      status: any;
    })=> {
      if(user.email===this.adminlogin.value.email && user.password===this.adminlogin.value.password){

        if(user.status===1){
          this.router.navigate(['/men'],{queryParams:{email:this.adminlogin.value.email}})
          this.toastr.success('login successfully')
        }
        else{
          alert("Your account is not activated")
        }
      }
    });
  }
}
