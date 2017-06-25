import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { HttpModule } from '@angular/http';
import { routing }       from './editmodules.routing';
import { EditmodulesService } from './editmodules.service';
import { RatingModule } from 'ng2-bootstrap';
import { EditmodulesComponent } from './editmodules.component';

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
    EditmodulesComponent
  ],
  providers: [EditmodulesService]
})
export class EditmodulesModule {
}
