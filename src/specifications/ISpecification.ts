export interface ISpecification<T> {
  isSatisfied(item: T): boolean;
}