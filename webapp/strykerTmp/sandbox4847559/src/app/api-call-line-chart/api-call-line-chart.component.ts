function stryNS_9fa48() {
  var g = typeof globalThis === 'object' && globalThis && globalThis.Math === Math && globalThis || new Function("return this")();
  var ns = g.__stryker__ || (g.__stryker__ = {});
  if (ns.activeMutant === undefined && g.process && g.process.env && g.process.env.__STRYKER_ACTIVE_MUTANT__) {
    ns.activeMutant = g.process.env.__STRYKER_ACTIVE_MUTANT__;
  }
  function retrieveNS() {
    return ns;
  }
  stryNS_9fa48 = retrieveNS;
  return retrieveNS();
}
stryNS_9fa48();
function stryCov_9fa48() {
  var ns = stryNS_9fa48();
  var cov = ns.mutantCoverage || (ns.mutantCoverage = {
    static: {},
    perTest: {}
  });
  function cover() {
    var c = cov.static;
    if (ns.currentTestId) {
      c = cov.perTest[ns.currentTestId] = cov.perTest[ns.currentTestId] || {};
    }
    var a = arguments;
    for (var i = 0; i < a.length; i++) {
      c[a[i]] = (c[a[i]] || 0) + 1;
    }
  }
  stryCov_9fa48 = cover;
  cover.apply(null, arguments);
}
function stryMutAct_9fa48(id) {
  var ns = stryNS_9fa48();
  function isActive(id) {
    if (ns.activeMutant === id) {
      if (ns.hitCount !== void 0 && ++ns.hitCount > ns.hitLimit) {
        throw new Error('Stryker: Hit count limit reached (' + ns.hitCount + ')');
      }
      return true;
    }
    return false;
  }
  stryMutAct_9fa48 = isActive;
  return isActive(id);
}
import { Component } from '@angular/core';
import { ApiCallLineChartService, PopulationData } from './api-call-line-chart-data.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'api-call-line-chart',
  templateUrl: './api-call-line-chart.component.html',
  styleUrls: ['./api-call-line-chart.component.scss'],
  providers: [ApiCallLineChartService],
  preserveWhitespaces: true
})
export class ApiCallLineChartComponent {
  types: string[] = stryMutAct_9fa48("11") ? [] : (stryCov_9fa48("11"), [stryMutAct_9fa48("12") ? "" : (stryCov_9fa48("12"), 'spline'), stryMutAct_9fa48("13") ? "" : (stryCov_9fa48("13"), 'stackedspline'), stryMutAct_9fa48("14") ? "" : (stryCov_9fa48("14"), 'fullstackedspline')]);
  populationData: PopulationData[];
  constructor(service: ApiCallLineChartService, private http: HttpClient) {
    if (stryMutAct_9fa48("15")) {
      {}
    } else {
      stryCov_9fa48("15");
      this.populationData = service.getPopulationData();
      service.getData().subscribe(response => {
        if (stryMutAct_9fa48("16")) {
          {}
        } else {
          stryCov_9fa48("16");
          const mappedResponse = response[stryMutAct_9fa48("17") ? "" : (stryCov_9fa48("17"), 'data')].map(stryMutAct_9fa48("18") ? () => undefined : (stryCov_9fa48("18"), (responseObj: any) => stryMutAct_9fa48("19") ? {} : (stryCov_9fa48("19"), {
            'year': parseInt(responseObj[stryMutAct_9fa48("20") ? "" : (stryCov_9fa48("20"), 'Year')]),
            'population': responseObj[stryMutAct_9fa48("21") ? "" : (stryCov_9fa48("21"), 'Population')]
          })));
          this.populationData = mappedResponse;
        }
      }, stryMutAct_9fa48("22") ? () => undefined : (stryCov_9fa48("22"), error => console.error(error)));
    }
  }
}