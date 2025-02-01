function distinctNumbers(nums: number[], k: number): number[] {
    const result: number[] = [];
    const freq = new Map<number, number>();

    for (let i = 0; i < k; i++) {
        freq.set(nums[i], (freq.get(nums[i]) || 0) + 1);
    }

    result.push(freq.size);

    for (let i = k; i < nums.length; i++) {
        const old = nums[i - k];
        freq.set(old, freq.get(old)! - 1);
        if (freq.get(old) === 0) {
            freq.delete(old);
        }

        const next = nums[i];
        freq.set(next, (freq.get(next) || 0) + 1);

        result.push(freq.size);
    }

    return result;
}