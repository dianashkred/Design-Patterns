// src/specifications/MetricRangeSpecification.ts
import { ISpecification } from "./ISpecification";
import { Shape } from "../entities/Shape";
import { Cube } from "../entities/Cube";
import { Oval } from "../entities/Oval";
import { CubeCalculator } from "../services/CubeCalculator";
import { OvalCalculator } from "../services/OvalCalculator";
import { Metric } from "../types/Metrics";

/**
 * Спецификация поиска фигур, у которых
 * заданный метрик (площадь, периметр или объём)
 * лежит в [min, max].
 */
export class MetricRangeSpecification
  implements ISpecification<Shape>
{
  constructor(
    private readonly metric: Metric,
    private readonly min: number,
    private readonly max: number
  ) {}

  isSatisfied(shape: Shape): boolean {
    let value: number;

    if (shape instanceof Cube) {
      const calc = new CubeCalculator(shape);
      if (this.metric === "area") value = calc.getArea();
      else if (this.metric === "perimeter") value = calc.getPerimeter();
      else value = calc.getVolume();
    } else if (shape instanceof Oval) {
      const calc = new OvalCalculator(shape);
      if (this.metric === "area") value = calc.getArea();
      else if (this.metric === "perimeter") value = calc.getPerimeter();
      else return false;
    } else {
      return false;
    }

    return value >= this.min && value <= this.max;
  }
}
