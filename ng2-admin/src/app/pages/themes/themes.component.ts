import { Component } from '@angular/core';
import { ThemesService } from './themes.service';
import { LocalDataSource } from 'ng2-smart-table';

import 'style-loader!./themes.scss';

@Component({
  selector: 'themes',
  templateUrl: 'themes.html'
})
export class ThemesComponent {
  query: string = '';

  settings = {
    add: {
      addButtonContent: '<i class="ion-ios-plus-outline"></i>',
      createButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmCreate: true
    },
    edit: {
      editButtonContent: '<i class="ion-edit"></i>',
      saveButtonContent: '<i class="ion-checkmark"></i>',
      cancelButtonContent: '<i class="ion-close"></i>',
      confirmSave: true
    },
    delete: {
      deleteButtonContent: '<i class="ion-trash-a"></i>',
      confirmDelete: true
    },
    mode: 'inline',
    columns: {
      id: {
        title: 'ID',
        type: 'number',
        editable: false
      },
      name: {
        title: 'Nome da Atividade',
        type: 'string'
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(protected service: ThemesService) {
    this.service.getThemes().subscribe((value) => {
      this.source.load(JSON.parse(value));
    }, (error) => {
      console.log(error);
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm('Quer mesmo eliminar o tema? Ao eliminar o tema os módulos associados serão eliminados!')) {
      this.service.deleteTheme(event.data.id).subscribe(
        data => {
          console.log(data);
          event.confirm.resolve();
        },
        error => {
          console.error("Error deleting theme!");
          event.confirm.reject();
        }
      );
    } else {
      event.confirm.reject();
    }
  }

  onSave(event): any {
    this.service.updateTheme(event.newData).subscribe(
      data => {
        console.log(data);
        event.confirm.resolve();
      },
      error => {
        console.error("Error saving theme!");
        event.confirm.reject();
      }
    );
  }

  onCreate(event): any {
    this.service.createTheme(event.newData.name).subscribe(
      data => {
        console.log(data);
        event.confirm.resolve();
      },
      error => {
        console.error("Error saving theme!");
        event.confirm.reject();
      }
    );
  }

}