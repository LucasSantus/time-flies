export interface ILocalStorageGetDataProps {
  key: string;
}

export interface ILocalStorageSetDataProps<T> {
  key: string;
  data: T;
}
