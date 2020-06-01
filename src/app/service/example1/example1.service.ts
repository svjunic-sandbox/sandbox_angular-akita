import { Injectable } from '@angular/core';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import { Example1Store, Example1State } from './example1.store';

@Injectable({ providedIn: 'root' })
export class Example1Service extends NgEntityService<Example1State> {

  constructor(protected store: Example1Store) {
    super(store);
  }

}
