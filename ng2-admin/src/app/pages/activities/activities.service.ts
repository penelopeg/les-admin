import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class ActivitiesService {
    constructor (
    private http: Http
  ) {}


  getAllTags() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/tags')
    .map((res:Response) => res.json());
  }

}
