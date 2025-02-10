function clearDigits(s: string): string {
    const stack = [];

    for (const char of s) {
        if (!isNaN(+char)) stack.pop();
        else stack.push(char);
    }
    return stack.join('');
};