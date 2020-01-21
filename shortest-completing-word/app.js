/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
function getLetterMap(str) {
  str = str.toLowerCase();
  const m = {};
  for (let i = 0; i < str.length; i++) {
    const s = str[i];
    if (s >= 'a' && s <= 'z') {
      m[s] = m[s] ? m[s] + 1 : 1;
    }
  }
  return m;
}
var shortestCompletingWord = function (licensePlate, words) {
  const lm = getLetterMap(licensePlate);
  let short = '';
  let shortLen = 999999999;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wm = getLetterMap(word);
    let match = true;
    for (let k in lm) {
      if (lm[k] > (wm[k] || 0)) {
        match = false;
      }
    }
    if (match && word.length < shortLen) {
      shortLen = word.length;
      short = word;
    }
  }
  return short;
};

module.exports = shortestCompletingWord;
