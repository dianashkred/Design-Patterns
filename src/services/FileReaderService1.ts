
import { promises as fs } from 'fs';
import { logger } from '../utils/logger';
import { Shape } from '../entities/Shape';
import { OvalFactory } from '../factories/OvalFactory';
import { CubeFactory } from '../factories/CubeFactory';

// Сервис для чтения и обработки фигур из файла
export class FileReaderService {
  static async readShapesFromFile(filePath: string): Promise<Shape[]> {
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      const lines = content.split('\n').map((line) => line.trim()).filter((line) => line.length > 0);

      const shapes: Shape[] = []; // Массив для хранения валидных фигур

      for (const line of lines) {
        let shape: Shape | null = null;
        
        // Пробуем создать фигуру: сначала овал, если не удаётся, то куб
        shape = OvalFactory.createFromString(line) || CubeFactory.createFromString(line);

        if (shape) {
          shapes.push(shape);
          logger.info(`Shape created: ${shape.name}`);
        } else {
          logger.warn(`Skipped invalid line: "${line}"`);
        }
      }

      logger.info(`Total valid shapes: ${shapes.length}`);
      
      return shapes;
    } catch (error) {
      logger.error(`Failed to read file: ${(error as Error).message}`);
      return [];
    }
  }
}
