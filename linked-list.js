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
}
const newLinkedList = new LinkedList();
newLinkedList.append('Lidia');
newLinkedList.print();

newLinkedList.append('Jorge');
newLinkedList.print();
newLinkedList.append('Rosita');
newLinkedList.print();

