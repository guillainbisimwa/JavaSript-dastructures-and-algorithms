/*
TREES

Abstract data type

General Tree:
A tree has a root node.
The root node has 0 or more children.
Each child node has 0 or more children.
(each node in the tree can be seen as a subtree)

Constraints:
A child has only one parent and the root node has no parent.
Note: A tree is a special type of graph. A tree is a graph without cycles.

*** Operations:

tree.addChild(value)
=> child node (new tree)
add child to tree/subtree and return child node (which should be a tree instance)

tree.contains(value)
=> true/false
Return true if value is in tree, false if not

tree.traverseDepthFirst(callback)
=> undefined
Invoke the callback for every node in a depth-first order

tree.traverseBreadthFirst(callback)
=> undefined
Invoke the callback for every node in a breadth-first order

*** Additional Exercises:
Given treeA and treeB, check if treeB is a subtree of treeA (meaning that there exists a node n in treeA such that the subtree of n is identical to treeB).

Given a dictionary, create a prefix tree (commonly known as a trie)
https://en.wikipedia.org/wiki/Trie

*/

class Tree {
    constructor(value) {
        // Init constructor
        this.value = value;
        this.children = [];
    }
    addChild(value) {
        // add child to tree/subtree and return child node (which should be a tree instance)
        var newChild = new Tree(value);
        this.children.push(newChild);
        return newChild;
    }
    // Time complexity: O(n)
    contains(value) {
        // Return true if value is in tree, false if not
        if(value == this.value){
            return true;
        }
        for (let index = 0; index < this.children.length; index++) {
            if(this.children[index].contains(value)){
                return true;
            }
        }
        return false;
    }
    // Time complexity: O(n)
    traverseDepthFirst(fn) {
        // Invoke the callback for every node in a depth-first order
        this.children.forEach(element => {
            element.traverseDepthFirst(fn);
        });
        fn(this);
    }
    // Time complexity: O(n)
    traverseBreadthFirst(fn) {
        // Invoke the callback for every node in a breadth-first order
        var queue = [this];
        while(queue.length){
            var node = queue.shift();
            fn(node.value);

            node.children.forEach( element => {
                queue.push(element);
            });
        }
    }
}
  
  // Time complexity:
  
  // Test 

var myTree = new Tree(1);
console.log(myTree);
var branch1 = myTree.addChild(2);
console.log(myTree);
var branch2 = myTree.addChild(3);
var branch3 = myTree.addChild(7);
console.log(myTree);
branch1.addChild(4);
branch1.addChild(5);
console.log(myTree);
console.log(branch1);
console.log(branch3);
branch2.addChild(6);
var branch2Child = branch2.addChild(7);
branch2Child.addChild(10);
branch2Child.addChild(11);
branch3.addChild(8);
branch3.addChild(9);
console.log(branch2);
console.log(branch3);

console.log(myTree.contains(9));
console.log(myTree.contains(0));
console.log(myTree.contains(12));
console.log(myTree.contains(11), 'should print true');

var traverseDepthFirst = [];
myTree.traverseDepthFirst(val=> {
    traverseDepthFirst.push(val.value);
});

console.log(traverseDepthFirst );

var traverseBreadthFirst = [];
myTree.traverseBreadthFirst(val => {
    traverseBreadthFirst.push(val);
});

console.log(traverseBreadthFirst);