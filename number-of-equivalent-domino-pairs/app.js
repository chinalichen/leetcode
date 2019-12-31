/**
 * @param {number[][]} dominoes
 * @return {number}
 */
const key = ([a, b]) => a > b ? `${a}_${b}` : `${b}_${a}`;
const C = (all, select) => {
  let up = 1;
  let down = 1;
  while (select > 0) {
    up *= all;
    down *= select;
    all--;
    select--;
  }
  return up / down;
};

var numEquivDominoPairs = function (dominoes) {
  const map = {};
  let count = 0;
  dominoes.forEach((card) => {
    const k = key(card);
    if (map[k] == null) {
      map[k] = 1;
      return;
    }
    map[k] += 1;
  });

  for (let k in map) {
    const v = map[k];
    if (v < 2) {
      continue;
    }
    count += C(v, 2);
  }
  return count;
};

module.exports = numEquivDominoPairs;
