"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Swap = void 0;
function Swap(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}
exports.Swap = Swap;
