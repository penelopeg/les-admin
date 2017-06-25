import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class VisitsService {
  constructor(
    private http: Http
  ) { }

  getVisits() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/reservation')
      .map((res: Response) => res.json());
  }
}
