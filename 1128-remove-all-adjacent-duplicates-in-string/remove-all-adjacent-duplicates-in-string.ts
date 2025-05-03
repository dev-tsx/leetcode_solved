function removeDuplicates(s: string): string {
    const stack = [];
    for (const char of s) {
        if (!stack.length || stack[stack.length - 1] !== char) {
            stack.push(char);
        } else {
            stack.pop();
        }
    }
    return stack.join('')
};