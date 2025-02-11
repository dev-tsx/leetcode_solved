function removeOccurrences(s: string, part: string): string {
    while (s.includes(part)) {
        const idx = s.indexOf(part);
        s = s.substring(0, idx) + s.substring(idx + part.length);
    }
    return s;
}