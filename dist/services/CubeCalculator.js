"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeCalculator = void 0;
class CubeCalculator {
    constructor(cube) {
        this.cube = cube;
    }
    getArea() {
        const a = this.cube.edgeLength;
        return 6 * a * a; // Площадь
    }
    getVolume() {
        const a = this.cube.edgeLength;
        return a ** 3; // Объём 
    }
    getPerimeter() {
        const a = this.cube.edgeLength;
        return 12 * a; // Периметр
    }
    baseLiesOnCoordinatePlane() {
        return (this.cube.corner.x === 0 || // лежит ли хотя бы одна из граней куба на координатных плоскостях
            this.cube.corner.y === 0 ||
            this.cube.corner.z === 0);
    }
}
exports.CubeCalculator = CubeCalculator;
