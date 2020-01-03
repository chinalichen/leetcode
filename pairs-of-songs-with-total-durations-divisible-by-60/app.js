/**
 * @param {number[]} time
 * @return {number}
 */
const key = (a, b) => a > b ? `${b}_${a}` : `${a}_${b}`;
var numPairsDivisibleBy60 = function (time) {
  const totals = [];
  for (let i = 1; i <= 20; i++) totals.push(i * 60);

  const bucket = [];
  for (let i = 0; i < time.length; i++) {
    const duri = time[i];
    const count = bucket[duri];
    bucket[duri] = count == null ? 1 : count + 1;
  }

  const map = {};
  let totalCount = 0;
  bucket.forEach((count, duri) => {
    totals.forEach((total) => {
      const diff = total - duri;
      const count2 = bucket[diff];
      if (count2 == null) {
        return;
      }
      const k = key(diff, duri);
      if (map[k] != null) {
        return;
      }
      map[k] = true;
      totalCount += (diff === duri ? count * (count - 1) / 2 : count2 * count);
    });
  });
  return totalCount;
};

module.exports = numPairsDivisibleBy60;