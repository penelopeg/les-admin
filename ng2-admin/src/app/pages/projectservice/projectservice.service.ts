import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ProjectserviceService {
    constructor (
    private http: Http
  ) {}

   getProjectservice() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/services')
    .map((res:Response) => res.json());
  }
}
