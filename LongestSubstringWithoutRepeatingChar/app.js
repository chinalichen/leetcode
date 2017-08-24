var lengthOfLongestSubstring = function (s) {
  var dict = {};
  var max = 0;
  for (var i = 0, j = 0; i < s.length && j < s.length;) {
    var char = s[i];
    if (dict[char]) {
      dict[s[j]] = false;
      j++;
    } else {
      dict[char] = true;
      i++;
      max = Math.max(max, i - j);
    }
  }
  return max;
};

module.exports = lengthOfLongestSubstring;