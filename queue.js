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


const queue = new Queue();
queue.enqueue('Lidia');
queue.enqueue('Juan');
queue.dequeue();
console.log(queue.peek());

toastNotifications();

