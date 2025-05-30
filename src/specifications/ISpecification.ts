// src/specifications/ISpecification.ts
export interface ISpecification<T> {
  //Возвращает true, если элемент соответствует условию 
  isSatisfied(item: T): boolean;
}