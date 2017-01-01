import { Injectable } from '@angular/core';

@Injectable()
export class LocalstorageService {
  set(key, data) {
    localStorage.setItem(key, data);
  }

  get(key) {
    return localStorage.getItem(key);
  }
}
