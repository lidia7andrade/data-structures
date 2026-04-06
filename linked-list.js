// 3. Linked List
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);
        
        if(!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.size++;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    print() {
        let currentNode = this.head;
        let nodes = '';
        // My own implementation
        // for(let i=1; i <= this.size ;i++) {
        //     nodes += currentNode.value +' -> ';
        //     currentNode = currentNode.next;
        // }
        while(currentNode) {
            nodes += currentNode.value + ' -> ';
            currentNode = currentNode.next;
        }
        console.log(nodes + 'null');
    }

    find(value) {
        let currentNode = this.head;
        while(currentNode) {
            if(value === currentNode.value) {
                return true;
            }
            currentNode = currentNode.next;
        }
        return false;
    }

    reverse() {
        let prev = null;
        let current = this.head;
        // A -> B -> C -> null

        while(current) {
            // Save next value
            let next = current.next;
            // 1. next = {value: 'B', next: {value: 'C', next: null}}
            // 2. next = {value: 'C', next: null}
            // 3. next = null

            // Write next value
            current.next = prev;
            // 1. current.next = null;
            // 2. current.next = {value: 'A', next: null}
            // 3. current.next = {value: 'B', next: {value: 'A', next: null}

            // Save new node in prev varible
            prev = current;
            // 1. prev = {value: 'A', next: null}
            // 2. prev = {value: 'B', next: {value: 'A', next: null}
            // 3. prev = {value: 'C', next: {value: 'B', next: {value: 'A', next: null}}

            // Go to next node
            current = next;
            // 1. current = {value: 'B', next: {value: 'C', next: null}}
            // 2. current = {value: 'C', next: null}
            // 3. current = null

        }
        this.head = prev;
    }
}

const newLinkedList = new LinkedList();
newLinkedList.append('Lidia');
newLinkedList.print();

console.log(newLinkedList.find('Lidia'));

newLinkedList.append('Jorge');
newLinkedList.print();
newLinkedList.append('Rosita');
newLinkedList.print();

// Rosita -> Jorge -> Lidia
newLinkedList.reverse();
newLinkedList.print();
