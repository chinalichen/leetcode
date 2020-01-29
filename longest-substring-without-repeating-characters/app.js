/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s === "") {
    return s.length;
  }

  const set = {};
  let max = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (set[c] == null) {
      set[c] = i;
      continue;
    }
    const keys = Object.keys(set);
    if (max < keys.length) {
      max = keys.length;
    }
    const index = set[c];
    keys.filter(k => set[k] <= index).forEach(k => delete set[k]);
    set[c] = i;
  }

  const keys = Object.keys(set);
  if (max < keys.length) {
    max = keys.length;
  }

  return max;
};

module.exports = lengthOfLongestSubstring;
