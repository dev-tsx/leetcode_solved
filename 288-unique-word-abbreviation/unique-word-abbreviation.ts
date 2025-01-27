class ValidWordAbbr {
    hash: Map<string, Set<string>>;

    constructor(dictionary: string[]) {
        this.hash = new Map();

        for (const word of dictionary) {
            const abbr = this.getAbbreviation(word);
            if (!this.hash.has(abbr)) {
                this.hash.set(abbr, new Set());
            }
            this.hash.get(abbr)?.add(word);
        }
    }
    getAbbreviation(word: string): string {
        return word[0] + (word.length - 2) + word[word.length - 1]
    }
    isUnique(word: string): boolean {
        const abbr = this.getAbbreviation(word);

        if (!this.hash.has(abbr)) return true;

        const wordsSet = this.hash.get(abbr)!;

        return wordsSet.size === 1 && wordsSet.has(word);
    }
}
