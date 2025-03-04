function checkPowersOfThree(n: number): boolean {
    for (let i = 15; i >= 0; i--) {
        const power = Math.pow(3, i);
        if (n >= power) n -= power;
        if (n === 0) return true;
    }
    return false;
}