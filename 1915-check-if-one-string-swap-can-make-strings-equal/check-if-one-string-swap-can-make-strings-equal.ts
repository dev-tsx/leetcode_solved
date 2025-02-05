function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 == s2) return true;

    const chars: number[] = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) chars.push(i);
        if (chars.length > 2) return false;
    }
    const indx1 = chars[0], indx2 = chars[1],
        areTwo = indx1 !== undefined && indx2 !== undefined,
        areSwapped = s1[indx1] === s2[indx2] && s1[indx2] === s2[indx1];

    return areTwo && areSwapped;
}