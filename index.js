
// import Stack from "./stack.js";
import Queue from "./Queue.js";

const queue = new Queue(1,2,3)

queue.push('Hello World!')

queue.forEach(value => console.log(value))

console.log(queue)