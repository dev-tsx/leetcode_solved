function groupAnagrams(strs: string[]): string[][] {
    const hash: { [key: string]: string[] } = {};

    for (const word of strs) {
        const key = [...word].sort().join("");
        hash[key] = hash[key] ? [...hash[key], word] : [word];
    }
    return Object.values(hash);
}
