import { Component } from '@angular/core';

import { DxChartModule, DxSelectBoxModule } from 'devextreme-angular';

import { Population, CodingExperiencesDataService } from './coding-experiences-data.service';


@Component({
  selector: 'coding-experiences',
  templateUrl: './coding-experiences.component.html',
  styleUrls: ['./coding-experiences.component.scss'],
  providers: [CodingExperiencesDataService],
  preserveWhitespaces: true,
})
export class CodingExperiencesComponent {
  populationData: Population[];

  types: string[] = ['area', 'stackedarea', 'fullstackedarea'];

  constructor(service: CodingExperiencesDataService) {
    this.populationData = service.getPopulationData();
  }
}
