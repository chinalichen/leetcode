const chaiAssert = require('./chai').assert;

const assert = {};

for (var k in chaiAssert) {
  if (typeof (chaiAssert[k]) === 'function') {
    assert[k] = getWrapped(chaiAssert);
  }
}

function getWrapped(func) {
  return function (expect, actual, title) {
    try {
      func.call(this, arguments);
      console.log(title, 'pass');
    } catch (e) {
      console.error(title, 'failed, expect `' + expect + '`', 'but got `' + actual + '`');
    }
  }
}

module.exports = assert;
