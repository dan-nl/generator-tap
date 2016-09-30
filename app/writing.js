'use strict';

/**
 * module dependencies
 */
var fs = require( 'fs' );
var chalk = require( 'chalk' );

/**
 * @returns {void}
 */
function writing() {
  try {
    fs.mkdirSync( './test' );
  } catch ( err ) {
    if ( err.code === 'EEXIST' ) {
      this.log( chalk.cyan( 'exists' ) + ' ./test' );
    } else {
      this.log( err.message );
    }
  }

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
