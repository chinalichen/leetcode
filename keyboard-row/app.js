/**
 * @param {string[]} words
 * @return {string[]}
 */
const oneLine = (word) => {
  const keyboard = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm']
    .map(s => s + s.toUpperCase())
    .map(s => s.split(''))
    .map(sa => sa.reduce((m, c) => { m[c] = true; return m; }, {}));
  if (word.length < 2) {
    return true;
  }
  const letters = keyboard.find(m => m[word[0]]);
  return !word.slice(1).split('').some(c => !letters[c]);
};
var findWords = function (words) {
  return words.filter(w => oneLine(w));
};

module.exports = findWords;