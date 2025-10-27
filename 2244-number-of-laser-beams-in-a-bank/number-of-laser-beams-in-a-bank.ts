function numberOfBeams(bank: string[]): number {
    let prev = 0;
    let beams = 0;

    for (const i of bank) {
        let count = 0;
        for (const char of i) {
            count += char == '1' ? 1 : 0;
        }
        if (count != 0) {
            beams += (prev * count);
            prev = count;
        }
    }

    return beams;
}