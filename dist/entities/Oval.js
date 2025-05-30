"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Oval = void 0;
const Shape_1 = require("./Shape");
class Oval extends Shape_1.Shape {
    constructor(topLeft, bottomRight, name) {
        super(name);
        this.topLeft = topLeft;
        this.bottomRight = bottomRight;
        this.name = name;
    }
    isValid() {
        return (this.topLeft.getDimension() >= 2 &&
            this.bottomRight.getDimension() >= 2 &&
            this.topLeft.x !== this.bottomRight.x &&
            this.topLeft.y !== this.bottomRight.y &&
            !isNaN(this.topLeft.x) &&
            !isNaN(this.topLeft.y) &&
            !isNaN(this.bottomRight.x) &&
            !isNaN(this.bottomRight.y));
    }
}
exports.Oval = Oval;
