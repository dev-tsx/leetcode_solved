function canBeValid(s: string, locked: string): boolean {
    const length = s.length;
    if (length % 2 !== 0) return false;
    let minBalance = 0, maxBalance = 0;

    for (let i = 0; i < length; i++) {
        const isOpening = s[i] === '(';
        const isUnlocked = locked[i] === '0';
        minBalance += (!isOpening || isUnlocked) ? -1 : 1;
        maxBalance += (isOpening || isUnlocked) ? 1 : -1;
        if (maxBalance < 0) return false;
        minBalance = Math.max(minBalance, 0);
    }

    return minBalance === 0;
};