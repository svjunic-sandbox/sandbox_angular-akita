import { Component, OnInit } from '@angular/core';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Example1Service, Example1Query } from '~/service/example1';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss']
})
export class Example1Component implements OnInit {
  isLoading = false;

  constructor(private example1Service: Example1Service, private example1Query: Example1Query) {
    this.isLoading = true;
    example1Service.getList().subscribe(() => (this.isLoading = false));

    //tagsService.getList().subscribe(() => {
    //  this.isLoading = false;
    //  this.countListDataSource.data = this.countList;
    //});
  }

  ngOnInit(): void {}
}
