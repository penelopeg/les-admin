import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { HttpModule } from '@angular/http';
import { routing }       from './editnews.routing';
import { EditnewsService } from './editnews.service';
import { RatingModule } from 'ng2-bootstrap';
import { EditnewsComponent } from './editnews.component';

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
    EditnewsComponent
  ],
  providers: [EditnewsService]
})
export class EditnewsModule {
}
