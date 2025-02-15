function candy(ratings: number[]): number {
    let len = ratings.length;
    let candies = Array.from({ length: len }, () => 1);

    for (let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candies[i] = candies[i - 1] + 1;
        }
    }

    for (let i = len - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candies[i] = Math.max(candies[i], candies[i + 1] + 1);
        }
    }
    return candies.reduce((sum, cnd) => sum + cnd, 0);
};