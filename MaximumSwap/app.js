var maximumSwap = function (num) {
  var nums = Array.from('' + num).map(n => parseInt(n));
  var sorted = nums.map((n, i) => ({ n, w: i })).sort((n1, n2) => {
    if (n1.n > n2.n) {
      return -1;
    } else if (n1.n < n2.n) {
      return 1;
    } else {
      return n2.w - n1.w; // desc
    }
  });

  var i = j = 0;
  while (i < nums.length && nums[i] === sorted[i].n) {
    if (i !== sorted[i].w) {
      j = i;
      while (j < nums.length && nums[i] === sorted[j].n) j++;
      if (j === nums.length) {
        i = nums.length;
        break;
      } else {
        var same = sorted.slice(i, j);
        sorted = [].concat(sorted.slice(0, i)).concat(same.pop()).concat(same).concat(sorted.slice(j));
      }
    }
    i++;
  }

  if (i !== nums.length) {
    var tmp = nums[i];
    nums[i] = sorted[i].n;
    nums[sorted[i].w] = tmp;
  }

  var str = nums.join('');
  return parseInt(str, 10);
};

module.exports = maximumSwap;