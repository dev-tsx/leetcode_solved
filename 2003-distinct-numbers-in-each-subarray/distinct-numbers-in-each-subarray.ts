function distinctNumbers(nums: number[], k: number): number[] {
    const result = [];
    const hash = nums.slice(0, k).reduce((acc, n) => {
        !acc.has(n) ?
            acc.set(n, 1) :
            acc.set(n, acc.get(n) + 1);
        return acc;
    }, new Map());

    result.push(hash.size);

    for (let i = k; i < nums.length; i++) {
        const exist = nums[i - k];
        hash.set(exist, hash.get(exist) - 1);
        if (hash.get(exist) === 0) hash.delete(exist);

        const next = nums[i];
        !hash.has(next) ?
            hash.set(next, 1) :
            hash.set(next, hash.get(next) + 1);

        result.push(hash.size);
    }

    return result;
}