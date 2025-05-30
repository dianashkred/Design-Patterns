// src/comparators/ByNameComparator.ts
import { IComparator } from "./IComparator";

/**
 * Сортирует по полю name
 * (для демонстрации: фактически то же, что ByIdComparator)
 */
export class ByNameComparator<T extends { name: string }> implements IComparator<T> {
  compare(a: T, b: T): number {
    return a.name.localeCompare(b.name);
  }
}
