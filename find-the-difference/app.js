/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  const sm = {};
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    sm[c] = sm[c] == null ? 1 : sm[c] + 1;
  }
  const tm = {};
  for (let i = 0; i < t.length; i++) {
    const c = t[i];
    tm[c] = tm[c] == null ? 1 : tm[c] + 1;
  }
  for (let c in tm) {
    if (tm[c] > (sm[c] || 0)) {
      return c;
    }
  }
  throw Error("lalala");
};

module.exports = findTheDifference;