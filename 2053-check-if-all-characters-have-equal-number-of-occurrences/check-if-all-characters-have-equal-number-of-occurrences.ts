const areOccurrencesEqual = (s: string): boolean =>
    new Set(Object.values(
        [...s].reduce((acc, el) => {
            acc[el] = (acc[el] || 0) + 1;
            return acc;
        }, {}))
    ).size === 1