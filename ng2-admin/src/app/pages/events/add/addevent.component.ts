import { Component } from '@angular/core';
// import { AddeventService } from './addevent.service';
import 'style-loader!../events.scss';

@Component({
  selector: 'addevent',
  templateUrl: './addevent.html',
})
export class AddeventComponent {
  content = '';
  title = '';
  tags = [];

constructor() {

}
  // constructor(protected service: AddeventService) {
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
