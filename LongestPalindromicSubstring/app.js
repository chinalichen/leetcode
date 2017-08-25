var time = require('../time');

function longestPalindrome(s) {
  function isPalindromic(ss) {
    var k = 0, m = ss.length - 1;
    while (k < m) {
      if (ss[k] === ss[m]) {
        k++;
        m--;
      } else {
        return false;
      }
    }
    return true;
  }

  function commonSubstring(s1, s2) {
    var length = Math.min(s2.length, s1.length);
    var start = 0, maxLength = 0;
    for (var i = 0, j = 0; i < length;) {
      if (s1[i] === s2[i]) {
        j = i;
        while (s1[i] === s2[i] && i < length) i++;
        if (i - j > maxLength) {
          var common = s1.slice(j, i);
          if (isPalindromic(common)) {
            maxLength = i - j;
            start = j;
          }
        }
      } else {
        i++;
      }
    }

    return s1.slice(start, start + maxLength);
  }

  var r = Array.from(s).reverse().join('');
  var start = 0, result = '';
  do {
    let toLeft = r.slice(start++);
    let substring = commonSubstring(toLeft, s);
    if (substring.length > result.length) {
      result = substring;
    }
  } while (start < s.length);

  start = 0;
  do {
    let toLeft = s.slice(start++);
    let substring = commonSubstring(toLeft, r);
    if (substring.length > result.length) {
      result = substring;
    }
  } while (start < s.length);

  return result;
}

module.exports = longestPalindrome;