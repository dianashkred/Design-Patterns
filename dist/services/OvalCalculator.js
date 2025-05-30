"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OvalCalculator = void 0;
class OvalCalculator {
    constructor(oval) {
        this.oval = oval;
    }
    getArea() {
        const a = Math.abs(this.oval.bottomRight.getCoordinate(0) - this.oval.topLeft.getCoordinate(0)) / 2; //полурадиус по оси X. Получаем координаты верхнего левого и нижнего правого угла по оси X.
        const b = Math.abs(this.oval.bottomRight.getCoordinate(1) - this.oval.topLeft.getCoordinate(1)) / 2;
        return Math.PI * a * b;
    }
    getPerimeter() {
        const a = Math.abs(this.oval.bottomRight.getCoordinate(0) - this.oval.topLeft.getCoordinate(0)) / 2;
        const b = Math.abs(this.oval.bottomRight.getCoordinate(1) - this.oval.topLeft.getCoordinate(1)) / 2;
        return Math.PI * (3 * (a + b) - Math.sqrt((3 * a + b) * (a + 3 * b)));
    }
    isCircle() {
        const dx = Math.abs(this.oval.bottomRight.getCoordinate(0) - this.oval.topLeft.getCoordinate(0));
        const dy = Math.abs(this.oval.bottomRight.getCoordinate(1) - this.oval.topLeft.getCoordinate(1));
        return dx === dy;
    }
    intersectsOneAxisOnly(distance) {
        const x1 = this.oval.topLeft.getCoordinate(0);
        const y1 = this.oval.topLeft.getCoordinate(1);
        const x2 = this.oval.bottomRight.getCoordinate(0);
        const y2 = this.oval.bottomRight.getCoordinate(1);
        const crossesX = (y1 < distance && y2 > distance) || (y2 < distance && y1 > distance);
        const crossesY = (x1 < distance && x2 > distance) || (x2 < distance && x1 > distance);
        return crossesX !== crossesY;
    }
}
exports.OvalCalculator = OvalCalculator;
