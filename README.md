The Missing Computer Science and Coding Interview Bootcamp

## Data Structure

Data structures are collections of values, the relationships among them, and the functions or operations that can be applied to the data.

Different data structures excel at different things. Some are highly specialized, while others (like arrays) are more generally used.

**To name a few, we have:**

* Singly Linked Lists
* Doubly Linked Lists
* Stacks
* Queues
* Binary Search Trees
* Binary Heaps
* Hash Tables
* Graphs
* Undirected Unweighted Graphs
* Directed Graphs

**Possible use cases (examples):**

* *Working with map/location data?* You are writing a code that will route you to the nearest gas station that has the cheapest deals. For that, you might want to use a graph data structure because it would be very difficult to represent a map using a single array.

* *Need an ordered list with fast inserts/removals at the beginning and end?* Maybe you have a huge data set and you have to have it ordered and you are always inserting and removing from both ends. For that, you might want to use a linked list because Arrays do not do well when you insert at the beginning or remove from the beginning, everything has to be indexed.

* *Web scraping nested HTML?* Are you writing some sort of app that is scraping data from airline's websites or hotel websites and you are interacting with HTML or you are using a library to help you, it's almost guaranteed to give you the data in a tree.

* *Need to write a scheduler?* you are writing an app that has tasks that are scheduled and you need to find what's the highest priority task to handle at any giving point, you might use a binary heap.

### ES205 Class Overview

* Classes are blueprints that when created make objects known as **instances**
* Classes are created with the *new* keyword
* The *constructor* function is a special function that gets run when the class is instantiated
* Instance methods can be added to classes similar to methods in objects
* Class methods can be added using the static keyword

**What is a class?**

A blueprint for creating objects with pre-defined properties and methods. For example, we could define a pattern for a doubly linked list but then we can actually instantiate many objects (many individual linked lists) using that blueprint.

#### The Syntax

**The constructor method**

~~~JavaScript
class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
  }
}
// Instantiate using the new keyword
let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");
~~~

The method to create new objects must be called constructor method. We are not explicitly calling the constrictor. we are not saying `student.constructor`, there's some magic behind the scenes, some syntactic sugar that we use the `new` keyword, but the constructor method is going to be executed or data will basically be patched on through and our constructor will run when we instantiate a new student or whatever our class is. 

The class keyword creates a constant, so you cannot redefine it. Watch out for the syntax as well!

The `this` keyword changes depending on its context. In this situation, when we are inside of a constructor or another instance method, `this` refers to the individual instance of the class. So, the individual student.

**Instance Methods**

They provide functionality that pertains to a single instance of in our case student.

~~~JavaScript
class Student {

  constructor(firstName, lastName, year){
    this.firstName = firstName;
    this.lastName = lastName;
    this.grade = year;
    this.tardies = 0;
    this.scores = [];
  }

  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }

  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU ARE EXPELLED!!!";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times`;
  }

  addScore(score) {
    this.scores.push(score)
    return this.scores
  }

  calculateAverage() {
    let sum = this.scores.reduce((accumulator, currentValue) => accumulator + currentValue);
    return sum/this.scores.length;
  }
}

let firstStudent = new Student("Colt", "Steele", 1);
let secondStudent = new Student("Blue", "Steele", 2);

firstStudent.fullName() // "Colt Steele"
firstStudent.markLate() // "Colt Steele has been late 1 times"
firstStudent.markLate() // "Colt Steele has been late 2 times"
firstStudent.markLate() // "YOU ARE EXPELLED!!!"
firstStudent.addScore(92) // [92]
firstStudent.addScore(87) // [92, 87]
firstStudent.calculateAverage(87) // 89.5
~~~

Note: You could access class properties directly but its more conventional to define a method that will do this. So, you can think of method as our interface to the data.

**Static/Class Methods**

This allows is to define methods or functionality that is pertinent to classes but not necessarily to individual instances of a class.

The static keyword defines a static method for a class. Static methods aren't called on instances of the class. Instead, they're called on the class itself. These are often utility functions, such as functions to create or clone objects.

~~~JavaScript
class Student {
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  
  fullName(){
    return `Your full name is ${this.firstName} ${this.lastName}`;
  }
  
  // This method is like a utility function that is not related to a single individual student (not related to a particular instance).
  static enrollStudents(...students) {
    // recives multipble student in an array.
    // maybe send an email to each of thier associated email address.
  }
}

let firstStudent = new Student("Colt", "Steele");
let secondStudent = new Student("Blue", "Steele");

Student.enrollStudents([firstStudent, secondStudent])
~~~

~~~JavaScript
class Point {

  constructor(x, y) {
    this.x = y;
    this.y = y;
  }

  static distance(a, b) {
    const dx = a.x - b.x;
    const dy = a.y - b.y;
    return Math.hypot(dx, dy);
  }
}
~~~

### Singly Linked Lists

* Singly Linked Lists are an excellent alternative to arrays when insertion and deletion at the beginning are frequently required
* Arrays contain a built in index whereas Linked Lists do not
* The idea of a list data structure that consists of nodes is the foundation for other data structures like Stacks and Queues

**What is a linked List?**

It's a data structure that stores whatever data you want strings or numbers. It's ordered. It contains a head, tail and length property. It's a list of data just like an array but there's a really big distinction. In an array, each item is mapped its index with a number. Linked Lists consist of nodes, each node has a value and a pointer to another node or null.

A node consists of a bunch of nodes. A node stores a piece of data like a string or a number but it also references the next node or if it's at the very end, it references null.

The head is the beginning of the linked list. The tail is the end. So, we don't keep track of every single item in the middle. We just keep track of the head and from the head we can figure out the next one. And from there we can figure out the next one all the way until the end. And then also we keep track of the length to make things easier.

The terminology singly linked list comes from the fact that each node is only connected one directionally to the next node.

To insert at the very beginning of a linked list, all what we have to do is make a new head and have it pointed to the old head, unlike array where every single item would have to be re-indexed to get a new position number.

**Comparisons with Arrays**

| Lists                                   | Arrays                                      |
| ----------------------------------------| ------------------------------------------- |
| Do not have indexes!                    | Indexed in order!                           |
| Connected via nodes with a next pointer | Insertion and deletion can be expensive     |
| Random access is not allowed            | Can quickly be accessed at a specific index |

**Big O of Singly Linked List**
* Insertion - O(1)
* Removal - It depends.... O(1) or O(N)
* Searching - O(N)
* Access - O(N)

### Doubly Linked Lists

Almost identical to Singly Linked Lists, except every node has another pointer, to the previous node!

* Doubly Linked Lists are almost identical to Singly Linked Lists except there is an additional pointer to previous nodes
* Better than Singly Linked Lists for finding nodes and can be done in half the time!
* However, they do take up more memory considering the extra pointer
* Doubly linked lists are used to implement other data structures and certain types of caches

**Big O of Doubly Linked Lists**

* Insertion - O(1)
* Removal - O(1)
* Searching - O(N) - Technically searching is O(N / 2), but that's still O(N)
* Access - O(N)

### Stacks + Queues

Stacks and Queues are both data collections (an abstract/concept data structure):
* A **Stack** needs to abide by a LIFO (Last In First Out) principle: The Last element added to the stack will be the first element removed from the stack.
* A **Queue** needs to abide by a FIFO (First In First Out) principleL The First element added to the queue will be the first element removed from the queue.

#### Stacks

**Where stacks are used**

* Stacks are used to handle function invocations (the call stack), for operations like undo/redo, and for routing (remember pages you have visited and go back/forward) and much more!
* They are not a built-in data structure in JavaScript, but are relatively simple to implement

There is more than one way of implementing a stack:
* Use an array and utilize it's push & pop methods, working with the end of the array, adding to the end and removing from the end.
* Use an array and utilize unshift & shift methods, working with beginning of the array, adding to the beginning and removing from the beginning.
* build our own stack class following the principles of a singly linked list. But note as stack should be constant time, we need to implement push and pop to add and remove from the beginning to avoid iterating over the entire list.

**BIG O of STACKS**
* Insertion - O(1)
* Removal - O(1)
* Searching - O(N) - not important to stack concept
* Access - O(N) - not important to stack concept

#### Queues

**Where Queues are used**

Queues are useful for processing tasks and are foundational for more complex data structures.

* Background tasks
* Uploading resources
* Printing / Task processing

There is more than one way of implementing a stack:
* Use an array and utilize its push & shift methods.
* Use an array and utilize its unshift & pop methods.
* build our own queue class.

**BIG O of QUEUES**

* Insertion - O(1)
* Removal - O(1)
* Searching - O(N) - not important to queue concept
* Access - O(N) - not important to queue concept

### Binary Search Trees

**What is a Tree?**

A data structure that consists of nodes in a parent / child relationship. Unlike lists which are linear, its one thing and then the next then the next everything is in a line in a row, Trees are non-linear. Tress can branch to more than one pathway. In a doubly linked list, you could work backwards or forwards but still there is one line through our data structure.

A node in a tree can only point to a child. We can't have a child pointing to parents neither to a sibling. Also, in a tree we can only have one root (one entry point).

**Tree Terminology**

* Root - The top node in a tree.
* Child -A node directly connected to another node when moving away from the Root.
* Parent - The converse notion of a child.
* Siblings -A group of nodes with the same parent.
* Leaf - A node with no children.
* Edge - The connection between one node and another.

**Trees**

Trees are non-linear data structures that contain a root and child nodes. We can search through Trees using Breadth-first Search (BFS) and Depth-first Search (DFS).

Lots of different applications!
* HTML DOM
* Network Routing
* Abstract Syntax Tree
* Artificial Intelligence
* Folders in Operating Systems
* Computer File Systems
* JSON

**Binary Trees**

Binary Trees can have values of any type, but at most two children for each parent.

**Binary Search Trees**

Binary Search Trees are a more specific version of binary trees. They are sorted in a particular way, they are kept in order:
* Every node to the left of a parent node is always less than the parent
* Every node to the right of a parent node is always greater than the parent

**Why BST is used?**

* Fast to look things up
* Easy to insert things (find a place for a node)

**Big O of BST**

As the number of node doubles, we only increase the number of steps by 1.
* Insertion - O(log n) - NOT guaranteed!
* Searching - O(log n) - NOT guaranteed!

#### Tree Traversal

This is the idea of basically given any tree whether it's a binary search tree or just a plain binary tree that's unsorted or ternary tree or some other tree that has any number of nodes. There is no special order, just any tree.

If we want to find a node, we would probably need to visit every single node in order to figure out that it's not there. We will focus on four very commonly known approaches:
* Breadth-first Search
* Depth-first Search
  * InOrder
  * PreOrder
  * PostOrder

Tree Traversal is independent of binary search trees. But we will be working with BST just so that we don't have to duplicate code and create a new tree class.

**Breadth-first Search**

Visit every node on the same level (working horizontally), every sibling node before we look at a child.

**Depth-first Search**

There are three different orders (InOrder, PreOrder and PostOrder) with DFS and all of them pursue all nodes they visit or traverse vertically down to the end of the tree before visiting sibling nodes.

**When to use BFS and DFS**

Time complexity is the same - we are visiting every node once.

space complexity depends on the structure of the tree:
* If it's a really wide tree, BFS could store or take up a lot more space for that.
* If it's a really deep long tree, then DFS could end up taking more space.

Potential use cases for the different variants of DFS:
* *InOrder* - Using InOrder on BST, the data we get back is in order, from lowest to highest.
* *PreOrder* - could be useful if you want to clone or duplicate a tree or you want to store or flatten it out so you can store it in a file or a database and then recreate it from that serialized structure.

### Binary Heaps

Very similar to a binary search tree, but with some different rules! In a MaxBinaryHeap, parent nodes are always larger than child nodes. In a MinBinaryHeap, parent nodes are always smaller than child nodes.

**MaxBinaryHeap**

* Each parent has at most two child nodes
* The value of each parent node is always greater than its child nodes
* In a max Binary Heap the parent is greater than the children, but there are no guarantees between sibling nodes.
* A binary heap is as compact as possible. All the children of each node are as full as they can be and left children are filled out first

**Why do we need to know this?**

* Binary Heaps are used to implement Priority Queues, which are very commonly used data structures
* They are also used quite a bit, with graph traversal algorithms

**Storing a Binary Heap**

We could implement a tree class and a node class where each node has a left and a right and we could do the same thing we did for a binary search tree but there is an easier way. We can actually use a built-in data structure, an array or a list to store a binary heap.

![Merge Sort Diagram](https://raw.githubusercontent.com/ranibb/JavaScript-Algorithms-and-Data-Structures/Data-Structure/diagrams/max-binary-heap.jpg)

**SINK DOWN?**

The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (also known as bubble-down, percolate-down, sift-down, trickle down, heapify-down, cascade-down, and extract-min/max).

#### Priority Queues

A data structure where each element has a priority. Elements with higher priorities are served before elements with lower priorities. Just like in an emergency room at a hospital, you have a bunch of people waiting, everybody is assigned internally at least some sort of priority level and then a nurse or doctor comes out and retrieves one person at a time based off of that priority level.

A priority queue is an abstract concept that is commonly done with a heap. It could be done naively with a list or array where you would have to iterate over the entire thing to find the highest priority element.

The actual algorithm for a priority queue, the comparison itself, will likely to change. In the real world, it might be priority level Plus how many resources it takes up or how resource intensive it is Plus how long it spent waiting. These different things might impact the comparison rather than just direct priority versus priority.

#### Big O of Binary Heaps

(For 16 Elements....4 comparisons) 2^y = 16. Every time we double the number of nodes, every new full complete layer, we are only increasing the time that it takes by one. It is the same for removal.

Binary heaps are not meant to be searchable.

* Insertion - O(log N) 
* Removal - O(log N)
* Search - O(N)

### Hash Tables

Hash tables are used to store **key-value pairs** (**key-value data stores**). They are like arrays, but the keys are not ordered. Unlike arrays, hash tables are fast for all of the following operations: find values quickly given a key, add new key-values quickly, and removing values!

Nearly every programming language has some sort of hash table data structure. Because of their speed, hash tables are very commonly used!

**Hash Tables in the wild**

* *Python* has *Dictionaries*
* *JS* has *Objects* and *Maps*/*
* *Java*, *Go*, & *Scala* have *Maps*
* *Ruby* has *Hashes*

*/Objects have some restrictions, but are basically hash tables.

#### Implementing our own version of key-value data stores, a Hash Table.

**Introductory Example**

Imagine we want to store some colors, we could just use an array/list: `[ "#ff69b4","#ff4500","#00ffff" ]`, but there is an order here that's implicit and there's no reason we'd want to store them in a particular order unless for example we just need a random color at any point. But if we need particular colors at a particular moment, it would be much better to use human readable keys like pink ---> #ff69b4, orange ---> #ff4500, cyan ---> #00ffff. So saying `colors["cyan"]` is better than saying `colors[2]`. So we are going to implement this structure on our own even though you would be able to do this out of the box in JavaScript.

note: In a Hash Table, it doesn’t have to be a string, it could be any piece of data such as Boolean, array, image, pdf, video. But we are going to focus on string to narrow down some of the complexity.

To implement a hash table, we'll be using an array. A way of storing information where we have to use numbers.

In order to look up values by key, we need a way to convert keys into valid array indices. A function that performs this task is called a hash function or hashing function.

There are very intense teams, multi-country efforts of people, working on hash functions because they have a lot of applications in security and cryptography. But what we're talking about here going to be very simple and limited in scope of hash functions.

The idea here in our simple example is that if we pass in a string "pink" to our array of 10 slots, the hash function needs to give us some number between 0 and 9. And every time we pass "pink", it should give us the same number. Now if you are asking what's an index "pink", we would pass pink to the hashing function and retrieve the index that was given earlier.

So, we will be using hash functions to convert keys and turn that into a valid array index.

**The basic defention of a basic Hash Function**

It’s just a function that takes data of arbitrary size whether it's a thousand characters or a million characters and it's going to spit out data of a fixed size. It's going to map an input to an output of a fixed size.

**What makes a good Hash?** (not a cryptographically secure one)

1. Fast (i.e. constant time)
2. Doesn't cluster outputs at specific indices, but distributes uniformly
3. Deterministic (same input yields same output)

**Writing our First Hash Function**

There are many ways to convert a string to a number but it needs to be reliable, Deterministic meaning that is reproducible, every time we get the same output.

One way is to use the underlying UTF-16 character codes for each character. Every character has a numeric value associated with it. The way to access that as the following example:

~~~JavaScript
console.log("a".charCodeAt(0)); // 97
console.log("hi".charCodeAt(0)); // 104
console.log("hi".charCodeAt(1)); // 105
~~~

If you subtract `96`, this will give us the alphabetic ranking or position:

~~~JavaScript
console.log("a".charCodeAt(0) - 96); // 1
console.log("hi".charCodeAt(0) - 96); // 8
console.log("hi".charCodeAt(1) - 96); // 9
~~~

So, we will do this for every character in a string and add the total together. So, suppose that you do this for the string "hello" which yields 52. Passing this number to a hash function with a length of 11 for an array, should store the string in a valid index. Since 52 is greater than 11, we could keep it within these bounds using modulo %, divide a number by a certain number and then you take the reminder, that’s what you store. So, 52 % 11 = 8.

**Dealing with Collisions**

Even with a large array and a great hash function, collisions are inevitable. There are many strategies for dealing with collisions, but we'll focus on two:
1. Separate Chaining
2. Linear Probing

With **separate chaining**, at each index in our array we store values using a more sophisticated data structure (e.g. an array or a linked list). This allows us to store multiple key-value pairs at the same index.

![Separate Chaining](https://raw.githubusercontent.com/ranibb/JavaScript-Algorithms-and-Data-Structures/Data-Structure/diagrams/separate-chaining.jpg)

With **linear probing**, when we find a collision, we search through the array to find the next empty slot. Unlike with separate chaining, this allows us to store a single key-value at each index.

![Linear Probing](https://raw.githubusercontent.com/ranibb/JavaScript-Algorithms-and-Data-Structures/Data-Structure/diagrams/linear-probing.jpg)

**Hash Table Big O Complexity** (average case)

* Insert: O(1)
* Deletion: O(1)
* Access: O(1)

### Graphs

A graph data structure consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an undirected graph or a set of ordered pairs for a directed graph.

**USES FOR GRAPHS**

* Social Networks
* Location / Mapping
* Recommendations
* Routing Algorithms
* Visual Hierarchy
* File System Optimizations
* EVERYWHERE!

**Essential Graph Terms**

* **Vertex** - a node
* **Edge** - connection between nodes
* **Weighted/Unweighted** - values assigned to distances between vertices
* **Directed/Undirected** - directions assigned to distanced between vertices

#### Storing Graphs

The following is a graph of a small subset of Wikipedia pages. Each vertex is a page or an article on Wikipedia and each edge (connection) represents a link or a cross-reference.

| ![Visualization of wiki structure using prefuse visualization package](https://raw.githubusercontent.com/ranibb/JavaScript-Algorithms-and-Data-Structures/Data-Structure/diagrams/Visualization_of_wiki_structure_using_prefuse_visualization_package.jpg) | 
|:--:| 
| *From Wikimedia Commons, the free media repository* |

To store this graph in code, there are two common ideas: the **adjacency matrix** and the **adjacency list**.

**Adjacency Matrix:**

A matrix is just a two-dimensional structure usually implemented with nested arrays but not always. And basically, we store information in rows and columns.

In Adjacency matrix, every time we add a new node (vertex), we have to add an entire new row and entire new column.

![Adjacency matrix Undirected](https://raw.githubusercontent.com/ranibb/JavaScript-Algorithms-and-Data-Structures/Data-Structure/diagrams/Adjacency-matrix-Undirected.jpg)

**Adjacency List:**

In Adjacency list, we use an array or a list to store the edges.

If we are talking about numbers, the following hinges on using the positions of an array.

![Adjacency list Undirected using array](https://raw.githubusercontent.com/ranibb/JavaScript-Algorithms-and-Data-Structures/Data-Structure/diagrams/Adjacency-list-Undirected-using-array.jpg)

If we are taking about letters or strings or something else that isn't just a number and not in order, we could use a hash table.

![Adjacency list Undirected using a hash table](https://raw.githubusercontent.com/ranibb/JavaScript-Algorithms-and-Data-Structures/Data-Structure/diagrams/Adjacency-list-Undirected-using-a-hash-table.jpg)

**Adjacency Matrix Vs. List BIG O**

* |V| - number of vertices
* |E| - number of edges

| OPERATION     | ADJACENCY LIST | ADJACENCY MATRIX |
| ------------- | -------------- | ---------------- |
| Add Vertex    | O(1)           | O(|V^2|)         |
| Add Edge      | O(1)           | O(1)             |
| Remove Vertex | O(|V| + |E|)   | O(|V^2|)         |
| Remove Edge   | O(|E|)         | O(1)             |
| Query         | O(|V| + |E|)   | O(1)             |
| Storage       | O(|V| + |E|)   | O(|V^2|)         |

| ADJACENCY LIST                            | ADJACENCY MATRIX                       |
| ----------------------------------------- | -------------------------------------- |
| Can take up less space (in sparse graphs) | Takes up more space (in sparse graphs) |
| Faster to iterate over all edges          | Slower to iterate over all edges       |
| Can be slower to lookup specific edge     | Faster to lookup specific edge         |

**What will we use?**

* Adjacency List takes up less space.
* Most data in the real-world tends to lend itself to sparser and/or larger graphs, so we can have ton of nodes, lots of vertices but usually they're not all connected and that lends itself more to adjacency list.

### Graph Traversal (Visiting/Updating/Checking each vertex in a graph)

**Graph Traversal Uses**

* Peer to peer networking
* Web crawlers
* Finding "closest" matches/recommendations
* Shortest path problems
  * GPS Navigation
  * Solving mazes
  * AI (shortest path to win the game)

#### Depth First Graph Traversal

When we say Depth First for a binary search tree or any tree, it means that we're prioritizing visiting children of a given node before we visit siblings or we deepen the traversal before we widen it. Whether we're going left or right first doesn't really matter.

When we're talking about graphs that are not trees they can be a little trickier to understand what depth means versus breath, because it's easy on a tree where we have a clear direction down or it depends you know how it's drawn sometimes you see trees drawn upwards from the root, there is clear path through that tree. There's one root and you descend away or you ascend moving away from that root.

The basic idea of depth first traversal in a graph, we follow a branch down, following the neighbors and continuing to follow the neighbors before backtrack.