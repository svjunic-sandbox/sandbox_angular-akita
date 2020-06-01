import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Example1 } from './example1.model';

export interface Example1State extends EntityState<Example1> {}

@Injectable({ providedIn: 'root' })
@StoreConfig({
  name: 'example1'
})
export class Example1Store extends EntityStore<Example1State> {

  constructor() {
    super();
  }

}
