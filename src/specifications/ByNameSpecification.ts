// src/specifications/ByNameSpecification.ts
import { ISpecification } from "./ISpecification";

export class ByNameSpecification<T extends { name: string }>
  implements ISpecification<T>
  {
  constructor(private readonly name: string) {}

  isSatisfied(item: T): boolean {
    return item.name === this.name;
  }
}
