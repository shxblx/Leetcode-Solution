/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    let sorted = nums.sort((a, b) => b - a)
    let unique = new Set(sorted)
    let arr = [...unique]

    if (arr.length < 3) {
        return arr[0]
    } else {
        return arr[2]
    }

};