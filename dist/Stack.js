"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var _this = this;
        this.length = 0;
        values.forEach(function (value) {
            _this[_this.length++] = value;
        });
    }
    Stack.prototype.push = function (value) {
        this[this.length++] = value;
    };
    Stack.prototype.pop = function () {
        if (!this.length) {
            return undefined;
        }
        this.length--;
        var result = this[this.length];
        delete this[this.length];
        return result;
    };
    Stack.prototype.forEach = function (callback) {
        for (var i = 0; i < this.length; i++) {
            callback(this[i]);
        }
    };
    return Stack;
}());
exports.default = Stack;
