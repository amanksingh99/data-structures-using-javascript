class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0;
        if (this.head === null) return count;

        let tempNode = this.head;
        while (tempNode !== null) {
            tempNode = tempNode.next;
            count++;
        }

        return count;
    }

    getFirst() {
        if (this.head === null) {
            console.log("List is empty");
            return null;
        }

        return this.head.data;
    }

    getLast() {
        if (this.head === null) {
            console.log("List is empty");
            return null;
        }

        let tempNode = this.head;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }

        return tempNode.data;
    }

    getAt(idx) {
        if (this.head === null) {
            console.log("List is Empty");
            return null;
        }

        if (idx < 0 || idx >= this.size()) {
            console.log("Invalid index");
            return null;
        }

        let count = 0;
        let tempNode = this.head;
        while (tempNode.next !== null && count < idx) {
            tempNode = tempNode.next;
            idx++;
        }

        return tempNode.data;
    }

    addFirst(value) {
        if (this.head === null) {
            let node = new Node(value);
            this.head = node;
            return;
        }

        let node = new Node(value, this.head);
        this.head = node;
    }

    addLast(value) {
        if (this.head === null) {
            let node = new Node(value);
            this.head = node;
            return;
        }

        let tempNode = this.head;
        while (tempNode.next !== null) {
            tempNode = tempNode.next;
        }

        let node = new Node(value);
        tempNode.next = node;
    }

    addAt(value, idx) {
        if (this.head === null) {
            if (idx === 0) {
                let node = new Node(value);
                this.head = node;
            } else {
                console.log(`List is empty, can't add at index ${idx}`);
            }
        }

        if (idx < 0 || idx > this.size()) {
            console.log("Invalid index");
            return;
        }

        if (idx === 0) {
            this.addFirst(value);
            return;
        }

        if (idx === this.size()) {
            this.addLast(value);
            return;
        }

        let count = 0;
        let tempNode = this.head;
        let prev = null;
        while (count < idx) {
            prev = tempNode;
            tempNode = tempNode.next;
            count++;
        }

        let node = new Node(value, tempNode);
        prev.next = node;
    }

    add(value, idx) {
        if (idx) {
            this.addAt(value, idx);
        } else {
            this.addLast(value);
        }
    }

    display() {
        let tempNode = this.head;
        process.stdout.write("head --> ");
        while (tempNode !== null) {
            process.stdout.write(tempNode.data + " --> ");
            tempNode = tempNode.next;
        }
        console.log("null");
    }
}

const ll = new LinkedList();

ll.add(1);
ll.add(2);
ll.add(3);

ll.add(1.5, 1);
ll.display();
