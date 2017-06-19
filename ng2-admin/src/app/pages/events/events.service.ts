import {Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class EventsService {
    constructor (
    private http: Http
  ) {}


  smartTableData = [
    {
      id: 1,
      title: 'Workshop de jardins',
      description: 'Venha plantar o seu jardim',
      e_time: '2018-02-03 00:00:00'
    },
    {
      id: 2,
      title: 'Workshop 2',
      description: 'Venha fazer o seu workshop',
      e_time: '0000-00-00'
    }
  ];

  metricsTableData = [
    {
      image: 'app/browsers/chrome.svg',
      browser: 'Google Chrome',
      visits: '10,392',
      isVisitsUp: true,
      purchases: '4,214',
      isPurchasesUp: true,
      percent: '45%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/firefox.svg',
      browser: 'Mozilla Firefox',
      visits: '7,873',
      isVisitsUp: true,
      purchases: '3,031',
      isPurchasesUp: false,
      percent: '28%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/ie.svg',
      browser: 'Internet Explorer',
      visits: '5,890',
      isVisitsUp: false,
      purchases: '2,102',
      isPurchasesUp: false,
      percent: '17%',
      isPercentUp: false
    },
    {
      image: 'app/browsers/safari.svg',
      browser: 'Safari',
      visits: '4,001',
      isVisitsUp: false,
      purchases: '1,001',
      isPurchasesUp: false,
      percent: '14%',
      isPercentUp: true
    },
    {
      image: 'app/browsers/opera.svg',
      browser: 'Opera',
      visits: '1,833',
      isVisitsUp: true,
      purchases: '83',
      isPurchasesUp: true,
      percent: '5%',
      isPercentUp: false
    }
  ];

// Get tags from api
//  getTags() {
//    return this.http.get(`https://ccva.jordao.xyz/MjY2ODU5NDky/tags`)
//    .map((res:Response) => res.json());
//  }

  getData(): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.smartTableData);
      }, 2000);
    });
  }
}
