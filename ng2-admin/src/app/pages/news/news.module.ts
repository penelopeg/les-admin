import { NgModule }      from '@angular/core';
import { CommonModule }  from '@angular/common';
import { NewsComponent } from './news.component';
import { routing } from './news.routing';
import { FormsModule } from '@angular/forms';
import { NgaModule } from '../../theme/nga.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import {NewsService} from './news.service';

@NgModule({
  imports: [
    CommonModule,
    routing,
    FormsModule,
    NgaModule,
    Ng2SmartTableModule
  ],
  declarations: [
    NewsComponent
  ],
  providers: [NewsService]
})
export class NewsModule {}