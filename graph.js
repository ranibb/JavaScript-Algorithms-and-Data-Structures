/** ADDING A VERTEX
 * 🔸 Write a method called addVertex, which accepts a name of a vertex
 * 🔸 It should add a key to the adjacency list with the name of the vertex and set its value to 
 *    be an empty array
 */

/** ADDING AN EDGE
 * 🔸 This function should accept two vertices, we can call them vertex1 and vertex2
 * 🔸 The function should find in the adjacency list the key of vertex1 and push vertex2 to the array
 * 🔸 The function should find in the adjacency list the key of vertex2 and push vertex1 to the array
 * 🔸 Don't worry about handling errors/invalid vertices
 */

/** REMOVING AN EDGE
 * 🔸 This function should accept two vertices, we'll call them vertex1 and vertex2
 * 🔸 The function should reassign the key of vertex1 to be an array that does not contain vertex2
 * 🔸 The function should reassign the key of vertex2 to be an array that does not contain vertex1
 * 🔸 Don't worry about handling errors/invalid vertices
 */

/** REMOVING A VERTEX
 * 🔸 The function should accept a vertex to remove
 * 🔸 The function should loop as long as there are any other vertices in the adjacency list for that vertex
 * 🔸 Inside of the loop, call our removeEdge function with the vertex we are removing and any values in the adjacency list for that vertex
 * 🔸 delete the key in the adjacency list for that vertex
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
    while(this.adjacencyList[vertex].length) {
      const adjacentVertix = this.adjacencyList[vertex].pop();
      this.removeEdge(vertex, adjacentVertix);
    }
    delete this.adjacencyList[vertex];
  }
}

var g = new Graph();
g.addVertex("Dallas");
g.addVertex("Tokyo");
g.addVertex("Aspen");
// console.log(g);

g.addEdge("Dallas", "Tokyo");
// console.log(g);
g.addEdge("Dallas", "Aspen");
// console.log(g);

// g.removeEdge("Dallas", "Aspen");
// console.log(g);
// g.removeEdge("Dallas", "Tokyo");
// console.log(g);

g.addVertex("Los Angeles");
g.addVertex("Hong Kong");
g.addEdge("Hong Kong", "Tokyo");
g.addEdge("Hong Kong", "Dallas");
g.addEdge("Los Angeles", "Hong Kong");
g.addEdge("Los Angeles", "Aspen");

console.log(g.adjacencyList);
g.removeVertex("Hong Kong");
console.log(g.adjacencyList);