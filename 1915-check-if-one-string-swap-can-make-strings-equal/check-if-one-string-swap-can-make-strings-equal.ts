function areAlmostEqual(s1: string, s2: string): boolean {
    if (s1 == s2) return true;

    const chars: number[] = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) chars.push(i);
        if (chars.length > 2) return false;
    }
    const a = chars[0], b = chars[1],
        areTwo = a !== undefined && b !== undefined,
        areSwapped = s1[a] === s2[b] && s1[b] === s2[a];

    return areTwo && areSwapped
}