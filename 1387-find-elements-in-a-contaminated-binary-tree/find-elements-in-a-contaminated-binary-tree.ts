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

class FindElements {
    values: Set<number>;
    constructor(root) {
        this.values = new Set();
        this.recover(root, 0);
    }

    recover(node, val) {
        if (!node) return;
        node.val = val;
        this.values.add(val);
        this.recover(node.left, 2 * val + 1);
        this.recover(node.right, 2 * val + 2);
    }

    find(target) {
        return this.values.has(target);
    }
}

