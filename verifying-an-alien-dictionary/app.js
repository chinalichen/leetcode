/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
  const cm = {};
  for (let i = 0; i < order.length; i++) {
    const c = order[i];
    cm[c] = i;
  }

  const cmp = (str1, str2) => {
    if (str1.length < str2.length) {
      return -cmp(str2, str1);
    }
    for (let i = 0; i < str1.length; i++) {
      while (str1[i] === str2[i]) i++;
      const w1 = cm[str1[i]] || -1;
      const w2 = cm[str2[i]] || -1;
      if (w1 > w2) {
        return 1;
      }
      if (w1 < w2) {
        return -1;
      }
      return 0;
    }
  };

  for (let i = 1; i < words.length; i++) {
    if (cmp(words[i - 1], words[i]) === 1) {
      return false;
    }
  }
  return true;
};

module.exports = isAlienSorted;
