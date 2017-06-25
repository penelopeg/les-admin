import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { ThemesComponent } from './themes.component';
import { routing } from './themes.routing';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {ThemesService} from './themes.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule
  ],
  declarations: [
    ThemesComponent
  ],
  providers: [ThemesService]
})
export class ThemesModule {}