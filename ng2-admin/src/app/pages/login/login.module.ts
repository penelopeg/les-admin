import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { LoginService } from './login.service';

import { Login } from './login.component';
import { routing }       from './login.routing';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    NgaModule,
    routing 
  ],
  declarations: [
    Login
  ],
  providers: [LoginService]
})
export class LoginModule {}
