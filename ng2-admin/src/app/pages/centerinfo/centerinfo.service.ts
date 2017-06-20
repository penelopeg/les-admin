import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class CenterinfoService {
    constructor (
    private http: Http
  ) {}

  getInfo() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/info')
    .map((res:Response) => res.json());
  }

    getContacts() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/contacts')
    .map((res:Response) => res.json());
  }

}
