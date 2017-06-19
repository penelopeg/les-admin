import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { EventsComponent } from './events.component';
import { routing } from './events.routing';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {EventsService} from './events.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule
  ],
  declarations: [
    EventsComponent
  ],
  providers: [EventsService]
})
export class EventsModule {}