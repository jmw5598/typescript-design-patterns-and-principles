export interface SortStrategy<T> {
  sort(d: T[]): T[];
}