// src/main.ts
import path from "path";
import { logger } from "./utils/logger";
import { FileReaderService } from "./services/FileReaderService";

async function main(): Promise<void> {
  logger.info("Запуск приложения");
  const filePath = path.join(__dirname, "../data/shapes.txt");

  const repository = await FileReaderService.readShapesFromFile(filePath);
  const shapes = repository.getAll();

  if (shapes.length === 0) {
    console.log("Фигуры не были распознаны или файл пуст.");
  } else {
    console.log(`\nНайдено фигур: ${shapes.length}`);
    shapes.forEach((s) => console.log(`- ${s.name}`));
  }
  logger.info("Завершение без ошибок");
}

main();
