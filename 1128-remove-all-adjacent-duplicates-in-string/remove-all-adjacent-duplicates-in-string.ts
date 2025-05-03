function removeDuplicates(s: string): string {
    const stack = [];
    const arr = s.split('');
    for (const char of arr) {
        if (!stack.length || stack[stack.length - 1] !== char) {
            stack.push(char);
        } else {
            stack.pop();
        }
    }
    return stack.join('')
};