function canPermutePalindrome(s: string): boolean {
    const hash: Record<string, number> = {};
    for (const char of s) hash[char] = (hash[char] || 0) + 1;
    return Object.values(hash).filter(v => v % 2 != 0).length <= 1;
};