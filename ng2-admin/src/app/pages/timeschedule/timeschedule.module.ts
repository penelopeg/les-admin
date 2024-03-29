import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { TimescheduleComponent } from './timeschedule.component';
import { routing } from './timeschedule.routing';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TimescheduleService } from './timeschedule.service';
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
   TimescheduleComponent
  ],
  providers: [TimescheduleService]
})
export class TimescheduleModule {}