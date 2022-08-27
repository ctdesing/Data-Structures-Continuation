"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swap = void 0;
var PriorityNode_1 = require("./PriorityNode");
var Swap = function (parent, child) {
    var tempVal = parent.val;
    var tempPriority = parent.priority;
    parent.val = child.val;
    parent.priority = child.priority;
    child.val = tempVal;
    child.priority = tempPriority;
};
exports.Swap = Swap;
var PriorityQueue = /** @class */ (function () {
    function PriorityQueue() {
        this.next = null;
        this.last = null;
        this.size = 0;
    }
    PriorityQueue.prototype.push = function (value, priority) {
        this.size++;
        if (!this.next) {
            this.next = new PriorityNode_1.PriorityNode(value, priority);
            this.last = this.next;
            return;
        }
        this.last.next = new PriorityNode_1.PriorityNode(value, priority);
        this.last = this.last.next;
        this.sort();
    };
    PriorityQueue.prototype.pop = function () {
        if (!this.next) {
            return undefined;
        }
        var result = this.next.val;
        this.next = this.next.next;
        if (!this.next) {
            this.last = this.next;
        }
        this.size--;
        return result;
    };
    PriorityQueue.prototype.sort = function () {
        var _this = this;
        var child = this.next;
        var parent = this.next;
        child = child.next;
        var bubbleSort = function (swap) {
            if (swap === void 0) { swap = false; }
            if (child === null) {
                if (swap) {
                    child = _this.next;
                    parent = _this.next;
                    child = child.next;
                    return bubbleSort();
                }
                return;
            }
            if (child.priority < parent.priority) {
                (0, exports.Swap)(parent, child);
                swap = true;
            }
            parent = parent.next;
            child = child.next;
            bubbleSort(swap);
        };
        bubbleSort();
    };
    PriorityQueue.prototype.forEach = function (callback) {
        if (!this.next) {
            return;
        }
        var print = this.next;
        for (; print !== null; print = print.next) {
            callback(print.val);
        }
    };
    return PriorityQueue;
}());
exports.default = PriorityQueue;
