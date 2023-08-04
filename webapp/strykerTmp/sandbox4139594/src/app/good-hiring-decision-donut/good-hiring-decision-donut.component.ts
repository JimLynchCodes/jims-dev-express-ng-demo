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
import { GoodHiringDecisionDataService, PopulationByRegion } from './good-hiring-decision-donut-data.service';
import { PercentPipe } from '@angular/common';
@Component({
  selector: 'good-hiring-decision-donut',
  templateUrl: './good-hiring-decision-donut.component.html',
  styleUrls: ['./good-hiring-decision-donut.component.scss'],
  providers: [GoodHiringDecisionDataService],
  preserveWhitespaces: true
})
export class GoodHiringDecisionDonutComponent {
  pipe: any = new PercentPipe(stryMutAct_9fa48("62") ? "" : (stryCov_9fa48("62"), 'en-US'));
  populationByRegions: PopulationByRegion[];
  constructor(service: GoodHiringDecisionDataService) {
    if (stryMutAct_9fa48("63")) {
      {}
    } else {
      stryCov_9fa48("63");
      this.populationByRegions = service.getPopulationByRegions();
    }
  }
  customizeTooltip = stryMutAct_9fa48("64") ? () => undefined : (stryCov_9fa48("64"), (arg: any) => stryMutAct_9fa48("65") ? {} : (stryCov_9fa48("65"), {
    text: stryMutAct_9fa48("66") ? `` : (stryCov_9fa48("66"), `${arg.valueText} - ${this.pipe.transform(arg.percent, stryMutAct_9fa48("67") ? "" : (stryCov_9fa48("67"), '1.2-2'))}`)
  }));
}