/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
    let num = s.split(" ")
    let words = num.filter((num) => num !== "")
    return words[words.length - 1].length
};