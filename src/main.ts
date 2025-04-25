import { FileReaderService } from './services/FileReaderService';
import { logger } from './utils/logger';
import path from 'path';

// Путь к .txt-файлу с описанием фигур
const FILE_PATH = path.join(__dirname, '../data/shapes.txt');

// Главная функция запуска
async function main(): Promise<void> {
  logger.info('Запуск приложения');

  try {
    const shapes = await FileReaderService.readShapesFromFile(FILE_PATH);

    if (!shapes || shapes.length === 0) {
      console.log('Фигуры не были распознаны или файл пуст.');
    } else {
      console.log(`\nНайдено фигур: ${shapes.length}`);
    }
    logger.info('Завершение без ошибок');
  } catch (error) {
    logger.error(`Произошла ошибка: ${(error as Error).message}`);
  }
}

main();
