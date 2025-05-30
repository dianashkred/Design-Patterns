"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CubeVolumeSplitterService = void 0;
/**
 * Сервис для расчёта соотношения объёмов частей куба
 * после рассечения координатной плоскостью.
 */
class CubeVolumeSplitterService {
    constructor(cube) {
        this.cube = cube;
    }
    /**
     * Рассчитывает объёмы двух частей куба при рассечении координатной плоскостью.
     *
     * @param axis - 'XY', 'XZ', 'YZ'
     * @param coordinate - координата рассечения по соответствующей оси
     * @returns объект с абсолютными и процентными объёмами
     */
    splitByPlane(axis, coordinate) {
        const { x, y, z } = this.cube.corner;
        const a = this.cube.edgeLength;
        let lower = 0;
        let upper = 0;
        switch (axis) {
            case 'XY': { // Рассечение по плоскости XY
                if (coordinate <= z)
                    return this.asym(0, a * a * a);
                if (coordinate >= z + a)
                    return this.asym(a * a * a, 0);
                const h1 = coordinate - z; // Высота до плоскости
                const h2 = a - h1; // Оставшаяся высота
                lower = a * a * h1;
                upper = a * a * h2;
                break;
            }
            case 'XZ': {
                if (coordinate <= y)
                    return this.asym(0, a * a * a); // Весь объём в верхней части
                if (coordinate >= y + a)
                    return this.asym(a * a * a, 0);
                const h1 = coordinate - y;
                const h2 = a - h1;
                lower = a * a * h1;
                upper = a * a * h2;
                break;
            }
            case 'YZ': {
                if (coordinate <= x)
                    return this.asym(0, a * a * a);
                if (coordinate >= x + a)
                    return this.asym(a * a * a, 0);
                const h1 = coordinate - x;
                const h2 = a - h1;
                lower = a * a * h1;
                upper = a * a * h2;
                break;
            }
            default:
                throw new Error(`Unknown axis: ${axis}`);
        }
        return this.asym(lower, upper);
    }
    /**
     * Проверяет, делится ли куб пополам по координатной плоскости
     * @param axis - 'XY', 'XZ', 'YZ'
     * @param coordinate - координата рассечения
     * @returns true, если объёмы равны
     */
    isSymmetricSplit(axis, coordinate) {
        const { lowerVolume, upperVolume } = this.splitByPlane(axis, coordinate);
        const epsilon = 1e-6;
        return Math.abs(lowerVolume - upperVolume) < epsilon; // Проверка на симметричность
    }
    /**
     * Формирует объект с абсолютными и процентными значениями объёмов
     */
    asym(lower, upper) {
        const total = lower + upper;
        const lowerPercent = total > 0 ? (lower / total) * 100 : 0;
        const upperPercent = total > 0 ? (upper / total) * 100 : 0;
        return {
            lowerVolume: lower,
            upperVolume: upper,
            lowerPercent,
            upperPercent,
        };
    }
}
exports.CubeVolumeSplitterService = CubeVolumeSplitterService;
