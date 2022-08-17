
class HashTable {
    hash(key): number {
        let result = 0
        let string = key.toString()
        for (let char of string) {
            result += char.charCodeAt(0)
        }

        return result
    }

    set(key, value): HashTable {
        const hash = this.hash(key)
        this[hash] = [key, value]
        return this
    }

    get(key) {
        const hash = this.hash(key)
        if (!this[hash]) {
            return undefined
        }

        return this[hash][1]
    }

    delete(key) {
        const hash = this.hash(key)
        if (!this[hash]) {
            return
        }
        delete this[hash]
    }

    keys() {
        const result = []
        for (let value in this) {
            if (!isNaN(parseInt(value))) {
                result.push(this[value][0])
            }
        }

        return result
    }

    values() {
        const result = []
        for (let value in this) {
            if (!isNaN(parseInt(value))) {
                result.push(this[value][1])
            }
        }

        return result
    }
}

export default HashTable