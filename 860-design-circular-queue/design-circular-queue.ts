class MyCircularQueue {
    q: number[]
    len: number;
    constructor(k: number) {
        this.q = [];
        this.len = k;

    }

    enQueue(value: number): boolean {
        if (this.isFull()) return false;

        this.q.push(value);
        return true;
    }

    deQueue(): boolean {
        if (this.isEmpty()) return false;

        this.q.shift();
        return true;
    }

    Front(): number {
        return this.isEmpty() ? - 1 : this.q[0]
    }

    Rear(): number {
        return this.isEmpty() ? - 1 : this.q[this.q.length - 1]
    }

    isEmpty(): boolean {
        return this.q.length == 0
    }

    isFull(): boolean {
        return this.q.length == this.len;
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */