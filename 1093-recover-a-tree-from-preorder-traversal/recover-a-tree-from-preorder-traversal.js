/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {string} traversal
 * @return {TreeNode}
 */
function recoverFromPreorder(traversal) {
    let i = 0;

    function parseValue() {
        let start = i;
        while (i < traversal.length && traversal[i] !== '-') i++;
        return parseInt(traversal.slice(start, i), 10);
    }

    function parseDepth() {
        let depth = 0;
        while (i < traversal.length && traversal[i] === '-') {
            depth++;
            i++;
        }
        return depth;
    }

    let stack = [];

    while (i < traversal.length) {
        let depth = parseDepth();
        let value = parseValue();
        let node = new TreeNode(value);

        while (stack.length > depth) {
            stack.pop();
        }

        if (stack.length > 0) {
            if (!stack[stack.length - 1].left) {
                stack[stack.length - 1].left = node;
            } else {
                stack[stack.length - 1].right = node;
            }
        }

        stack.push(node);
    }

    return stack[0];
}
