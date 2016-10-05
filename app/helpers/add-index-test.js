'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );
var fs = require( 'fs' );

/**
 * @param {Base} generator
 */
function addIndexTest( generator ) {
  var stat;

  try {
    stat = fs.statSync( generator.destinationPath( 'test/index.test.js' ) );
  } catch ( err ) {
    if ( err.code === 'ENOENT' ) {
      generator.copy(
        generator.templatePath( 'test/index.test.js' ),
        generator.destinationPath( 'test/index.test.js' )
      );
    } else {
      generator.log( err.message );
    }

    return;
  }

  if ( stat.isFile() ) {
    generator.log( chalk.green( '   exists' ) + ' ./test/index.test.js' );
  }
}

module.exports = addIndexTest;
