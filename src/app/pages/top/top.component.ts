import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { CounterService, CounterQuery } from '~/service/counter';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss']
})
export class TopComponent implements OnInit {
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
