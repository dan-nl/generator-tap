/* eslint no-sync: off */

'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );
var extend = require( 'deep-extend' );
var fs = require( 'fs' );
var loadJson = require( 'yeoman-helpers' ).loadJson;

/**
 * @param {Object} generator
 * @param {Function} generator.destinationPath
 * @param {Function} generator.log
 * @param {Object} generator.package_json
 *
 * @returns {undefined}
 */
function addPackageJsonScript( generator ) {
  var extend_content = { scripts: {} };
  var new_content;
  var package_json;

  package_json = loadJson( generator.destinationPath( 'package.json' ), { sync: true } );
  generator.log( chalk.cyan( 'config' ) );

  if ( !package_json.scripts ) {
    package_json.scripts = {};
  }

  if ( package_json.scripts[ 'cover:browser' ] ) {
    generator.log( chalk.green( '   script already exists' ) + ' cover:browser' );
  } else {
    extend_content.scripts[ 'cover:browser' ] = 'npm test -- --coverage-report=lcov';
    generator.log( chalk.green( '   create script' ) + ' cover:browser' );
  }

  if ( package_json.scripts[ 'cover:cli' ] ) {
    generator.log( chalk.green( '   script already exists' ) + ' cover:cli' );
  } else {
    extend_content.scripts[ 'cover:cli' ] = 'npm test -- --cov';
    generator.log( chalk.green( '   create script' ) + ' cover:cli' );
  }

  if ( package_json.scripts[ 'cover:travis' ] ) {
    generator.log( chalk.green( '   script already exists' ) + ' cover:travis' );
  } else {
    extend_content.scripts[ 'cover:travis' ] = 'npm test -- --coverage-report=lcov --no-browser';
    generator.log( chalk.green( '   create script' ) + ' cover:travis' );
  }

  if (
    package_json.scripts.test &&
    package_json.scripts.test.indexOf( 'no test specified' ) === -1
  ) {
    generator.log( chalk.green( '   script already exists' ) + ' test' );
  } else {
    extend_content.scripts.test = 'tap test/**/*.test.js --reporter spec';
    generator.log( chalk.green( '   create script' ) + ' test' );
  }

  new_content = extend( {}, package_json, extend_content );
  fs.writeFileSync( generator.destinationPath( 'package.json' ), JSON.stringify( new_content ) );
}

module.exports = addPackageJsonScript;
