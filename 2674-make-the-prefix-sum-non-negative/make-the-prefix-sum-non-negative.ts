class MinHeap {
    private heap: number[] = [];

    push(value: number) {
        this.heap.push(value);
        this.bubbleUp();
    }

    pop(): number | undefined {
        if (this.heap.length === 0) return undefined;
        if (this.heap.length === 1) return this.heap.pop();
        
        const min = this.heap[0];
        this.heap[0] = this.heap.pop()!;
        this.bubbleDown();
        return min;
    }

    private bubbleUp() {
        let index = this.heap.length - 1;
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            if (this.heap[parentIndex] <= this.heap[index]) break;
            [this.heap[parentIndex], this.heap[index]] = [this.heap[index], this.heap[parentIndex]];
            index = parentIndex;
        }
    }

    private bubbleDown() {
        let index = 0;
        while (2 * index + 1 < this.heap.length) {
            let left = 2 * index + 1;
            let right = 2 * index + 2;
            let smallest = left;
            if (right < this.heap.length && this.heap[right] < this.heap[left]) {
                smallest = right;
            }
            if (this.heap[index] <= this.heap[smallest]) break;
            [this.heap[index], this.heap[smallest]] = [this.heap[smallest], this.heap[index]];
            index = smallest;
        }
    }

    get size(): number {
        return this.heap.length;
    }
}

function makePrefSumNonNegative(nums: number[]): number {
    let operations = 0;
    let prefixSum = 0;
    const minHeap = new MinHeap();

    for (const num of nums) {
        prefixSum += num;
        if (num < 0) {
            minHeap.push(num);
        }

        while (prefixSum < 0 && minHeap.size > 0) {
            prefixSum -= minHeap.pop()!;
            operations++;
        }
    }

    return operations;
}