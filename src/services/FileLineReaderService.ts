// src/services/FileLineReaderService.ts
import { promises as fs } from 'fs';

export class FileLineReaderService {
  static async readLines(filePath: string): Promise<string[]> {
    const content = await fs.readFile(filePath, 'utf-8');
    return content
      .split('\n')
      .map((line) => line.trim())
      .filter((line) => line.length > 0);
  }
}
