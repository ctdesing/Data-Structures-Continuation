"use strict";
exports.__esModule = true;
// import Stack from "./Stack.ts";
var Queue_1 = require("./Queue");
var queue = new Queue_1["default"](1, 2, 3, 4);
queue.push('Hello World!');
queue.forEach(function (val) { return console.log(val); });
