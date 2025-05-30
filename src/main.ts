// src/main.ts
import path from "path";
import { logger } from "./utils/logger";
import { FileReaderService } from "./services/FileReaderService";
import { ByIdSpecification } from "./specifications/ByIdSpecification";
import { FirstQuadrantSpecification } from "./specifications/FirstQuadrantSpecification";
import { MetricRangeSpecification } from "./specifications/MetricRangeSpecification";
import { ByNameSpecification } from "./specifications/ByNameSpecification";
import { ByFirstPointXComparator } from "./comparators/ByFirstPointXComparator";
import { ByFirstPointYComparator } from "./comparators/ByFirstPointYComparator";
import { ByNameComparator } from "./comparators/ByNameComparator";
import { Shape } from "./entities/Shape";
import { DistanceFromOriginSpecification } from "./specifications/DistanceFromOriginSpecification";
import { ByIdComparator } from "./comparators/ByIdComparator";

async function main(): Promise<void> {
  logger.info("Запуск приложения");
  const filePath = path.join(__dirname, "../data/shapes.txt");

  const repository = await FileReaderService.readShapesFromFile(filePath);
  const shapes = repository.getAll();

  if (shapes.length === 0) {
    console.log("Фигуры не были распознаны или файл пуст.");
    return;
  }

  console.log(`\nНайдено фигур: ${shapes.length}`);
  shapes.forEach((s) => console.log(`- ${s.name} (id=${s.id})`));

  //Поиск по ID (спецификация)
  const sampleId = shapes[0].id;
  const byId = repository.find(new ByIdSpecification<Shape>(sampleId));
  console.log(`\nПоиск по ID (${sampleId}): найдено ${byId.length}`);

  //Поиск по имени
  const name = shapes[0].name;
  const byName = repository.find(new ByNameSpecification<Shape>(name));
  console.log(`Поиск по имени "${name}": найдено ${byName.length}`);

  //Поиск по координатам: первый квадрант
  const inQuadrant = repository.find(new FirstQuadrantSpecification());
  console.log(`В первом квадранте: ${inQuadrant.length} фигур`);

  //Поиск по диапазону площади (например, [20, 100])
  const byArea = repository.find(new MetricRangeSpecification("area", 20, 100));
  console.log(`Фигуры с площадью от 20 до 100: ${byArea.length}`);

  const byIdSorted = repository.sort(new ByIdComparator());
  console.log("\nСортировка по ID:");
  byIdSorted.forEach((s) => console.log(`- ${s.id}`));

  //Сортировка по имени
  const byNameSorted = repository.sort(new ByNameComparator());
  console.log("\nСортировка по имени:");
  byNameSorted.forEach((s) => console.log(`- ${s.name}`));

  //Сортировка по координате X первой точки
  const byX = repository.sort(new ByFirstPointXComparator());
  console.log("\nСортировка по X:");
  byX.forEach((s) => console.log(`- ${s.name}: X = ${s.getPoints()[0].x}`));

  //Сортировка по координате Y первой точки 
  const byY = repository.sort(new ByFirstPointYComparator());
  console.log("\nСортировка по Y:");
  byY.forEach((s) => console.log(`- ${s.name}: Y = ${s.getPoints()[0].y}`));

  const byDistance = repository.find(new DistanceFromOriginSpecification(0, 50));
  console.log(`Фигуры на расстоянии 0–50 от начала координат: ${byDistance.length}`);

  //Удаление первого объекта 
  const first = shapes[0];
  const removed = repository.remove(first.id);
  console.log(`\nУдалена фигура ${first.name} — успешно: ${removed}`);
  logger.info("Завершение без ошибок");
}

main();
