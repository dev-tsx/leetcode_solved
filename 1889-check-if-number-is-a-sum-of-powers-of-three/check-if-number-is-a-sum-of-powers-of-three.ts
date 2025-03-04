function checkPowersOfThree(n: number): boolean {
    for (let i = 15; i >= 0; i--) {
        const power = Math.pow(3, i);
        if (n >= power) n -= power;
    }
    return n === 0;
}