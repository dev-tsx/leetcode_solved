const canBeTypedWords =
    (t: string, b: string, l = new Set(b)): number =>
        t.split(' ').reduce((c, w) => ![...w].some(i => l.has(i)) ? ++c : c, 0)