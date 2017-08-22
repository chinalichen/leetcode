function assert(expect, actual, title) {
  if (actual !== expect) {
    console.error(title, 'failed, expect `' + expect + '`', 'but got `' + actual + '`');
  } else {
    console.log(title, 'pass');
  }
}

module.exports = assert;
