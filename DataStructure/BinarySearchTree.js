/*
BINARY SEARCH TREES

Abstract data type
A binary search tree is a tree with the additional constraints:
- each node has only two child nodes (node.left and node.right)
- all the values in the left subtree of a node are less than or equal to the value of the node
- all the values in the right subtree of a node are greater than the value of the node

*** Operations:

bsTree.insert(value)
=> bsTree (return for chaining purposes)
Insert value into correct position within tree

bsTree.contains(value)
=> true/false
Return true if value is in tree, false if not

bsTree.traverseDepthFirst_inOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
Note: In-Order traversal is most common type for binary trees. For binary search tree, this visits the nodes in ascending order (hence the name).

bsTree.traverseDepthFirst_preOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)

bsTree.traverseDepthFirst_postOrder(callback)
=> undefined
Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)

bsTree.isValid()
=> returns true if BST is a valid BST otherwise returns false. This method is useful for checking your other methods.

bsTree.removeNode(value)
=> node
Remove node from tree.

bsTree.checkIfFull()
=> true/false
A binary tree is full if every node has either zero or two children (no nodes have only one child)

bsTree.checkIfBalanced()
=> true/false
For this exercise, let's say that a tree is balanced if the minimum height and the maximum height differ by no more than 1. The height for a branch is the number of levels below the root.


*** Additional Exercises:
A binary search tree was created by iterating over an array and inserting each element into the tree. Given a binary search tree with no duplicates, how many different arrays would result in the creation of this tree.

*/

class BinarySearchTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    insert(value){
        // Insert value into correct position within tree
        if(this.value <= value){
            // right
            if(this.right){
                this.right.insert(value);
            } else this.right = new BinarySearchTree(value);
        }
        else {
            // left
            if(this.left){
                this.left.insert(value);
            } else this.left = new BinarySearchTree(value);
        }
        return this;
    }
    // Time complexity: O(log(n));
    contains(value) {
        // Return true if value is in tree, false if not
        if (value == this.value) return true;

        if (this.value < value) {
            // Right
            return !!this.right && this.right.contains(value);
        }
        else if (this.value >= value) {
            return !!this.left && this.left.contains(value);
        }
        return false;
    }
    // Time complexity: O(n)
    traverseDepthFirst_inOrder(fn) {
        // Invoke the callback for every node in a depth-first in-order (visit left branch, then current node, than right branch)
        if (!this.left && !this.right) return fn(this);
        if(this.left) this.left.traverseDepthFirst_inOrder(fn);
        fn(this);
        if(this.right) this.right.traverseDepthFirst_inOrder(fn);
    }
    // Time complexity: O(n)
    traverseDepthFirst_preOrder(fn) {
        // Invoke the callback for every node in a depth-first pre-order (visits current node before its child nodes)
        fn(this);
        if(this.left) this.left.traverseDepthFirst_preOrder(fn);
        if(this.right) this.right.traverseDepthFirst_preOrder(fn); 
    }
    // Time complexity: O(n)
    traverseDepthFirst_postOrder(fn) {
        // Invoke the callback for every node in a depth-first post-order (visit the current node after its child nodes)
        if(this.left) this.left.traverseDepthFirst_postOrder(fn);
        if(this.right) this.right.traverseDepthFirst_postOrder(fn);
        fn(this);
    }

    traverseBreadthFirst(fn){
        var queue = [this];
        while(queue.length){
            var node = queue.shift();
            fn(node);
            node.left && queue.push(node.left);
            node.right && queue.push(node.right);
        }
    }
    // Time complexity: O(n)
    checkIfFull() {
        // A binary tree is full if every node has either zero or two children (no nodes have only one child)
        var result = true;
        this.traverseBreadthFirst((node)=> {
            if(!node.left && node.right) result = false;
            else if(node.left && !node.right) result= false;
        });
        return result;
    }
    // Time complexity:
    checkIfBalanced() {
        // implement me...
    }
}
  
  // Time complexity:
  
// Test
var bsTree = new BinarySearchTree(10);
bsTree.insert(5);
bsTree.insert(15);
bsTree.insert(8);
bsTree.insert(3);
bsTree.insert(7);
bsTree.insert(20);
bsTree.insert(17);
bsTree.insert(9);
bsTree.insert(14);

console.log(bsTree);
console.log(bsTree.contains(10));
console.log(bsTree.contains(5));
console.log(bsTree.contains(2));
console.log(bsTree.contains(11));

var traverseDepthFirst_preOrder = [];
bsTree.traverseDepthFirst_preOrder((val)=> {
    traverseDepthFirst_preOrder.push(val.value);
});
console.log(traverseDepthFirst_preOrder);

var traverseDepthFirst_inOrder  = [];
bsTree.traverseDepthFirst_inOrder ((val)=> {
    traverseDepthFirst_inOrder .push(val.value);
});
console.log(traverseDepthFirst_inOrder);

var traverseDepthFirst_postOrder  = [];
bsTree.traverseDepthFirst_postOrder ((val)=> {
    traverseDepthFirst_postOrder .push(val.value);
});
console.log(traverseDepthFirst_postOrder);

var traverseBreadthFirst = [];
bsTree.traverseBreadthFirst(val => {
    traverseBreadthFirst.push(val.value);
});
console.log(traverseBreadthFirst);

console.log(bsTree.checkIfFull());

bsTree.insert(21);
console.log(bsTree.checkIfFull());
