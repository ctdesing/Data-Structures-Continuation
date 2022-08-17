
// import Stack from "./Stack.ts";
// import Queue from "./Queue";
import BinarySearchTree from "./BinarySearchTree";

const tree = new BinarySearchTree(10, 15, 2)
tree.push(13)
tree.push(3)
tree.push(4)

console.log(tree.includes(15))