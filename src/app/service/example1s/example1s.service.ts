import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Example1sService {
  _count = 0;

  count$ = new BehaviorSubject<number>(this._count);

  set count(num: any) {
    if (typeof num === 'number') {
      this._count = num;
      this.count$.next(num);
    }
  }

  get count() {
    return this._count;
  }

  increment() {
    this.count++;
  }

  getCount(): number {
    return this.count;
  }
}
