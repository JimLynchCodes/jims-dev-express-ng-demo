import { Component } from '@angular/core';
import { ApiCallLineChartService, PopulationData } from './api-call-line-chart-data.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'api-call-line-chart',
  templateUrl: './api-call-line-chart.component.html',
  styleUrls: ['./api-call-line-chart.component.scss'],
  providers: [ApiCallLineChartService],
  preserveWhitespaces: true,
})
export class ApiCallLineChartComponent {
  types: string[] = ['spline', 'stackedspline', 'fullstackedspline'];

  populationData: PopulationData[];

  constructor(service: ApiCallLineChartService, private http: HttpClient) {
    this.populationData = service.getPopulationData();

    service.getData().subscribe((response) => {

      const mappedResponse = response['data'].map((responseObj: any) => ({
        'year': parseInt(responseObj['Year']),
        'population': responseObj['Population']
      }))

      this.populationData = mappedResponse

    }, (error) => console.error(error));

  }

}
