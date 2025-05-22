function diameterHelper(node) {
    if (node == null) return [0, 0];

    const lh = diameterHelper(node.left);
    const rh = diameterHelper(node.right);

    const height = Math.max(lh[1], rh[1]) + 1;
    const diameter = Math.max(lh[0], rh[0], lh[1] + rh[1]);

    return [diameter, height];
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (root == null) return 0;

    const [d] = diameterHelper(root);

    return d
};