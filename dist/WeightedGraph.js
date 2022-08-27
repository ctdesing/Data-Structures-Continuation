"use strict";
// Maximum Pest
// 8092740629
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
var Queue_1 = require("./Queue");
var PriorityQueue_1 = require("./PriorityQueue");
var Edge = /** @class */ (function () {
    function Edge(node, weight) {
        this.node = node;
        this.weight = weight;
    }
    return Edge;
}());
var WeightedGraph = /** @class */ (function () {
    function WeightedGraph() {
        var vertexes = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vertexes[_i] = arguments[_i];
        }
        var _this = this;
        vertexes.forEach(function (vertex) { return _this.addVertex(vertex); });
    }
    WeightedGraph.prototype.addVertex = function (vertex) {
        if (this[vertex] !== undefined) {
            return;
        }
        this[vertex] = [];
    };
    /**
     *
     * @param from vertex
     * @param to vertex
     * @param weight distance
     */
    WeightedGraph.prototype.addEdge = function (from, to, weight) {
        if (this[from] === undefined || this[to] === undefined) {
            return;
        }
        else if (this[from].map(function (e) { return e.node === to; }).includes(true)) {
            return;
        }
        this[from].push(new Edge(to, weight));
        this[to].push(new Edge(from, weight));
    };
    WeightedGraph.prototype.shortestPathFirst = function (from, to) {
        var _this = this;
        if (this[from] === undefined || this[to] === undefined) {
            return;
        }
        var nodes = [];
        var distance = 0;
        var visited = {};
        var otherPaths = new Queue_1.default();
        var paths = [];
        var spfRecursion = function (node) {
            if (_this[node] === undefined) {
                return;
            }
            else if (_this[node] === _this[to]) {
                nodes.push(node);
                return;
            }
            visited[node] = true;
            nodes.push(node);
            var weight = Infinity;
            var edge = null;
            _this[node].forEach(function (e) {
                if (e.weight < weight && visited[e.node] === undefined) {
                    weight = e.weight;
                    edge = e.node;
                }
            });
            if (edge !== null) {
                _this[node].forEach(function (e) {
                    if (e.node !== edge && visited[e.node] === undefined) {
                        otherPaths.push({
                            from: node,
                            node: e.node,
                            nodes: __spreadArray([], nodes, true),
                            distance: distance + e.weight,
                            visited: __assign(__assign({}, visited), { edge: edge })
                        });
                    }
                });
            }
            distance += weight;
            spfRecursion(edge);
        };
        spfRecursion(from);
        while (otherPaths.size !== 0) {
            var path = otherPaths.pop();
            if (nodes.includes(to)) {
                paths.push({ from: from, to: to, nodes: __spreadArray([], nodes, true), distance: distance });
            }
            distance = path.distance;
            nodes = path.nodes;
            visited = path.visited;
            spfRecursion(path.node);
        }
        if (nodes.includes(to)) {
            paths.push({ from: from, to: to, nodes: __spreadArray([], nodes, true), distance: distance });
        }
        var pathDistance = Infinity;
        var result = null;
        paths.forEach(function (path) {
            if (path.distance < pathDistance) {
                pathDistance = path.distance;
                result = path;
            }
        });
        return result;
    };
    WeightedGraph.prototype.Dijkstra = function (start, finish) {
        var nodes = new PriorityQueue_1.default();
        var distances = {};
        var previous = {};
        var path = []; //to return at end
        var smallest;
        //build up initial state
        this.forEach(function (vertex) {
            if (vertex === start) {
                distances[vertex] = 0;
                nodes.push(vertex, 0);
            }
            else {
                distances[vertex] = Infinity;
                nodes.push(vertex, Infinity);
            }
            previous[vertex] = null;
        });
        // as long as there is something to visit
        while (nodes.size) {
            smallest = nodes.pop();
            if (smallest === finish) {
                //WE ARE DONE
                //BUILD UP PATH TO RETURN AT END
                while (previous[smallest]) {
                    path.push(smallest);
                    smallest = previous[smallest];
                }
                break;
            }
            if (smallest || distances[smallest] !== Infinity) {
                for (var neighbor in this[smallest]) {
                    //find neighboring node
                    var nextNode = this[smallest][neighbor];
                    //calculate new distance to neighboring node
                    var candidate = distances[smallest] + nextNode.weight;
                    var nextNeighbor = nextNode.node;
                    if (candidate < distances[nextNeighbor]) {
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
    };
    WeightedGraph.prototype.forEach = function (callback) {
        for (var item in this) {
            if (typeof this[item] === "function") {
                continue;
            }
            callback(item);
        }
    };
    return WeightedGraph;
}());
exports.default = WeightedGraph;
