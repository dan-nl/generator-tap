/* eslint no-sync: off */

'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );
var extend = require( 'deep-extend' );
var fs = require( 'fs' );

/**
 * @param {Object} generator
 * @param {Function} generator.destinationPath
 * @param {Function} generator.log
 * @param {Object} generator.package_json
 *
 * @returns {undefined}
 */
function addPackageJsonScript( generator ) {
  var new_content;
  var extend_content;

  generator.log( chalk.cyan( 'adding scripts' ) + ' to package.json for tap' );
  generator.log( chalk.green( '   script' ) + ' cover:browser' );
  generator.log( chalk.green( '   script' ) + ' cover:cli' );
  generator.log( chalk.green( '   script' ) + ' cover:travis' );
  generator.log( chalk.green( '   script' ) + ' cover:test' );

  extend_content = {
    scripts: {
      'cover:browser': 'npm test -- --coverage-report=lcov',
      'cover:cli': 'npm test -- --cov',
      'cover:travis': 'npm test -- --coverage-report=lcov --no-browser',
      'test': 'tap test/**/*.test.js --reporter spec'
    }
  };

  new_content = extend( {}, generator.package_json, extend_content );
  fs.writeFileSync( generator.destinationPath( 'package.json' ), JSON.stringify( new_content ) );
}

module.exports = addPackageJsonScript;
