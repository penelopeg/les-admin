import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { FormsModule as AngularFormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { HttpModule } from '@angular/http';
import { routing }       from './centerinfo.routing';
import { CenterinfoService } from './centerinfo.service';
import { RatingModule } from 'ng2-bootstrap';
import { CenterinfoComponent } from './centerinfo.component';



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
    CenterinfoComponent
  ],
  providers: [CenterinfoService]
})
export class CenterinfoModule {
}
