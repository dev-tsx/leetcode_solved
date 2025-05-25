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
 * @return {boolean}
 */
function isSymmetric(root) {
    if (!root) return true;

    let queue = [root.left, root.right];

    while (queue.length > 0) {
        let left = queue.shift();
        let right = queue.pop();

        if (!left && !right) {
            continue;
        }
        if (!left || !right || left.val !== right.val) {
            return false;
        }

        queue.unshift(left.left);
        queue.unshift(left.right);
        queue.push(right.right);
        queue.push(right.left);
    }
    return true;
}
