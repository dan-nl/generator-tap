/* eslint no-invalid-this: off */

'use strict';

/**
 * module dependencies
 */
var displayGeneratorIntro = require( 'yeoman-helpers' ).displayGeneratorIntro;
var generator_ascii_art = require( './helpers/ascii-art' );
var generator_intro_text = require( './helpers/intro-text' );
var prompts = require( './helpers/prompts-install' );
var promptingHelper = require( 'yeoman-prompting-helpers' ).promptingHelper;

/**
 * @returns {Promise}
 */
function prompting() {
  displayGeneratorIntro(
    this,
    {
      ascii_art: {
        art: generator_ascii_art,
        display: this.options.asciiArt
      },
      intro_text: generator_intro_text
    }
  );

  return promptingHelper( this, prompts );
}

module.exports = prompting;
