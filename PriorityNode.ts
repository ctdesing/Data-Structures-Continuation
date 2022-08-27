export class PriorityNode {
    val: any
    priority: number
    next: PriorityNode | null

    constructor(val, priority) {
        this.val = val
        this.priority = priority
        this.next = null
    }
}