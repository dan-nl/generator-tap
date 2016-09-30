'use strict';

/**
 * @returns {Array}
 */
function getGeneratorPrompts() {
  return [
    {
      type: 'confirm',
      name: 'install-sinon',
      message: 'install sinon as well:',
      default: true
    }
  ];
}

module.exports = getGeneratorPrompts;
