import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ModulesComponent } from './modules.component';
import { routing } from './modules.routing';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {ModulesService} from './modules.service';
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
    ModulesComponent
  ],
  providers: [ModulesService]
})
export class ModulesModule {}