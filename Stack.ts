
class Stack {
    length: number

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
        if (!this.length) {
            return undefined
        }

        this.length--
        const result = this[this.length]
        delete this[this.length]

        return result
    }

    forEach(callback: Function) {
        for (let i = 0; i < this.length; i++) {
            callback(this[i])
        }
    }
}

export default Stack