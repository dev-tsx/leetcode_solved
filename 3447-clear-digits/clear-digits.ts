function clearDigits(s: string): string {
    return [...s].reduce((acc, char) => {
        !isNaN(+char) ? acc.pop() : acc.push(char)
        return acc;
    }, []).join('');
};