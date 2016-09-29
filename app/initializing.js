'use strict';

/**
 * module dependencies
 */
var addPrompts = require( 'yeoman-prompting-helpers' ).addPrompts;

/**
 * @returns {void}
 */
function initializing() {
  this.options.prompts = addPrompts( this );
}

module.exports = initializing;
