
class Node {
    constructor(value) {
        this.val = value
        this.next = null
    }
}

class Queue {
    constructor(...values) {
        this.next = null
        this.last = null
        this.size = 0

        values.forEach(value => {
            if (!this.next) {
                this.next = new Node(value)
                this.last = this.next
            } else {
                this.last.next = new Node(value)
                this.last = this.last.next
            }

            this.size++
        })
    }

    push(value) {
        this.size++
        if (!this.next) {
            this.next = new Node(value)
            this.last = this.next
            return
        }

        this.last.next = new Node(value)
        this.last = this.last.next
    }

    pop() {
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

    forEach(callback) {
        if (!this.next) {
            return
        }
        let print = this.next
        for (; print !== null; print = print.next) {
            callback(print.val)
        }
    }
}

export default Queue