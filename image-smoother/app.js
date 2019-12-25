/**
 * @param {number[][]} M
 * @return {number[][]}
 */
var getRC = (M) => {
  return {
    r: M.length,
    c: M[0].length,
  }
};

var getCellNearby = (mr, mc, r, c) => {
  const pos = [
    [r - 1, c - 1], [r - 1, c], [r - 1, c + 1],
    [r, c + 1], [r, c], [r, c - 1],
    [r + 1, c - 1], [r + 1, c], [r + 1, c + 1],
  ];
  const inM = (rr, cc) => {
    if (rr < 0 || rr >= mr) {
      return false;
    }
    if (cc < 0 || cc >= mc) {
      return false;
    }
    return true;
  };
  return pos.filter(p => inM(p[0], p[1]));
};

var imageSmoother = function (M) {
  const { r: mr, c: mc } = getRC(M);
  const smoothed = [];
  for (let r = 0; r < mr; r++) {
    smoothed.push([]);
  }
  for (let r = 0; r < mr; r++) {
    for (let c = 0; c < mc; c++) {
      const cells = getCellNearby(mr, mc, r, c);
      const sum = cells.map(p => M[p[0]][p[1]])
        .reduce((s, n) => s + n);
      smoothed[r][c] = Math.floor(sum / cells.length);
    }
  }
  return smoothed;
};

module.exports = imageSmoother;