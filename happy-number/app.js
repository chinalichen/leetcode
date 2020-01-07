/**
 * @param {number} n
 * @return {boolean}
 */
const happy = (map, n) => {
  if (n === 1) {
    return true;
  }
  if (map[n] != null) {
    return false;
  }
  map[n] = true;
  const newN = ('' + n).split('').map(n => 0 + n).map(n => n * n).reduce((s, n) => s + n);
  return happy(map, newN);
};

var isHappy = function (n) {
  return happy({}, n)
};

module.exports = isHappy;