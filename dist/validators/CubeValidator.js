"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeValidator = void 0;
class CubeValidator {
    static isValid(line) {
        const trimmed = line.trim();
        if (!this.PATTERN.test(trimmed))
            return false;
        const [pointStr, edgeStr] = trimmed.split(';');
        const coords = pointStr.split(',').map(Number);
        const edge = parseFloat(edgeStr);
        return coords.every(c => !isNaN(c)) && !isNaN(edge);
    }
}
exports.CubeValidator = CubeValidator;
CubeValidator.PATTERN = /^\s*[-\d.,]+\s*;\s*[-\d.,]+\s*$/;
