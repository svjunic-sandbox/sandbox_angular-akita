import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top',
  templateUrl: './top.component.html',
  styleUrls: ['./top.component.scss'],
})
export class TopComponent implements OnInit {
  hoge = 'mogeta';

  constructor() {}

  ngOnInit(): void {}

  handleInput(e) {
    this.hoge = e.target.value;
  }
}
