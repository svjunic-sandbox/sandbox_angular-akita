import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CounterService, CounterQuery } from '~/service/counter';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  readonly count$: Observable<number>;

  constructor(private counterService: CounterService, private counterQuery: CounterQuery) {
    this.count$ = this.counterQuery.select('count');
    console.log(this.count$);
  }

  ngOnInit(): void {}

  handleCountupClick() {
    this.counterService.increment();
  }

  handleInput(num) {
    console.log(num);
    this.counterService.setCount(num);
  }
}
