"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Swap_1 = require("./Swap");
var PriorityNode_1 = require("./PriorityNode");
var PriorityBinaryHeap = /** @class */ (function () {
    function PriorityBinaryHeap() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var _this = this;
        this.values = [];
        values.forEach(function (val) { return _this.insert(val, 0); });
    }
    PriorityBinaryHeap.prototype.insert = function (val, priority) {
        var node = new PriorityNode_1.PriorityNode(val, priority);
        this.values.push(node);
        for (var i = this.values.length - 1; Math.floor((i - 2) / 2) > -1; i = Math.floor((i - 1) / 2)) {
            var parent_1 = Math.floor((i - 2) / 2);
            if (this.values[i].priority < this.values[parent_1].priority) {
                (0, Swap_1.Swap)(this.values, i, parent_1);
            }
        }
        return this;
    };
    PriorityBinaryHeap.prototype.remove = function () {
        if (this.values.length < 2) {
            return this.values.pop().val;
        }
        var result = this.values.splice(0, 1, this.values.pop())[0];
        for (var i = 0; Math.floor(i * 2 + 1) < this.values.length; i = Math.floor(i * 2 + 1)) {
            var child = Math.floor(i * 2 + 1);
            if (child + 1 < this.values.length && this.values[child + 1].priority < this.values[child].priority) {
                child++;
            }
            if (this.values[child].priority < this.values[i].priority) {
                (0, Swap_1.Swap)(this.values, child, i);
            }
        }
        return result.val;
    };
    return PriorityBinaryHeap;
}());
// @ts-ignore
exports.default = PriorityBinaryHeap;
