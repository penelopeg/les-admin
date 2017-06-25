import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ProjectserviceComponent } from './projectservice.component';
import { routing } from './projectservice.routing';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {ProjectserviceService} from './projectservice.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule,
    HttpModule
  ],
  declarations: [
    ProjectserviceComponent
  ],
  providers: [ProjectserviceService]
})
export class ProjectserviceModule {}