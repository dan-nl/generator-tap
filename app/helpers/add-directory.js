/* eslint no-sync: off */

'use strict';

/**
 * module dependencies
 */
var fs = require( 'fs' );
var chalk = require( 'chalk' );

/**
 * @param {Object} generator
 * @param {Function} generator.destinationPath
 * @param {Function} generator.log
 *
 * @returns {undefined}
 */
function addDirectory( generator ) {
  try {
    generator.log( chalk.cyan( 'directory' ) );
    fs.mkdirSync( generator.destinationPath( 'test' ) );
    generator.log( chalk.green( '   create' ) + ' ./test' );
  } catch ( err ) {
    if ( err.code === 'EEXIST' ) {
      generator.log( chalk.green( '   exists' ) + ' ./test' );
    } else {
      generator.log( err.message );
    }
  }
}

module.exports = addDirectory;
