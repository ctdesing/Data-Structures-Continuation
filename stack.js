
class Stack {
    constructor(...values) {
        this.length = 0

        values.forEach(value => {
            this[this.length++] = value
        })
    }

    push(value) {
        this[this.length++] = value
    }

    pop() {
        const result = this[this.length-1]
        delete this[this.length-1]
        this.length--

        return result
    }
}

export default Stack