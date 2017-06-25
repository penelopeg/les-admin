import { Component } from '@angular/core';
import { ModulesService } from './modules.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./modules.scss';

@Component({
  selector: 'modules',
  templateUrl: 'modules.html'
})
export class ModulesComponent {

  source: LocalDataSource = new LocalDataSource();
  modules = [];
  constructor(protected service: ModulesService) {
    this.service.getModules().subscribe((value) => {
      JSON.parse(value).map((item) => {
        this.modules.push(item);
      });
    }, (error) => {
      console.log(error);
    });

  }

}