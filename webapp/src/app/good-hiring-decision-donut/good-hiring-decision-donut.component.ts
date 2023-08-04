import { Component } from '@angular/core';
import { GoodHiringDecisionDataService, PopulationByRegion } from './good-hiring-decision-donut-data.service';
import { PercentPipe } from '@angular/common';

@Component({
  selector: 'good-hiring-decision-donut',
  templateUrl: './good-hiring-decision-donut.component.html',
  styleUrls: ['./good-hiring-decision-donut.component.scss'],
  providers: [GoodHiringDecisionDataService],
  preserveWhitespaces: true,
})
export class GoodHiringDecisionDonutComponent {
  pipe: any = new PercentPipe('en-US');

  populationByRegions: PopulationByRegion[];

  constructor(service: GoodHiringDecisionDataService) {
    this.populationByRegions = service.getPopulationByRegions();
  }

}
