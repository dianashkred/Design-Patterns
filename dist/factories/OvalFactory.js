"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OvalFactory = void 0;
const Point_1 = require("../entities/Point");
const Oval_1 = require("../entities/Oval");
const OvalValidator_1 = require("../validators/OvalValidator");
const InvalidShapeError_1 = require("../exceptions/InvalidShapeError");
//создаем овал
class OvalFactory {
    static createFromString(data) {
        try {
            const trimmed = data.trim();
            if (!OvalValidator_1.OvalValidator.isValid(trimmed)) {
                return null;
            }
            const [p1Raw, p2Raw] = trimmed.split(';');
            const p1 = new Point_1.Point(p1Raw.split(',').map(Number));
            const p2 = new Point_1.Point(p2Raw.split(',').map(Number));
            const oval = new Oval_1.Oval(p1, p2, `Oval-${crypto.randomUUID()}`);
            return oval.isValid() ? oval : null;
        }
        catch (err) {
            if (err instanceof InvalidShapeError_1.InvalidShapeError) {
                throw err;
            }
            return null;
        }
    }
}
exports.OvalFactory = OvalFactory;
