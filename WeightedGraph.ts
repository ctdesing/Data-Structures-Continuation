// Maximum Pest
// 8092740629

import Queue from "./Queue";
import PriorityQueue from "./PriorityQueue";

type ShortPathResult = {
    from: any,
    to: any,
    nodes: any[],
    distance: number
}

class Edge {
    node :any
    weight: number

    constructor(node, weight) {
        this.node = node
        this.weight = weight
    }
}

class WeightedGraph {
    constructor(...vertexes) {
        vertexes.forEach(vertex => this.addVertex(vertex))
    }

    addVertex(vertex) {
        if (this[vertex] !== undefined) {
            return
        }

        this[vertex] = []
    }

    /**
     *
     * @param from vertex
     * @param to vertex
     * @param weight distance
     */
    addEdge(from, to, weight: number) {
        if (this[from] === undefined || this[to] === undefined) {
            return
        } else if (this[from].map(e => e.node === to).includes(true)) {
            return
        }

        this[from].push(new Edge(to, weight))
        this[to].push(new Edge(from, weight))
    }

    shortestPathFirst(from, to) {
        if (this[from] === undefined || this[to] === undefined) {
            return
        }

        let nodes = []
        let distance = 0
        let visited = {}
        let otherPaths = new Queue()
        let paths = []

        let spfRecursion = (node): ShortPathResult | null => {
            if (this[node] === undefined) {
                return
            } else if (this[node] === this[to]) {
                nodes.push(node)
                return
            }

            visited[node] = true
            nodes.push(node)


            let weight = Infinity
            let edge = null


            this[node].forEach(e => {
                if (e.weight < weight && visited[e.node] === undefined) {
                    weight = e.weight
                    edge = e.node
                }
            })

            if (edge !== null) {
               this[node].forEach(e => {
                   if (e.node !== edge && visited[e.node] === undefined) {
                       otherPaths.push({
                           from: node,
                           node: e.node,
                           nodes: [...nodes],
                           distance: distance + e.weight,
                           visited: {...visited, edge}
                       })
                   }
               })
            }

            distance += weight
            spfRecursion(edge)
        }

        spfRecursion(from)

        while(otherPaths.size !== 0) {
            const path = otherPaths.pop()
            if (nodes.includes(to)) {
                paths.push({from, to, nodes: [...nodes], distance})
            }
            distance = path.distance
            nodes = path.nodes
            visited = path.visited
            spfRecursion(path.node)
        }

        if (nodes.includes(to)){
            paths.push({from, to, nodes: [...nodes], distance})
        }

        let pathDistance = Infinity
        let result = null
        paths.forEach(path => {
            if (path.distance < pathDistance) {
                pathDistance = path.distance
                result = path
            }
        })

        return result
    }

    Dijkstra(start, finish){
        const nodes = new PriorityQueue();
        const distances = {};
        const previous = {};
        let path = [] //to return at end
        let smallest;
        //build up initial state
        this.forEach(vertex => {
            if(vertex === start){
                distances[vertex] = 0;
                nodes.push(vertex, 0);
            } else {
                distances[vertex] = Infinity;
                nodes.push(vertex, Infinity);
            }
            previous[vertex] = null;
        })

        // as long as there is something to visit
        while(nodes.size){
            smallest = nodes.pop();
            if(smallest === finish){
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while(previous[smallest]){
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if(smallest || distances[smallest] !== Infinity){
                for(let neighbor in this[smallest]){
                    //find neighboring node
                    let nextNode: Edge = this[smallest][neighbor];
                    //calculate new distance to neighboring node
                    let candidate = distances[smallest] + nextNode.weight;
                    let nextNeighbor = nextNode.node;
                    if(candidate < distances[nextNeighbor]){
                        //updating new smallest distance to neighbor
                        distances[nextNeighbor] = candidate;
                        //updating previous - How we got to neighbor
                        previous[nextNeighbor] = smallest;
                        //enqueue in priority queue with new priority
                        nodes.push(nextNeighbor, candidate);
                    }
                }
            }
        }
        return path.concat(smallest).reverse();
    }

    forEach(callback: (item: any)=> void) {
        for(let item in this) {
            if (typeof this[item] === "function") {
                continue
            }

            callback(item)
        }
    }
}

export default WeightedGraph