"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HashTable = /** @class */ (function () {
    function HashTable() {
    }
    HashTable.prototype.hash = function (key) {
        var result = 0;
        var string = key.toString();
        for (var _i = 0, string_1 = string; _i < string_1.length; _i++) {
            var char = string_1[_i];
            result += char.charCodeAt(0);
        }
        return result;
    };
    HashTable.prototype.set = function (key, value) {
        var hash = this.hash(key);
        this[hash] = [key, value];
        return this;
    };
    HashTable.prototype.get = function (key) {
        var hash = this.hash(key);
        if (!this[hash]) {
            return undefined;
        }
        return this[hash][1];
    };
    HashTable.prototype.delete = function (key) {
        var hash = this.hash(key);
        if (!this[hash]) {
            return;
        }
        delete this[hash];
    };
    HashTable.prototype.keys = function () {
        var result = [];
        for (var value in this) {
            if (!isNaN(parseInt(value))) {
                result.push(this[value][0]);
            }
        }
        return result;
    };
    HashTable.prototype.values = function () {
        var result = [];
        for (var value in this) {
            if (!isNaN(parseInt(value))) {
                result.push(this[value][1]);
            }
        }
        return result;
    };
    return HashTable;
}());
exports.default = HashTable;
