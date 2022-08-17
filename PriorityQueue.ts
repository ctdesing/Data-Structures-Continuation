import { swap } from "./swap";

class Node {
    val: any
    priority: number

    constructor(val, priority) {
        this.val = val
        this.priority = priority
    }
}

class PriorityQueue {
    values: Array<Node>

    constructor(...values) {
        this.values = []

        values.forEach(val => this.insert(val, 0))
    }

    insert(val, priority): PriorityQueue {
        const node = new Node(val, priority)
        this.values.push(node)

        for (let i = this.values.length-1; Math.floor((i-2)/2) > -1; i = Math.floor((i-1)/2)) {
            const parent = Math.floor((i-2)/2)
            if (this.values[i].priority < this.values[parent].priority) {
                swap(this.values, i, parent)
            }
        }
        return this
    }

    remove(): any {
        if (this.values.length < 2) {
            return this.values.pop().val
        }

        const result = this.values.splice(0, 1, this.values.pop())[0]
        for (let i = 0; Math.floor(i*2+1) < this.values.length; i = Math.floor(i*2+1)) {
            let child = Math.floor(i*2+1)
            if (child+1 < this.values.length && this.values[child+1].priority < this.values[child].priority) {
                child++
            }

            if (this.values[child].priority < this.values[i].priority) {
                swap(this.values, child, i)
            }
        }
        return result.val
    }
}

export default PriorityQueue