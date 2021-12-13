/*
GRAPHS

Abstract data type

Basic Graph:
Stores nodes (represented by any primitive value) and the neighbors for each node. This implementation represents a graph as an adjacency list (https://en.wikipedia.org/wiki/Adjacency_list).

Here's an example:
1---2---3
 \ /
  4
graph = {
  1: [2, 4],
  2: [1, 3, 4],
  3: [2],
  4: [1, 2]
}

Constraints:
This graph implementation is undirected and can have unconnected nodes. The nodes are represented by unique primitive values.

*** Operations:
graph.addNode(value) // value must be a primitive
=> undefined
Add node to graph

graph.removeNode(value)
=> undefined
Remove node from graph

graph.contains(value)
=> true/false
Returns true if value is found in graph, false otherwise

graph.addEdge(value1, value2)
=> undefined
Create connection between two nodes if they're both present in the graph

graph.removeEdge(value1, value2)
=> undefined
Remove connection between two nodes

graph.hasEdge(value1, value2)
=> true/false
Returns true if edge exists, false otherwise

graph.forEach(callback)
=> undefined
Traverse the graph and invoke the passed callback once for each node. The callback function receives the following for each node: node value, node Neighbors, all nodes.

Implement traversal methods for depth-first and breadth-first traversal. The methods take a starting node and a callback that gets invoked for each node. The callback should receive two arguments: the node value and the distance (number of edges that separate the node from the starting node). See example usage below.

graph.traverseDepthFirst(value1, callback)
=> undefined
Starting at the node with the value passed in, traverse the graph and invoke the callback for each node in a depth-first fashion.

graph.traverseBreadthFirst(value, callback)
=> undefined
Starting at the node with the value passed in, traverse the graph and invoke the callback for each node in a breadth-first fashion.

Example Usage:
1---2---3---5
 \ /
  4
{
  '1': [ 2, 4 ],
  '2': [ 1, 3, 4 ],
  '3': [ 2, 5 ],
  '4': [ 1, 2 ],
  '5': [ 3 ]
}

var traverseDF = [];
graph.traverseDepthFirst(1, function(val, distance) { traverseDF.push([val, distance]) });
traverseDF should be [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 5, 3 ], [ 4, 2 ] ]

var traverseBF = [];
graph.traverseBreadthFirst(1, function(val, distance) { traverseBF.push([val, distance]) });
traverseBF should be [ [ 1, 0 ], [ 2, 1 ], [ 4, 1 ], [ 3, 2 ], [ 5, 3 ] ]


*** Additional Exercises:

Given a directed graph and two nodes in the graph, write a function that indicates whether there is a route between the two nodes. Bonus: rather than returning a boolean, have your function return the shortest distance between the two nodes (the number of edges that separate them).

*/


class Graph {
    constructor() {
        this._nodes = {};
    }
    addNode(value) {
        // Add node to graph
        if(value === undefined) return 'Add a value';
        this._nodes[value] = this._nodes[value] || [];
    }
    // Time complexity: O(log(n))
    removeNode(value) {
        // Remove node from graph
        this._nodes[value].forEach(neighbor=> {
            var neighborsNeighbors = this._nodes[neighbor];
            // find index of neighbor's node
            var index = neighborsNeighbors.indexOf(value);
            neighborsNeighbors.splice(index, 1);
        });
        delete this._nodes[value];
    }
    // Time complexity: O(1)
    contains(value) {
        // Returns true if value is found in graph, false otherwise
        return this._nodes[value] !== undefined;
    }
    // Time complexity: O(1)
    addEdge(value1, value2) {
        // Create connection between two nodes if they're both present in the graph
        if (!this._nodes[value1] || !this._nodes[value2]) {
            return "Invalid node";
        }
        this._nodes[value1].push(value2);
        this._nodes[value2].push(value1);
    }
    // Time complexity: O(1)
    removeEdge(value1, value2) {
        // Remove connection between two nodes
        if (!this._nodes[value1] || !this._nodes[value2]) {
            return "Invalid node";
        }
        this._nodes[value1].splice(this._nodes[value1].indexOf(value2), 1);
        this._nodes[value2].splice(this._nodes[value2].indexOf(value1), 1);
    }
    // Time complexity:
    hasEdge(value1, value2) {
        // Returns true if edge exists, false otherwise
        return this._nodes[value1].indexOf(value2) > -1
    }
    // Time complexity:
    forEach(fn) {
        // Traverse the graph and invoke the passed callback once for each node. The callback function receives the following for each node: node value, node Neighbors, all nodes.
        for (const node in this._nodes) {
            fn(node, this._nodes[node], this._nodes);
        }
    }
    // Time complexity:
    traverseDepthFirst(value, fn, visited, distance) {
        // Starting at the node with the value passed in, traverse the graph and invoke the callback for each node in a depth-first fashion.
        if (!this._nodes[value] || typeof fn !== 'function') return 'Invalid value or function';
        visited = visited || {};
        distance = distance || 0;
        fn(value, distance);
        visited[value] = true;
        this._nodes[value].forEach(function(neighbor) {
          if (visited[neighbor]) return;
          this.traverseDepthFirst(neighbor, fn, visited, distance+1);
        }, this);
    }
    // Time complexity:
    traverseBreadthFirst(value, fn) {
        // implement me...
    }
}
  
  // Time complexity:
  
// Test
var myGraph = new Graph();
myGraph.addNode(4);
myGraph.addNode(3);
myGraph.addNode(1);
myGraph.addNode(2);

console.log(myGraph);
console.log(myGraph._nodes);
console.log(myGraph.contains(4));
console.log(myGraph.contains(1));
console.log(myGraph.addEdge(3,7));
console.log(myGraph._nodes);
console.log(myGraph.addEdge(1, 2));
console.log(myGraph.addEdge(3,2));
console.log(myGraph.addEdge(4, 2));
console.log(myGraph.addEdge(1, 4));
console.log(myGraph._nodes);
myGraph.removeNode(4);
console.log(myGraph._nodes);
myGraph.addNode(4);
console.log(myGraph._nodes);
console.log(myGraph.addEdge(4, 2));
console.log(myGraph.addEdge(4, 1));
console.log(myGraph._nodes);
myGraph.removeEdge(4,2);
console.log(myGraph._nodes);
myGraph.removeEdge(2,1);
console.log(myGraph._nodes);
console.log(myGraph.hasEdge(2, 1), 'supposed to false');
console.log(myGraph.hasEdge(4, 1), 'supposed to true');
console.log(myGraph.hasEdge(3, 2), 'supposed to true');
myGraph.addEdge(2,1);
myGraph.addEdge(4,2);
console.log(myGraph._nodes);
myGraph.forEach((node, neighbor)=> {
    console.log(node, 'has neighbors', neighbor);
});

var traverseDF = [];
myGraph.traverseDepthFirst(1, (val, dist)=> { 
    traverseDF.push([val, dist]) 
});
console.log(traverseDF, 'should be [ [ 1, 0 ], [ 2, 1 ], [ 3, 2 ], [ 5, 3 ], [ 4, 2 ] ]');
