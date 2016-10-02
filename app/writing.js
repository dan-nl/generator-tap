/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var addDirectory = require( './helpers/add-directory' );
var addPackageJsonScripts = require( './helpers/add-package-json-scripts' );

/**
 * @returns {undefined}
 */
function writing() {
  if ( !this.options.PromptAnswers.get( 'install-tap' ) ) {
    return;
  }

  addDirectory( this );
  addPackageJsonScripts( this );
}

module.exports = writing;
