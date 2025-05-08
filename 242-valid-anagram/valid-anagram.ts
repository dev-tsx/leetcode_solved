function isAnagram(s: string, t: string): boolean {
    if (s.length !== t.length) return false;

    const counts = Array.from({ length: 26 }, () => 0);

    for (let i = 0; i < s.length; i++) {
        counts['z'.charCodeAt(0) - s[i].charCodeAt(0)]++;
        counts['z'.charCodeAt(0) - t[i].charCodeAt(0)]--;
    }

    return !counts.filter(Boolean).length
};