/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let hashTable = {}
    let sum = 0
    for (let value of nums) {
        hashTable[value] = (hashTable[value] || 0) + 1
    }

    for (let key in hashTable) {
        if (hashTable[key] === 1) {
            sum += parseInt(key)
        }
    }
    return sum
};