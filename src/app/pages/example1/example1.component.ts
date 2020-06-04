import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription, interval, merge, EMPTY } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { getEntityType } from '@datorama/akita';

import { IExample1CountListObject, Example1Service, Example1Query } from '~/service/example1';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
})
export class Example1Component implements OnInit, OnDestroy {
  isLoading = false;

  main$: Observable<void>;
  init$: Observable<void>;
  interval$: Observable<void>;

  allState$: Observable<getEntityType<IExample1CountListObject>[]>;

  subscription: Subscription;

  constructor(private example1Service: Example1Service, private example1Query: Example1Query) {
    this.init$ = EMPTY.pipe(
      tap({
        complete: () => this.loadData(),
      })
    );

    this.interval$ = interval(10000).pipe(map(() => this.loadData()));

    this.main$ = merge(this.init$, this.interval$);
  }

  ngOnInit(): void {
    this.subscription = this.main$.subscribe(() => {
      console.log('subscription: interval');
    });
  }

  loadData() {
    this.isLoading = true;
    this.example1Service.getList().subscribe(() => {
      this.isLoading = false;
      this.allState$ = this.example1Query.selectAll();
    });
  }

  ngOnDestroy() {
    console.log('unsubscribe!');
    // intervalは動き続けるので、勝手におわらない。
    // ここの unsubscribeはたぶん正解
    this.subscription.unsubscribe();
  }
}
