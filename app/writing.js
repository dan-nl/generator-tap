/* eslint no-invalid-this: off, no-sync: off */

'use strict';

/**
 * module dependencies
 */
var fs = require( 'fs' );
var chalk = require( 'chalk' );

/**
 * @returns {undefined}
 */
function writing() {
  try {
    this.log( chalk.cyan( 'directory' ) );
    this.log( chalk.green( '   create' ) + ' ./test' );
    fs.mkdirSync( './test' );
  } catch ( err ) {
    if ( err.code === 'EEXIST' ) {
      this.log( chalk.cyan( 'exists' ) + ' ./test' );
    } else {
      this.log( err.message );
    }
  }

  this.log( chalk.cyan( 'adding scripts' ) + ' to package.json for tap' );
  this.log( chalk.green( '   script' ) + ' cover:browser' );
  this.log( chalk.green( '   script' ) + ' cover:cli' );
  this.log( chalk.green( '   script' ) + ' cover:travis' );
  this.log( chalk.green( '   script' ) + ' cover:test' );

  this.fs.extendJSON(
    this.destinationPath( 'package.json' ),
    {
      scripts: {
        'cover:browser': 'npm test -- --coverage-report=lcov',
        'cover:cli': 'npm test -- --cov',
        'cover:travis': 'npm test -- --coverage-report=lcov --no-browser',
        'test': 'tap test/**/*.test.js --reporter spec'
      }
    }
  );
}

module.exports = writing;
