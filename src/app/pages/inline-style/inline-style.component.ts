import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inline-style',
  template: `
    <p>
      inline-style works!
    </p>
  `,
  styles: [
  ]
})
export class InlineStyleComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
