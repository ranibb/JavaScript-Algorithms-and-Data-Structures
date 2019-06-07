// Time complexity O(N * log(N)) 
class PriorityQueue {
  constructor() {
    this.values = [];
  }
  enqueue(val, priority) {
    this.values.push({val, priority});
    this.sort();
  };
  dequeue() {
    return this.values.shift();
  };
  sort() {
    this.values.sort((a, b ) => a.priority - b.priority);
  };
}

var q = new PriorityQueue();

q.enqueue("B", 3);
q.enqueue("C", 5);
q.enqueue("Q", 20);
// console.log(q.values);
q.enqueue("Q", 1.5);
console.log(q.values);