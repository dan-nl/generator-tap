/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var addDirectory = require( './helpers/add-directory' );

/**
 * @returns {undefined}
 */
function writing() {
  if ( !this.options.PromptAnswers.get( 'install-tap' ) ) {
    return;
  }

  addDirectory( this );
}

module.exports = writing;
