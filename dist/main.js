"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const FileReaderService_1 = require("./services/FileReaderService");
const logger_1 = require("./utils/logger");
const path_1 = __importDefault(require("path"));
// Путь к .txt-файлу с описанием фигур
const FILE_PATH = path_1.default.join(__dirname, '../data/shapes.txt');
// Главная функция запуска
async function main() {
    logger_1.logger.info('Запуск приложения');
    try {
        const shapes = await FileReaderService_1.FileReaderService.readShapesFromFile(FILE_PATH);
        if (!shapes || shapes.length === 0) {
            console.log('Фигуры не были распознаны или файл пуст.');
        }
        else {
            console.log(`\nНайдено фигур: ${shapes.length}`);
        }
        logger_1.logger.info('Завершение без ошибок');
    }
    catch (error) {
        logger_1.logger.error(`Произошла ошибка: ${error.message}`);
    }
}
main();
