class Queue {
    constructor() {
        this.storage = [];
    }

    enqueue(val) {
        this.storage.push(val);
    }

    dequeue() {
        if (this.size() === 0) {
            console.log("Queue Underflow");
            return -1;
        }
        this.storage.shift();
    }

    front() {
        return this.storage[0];
    }

    size() {
        return this.storage.length;
    }

    isEmpty() {
        return this.size() === 0;
    }
}

const q = new Queue();

for (let i = 1; i < 5; i++) q.enqueue(i);

console.log(q);
q.dequeue();
q.dequeue();

console.log(q);

console.log(q.front());
console.log(q.size());
console.log(q.isEmpty());
