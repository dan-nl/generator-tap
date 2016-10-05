/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var addDirectory = require( './helpers/add-directory' );
var addIndexTest = require( './helpers/add-index-test' );

/**
 * @returns {undefined}
 */
function writing() {
  if ( !this.options.PromptAnswers.get( 'install-tap' ) ) {
    return;
  }

  addDirectory( this );
  addIndexTest( this );
}

module.exports = writing;
