/**
 * @param {number} rowIndex
 * @return {number[]}
 */

var c = function (n, m) {
  let fac = 1;
  let a = 1;

  while (m > 0) {
    fac *= m;
    a *= n;
    m--;
    n--;
  }

  return a / fac;
};

var getRow = function (k) {
  if (k === 0) {
    return [1];
  }
  k += 1;
  const row = [1];
  for (let i = 1; i < k - 1; i++) {
    row[i] = c(k - 1, i);
  }
  return row.concat(1);
};

module.exports = getRow;