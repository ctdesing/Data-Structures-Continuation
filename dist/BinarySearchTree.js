"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Node = /** @class */ (function () {
    function Node(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
    return Node;
}());
var BinarySearchTree = /** @class */ (function () {
    function BinarySearchTree() {
        var values = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            values[_i] = arguments[_i];
        }
        var _this = this;
        this.root = null;
        values.forEach(function (val) {
            if (!_this.root) {
                _this.root = new Node(val);
            }
            else {
                _this.push(val);
            }
        });
    }
    BinarySearchTree.prototype.push = function (val) {
        if (!this.root) {
            this.root = new Node(val);
            return;
        }
        var traverse = this.root;
        while (true) {
            if (val < traverse.value) {
                if (traverse.left !== null) {
                    traverse = traverse.left;
                }
                else {
                    traverse.left = new Node(val);
                    break;
                }
            }
            else if (val > traverse.value) {
                if (traverse.right !== null) {
                    traverse = traverse.right;
                }
                else {
                    traverse.right = new Node(val);
                    break;
                }
            }
            else {
                return this;
            }
        }
        return this;
    };
    BinarySearchTree.prototype.includes = function (val) {
        if (!this.root) {
            return false;
        }
        var traverse = this.root;
        while (true) {
            if (val < traverse.value) {
                if (traverse.left !== null) {
                    traverse = traverse.left;
                }
                else {
                    return false;
                }
            }
            else if (val > traverse.value) {
                if (traverse.right !== null) {
                    traverse = traverse.right;
                }
                else {
                    return false;
                }
            }
            else {
                return true;
            }
        }
    };
    return BinarySearchTree;
}());
exports.default = BinarySearchTree;
/*
push(val) {
        if (!this.root) {
            this.root = new Node(val)
            return
        }

        let traverse = this.root
        while(true) {
            if (val < traverse.value) {
                if (val < traverse.left?.value) {
                    traverse = traverse.left
                } else {
                    let chain = traverse.left
                    traverse.left = new Node(val)
                    traverse = traverse.left
                    traverse.left = chain
                    break
                }
            } else if (val > traverse.value) {
                if (val > traverse.right?.value) {
                    traverse = traverse.right
                } else {
                    let chain = traverse.right
                    traverse.right = new Node(val)
                    traverse = traverse.right
                    traverse.right = chain
                    break
                }
            } else {
                return
            }
        }
    }
*/ 
