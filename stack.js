
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
        this.length--
        const result = this[this.length]
        delete this[this.length]

        return result
    }

    forEach(callback) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i])
        }
    }
}

export default Stack