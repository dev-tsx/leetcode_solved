class Stack<T> {
    #items: T[] = [];

    push(element: T): void {
        this.#items.push(element);
    }
    pop(): T | undefined {
        return this.#items.pop();
    }
    peek(): T | undefined {
        return this.#items[this.size() - 1];
    }
    size(): number {
        return this.#items.length;
    }
    isEmpty(): boolean {
        return this.size() === 0;
    }
}

class MyQueue {
    data: Stack<number>;
    reversed: Stack<number>;
    constructor() {
        this.data = new Stack();
        this.reversed = new Stack();
    }

    push(x: number): void {
        while (this.data.size()) {
            this.reversed.push(this.data.pop())
        }
        this.data.push(x);
        while (this.reversed.size()) {
            this.data.push(this.reversed.pop());
        }
    }

    pop(): number {
        return this.data.pop();
    }

    peek(): number {
        return this.data.peek();
    }

    empty(): boolean {
        return this.data.size() === 0;
    }
}
