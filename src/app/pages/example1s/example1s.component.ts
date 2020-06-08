import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { Example1sService } from '~/service/example1s/example1s.service';
import { interval, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-example1s',
  templateUrl: './example1s.component.html',
  styleUrls: ['./example1s.component.scss'],
})
export class Example1sComponent implements OnInit, AfterViewInit, OnDestroy {
  count: number;
  interval$: Observable<number>;
  subscriber: Subscription;

  constructor(private example1sService: Example1sService) {}

  ngOnInit(): void {
    this.count = this.example1sService.getCount();
  }

  ngAfterViewInit() {
    this.interval$ = interval(100).pipe(
      map(() => this.example1sService.increment()),
      map(() => (this.count = this.example1sService.getCount()))
    );
    this.subscriber = this.interval$.subscribe();
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
