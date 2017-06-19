import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';

import { routing }       from './centerinfo.routing';

import { RatingModule } from 'ng2-bootstrap';
import { CenterinfoComponent } from './centerinfo.component';


@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    RatingModule.forRoot(),
    routing
  ],
  declarations: [
    CenterinfoComponent
  ]
})
export class CenterinfoModule {
}
