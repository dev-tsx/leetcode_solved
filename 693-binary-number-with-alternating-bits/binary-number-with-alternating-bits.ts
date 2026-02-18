function hasAlternatingBits(n: number): boolean {
    if (n == 3) return false;
    if(n == 1) return true;
    const bin = n.toString(2);
    for (let i = 1; i < bin.length - 1; i++) {
        if (bin[i] == bin[i - 1] || bin[i] == bin[i + 1])
            return false;
    }
    return true;
};