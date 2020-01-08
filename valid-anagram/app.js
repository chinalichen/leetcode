/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  const all = 'abcdefghijklmnopqrstuvwxyz';
  const map1 = {};
  for (let i = 0; i < s.length; i++) {
    const c = s.charAt(i);
    map1[c] = map1[c] ? map1[c] + 1 : 1;
  }
  for (let i = 0; i < t.length; i++) {
    const c = t.charAt(i);
    if (map1[c] == null) {
      return false;
    }
    map1[c]--;
  }
  for (let k in map1) {
    if (map1[k] !== 0) {
      return false;
    }
  }
  return true;
};

module.exports = isAnagram;