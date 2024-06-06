/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {

    if (s.length !== t.length) {
        return false
    }

    let to = {}
    
    let so = {}

    for (let i = 0; i < t.length; i++) {
        let tchild = t[i]
        let schild = s[i]
        if (!to[tchild]) {
            to[tchild] = 1
        } else {
            to[tchild]++
        }
        if (!so[schild]) {
            so[schild] = 1
        } else {
            so[schild]++
        }
    }

    for(let char in so){
        if(so[char]!==to[char]){
            return false
        }
    }
    return true

};