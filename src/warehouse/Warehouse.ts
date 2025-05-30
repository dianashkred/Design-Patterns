// src/warehouse/Warehouse.ts
import { Observer } from "../patterns/Observer";
import { Shape } from "../entities/Shape";
import { ShapeMetrics } from "../types/Metrics";


 //Синглтон для хранения метрик всех фигур

export class Warehouse implements Observer {
  private static instance: Warehouse;
  private metrics: Map<string, ShapeMetrics> = new Map();

  private constructor() {}


   //Получить единственный экземпляр склада
  public static getInstance(): Warehouse {
    if (!Warehouse.instance) {
      Warehouse.instance = new Warehouse();
    }
    return Warehouse.instance;
  }
  //Обновить метрики фигуры при смене её параметров
  public update(shape: Shape): void {
    const m: ShapeMetrics = {
      area: shape.getArea(),
      volume: shape.getVolume(),
      perimeter: shape.getPerimeter(),
    };
    this.metrics.set(shape.id, m);
  }

   //Получить метрики фигуры по её идентификатору
  public getMetricsById(id: string): ShapeMetrics | undefined {
    return this.metrics.get(id);
  }

  //Получить все хранящиеся метрики
  public getAllMetrics(): Record<string, ShapeMetrics> {
    const result: Record<string, ShapeMetrics> = {};
    for (const [id, m] of this.metrics.entries()) {
      result[id] = m;
    }
    return result;
  }

  //Удалить метрики фигуры при её удалении из репозитория
  public remove(shapeId: string): boolean {
    return this.metrics.delete(shapeId);
  }

  public removeAll(): void {
    this.metrics.clear();
  }  
}
