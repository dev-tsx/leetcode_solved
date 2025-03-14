function minCostClimbingStairs(cost) {
    let prev = 0, curr = 0;

    for (let i = 2; i <= cost.length; i++) {
        let next = Math.min(curr + cost[i - 1], prev + cost[i - 2]);
        prev = curr;
        curr = next;
    }

    return curr;
};