/**
 * @param {number[]} bits
 * @return {boolean}
 */
var isOneBitCharacter = function (bits) {
  if (bits.length < 2) {
    return true;
  }
  // if (bits[bits.length - 2] === 0) {
  //   return true;
  // }
  let i;
  for (i = 0; i < bits.length - 1; i++) {
    if (bits[i] === 1) {
      i++;
    }
  }
  return i === bits.length - 1;
};

module.exports = isOneBitCharacter;