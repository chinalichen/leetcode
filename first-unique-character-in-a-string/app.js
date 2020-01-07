/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  const m = {};
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    m[c] = m[c] ? m[c] + 1 : 1;
  }
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (m[c] === 1) {
      return i;
    }
  }
  return -1;
};

module.exports = firstUniqChar;