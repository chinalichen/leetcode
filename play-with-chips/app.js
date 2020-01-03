/**
 * @param {number[]} chips
 * @return {number}
 */
var minCostToMoveChips = function (chips) {
  let evenCount = 0;
  for (let i = 0; i < chips.length; i++) {
    if (chips[i] % 2 === 0) {
      evenCount++;
    }
  }
  const oddCount = chips.length - evenCount;
  return evenCount > oddCount ? oddCount : evenCount;
};

module.exports = minCostToMoveChips;