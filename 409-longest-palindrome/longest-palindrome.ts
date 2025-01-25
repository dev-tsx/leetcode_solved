function longestPalindrome(s: string): number {
    const hash = {};

    for (const char of s) {
        hash[char] = (hash[char] || 0) + 1;
    }
    let ones = 0;
    for (const val of Object.values(hash)) {
        ones += +val % 2;
    }

    return s.length + (!ones || ones == 1 ? 0 : -ones + 1);
};