/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {

    let result = []

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr1[j] === arr2[i]) {
                result.push(arr1[j])
                arr1[j] = null
            }
        }
    }
    let ex = arr1.filter((num) => num !== null).sort((a,b)=>a-b)
    result.push(ex)
    return result.flat()
};