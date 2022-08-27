"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PriorityNode = void 0;
var PriorityNode = /** @class */ (function () {
    function PriorityNode(val, priority) {
        this.val = val;
        this.priority = priority;
        this.next = null;
    }
    return PriorityNode;
}());
exports.PriorityNode = PriorityNode;
