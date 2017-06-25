import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { VisitsComponent } from './visits.component';
import { routing } from './visits.routing';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {VisitsService} from './visits.service';
import { HttpModule } from '@angular/http';
import { DropdownModule, ModalModule } from 'ng2-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    HttpModule,
    DropdownModule.forRoot(),
    ModalModule.forRoot()
  ],
  declarations: [
    VisitsComponent
  ],
  providers: [VisitsService]
})
export class VisitsModule {}