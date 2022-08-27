
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

function printAlgoPerf(algo: ()=> any, label: string) {
    let result = algo()
    let averagePerf = 0

    for (let i = 0; i < 10; i++) {
        let perf = performance.now()
        algo()
        let endPerf = performance.now()
        averagePerf += endPerf - perf
    }

    console.log(result)
    console.log(`${label}: ${averagePerf / 10}`)
    return
}

const fib = (n: number): number => {
    if (n < 3) {
        return 1
    }

    else return fib(n-1) + fib(n-2)
}

class StoredFib {
    storage: { [key: number]: number }

    constructor() {
        this.storage = {}
    }

    of(n: number): number {
        if (n < 3) {
            return 1
        }

        if (this.storage[n] !== undefined) {
            return this.storage[n]
        }

        this.storage[n] = this.of(n-1) + this.of(n-2)

        return this.storage[n]
    }

    reverse(n:number, i = 1) { // tabulation: slower
        if (i === n + 1) {
            return this.storage[n]
        }

        if (i < 3) {
            this.storage[i] = 1
            return this.reverse(n, i+1)
        }

        this.storage[i] = this.storage[i-1] + this.storage[i-2]

        return this.reverse(n, i+1)
    }

    size(): number {
        return Object.keys(this.storage).length * 8
    }

    clear() {
        this.storage = {}
    }
}

const forward = new StoredFib()
const reverse = new StoredFib()

printAlgoPerf(
    () => forward.of(200),
    "stored forward"
)

printAlgoPerf(
    () => reverse.reverse(200),
    "stored reverse"
)