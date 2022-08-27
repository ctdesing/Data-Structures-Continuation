import {PriorityNode} from "./PriorityNode";

export const Swap = (parent, child) => {
    let tempVal = parent.val
    let tempPriority = parent.priority
    parent.val = child.val
    parent.priority = child.priority
    child.val = tempVal
    child.priority = tempPriority
}

class PriorityQueue {
    next: PriorityNode | null
    last: PriorityNode | null
    size: number

    constructor() {
        this.next = null
        this.last = null
        this.size = 0
    }

    push(value, priority) {
        this.size++
        if (!this.next) {
            this.next = new PriorityNode(value, priority)
            this.last = this.next
            return
        }

        this.last.next = new PriorityNode(value, priority)
        this.last = this.last.next
        this.sort()
    }

    pop(): PriorityNode {
        if (!this.next) {
            return undefined
        }

        const result = this.next.val
        this.next = this.next.next
        if (!this.next) {
            this.last = this.next
        }
        this.size--

        return result
    }

    sort() {
        let child = this.next
        let parent = this.next
        child = child.next

        const bubbleSort = (swap = false) => {
            if (child === null) {
                if (swap) {
                    child = this.next
                    parent = this.next
                    child = child.next

                    return bubbleSort()
                }

                return
            }

            if (child.priority < parent.priority) {
                Swap(parent, child)
                swap = true
            }

            parent = parent.next
            child = child.next

            bubbleSort(swap)
        }

        bubbleSort()
    }

    forEach(callback: Function) {
        if (!this.next) {
            return
        }
        let print = this.next
        for (; print !== null; print = print.next) {
            callback(print.val)
        }
    }
}

export default PriorityQueue