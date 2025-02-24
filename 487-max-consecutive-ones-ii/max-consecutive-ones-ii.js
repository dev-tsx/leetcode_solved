function findMaxConsecutiveOnes(nums) {
    let longestSequence = 0;
    let left = 0, right = 0;
    let zeroCount = 0;

    while (right < nums.length) {
        if (nums[right] === 0) {
            zeroCount++;
        }

        while (zeroCount === 2) {
            if (nums[left] === 0) {
                zeroCount--;
            }
            left++;
        }

        longestSequence = Math.max(longestSequence, right - left + 1);
        right++;
    }

    return longestSequence;
}