function areAlmostEqual(s1: string, s2: string): boolean {
    const chars: number[] = [];

    for (let i = 0; i < s1.length; i++) {
        if (s1[i] !== s2[i]) chars.push(i);
        if (chars.length > 2) return false;
    }

    if (chars.length === 0) return true;
    if (chars.length !== 2) return false;

    return s1[chars[0]] === s2[chars[1]] && s1[chars[1]] === s2[chars[0]];
}