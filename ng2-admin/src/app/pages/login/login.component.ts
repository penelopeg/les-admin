import { Component } from '@angular/core';
import { LoginService } from './login.service';
import { Router} from '@angular/router';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import * as myGlobals from './../globals';

import 'style-loader!./login.scss';

@Component({
  selector: 'login',
  templateUrl: './login.html',
})
export class Login {

  error = '';
  public form: FormGroup;
  public email: AbstractControl;
  public password: AbstractControl;
  public submitted: boolean = false;

  constructor(fb: FormBuilder, protected service: LoginService,  private _router: Router) {
    this.form = fb.group({
      'email': ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      'password': ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    this.email = this.form.controls['email'];
    this.password = this.form.controls['password'];
  }

  public onSubmit(values: Object): void {
    this.submitted = true;
    if (this.form.valid) {
      if (this.service.login(this.email.value, this.password.value) == true) {
        this._router.navigate(['dashboard']);
      }
      else {
        this.error = 'Email/password incorretos!';
      }
        //else error


    }
  }
}
