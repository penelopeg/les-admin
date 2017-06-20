import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class EventsService {
    constructor (
    private http: Http
  ) {}

   getEvents() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/events')
    .map((res:Response) => res.json());
  }
}
