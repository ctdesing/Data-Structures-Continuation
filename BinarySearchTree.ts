
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