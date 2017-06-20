import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class TimescheduleService {
    constructor (
    private http: Http
  ) {}


   getSchedule() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/schedule')
    .map((res:Response) => res.json());
  }
}
