function lengthOfLongestSubstring(s: string): number {
    const hash = {};

    let start = 0, end = 0, max = 0;

    while (end < s.length) {
        const right = s[end];
        hash[right] ||= 0;
        hash[right]++;

        while (hash[right] > 1) {
            const left = s[start];
            hash[left]--;
            start++;
        }

        max = Math.max(max, end - start + 1);
        end++;
    }

    return max;
}