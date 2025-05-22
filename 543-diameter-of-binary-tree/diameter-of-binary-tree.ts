class Pair {
    diameter: number;
    height: number;
    constructor(diameter: number, height: number) {
        this.diameter = diameter;
        this.height = height;
    }
}
function diameterHelper(node) {
    if (node == null) return new Pair(0, 0);

    const lh = diameterHelper(node.left);
    const rh = diameterHelper(node.right);

    const height = Math.max(lh.height, rh.height) + 1;
    const diameter = Math.max(lh.diameter, rh.diameter, lh.height + rh.height);
    return new Pair(diameter, height);
}

function diameterOfBinaryTree(root: TreeNode | null): number {
    if (root == null) return 0;
    const pair = diameterHelper(root);
    return pair.diameter
};