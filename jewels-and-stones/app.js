/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function (J, S) {
  const jm = {};
  for (let i = 0; i < J.length; i++) {
    const j = J[i];
    jm[j] = true;
  }

  let count = 0;
  for (let i = 0; i < S.length; i++) {
    const s = S[i];
    if (jm[s]) {
      count++;
    }
  }

  return count;
};

module.exports = numJewelsInStones;
