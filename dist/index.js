// import Stack from "./Stack.ts";
// import Queue from "./Queue";
// import BinarySearchTree from "./BinarySearchTree";
// import BinaryHeap from "./BinaryHeap";
// import PriorityBinaryHeap from "./PriorityBinaryHeap";
// import HashTable from "./HashTable";
// import Graph from "./Graph";
// import weightedGraph from "./WeightedGraph";
// import testShortestPath from "./testShortestPath";
// import test from "./testShortestPath";
// import PriorityQueue from "./PriorityQueue";
function printAlgoPerf(algo, label) {
    var result = algo();
    var averagePerf = 0;
    for (var i = 0; i < 10; i++) {
        var perf = performance.now();
        algo();
        var endPerf = performance.now();
        averagePerf += endPerf - perf;
    }
    console.log(result);
    console.log("".concat(label, ": ").concat(averagePerf / 10));
    return;
}
var fib = function (n) {
    if (n < 3) {
        return 1;
    }
    else
        return fib(n - 1) + fib(n - 2);
};
var StoredFib = /** @class */ (function () {
    function StoredFib() {
        this.storage = {};
    }
    StoredFib.prototype.of = function (n) {
        if (n < 3) {
            return 1;
        }
        if (this.storage[n] !== undefined) {
            return this.storage[n];
        }
        this.storage[n] = this.of(n - 1) + this.of(n - 2);
        return this.storage[n];
    };
    StoredFib.prototype.reverse = function (n, i) {
        if (i === void 0) { i = 1; }
        if (i === n + 1) {
            return this.storage[n];
        }
        if (i < 3) {
            this.storage[i] = 1;
            return this.reverse(n, i + 1);
        }
        this.storage[i] = this.storage[i - 1] + this.storage[i - 2];
        return this.reverse(n, i + 1);
    };
    StoredFib.prototype.size = function () {
        return Object.keys(this.storage).length * 8;
    };
    StoredFib.prototype.clear = function () {
        this.storage = {};
    };
    return StoredFib;
}());
var forward = new StoredFib();
var reverse = new StoredFib();
printAlgoPerf(function () { return forward.of(200); }, "stored forward");
printAlgoPerf(function () { return reverse.reverse(200); }, "stored reverse");
