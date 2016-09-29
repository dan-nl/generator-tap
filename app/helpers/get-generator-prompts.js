'use strict';

/**
 * @param {Object} generator
 *
 * @returns {Array}
 */
function getModulePrompts( generator ) {
  return [
    {
      type: 'confirm',
      name: 'install-sinon',
      message: 'install sinon as well:',
      default: true
    }
  ];
}

module.exports = getModulePrompts;
