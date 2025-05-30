"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileReaderService = void 0;
const fs_1 = require("fs");
const logger_1 = require("../utils/logger");
const OvalFactory_1 = require("../factories/OvalFactory");
const CubeFactory_1 = require("../factories/CubeFactory");
// Сервис для чтения и обработки фигур из файла
class FileReaderService {
    static async readShapesFromFile(filePath) {
        try {
            const content = await fs_1.promises.readFile(filePath, 'utf-8');
            const lines = content.split('\n').map((line) => line.trim()).filter((line) => line.length > 0);
            const shapes = []; // Массив для хранения валидных фигур
            for (const line of lines) {
                let shape = null;
                // Пробуем создать фигуру: сначала овал, если не удаётся, то куб
                shape = OvalFactory_1.OvalFactory.createFromString(line) || CubeFactory_1.CubeFactory.createFromString(line);
                if (shape) {
                    shapes.push(shape);
                    logger_1.logger.info(`Shape created: ${shape.name}`);
                }
                else {
                    logger_1.logger.warn(`Skipped invalid line: "${line}"`);
                }
            }
            logger_1.logger.info(`Total valid shapes: ${shapes.length}`);
            return shapes;
        }
        catch (error) {
            logger_1.logger.error(`Failed to read file: ${error.message}`);
            return [];
        }
    }
}
exports.FileReaderService = FileReaderService;
