import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { TimescheduleComponent } from './timeschedule.component';
import { routing } from './timeschedule.routing';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TimescheduleService } from './timeschedule.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule
  ],
  declarations: [
   TimescheduleComponent
  ],
  providers: [TimescheduleService]
})
export class TimescheduleModule {}