// 2. QUEUE (FIFO)
class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(item) {
        this.items.unshift(item);
    }

    dequeue() {
        this.items.pop();
    }

    peek() {
        const lastIndex = this.items.length - 1
        if(lastIndex === -1) {
            return null;
        } else {
            return this.items[lastIndex]
        }
    }
}

class AIQueue {
    constructor() {
        this.items = {};
        this.front = 0;
        this.rear = 0;
    }

    enqueue(item) {
        this.items[this.rear] = item;
        this.rear++;
    }

    dequeue() {
        if(this.isEmpty()) return null;

        const item = this.items[this.front];
        delete this.items[this.front];
        this.front++;

        // cleanup
        if(this.front > this.rear / 2) {
            this.cleanup();
        }

        return item;
    }

    cleanup() {
        const newItems = {};
        let newIndex = 0;
        
        for(let i = this.front; i < this.rear; i++) {
            newItems[newIndex] = this.items[i];
            newIndex++;
        }
        
        this.items = newItems;
        this.rear = newIndex;
        this.front = 0;
    }

    peek() {
        if(this.isEmpty()) return null;
        return this.items[this.front];
    }

    isEmpty() {
        return this.rear === this.front;
    }

    size() {
        return this.rear - this.front;
    }
}

function toastNotifications() {
    const messageQueue = new Queue();
    function addNotification(message) {
        messageQueue.enqueue(message);
    }
    function processNext() {
        console.log(messageQueue.peek());
        messageQueue.dequeue();
    }
    addNotification('Message 1');
    addNotification('Message 2');

    processNext();
    processNext();
}


const queue = new AIQueue();
queue.enqueue('Lidia');
queue.enqueue('Juan');
console.log(queue);
queue.dequeue();
console.log(queue.items);

// console.log(queue.peek());

// toastNotifications();

