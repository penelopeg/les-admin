import { Component } from '@angular/core';
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
    actions: {
      add: false,
      delete: false
    },
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true,
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    mode: 'inline',
    columns: {
      id: {
        title: 'Id',
        type: 'string',
        editable: false
      },
      name: {
        title: 'Tipo de Preçário',
        type: 'string'
      },
      price: {
        title: 'Preço',
        type: 'string'
      }
    }

  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: PricingService) {
    this.service.getPricing().subscribe((value) => {
      this.source.load(JSON.parse(value));
    }, (error) => {
      console.log(error);
    });
  }

  onSave(event): any {
    console.log(event.newData);
    this.service.updatePricing(event.newData).subscribe(
      data => {
        console.log(data);
        event.confirm.resolve();
      },
      error => {
        console.error("Error saving price!");
        event.confirm.reject();
      }
    );
  }
}