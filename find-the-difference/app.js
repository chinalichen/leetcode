/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  if (s === t) {
    return null;
  }
  if (s.length === 0) {
    return t;
  }
  if (s.length === 1) {
    return t[0] === s ? t[1] : t[0];
  }
  const pos = Math.floor(s.length / 2);
  const s1 = findTheDifference(s.slice(0, pos), t.slice(0, pos));
  if (s1 != null) {
    return s1;
  }
  const s2 = findTheDifference(s.slice(pos), t.slice(pos));
  if (s2 != null) {
    return s2;
  }
  throw Error("lalala");
};

module.exports = findTheDifference;