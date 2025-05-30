// src/comparators/IComparator.ts
/** Интерфейс для сравнения двух объектов */
export interface IComparator<T> {
  /** 
   * Возвращает отрицательное, если a < b; 
   * ноль, если равно; 
   * положительное, если a > b 
   */
  compare(a: T, b: T): number;
}
