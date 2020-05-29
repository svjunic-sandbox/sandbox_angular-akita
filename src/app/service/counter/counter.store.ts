import { Injectable } from '@angular/core';
import { Store, StoreConfig } from '@datorama/akita';

export interface CounterState {
  count: number;
}

export function createInitialState(): CounterState {
  return {
    count: 0
  };
}

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'counter' })
export class CounterStore extends Store<CounterState> {
  constructor() {
    super(createInitialState());
  }
}
