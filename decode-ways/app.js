/**
 * @param {string} s
 * @return {number}
 */
var numDecodings = function (s) {
  const res = [];
  res[-1] = 1;
  res[-2] = 1;

  for (let i = 0; i < s.length; i++) {
    let count = 0;
    const str = s.slice(i - 1, i + 1);
    const v2 = parseInt(str, 10);
    if (str.length === 2 && str[0] !== '0' && v2 > 0 && v2 <= 26) {
      count += res[i - 2];
    }
    const v1 = parseInt(s[i], 10);
    if (v1 > 0 && v1 <= 9) {
      count += res[i - 1];
    }
    res[i] = count;
  }

  return res[s.length - 1];
};

module.exports = numDecodings;