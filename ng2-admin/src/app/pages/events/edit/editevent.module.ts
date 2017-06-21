import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { HttpModule } from '@angular/http';
import { routing }       from './editevent.routing';
import { EditeventService } from './editevent.service';
import { RatingModule } from 'ng2-bootstrap';
import { EditeventComponent } from './editevent.component';

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
    EditeventComponent
  ],
  providers: [EditeventService]
})
export class EditeventModule {
}
