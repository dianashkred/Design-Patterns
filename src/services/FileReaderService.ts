// src/services/FileReaderService.ts
import { logger } from "../utils/logger";
import { ShapeRepository } from "../entities/ShapeRepository";
import { FileLineReaderService } from "./FileLineReaderService";
import { ShapeParsingService } from "./ShapeParsingService";

export class FileReaderService {
  static async readShapesFromFile(filePath: string): Promise<ShapeRepository> {
    const repo = new ShapeRepository();

    try {
      const lines = await FileLineReaderService.readLines(filePath);

      for (const line of lines) {
        const shape = ShapeParsingService.parseShape(line);

        if (shape) {
          repo.add(shape);
          logger.info(`Shape added to repository: ${shape.name} (id=${shape.id})`);
        } else {
          logger.warn(`Skipped invalid line: "${line}"`);
        }
      }

      logger.info(`Total valid shapes in repository: ${repo.getAll().length}`);
    } catch (error) {
      logger.error(`Failed to read file: ${(error as Error).message}`);
    }

    return repo;
  }
}
