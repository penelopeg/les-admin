import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class EditeventService {
    constructor (
    private http: Http
  ) {}

   getEvents(id) {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/events/' + id)
    .map((res:Response) => res.json());
  }

  getAllTags() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/tags')
    .map((res:Response) => res.json());
  }

}
