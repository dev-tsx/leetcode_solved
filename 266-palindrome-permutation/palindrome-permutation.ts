function canPermutePalindrome(s: string): boolean {
    const chars = Array.from({ length: 26 }, () => 0);
    for (const char of s) {
        const i = 'z'.charCodeAt(0) - char.charCodeAt(0);
        chars[i]++;
    }
    return chars.filter(v => v % 2 != 0).length <= 1;
};