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

function rightSideView(root: TreeNode | null): number[] {
    const result: number[] = [];

    const bfs = (node: TreeNode | null, lvl: number) => {
        if (!node) return;

        result[lvl] = node.val;

        bfs(node.left, lvl + 1);
        bfs(node.right, lvl + 1);
    }

    bfs(root, 0);

    return result;
};