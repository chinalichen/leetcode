/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function (candies) {
  const cm = {};
  for (let i = 0; i < candies.length; i++) {
    const c = candies[i];
    cm[c] = cm[c] ? cm[c] + 1 : 1;
  }

  if (Object.keys(cm).length > candies.length / 2) {
    return candies.length / 2;
  }
  return Object.keys(cm).length;
};

module.exports = distributeCandies;