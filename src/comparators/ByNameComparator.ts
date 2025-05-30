import { IComparator } from "./IComparator";


export class ByNameComparator<T extends { name: string }> implements IComparator<T> {
  compare(a: T, b: T): number {
    return a.name.localeCompare(b.name);
  }
}
