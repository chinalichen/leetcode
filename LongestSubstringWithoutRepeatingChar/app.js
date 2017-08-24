function getFirstSubstring(s) {
  var dict = {};
  for (var i = 0; i < s.length; i++) {
    var char = s[i];
    if (dict.hasOwnProperty(char)) {
      return [i, s.slice(dict[char] + 1)];
    }
    dict[char] = i;
  }
  return [s.length, ''];
}

var lengthOfLongestSubstring = function (s) {
  var max = 0;
  var result = [0, s];
  do {
    max = result[0] > max ? result[0] : max;
    result = getFirstSubstring(result[1]);
  } while (result[1] !== '');

  return Math.max(max, result[0]);
};

module.exports = lengthOfLongestSubstring;