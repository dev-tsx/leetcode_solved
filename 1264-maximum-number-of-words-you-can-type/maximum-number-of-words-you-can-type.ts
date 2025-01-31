function canBeTypedWords(text: string, brokenLetters: string): number {
    const letters = new Set([...brokenLetters]);

    return text.split(' ').reduce((count, word) => {

        if (![...word].some(i => letters.has(i))) count++;
        return count
    }, 0)
};