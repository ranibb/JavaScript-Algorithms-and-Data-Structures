/** Pushing pseudocode
 * 🔸 Create a new node with the value passed to the function
 * 🔸 If the head property is null set the head and tail to be the newly created node 
 * 🔸 If not, set the next property on the tail to be that node
 * 🔸 Set the previous property on the newly created node to be the tail
 * 🔸 Set the tail to be the newly created node
 * 🔸 Increment the length
 * 🔸 Return the Doubly Linked List
 */

/** Popping pseudocode
 * 🔸 If there is no head, return undefined
 * 🔸 Store the current tail in a variable to return later
 * 🔸 If the length is 1, set the head and tail to be null
 * 🔸 Update the tail to be the previous Node.
 * 🔸 Set the newTail's next to null
 * 🔸 Decrement the length
 * 🔸 Return the value removed
 */

/** Shifting pseudocode
 * 🔸 If length is 0, return undefined
 * 🔸 Store the current head property in a variable (we'll call it old head)
 * 🔸 If the length is one
 *    ◻️ set the head to be null
 *    ◻️ set the tail to be null
 * 🔸 Update the head to be the next of the old head
 * 🔸 Set the head's prev property to null
 * 🔸 Set the old head's next to null
 * 🔸 Decrement the length
 * 🔸 Return old head
 */

/** Unshifting pseudocode
 * 🔸 Create a new node with the value passed to the function
 * 🔸 If the length is 0
 *    ◻️ Set the head to be the new node
 *    ◻️ Set the tail to be the new node
 * 🔸 Otherwise
 *    ◻️ Set the prev property on the head of the list to be the new node
 *    ◻️ Set the next property on the new node to be the head property 
 *    ◻️ Update the head to be the new node
 * 🔸 Increment the length
 * 🔸 Return the list
 */

/** Get Pseudocode
 * 🔸 If the index is less than 0 or greater or equal to the length, return null
 * 🔸 If the index is less than or equal to half the length of the list
 *    ◻️ Loop through the list starting from the head and loop towards the middle
 *    ◻️ Return the node once it is found
 * 🔸 If the index is greater than half the length of the list
 *    ◻️ Loop through the list starting from the tail and loop towards the middle
 *    ◻️ Return the node once it is found
 */

/** Set pseudocode
 * 🔸 Create a variable which is the result of the get method at the index passed to the function
 *    ◻️ If the get method returns a valid node, set the value of that node to be the value passed to the function
 *    ◻️ Return true
 * 🔸 Otherwise, return false
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
  pop() {
    if (!this.head) return undefined;
    var poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }
  shift() {
    if (this.length === 0) return undefined;
    var oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }
  unshift(val) {
    var newNode = new Node(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }
  get(index) {
    if (index < 0 || index >= this.length) return null;
    if (index <= this.length / 2) {
      console.log("Working from start");
      var count = 0;
      var current = this.head;
      while (count != index) {
        current = current.next;
        count++;
      }
    } else {
      console.log("Working from end");
      var count = this.length - 1;
      var current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }
  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode != null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

}

// first = new Node(12);
// first.next = new Node(13);
// first.next = new Node(13);
// console.log(first);

list = new DoublyLinkedList();

list.push(99);
list.push(100);
list.push(101);
list.push(102);
list.push(103);
list.push("Last Item");
// console.log(list);

// console.log(list.pop());
// console.log(list);

// list.shift();
// console.log(list);

// list.unshift(98);
// list.pop();
// list.pop();
// list.pop();
// list.pop();
// list.unshift("97");
// console.log(list);

// console.log(list.get(1));
// console.log(list.get(5));

console.log(list.set(0, 1000));
console.log(list);