/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  reporters: [
    "default", 
    [
      "jest-junit",
      {
        outputDirectory: "./test-reports", 
        outputName: "test-report.xml", 
      },
    ],
  ],
};

module.exports = config;
