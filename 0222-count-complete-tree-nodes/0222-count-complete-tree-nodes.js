/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var countNodes = function (root) {
    let size = 0
    function count(root) {
        if (root === null) {
            return size
        }
        size++
        if (root.left) {
            count(root.left)
        }
        if (root.right) {
            count(root.right)
        }
    }
    count(root)

    return size
};