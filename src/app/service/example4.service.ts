import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class Example4Service {
  _text = '';

  textChange$ = new BehaviorSubject<string>(undefined);

  set text(str: any) {
    if (typeof str === 'string') {
      this._text = str;
      this.textChange$.next(str);
    }
  }

  get text() {
    return this._text;
  }
}
