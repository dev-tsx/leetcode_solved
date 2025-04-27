const countSubarrays = nums => nums.reduce((counter, num, i) => {
    if (i > nums.length - 2) return counter;
    return (counter += num + nums[i + 2] === nums[i + 1] / 2 ? 1 : 0);
}, 0)