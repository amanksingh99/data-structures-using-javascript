class Node {
    constructor(data, left = null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    add(data){
        if(this.root === null){
            this.root = new Node(data);
            return;
        } else {
            //todo
            continue;
        }
    }
}
