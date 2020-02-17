/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const n = nums.length;
    let withDup = 0;
    for (let i = 0; i < n; i++) {
        withDup ^= i;
    }
    const withoutDup = nums.reduce((s, v) => s ^ v, withDup);

    const dup = withDup - withoutDup;
    const correctSum = n * (n + 1) / 2;
    const sum = nums.reduce((s, v) => s + v);
    const delta = correctSum - sum;
    return [dup, dup + delta];
};

module.exports = findErrorNums;
