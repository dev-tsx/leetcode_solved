function checkPowersOfThree(n: number): boolean {
    const powers = new Set<number>();

    for (let i = 0; i < 16; i++) {
        powers.add(Math.pow(3, i));
    }

    for (let power of Array.from(powers).reverse()) {
        if (n >= power) n -= power;
    }

    return n === 0;
}