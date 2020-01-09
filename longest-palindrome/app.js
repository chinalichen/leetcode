/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let sm = {};
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    sm[c] = sm[c] ? sm[c] + 1 : 1;
  }

  const evenSum = Object.values(sm)
    .filter(v => v % 2 === 0)
    .reduce((s, v) => s + v, 0);
  const odds = Object.values(sm)
    .filter(v => v % 2 === 1);
  const oddSum = odds
    .reduce((s, v) => s + v, 0);

  return evenSum + (odds.length > 0 ? (oddSum - odds.length + 1) : 0);
};

module.exports = longestPalindrome;