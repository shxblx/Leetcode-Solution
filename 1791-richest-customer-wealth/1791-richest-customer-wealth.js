/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    const length = accounts[0].length
    let richest = 0
    for (let i = 0; i < accounts.length; i++) {
        let money = 0
        for (let j = 0; j < length; j++) {
            money += accounts[i][j]
        }
        if(money>=richest){
            richest=money
        }
    }
    return richest
};