'use strict';

function install() {
  var modules = [ 'tap' ];

  if ( this.options.prompts.get( 'install-sinon' ) ) {
    modules.push( 'sinon' );
  }

  this.log( 'installing for ' + this.options.namespace );

  this.npmInstall(
    modules,
    { 'save-dev': true }
  );
}

module.exports = install;
