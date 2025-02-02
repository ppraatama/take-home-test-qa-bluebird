/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

/** @type {import('jest').Config} */
const config = {
  clearMocks: true,
  reporters: [
    "default", // Reporter default untuk terminal
    [
      "jest-junit",
      {
        outputDirectory: "./test-reports", // Tempat menyimpan file laporan
        outputName: "test-report.xml", // Nama file XML
      },
    ],
  ],
};

module.exports = config;
