/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var chalk = require( 'chalk' );

/**
 * @returns {undefined}
 */
function install() {
  var modules = [ 'tap' ];

  if ( !this.options.PromptAnswers.get( 'install-tap' ) ) {
    return;
  }

  if ( this.options.PromptAnswers.get( 'install-sinon' ) ) {
    modules.push( 'sinon' );
  }

  if ( modules.length > 0 ) {
    this.log( chalk.cyan( 'npm install' ) + ' for ' + this.options.namespace );
  }

  this.npmInstall(
    modules,
    { 'save-dev': true }
  );
}

module.exports = install;
