import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription, interval, EMPTY, merge } from 'rxjs';
import { map, tap } from 'rxjs/operators';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.scss'],
})
export class Example2Component implements OnInit, OnDestroy {
  public text = '引き渡す値';

  main$: Observable<void>;
  init$: Observable<void>;
  interval$: Observable<void>;
  subscription: Subscription;

  private intervalTime = 10;

  public enabled = true;

  constructor() {
    console.warn(`このpropsは${this.intervalTime}msで更新されます`);

    this.init$ = EMPTY.pipe(
      tap({
        complete: () => {
          this.text = Date();
        },
      })
    );
    this.interval$ = interval(this.intervalTime).pipe(
      map(() => {
        this.text = Date();
      })
    );

    this.main$ = merge(this.init$, this.interval$);

    this.subscription = this.main$.subscribe();
  }

  ngOnInit(): void {}

  handleDeleteClick() {
    console.log('子コンポーネントのngDoCheck, ngAfterContentChecked ,ngAfterViewChecked が呼び出されている');
    this.enabled = !this.enabled;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
