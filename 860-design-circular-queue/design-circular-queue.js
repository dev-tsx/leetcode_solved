class MyCircularQueue {

    constructor(k) {
        this.q = new Array(k);
        this.head = 0;
        this.tail = 0;
        this.size = k;
        this.count = 0;
    }

    enQueue(value) {
        if (this.isFull()) return false;
        this.q[this.tail] = value;
        this.tail = (this.tail + 1) % this.size;
        this.count++;
        return true;
    }

    deQueue() {
        if (this.isEmpty()) return false;
        this.head = (this.head + 1) % this.size;
        this.count--;
        return true;
    }

    Front() {
        return this.isEmpty() ? -1 : this.q[this.head];
    }

    Rear() {
        if (this.isEmpty()) return -1;
        const rearIndex = (this.tail - 1 + this.size) % this.size;
        return this.q[rearIndex];
    }

    isEmpty() {
        return this.count === 0;
    }

    isFull() {
        return this.count === this.size;
    }
}