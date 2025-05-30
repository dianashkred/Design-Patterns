"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cube = void 0;
const Shape_1 = require("./Shape");
class Cube extends Shape_1.Shape {
    constructor(corner, //вершина
    edgeLength, //длина ребра
    name) {
        super(name);
        this.corner = corner;
        this.edgeLength = edgeLength;
        this.name = name;
    }
    isValid() {
        return this.edgeLength > 0;
    }
}
exports.Cube = Cube;
