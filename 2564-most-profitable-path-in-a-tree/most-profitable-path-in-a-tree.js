function mostProfitablePath(edges, bob, amount) {
    const tree = new Map();

    for (const [u, v] of edges) {
        if (!tree.has(u)) tree.set(u, []);
        if (!tree.has(v)) tree.set(v, []);
        tree.get(u).push(v);
        tree.get(v).push(u);
    }

    let bobPath = new Array(amount.length).fill(-1);
    let path = [];
    bobRoute(bob, -1, path, tree);

    for (let i = 0; i < path.length; i++) {
        bobPath[path[i]] = i;
    }

    return getMax(0, -1, 0, bobPath, tree, 0, amount);
}

function bobRoute(node, parent, path, tree) {
    if (node === 0) return true;
    for (const neighbor of tree.get(node) || []) {
        if (neighbor !== parent) {
            path.push(node);
            if (bobRoute(neighbor, node, path, tree)) return true;
            path.pop();
        }
    }
    return false;
}

function getMax(node, parent, currScore, bobPath, tree, timestamp, amount) {
    if (bobPath[node] === -1 || bobPath[node] > timestamp) {
        currScore += amount[node];
    } else if (bobPath[node] === timestamp) {
        currScore += Math.floor(amount[node] / 2);
    }

    if ((tree.get(node) || []).length === 1 && node !== 0) return currScore;
    let maxScore = -Infinity;
    for (const neighbor of tree.get(node) || []) {
        if (neighbor !== parent) {
            maxScore = Math.max(
                maxScore,
                getMax(neighbor, node, currScore, bobPath, tree, timestamp + 1, amount)
            );
        }
    }
    return maxScore;
}