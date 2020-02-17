import { SortStrategy } from "./sort-strategy.interface";

export class DescSortStrategy<T> implements SortStrategy<T> {
  public sort(t: T[]): T[] {
    return t.map(e => e).sort((a, b) => {
      if (a > b) return -1
      else if (b > a) return 1;
      else return 0;
    });
  }
}