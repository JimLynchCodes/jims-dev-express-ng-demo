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
import { Population, CodingExperiencesDataService } from './coding-experiences-data.service';
@Component({
  selector: 'coding-experiences',
  templateUrl: './coding-experiences.component.html',
  styleUrls: ['./coding-experiences.component.scss'],
  providers: [CodingExperiencesDataService],
  preserveWhitespaces: true
})
export class CodingExperiencesComponent {
  populationData: Population[];
  types: string[] = stryMutAct_9fa48("51") ? [] : (stryCov_9fa48("51"), [stryMutAct_9fa48("52") ? "" : (stryCov_9fa48("52"), 'area'), stryMutAct_9fa48("53") ? "" : (stryCov_9fa48("53"), 'stackedarea'), stryMutAct_9fa48("54") ? "" : (stryCov_9fa48("54"), 'fullstackedarea')]);
  constructor(service: CodingExperiencesDataService) {
    if (stryMutAct_9fa48("55")) {
      {}
    } else {
      stryCov_9fa48("55");
      this.populationData = service.getPopulationData();
    }
  }
}