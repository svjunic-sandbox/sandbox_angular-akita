import { Component, OnInit } from '@angular/core';
import { Example1sService } from '~/service/example1s/example1s.service';
import { interval, Subscription, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  count: number;
  interval$: Observable<number>;
  subscriber: Subscription;

  constructor(private example1sService: Example1sService) {}

  ngOnInit(): void {
    this.count = this.example1sService.getCount();
  }

  ngAfterViewInit() {
    this.interval$ = interval(100).pipe(map(() => (this.count = this.example1sService.getCount())));
    this.subscriber = this.interval$.subscribe();
  }

  ngOnDestroy() {
    this.subscriber.unsubscribe();
  }
}
