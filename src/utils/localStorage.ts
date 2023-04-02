"use client";

import { ILocalStorageGetDataProps, ILocalStorageSetDataProps } from "@/types/LocalStorage";

const getStorage = ({ key }: ILocalStorageGetDataProps) =>
  typeof window !== "undefined" ? localStorage.getItem(key) : null;

export function getLocalStorage({ key }: ILocalStorageGetDataProps) {
  const data = getStorage({ key });
  return data ? JSON.parse(data) : null;
}

export function getListLocalStorage({ key }: ILocalStorageGetDataProps) {
  const data = getStorage({ key });
  return data ? JSON.parse(data) : [];
}

export function setLocalStorage<T>({ key, data }: ILocalStorageSetDataProps<T>) {
  if (typeof window !== "undefined") localStorage.setItem(key, JSON.stringify(data));
}
