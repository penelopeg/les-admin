import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ActivitiesComponent } from './activities.component';
import { routing } from './activities.routing';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {ActivitiesService} from './activities.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ActivitiesComponent
  ],
  providers: [ActivitiesService]
})
export class ActivitiesModule {}