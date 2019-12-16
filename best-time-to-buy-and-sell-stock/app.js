/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let max = 0;
  let result = 0;
  for (let i = prices.length - 1; i >= 0; i--) {
    if (prices[i] > max) {
      max = prices[i];
    }
    if (max - prices[i] > result) {
      result = max - prices[i];
    }
  }
  return result;
};

module.exports = maxProfit;