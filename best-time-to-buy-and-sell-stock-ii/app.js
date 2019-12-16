/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let down = false;
  let up = false;

  let buy = 100000;
  let hold = false;
  let result = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    const curr = prices[i];
    const next = prices[i + 1];
    down = next < curr;
    up = !down;
    if (up && !hold) {
      buy = curr;
      hold = true;
    }
    if (hold && down) {
      hold = false;
      result += curr - buy;
    }
  }
  if (hold) {
    result += prices[prices.length - 1] - buy;
  }
  return result;
};

module.exports = maxProfit;