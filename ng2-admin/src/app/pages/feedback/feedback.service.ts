import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FeedbackService {
    constructor (
    private http: Http
  ) {}


  getFormQuestions() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/form')
    .map((res:Response) => res.json());
  }

}
