/** DFS PSEUDOCODE (Iterative)
 * 🔸 The function should accept a starting node
 * 🔸 Create a stack to help use keep track of vertices (use a list/array)
 * 🔸 Create a list to store the end result, to be returned at the very end
 * 🔸 Create an object to store visited vertices
 * 🔸 Add the starting vertex to the stack, and mark it visited
 * 🔸 While the stack has something in it:
 *    ◻️ Pop the next vertex from the stack
 *    ◻️ If that vertex hasn't been visited yet:
​ *      🔹 Mark it as visited
 *      🔹 Add it to the result list
 *      🔹 Push all of its neighbors into the stack
 * 🔸 Return the result array
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
  depthFirstIterative(start) {
    const stack = [start];
    const result = [];
    const visited = {};
    let currentVertex;

    visited[start] = true;
    while (stack.length) {
      // console.log(stack);
      currentVertex = stack.pop();
      result.push(currentVertex);
      this.adjacencyList[currentVertex].forEach(neighbor => {
        if(!visited[neighbor]) {
          visited[neighbor] = true;
          stack.push(neighbor);
        }
      })
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

console.log(g.depthFirstIterative("A"));