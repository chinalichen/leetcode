/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const n = nums.length;
    const dupMap = {};
    let dup = 0;
    for (let i = 0; i < n; i++) {
        const v = nums[i];
        if (dupMap[v]) {
            dup = v;
            break;
        }
        dupMap[v] = true;
    }

    const correctSum = n * (n + 1) / 2;
    const sum = nums.reduce((s, v) => s + v);
    const delta = correctSum - sum;
    return [dup, dup + delta];
};

module.exports = findErrorNums;
