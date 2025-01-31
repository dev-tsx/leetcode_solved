function canBeTypedWords(text: string, brokenLetters: string, letters = new Set(brokenLetters)): number {

    return text.split(' ').reduce((count, word) => {
        if (![...word].some(i => letters.has(i))) count++;
        return count
    }, 0)
};