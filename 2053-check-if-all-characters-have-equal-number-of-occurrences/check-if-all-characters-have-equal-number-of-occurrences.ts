function areOccurrencesEqual(s: string): boolean {
    const hash = {};

    for(const char of s){
        hash[char] = (hash[char] || 0) + 1;
    }

    return new Set(Object.values(hash)).size === 1;
};