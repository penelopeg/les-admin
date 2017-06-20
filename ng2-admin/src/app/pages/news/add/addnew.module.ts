import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { HttpModule } from '@angular/http';
import { routing }       from './addnew.routing';
// import { AddnewService } from './addnew.service';
import { RatingModule } from 'ng2-bootstrap';
import { AddnewComponent } from './addnew.component';



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
    AddnewComponent
  ],
  // providers: [AddnewService]
})
export class AddnewModule {
}
