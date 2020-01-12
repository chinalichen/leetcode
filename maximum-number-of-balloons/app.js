/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function (text) {
  const balloon = { b: 1, a: 1, l: 2, o: 2, n: 1 };
  const map = {};
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    map[c] = map[c] ? map[c] + 1 : 1;
  }
  let minCount = 999999999;
  for (let k in balloon) {
    if (map[k] == null) {
      return 0;
    }
    const v = Math.floor(map[k] / balloon[k]);
    if (minCount > v) {
      minCount = v;
    }
  }
  return minCount;
};

module.exports = maxNumberOfBalloons;