/**
 * @param {number[]} deck
 * @return {boolean}
 */

// 记得保存到github
const gcd = (a, b) => {
  if (a < b) {
      return gcd(b, a);
  }
  return b === 0 ? a : gcd(a - b, b);
};

var hasGroupsSizeX = function (deck) {
  const bucket = {};
  for (let i = 0; i < deck.length; i++) {
      const v = deck[i];
      bucket[v] = bucket[v] == null ? 1 : bucket[v] + 1;
  }
  const values = [];
  let min = 99999999;
  for (let k in bucket) {
      const v = bucket[k];
      if (v < 2) {
          return false;
      }
      if (min > v) {
          min = v;
      }
      values.push(v);
  }

  const l = values.length;
  if (l === 1) {
      return values[0] >= 2;
  }

  let g = gcd(values[0], values[1]);
  if (g === 1) {
      return false;
  }
  for (let i = 2; i < l; i++) {
      g = gcd(g, values[i]);
      if (g === 1) {
          return false;
      }
  }
  return true;
};

module.exports = hasGroupsSizeX;
