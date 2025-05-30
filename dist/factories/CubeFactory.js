"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeFactory = void 0;
const Point_1 = require("../entities/Point");
const Cube_1 = require("../entities/Cube");
const CubeValidator_1 = require("../validators/CubeValidator");
const InvalidShapeError_1 = require("../exceptions/InvalidShapeError");
class CubeFactory {
    static createFromString(data) {
        try {
            const trimmed = data.trim();
            const [pointStr, edgeStr] = trimmed.split(';');
            const edgeLength = parseFloat(edgeStr);
            if (isNaN(edgeLength))
                return null;
            const coordinates = pointStr.split(',').map(Number);
            if (coordinates.some(c => isNaN(c))) {
                throw new InvalidShapeError_1.InvalidShapeError('Point coordinates contain NaN');
            }
            if (!CubeValidator_1.CubeValidator.isValid(trimmed)) {
                return null;
            }
            const corner = new Point_1.Point(coordinates); // Создаём точку с полученными координатами
            const cube = new Cube_1.Cube(corner, edgeLength, `Cube-${crypto.randomUUID()}`); // Создаём новый объект куба с точкой и длиной ребра
            return cube.isValid() ? cube : null;
        }
        catch (err) {
            if (err instanceof InvalidShapeError_1.InvalidShapeError) {
                throw err;
            }
            return null;
        }
    }
}
exports.CubeFactory = CubeFactory;
