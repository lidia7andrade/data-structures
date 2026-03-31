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
        this.size = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if(!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while(current.next) {
                current = current.next
            }
            current.next = newNode;
        }
        this.size++;
    }

    prepend(value) {}

    print() {}
}
const newLinkedList = new LinkedList();
newLinkedList.append('Lidia');
newLinkedList.append('Jorge');
console.log(newLinkedList);

this.head = lidia, null
newNode = Jorge, null
current = lidia, null
current.next = newNode // Jorge, null


newNode = {value:'Rosita', next: null}
this.head = {
    value: 'lidia',
    next: {value:'Jorge', next: null}
}
current = current.next // {value:'Jorge', next: null}
current.next = newNode // {value:'Jorge', next: {value:'Rosita', next: null}}
