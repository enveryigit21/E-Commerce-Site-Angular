import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , FormBuilder , Validators  } from "@angular/forms";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

loginForm : FormGroup ;
  constructor(private FormBuilder: FormBuilder , private authService: AuthService){}

  ngOnInit(): void {
    this.createLoginForm();

  }

  createLoginForm(){
   this.loginForm = this.FormBuilder.group({
    email:["", Validators.required],
    password:["" , Validators.required]
   })
  }

  login(){
    if(this.loginForm.valid){
      console.log(this.loginForm.value)
      let loginModel = Object.assign({}, this.loginForm.value)

      this.authService.login(loginModel).subscribe(data => {
        console.log(data)
      })
    }
  }

}
