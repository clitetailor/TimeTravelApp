import { Injectable } from '@angular/core';
import { createStore } from 'redux';

import { rootReducer, addTodo, completeTodo, next, previous, goto } from './reducer';

@Injectable()
export class ReducerService {
  store;

  constructor() {
    this.store = createStore(rootReducer);
  }

  addTodo(text) {
    this.store.dispatch(addTodo(text));
  }

  completeTodo(id) {
    this.store.dispatch(completeTodo(id));
  }

  next() {
    this.store.dispatch(next());
  }

  previous() {
    this.store.dispatch(previous());
  }

  goto(step) {
    this.store.dispatch(goto(step));
  }

  get state() {
    return this.store.getState();
  }
}
