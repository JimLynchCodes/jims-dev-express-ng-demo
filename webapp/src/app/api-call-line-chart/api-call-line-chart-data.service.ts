import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class ArchitectureInfo {
  'year': number;

  'smp': number;

  // 'mmp': number;

  // 'cnstl': number;

  // 'cluster': number;
}

const architecturesInfo: ArchitectureInfo[] = [{
  year: 1997,
  smp: 263,
  // mmp: 208,
  // cnstl: 9,
  // cluster: 1,
}, {
  year: 1999,
  smp: 169,
  // mmp: 270,
  // cnstl: 61,
  // cluster: 7,
}, {
  year: 2001,
  smp: 57,
  // mmp: 261,
  // cnstl: 157,
  // cluster: 45,
}, {
  year: 2003,
  smp: 0,
  // mmp: 154,
  // cnstl: 121,
  // cluster: 211,
}, {
  year: 2005,
  smp: 0,
  // mmp: 97,
  // cnstl: 39,
  // cluster: 382,
}, {
  year: 2007,
  smp: 0,
  // mmp: 83,
  // cnstl: 3,
  // cluster: 437,
}];

@Injectable()
export class ApiCallLineChartService {

  constructor(private http: HttpClient) { }

  getArchitecturesInfo(): ArchitectureInfo[] {
    return architecturesInfo;
  }

  getData(): Observable<any> {
    const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Methods': 'GET'
    });

    return this.http.get(url);
  }

  // }

  makeJsonpGetCall(callbackParam: string): Observable<any> {
    // const params = new HttpParams().set('callback', 'callback');

    // const params = new HttpParams().set('callback', 'JSONP_CALLBACK');

    const url = 'https://datausa.io/api/data?drilldowns=Nation&measures=Population';

    return this.http.jsonp(url, 'callback');
  }

  // callback() {

  // }

}
