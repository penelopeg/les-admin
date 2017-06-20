import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { SocialComponent } from './social.component';
import { routing } from './social.routing';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {SocialService} from './social.service';
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
    SocialComponent
  ],
  providers: [SocialService]
})
export class SocialModule {}