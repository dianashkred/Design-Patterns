import { ISpecification } from "../specifications/ISpecification";
import { IComparator } from "../comparators/IComparator";

export interface IRepository<T> {
  add(item: T): void;
  getAll(): T[];
  getById(id: string): T | undefined;
  getByName(name: string): T | undefined;
  remove(id: string): boolean;
  
  find(spec: ISpecification<T>): T[];
  sort(comparator: IComparator<T>): T[];
}