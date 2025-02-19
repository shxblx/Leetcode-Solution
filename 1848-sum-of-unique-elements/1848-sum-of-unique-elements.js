/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    return nums.sort((a, b) => a - b).filter((el, idx, arr) => arr[idx - 1] !== el && arr[idx + 1] !== el).reduce((a, c) => a += c, 0)
};