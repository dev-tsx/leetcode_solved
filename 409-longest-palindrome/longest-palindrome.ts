function longestPalindrome(s: string): number {
    const hash = {};

    for (const char of s) {
        hash[char] = (hash[char] || 0) + 1;
    }
    let ones = 0;
    for (const key in hash) {
        hash[key] = hash[key] % 2;
        ones += hash[key];
    }
    if (!ones || ones === 1) return s.length;

    return s.length - ones + 1;
};