/**
 * @param {number[]} arr
 * @return {number}
 */
var sumOddLengthSubarrays = function (arr) {
    let odd = 1;
    let sum = 0
    while (odd <= arr.length) {
        for (let i = 0; i <= arr.length - odd; i++) {
            for (let j = i; j < i + odd; j++) {
                sum += arr[j]
            }
        }
        odd += 2
    }
    return sum
};