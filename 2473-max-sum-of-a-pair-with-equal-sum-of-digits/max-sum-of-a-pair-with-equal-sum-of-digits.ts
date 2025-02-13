function maximumSum(nums: number[]): number {
    const hashSum: Record<number, number[]> = {};

    for (const num of nums) {
        const sum = [...String(num)].reduce((acc, n) => acc + Number(n), 0);

        hashSum[sum] ||= [0, 0];

        if (num > hashSum[sum][0]) {
            hashSum[sum][1] = hashSum[sum][0];
            hashSum[sum][0] = num;
        } else if (num > hashSum[sum][1]) {
            hashSum[sum][1] = num;
        }
    }
    return Math.max(...Object.values(hashSum).map(([a, b]) => b > 0 ? a + b : -1)) || -1
}