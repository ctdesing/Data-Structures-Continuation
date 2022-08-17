"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// MaxBinaryHeap
var swap_1 = require("./swap");
var BinaryHeap = /** @class */ (function () {
    function BinaryHeap() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var _this = this;
        this.values = [];
        values.forEach(function (val) { return _this.insert(val); });
    }
    BinaryHeap.prototype.insert = function (val) {
        this.values.push(val);
        for (var i = this.values.length - 1; Math.floor((i - 2) / 2) > -1; i = Math.floor((i - 1) / 2)) {
            var parent_1 = Math.floor((i - 2) / 2);
            if (this.values[i] > this.values[parent_1]) {
                (0, swap_1.swap)(this.values, i, parent_1);
            }
        }
        return this;
    };
    BinaryHeap.prototype.remove = function () {
        if (this.values.length < 2) {
            return this.values.pop();
        }
        var result = this.values.splice(0, 1, this.values.pop())[0];
        for (var i = 0; Math.floor(i * 2 + 1) < this.values.length; i = Math.floor(i * 2 + 1)) {
            var child = Math.floor(i * 2 + 1);
            if (child + 1 < this.values.length && this.values[child + 1] > this.values[child]) {
                child++;
            }
            if (this.values[child] > this.values[i]) {
                (0, swap_1.swap)(this.values, child, i);
            }
        }
        return result;
    };
    return BinaryHeap;
}());
exports.default = BinaryHeap;
