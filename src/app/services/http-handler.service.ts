import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Params } from '../models/http-get';

@Injectable()
export class HttpHandler {
  constructor(private http: HttpClient) {}

  urlGet = 'https://api-test.sesametime.com/schedule/v1/work-entries';
  urlFichar =
    'https://api-test.sesametime.com/schedule/v1/workentries/clock-in';
  urlDesfichar =
    'https://api-test.sesametime.com/schedule/v1/workentries/clock-out';

  token = '16e2f0694a311151c01aa0a131b94a5a3ad7f110e12c2d8f459fcbb158214f5f';

  // Método GET
  dataToSend: any;

  async getData(url: string): Promise<any> {
    return this.http
      .get<Params[]>(url, {
        headers: { Authorization: `Bearer ${this.token}` },
      })
      .toPromise();
  }

  p = Promise.resolve(this.getData(this.urlGet));

  async getJson() {
    try {
      const value: any = await this.p;
      this.dataToSend = JSON.stringify(value.data);
    } catch (err) {
      console.log(err);
    }
  }

  // Método POST
  async postData(obj: any, option: string): Promise<any> {
    let url: string = '';
    if (option === 'In') {
      url = this.urlFichar;
    } else {
      url = this.urlDesfichar;
    }
    return this.http.post<Params[]>(
      url,
      {
        headers: { Authorization: `Bearer ${this.token}` },
      },
      obj
    );
  }
}
