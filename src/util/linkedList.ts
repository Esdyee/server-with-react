class ListNode {
    value: number;
    next: Node | null;

    constructor(value: number) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    head: ListNode | null;
    tail: ListNode | null;
    size: number;

    constructor() {
        this.head = null;
        this.tail = null;
        this.size = 0;
    }

    printAll() {
        let current = this.head;
        while (current !== null) {
            // console.log(current.value);
            // current = current.next;
        }
    }
}
