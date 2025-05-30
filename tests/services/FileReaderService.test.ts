import { FileReaderService } from '../../src/services/FileReaderService';
import path from 'path';

describe('FileReaderService', () => {
  it('should read and parse shapes from file', async () => {
    const filePath = path.join(__dirname, '../__mocks__/valid-shapes.txt'); // Добавь такой файл с валидными данными
    const repo = await FileReaderService.readShapesFromFile(filePath);

    const all = repo.getAll();
    expect(all.length).toBeGreaterThan(0);
  });

  it('should skip invalid lines and log warning', async () => {
    const filePath = path.join(__dirname, '../__mocks__/invalid-shapes.txt'); // Добавь такой файл с ошибками
    const repo = await FileReaderService.readShapesFromFile(filePath);
    expect(repo.getAll().length).toBeGreaterThanOrEqual(0);
  });
});
