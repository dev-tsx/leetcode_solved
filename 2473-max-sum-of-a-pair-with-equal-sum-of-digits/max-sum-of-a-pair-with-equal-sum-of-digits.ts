function maximumSum(nums: number[]): number {
    const hashSum = {};
    let maxSum = -1;

    for (const num of nums) {
        const sum = [...String(num)].reduce((acc, n) => acc + Number(n), 0);

        let [a = 0, b = 0] = hashSum[sum] || [];

        if (num > a) {
            b = a;
            a = num;
        } else if (num > b) {
            b = num;
        }

        hashSum[sum] = [a, b];

        if (b > 0) maxSum = Math.max(maxSum, a + b);
    }

    return maxSum;
}