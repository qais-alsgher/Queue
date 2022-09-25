const Node = require('./Node');

class Queue {
    constructor() {
        this.head = null;
        this.tail = null;
        this.deleteN = null;
        this.size = 0;
    }

    isEmpty() {
        if (!this.head) {
            return true;
        } else {
            return false;
        }
    };


    enqueue(value) {
        const node = new Node(value);
        if (this.isEmpty()) {
            this.head = node;
            this.tail = node;
            this.size++;
        } else {
            this.tail.next = node;
            this.tail = node;
            this.size++;
        }
    };


    dequeue() {
        if (this.isEmpty()) {
            return "Queue is Empty";
        } else {
            this.deleteN = this.head;
            this.head = this.head.next;
            this.deleteN.next = null;
            this.size--;
        }
    };


    peek() {
        return this.head.value;
    }


}

module.exports = Queue;