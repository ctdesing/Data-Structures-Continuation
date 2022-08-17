import Queue from "./Queue";

class Node {
    value: any
    left: Node | null
    right: Node | null

    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}

class BinarySearchTree {
    root: Node | null

    constructor(...values) {
        this.root = null

        values.forEach(val => {
            if (!this.root) {
                this.root = new Node(val)
            } else {
                this.push(val)
            }
        })
    }

    push(val) {
        if (!this.root) {
            this.root = new Node(val)
            return
        }

        let traverse = this.root
        while(true) {
            if (val < traverse.value) {
                if (traverse.left !== null) {
                    traverse = traverse.left
                } else {
                    traverse.left = new Node(val)
                    break
                }
            } else if (val > traverse.value) {
                if (traverse.right !== null) {
                    traverse = traverse.right
                } else {
                    traverse.right = new Node(val)
                    break
                }
            } else {
                return this
            }
        }
        return this
    }

    includes(val) {
        if (!this.root) {
            return false
        }
        let traverse = this.root
        while(true) {
            if (val < traverse.value) {
                if (traverse.left !== null) {
                    traverse = traverse.left
                } else {
                    return false
                }
            } else if (val > traverse.value) {
                if (traverse.right !== null) {
                    traverse = traverse.right
                } else {
                    return false
                }
            } else {
                return true
            }
        }
    }

    flatten() {
        return this.flattenDFRInOrder()
    }

    flattenBreadthFirst() {
        let result = []
        let queue = new Queue()
        queue.push(this.root)

        while(queue.size) {
            let next = queue.pop()
            result.push(next.value)
            if (next.left !== null) {
                queue.push(next.left)
            }
            if (next.right !== null) {
                queue.push(next.right)
            }
        }
        return result
    }

    /* 0.1ms faster */
    flattenDepthFirstRecursively() {
        let result = []
        const recursion = (node) => {
            if (!node) {
                return
            }

            result.push(node.value)
            return recursion(node.left) + recursion(node.right)
        }

        recursion(this.root)
        return result
    }

    flattenDFRPostOrder() {
        let result = []
        const recursion = (node) => {
            if (!node) {
                return 1
            }

            let process = recursion(node.left) + recursion(node.right)
            result.push(node.value)
            return process
        }

        recursion(this.root)
        return result
    }

    flattenDFRInOrder() {
        let result = []
        const recursion = (node) => {
            if (!node) {
                return
            }

            recursion(node.left)
            result.push(node.value)
            recursion(node.right)
        }

        recursion(this.root)
        return result
    }

    // to be implemented
    // pop(val) {
    //     let traverse = this.root
    //     while(true) {
    //         if (val < traverse.value) {
    //             traverse = traverse.left
    //         } else if (val > traverse.value) {
    //             traverse = traverse.right
    //         } else {
    //
    //             break
    //         }
    //     }
    // }
}

export default BinarySearchTree


/*
push(val) {
        if (!this.root) {
            this.root = new Node(val)
            return
        }

        let traverse = this.root
        while(true) {
            if (val < traverse.value) {
                if (val < traverse.left?.value) {
                    traverse = traverse.left
                } else {
                    let chain = traverse.left
                    traverse.left = new Node(val)
                    traverse = traverse.left
                    traverse.left = chain
                    break
                }
            } else if (val > traverse.value) {
                if (val > traverse.right?.value) {
                    traverse = traverse.right
                } else {
                    let chain = traverse.right
                    traverse.right = new Node(val)
                    traverse = traverse.right
                    traverse.right = chain
                    break
                }
            } else {
                return
            }
        }
    }
*/