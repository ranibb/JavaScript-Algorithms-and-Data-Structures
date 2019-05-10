/** Pushing pseudocode
 * 🔸 Create a new node with the value passed to the function
 * 🔸 If the head property is null set the head and tail to be the newly created node 
 * 🔸 If not, set the next property on the tail to be that node
 * 🔸 Set the previous property on the newly created node to be the tail
 * 🔸 Set the tail to be the newly created node
 * 🔸 Increment the length
 * 🔸 Return the Doubly Linked List
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor(val) {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }
}

// first = new Node(12);
// first.next = new Node(13);
// first.next = new Node(13);
// console.log(first);

list = new DoublyLinkedList();

list.push(99);
list.push(100);
list.push("Last Item");
console.log(list);

