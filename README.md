---
noteId: "312d0a705e7611ecb6ec538e380a61a1"
tags: []
---

# DATASTRUCTURE AND ALGORITHMS IN JAVASCRIPT

## Implement a Stack data structure

LIFO - Last in, first out
Collection of elements with push and pop operations.
Note that there is a natural order. Elements are removed in the reverse order of their addition.

## Implement a Queue data structure

FIFO - First in, first out
Collection of elements with enqueue and dequeue operations.
Note that there is a natural order. Elements are removed in the order of their addition.

## Implement a LINKED LIST data structure

Comprised of nodes that represent a sequence.
Each node is composed of data and a reference/link to the next node.

## Implement a TREE data structure

A tree has a root node.
The root node has 0 or more children.
Each child node has 0 or more children.
(each node in the tree can be seen as a subtree)

## Implement a BINARY SEARCH TREES data structure

A binary search tree is a tree with the additional constraints:

- Each node has only two child nodes (node.left and node.right)
- All the values in the left subtree of a node are less than or equal to the value of the node
- All the values in the right subtree of a node are greater than the value of the node

## Implement a Graph data structure

Stores nodes (represented by any primitive value) and the neighbors for each node. This implementation represents a graph as an [adjacency list](https://en.wikipedia.org/wiki/Adjacency_list).

## Implement a HASH TABLE data structure

Collection of `key-value` pairs.
Map keys to values for efficient lookup.
Use an array as the underlying data structure.
Hash table should have a size - this will be used by the hashing function to determine what index to map the key to.
A hashing function is used to map the key to an integer, which is the index that the value is to be stored at.
Since our hashing function might map multiple keys to the same integer, we have to deal with collisions by creating buckets at each index of the storage array. These buckets can be arrays or linked lists.

## Recursion

The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function. Using recursive algorithm, certain problems can be solved quite easily.

## Elementary Sorting

### Bubble SORT

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

### Selection SORT

Iterate over array and grow a sorted array behind current element.

For each position, find the smallest element in unsorted subarray starting at that position, and swap elements so that smallest element is at the beginning of unsorted subarray.

## Author

👤 **Guillain Bisimwa**

- Github : [@guillainbisimwa](https://github.com/guillainbisimwa)
- Twitter : [@gullain_bisimwa](https://twitter.com/gullain_bisimwa)
- Linkedin : [guillain-bisimwa](https://www.linkedin.com/in/guillain-bisimwa-8a8b7a7b/)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/guillainbisimwa/JavaSript-dastructures-and-algorithms/issues).

## Acknowledgments

- [Frontendmasters](https://frontendmasters.com/courses/data-structures-algorithms/)
- [Quokka](https://quokkajs.com/?referrer=qsp) for highlight all logged values in output pane and vscode IDE

## Show your support

Give a ⭐️ if you like this project!

## 📝 License

This project is [MIT](lic.url) licensed.
