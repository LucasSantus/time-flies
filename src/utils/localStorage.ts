"use client";

import {
  ILocalStorageGetDataProps,
  ILocalStorageSetDataProps,
} from "@/types/LocalStorage";

export function getLocalStorage({ key }: ILocalStorageGetDataProps) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : null;
}

export function getListLocalStorage({ key }: ILocalStorageGetDataProps) {
  const data = localStorage.getItem(key);
  return data ? JSON.parse(data) : [];
}

export function setLocalStorage<T>({
  key,
  data,
}: ILocalStorageSetDataProps<T>) {
  localStorage.setItem(key, JSON.stringify(data));
}
