import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ModulesService {
    constructor (
    private http: Http
  ) {}

   getModules() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/modules')
    .map((res:Response) => res.json());
  }
}
