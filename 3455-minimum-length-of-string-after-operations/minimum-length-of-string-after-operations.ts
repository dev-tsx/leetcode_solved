const minimumLength = (s: string): number => {
    const hash = {};
    for (const char of s) {
        hash[char] = (hash[char] || 0) + 1
    }

    return Object.keys(hash).
        reduce((acc, key) =>
            (acc += hash[key] % 2 === 0 ? 2 : 1), 0);
};