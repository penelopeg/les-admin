import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { HttpModule } from '@angular/http';
import { routing }       from './editservice.routing';
import { EditserviceService } from './editservice.service';
import { RatingModule } from 'ng2-bootstrap';
import { EditserviceComponent } from './editservice.component';

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
    EditserviceComponent
  ],
  providers: [EditserviceService]
})
export class EditserviceModule {
}
