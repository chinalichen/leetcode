/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  if (n === 0) {
    return true;
  }
  if (flowerbed.length === 1) {
    return !flowerbed[0];
  }
  let pre = false;
  let post = true;
  let curr = true;
  for (let i = 0; i < flowerbed.length; i++) {
    curr = flowerbed[i];
    post = flowerbed[i + 1];
    if (!curr && !(pre || post)) {
      n--;
      if (n === 0) {
        return true;
      }
      pre = true;
    } else {
      pre = curr;
    }
  }
  return false;
};

module.exports = canPlaceFlowers;