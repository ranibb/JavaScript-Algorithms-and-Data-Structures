/** Pushing pseudocode
 * 🔸 This function should accept a value
 * 🔸 Create a new node using the value passed to the function
 * 🔸 If there is no head property on the list, set the head and tail to be the newly created node
 * 🔸 Otherwise set the next property on the tail to be the new node and set the tail property on the list to be the newly created node
 * 🔸 Increment the length by one
 * 🔸 Return the linked list
 */

/** Popping pseudocode
 * 🔸 If there are no nodes in the list, return undefined
 * 🔸 Loop through the list until you reach the tail
 * 🔸 Set the next property of the 2nd to last node to be null
 * 🔸 Set the tail to be the 2nd to last node
 * 🔸 Decrement the length of the list by 1
 * 🔸 Return the value of the node removed
 */

/** Shifting pseudocode
 * 🔸 If there are no nodes, return undefined
 * 🔸 Store the current head property in a variable
 * 🔸 Set the head property to be the current head's next property
 * 🔸 Decrement the length by 1
 * 🔸 Return the value of the node removed
 */

/** Unshifting pseudocode
 * 🔸 This function should accept a value
 * 🔸 Create a new node using the value passed to the function
 * 🔸 If there is no head property on the list, set the head and tail to be the newly created node
 * 🔸 Otherwise set the newly created node's next property to be the current head property on the list
 * 🔸 Set the head property on the list to be that newly created node
 * 🔸 Increment the length of the list by 1
 * 🔸 Return the linked list
 */

/** Get pseudocode
 * 🔸 This function should accept an index
 * 🔸 If the index is less than zero or greater than or equal to the length of the list, return null
 * 🔸 Loop through the list until you reach the index and return the node at that specific index
 */

/** Set pseudocode
 * 🔸 This function should accept a value and an index
 * 🔸 Use your get function to find the specific node
 * 🔸 If the node is not found, return false
 * 🔸 If the node is found, set the value of that node to be the value passed to the function and return true
 */

/** Insert psedocode
 * 🔸 If the index is less than zero or greater than the length, return false
 * 🔸 If the index is the same as the length, push a new node to the end of the list
 * 🔸 If the index is 0, unshift a new node to the start of the list
 * 🔸 Otherwise, using the get method, access the node at the index - 1
 * 🔸 Set the next property on that node to be the new node
 * 🔸 Set the next property on the new node to be the previous next
 * 🔸 Increment the length
 * 🔸 Return true
 */

/** Remove psedocode
 * 🔸 If the index is less than zero or greater than the length, return undefined
 * 🔸 If the index is the same as the length-1, pop
 * 🔸 If the index is 0, shift
 * 🔸 Otherwise, using the get method, access the node at the index - 1
 * 🔸 Set the next property on that node to be the next of the next node
 * 🔸 Decrement the length
 * 🔸 Return the value of the node removed
 */

/** Reverse psedocode
 * 🔸 Swap the head and tail
 * 🔸 Create a variable called next
 * 🔸 Create a variable called prev
 * 🔸 Create a variable called node and initialize it to the head property
 * 🔸 Loop through the list
 * 🔸 Set next to be the next property on whatever node is
 * 🔸 Set the next property on the node to be whatever prev is
 * 🔸 Set prev to be the value of the node variable
 * 🔸 Set the node variable to be the value of the next variable
 * 🔸 Once you have finished looping, return the list
 */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// A Bad way of making a linked list.
// var first = new Node("Hi");
// first.next = new Node("There"); // Setting next to be a whole other new node
// first.next.next = new Node("how");
// first.next.next.next = new Node("are");
// first.next.next.next.next = new Node("you");
// console.log(first);

// The right way of making a linked list.
class SinglyLinkedList {

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this; // returns the whole list
  }

  // a way of traversing a linked list
  // traverse() {
  //   var current = this.head;
  //   while(current) {
  //     console.log(current.val);
  //     current = current.next;
  //   }
  // }

  pop() {
    // if(!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    // console.log(current.val);
    // console.log(newTail.val);
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentHead;
  }

  unshift(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    var foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(val); // use !! to covert the returned value to boolean
    if (index === 0) return !!this.unshift(val); // use !! to covert the returned value to boolean

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    var previousNode = this.get(index - 1);
    var removed = previousNode.next;
    previousNode.next = removed.next;
    this.length--;
    return removed;
  }

  reverse() {
    var node = this.head;
    this.head = this.tail;
    this.tail = node;
    var next;
    var prev = null;
    for(var i = 0; i < this.length; i++) {
      next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return this;
  }

  print() {
    var arr = [];
    var current = this.head;
    while(current) {
      arr.push(current.val)
      current = current.next;
    }
    console.log(arr);
  }

}

var list = new SinglyLinkedList();
list.push("HELLO");
list.push("GOODBYE");
list.push("!");
list.push("<3");
list.push(":)");

// console.log(list.head.next.next);
// console.log(list.traverse());

// list.pop();
// list.pop();
// list.pop();
// console.log(list);

// list.shift();
// list.shift();
// list.shift();
// console.log(list);

// list.unshift("First");
// console.log(list);

// console.log(list.get(2));

// list.set(6, "!!!");
// console.log(list.get(2));

// list.insert(0, "FIRST");
// console.log(list.get(6)); // null at this moment
// list.insert(6, "LAST");
// list.insert(100, 1) // returns false
// list.insert(1, "Hi");
// console.log(list);

// list.remove(0);
// list.remove(1);
// list.remove(4);
// console.log(list);

// console.log(list.print());
// list.reverse();
// console.log(list.head);
// console.log(list.tail);
// console.log(list.print());