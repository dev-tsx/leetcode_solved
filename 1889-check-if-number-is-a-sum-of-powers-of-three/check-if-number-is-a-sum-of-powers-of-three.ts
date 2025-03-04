function checkPowersOfThree(n: number): boolean {
    const powers = Array.from({ length: 15 }, (_, i) => Math.pow(3, i))

    for (let i = 15; i >= 0; i--) {
        const power = powers[i];
        if (n >= power) n -= power;
    }

    return n === 0;
}