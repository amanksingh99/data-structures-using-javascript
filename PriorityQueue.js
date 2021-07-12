class QElement {
    constructor(data, priority) {
        this.data = data;
        this.priority = priority;
    }
}

class PriorityQueue {
    constructor() {
        this.storage = [];
    }

    enqueue(value, priority) {
        let qElem = new QElement(value, priority);
        if (this.size() == 0) {
            this.storage.push(qElem);
            return;
        }

        let added = false;
        for (let i = 0; i < this.size(); i++) {
            if (qElem.priority < this.storage[i].priority) {
                this.storage.splice(i, 0, qElem);
                added = true;
                break;
            }
        }

        if (!added) this.storage.push(qElem);
    }

    dequeue() {
        let qElem = this.storage.shift();
        return qElem.data;
    }

    size() {
        return this.storage.length;
    }

    front() {
        if (this.isEmpty()) {
            console.log("Queue Undeflow");
            return;
        }
        return this.storage[0].data;
    }

    isEmpty() {
        return this.storage.length === 0;
    }
}

const pq = new PriorityQueue();
pq.enqueue(10, 4);
pq.enqueue(9, 2);
pq.enqueue(8, 3);
pq.enqueue(7, 1);

console.log(pq);
console.log(pq.front());
