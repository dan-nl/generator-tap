'use strict';

/**
 * @type {*[]}
 */
var prompts = [
  {
    default: true,
    message: 'install tap',
    name: 'install-tap',
    type: 'confirm'
  },
  {
    default: true,
    message: 'install sinon',
    name: 'install-sinon',
    type: 'confirm',
    when: function ( answers ) {
      return answers[ 'install-tap' ];
    }
  }
];

module.exports = prompts;
