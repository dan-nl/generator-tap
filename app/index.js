'use strict';

var generators = require( 'yeoman-generator' );
var generator = {};

generator.configuring = require( './configuring' );
generator.initializing = require( './initializing' );
generator.install = require( './install' );
generator.prompting = require( './prompting' );
generator.writing = require( './writing' );

module.exports = generators.Base.extend( generator );
