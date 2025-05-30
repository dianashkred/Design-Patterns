"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
const InvalidShapeError_1 = require("../exceptions/InvalidShapeError");
// Класс точки в n-мерном пространстве
class Point {
    constructor(coordinates) {
        this.coordinates = coordinates;
        if (coordinates.length === 0 || coordinates.some((c) => isNaN(c))) {
            throw new InvalidShapeError_1.InvalidShapeError('Invalid point coordinates');
        }
    }
    getDimension() {
        return this.coordinates.length;
    }
    getCoordinate(index) {
        return this.coordinates[index];
    }
    get x() {
        return this.coordinates[0];
    }
    get y() {
        return this.coordinates[1];
    }
    get z() {
        return this.coordinates[2] ?? 0;
    }
}
exports.Point = Point;
