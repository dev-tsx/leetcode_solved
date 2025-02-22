/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function recoverFromPreorder(traversal: string): TreeNode | null {
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

    function buildTree(depth: number) {
        if (i >= traversal.length) return null;
        let currentDepth = parseDepth();
        if (currentDepth != depth) {
            i -= currentDepth; // rollback
            return null;
        }
        let value = parseValue();
        let node = new TreeNode(value);
        node.left = buildTree(depth + 1);
        node.right = buildTree(depth + 1);
        return node;
    }

    return buildTree(0);
}
