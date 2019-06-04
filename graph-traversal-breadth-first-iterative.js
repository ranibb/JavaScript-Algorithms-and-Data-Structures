/** BREADTH FIRST
 * 🔸 This function should accept a starting vertex
 * 🔸 Create a queue (you can use an array) and place the starting vertex in it
 * 🔸 Create an array to store the nodes visited
 * 🔸 Create an object to store nodes visited
 * 🔸 Mark the starting vertex as visited
 * 🔸 Loop as long as there is anything in the queue
 * 🔸 Remove the first vertex from the queue and push it into the array that stores nodes visited
 * 🔸 Loop over each vertex in the adjacency list for the vertex you are visiting.
 * 🔸 If it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex
 * 🔸 Once you have finished looping, return the array of visited nodes
 */

class Graph {
  constructor() {
    this.adjacencyList = {};
  }
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }
  addEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].push(vertex2);
    this.adjacencyList[vertex2].push(vertex1);
  }
  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(v => v !== vertex2);
    this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(v => v !== vertex1);
  }
  removeVertex(vertex) {
    while (this.adjacencyList[vertex].length) {
      const adjacentVertix = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertix);
    }
    delete this.adjacencyList[vertex];
  }
  breadthFirstIterative(start) {
    const queue = [start];
    const result = [];
    const visited = {};
    visited[start] = true;
    let currentVertex;

    while (queue.length) {
      // console.log(queue);
      currentVertex = queue.shift();
      result.push(currentVertex);
      // this.adjacencyList[currentVertex].slice().reverse().forEach(neighbor => { // A -> C -> B -> E -> D -> F
      this.adjacencyList[currentVertex].forEach(neighbor => { // A -> B -> C -> D -> E -> F
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          queue.push(neighbor);
        }
      });
    }
    return result;
  }

}

var g = new Graph();

g.addVertex("A")
g.addVertex("B")
g.addVertex("C")
g.addVertex("D")
g.addVertex("E")
g.addVertex("F")

g.addEdge("A", "B")
g.addEdge("A", "C")
g.addEdge("B", "D")
g.addEdge("C", "E")
g.addEdge("D", "E")
g.addEdge("D", "F")
g.addEdge("E", "F")

console.log(g.breadthFirstIterative("A"));