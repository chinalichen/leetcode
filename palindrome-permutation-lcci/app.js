/**
 * @param {string} s
 * @return {boolean}
 */
var canPermutePalindrome = function (s) {
  const letters = s.split('').filter(c => c !== ' ');
  const letterMap = {};
  for (let i = 0; i < letters.length; i++) {
    const letter = letters[i];
    letterMap[letter] = letterMap[letter] ? letterMap[letter] + 1 : 1;
  }
  let odd = 0;
  for (let letter in letterMap) {
    const count = letterMap[letter];
    if (count % 2 === 1) {
      odd++;
      if (odd > 1) {
        return false;
      }
    }
  }
  return true;
};

module.exports = canPermutePalindrome;