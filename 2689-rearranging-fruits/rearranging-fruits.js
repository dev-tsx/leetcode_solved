var minCost = function (basket1, basket2) {
    const count = new Map();

    for (const fruit of basket1) count.set(fruit, (count.get(fruit) || 0) + 1);
    for (const fruit of basket2) count.set(fruit, (count.get(fruit) || 0) - 1);

    const needToSwap = [];

    for (const [fruit, diff] of count) {
        if (diff % 2 !== 0) return -1;
        const times = Math.abs(diff) / 2;
        for (let i = 0; i < times; i++) {
            needToSwap.push(fruit);
        }
    }

    needToSwap.sort((a, b) => a - b);

    const minFruit = Math.min(...basket1, ...basket2);
    let res = 0;

    for (let i = 0; i < needToSwap.length / 2; i++) {
        res += Math.min(needToSwap[i], minFruit * 2);
    }

    return res;
};