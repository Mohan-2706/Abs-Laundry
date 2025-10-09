import { Component } from '@angular/core';
import { User } from '../../service/api/user';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: false,
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  token = null;
  loginForm: FormGroup;
  btnStaus: boolean = false;

  constructor(private callApi: User, private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      "user_name": [null,Validators.required],
      "password": [null,Validators.required]
    })
  }

  login() {
    if(!this.loginForm.valid) return this.callApi.showInfo("Enter the valid data")
    this.btnStaus = true;
    this.callApi.userLogin(this.loginForm.value).subscribe(async (res: any) => {
      if (res?.status) {
        this.token = await res?.data?.token;
        sessionStorage.setItem("auth", String(this.token));
        this.callApi.getUsertoken();
        this.callApi.showSuccess(res?.message);
        await this.router.navigateByUrl("/home");
      } else {
        this.token = null;
        this.callApi.showError(res?.message);
      }
      this.btnStaus = false;
    })
  }

}
