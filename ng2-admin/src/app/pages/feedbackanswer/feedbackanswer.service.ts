import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FeedbackanswerService {
  constructor(
    private http: Http
  ) { }

  getFeedbackanswer() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/form/answers')
      .map((res: Response) => res.json());
  }
}
