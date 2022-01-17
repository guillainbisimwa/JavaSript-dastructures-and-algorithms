/*

QUEUE

Abstract data type
FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the order of their addition.

DO NOT use an array and the native push/shift method in your implementation. Use an object as the underlying data structure.


*** Operations:

myQueue.enqueue(value)
=> count of queue
add value to collection

myQueue.dequeue()
=> oldest element added collection
Remove item so that it is no longer in collection

myQueue.peek()
=> oldest element added collection
Similiar to dequeue, but do not remove element from collection

myQueue.count()
=> number of elements in queue


*** Additional Exercises:

Modify your queue to take a max capacity and return a string if you try to add an element when there's no more room:
myQueue.enqueue(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the queue:
myQueue.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of dequeues until you get to a certain value:
queue values - (first)2-5-7-3-6-9(last)
myQueue.until(7)
=> 3
What's the time complexity?




 */

class Queue {
    constructor(capacity) {
        // Init
        this._capacity = capacity || Infinity;
        this._storage = {};
        this._head = 0;
        this._tail = 0;
    }
    enqueue(value) {
        // Add value to the queue
        if(this._capacity > this.count()){
            this._storage[this._tail++] = value;
            return this.count();
        }
        return "Max capacity already reached. Remove element before adding a new one.";
    }
    // Time complexity: O(1)
    dequeue() {
        // Remove First added element form the collection
        var value = this._storage[this._head];
        delete this._storage[this._head];
        if(this._head < this._tail) this._head++;
        return value;
    }
    // Time complexity: O(1)
    peek() {
        return this._storage[this._head];
    }

    count() {
        // The differece between head and tail
        return this._tail - this._head;
    }
}

// Test
var myQueue = new Queue();
console.log(myQueue.count());
console.log(myQueue);
console.log(myQueue.enqueue('Jan'));
console.log(myQueue.enqueue('Feb'));
console.log(myQueue.peek());
console.log(myQueue.count());
console.log(myQueue);
console.log(myQueue.enqueue('Mar'));
console.log(myQueue.enqueue('Apr'));
console.log(myQueue.count());
console.log(myQueue.peek());
console.log(myQueue);
console.log(myQueue.dequeue());
console.log(myQueue);
console.log(myQueue.peek());


  
  // Time complexity:
  
  
  
  /*
  *** Exercises:
  
  1. Implement a queue using two stacks.
  
  2. Implement a double-ended queue, with the following methods: enqueueLeft, dequeueLeft, enqueueRight, dequeueRight.
  
  3. Given a tree, print out the value of each node in breadth-first order using a queue data structure.
  
  
   */
  