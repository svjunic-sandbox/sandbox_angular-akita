import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { getEntityType } from '@datorama/akita';

import { IExample1CountListObject, Example1Service, Example1Query } from '~/service/example1';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
})
export class Example1Component implements OnInit {
  isLoading = false;

  allState$: Observable<getEntityType<IExample1CountListObject>[]>;

  constructor(private example1Service: Example1Service, private example1Query: Example1Query) {
    this.isLoading = true;
    example1Service.getList().subscribe(() => {
      this.isLoading = false;
      console.log(this);
      console.log(this.example1Service);
      this.allState$ = this.example1Query.selectAll();
    });
  }

  ngOnInit(): void {}
}
