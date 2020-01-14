/**
 * @param {number} x
 * @param {number} y
 * @param {number} bound
 * @return {number[]}
 */
var powerfulIntegers = function (x, y, bound) {
  if (x === y && x === 1) {
    return [2].filter(n => n <= bound);
  }
  if (y === 1) {
    return powerfulIntegers(y, x, bound);
  }
  const xm = [];
  if (x === 1) {
    xm.push(1);
  } else {
    for (let i = 0; i <= bound; i++) {
      const v = Math.pow(x, i);
      if (v > bound) {
        break;
      }
      xm.push(v);
    }
  }

  const result = {};
  for (let i = 0; i <= bound; i++) {
    const yi = Math.pow(y, i);
    for (let j = 0; j < xm.length; j++) {
      const xj = xm[j];
      const sum = xj + yi;
      if (sum > bound) {
        break;
      }
      result[sum] = sum;
    }
  }

  return Object.values(result);
};

module.exports = powerfulIntegers;
