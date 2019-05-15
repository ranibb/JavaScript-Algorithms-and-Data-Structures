/** INSERTING A NODE
 * 🔸 Create a new node
 * 🔸 Starting at the root
 *    ◻️ Check if there is a root, if not - the root now becomes that new node!
 *    ◻️ If there is a root, check if the value of the new node is greater than or less than the value of the root
 *    ◻️ If it is greater 
 *      🔹 Check to see if there is a node to the right
 *         ▫️ If there is, move to that node and repeat these steps
 *         ▫️ If there is not, add that node as the right property
 *    ◻️ If it is less
 *      🔹 Check to see if there is a node to the left
 *         ▫️ If there is, move to that node and repeat these steps
 *         ▫️ If there is not, add that node as the left property
 */

/** Finding a Node in a BST
 * 🔸 Starting at the root
 *    ◻️ Check if there is a root, if not - we're done searching!
 *    ◻️ If there is a root, check if the value of the new node is the value we are looking for. If we found it, we're done!
 *    ◻️ If not, check to see if the value is greater than or less than the value of the root
 *    ◻️ If it is greater 
 *      🔹 Check to see if there is a node to the right
 *         ▫️ If there is, move to that node and repeat these steps
 *         ▫️ If there is not, we're done searching!
 *    ◻️ If it is less
 *      🔹 Check to see if there is a node to the left
 *         ▫️ If there is, move to that node and repeat these steps
 *         ▫️ If there is not, we're done searching!
 */

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    var newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value === current.value) return undefined; // You could implement a frequency counter instead of returning undefined
        if (value < current.value) {
          if (current.left === null) {
            current.left = newNode;
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = newNode;
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  find(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return undefined;
    return current;
  }
  containes(value) {
    if (this.root === null) return false;
    var current = this.root;
    var found = false;
    while (current && !found) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

var tree = new BinarySearchTree();
tree.insert(10);
tree.insert(5);
tree.insert(2);
// console.log(tree.root.left.left); // 2
tree.insert(13);
tree.insert(11);
tree.insert(16);
tree.insert(7);
tree.insert(3);
// console.log(tree.root.right); // 13
// console.log(tree.root.left.right); // 7

// Handling duplicates
// console.log(tree.insert(10));

// console.log(tree.find(5));
// console.log(tree.find(10));
// console.log(tree.find(100));
// console.log(tree.containes(500));