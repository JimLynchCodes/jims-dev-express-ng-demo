import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export class PopulationData {
  'year': number;
  'population': number;
}

const populationData: PopulationData[] = [{
  year: 1,
  population: 0
}];

@Injectable()
export class ApiCallLineChartService {

  constructor(private http: HttpClient) { }

  getPopulationData(): PopulationData[] {
    return populationData;
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

}
