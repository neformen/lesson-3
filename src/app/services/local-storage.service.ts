import { Injectable } from '@angular/core';

const storage = window.localStorage;

@Injectable()
export class LocalStorageService {

  checkPlace(key): boolean {
    return storage.getItem(key) ? true : false;
  }

  setItem(key, value): void {
    const newVal = JSON.stringify(value);
    storage.setItem(key, newVal);
  }

  getItem(key): any {
    const val = JSON.parse(storage.getItem(key))
    return val;
  }

  removeAllItems(): void {
    storage.clear();
  }

  getAllKey(index: number): string {
    return storage.key(index);
  }

  getAllKeys(): Array<string> {
    const keys: string[] = [];

    for (let i = 0; i < storage.length; i++) {
      keys.push(storage.key(i));
    }

    return keys;
  }

}
