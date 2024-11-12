/**
 * @param {string} s
 * @return {number}
 */
var minimizedStringLength = function (s) {
    let unique=new Set(s)
    return unique.size
};