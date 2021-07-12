// can use array as stack in js

//custom stack
class Stack {
    constructor() {
        this.storage = [];
        this.top = -1;
    }

    push(val) {
        this.storage[this.top + 1] = val;
        this.top++;
    }

    pop() {
        if (this.top === -1) {
            console.log("Stack Underflow");
            return -1;
        }

        let val = this.storage[this.top];
        delete this.storage[this.top];
        this.top--;

        return val;
    }

    peek() {
        if (this.top === -1) {
            console.log("Stack Underflow");
            return -1;
        }

        return this.storage[this.top];
    }

    size() {
        return top + 1;
    }
}

const st = new Stack();
for (let i = 1; i < 5; i++) st.push(i);

console.log(st.peek());
st.pop();
console.log(st.peek());
