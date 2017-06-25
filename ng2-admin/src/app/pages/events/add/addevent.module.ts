import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../../theme/nga.module';
import { HttpModule } from '@angular/http';
import { routing }       from './addevent.routing';
import { AddeventService } from './addevent.service';
import { RatingModule } from 'ng2-bootstrap';
import { AddeventComponent } from './addevent.component';



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
    AddeventComponent
  ],
  providers: [AddeventService]
})
export class AddeventModule {
}
