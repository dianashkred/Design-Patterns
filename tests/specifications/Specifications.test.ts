// tests/Specifications.test.ts
import { ShapeRepository } from "../../src/entities/ShapeRepository";
import { Point } from "../../src/entities/Point";
import { Cube } from "../../src/entities/Cube";
import { Oval } from "../../src/entities/Oval";

import { ByIdSpecification } from "../../src/specifications/ByIdSpecification";
import { ByNameSpecification } from "../../src/specifications/ByNameSpecification";
import { FirstQuadrantSpecification } from "../../src/specifications/FirstQuadrantSpecification";
import { MetricRangeSpecification } from "../../src/specifications/MetricRangeSpecification";
import { DistanceFromOriginSpecification } from "../../src/specifications/DistanceFromOriginSpecification";

describe("ShapeRepository + Specifications", () => {
  let repo: ShapeRepository;
  let cubeA: Cube, cubeB: Cube, ovalA: Oval, ovalB: Oval;

  beforeEach(() => {
    repo = new ShapeRepository();

    cubeA = new Cube(new Point([1, 1, 1]), 2, "cube-A");
    cubeB = new Cube(new Point([-1, -1, 0]), 3, "cube-B");
    ovalA = new Oval(new Point([1, 1]), new Point([2, 2]), "oval-A");
    ovalB = new Oval(new Point([-2, -1]), new Point([-1, -2]), "oval-B");

    [cubeA, cubeB, ovalA, ovalB].forEach(s => repo.add(s));
  });

  it("найти по ID (name)", () => {
    const spec = new ByIdSpecification<Cube>("cube-A");
    expect(repo.find(spec)).toEqual([cubeA]);
  });

  it("найти по имени", () => {
    const spec = new ByNameSpecification<Oval>("oval-B");
    expect(repo.find(spec)).toEqual([ovalB]);
  });

  it("найти все в первом квадранте", () => {
    const spec = new FirstQuadrantSpecification();
    const result = repo.find(spec);
    expect(result).toContain(cubeA);
    expect(result).toContain(ovalA);
    expect(result).not.toContain(cubeB);
    expect(result).not.toContain(ovalB);
  });

  it("найти фигуры с площадью в диапазоне [0.5, 1.0]", () => {
    const spec = new MetricRangeSpecification("area", 0.5, 1.0);
    const result = repo.find(spec);
    // ovalA: π*(0.5)*(0.5) ≈0.785 → попадает, кубы — нет
    expect(result).toEqual([ovalA]);
  });

  it("найти фигуры с объёмом в диапазоне [7, 9]", () => {
    const spec = new MetricRangeSpecification("volume", 7, 9);
    const result = repo.find(spec);
    // cubeA: 2^3 = 8 → попадает
    expect(result).toEqual([cubeA]);
  });

  it("найти фигуры по расстоянию до начала координат [0, 1.5]", () => {
    const spec = new DistanceFromOriginSpecification(0, 1.5);
    const result = repo.find(spec);
    // cubeA: √3 ≈1.73 → нет; cubeB: √2 ≈1.41 → да; ovalA topLeft √2≈1.41 → да
    expect(result).toContain(cubeB);
    expect(result).toContain(ovalA);
    expect(result).not.toContain(cubeA);
    expect(result).not.toContain(ovalB);
  });
});
