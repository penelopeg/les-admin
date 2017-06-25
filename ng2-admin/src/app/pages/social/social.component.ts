import { Component } from '@angular/core';
import { SocialService } from './social.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./social.scss';

@Component({
  selector: 'social',
  templateUrl: 'social.html'
})
export class SocialComponent {
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
        title: 'Nome da rede social',
        type: 'string'
      },
      url: {
        title: 'URL',
        type: 'string'
      }
    }
    /*
  social to tags
    */
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: SocialService) {
    this.service.getSocial().subscribe((value) => {
      this.source.load(JSON.parse(value));
    }, (error) => {
      console.log(error);
    });
  }

  onSave(event): any {
    this.service.updateSocial(event.newData).subscribe(
      data => {
        console.log(data);
        event.confirm.resolve();
      },
      error => {
        console.error("Error saving social network!");
        event.confirm.reject();
      }
    );
  }
}