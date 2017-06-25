import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class LoginService {
    constructor (
    private http: Http
  ) {}


  login(email, password) {
    if (email == 'admin@ccvalg.pt' && password=='admin') {
      console.log(password);
      return true;
    }
    console.log(password);
    console.log(email);
      return false;
    // return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/tags')
    // .map((res:Response) => res.json());
  }

}
