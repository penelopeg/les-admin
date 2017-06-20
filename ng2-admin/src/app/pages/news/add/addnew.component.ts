import { Component } from '@angular/core';
// import { AddnewService } from './addnew.service';

@Component({
  selector: 'addnew',
  templateUrl: './addnew.html',
})
export class AddnewComponent {
  content = '';
  title = '';
  tags = [];

constructor() {

}
  // constructor(protected service: AddnewService) {
  //   //get info
  //   this.service.getInfo().subscribe((value) => {
  //     this.info = JSON.parse(value)[0].description;
  //   }, (error) => {
  //     console.log(error);
  //   });

  //   //get contact information
  //   this.service.getContacts().subscribe((value) => {
  //     var item = JSON.parse(value);
  //     this.address = item[0].address;
  //     this.phone = item[0].phone_nr;
  //     this.email = item[0].email;
  //   }, (error) => {
  //     console.log(error);
  //   });
  // }

}
