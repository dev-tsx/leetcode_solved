function checkPowersOfThree(n: number): boolean {
    const powers: number[] = []

    for (let i = 0; i < 16; i++) {
        powers.push(Math.pow(3, i));
    }

    for (let i = 15; i >= 0; i--) {
        const power = powers[i];
        if (n >= power) n -= power;
    }

    return n === 0;
}