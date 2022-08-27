"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Queue_1 = require("./Queue");
var Graph = /** @class */ (function () {
    function Graph() {
        var vertexList = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            vertexList[_i] = arguments[_i];
        }
        var _this = this;
        vertexList.forEach(function (vertex) { return _this.addVertex(vertex); });
    }
    Graph.prototype.addVertex = function (vertex) {
        this[vertex] = [];
    };
    Graph.prototype.addEdge = function (vertex1, vertex2) {
        if (!this[vertex1] || !this[vertex2]) {
            return;
        }
        else if (this[vertex1].includes(vertex2) || this[vertex2].includes(vertex1)) {
            return;
        }
        this[vertex1].push(vertex2);
        this[vertex2].push(vertex1);
    };
    Graph.prototype.removeEdge = function (vertex1, vertex2) {
        if (!this[vertex1] || !this[vertex2]) {
            return;
        }
        this[vertex1] = this[vertex1].filter(function (e) { return e !== vertex2; });
        this[vertex2] = this[vertex2].filter(function (e) { return e !== vertex1; });
    };
    Graph.prototype.removeVertex = function (vertex) {
        var _this = this;
        if (!this[vertex]) {
            return;
        }
        this[vertex].forEach(function (edge) {
            _this[edge] = _this[edge].filter(function (e) { return e !== vertex; });
        });
        delete this[vertex];
    };
    Graph.prototype.forEach = function (callback) {
        for (var item in this) {
            if (typeof this[item] === "function") {
                continue;
            }
            callback(item);
        }
    };
    Graph.prototype.vertexList = function () {
        var result = [];
        for (var item in this) {
            if (typeof this[item] === "function") {
                continue;
            }
            result.push(item);
        }
        return result;
    };
    Graph.prototype.depthFirstTraversal = function (start) {
        var _this = this;
        var result = [];
        var visited = {};
        var dfsRecursion = function (node) {
            result.push(node);
            visited[node] = true;
            _this[node].forEach(function (edge) {
                if (!visited[edge]) {
                    dfsRecursion(edge);
                }
            });
        };
        if (this[start] === null) {
            return undefined;
        }
        dfsRecursion(start);
        return result;
    };
    Graph.prototype.breadthFirstTraversal = function (start) {
        var _this = this;
        var result = [];
        var visited = {};
        var next = new Queue_1.default();
        var dfsRecursion = function (node) {
            if (visited[node] === true) {
                if (next.size) {
                    dfsRecursion(next.pop());
                }
                return;
            }
            result.push(node);
            visited[node] = true;
            _this[node].forEach(function (edge) {
                if (!visited[edge]) {
                    next.push(edge);
                }
            });
            if (next.size) {
                dfsRecursion(next.pop());
            }
        };
        if (this[start] === null) {
            return undefined;
        }
        dfsRecursion(start);
        return result;
    };
    return Graph;
}());
exports.default = Graph;
