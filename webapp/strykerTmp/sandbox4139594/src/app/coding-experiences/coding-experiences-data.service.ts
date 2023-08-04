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
export class Population {
  "year": string;
  "webDevelopment": number;
  "javascript": number;
  "angular": number;
}
export const populationData: Population[] = stryMutAct_9fa48("25") ? [] : (stryCov_9fa48("25"), [stryMutAct_9fa48("26") ? {} : (stryCov_9fa48("26"), {
  year: stryMutAct_9fa48("27") ? "" : (stryCov_9fa48("27"), '2012'),
  webDevelopment: 0,
  javascript: 0,
  angular: 0
}), stryMutAct_9fa48("28") ? {} : (stryCov_9fa48("28"), {
  year: stryMutAct_9fa48("29") ? "" : (stryCov_9fa48("29"), '2013'),
  webDevelopment: 0,
  javascript: 0,
  angular: 0
}), stryMutAct_9fa48("30") ? {} : (stryCov_9fa48("30"), {
  year: stryMutAct_9fa48("31") ? "" : (stryCov_9fa48("31"), '2014'),
  webDevelopment: 1,
  javascript: 0,
  angular: 0
}), stryMutAct_9fa48("32") ? {} : (stryCov_9fa48("32"), {
  year: stryMutAct_9fa48("33") ? "" : (stryCov_9fa48("33"), '2015'),
  webDevelopment: 2,
  javascript: 0,
  angular: 0
}), stryMutAct_9fa48("34") ? {} : (stryCov_9fa48("34"), {
  year: stryMutAct_9fa48("35") ? "" : (stryCov_9fa48("35"), '2016'),
  webDevelopment: 3,
  javascript: 1,
  angular: 0
}), stryMutAct_9fa48("36") ? {} : (stryCov_9fa48("36"), {
  year: stryMutAct_9fa48("37") ? "" : (stryCov_9fa48("37"), '2017'),
  webDevelopment: 4,
  javascript: 2,
  angular: 1
}), stryMutAct_9fa48("38") ? {} : (stryCov_9fa48("38"), {
  year: stryMutAct_9fa48("39") ? "" : (stryCov_9fa48("39"), '2018'),
  webDevelopment: 5,
  javascript: 3,
  angular: 2
}), stryMutAct_9fa48("40") ? {} : (stryCov_9fa48("40"), {
  year: stryMutAct_9fa48("41") ? "" : (stryCov_9fa48("41"), '2019'),
  webDevelopment: 6,
  javascript: 4,
  angular: 3
}), stryMutAct_9fa48("42") ? {} : (stryCov_9fa48("42"), {
  year: stryMutAct_9fa48("43") ? "" : (stryCov_9fa48("43"), '2020'),
  webDevelopment: 7,
  javascript: 5,
  angular: 3
}), stryMutAct_9fa48("44") ? {} : (stryCov_9fa48("44"), {
  year: stryMutAct_9fa48("45") ? "" : (stryCov_9fa48("45"), '2021'),
  webDevelopment: 8,
  javascript: 6,
  angular: 4
}), stryMutAct_9fa48("46") ? {} : (stryCov_9fa48("46"), {
  year: stryMutAct_9fa48("47") ? "" : (stryCov_9fa48("47"), '2022'),
  webDevelopment: 9,
  javascript: 7,
  angular: 5
}), stryMutAct_9fa48("48") ? {} : (stryCov_9fa48("48"), {
  year: stryMutAct_9fa48("49") ? "" : (stryCov_9fa48("49"), '2023'),
  webDevelopment: 10,
  javascript: 8,
  angular: 5
})]);
@Injectable()
export class CodingExperiencesDataService {
  getPopulationData(): Population[] {
    if (stryMutAct_9fa48("50")) {
      {}
    } else {
      stryCov_9fa48("50");
      return populationData;
    }
  }
}