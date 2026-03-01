function evalRPN(tokens: string[]): number {
    const actions = {
        "+": (a: number, b: number) => a + b,
        "-": (a: number, b: number) => a - b,
        "/": (a: number, b: number) => Math.trunc(a / b),
        "*": (a: number, b: number) => a * b,
    };
    let current = 0;
    while (tokens.length > 1) {

        while (!(tokens[current] in actions)) current++;

        const operator = tokens[current];
        const operation = actions[operator];
        const n1 = +tokens[current - 2];
        const n2 = +tokens[current - 1];
        tokens[current] = "" + operation(n1, n2);
        tokens.splice(current - 2, 2);
        current--;
    }
    return +tokens[0];
}