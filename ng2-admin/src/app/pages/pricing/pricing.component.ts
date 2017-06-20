import {Component} from '@angular/core';
import { PricingService } from './pricing.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./pricing.scss';

@Component({
  selector: 'pricing',
  templateUrl: 'pricing.html'
})
export class PricingComponent {
    query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    columns: {
      name: {
        title: 'Tipo de Preçário',
        type: 'string'
      },
      price: {
        title: 'Preço',
        type: 'string'
      }
    }
    /*
  pricing to tags
    */
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: PricingService) {
    this.service.getPricing().subscribe((value) => {
      this.source.load(JSON.parse(value));
    }, (error) => {
      console.log(error);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Quer mesmo eliminar o evento?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}