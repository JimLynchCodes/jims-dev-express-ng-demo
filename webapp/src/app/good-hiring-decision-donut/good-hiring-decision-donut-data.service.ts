import {
    Injectable,
  } from '@angular/core';
  
  export class PopulationByRegion {
    'outcome': string;
  
    'val': number;
  }
  
  const populationByRegions: PopulationByRegion[] = [{
    outcome: 'Chance of hiring Jim being a great decision!',
    val: .999,
  }, {
    outcome: 'Chance of hiring Jim not be a good choice...',
    val: 0.001,
  }];
  
  @Injectable()
  export class GoodHiringDecisionDataService {
    getPopulationByRegions(): PopulationByRegion[] {
      return populationByRegions;
    }
  }
  