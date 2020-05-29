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

  constructor(private counterStore: CounterStore) {}

  increment() {
    this.counterStore.update(store => ({
      ...store,
      count: store.count + 1
    }));
  }
}
