"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OvalValidator = void 0;
// Проверка формата строки для овала
class OvalValidator {
    static isValid(line) {
        const trimmed = line.trim();
        if (!this.PATTERN.test(trimmed))
            return false;
        const [p1Str, p2Str] = trimmed.split(';');
        const p1Coords = p1Str.split(',').map(Number);
        const p2Coords = p2Str.split(',').map(Number);
        return p1Coords.every(c => !isNaN(c)) && p2Coords.every(c => !isNaN(c));
    }
}
exports.OvalValidator = OvalValidator;
OvalValidator.PATTERN = /^\s*[-\d.,]+\s*;\s*[-\d.,]+\s*$/;
