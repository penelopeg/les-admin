import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FeedbackService {
    constructor (
    private http: Http
  ) {}


  getFormQuestions() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/form/questions')
    .map((res:Response) => res.json());
  }

  createForm(event) {
    let body = encodeURIComponent(event);
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/form/insert/'+body, '').map((res: Response) => res.json());
  }

  updateForm(event) {
    let body = encodeURIComponent(JSON.stringify(event));
    return this.http.post('http://ccva.jordao.xyz/MjY2ODU5NDky/form/update/' + body, '').map((res: Response) => res.json());
  }

  deleteForm(form_id) {
    return this.http.delete('http://ccva.jordao.xyz/MjY2ODU5NDky/form/delete/' + form_id);
  }

}
