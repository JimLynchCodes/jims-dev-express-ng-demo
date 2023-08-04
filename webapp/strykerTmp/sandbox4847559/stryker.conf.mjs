// @ts-check
/** @type {import('@stryker-mutator/api/core').PartialStrykerOptions} */
const config = {
  _comment:
    "This config was generated using 'stryker init'. Please see the guide for more information: https://stryker-mutator.io/docs/stryker-js/guides/angular",
  mutate: [
    "src/**/*.ts",
    "!src/**/*.spec.ts",
    // "src/**/footer.component.ts",
    // "!src/**/footer.component.spec.ts",
    "!src/test.ts",
    "!src/environments/*.ts",
  ],
  testRunner: "karma",
  karma: {
    configFile: "karma.conf.js",
    projectType: "angular-cli",
    config: {
      browsers: ["ChromeHeadless"],
    },
  },
  reporters: ["progress", "clear-text", "html"],
  concurrency: 8,
  concurrency_comment:
    "Recommended to use about half of your available cores when running stryker with angular",
  coverageAnalysis: "perTest",
  disableTypeChecks: false,
  tempDirName: 'strykerTmp'
};
export default config;
