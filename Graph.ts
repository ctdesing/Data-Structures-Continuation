import Queue from "./Queue";

class Graph {
    constructor(...vertexList) {
        vertexList.forEach(vertex => this.addVertex(vertex))
    }

    addVertex(vertex: any) {
        this[vertex] = []
    }

    addEdge(vertex1, vertex2) {
        if (!this[vertex1] || !this[vertex2]) {
            return
        } else if (this[vertex1].includes(vertex2) || this[vertex2].includes(vertex1)) {
            return
        }

        this[vertex1].push(vertex2)
        this[vertex2].push(vertex1)
    }

    removeEdge(vertex1, vertex2) {
        if (!this[vertex1] || !this[vertex2]) {
            return
        }

        this[vertex1] = this[vertex1].filter(e => e !== vertex2)
        this[vertex2] = this[vertex2].filter(e => e !== vertex1)
    }

    removeVertex(vertex) {
        if (!this[vertex]) {
            return
        }

        this[vertex].forEach(edge => {
            this[edge] = this[edge].filter(e => e !== vertex)
        })
        delete this[vertex]
    }

    forEach(callback: (item: any)=> void) {
        for(let item in this) {
            if (typeof this[item] === "function") {
                continue
            }

            callback(item)
        }
    }

    vertexList(): Array<any> {
        const result = []

        for(let item in this) {
            if (typeof this[item] === "function") {
                continue
            }

            result.push(item)
        }

        return result
    }

    depthFirstTraversal(start) {
        let result = []
        let visited: {any?: boolean} = {}

        const dfsRecursion = (node) => {
            result.push(node)
            visited[node] = true

            this[node].forEach(edge => {
                if (!visited[edge]) {
                    dfsRecursion(edge)
                }
            })
        }

        if (this[start] === null) {
            return undefined
        }
        dfsRecursion(start)

        return result
    }

    breadthFirstTraversal(start) {
        let result = []
        let visited: {any?: boolean} = {}
        let next = new Queue()

        const dfsRecursion = (node) => {
            if (visited[node] === true) {
                if (next.size) {
                    dfsRecursion(next.pop())
                }
                return
            }

            result.push(node)
            visited[node] = true

            this[node].forEach(edge => {
                if (!visited[edge]) {
                    next.push(edge)
                }
            })

            if (next.size) {
                dfsRecursion(next.pop())
            }
        }

        if (this[start] === null) {
            return undefined
        }
        dfsRecursion(start)

        return result
    }
}

export default Graph