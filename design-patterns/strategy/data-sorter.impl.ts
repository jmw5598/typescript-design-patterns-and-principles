import { SortStrategy } from "./sort-strategy.interface";
import { IDataSorter } from './data-sorter.interface';

export class DataSorter<T> implements IDataSorter<T> {
  private _strategy: SortStrategy<T>;

  constructor(strategy: SortStrategy<T>) {
    this._strategy = strategy;
  }

  public setStrategy(strategy: SortStrategy<T>): void {
    this._strategy = strategy;
  }

  public sortData(data: T[]): T[] {
    return this._strategy.sort(data);
  }
}