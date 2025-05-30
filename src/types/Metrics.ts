// src/types/metrics.ts
export interface ShapeMetrics {
  area: number;
  volume: number;
  perimeter: number;
}

// Тип для обозначения названия метрики
export type Metric = keyof ShapeMetrics;
