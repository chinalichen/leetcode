/**
 * @param {number[]} cost
 * @return {number}
 */
const f = (cost, n) => {
  const l = cost.length;
  if (l === 1) {
    return cost[0];
  }
  if (l === 2) {
    return cost[1];
  }
  const c1 = f(cost.slice(0, l - 2), 2);
  const c2 = f(cost.slice(0, l - 1), 1);
  return Math.min(c1, c2) + cost[l - 1]
};
var minCostClimbingStairs = function (cost) {
  return f(cost.concat(0));
};

module.exports = minCostClimbingStairs;
