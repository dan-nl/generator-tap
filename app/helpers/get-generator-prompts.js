'use strict';

/**
 * @returns {Array}
 */
function getGeneratorPrompts() {
  return [
    {
      default: true,
      message: 'install sinon as well',
      name: 'install-sinon',
      type: 'confirm'
    }
  ];
}

module.exports = getGeneratorPrompts;
