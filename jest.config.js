module.exports = {
  testURL: 'http://localhost/',
  verbose: true,
  coverageReporters: [
    'lcov',
    'text',
    'text-summary'
  ],
  collectCoverageFrom: [
    'src/{application,interfaces}/**/*.{js}',
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