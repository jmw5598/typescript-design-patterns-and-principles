export interface IDataSorter<T> {
  sortData(data: T[]): T[];
}