import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';

import { getEntityType } from '@datorama/akita';

import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { IExample1CountListObject, Example1Service, Example1Query } from '~/service/example1';

@Component({
  selector: 'app-example1mat',
  templateUrl: './example1mat.component.html',
  styleUrls: ['./example1mat.component.scss'],
})
export class Example1matComponent implements OnInit {
  isLoading = false;

  //コレもホントはstoreへ
  displayedColumns = ['tagname', 'count'];

  countListDataSource = new MatTableDataSource();
  @ViewChild(MatSort, { static: true }) sort: MatSort;
  allState$: Observable<getEntityType<IExample1CountListObject>[]>;

  constructor(private example1Service: Example1Service, private example1Query: Example1Query) {
    this.isLoading = true;
    this.allState$ = this.example1Query.selectAll();

    example1Service.getList().subscribe(() => {
      this.allState$.subscribe((list) => {
        this.countListDataSource.data = list;
        this.isLoading = false;
      });
    });
  }

  ngOnInit(): void {
    this.countListDataSource.sort = this.sort;
  }

  handleReloadClick() {
    this.example1Service.getList().subscribe(() => {
      this.allState$.subscribe((list) => {
        this.countListDataSource.data = list;
        this.isLoading = false;
      });
    });
  }
}
