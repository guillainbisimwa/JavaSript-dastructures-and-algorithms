/*

HASH TABLE

Collection of key-value pairs.
Map keys to values for efficient lookup.
Use an array as the underlying data structure.
Hash table should have a size - this will be used by the hashing function to determine what index to map the key to.
A hashing function is used to map the key to an integer, which is the index that the value is to be stored at.
Since our hashing function might map multiple keys to the same integer, we have to deal with collisions by creating buckets at each index of the storage array. These buckets can be arrays or linked lists.


*** Note:

ES6 includes a Map data structure. It differs from the JavaScript object because the keys can be any value (not just strings like for objects), there is a size property, and there is a guaranteed order (the insertion order).

Hash tables are also referred to as hash mapse or dictionaries.


*** Operations:

myMap.set(key, value)
=> myMap object
Store the key-value pair in the storage array.
If the key already exists, replace stored value with new value.
Use the hashing function to map the key to an integer and store the value at the corresponding index.
Account for the possibility of collisions.

myMap.get(key)
=> value associated with key, or undefined if none

myMap.has(key)
=> true/false depending on if a value has been associated with the key

myMap.delete(key)
=> true if a value was associated with the key
=> false if a value was never associated with the key
Remove any value associated to the key

myMap.count()
=> integer number of key/value pairs in hash table

myMap.forEach(callbackFn)
=> no returned value
Invokes callback function once for each key-value pair in the hash table


*** Additional Exercises:

Resize the hash table:
- if the count becomes greater than 75% of the table size, double the table size and redistribute the key/value pairs
- if the count becomes less than 25% of the table size, cut the table size in half and redistribute the key/value pairs





*/

// Simple hashing function to use in your implementation
const simpleHash = (str, tableSize) => {
    var hash = 0;
    for (var i=0; i<str.length; i++) {
      hash += str.charCodeAt(i) * (i+1);
    }
    return hash % tableSize;
  }
  // source: http://pmav.eu/stuff/javascript-hashing-functions/source.html
  
  class HashTable {
  constructor(tableSize) {
    // Init
    this._size = tableSize;
    this._storage = [];
    this._count = 0;
  }
  // This is a helper method that you may want to implement to help keep your code DRY
  // You can implement the hash table methods without it.
  // I recommend skipping it and coming back if you find that it will be useful
  find(key) {
    var hash = simpleHash(key, this._size);
    this._storage[hash] = this._storage[hash] || [];
    var bucket = this._storage[hash];

    var match;
    var matchIndex;

    bucket.forEach((item, index)=>{
      if (item.hasOwnProperty(key)) {
        match = item;
        matchIndex = index;
      }
    });

    return {
      match: match,
      bucket: bucket,
      matchIndex: matchIndex
    };
  }

  /**
   * 
   * @param {number} key 
   * @param {*} value 
   * Store the key-value pair in the storage array.
   * If the key already exists, replace stored value with new value.
   * Use the hashing function to map the key to an integer and store the value at the corresponding index.
   * Account for the possibility of collisions.
   * 
   */
  set(key, value) {
    // Store the key-value pair in the storage array.
    var match = this.find(key).match;
    var bucket = this.find(key).bucket;

    //if macth exists, update key
    if (match) {
      match[key] = value;
    } 
    else {
      var newItem = {};
      newItem[key] = value;
      bucket.push(newItem);
      this._count++;
    }

    return this;
  }
  // Time complexity: O(1)
  get(key) {
    // value associated with key, or undefined if none
    var match = this.find(key).match;
    return match && match[key];
  }
  // Time complexity: O(1)
  has(key) {
    // Return true/false depending on if a value has been associated with the key
    return !!this.find(key).match
  }
  // Time complexity:
  delete(key) {
    // Remove any value associated to the key
    var match = this.find(key).match;
    if(match){
      var bucket = this.find(key).bucket;
      var matchIndex = this.find(key).matchIndex;

      bucket.splice(matchIndex, 1);
      this._count--;
    }
    return !! match;
  }
  // Time complexity:
  count() {
    // implement me...
  }
  // Time complexity:
  forEach(callback) {
    // implement me...
  }
}
  
  
  // Time complexity:
  
  
  
  /*
  *** Exercises:
  
  1. Implement a hash table with a binary search tree.
  
  2. Given two arrays with values, return the values that are present in both. Do this in linear time.
  
  3. Implement a hash table using linked lists for collision-handling. Why might this be preferable to using arrays.
  
  */
  
  // Test 

  var myMap = new HashTable(10);
  console.log(myMap);
  console.log(myMap._storage);
  console.log( myMap.set('a', "Guy"));
  console.log( myMap.set('b', "Guystave"));
  console.log( myMap.set('c', "Eva"));
  console.log(myMap._storage);
  console.log(myMap.get('a'));
  console.log(myMap.get(2));
  console.log(myMap.get('c'));
  console.log(myMap.has('c'));
  console.log(myMap.has('e'));
  console.log(myMap.has('a'));
  console.log(myMap._storage);
  console.log(myMap.delete('a'));
  console.log(myMap._storage);
  
