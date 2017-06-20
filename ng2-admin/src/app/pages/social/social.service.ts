import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class SocialService {
    constructor (
    private http: Http
  ) {}

   getSocial() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/social')
    .map((res:Response) => res.json());
  }
}
