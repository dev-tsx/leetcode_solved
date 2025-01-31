function canBeTypedWords(text: string, brokenLetters: string): number {
    const letters = new Set([...brokenLetters]);

    const words = text.split(' ').map(word => {
        for (const letter of word) {
            if (letters.has(letter)) {
                return false;
            }
        }
        return true;
    })

    return words.filter(Boolean).length
};