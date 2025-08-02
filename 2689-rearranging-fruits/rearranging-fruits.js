var minCost = function (basket1, basket2) {
    const count = {};

    for (let i = 0; i < basket1.length; i++) {
        count[basket1[i]] = (count[basket1[i]] || 0) + 1;
        count[basket2[i]] = (count[basket2[i]] || 0) - 1;
    }
    const needToSwap = [];

    for (const [fruit, diff] of Object.entries(count)) {
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