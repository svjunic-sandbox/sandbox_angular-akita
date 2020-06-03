import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, TimeInterval } from 'rxjs';
import { map } from 'rxjs/operators';

import { getEntityType } from '@datorama/akita';

import { IExample1CountListObject, Example1Service, Example1Query } from '~/service/example1';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
})
export class Example1Component implements OnInit, OnDestroy {
  isLoading = false;

  interval$: Observable<void>;
  subscription: Subscription;
  allState$: Observable<getEntityType<IExample1CountListObject>[]>;

  constructor(private example1Service: Example1Service, private example1Query: Example1Query) {
    this.interval$ = interval(10000).pipe(map(() => this.loadData()));
  }

  ngOnInit(): void {
    this.subscription = this.interval$.subscribe(() => {
      console.log('subscription: interval');
    });
  }

  loadData() {
    this.isLoading = true;
    this.example1Service.getList().subscribe(() => {
      this.isLoading = false;
      console.log(this);
      console.log(this.example1Service);
      this.allState$ = this.example1Query.selectAll();
    });
  }

  ngOnDestroy() {
    console.log('unsubscribe!');
    this.subscription.unsubscribe();
  }
}
