//import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import { tap } from 'rxjs/operators';
import { CounterStore } from './counter.store';

@Injectable({ providedIn: 'root' })
export class CounterService {
  //constructor(private counterStore: CounterStore, private http: HttpClient) {
  //}

  //get() {
  //  return this.http.get('').pipe(tap(entities => this.counterStore.update(entities)));
  //}

  constructor(private counterStore: CounterStore) {
    console.log('counter new された');
  }

  increment() {
    this.counterStore.update((store) => ({
      ...store,
      count: store.count + 1,
    }));
  }

  setCount(_count) {
    const count = Number(_count);
    if (typeof count !== 'number') return;
    this.counterStore.update((store) => ({
      ...store,
      count: count,
    }));
  }
}
