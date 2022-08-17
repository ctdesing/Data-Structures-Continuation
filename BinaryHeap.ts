
// MaxBinaryHeap
import { swap } from "./swap";

class BinaryHeap {
    values: Array<any>

    constructor(...values) {
        this.values = []

        values.forEach(val => this.insert(val))
    }

    insert(val): BinaryHeap {
        this.values.push(val)

        for (let i = this.values.length-1; Math.floor((i-2)/2) > -1; i = Math.floor((i-1)/2)) {
            const parent = Math.floor((i-2)/2)
            if (this.values[i] > this.values[parent]) {
                swap(this.values, i, parent)
            }
        }
        return this
    }

    remove(): any {
        if (this.values.length < 2) {
            return this.values.pop()
        }

        const result = this.values.splice(0, 1, this.values.pop())[0]
        for (let i = 0; Math.floor(i*2+1) < this.values.length; i = Math.floor(i*2+1)) {
            let child = Math.floor(i*2+1)
            if (child+1 < this.values.length && this.values[child+1] > this.values[child]) {
                child++
            }

            if (this.values[child] > this.values[i]) {
                swap(this.values, child, i)
            }
        }
        return result
    }
}

export default BinaryHeap