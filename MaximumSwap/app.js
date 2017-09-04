var maximumSwap = function (num) {
  var nums = Array.from('' + num).map(n => parseInt(n));
  var sorted = nums.slice(0).sort().reverse();

  var i = j = 0;
  while (nums[i] === sorted[i] && i < nums.length) {
    i++;
  }

  if(i === nums.length) {
    return num;
  }else {
    
  }
};

module.exports = maximumSwap;