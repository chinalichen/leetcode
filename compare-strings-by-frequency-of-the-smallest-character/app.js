/**
 * @param {string[]} queries
 * @param {string[]} words
 * @return {number[]}
 */
const f = (s) => {
  let min = 'z';
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c < min) {
      min = c;
      count = 1;
    } else if (c === min) {
      count++;
    }
  }
  return count;
};

var numSmallerByFrequency = function (queries, words) {
  const wcount = words.map(s => f(s));
  return queries
    .map(s => f(s))
    .map(qc => wcount.filter(c => qc < c).length);
};

module.exports = numSmallerByFrequency;