import { Shape } from '../entities/Shape';
// src/patterns/Observer.ts
export interface Observer {
  //Вызывается при изменении фигуры, чтобы получить её метрики 
  update(shape: Shape): void;
}
