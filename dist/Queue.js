"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Node = void 0;
var Node = /** @class */ (function () {
    function Node(value) {
        this.val = value;
        this.next = null;
    }
    return Node;
}());
exports.Node = Node;
var Queue = /** @class */ (function () {
    function Queue() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var _this = this;
        this.next = null;
        this.last = null;
        this.size = 0;
        values.forEach(function (value) {
            if (!_this.next) {
                _this.next = new Node(value);
                _this.last = _this.next;
            }
            else {
                _this.last.next = new Node(value);
                _this.last = _this.last.next;
            }
            _this.size++;
        });
    }
    Queue.prototype.push = function (value) {
        this.size++;
        if (!this.next) {
            this.next = new Node(value);
            this.last = this.next;
            return;
        }
        this.last.next = new Node(value);
        this.last = this.last.next;
    };
    Queue.prototype.pop = function () {
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
    Queue.prototype.forEach = function (callback) {
        if (!this.next) {
            return;
        }
        var print = this.next;
        for (; print !== null; print = print.next) {
            callback(print.val);
        }
    };
    return Queue;
}());
exports.default = Queue;
