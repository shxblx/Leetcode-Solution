/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    let size = 0
    let curr = head
    while (curr) {
        size++
        curr = curr.next
    }
    if (size == 1) {
        return true
    }
    console.log(size)
    let left = ""
    let right = ""
    curr = head
    for (let i = 0; i < size; i++) {
        if (i < Math.floor(size / 2)) {
            left += `${curr.val}`
        } else if(i >= Math.ceil(size / 2)){
            right += `${curr.val}`
        }
        curr = curr.next
    }
    return right.split("").reverse().join("") === left
};