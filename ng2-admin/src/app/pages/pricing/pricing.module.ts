import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { PricingComponent } from './pricing.component';
import { routing } from './pricing.routing';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {PricingService} from './pricing.service';
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
    PricingComponent
  ],
  providers: [PricingService]
})
export class PricingModule {}