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