"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.q = exports.greeter = void 0;
let greeter = function (name) {
    return `Common MJS says Hello to ${name}!`;
};
exports.greeter = greeter;
let q = console.log;
exports.q = q;
