import { ISpecification } from "./ISpecification";

export class ByIdSpecification<T extends { id: string }>
  implements ISpecification<T>
{
  constructor(private readonly id: string) {}

  isSatisfied(item: T): boolean {
    return item.id === this.id;
  }
}
