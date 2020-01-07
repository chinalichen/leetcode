/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  const tm = {};
  const sm = {};
  for (let i = 0; i < t.length; i++) {
    const tc = t[i];
    const sc = s[i];
    if (tm[tc] == null && sm[sc] == null) {
      tm[tc] = sc;
      sm[sc] = tc;
      continue;
    }
    if (tm[tc] !== sc) {
      return false;
    }
  }
  return true;
};

module.exports = isIsomorphic;