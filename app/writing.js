'use strict';

function writing() {
  this.fs.extendJSON(
    './package.json',
    {
      scripts: {
        "cover:browser": "npm test -- --coverage-report=lcov",
        "cover:cli": "npm test -- --cov",
        "cover:travis": "npm test -- --coverage-report=lcov --no-browser",
        "test": "tap test/**/*.test.js --reporter spec"
      }
    }
  );
}

module.exports = writing;
