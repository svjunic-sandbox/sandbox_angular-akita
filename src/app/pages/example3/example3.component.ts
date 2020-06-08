import { Component } from '@angular/core';

import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.scss'],
  animations: [
    trigger('animateState', [
      state(
        'timing1',
        style({
          transform: 'translateX(0px) translateY(0px) rotate(0deg)',
          opacity: 1,
          backgroundColor: '#ff0',
        })
      ),
      state(
        'timing2',
        style({
          transform: 'translateX(200px) translateY(300px) rotate(1360deg)',
          opacity: 0.5,
          backgroundColor: '#f90',
        })
      ),
      state(
        'timing3',
        style({
          transform: 'translateX(100px) translateY(0px) rotate(360deg)',
          opacity: 1,
          backgroundColor: '#000',
        })
      ),
      transition('timing1 => timing2', [animate('3s 100ms ease-out')]),
      transition('timing2 => timing3', [animate('1.5s 0s ease-in-out')]),
      transition('timing3 => timing1', [animate('0.6s 0s ease-out')]),
    ]),
  ],
})
export class Example3Component {
  state = 1;
  _animateState: string;

  constructor() {
    this._animateState = `timing${this.state}`;
  }

  handleClick() {
    this.state++;
    if (this.state > 3) {
      this.state = 1;
    }
    this._animateState = `timing${this.state}`;
  }
}
