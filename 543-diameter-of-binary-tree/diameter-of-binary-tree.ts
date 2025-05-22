function diameterHelper(node) {
    if (node == null) return { h: 0, d: 0 };

    const lh = diameterHelper(node.left);
    const rh = diameterHelper(node.right);

    const height = Math.max(lh.h, rh.h) + 1;
    const diameter = Math.max(lh.d, rh.d, lh.h + rh.h);

    return { h: height, d: diameter };
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (root == null) return 0;

    return diameterHelper(root).d;
};