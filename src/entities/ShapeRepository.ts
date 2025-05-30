// src/entities/ShapeRepository.ts
import { Shape } from "../entities/Shape";
import { IRepository } from "../repositories/IRepository";
import { ISpecification } from "../specifications/ISpecification";
import { IComparator } from "../comparators/IComparator";
import { Warehouse } from "../warehouse/Warehouse";

export class ShapeRepository implements IRepository<Shape> {
  private items: Map<string, Shape> = new Map();

  add(shape: Shape): void {
    this.items.set(shape.id, shape);
  }

  getAll(): Shape[] {
    return Array.from(this.items.values());
  }

  getById(id: string): Shape | undefined {
    return this.items.get(id);
  }

  getByName(name: string): Shape | undefined {
    return this.getAll().find(s => s.name === name);
  }


  remove(id: string): boolean {
    const shape = this.items.get(id);
    const removed = this.items.delete(id);
    if (removed && shape) {
      // отписываем фигуру от склада
      shape.detach(Warehouse.getInstance());
      // удаляем её метрики
      Warehouse.getInstance().remove(shape.id);
    }
    return removed;
  }

  find(spec: ISpecification<Shape>): Shape[] {
    return this.getAll().filter(shape => spec.isSatisfied(shape));
  }
  
  sort(comparator: IComparator<Shape>): Shape[] {
    return this.getAll().sort((a, b) => comparator.compare(a, b));
  }
}
