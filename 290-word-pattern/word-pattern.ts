function wordPattern(pattern: string, s: string): boolean {
    const hash1 = {};
    const hash2 = {};
    const words = s.split(' ');

    if (pattern.length !== words.length) return false;

    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        const word = words[i];

        if (hash1.hasOwnProperty(word) && hash1[word] !== char) return false;
        if (hash2.hasOwnProperty(char) && hash2[char] !== word) return false;


        hash1[word] = char;
        hash2[char] = word;
    }

    return true;
}