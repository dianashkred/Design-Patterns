"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShapeSummaryService = void 0;
const Oval_1 = require("../entities/Oval");
const Cube_1 = require("../entities/Cube");
const OvalCalculator_1 = require("./OvalCalculator");
const CubeCalculator_1 = require("./CubeCalculator");
class ShapeSummaryService {
    static printInfo(shape) {
        console.log(`\n--- ${shape.name} ---`);
        if (shape instanceof Oval_1.Oval) {
            const calc = new OvalCalculator_1.OvalCalculator(shape);
            console.log(`Площадь: ${calc.getArea().toFixed(2)}`);
            console.log(`Периметр: ${calc.getPerimeter().toFixed(2)}`);
            console.log(`Круг?: ${calc.isCircle() ? 'да' : 'нет'}`);
            console.log(`Пересекает только одну ось?: ${calc.intersectsOneAxisOnly(0) ? 'да' : 'нет'}`);
        }
        if (shape instanceof Cube_1.Cube) {
            const calc = new CubeCalculator_1.CubeCalculator(shape);
            console.log(`Площадь поверхности: ${calc.getArea().toFixed(2)}`);
            console.log(`Объём: ${calc.getVolume().toFixed(2)}`);
            console.log(`Периметр: ${calc.getPerimeter().toFixed(2)}`);
            console.log(`Основание на координатной плоскости?: ${calc.baseLiesOnCoordinatePlane() ? 'да' : 'нет'}`);
            console.log(`Пересекает только одну ось?: ${shape.intersectsOneAxisOnly(0) ? 'да' : 'нет'}`);
        }
    }
}
exports.ShapeSummaryService = ShapeSummaryService;
