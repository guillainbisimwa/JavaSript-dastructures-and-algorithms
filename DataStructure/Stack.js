/*

STACK

Abstract data type
LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

DO NOT use an array and the native push/pop method in your implementation. That's too easy, yeah? =P
Use an object as the underlying data structure.


*** Operations:

myStack.push(value)
=> count of stack
add value to collection

myStack.pop()
=> most recent element added collection
Remove item so that it is no longer in collection

myStack.peek()
=> most recent element added collection
Similiar to pop, but do not remove element from collection

myStack.count()
=> number of elements in stack


*** Additional Exercises:

Modify your stack to take a max capacity and return a string if you try to add an element when there's no more room:
myStack.push(value)
=> "Max capacity already reached. Remove element before adding a new one."

Create a contains method to check if a value is in the stack:
myStack.contains('findme')
=> true/false
What's the time complexity?

Create an until method to get the number of pops until you get to a certain value:
stack values - (first)2-5-7-3-6-9(last)
myStack.until(7)
=> 4
What's the time complexity?



 */

class Stack {
    constructor(capacity) {
        // Constructor Init
        this._capacity = capacity || Infinity;
        this._count = 0;
        this._storage = {};
    }
    push(value) {
        // Push a value into a stack
        if(this._capacity > this._count){
            this._storage[this._count++] = value;
            return this._count;
        }
        return "Max capacity of Stack error";
    }
    // Time complexity:
    pop() {
        // Remove the Last added element
        if(this._count === 0){
            return "No element in the stack!";
        }

        var value = this._storage[--this._count];
        delete this._storage[this._count];

        if(this._count < 0){
            this._count = 0;
        }

        return value;
    }
    // Time complexity:
    peek() {
        // Time complexity is O(1)
        if(this._count === 0){
            return "No element in the stack!";
        }
        return this._storage[this._count - 1];
    }
    // Time complexity:
    count() {
        // Time complexity is O(1)
        return this._count;
    }

    storage(){
        return this._storage
    }
}


// Test
let myStack = new Stack(2);
console.log(myStack.count());
console.log(myStack.push('Goma'));
console.log(myStack.push('Kigali'));
console.log(myStack.push('Kinshasa'));
console.log(myStack.push("Kampala"));
console.log(myStack.count());
console.log(myStack.push("Nairobi"));
console.log(myStack.pop());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.pop());
console.log(myStack.count());
console.log(myStack.peek());
console.log(myStack.count());


  // Time complexity:
  
  
  /*
  *** Exercises:
  
  1. Implement a stack with a min method which returns the minimum element currently in the stack. This method should have O(1) time complexity. Make sure your implementation handles duplicates.
  
  2. Sort a stack so that its elements are in ascending order.
  
  3. Given a string, determine if the parenthesis in the string are balanced.
  Ex: balancedParens( 'sqrt(5*(3+8)/(4-2))' ) => true
  Ex: balancedParens( 'Math.min(5,(6-3))(' ) => false
  
  4. Towers of Hanoi - https://en.wikipedia.org/wiki/Tower_of_Hanoi
  You are given three towers (stacks) and N disks, each of different size. You can move the disks according to three constraints:
     1. only one disk can be moved at a time
     2. when moving a disk, you can only use pop (remove the top element) and push (add to the top of a stack)
     3. no disk can be placed on top of a disk that is smaller than it
  The disks begin on tower#1. Write a function that will move the disks from tower#1 to tower#3 in such a way that none of the constraints are violated.
   */


  // Solution of Exercise 1

  class MinStack {
    constructor(capacity) {
        // Constructor Init
        this._capacity = capacity || Infinity;
        this._count = 0;
        this._storage = {};
        this._min = new Stack();
    }
    push(value) {
        // Push a value into a stack
        if(this._capacity > this._count){
            if(this._min.peek() < value){
                this._min.push(this._min.peek());
            }
            else{
                this._min.push(value);
            }

            this._storage[this._count++] = value;
            return this._count;
        }
        return "Max capacity of Stack error";
    }
    // Time complexity:
    pop() {
        // Remove the Last added element
        if(this._count === 0){
            return "No element in the stack!";
        }

        var value = this._storage[--this._count];
        delete this._storage[this._count];

        if(this._count < 0){
            this._count = 0;
        }

        return value;
    }
    // Time complexity:
    peek() {
        // Time complexity is O(1)
        if(this._count === 0){
            return "No element in the stack!";
        }
        return this._storage[this._count - 1];
    }
    // Time complexity:
    count() {
        // Time complexity is O(1)
        return this._count;
    }

    min() {
        return this._min.peek();
    }
}

// Test 
var myMinStack = new MinStack();
console.log(myMinStack.peek());
console.log(myMinStack.pop());
console.log(myMinStack.min());
console.log(myMinStack.push(5));
console.log(myMinStack.min());
console.log(myMinStack.push(3));
console.log(myMinStack.min());
console.log(myMinStack.push(4));
console.log(myMinStack.min());

// Solution of Exercise 3
class BalancedParens {
    constructor(){
        this._balanced = new Stack();
    }

    // O(n)
    feed(value){
        this._balanced = new Stack();

        value.split('').forEach(element => {
      
            if(element == '('){
                this._balanced.push(')') ;
            }
            else if(element == '['){
                this._balanced.push(']') ;
            }
            else if((this._balanced.count() != 0) && (this._balanced.peek() == element) ){
                this._balanced.pop();
            }
        });
        console.log(this._balanced);

        if(this._balanced.count() == 0){
            return true;
        }
        return false;
        
    }
}

var MybalancedParens = new BalancedParens();
console.log(MybalancedParens.feed('Math.min(5,(6-3))('));
console.log(MybalancedParens.feed('sqrt(5*(3+8)/(4-2))'));
console.log(MybalancedParens.feed('(hello)[world]'));
console.log(MybalancedParens.feed('([)'));
console.log(MybalancedParens.feed('[({}{}{})([])]'));
