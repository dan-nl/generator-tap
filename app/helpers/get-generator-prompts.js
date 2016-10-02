'use strict';

/**
 * @returns {Array}
 */
function getGeneratorPrompts() {
  return [
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
}

module.exports = getGeneratorPrompts;
