function findWordsContaining(words: string[], x: string): number[] {
    return words.reduce((res, word, i) => {
        if (word.includes(x)) res.push(i);
        return res;
    }, [])
};