import { Component } from '@angular/core';
import { ApiCallLineChartService, ArchitectureInfo } from './api-call-line-chart-data.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'api-call-line-chart',
  templateUrl: './api-call-line-chart.component.html',
  styleUrls: ['./api-call-line-chart.component.scss'],
  providers: [ApiCallLineChartService],
  preserveWhitespaces: true,
})
export class ApiCallLineChartComponent {
  types: string[] = ['spline', 'stackedspline', 'fullstackedspline'];

  architecturesInfo: ArchitectureInfo[];

  constructor(service: ApiCallLineChartService) {
    this.architecturesInfo = service.getArchitecturesInfo();

    service.getData().subscribe(
      (response) => {
        // Handle the API response (an array) here
        // this.architecturesInfo = response;
        console.log('got response');
        console.log(response);
      },
      (error) => {
        // Handle any errors that occurred during the API call
        console.log('error');
        console.error(error);
      }
    );
  }
}
