/*

LINKED LIST

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.


*** Operations:

** Part 1

myList.forEach(callbackFn)
invoke callback function with the value of each node

myList.print()
=> string with all values in list (ex: '0, 1, 2, 3')

myList.insertAfter(refNode, value)
=> new node
insert new node associated with value passed in after refNode

myList.removeAfter(refNode)
=> removed node
remove node after the refNode

myList.insertHead(value)
=> new head
insert new head node at the beginning of the list with the value passed in

myList.removeHead()
=> removed head node
remove the head node of the linked list

myList.findNode(value)
=> first node that has a value matching what was passed in


* Optimization:
Say we have a linked list that has 100 items and we want to add an item to the very end. How would you do that with your current implementation? How can you modify the data structure to add an item to the end in constant time?

myList.appendToTail(value)
=> new tail node
add a new tail node at the end of the list with the associated value passed in

myList.removeTail()
=> removed tail node
remove the tail node from the list


** Part 2

Now let's think about creating insertBefore and removeBefore methods for the nodes in our list. Can you think of an efficient way to do so?

Think about time complexity. What would it be for your current implementation of a linked list?

How can we modify our data structures (Node and Linked List classes) so that we can make these O(1) operations?

Once you've come up with a plan, implement the following methods.

myList.insertBefore(refNode, value)
=> new node inserted
insert new node with associated value before refNode

myList.removeBefore(refNode)
=> removed node
remove node before the refNode passed in


*** Additional Exercises:

Implement a circularly linked list:
https://en.wikipedia.org/wiki/Linked_list#Circularly_linked_list

Reimplement stack and queue data structures using linked lists.


 */


// PART 1

class Node {
    constructor(value) {
        this.next = null;
        this.value = value;
    }
}

  
class LinkedList {
    constructor(headValue) {
        if (headValue === undefined)
            console.log('Must provide value for first node');
        this.head = new Node(headValue);
        this.tail = this.head;
    }
    forEach(callback) {
        // invoke callback function with the value of each node
        var node = this.head;
        while(node){
            callback(node.value);
            node = node.next;
        }
    }
    // Time complexity: O(n)
    print() {
        // string with all values in list (ex: '0, 1, 2, 3')
        var res = [];
        this.forEach((value)=> {
            res.push(value);
        });
        return res.join(', ');
    }

    // Time complexity: O(1)
    insert(value) {
        // Insert new node at the end
        const newNode = new Node(value);
        const oldNode = this.tail;
        this.tail = newNode;
        oldNode.next = newNode;
        return newNode.value;
    }

    // Time complexity: O(1)
    insertAfter(node, value) {
        // insert new node associated with value passed in after refNode
        const newNode = new Node(value);
        const oldNext = node.next;
        node.next = newNode;
        newNode.next = oldNext;

        if(this.tail == node ) this.tail = newNode;
        return node.value;
    }
    // Time complexity: O(1)
    removeAfter(node) {
        // remove node after the refNode
        if(!node.next) return 'Nothing to delete';
        const nodeToRemove = node.next;
        node.next = nodeToRemove.next;

        if(this.tail == node ) this.tail = node.next;

        return nodeToRemove.value;

    }
    // Time complexity: O(1)
    insertHead(value) {
        // insert new head node at the beginning of the list with the value passed in
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;

        return this.head;
    }
    // Time complexity:
    removeHead() {
        // implement me...
    }
    findNode(value) {
        // implement me...
    }
    // Time complexity:
    appendToTail(value) {
        // implement me...
    }
    // Time complexity:
    // PART 2:
    insertBefore(node, value) {
        // implement me...
    }
    // Time complexity:
    removeBefore(node) {
        // implement me...
    }
}

// Test

var myLinkedList = new LinkedList(1);
console.log(myLinkedList.removeAfter(myLinkedList.head));
console.log(myLinkedList.insertAfter(myLinkedList.head, 7));
console.log(myLinkedList.print());
myLinkedList.insert(2);
myLinkedList.insert(4);
myLinkedList.insert(3);
console.log(myLinkedList.print());
console.log(myLinkedList.insertAfter(myLinkedList.head, 9));
console.log(myLinkedList.print());
console.log(myLinkedList.insertAfter(myLinkedList.head.next, 8));
console.log(myLinkedList.print());
console.log(myLinkedList.removeAfter(myLinkedList.head));
console.log(myLinkedList.print());
myLinkedList.insert(5);
console.log(myLinkedList.print());
myLinkedList.insertHead(5);
console.log(myLinkedList.print());


  
  // Time complexity:
  
  
  
  /*
  *** Exercises:
  
  1. Implement a stack using a linked list.
  
  2. Implement a queue using a linked list.
  
  3. Write a method that remove duplicates from an unsorted linked list. What is the time complexity? Re-implement the method without using any additional storage structure (constant space complexity). What is the time complexity?
  
  4. Reverse a linked list. Do not use any additional storage structures.
  
  5. Find the kth to last element of a singly linked list.
  
  6. Detect if a linked list has a loop.
  
  7. Check if a linked list is a palindrome.
  
  8. Given two linked lists that represent numbers, return a linked list that represents the sum of those numbers:
    4 2 5        (4 -> 2 -> 5)
  + 7 3 1        (7 -> 3 -> 1)
  --------
  1 1 5 6   (1 -> 1 -> 5 -> 6)
  
   */
  