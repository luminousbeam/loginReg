import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
// tslint:disable: no-string-literal variable-name one-line whitespace

@Component({
  selector: 'app-login-reg',
  templateUrl: './login-reg.component.html',
  styleUrls: ['./login-reg.component.css']
})
export class LoginRegComponent implements OnInit {
  loginUser: any;
  registerUser: any;
  confirmPassword: string;
  invalidLogin='';
  emailAlreadyExists='';
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.registerUser = {firstName: '', lastName: '', email: '', password: ''};
    this.confirmPassword = '';
    this.loginUser = {email: '', password: ''};
  }
  register(): void {
    const observable = this._httpService.register(this.registerUser);
    observable.subscribe(data => {
        console.log(data);
        if (data['status'] === 'success')
        {
            // redirect
        }
        else if (data['status'] === 'Email already exists')
        {
            this.emailAlreadyExists='Email already exists';
        }
    });
  }
  login()
  {
    const observable = this._httpService.login(this.loginUser);
    observable.subscribe(data => {
      console.log(data);
      if (data['status'] === 'success')
      {
          // redirect
      }
      else if(data['status'] === 'Email/Password combo invalid')
      {
        this.invalidLogin='Email/Password combo invalid';
      }
    });
  }
}
