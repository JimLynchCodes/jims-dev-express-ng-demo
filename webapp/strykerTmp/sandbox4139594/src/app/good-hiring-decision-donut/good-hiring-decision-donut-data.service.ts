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
import { Injectable } from '@angular/core';
export class PopulationByRegion {
  'outcome': string;
  'val': number;
}
const populationByRegions: PopulationByRegion[] = stryMutAct_9fa48("56") ? [] : (stryCov_9fa48("56"), [stryMutAct_9fa48("57") ? {} : (stryCov_9fa48("57"), {
  outcome: stryMutAct_9fa48("58") ? "" : (stryCov_9fa48("58"), 'Chance of hiring Jim being a great decision!'),
  val: .9999
}), stryMutAct_9fa48("59") ? {} : (stryCov_9fa48("59"), {
  outcome: stryMutAct_9fa48("60") ? "" : (stryCov_9fa48("60"), 'Chance of hiring Jim not being a good choice...'),
  val: 0.0001
})]);
@Injectable()
export class GoodHiringDecisionDataService {
  getPopulationByRegions(): PopulationByRegion[] {
    if (stryMutAct_9fa48("61")) {
      {}
    } else {
      stryCov_9fa48("61");
      return populationByRegions;
    }
  }
}