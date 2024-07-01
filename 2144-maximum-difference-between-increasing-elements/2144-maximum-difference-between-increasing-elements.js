/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumDifference = function (nums) {
    let curr = 0
    let arr = []
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] < nums[j]) {
                curr = nums[j] - nums[i]
                arr.push(curr)
            }
        }
    }
    let result = Math.max(...arr)
    console.log(arr)
    if (result === -Infinity) {
        return -1
    } else {
        return result
    }
};