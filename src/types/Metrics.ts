export interface ShapeMetrics {
  area: number;
  volume: number;
  perimeter: number;
}

export type Metric = keyof ShapeMetrics;
