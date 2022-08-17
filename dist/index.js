"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import Stack from "./Stack.ts";
// import Queue from "./Queue";
// import BinarySearchTree from "./BinarySearchTree";
// import BinaryHeap from "./BinaryHeap";
var PriorityQueue_1 = require("./PriorityQueue");
var pid = 1;
var Process = /** @class */ (function () {
    function Process(name) {
        this.pid = pid++;
        this.user = 'root';
        this.cpu = 0;
        this.mem = 0;
        this.command = name;
    }
    return Process;
}());
var priorityQueue = new PriorityQueue_1.default(new Process("/lib/systemd/systemd"));
priorityQueue.insert(new Process("firefox"), 25);
priorityQueue.insert(new Process("Xorg"), 0);
priorityQueue.insert(new Process("top"), 0);
priorityQueue.insert(new Process("gnome-keyring"), 50);
priorityQueue.insert(new Process("migration"), 50);
priorityQueue.remove();
priorityQueue.remove();
console.log(priorityQueue);
