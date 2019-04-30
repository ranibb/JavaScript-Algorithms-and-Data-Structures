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