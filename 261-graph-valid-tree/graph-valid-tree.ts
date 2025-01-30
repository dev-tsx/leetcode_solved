function validTree(n: number, edges: number[][]): boolean {
    const root = [...Array(n).keys()]

    const getNode = (i: number): number => {
        if (root[i] === i) return i;
        root[i] = getNode(root[i]);
        return root[i]
    }

    const isConnected = (i: number, j: number) => {
        const node_i = getNode(i)
        const node_j = getNode(j)

        if (node_i === node_j) return true
        
        const max = Math.max(node_i, node_j);
        root[node_i] = max;
        root[node_j] = max;

        return false
    }

    for (const [i, j] of edges) {
        if (isConnected(i, j)) return false
    }

    return root.filter((el, i) => el === i).length === 1
};