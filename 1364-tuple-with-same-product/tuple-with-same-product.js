function tupleSameProduct(nums) {
    const productMap = {};
    const n = nums.length;
    let count = 0;

    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            const product = nums[i] * nums[j];
            productMap[product] = (productMap[product] || 0) + 1
        }
    }

    for (const freq of Object.values(productMap)) {
        if (freq > 1) {
            count += (freq * (freq - 1)) / 2 * 8;
        }
    }

    return count;
};