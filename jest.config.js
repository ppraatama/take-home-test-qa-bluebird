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
    [
      "jest-html-reporters",
      {
        publicPath: "./test-reports",
        filename: "test-report.html",
        expand: true,
      },
    ],
  ],
};

module.exports = config;
