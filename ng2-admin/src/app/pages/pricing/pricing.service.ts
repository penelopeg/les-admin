import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class PricingService {
    constructor (
    private http: Http
  ) {}

   getPricing() {
    return this.http.get('http://ccva.jordao.xyz/MjY2ODU5NDky/price')
    .map((res:Response) => res.json());
  }
}
