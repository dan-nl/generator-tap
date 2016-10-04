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

  this.log( chalk.cyan( 'install' ) );
  this.log( chalk.green( '   package' ) + ' tap' );

  if ( this.options.PromptAnswers.get( 'install-sinon' ) ) {
    modules.push( 'sinon' );
    this.log( chalk.green( '   package' ) + ' sinon' );
  }

  this.npmInstall(
    modules,
    { 'save-dev': true }
  );
}

module.exports = install;
