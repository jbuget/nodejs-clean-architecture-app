module.exports = {
  testURL: 'http://localhost/',
  verbose: true,
  collectCoverageFrom: [
    '**/*.{js}',
    '!**/node_modules/**',
    '!**/vendor/**',
    '!**/coverage/**'
  ],
  notify: true,
  // coverageThreshold: {
    // global: {
      // branches: 80,
      // functions: 80,
      // lines: 80,
      // statements: 80
    // }
  // }
};