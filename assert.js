// all chai.assert api. http://chaijs.com/api/assert/
const chaiAssert = require('./chai').assert;

const assert = {};

for (var k in chaiAssert) {
  const func = chaiAssert[k];
  if (typeof (func) === 'function') {
    assert[k] = getWrapped(func);
  }
}

function getWrapped(func) {
  return function (expect, actual, title) {
    try {
      func.apply(this, arguments);
      console.log(title, 'pass');
    } catch (e) {
      console.error(title, 'failed, expect `' + expect + '`', 'but got `' + actual + '`');
    }
  }
}

module.exports = assert;
