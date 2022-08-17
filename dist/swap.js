"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = void 0;
function swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
exports.swap = swap;
