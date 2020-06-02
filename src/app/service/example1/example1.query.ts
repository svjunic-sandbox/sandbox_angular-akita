import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Example1Store, Example1State } from './example1.store';

@Injectable({ providedIn: 'root' })
export class Example1Query extends QueryEntity<Example1State> {
  constructor(protected store: Example1Store) {
    super(store);
  }
}
