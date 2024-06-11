/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
    let size = 0
    let curr = head
    let arr=[]
    while (curr) {
        size++
        curr = curr.next
    }
    curr = head
    for (let i = 0; i < size; i++) {
        if (i >= Math.floor(size / 2)) {
            return curr
        }
        curr = curr.next
    }
};