function distinctNumbers(nums: number[], k: number): number[] {
    const result: number[] = [];
    const hash = {};
    let uniqueCount = 0;


    for (let i = 0; i < k; i++) {
        if (!(nums[i] in hash)) {
            hash[nums[i]] = 0;
            uniqueCount++;
        }
        hash[nums[i]]++;
    }

    result.push(uniqueCount);

    for (let i = k; i < nums.length; i++) {
        const old = nums[i - k];
        hash[old]--;
        if (hash[old] === 0) {
            delete hash[old];
            uniqueCount--;
        }

        const next = nums[i];
        if (!(next in hash)) {
            hash[next] = 0;
            uniqueCount++;
        }
        hash[next]++;

        result.push(uniqueCount);
    }

    return result;
}