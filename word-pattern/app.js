/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
const transform = words => {
  let code = 0;
  const map = {};
  const result = [];
  for (let i = 0; i < words.length; i++) {
    const w = words[i];
    if (map[w] == null) {
      map[w] = code;
      code++;
    }
    result.push(map[w]);
  }
  return result;
};
var wordPattern = function (pattern, str) {
  const a1 = transform(pattern.split(""));
  const a2 = transform(str.split(" "));
  if (a1.length !== a2.length) {
    return false;
  }
  for (let i = 0; i < a1.length; i++) {
    if (a1[i] !== a2[i]) {
      return false;
    }
  }
  return true;
};

module.exports = wordPattern;