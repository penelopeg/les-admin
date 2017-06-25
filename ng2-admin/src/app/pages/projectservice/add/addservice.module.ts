import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { HttpModule } from '@angular/http';
import { routing }       from './addservice.routing';
import { AddserviceService } from './addservice.service';
import { RatingModule } from 'ng2-bootstrap';
import { AddserviceComponent } from './addservice.component';



@NgModule({
  imports: [
    CommonModule,
    AngularFormsModule,
    NgaModule,
    RatingModule.forRoot(),
    routing,
    HttpModule
  ],
  declarations: [
    AddserviceComponent
  ],
  providers: [AddserviceService]
})
export class AddserviceModule {
}
