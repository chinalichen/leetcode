/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function (A, B) {
  const a = A.split(' ');
  const b = B.split(' ');

  const am = {};
  const union = a.concat(b);
  for (let i = 0; i < union.length; i++) {
    const word = union[i];
    am[word] = am[word] ? am[word] + 1 : 1;
  }
  const result = [];
  for (let k in am) {
    if (am[k] === 1) {
      result.push(k);
    }
  }
  return result;
};
module.exports = uncommonFromSentences;
