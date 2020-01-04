/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
const getMap = (chars) => {
  const map = {};
  for (let i = 0; i < chars.length; i++) {
    const c = chars[i];
    map[c] = map[c] ? map[c] + 1 : 1;
  }
  return map;
};

var countCharacters = function (words, chars) {
  const allMap = getMap(chars);
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    const wordMap = getMap(word);
    let can = true;
    for (let k in wordMap) {
      if (!allMap[k]) {
        can = false;
        break;
      }
      if (wordMap[k] > allMap[k]) {
        can = false;
        break;
      }
    }
    if (!can) {
      continue;
    }
    count += word.length;
  }
  return count;
};

module.exports = countCharacters;