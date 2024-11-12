/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
    let sortedArray = nums.sort((a, b) => a - b);
    let unique = [...new Set(nums)];
    let big = nums.length
    let newArray = [];
    let j = 0
    for (let i = 1; i <= big; i++) {
        if (i != unique[j]) {
            newArray.push(i);
        } else {
            j++
        }
    }
    return newArray
};