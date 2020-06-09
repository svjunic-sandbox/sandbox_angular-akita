import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Example1sService } from '~/service/example1s/example1s.service';
import { interval, Subscription, Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-example1s',
  templateUrl: './example1s.component.html',
  styleUrls: ['./example1s.component.scss'],
})
export class Example1sComponent implements OnInit, AfterViewInit, OnDestroy {
  count: number;

  interval$: Observable<void>;
  count$: BehaviorSubject<number>;

  subscriberInterval: Subscription;
  subscriberCount: Subscription;

  constructor(private example1sService: Example1sService) {}

  ngOnInit(): void {
    this.count = this.example1sService.count;
    this.count$ = this.example1sService.count$;
  }

  ngAfterViewInit() {
    // 1. 普通にsubscribe
    this.interval$ = interval(100).pipe(map(() => this.example1sService.increment()));
    this.subscriberInterval = this.interval$.subscribe();

    // 2. serviceのBehaviorSubjectを購読
    this.subscriberCount = this.example1sService.count$.subscribe((_count) => {
      this.count = _count;
    });
  }

  ngOnDestroy() {
    this.subscriberInterval.unsubscribe();
    this.subscriberCount.unsubscribe();
  }
}
