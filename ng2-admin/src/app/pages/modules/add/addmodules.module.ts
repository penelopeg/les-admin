import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { HttpModule } from '@angular/http';
import { routing }       from './addmodule.routing';
import { AddmoduleService } from './addmodule.service';
import { RatingModule } from 'ng2-bootstrap';
import { AddmoduleComponent } from './addmodule.component';



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
    AddmoduleComponent
  ],
  providers: [AddmoduleService]
})
export class AddmodulesModule {
}
